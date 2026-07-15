import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { IfcImporter } from "@thatopen/fragments";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const modelsDir = path.join(root, "assets", "models");
const wasmDir = `${path.join(root, "node_modules", "web-ifc")}${path.sep}`;

const models = [
  { source: "TEST-IFC.ifc", output: "TEST-IFC.frag", id: "TEST-IFC" },
  { source: "IFC-02.ifc", output: "IFC-02.frag", id: "IFC-02" },
];

await mkdir(modelsDir, { recursive: true });

for (const model of models) {
  const inputPath = path.join(modelsDir, model.source);
  const outputPath = path.join(modelsDir, model.output);
  const source = new Uint8Array(await readFile(inputPath));
  const importer = new IfcImporter();

  importer.wasm = { path: wasmDir, absolute: true };
  importer.webIfcSettings.COORDINATE_TO_ORIGIN = true;

  let lastPercent = -1;
  const fragments = await importer.process({
    id: model.id,
    bytes: source,
    raw: false,
    progressCallback(progress) {
      const percent = Math.round(Math.max(0, Math.min(1, Number(progress))) * 100);
      if (percent >= lastPercent + 10 || percent === 100) {
        process.stdout.write(`${model.source}: ${percent}%\n`);
        lastPercent = percent;
      }
    },
  });

  await writeFile(outputPath, fragments);
  process.stdout.write(
    `${model.source} -> ${model.output} (${(fragments.byteLength / 1024 / 1024).toFixed(2)} MB)\n`,
  );
}
