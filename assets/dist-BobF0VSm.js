import { $ as e, A as t, At as n, B as r, Bt as i, C as a, Ct as o, D as s, Dt as c, E as l, Et as u, Ft as d, H as f, I as p, It as m, J as h, K as g, L as _, Lt as v, M as y, Mt as b, N as x, Nt as S, O as C, Ot as w, Pt as T, Q as E, R as D, Rt as O, S as k, St as A, T as j, Tt as M, U as N, V as ee, Vt as P, W as F, X as I, Y as L, Z as R, _ as te, _t as ne, a as re, at as ie, b as ae, bt as oe, c as se, ct as ce, d as le, dt as ue, et as z, f as de, ft as fe, g as pe, gt as me, h as he, ht as ge, i as _e, it as B, j as ve, jt as ye, k as be, kt as xe, l as V, lt as H, m as Se, mt as Ce, n as we, nt as Te, o as Ee, ot as De, p as Oe, pt as ke, q as Ae, r as je, rt as Me, s as Ne, st as Pe, t as Fe, tt as Ie, u as Le, ut as U, v as Re, vt as ze, w as Be, wt as Ve, x as He, xt as Ue, y as We, yt as Ge, z as W, zt as G } from "./TransformControls-DZtwFk1y.js";
import Ke from "https://cdn.jsdelivr.net/npm/opentype.js@1.3.4/+esm";
//#region node_modules/.pnpm/three@0.185.1/node_modules/three/examples/jsm/renderers/CSS2DRenderer.js
var qe = class extends Ce {
	constructor(e = document.createElement("div")) {
		super(), this.isCSS2DObject = !0, this.element = e, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.center = new O(.5, .5), this.addEventListener("removed", function() {
			this.traverse(function(e) {
				e.element && e.element instanceof e.element.ownerDocument.defaultView.Element && e.element.parentNode !== null && e.element.remove();
			});
		});
	}
	copy(e, t) {
		return super.copy(e, t), this.element = e.element.cloneNode(!0), this.center = e.center, this;
	}
};
new G(), new H(), new H(), new G(), new G();
//#endregion
//#region node_modules/.pnpm/three@0.185.1/node_modules/three/examples/jsm/loaders/TTFLoader.js
var Je = class extends ie {
	constructor(e) {
		super(e), this.reversed = !1;
	}
	load(e, t, n, r) {
		let i = this, a = new Ae(this.manager);
		a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(n) {
			try {
				t(i.parse(n));
			} catch (t) {
				r ? r(t) : console.error(t), i.manager.itemError(e);
			}
		}, n, r);
	}
	parse(e) {
		function t(e, t) {
			let r = Math.round, i = {}, a = 1e5 / ((e.unitsPerEm || 2048) * 72), o = e.encoding.cmap.glyphIndexMap, s = Object.keys(o);
			for (let c = 0; c < s.length; c++) {
				let l = s[c], u = e.glyphs.glyphs[o[l]];
				if (l !== void 0) {
					let e = {
						ha: r(u.advanceWidth * a),
						x_min: r(u.xMin * a),
						x_max: r(u.xMax * a),
						o: ""
					};
					t && (u.path.commands = n(u.path.commands)), u.path.commands.forEach(function(t) {
						t.type.toLowerCase() === "c" && (t.type = "b"), e.o += t.type.toLowerCase() + " ", t.x !== void 0 && t.y !== void 0 && (e.o += r(t.x * a) + " " + r(t.y * a) + " "), t.x1 !== void 0 && t.y1 !== void 0 && (e.o += r(t.x1 * a) + " " + r(t.y1 * a) + " "), t.x2 !== void 0 && t.y2 !== void 0 && (e.o += r(t.x2 * a) + " " + r(t.y2 * a) + " ");
					}), Array.isArray(u.unicodes) && u.unicodes.length > 0 ? u.unicodes.forEach(function(t) {
						i[String.fromCodePoint(t)] = e;
					}) : i[String.fromCodePoint(u.unicode)] = e;
				}
			}
			return {
				glyphs: i,
				familyName: e.getEnglishName("fullName"),
				ascender: r(e.ascender * a),
				descender: r(e.descender * a),
				underlinePosition: e.tables.post.underlinePosition,
				underlineThickness: e.tables.post.underlineThickness,
				boundingBox: {
					xMin: e.tables.head.xMin,
					xMax: e.tables.head.xMax,
					yMin: e.tables.head.yMin,
					yMax: e.tables.head.yMax
				},
				resolution: 1e3,
				original_font_information: e.tables.name
			};
		}
		function n(e) {
			let t = [], n;
			e.forEach(function(e) {
				e.type.toLowerCase() === "m" ? (n = [e], t.push(n)) : e.type.toLowerCase() !== "z" && n.push(e);
			});
			let r = [];
			return t.forEach(function(e) {
				let t = {
					type: "m",
					x: e[e.length - 1].x,
					y: e[e.length - 1].y
				};
				r.push(t);
				for (let t = e.length - 1; t > 0; t--) {
					let n = e[t], i = { type: n.type };
					n.x2 !== void 0 && n.y2 !== void 0 ? (i.x1 = n.x2, i.y1 = n.y2, i.x2 = n.x1, i.y2 = n.y1) : n.x1 !== void 0 && n.y1 !== void 0 && (i.x1 = n.x1, i.y1 = n.y1), i.x = e[t - 1].x, i.y = e[t - 1].y, r.push(i);
				}
			}), r;
		}
		return t(Ke.parse(e), this.reversed);
	}
}, Ye = class {
	constructor(e) {
		this.isFont = !0, this.type = "Font", this.data = e;
	}
	generateShapes(e, t = 100, n = "ltr") {
		let r = [], i = Xe(e, t, this.data, n);
		for (let e = 0, t = i.length; e < t; e++) r.push(...i[e].toShapes());
		return r;
	}
};
function Xe(e, t, n, r) {
	let i = Array.from(e), a = t / n.resolution, o = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * a, s = [], c = 0, l = 0;
	(r == "rtl" || r == "tb") && i.reverse();
	for (let e = 0; e < i.length; e++) {
		let t = i[e];
		if (t === "\n") c = 0, l -= o;
		else {
			let e = Ze(t, a, c, l, n);
			r == "tb" ? (c = 0, l += n.ascender * a) : c += e.offsetX, s.push(e.path);
		}
	}
	return s;
}
function Ze(e, t, r, i, a) {
	let o = a.glyphs[e] || a.glyphs["?"];
	if (!o) {
		console.error("THREE.Font: character \"" + e + "\" does not exists in font family " + a.familyName + ".");
		return;
	}
	let s = new n(), c, l, u, d, f, p, m, h;
	if (o.o) {
		let e = o._cachedOutline ||= o.o.split(" ");
		for (let n = 0, a = e.length; n < a;) switch (e[n++]) {
			case "m":
				c = e[n++] * t + r, l = e[n++] * t + i, s.moveTo(c, l);
				break;
			case "l":
				c = e[n++] * t + r, l = e[n++] * t + i, s.lineTo(c, l);
				break;
			case "q":
				u = e[n++] * t + r, d = e[n++] * t + i, f = e[n++] * t + r, p = e[n++] * t + i, s.quadraticCurveTo(f, p, u, d);
				break;
			case "b":
				u = e[n++] * t + r, d = e[n++] * t + i, f = e[n++] * t + r, p = e[n++] * t + i, m = e[n++] * t + r, h = e[n++] * t + i, s.bezierCurveTo(f, p, m, h, u, d);
				break;
		}
	}
	return {
		offsetX: o.ha * t,
		path: s
	};
}
//#endregion
//#region node_modules/.pnpm/@thatopen+components-front@_fc49ebd0ac218a953ccb9013f39a0b44/node_modules/@thatopen/components-front/dist/index.js
var Qe = Object.defineProperty, $e = (e, t, n) => t in e ? Qe(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, K = (e, t, n) => ($e(e, typeof t == "symbol" ? t : t + "", n), n), et = {
	LEFT: 1,
	RIGHT: 2,
	MIDDLE: 4
}, q = Object.freeze({
	NONE: 0,
	ROTATE: 1,
	TRUCK: 2,
	SCREEN_PAN: 4,
	OFFSET: 8,
	DOLLY: 16,
	ZOOM: 32,
	TOUCH_ROTATE: 64,
	TOUCH_TRUCK: 128,
	TOUCH_SCREEN_PAN: 256,
	TOUCH_OFFSET: 512,
	TOUCH_DOLLY: 1024,
	TOUCH_ZOOM: 2048,
	TOUCH_DOLLY_TRUCK: 4096,
	TOUCH_DOLLY_SCREEN_PAN: 8192,
	TOUCH_DOLLY_OFFSET: 16384,
	TOUCH_DOLLY_ROTATE: 32768,
	TOUCH_ZOOM_TRUCK: 65536,
	TOUCH_ZOOM_OFFSET: 131072,
	TOUCH_ZOOM_SCREEN_PAN: 262144,
	TOUCH_ZOOM_ROTATE: 524288
}), tt = {
	NONE: 0,
	IN: 1,
	OUT: -1
};
function nt(e) {
	return e.isPerspectiveCamera;
}
function rt(e) {
	return e.isOrthographicCamera;
}
var it = Math.PI * 2, at = Math.PI / 2, ot = 1e-5, st = Math.PI / 180;
function ct(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function lt(e, t = ot) {
	return Math.abs(e) < t;
}
function ut(e, t, n = ot) {
	return lt(e - t, n);
}
function dt(e, t) {
	return Math.round(e / t) * t;
}
function ft(e) {
	return isFinite(e) ? e : e < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function pt(e) {
	return Math.abs(e) < Number.MAX_VALUE ? e : e * Infinity;
}
function mt(e, t, n, r, i = Infinity, a) {
	r = Math.max(1e-4, r);
	let o = 2 / r, s = o * a, c = 1 / (1 + s + .48 * s * s + .235 * s * s * s), l = e - t, u = t, d = i * r;
	l = ct(l, -d, d), t = e - l;
	let f = (n.value + o * l) * a;
	n.value = (n.value - o * f) * c;
	let p = t + (l + f) * c;
	return u - e > 0 == p > u && (p = u, n.value = (p - u) / a), p;
}
function ht(e, t, n, r, i = Infinity, a, o) {
	r = Math.max(1e-4, r);
	let s = 2 / r, c = s * a, l = 1 / (1 + c + .48 * c * c + .235 * c * c * c), u = t.x, d = t.y, f = t.z, p = e.x - u, m = e.y - d, h = e.z - f, g = u, _ = d, v = f, y = i * r, b = y * y, x = p * p + m * m + h * h;
	if (x > b) {
		let e = Math.sqrt(x);
		p = p / e * y, m = m / e * y, h = h / e * y;
	}
	u = e.x - p, d = e.y - m, f = e.z - h;
	let S = (n.x + s * p) * a, C = (n.y + s * m) * a, w = (n.z + s * h) * a;
	n.x = (n.x - s * S) * l, n.y = (n.y - s * C) * l, n.z = (n.z - s * w) * l, o.x = u + (p + S) * l, o.y = d + (m + C) * l, o.z = f + (h + w) * l;
	let T = g - e.x, E = _ - e.y, D = v - e.z, O = o.x - g, k = o.y - _, A = o.z - v;
	return T * O + E * k + D * A > 0 && (o.x = g, o.y = _, o.z = v, n.x = (o.x - g) / a, n.y = (o.y - _) / a, n.z = (o.z - v) / a), o;
}
function gt(e, t) {
	t.set(0, 0), e.forEach((e) => {
		t.x += e.clientX, t.y += e.clientY;
	}), t.x /= e.length, t.y /= e.length;
}
function _t(e, t) {
	return rt(e) ? (console.warn(`${t} is not supported in OrthographicCamera`), !0) : !1;
}
var vt = class {
	constructor() {
		K(this, "_listeners", {});
	}
	addEventListener(e, t) {
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners[e];
		if (n !== void 0) {
			let e = n.indexOf(t);
			e !== -1 && n.splice(e, 1);
		}
	}
	removeAllEventListeners(e) {
		if (!e) {
			this._listeners = {};
			return;
		}
		Array.isArray(this._listeners[e]) && (this._listeners[e].length = 0);
	}
	dispatchEvent(e) {
		let t = this._listeners[e.type];
		if (t !== void 0) {
			e.target = this;
			let n = t.slice(0);
			for (let t = 0, r = n.length; t < r; t++) n[t].call(this, e);
		}
	}
}, yt = "3.1.2", bt = 1 / 8, xt = /Mac/.test((globalThis == null ? void 0 : globalThis.navigator)?.platform), J, St, Ct, wt, Tt, Y, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut = class e extends vt {
	constructor(t, n) {
		super(), K(this, "minPolarAngle", 0), K(this, "maxPolarAngle", Math.PI), K(this, "minAzimuthAngle", -Infinity), K(this, "maxAzimuthAngle", Infinity), K(this, "minDistance", 2 ** -52), K(this, "maxDistance", Infinity), K(this, "infinityDolly", !1), K(this, "minZoom", .01), K(this, "maxZoom", Infinity), K(this, "smoothTime", .25), K(this, "draggingSmoothTime", .125), K(this, "maxSpeed", Infinity), K(this, "azimuthRotateSpeed", 1), K(this, "polarRotateSpeed", 1), K(this, "dollySpeed", 1), K(this, "dollyDragInverted", !1), K(this, "truckSpeed", 2), K(this, "dollyToCursor", !1), K(this, "dragToOffset", !1), K(this, "boundaryFriction", 0), K(this, "restThreshold", .01), K(this, "colliderMeshes", []), K(this, "mouseButtons"), K(this, "touches"), K(this, "cancel", () => {}), K(this, "lockPointer"), K(this, "unlockPointer"), K(this, "_enabled", !0), K(this, "_camera"), K(this, "_yAxisUpSpace"), K(this, "_yAxisUpSpaceInverse"), K(this, "_state", q.NONE), K(this, "_domElement"), K(this, "_viewport", null), K(this, "_target"), K(this, "_targetEnd"), K(this, "_focalOffset"), K(this, "_focalOffsetEnd"), K(this, "_spherical"), K(this, "_sphericalEnd"), K(this, "_lastDistance"), K(this, "_zoom"), K(this, "_zoomEnd"), K(this, "_lastZoom"), K(this, "_cameraUp0"), K(this, "_target0"), K(this, "_position0"), K(this, "_zoom0"), K(this, "_focalOffset0"), K(this, "_dollyControlCoord"), K(this, "_changedDolly", 0), K(this, "_changedZoom", 0), K(this, "_nearPlaneCorners"), K(this, "_hasRested", !0), K(this, "_boundary"), K(this, "_boundaryEnclosesCamera", !1), K(this, "_needsUpdate", !0), K(this, "_updatedLastTime", !1), K(this, "_elementRect", new DOMRect()), K(this, "_isDragging", !1), K(this, "_dragNeedsUpdate", !0), K(this, "_activePointers", []), K(this, "_lockedPointer", null), K(this, "_interactiveArea", new DOMRect(0, 0, 1, 1)), K(this, "_isUserControllingRotate", !1), K(this, "_isUserControllingDolly", !1), K(this, "_isUserControllingTruck", !1), K(this, "_isUserControllingOffset", !1), K(this, "_isUserControllingZoom", !1), K(this, "_lastDollyDirection", tt.NONE), K(this, "_thetaVelocity", { value: 0 }), K(this, "_phiVelocity", { value: 0 }), K(this, "_radiusVelocity", { value: 0 }), K(this, "_targetVelocity", new J.Vector3()), K(this, "_focalOffsetVelocity", new J.Vector3()), K(this, "_zoomVelocity", { value: 0 }), K(this, "_truckInternal", (e, t, n, r) => {
			let i, a;
			if (nt(this._camera)) {
				let n = Y.copy(this._camera.position).sub(this._target), r = this._camera.getEffectiveFOV() * st, o = n.length() * Math.tan(r * .5);
				i = this.truckSpeed * e * o / this._elementRect.height, a = this.truckSpeed * t * o / this._elementRect.height;
			} else if (rt(this._camera)) {
				let n = this._camera;
				i = this.truckSpeed * e * (n.right - n.left) / n.zoom / this._elementRect.width, a = this.truckSpeed * t * (n.top - n.bottom) / n.zoom / this._elementRect.height;
			} else return;
			r ? (n ? this.setFocalOffset(this._focalOffsetEnd.x + i, this._focalOffsetEnd.y, this._focalOffsetEnd.z, !0) : this.truck(i, 0, !0), this.forward(-a, !0)) : n ? this.setFocalOffset(this._focalOffsetEnd.x + i, this._focalOffsetEnd.y + a, this._focalOffsetEnd.z, !0) : this.truck(i, a, !0);
		}), K(this, "_rotateInternal", (e, t) => {
			let n = it * this.azimuthRotateSpeed * e / this._elementRect.height, r = it * this.polarRotateSpeed * t / this._elementRect.height;
			this.rotate(n, r, !0);
		}), K(this, "_dollyInternal", (e, t, n) => {
			let r = .95 ** (-e * this.dollySpeed), i = this._sphericalEnd.radius, a = this._sphericalEnd.radius * r, o = ct(a, this.minDistance, this.maxDistance), s = o - a;
			this.infinityDolly && this.dollyToCursor ? this._dollyToNoClamp(a, !0) : (this.infinityDolly && !this.dollyToCursor && this.dollyInFixed(s, !0), this._dollyToNoClamp(o, !0)), this.dollyToCursor && (this._changedDolly += (this.infinityDolly ? a : o) - i, this._dollyControlCoord.set(t, n)), this._lastDollyDirection = Math.sign(-e);
		}), K(this, "_zoomInternal", (e, t, n) => {
			let r = .95 ** (e * this.dollySpeed), i = this._zoom, a = this._zoom * r;
			this.zoomTo(a, !0), this.dollyToCursor && (this._changedZoom += a - i, this._dollyControlCoord.set(t, n));
		}), typeof J > "u" && console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."), this._camera = t, this._yAxisUpSpace = new J.Quaternion().setFromUnitVectors(this._camera.up, Ct), this._yAxisUpSpaceInverse = this._yAxisUpSpace.clone().invert(), this._state = q.NONE, this._target = new J.Vector3(), this._targetEnd = this._target.clone(), this._focalOffset = new J.Vector3(), this._focalOffsetEnd = this._focalOffset.clone(), this._spherical = new J.Spherical().setFromVector3(Y.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)), this._sphericalEnd = this._spherical.clone(), this._lastDistance = this._spherical.radius, this._zoom = this._camera.zoom, this._zoomEnd = this._zoom, this._lastZoom = this._zoom, this._nearPlaneCorners = [
			new J.Vector3(),
			new J.Vector3(),
			new J.Vector3(),
			new J.Vector3()
		], this._updateNearPlaneCorners(), this._boundary = new J.Box3(new J.Vector3(-Infinity, -Infinity, -Infinity), new J.Vector3(Infinity, Infinity, Infinity)), this._cameraUp0 = this._camera.up.clone(), this._target0 = this._target.clone(), this._position0 = this._camera.position.clone(), this._zoom0 = this._zoom, this._focalOffset0 = this._focalOffset.clone(), this._dollyControlCoord = new J.Vector2(), this.mouseButtons = {
			left: q.ROTATE,
			middle: q.DOLLY,
			right: q.TRUCK,
			wheel: nt(this._camera) ? q.DOLLY : rt(this._camera) ? q.ZOOM : q.NONE
		}, this.touches = {
			one: q.TOUCH_ROTATE,
			two: nt(this._camera) ? q.TOUCH_DOLLY_TRUCK : rt(this._camera) ? q.TOUCH_ZOOM_TRUCK : q.NONE,
			three: q.TOUCH_TRUCK
		};
		let r = new J.Vector2(), i = new J.Vector2(), a = new J.Vector2(), o = (e) => {
			if (!this._enabled || !this._domElement) return;
			if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
				let t = this._domElement.getBoundingClientRect(), n = e.clientX / t.width, r = e.clientY / t.height;
				if (n < this._interactiveArea.left || n > this._interactiveArea.right || r < this._interactiveArea.top || r > this._interactiveArea.bottom) return;
			}
			let t = e.pointerType === "mouse" ? (e.buttons & et.LEFT) === et.LEFT ? et.LEFT : (e.buttons & et.MIDDLE) === et.MIDDLE ? et.MIDDLE : (e.buttons & et.RIGHT) === et.RIGHT ? et.RIGHT : null : null;
			if (t !== null) {
				let e = this._findPointerByMouseButton(t);
				e && this._disposePointer(e);
			}
			if ((e.buttons & et.LEFT) === et.LEFT && this._lockedPointer) return;
			let n = {
				pointerId: e.pointerId,
				clientX: e.clientX,
				clientY: e.clientY,
				deltaX: 0,
				deltaY: 0,
				mouseButton: t
			};
			this._activePointers.push(n), this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c), this._domElement.ownerDocument.addEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.addEventListener("pointerup", c), this._isDragging = !0, f(e);
		}, s = (e) => {
			e.cancelable && e.preventDefault();
			let t = e.pointerId, n = this._lockedPointer || this._findPointerById(t);
			if (n) {
				if (n.clientX = e.clientX, n.clientY = e.clientY, n.deltaX = e.movementX, n.deltaY = e.movementY, this._state = 0, e.pointerType === "touch") switch (this._activePointers.length) {
					case 1:
						this._state = this.touches.one;
						break;
					case 2:
						this._state = this.touches.two;
						break;
					case 3:
						this._state = this.touches.three;
						break;
				}
				else (!this._isDragging && this._lockedPointer || this._isDragging && (e.buttons & et.LEFT) === et.LEFT) && (this._state |= this.mouseButtons.left), this._isDragging && (e.buttons & et.MIDDLE) === et.MIDDLE && (this._state |= this.mouseButtons.middle), this._isDragging && (e.buttons & et.RIGHT) === et.RIGHT && (this._state |= this.mouseButtons.right);
				p();
			}
		}, c = (e) => {
			let t = this._findPointerById(e.pointerId);
			if (!(t && t === this._lockedPointer)) {
				if (t && this._disposePointer(t), e.pointerType === "touch") switch (this._activePointers.length) {
					case 0:
						this._state = q.NONE;
						break;
					case 1:
						this._state = this.touches.one;
						break;
					case 2:
						this._state = this.touches.two;
						break;
					case 3:
						this._state = this.touches.three;
						break;
				}
				else this._state = q.NONE;
				m();
			}
		}, l = -1, u = (e) => {
			if (!this._domElement || !this._enabled || this.mouseButtons.wheel === q.NONE) return;
			if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
				let t = this._domElement.getBoundingClientRect(), n = e.clientX / t.width, r = e.clientY / t.height;
				if (n < this._interactiveArea.left || n > this._interactiveArea.right || r < this._interactiveArea.top || r > this._interactiveArea.bottom) return;
			}
			if (e.preventDefault(), this.dollyToCursor || this.mouseButtons.wheel === q.ROTATE || this.mouseButtons.wheel === q.TRUCK) {
				let e = performance.now();
				l - e < 1e3 && this._getClientRect(this._elementRect), l = e;
			}
			let t = xt ? -1 : -3, n = e.deltaMode === 1 && !e.ctrlKey ? e.deltaY / t : e.deltaY / (t * 10), r = this.dollyToCursor ? (e.clientX - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, i = this.dollyToCursor ? (e.clientY - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
			switch (e.ctrlKey ? q.ZOOM : this.mouseButtons.wheel) {
				case q.ROTATE:
					this._rotateInternal(e.deltaX, e.deltaY), this._isUserControllingRotate = !0;
					break;
				case q.TRUCK:
					this._truckInternal(e.deltaX, e.deltaY, !1, !1), this._isUserControllingTruck = !0;
					break;
				case q.SCREEN_PAN:
					this._truckInternal(e.deltaX, e.deltaY, !1, !0), this._isUserControllingTruck = !0;
					break;
				case q.OFFSET:
					this._truckInternal(e.deltaX, e.deltaY, !0, !1), this._isUserControllingOffset = !0;
					break;
				case q.DOLLY:
					this._dollyInternal(-n, r, i), this._isUserControllingDolly = !0;
					break;
				case q.ZOOM:
					this._zoomInternal(-n, r, i), this._isUserControllingZoom = !0;
					break;
			}
			this.dispatchEvent({ type: "control" });
		}, d = (t) => {
			if (!(!this._domElement || !this._enabled)) {
				if (this.mouseButtons.right === e.ACTION.NONE) {
					let e = t instanceof PointerEvent ? t.pointerId : 0, n = this._findPointerById(e);
					n && this._disposePointer(n), this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c);
					return;
				}
				t.preventDefault();
			}
		}, f = (e) => {
			if (this._enabled) {
				if (gt(this._activePointers, Tt), this._getClientRect(this._elementRect), r.copy(Tt), i.copy(Tt), this._activePointers.length >= 2) {
					let e = Tt.x - this._activePointers[1].clientX, t = Tt.y - this._activePointers[1].clientY, n = Math.sqrt(e * e + t * t);
					a.set(0, n);
					let r = (this._activePointers[0].clientX + this._activePointers[1].clientX) * .5, o = (this._activePointers[0].clientY + this._activePointers[1].clientY) * .5;
					i.set(r, o);
				}
				if (this._state = 0, !e) this._lockedPointer && (this._state |= this.mouseButtons.left);
				else if ("pointerType" in e && e.pointerType === "touch") switch (this._activePointers.length) {
					case 1:
						this._state = this.touches.one;
						break;
					case 2:
						this._state = this.touches.two;
						break;
					case 3:
						this._state = this.touches.three;
						break;
				}
				else !this._lockedPointer && (e.buttons & et.LEFT) === et.LEFT && (this._state |= this.mouseButtons.left), (e.buttons & et.MIDDLE) === et.MIDDLE && (this._state |= this.mouseButtons.middle), (e.buttons & et.RIGHT) === et.RIGHT && (this._state |= this.mouseButtons.right);
				((this._state & q.ROTATE) === q.ROTATE || (this._state & q.TOUCH_ROTATE) === q.TOUCH_ROTATE || (this._state & q.TOUCH_DOLLY_ROTATE) === q.TOUCH_DOLLY_ROTATE || (this._state & q.TOUCH_ZOOM_ROTATE) === q.TOUCH_ZOOM_ROTATE) && (this._sphericalEnd.theta = this._spherical.theta, this._sphericalEnd.phi = this._spherical.phi, this._thetaVelocity.value = 0, this._phiVelocity.value = 0), ((this._state & q.TRUCK) === q.TRUCK || (this._state & q.SCREEN_PAN) === q.SCREEN_PAN || (this._state & q.TOUCH_TRUCK) === q.TOUCH_TRUCK || (this._state & q.TOUCH_SCREEN_PAN) === q.TOUCH_SCREEN_PAN || (this._state & q.TOUCH_DOLLY_TRUCK) === q.TOUCH_DOLLY_TRUCK || (this._state & q.TOUCH_DOLLY_SCREEN_PAN) === q.TOUCH_DOLLY_SCREEN_PAN || (this._state & q.TOUCH_ZOOM_TRUCK) === q.TOUCH_ZOOM_TRUCK || (this._state & q.TOUCH_ZOOM_SCREEN_PAN) === q.TOUCH_DOLLY_SCREEN_PAN) && (this._targetEnd.copy(this._target), this._targetVelocity.set(0, 0, 0)), ((this._state & q.DOLLY) === q.DOLLY || (this._state & q.TOUCH_DOLLY) === q.TOUCH_DOLLY || (this._state & q.TOUCH_DOLLY_TRUCK) === q.TOUCH_DOLLY_TRUCK || (this._state & q.TOUCH_DOLLY_SCREEN_PAN) === q.TOUCH_DOLLY_SCREEN_PAN || (this._state & q.TOUCH_DOLLY_OFFSET) === q.TOUCH_DOLLY_OFFSET || (this._state & q.TOUCH_DOLLY_ROTATE) === q.TOUCH_DOLLY_ROTATE) && (this._sphericalEnd.radius = this._spherical.radius, this._radiusVelocity.value = 0), ((this._state & q.ZOOM) === q.ZOOM || (this._state & q.TOUCH_ZOOM) === q.TOUCH_ZOOM || (this._state & q.TOUCH_ZOOM_TRUCK) === q.TOUCH_ZOOM_TRUCK || (this._state & q.TOUCH_ZOOM_SCREEN_PAN) === q.TOUCH_ZOOM_SCREEN_PAN || (this._state & q.TOUCH_ZOOM_OFFSET) === q.TOUCH_ZOOM_OFFSET || (this._state & q.TOUCH_ZOOM_ROTATE) === q.TOUCH_ZOOM_ROTATE) && (this._zoomEnd = this._zoom, this._zoomVelocity.value = 0), ((this._state & q.OFFSET) === q.OFFSET || (this._state & q.TOUCH_OFFSET) === q.TOUCH_OFFSET || (this._state & q.TOUCH_DOLLY_OFFSET) === q.TOUCH_DOLLY_OFFSET || (this._state & q.TOUCH_ZOOM_OFFSET) === q.TOUCH_ZOOM_OFFSET) && (this._focalOffsetEnd.copy(this._focalOffset), this._focalOffsetVelocity.set(0, 0, 0)), this.dispatchEvent({ type: "controlstart" });
			}
		}, p = () => {
			if (!this._enabled || !this._dragNeedsUpdate) return;
			this._dragNeedsUpdate = !1, gt(this._activePointers, Tt);
			let e = this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement ? this._lockedPointer || this._activePointers[0] : null, t = e ? -e.deltaX : i.x - Tt.x, n = e ? -e.deltaY : i.y - Tt.y;
			if (i.copy(Tt), ((this._state & q.ROTATE) === q.ROTATE || (this._state & q.TOUCH_ROTATE) === q.TOUCH_ROTATE || (this._state & q.TOUCH_DOLLY_ROTATE) === q.TOUCH_DOLLY_ROTATE || (this._state & q.TOUCH_ZOOM_ROTATE) === q.TOUCH_ZOOM_ROTATE) && (this._rotateInternal(t, n), this._isUserControllingRotate = !0), (this._state & q.DOLLY) === q.DOLLY || (this._state & q.ZOOM) === q.ZOOM) {
				let e = this.dollyToCursor ? (r.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, t = this.dollyToCursor ? (r.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0, i = this.dollyDragInverted ? -1 : 1;
				(this._state & q.DOLLY) === q.DOLLY ? (this._dollyInternal(i * n * bt, e, t), this._isUserControllingDolly = !0) : (this._zoomInternal(i * n * bt, e, t), this._isUserControllingZoom = !0);
			}
			if ((this._state & q.TOUCH_DOLLY) === q.TOUCH_DOLLY || (this._state & q.TOUCH_ZOOM) === q.TOUCH_ZOOM || (this._state & q.TOUCH_DOLLY_TRUCK) === q.TOUCH_DOLLY_TRUCK || (this._state & q.TOUCH_ZOOM_TRUCK) === q.TOUCH_ZOOM_TRUCK || (this._state & q.TOUCH_DOLLY_SCREEN_PAN) === q.TOUCH_DOLLY_SCREEN_PAN || (this._state & q.TOUCH_ZOOM_SCREEN_PAN) === q.TOUCH_ZOOM_SCREEN_PAN || (this._state & q.TOUCH_DOLLY_OFFSET) === q.TOUCH_DOLLY_OFFSET || (this._state & q.TOUCH_ZOOM_OFFSET) === q.TOUCH_ZOOM_OFFSET || (this._state & q.TOUCH_DOLLY_ROTATE) === q.TOUCH_DOLLY_ROTATE || (this._state & q.TOUCH_ZOOM_ROTATE) === q.TOUCH_ZOOM_ROTATE) {
				let e = Tt.x - this._activePointers[1].clientX, t = Tt.y - this._activePointers[1].clientY, n = Math.sqrt(e * e + t * t), r = a.y - n;
				a.set(0, n);
				let o = this.dollyToCursor ? (i.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, s = this.dollyToCursor ? (i.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
				(this._state & q.TOUCH_DOLLY) === q.TOUCH_DOLLY || (this._state & q.TOUCH_DOLLY_ROTATE) === q.TOUCH_DOLLY_ROTATE || (this._state & q.TOUCH_DOLLY_TRUCK) === q.TOUCH_DOLLY_TRUCK || (this._state & q.TOUCH_DOLLY_SCREEN_PAN) === q.TOUCH_DOLLY_SCREEN_PAN || (this._state & q.TOUCH_DOLLY_OFFSET) === q.TOUCH_DOLLY_OFFSET ? (this._dollyInternal(r * bt, o, s), this._isUserControllingDolly = !0) : (this._zoomInternal(r * bt, o, s), this._isUserControllingZoom = !0);
			}
			((this._state & q.TRUCK) === q.TRUCK || (this._state & q.TOUCH_TRUCK) === q.TOUCH_TRUCK || (this._state & q.TOUCH_DOLLY_TRUCK) === q.TOUCH_DOLLY_TRUCK || (this._state & q.TOUCH_ZOOM_TRUCK) === q.TOUCH_ZOOM_TRUCK) && (this._truckInternal(t, n, !1, !1), this._isUserControllingTruck = !0), ((this._state & q.SCREEN_PAN) === q.SCREEN_PAN || (this._state & q.TOUCH_SCREEN_PAN) === q.TOUCH_SCREEN_PAN || (this._state & q.TOUCH_DOLLY_SCREEN_PAN) === q.TOUCH_DOLLY_SCREEN_PAN || (this._state & q.TOUCH_ZOOM_SCREEN_PAN) === q.TOUCH_ZOOM_SCREEN_PAN) && (this._truckInternal(t, n, !1, !0), this._isUserControllingTruck = !0), ((this._state & q.OFFSET) === q.OFFSET || (this._state & q.TOUCH_OFFSET) === q.TOUCH_OFFSET || (this._state & q.TOUCH_DOLLY_OFFSET) === q.TOUCH_DOLLY_OFFSET || (this._state & q.TOUCH_ZOOM_OFFSET) === q.TOUCH_ZOOM_OFFSET) && (this._truckInternal(t, n, !0, !1), this._isUserControllingOffset = !0), this.dispatchEvent({ type: "control" });
		}, m = () => {
			gt(this._activePointers, Tt), i.copy(Tt), this._dragNeedsUpdate = !1, (this._activePointers.length === 0 || this._activePointers.length === 1 && this._activePointers[0] === this._lockedPointer) && (this._isDragging = !1), this._activePointers.length === 0 && this._domElement && (this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c), this.dispatchEvent({ type: "controlend" }));
		};
		this.lockPointer = () => {
			!this._enabled || !this._domElement || (this.cancel(), this._lockedPointer = {
				pointerId: -1,
				clientX: 0,
				clientY: 0,
				deltaX: 0,
				deltaY: 0,
				mouseButton: null
			}, this._activePointers.push(this._lockedPointer), this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c), this._domElement.requestPointerLock(), this._domElement.ownerDocument.addEventListener("pointerlockchange", h), this._domElement.ownerDocument.addEventListener("pointerlockerror", g), this._domElement.ownerDocument.addEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.addEventListener("pointerup", c), f());
		}, this.unlockPointer = () => {
			var e, t, n;
			this._lockedPointer !== null && (this._disposePointer(this._lockedPointer), this._lockedPointer = null), (e = this._domElement) == null || e.ownerDocument.exitPointerLock(), (t = this._domElement) == null || t.ownerDocument.removeEventListener("pointerlockchange", h), (n = this._domElement) == null || n.ownerDocument.removeEventListener("pointerlockerror", g), this.cancel();
		};
		let h = () => {
			this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement || this.unlockPointer();
		}, g = () => {
			this.unlockPointer();
		};
		this._addAllEventListeners = (e) => {
			this._domElement = e, this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none", this._domElement.addEventListener("pointerdown", o), this._domElement.addEventListener("pointercancel", c), this._domElement.addEventListener("wheel", u, { passive: !1 }), this._domElement.addEventListener("contextmenu", d);
		}, this._removeAllEventListeners = () => {
			this._domElement && (this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = "", this._domElement.removeEventListener("pointerdown", o), this._domElement.removeEventListener("pointercancel", c), this._domElement.removeEventListener("wheel", u, { passive: !1 }), this._domElement.removeEventListener("contextmenu", d), this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c), this._domElement.ownerDocument.removeEventListener("pointerlockchange", h), this._domElement.ownerDocument.removeEventListener("pointerlockerror", g));
		}, this.cancel = () => {
			this._state !== q.NONE && (this._state = q.NONE, this._activePointers.length = 0, m());
		}, n && this.connect(n), this.update(0);
	}
	static install(e) {
		J = e.THREE, St = Object.freeze(new J.Vector3(0, 0, 0)), Ct = Object.freeze(new J.Vector3(0, 1, 0)), wt = Object.freeze(new J.Vector3(0, 0, 1)), Tt = new J.Vector2(), Y = new J.Vector3(), Et = new J.Vector3(), Dt = new J.Vector3(), Ot = new J.Vector3(), kt = new J.Vector3(), At = new J.Vector3(), jt = new J.Vector3(), Mt = new J.Vector3(), Nt = new J.Vector3(), Pt = new J.Spherical(), Ft = new J.Spherical(), It = new J.Box3(), Lt = new J.Box3(), Rt = new J.Sphere(), zt = new J.Quaternion(), Bt = new J.Quaternion(), Vt = new J.Matrix4(), Ht = new J.Raycaster();
	}
	static get ACTION() {
		return q;
	}
	set verticalDragToForward(e) {
		console.warn("camera-controls: `verticalDragToForward` was removed. Use `mouseButtons.left = CameraControls.ACTION.SCREEN_PAN` instead.");
	}
	get camera() {
		return this._camera;
	}
	set camera(e) {
		this._camera = e, this.updateCameraUp(), this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = !0;
	}
	get enabled() {
		return this._enabled;
	}
	set enabled(e) {
		this._enabled = e, this._domElement && (e ? (this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none") : (this.cancel(), this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = ""));
	}
	get active() {
		return !this._hasRested;
	}
	get currentAction() {
		return this._state;
	}
	get distance() {
		return this._spherical.radius;
	}
	set distance(e) {
		this._spherical.radius === e && this._sphericalEnd.radius === e || (this._spherical.radius = e, this._sphericalEnd.radius = e, this._needsUpdate = !0);
	}
	get azimuthAngle() {
		return this._spherical.theta;
	}
	set azimuthAngle(e) {
		this._spherical.theta === e && this._sphericalEnd.theta === e || (this._spherical.theta = e, this._sphericalEnd.theta = e, this._needsUpdate = !0);
	}
	get polarAngle() {
		return this._spherical.phi;
	}
	set polarAngle(e) {
		this._spherical.phi === e && this._sphericalEnd.phi === e || (this._spherical.phi = e, this._sphericalEnd.phi = e, this._needsUpdate = !0);
	}
	get boundaryEnclosesCamera() {
		return this._boundaryEnclosesCamera;
	}
	set boundaryEnclosesCamera(e) {
		this._boundaryEnclosesCamera = e, this._needsUpdate = !0;
	}
	set interactiveArea(e) {
		this._interactiveArea.width = ct(e.width, 0, 1), this._interactiveArea.height = ct(e.height, 0, 1), this._interactiveArea.x = ct(e.x, 0, 1 - this._interactiveArea.width), this._interactiveArea.y = ct(e.y, 0, 1 - this._interactiveArea.height);
	}
	addEventListener(e, t) {
		super.addEventListener(e, t);
	}
	removeEventListener(e, t) {
		super.removeEventListener(e, t);
	}
	rotate(e, t, n = !1) {
		return this.rotateTo(this._sphericalEnd.theta + e, this._sphericalEnd.phi + t, n);
	}
	rotateAzimuthTo(e, t = !1) {
		return this.rotateTo(e, this._sphericalEnd.phi, t);
	}
	rotatePolarTo(e, t = !1) {
		return this.rotateTo(this._sphericalEnd.theta, e, t);
	}
	rotateTo(e, t, n = !1) {
		this._isUserControllingRotate = !1;
		let r = ct(e, this.minAzimuthAngle, this.maxAzimuthAngle), i = ct(t, this.minPolarAngle, this.maxPolarAngle);
		this._sphericalEnd.theta = r, this._sphericalEnd.phi = i, this._sphericalEnd.makeSafe(), this._needsUpdate = !0, n || (this._spherical.theta = this._sphericalEnd.theta, this._spherical.phi = this._sphericalEnd.phi);
		let a = !n || ut(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && ut(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold);
		return this._createOnRestPromise(a);
	}
	dolly(e, t = !1) {
		return this.dollyTo(this._sphericalEnd.radius - e, t);
	}
	dollyTo(e, t = !1) {
		return this._isUserControllingDolly = !1, this._lastDollyDirection = tt.NONE, this._changedDolly = 0, this._dollyToNoClamp(ct(e, this.minDistance, this.maxDistance), t);
	}
	_dollyToNoClamp(e, t = !1) {
		let n = this._sphericalEnd.radius;
		if (this.colliderMeshes.length >= 1) {
			let t = this._collisionTest(), r = ut(t, this._spherical.radius);
			if (!(n > e) && r) return Promise.resolve();
			this._sphericalEnd.radius = Math.min(e, t);
		} else this._sphericalEnd.radius = e;
		this._needsUpdate = !0, t || (this._spherical.radius = this._sphericalEnd.radius);
		let r = !t || ut(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
		return this._createOnRestPromise(r);
	}
	dollyInFixed(e, t = !1) {
		this._targetEnd.add(this._getCameraDirection(Ot).multiplyScalar(e)), t || this._target.copy(this._targetEnd);
		let n = !t || ut(this._target.x, this._targetEnd.x, this.restThreshold) && ut(this._target.y, this._targetEnd.y, this.restThreshold) && ut(this._target.z, this._targetEnd.z, this.restThreshold);
		return this._createOnRestPromise(n);
	}
	zoom(e, t = !1) {
		return this.zoomTo(this._zoomEnd + e, t);
	}
	zoomTo(e, t = !1) {
		this._isUserControllingZoom = !1, this._zoomEnd = ct(e, this.minZoom, this.maxZoom), this._needsUpdate = !0, t || (this._zoom = this._zoomEnd);
		let n = !t || ut(this._zoom, this._zoomEnd, this.restThreshold);
		return this._changedZoom = 0, this._createOnRestPromise(n);
	}
	pan(e, t, n = !1) {
		return console.warn("`pan` has been renamed to `truck`"), this.truck(e, t, n);
	}
	truck(e, t, n = !1) {
		this._camera.updateMatrix(), kt.setFromMatrixColumn(this._camera.matrix, 0), At.setFromMatrixColumn(this._camera.matrix, 1), kt.multiplyScalar(e), At.multiplyScalar(-t);
		let r = Y.copy(kt).add(At), i = Et.copy(this._targetEnd).add(r);
		return this.moveTo(i.x, i.y, i.z, n);
	}
	forward(e, t = !1) {
		Y.setFromMatrixColumn(this._camera.matrix, 0), Y.crossVectors(this._camera.up, Y), Y.multiplyScalar(e);
		let n = Et.copy(this._targetEnd).add(Y);
		return this.moveTo(n.x, n.y, n.z, t);
	}
	elevate(e, t = !1) {
		return Y.copy(this._camera.up).multiplyScalar(e), this.moveTo(this._targetEnd.x + Y.x, this._targetEnd.y + Y.y, this._targetEnd.z + Y.z, t);
	}
	moveTo(e, t, n, r = !1) {
		this._isUserControllingTruck = !1;
		let i = Y.set(e, t, n).sub(this._targetEnd);
		this._encloseToBoundary(this._targetEnd, i, this.boundaryFriction), this._needsUpdate = !0, r || this._target.copy(this._targetEnd);
		let a = !r || ut(this._target.x, this._targetEnd.x, this.restThreshold) && ut(this._target.y, this._targetEnd.y, this.restThreshold) && ut(this._target.z, this._targetEnd.z, this.restThreshold);
		return this._createOnRestPromise(a);
	}
	lookInDirectionOf(e, t, n, r = !1) {
		let i = Y.set(e, t, n).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);
		return this.setPosition(i.x, i.y, i.z, r);
	}
	fitToBox(e, t, { cover: n = !1, paddingLeft: r = 0, paddingRight: i = 0, paddingBottom: a = 0, paddingTop: o = 0 } = {}) {
		let s = [], c = e.isBox3 ? It.copy(e) : It.setFromObject(e);
		c.isEmpty() && (console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"), Promise.resolve());
		let l = dt(this._sphericalEnd.theta, at), u = dt(this._sphericalEnd.phi, at);
		s.push(this.rotateTo(l, u, t));
		let d = Y.setFromSpherical(this._sphericalEnd).normalize(), f = zt.setFromUnitVectors(d, wt), p = ut(Math.abs(d.y), 1);
		p && f.multiply(Bt.setFromAxisAngle(Ct, l)), f.multiply(this._yAxisUpSpaceInverse);
		let m = Lt.makeEmpty();
		Et.copy(c.min).applyQuaternion(f), m.expandByPoint(Et), Et.copy(c.min).setX(c.max.x).applyQuaternion(f), m.expandByPoint(Et), Et.copy(c.min).setY(c.max.y).applyQuaternion(f), m.expandByPoint(Et), Et.copy(c.max).setZ(c.min.z).applyQuaternion(f), m.expandByPoint(Et), Et.copy(c.min).setZ(c.max.z).applyQuaternion(f), m.expandByPoint(Et), Et.copy(c.max).setY(c.min.y).applyQuaternion(f), m.expandByPoint(Et), Et.copy(c.max).setX(c.min.x).applyQuaternion(f), m.expandByPoint(Et), Et.copy(c.max).applyQuaternion(f), m.expandByPoint(Et), m.min.x -= r, m.min.y -= a, m.max.x += i, m.max.y += o, f.setFromUnitVectors(wt, d), p && f.premultiply(Bt.invert()), f.premultiply(this._yAxisUpSpace);
		let h = m.getSize(Y), g = m.getCenter(Et).applyQuaternion(f);
		if (nt(this._camera)) {
			let e = this.getDistanceToFitBox(h.x, h.y, h.z, n);
			s.push(this.moveTo(g.x, g.y, g.z, t)), s.push(this.dollyTo(e, t)), s.push(this.setFocalOffset(0, 0, 0, t));
		} else if (rt(this._camera)) {
			let e = this._camera, r = e.right - e.left, i = e.top - e.bottom, a = n ? Math.max(r / h.x, i / h.y) : Math.min(r / h.x, i / h.y);
			s.push(this.moveTo(g.x, g.y, g.z, t)), s.push(this.zoomTo(a, t)), s.push(this.setFocalOffset(0, 0, 0, t));
		}
		return Promise.all(s);
	}
	fitToSphere(t, n) {
		let r = [], i = "isObject3D" in t ? e.createBoundingSphere(t, Rt) : Rt.copy(t);
		if (r.push(this.moveTo(i.center.x, i.center.y, i.center.z, n)), nt(this._camera)) {
			let e = this.getDistanceToFitSphere(i.radius);
			r.push(this.dollyTo(e, n));
		} else if (rt(this._camera)) {
			let e = this._camera.right - this._camera.left, t = this._camera.top - this._camera.bottom, a = 2 * i.radius, o = Math.min(e / a, t / a);
			r.push(this.zoomTo(o, n));
		}
		return r.push(this.setFocalOffset(0, 0, 0, n)), Promise.all(r);
	}
	setLookAt(e, t, n, r, i, a, o = !1) {
		this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._lastDollyDirection = tt.NONE, this._changedDolly = 0;
		let s = Et.set(r, i, a), c = Y.set(e, t, n);
		this._targetEnd.copy(s), this._sphericalEnd.setFromVector3(c.sub(s).applyQuaternion(this._yAxisUpSpace)), this._needsUpdate = !0, o || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
		let l = !o || ut(this._target.x, this._targetEnd.x, this.restThreshold) && ut(this._target.y, this._targetEnd.y, this.restThreshold) && ut(this._target.z, this._targetEnd.z, this.restThreshold) && ut(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && ut(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && ut(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
		return this._createOnRestPromise(l);
	}
	lerp(e, t, n, r = !1) {
		this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._lastDollyDirection = tt.NONE, this._changedDolly = 0;
		let i = Y.set(...e.target);
		if ("spherical" in e) Pt.set(...e.spherical);
		else {
			let t = Et.set(...e.position);
			Pt.setFromVector3(t.sub(i).applyQuaternion(this._yAxisUpSpace));
		}
		let a = Dt.set(...t.target);
		if ("spherical" in t) Ft.set(...t.spherical);
		else {
			let e = Et.set(...t.position);
			Ft.setFromVector3(e.sub(a).applyQuaternion(this._yAxisUpSpace));
		}
		this._targetEnd.copy(i.lerp(a, n));
		let o = Ft.theta - Pt.theta, s = Ft.phi - Pt.phi, c = Ft.radius - Pt.radius;
		this._sphericalEnd.set(Pt.radius + c * n, Pt.phi + s * n, Pt.theta + o * n), this._needsUpdate = !0, r || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
		let l = !r || ut(this._target.x, this._targetEnd.x, this.restThreshold) && ut(this._target.y, this._targetEnd.y, this.restThreshold) && ut(this._target.z, this._targetEnd.z, this.restThreshold) && ut(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && ut(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && ut(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
		return this._createOnRestPromise(l);
	}
	lerpLookAt(e, t, n, r, i, a, o, s, c, l, u, d, f, p = !1) {
		return this.lerp({
			position: [
				e,
				t,
				n
			],
			target: [
				r,
				i,
				a
			]
		}, {
			position: [
				o,
				s,
				c
			],
			target: [
				l,
				u,
				d
			]
		}, f, p);
	}
	setPosition(e, t, n, r = !1) {
		return this.setLookAt(e, t, n, this._targetEnd.x, this._targetEnd.y, this._targetEnd.z, r);
	}
	setTarget(e, t, n, r = !1) {
		let i = this.getPosition(Y), a = this.setLookAt(i.x, i.y, i.z, e, t, n, r);
		return this._sphericalEnd.phi = ct(this._sphericalEnd.phi, this.minPolarAngle, this.maxPolarAngle), a;
	}
	setFocalOffset(e, t, n, r = !1) {
		this._isUserControllingOffset = !1, this._focalOffsetEnd.set(e, t, n), this._needsUpdate = !0, r || this._focalOffset.copy(this._focalOffsetEnd);
		let i = !r || ut(this._focalOffset.x, this._focalOffsetEnd.x, this.restThreshold) && ut(this._focalOffset.y, this._focalOffsetEnd.y, this.restThreshold) && ut(this._focalOffset.z, this._focalOffsetEnd.z, this.restThreshold);
		return this._createOnRestPromise(i);
	}
	setOrbitPoint(e, t, n) {
		this._camera.updateMatrixWorld(), kt.setFromMatrixColumn(this._camera.matrixWorldInverse, 0), At.setFromMatrixColumn(this._camera.matrixWorldInverse, 1), jt.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
		let r = Y.set(e, t, n), i = r.distanceTo(this._camera.position), a = r.sub(this._camera.position);
		kt.multiplyScalar(a.x), At.multiplyScalar(a.y), jt.multiplyScalar(a.z), Y.copy(kt).add(At).add(jt), Y.z += i, this.dollyTo(i, !1), this.setFocalOffset(-Y.x, Y.y, -Y.z, !1), this.moveTo(e, t, n, !1);
	}
	setBoundary(e) {
		if (!e) {
			this._boundary.min.set(-Infinity, -Infinity, -Infinity), this._boundary.max.set(Infinity, Infinity, Infinity), this._needsUpdate = !0;
			return;
		}
		this._boundary.copy(e), this._boundary.clampPoint(this._targetEnd, this._targetEnd), this._needsUpdate = !0;
	}
	setViewport(e, t, n, r) {
		if (e === null) {
			this._viewport = null;
			return;
		}
		this._viewport = this._viewport || new J.Vector4(), typeof e == "number" ? this._viewport.set(e, t, n, r) : this._viewport.copy(e);
	}
	getDistanceToFitBox(e, t, n, r = !1) {
		if (_t(this._camera, "getDistanceToFitBox")) return this._spherical.radius;
		let i = e / t, a = this._camera.getEffectiveFOV() * st, o = this._camera.aspect;
		return ((r ? i > o : i < o) ? t : e / o) * .5 / Math.tan(a * .5) + n * .5;
	}
	getDistanceToFitSphere(e) {
		if (_t(this._camera, "getDistanceToFitSphere")) return this._spherical.radius;
		let t = this._camera.getEffectiveFOV() * st, n = Math.atan(Math.tan(t * .5) * this._camera.aspect) * 2, r = 1 < this._camera.aspect ? t : n;
		return e / Math.sin(r * .5);
	}
	getTarget(e, t = !0) {
		return (e && e.isVector3 ? e : new J.Vector3()).copy(t ? this._targetEnd : this._target);
	}
	getPosition(e, t = !0) {
		return (e && e.isVector3 ? e : new J.Vector3()).setFromSpherical(t ? this._sphericalEnd : this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(t ? this._targetEnd : this._target);
	}
	getSpherical(e, t = !0) {
		return (e || new J.Spherical()).copy(t ? this._sphericalEnd : this._spherical);
	}
	getFocalOffset(e, t = !0) {
		return (e && e.isVector3 ? e : new J.Vector3()).copy(t ? this._focalOffsetEnd : this._focalOffset);
	}
	normalizeRotations() {
		return this._sphericalEnd.theta = (this._sphericalEnd.theta % it + it) % it, this._sphericalEnd.theta > Math.PI && (this._sphericalEnd.theta -= it), this._spherical.theta += it * Math.round((this._sphericalEnd.theta - this._spherical.theta) / it), this;
	}
	stop() {
		this._focalOffset.copy(this._focalOffsetEnd), this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd), this._zoom = this._zoomEnd;
	}
	reset(e = !1) {
		if (!ut(this._camera.up.x, this._cameraUp0.x) || !ut(this._camera.up.y, this._cameraUp0.y) || !ut(this._camera.up.z, this._cameraUp0.z)) {
			this._camera.up.copy(this._cameraUp0);
			let e = this.getPosition(Y);
			this.updateCameraUp(), this.setPosition(e.x, e.y, e.z);
		}
		let t = [
			this.setLookAt(this._position0.x, this._position0.y, this._position0.z, this._target0.x, this._target0.y, this._target0.z, e),
			this.setFocalOffset(this._focalOffset0.x, this._focalOffset0.y, this._focalOffset0.z, e),
			this.zoomTo(this._zoom0, e)
		];
		return Promise.all(t);
	}
	saveState() {
		this._cameraUp0.copy(this._camera.up), this.getTarget(this._target0), this.getPosition(this._position0), this._zoom0 = this._zoom, this._focalOffset0.copy(this._focalOffset);
	}
	updateCameraUp() {
		this._yAxisUpSpace.setFromUnitVectors(this._camera.up, Ct), this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert();
	}
	applyCameraUp() {
		let e = Y.subVectors(this._target, this._camera.position).normalize(), t = Et.crossVectors(e, this._camera.up);
		this._camera.up.crossVectors(t, e).normalize(), this._camera.updateMatrixWorld();
		let n = this.getPosition(Y);
		this.updateCameraUp(), this.setPosition(n.x, n.y, n.z);
	}
	update(e) {
		let t = this._sphericalEnd.theta - this._spherical.theta, n = this._sphericalEnd.phi - this._spherical.phi, r = this._sphericalEnd.radius - this._spherical.radius, i = Mt.subVectors(this._targetEnd, this._target), a = Nt.subVectors(this._focalOffsetEnd, this._focalOffset), o = this._zoomEnd - this._zoom;
		if (lt(t)) this._thetaVelocity.value = 0, this._spherical.theta = this._sphericalEnd.theta;
		else {
			let t = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
			this._spherical.theta = mt(this._spherical.theta, this._sphericalEnd.theta, this._thetaVelocity, t, Infinity, e), this._needsUpdate = !0;
		}
		if (lt(n)) this._phiVelocity.value = 0, this._spherical.phi = this._sphericalEnd.phi;
		else {
			let t = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
			this._spherical.phi = mt(this._spherical.phi, this._sphericalEnd.phi, this._phiVelocity, t, Infinity, e), this._needsUpdate = !0;
		}
		if (lt(r)) this._radiusVelocity.value = 0, this._spherical.radius = this._sphericalEnd.radius;
		else {
			let t = this._isUserControllingDolly ? this.draggingSmoothTime : this.smoothTime;
			this._spherical.radius = mt(this._spherical.radius, this._sphericalEnd.radius, this._radiusVelocity, t, this.maxSpeed, e), this._needsUpdate = !0;
		}
		if (lt(i.x) && lt(i.y) && lt(i.z)) this._targetVelocity.set(0, 0, 0), this._target.copy(this._targetEnd);
		else {
			let t = this._isUserControllingTruck ? this.draggingSmoothTime : this.smoothTime;
			ht(this._target, this._targetEnd, this._targetVelocity, t, this.maxSpeed, e, this._target), this._needsUpdate = !0;
		}
		if (lt(a.x) && lt(a.y) && lt(a.z)) this._focalOffsetVelocity.set(0, 0, 0), this._focalOffset.copy(this._focalOffsetEnd);
		else {
			let t = this._isUserControllingOffset ? this.draggingSmoothTime : this.smoothTime;
			ht(this._focalOffset, this._focalOffsetEnd, this._focalOffsetVelocity, t, this.maxSpeed, e, this._focalOffset), this._needsUpdate = !0;
		}
		if (lt(o)) this._zoomVelocity.value = 0, this._zoom = this._zoomEnd;
		else {
			let t = this._isUserControllingZoom ? this.draggingSmoothTime : this.smoothTime;
			this._zoom = mt(this._zoom, this._zoomEnd, this._zoomVelocity, t, Infinity, e);
		}
		if (this.dollyToCursor) {
			if (nt(this._camera) && this._changedDolly !== 0) {
				let e = this._spherical.radius - this._lastDistance, t = this._camera, n = this._getCameraDirection(Ot), r = Y.copy(n).cross(t.up).normalize();
				r.lengthSq() === 0 && (r.x = 1);
				let i = Et.crossVectors(r, n), a = this._sphericalEnd.radius * Math.tan(t.getEffectiveFOV() * st * .5), o = (this._sphericalEnd.radius - e - this._sphericalEnd.radius) / this._sphericalEnd.radius, s = Dt.copy(this._targetEnd).add(r.multiplyScalar(this._dollyControlCoord.x * a * t.aspect)).add(i.multiplyScalar(this._dollyControlCoord.y * a)), c = Y.copy(this._targetEnd).lerp(s, o), l = this._lastDollyDirection === tt.IN && this._spherical.radius <= this.minDistance, u = this._lastDollyDirection === tt.OUT && this.maxDistance <= this._spherical.radius;
				if (this.infinityDolly && (l || u)) {
					this._sphericalEnd.radius -= e, this._spherical.radius -= e;
					let t = Et.copy(n).multiplyScalar(-e);
					c.add(t);
				}
				this._boundary.clampPoint(c, c);
				let d = Et.subVectors(c, this._targetEnd);
				this._targetEnd.copy(c), this._target.add(d), this._changedDolly -= e, lt(this._changedDolly) && (this._changedDolly = 0);
			} else if (rt(this._camera) && this._changedZoom !== 0) {
				let e = this._zoom - this._lastZoom, t = this._camera, n = Y.set(this._dollyControlCoord.x, this._dollyControlCoord.y, (t.near + t.far) / (t.near - t.far)).unproject(t), r = Et.set(0, 0, -1).applyQuaternion(t.quaternion), i = Dt.copy(n).add(r.multiplyScalar(-n.dot(t.up))), a = -(this._zoom - e - this._zoom) / this._zoom, o = this._getCameraDirection(Ot), s = this._targetEnd.dot(o), c = Y.copy(this._targetEnd).lerp(i, a), l = c.dot(o), u = o.multiplyScalar(l - s);
				c.sub(u), this._boundary.clampPoint(c, c);
				let d = Et.subVectors(c, this._targetEnd);
				this._targetEnd.copy(c), this._target.add(d), this._changedZoom -= e, lt(this._changedZoom) && (this._changedZoom = 0);
			}
		}
		this._camera.zoom !== this._zoom && (this._camera.zoom = this._zoom, this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = !0), this._dragNeedsUpdate = !0;
		let s = this._collisionTest();
		this._spherical.radius = Math.min(this._spherical.radius, s), this._spherical.makeSafe(), this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target), this._camera.lookAt(this._target), (!lt(this._focalOffset.x) || !lt(this._focalOffset.y) || !lt(this._focalOffset.z)) && (this._camera.matrix.compose(this._camera.position, this._camera.quaternion, this._camera.scale), kt.setFromMatrixColumn(this._camera.matrix, 0), At.setFromMatrixColumn(this._camera.matrix, 1), jt.setFromMatrixColumn(this._camera.matrix, 2), kt.multiplyScalar(this._focalOffset.x), At.multiplyScalar(-this._focalOffset.y), jt.multiplyScalar(this._focalOffset.z), Y.copy(kt).add(At).add(jt), this._camera.position.add(Y), this._camera.updateMatrixWorld()), this._boundaryEnclosesCamera && this._encloseToBoundary(this._camera.position.copy(this._target), Y.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse), 1);
		let c = this._needsUpdate;
		return c && !this._updatedLastTime ? (this._hasRested = !1, this.dispatchEvent({ type: "wake" }), this.dispatchEvent({ type: "update" })) : c ? (this.dispatchEvent({ type: "update" }), lt(t, this.restThreshold) && lt(n, this.restThreshold) && lt(r, this.restThreshold) && lt(i.x, this.restThreshold) && lt(i.y, this.restThreshold) && lt(i.z, this.restThreshold) && lt(a.x, this.restThreshold) && lt(a.y, this.restThreshold) && lt(a.z, this.restThreshold) && lt(o, this.restThreshold) && !this._hasRested && (this._hasRested = !0, this.dispatchEvent({ type: "rest" }))) : !c && this._updatedLastTime && this.dispatchEvent({ type: "sleep" }), this._lastDistance = this._spherical.radius, this._lastZoom = this._zoom, this._updatedLastTime = c, this._needsUpdate = !1, c;
	}
	toJSON() {
		return JSON.stringify({
			enabled: this._enabled,
			minDistance: this.minDistance,
			maxDistance: ft(this.maxDistance),
			minZoom: this.minZoom,
			maxZoom: ft(this.maxZoom),
			minPolarAngle: this.minPolarAngle,
			maxPolarAngle: ft(this.maxPolarAngle),
			minAzimuthAngle: ft(this.minAzimuthAngle),
			maxAzimuthAngle: ft(this.maxAzimuthAngle),
			smoothTime: this.smoothTime,
			draggingSmoothTime: this.draggingSmoothTime,
			dollySpeed: this.dollySpeed,
			truckSpeed: this.truckSpeed,
			dollyToCursor: this.dollyToCursor,
			target: this._targetEnd.toArray(),
			position: Y.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),
			zoom: this._zoomEnd,
			focalOffset: this._focalOffsetEnd.toArray(),
			target0: this._target0.toArray(),
			position0: this._position0.toArray(),
			zoom0: this._zoom0,
			focalOffset0: this._focalOffset0.toArray()
		});
	}
	fromJSON(e, t = !1) {
		let n = JSON.parse(e);
		this.enabled = n.enabled, this.minDistance = n.minDistance, this.maxDistance = pt(n.maxDistance), this.minZoom = n.minZoom, this.maxZoom = pt(n.maxZoom), this.minPolarAngle = n.minPolarAngle, this.maxPolarAngle = pt(n.maxPolarAngle), this.minAzimuthAngle = pt(n.minAzimuthAngle), this.maxAzimuthAngle = pt(n.maxAzimuthAngle), this.smoothTime = n.smoothTime, this.draggingSmoothTime = n.draggingSmoothTime, this.dollySpeed = n.dollySpeed, this.truckSpeed = n.truckSpeed, this.dollyToCursor = n.dollyToCursor, this._target0.fromArray(n.target0), this._position0.fromArray(n.position0), this._zoom0 = n.zoom0, this._focalOffset0.fromArray(n.focalOffset0), this.moveTo(n.target[0], n.target[1], n.target[2], t), Pt.setFromVector3(Y.fromArray(n.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)), this.rotateTo(Pt.theta, Pt.phi, t), this.dollyTo(Pt.radius, t), this.zoomTo(n.zoom, t), this.setFocalOffset(n.focalOffset[0], n.focalOffset[1], n.focalOffset[2], t), this._needsUpdate = !0;
	}
	connect(e) {
		if (this._domElement) {
			console.warn("camera-controls is already connected.");
			return;
		}
		e.setAttribute("data-camera-controls-version", yt), this._addAllEventListeners(e), this._getClientRect(this._elementRect);
	}
	disconnect() {
		this.cancel(), this._removeAllEventListeners(), this._domElement &&= (this._domElement.removeAttribute("data-camera-controls-version"), void 0);
	}
	dispose() {
		this.removeAllEventListeners(), this.disconnect();
	}
	_getTargetDirection(e) {
		return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse);
	}
	_getCameraDirection(e) {
		return this._getTargetDirection(e).negate();
	}
	_findPointerById(e) {
		return this._activePointers.find((t) => t.pointerId === e);
	}
	_findPointerByMouseButton(e) {
		return this._activePointers.find((t) => t.mouseButton === e);
	}
	_disposePointer(e) {
		this._activePointers.splice(this._activePointers.indexOf(e), 1);
	}
	_encloseToBoundary(e, t, n) {
		let r = t.lengthSq();
		if (r === 0) return e;
		let i = Et.copy(t).add(e), a = this._boundary.clampPoint(i, Dt).sub(i), o = a.lengthSq();
		if (o === 0) return e.add(t);
		if (o === r) return e;
		if (n === 0) return e.add(t).add(a);
		{
			let r = 1 + n * o / t.dot(a);
			return e.add(Et.copy(t).multiplyScalar(r)).add(a.multiplyScalar(1 - n));
		}
	}
	_updateNearPlaneCorners() {
		if (nt(this._camera)) {
			let e = this._camera, t = e.near, n = e.getEffectiveFOV() * st, r = Math.tan(n * .5) * t, i = r * e.aspect;
			this._nearPlaneCorners[0].set(-i, -r, 0), this._nearPlaneCorners[1].set(i, -r, 0), this._nearPlaneCorners[2].set(i, r, 0), this._nearPlaneCorners[3].set(-i, r, 0);
		} else if (rt(this._camera)) {
			let e = this._camera, t = 1 / e.zoom, n = e.left * t, r = e.right * t, i = e.top * t, a = e.bottom * t;
			this._nearPlaneCorners[0].set(n, i, 0), this._nearPlaneCorners[1].set(r, i, 0), this._nearPlaneCorners[2].set(r, a, 0), this._nearPlaneCorners[3].set(n, a, 0);
		}
	}
	_collisionTest() {
		let e = Infinity;
		if (!(this.colliderMeshes.length >= 1) || _t(this._camera, "_collisionTest")) return e;
		let t = this._getTargetDirection(Ot);
		Vt.lookAt(St, t, this._camera.up);
		for (let n = 0; n < 4; n++) {
			let r = Et.copy(this._nearPlaneCorners[n]);
			r.applyMatrix4(Vt);
			let i = Dt.addVectors(this._target, r);
			Ht.set(i, t), Ht.far = this._spherical.radius + 1;
			let a = Ht.intersectObjects(this.colliderMeshes);
			a.length !== 0 && a[0].distance < e && (e = a[0].distance);
		}
		return e;
	}
	_getClientRect(e) {
		if (!this._domElement) return;
		let t = this._domElement.getBoundingClientRect();
		return e.x = t.left, e.y = t.top, this._viewport ? (e.x += this._viewport.x, e.y += t.height - this._viewport.w - this._viewport.y, e.width = this._viewport.z, e.height = this._viewport.w) : (e.width = t.width, e.height = t.height), e;
	}
	_createOnRestPromise(e) {
		return e ? Promise.resolve() : (this._hasRested = !1, this.dispatchEvent({ type: "transitionstart" }), new Promise((e) => {
			let t = () => {
				this.removeEventListener("rest", t), e();
			};
			this.addEventListener("rest", t);
		}));
	}
	_addAllEventListeners(e) {}
	_removeAllEventListeners() {}
	get dampingFactor() {
		return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."), 0;
	}
	set dampingFactor(e) {
		console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.");
	}
	get draggingDampingFactor() {
		return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."), 0;
	}
	set draggingDampingFactor(e) {
		console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.");
	}
	static createBoundingSphere(e, t = new J.Sphere()) {
		let n = t, r = n.center;
		It.makeEmpty(), e.traverseVisible((e) => {
			e.isMesh && It.expandByObject(e);
		}), It.getCenter(r);
		let i = 0;
		return e.traverseVisible((e) => {
			if (!e.isMesh) return;
			let t = e;
			if (!t.geometry) return;
			let n = t.geometry.clone();
			n.applyMatrix4(t.matrixWorld);
			let a = n.attributes.position;
			for (let e = 0, t = a.count; e < t; e++) Y.fromBufferAttribute(a, e), i = Math.max(i, r.distanceToSquared(Y));
		}), n.radius = Math.sqrt(i), n;
	}
}, Wt = Object.defineProperty, Gt = (e, t, n) => t in e ? Wt(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, X = (e, t, n) => (Gt(e, typeof t == "symbol" ? t : t + "", n), n), Z = class {
	constructor() {
		X(this, "enabled", !0), X(this, "trigger", (e) => {
			if (!this.enabled) return;
			let t = this.handlers.slice(0);
			for (let n of t) n(e);
		}), X(this, "handlers", []);
	}
	add(e) {
		this.handlers.push(e);
	}
	remove(e) {
		this.handlers = this.handlers.filter((t) => t !== e);
	}
	reset() {
		this.handlers.length = 0;
	}
}, Kt = class {
	constructor(e) {
		X(this, "isDisposeable", () => "dispose" in this && "onDisposed" in this), X(this, "isResizeable", () => "resize" in this && "getSize" in this), X(this, "isUpdateable", () => "onAfterUpdate" in this && "onBeforeUpdate" in this && "update" in this), X(this, "isHideable", () => "visible" in this), X(this, "isConfigurable", () => "setup" in this && "config" in this && "onSetup" in this), X(this, "isSerializable", () => "import" in this && "export" in this), this.components = e;
	}
}, qt = class extends Kt {}, Jt = class extends Kt {
	constructor(e) {
		super(e), X(this, "worlds", new a()), X(this, "onWorldChanged", new Z()), X(this, "_currentWorld", null), this.onWorldChanged.add(({ world: e, action: t }) => {
			t === "removed" && this.worlds.delete(e.uuid);
		});
	}
	set currentWorld(e) {
		this._currentWorld = e;
	}
	get currentWorld() {
		return this._currentWorld;
	}
}, Yt = class extends Jt {
	constructor() {
		super(...arguments), X(this, "hasCameraControls", () => "controls" in this);
	}
}, Xt = class e extends qt {
	constructor(t) {
		super(t), X(this, "_disposedComponents", /* @__PURE__ */ new Set()), X(this, "enabled", !0), t.add(e.uuid, this);
	}
	get() {
		return this._disposedComponents;
	}
	destroy(e, t = !0, n = !0) {
		e.removeFromParent();
		let r = e;
		r.dispose && r.dispose(), this.disposeGeometryAndMaterials(e, t), n && r.children && r.children.length && this.disposeChildren(r), e.children.length = 0;
	}
	disposeGeometry(e) {
		e.boundsTree && e.disposeBoundsTree && e.disposeBoundsTree(), e.dispose();
	}
	disposeGeometryAndMaterials(t, n) {
		let r = t;
		r.geometry && this.disposeGeometry(r.geometry), n && r.material && e.disposeMaterial(r), r.material = [], r.geometry = null;
	}
	disposeChildren(e) {
		for (let t of e.children) this.destroy(t);
	}
	static disposeMaterial(e) {
		if (e.material) if (Array.isArray(e.material)) for (let t of e.material) t.dispose();
		else e.material.dispose();
	}
};
X(Xt, "uuid", "76e9cd8e-ad8f-4753-9ef6-cbc60f7247fe");
var Zt = Xt, Qt = class e {
	static create() {
		let t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
		return `${e._lut[t & 255] + e._lut[t >> 8 & 255] + e._lut[t >> 16 & 255] + e._lut[t >> 24 & 255]}-${e._lut[n & 255]}${e._lut[n >> 8 & 255]}-${e._lut[n >> 16 & 15 | 64]}${e._lut[n >> 24 & 255]}-${e._lut[r & 63 | 128]}${e._lut[r >> 8 & 255]}-${e._lut[r >> 16 & 255]}${e._lut[r >> 24 & 255]}${e._lut[i & 255]}${e._lut[i >> 8 & 255]}${e._lut[i >> 16 & 255]}${e._lut[i >> 24 & 255]}`.toLowerCase();
	}
	static validate(t) {
		if (!e._pattern.test(t)) throw Error(`${t} is not a valid UUID v4.

- If you're the tool creator, you can take one from https://www.uuidgenerator.net/.

- If you're using a platform tool, verify the uuid isn't misspelled or contact the tool creator.`);
	}
};
X(Qt, "_pattern", /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/), X(Qt, "_lut", /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."));
var $t = Qt, en = /* @__PURE__ */ RegExp("^[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
function tn(e, t) {
	let n = [], r = t.exec(e);
	for (; r;) {
		let i = [];
		i.startIndex = t.lastIndex - r[0].length;
		let a = r.length;
		for (let e = 0; e < a; e++) i.push(r[e]);
		n.push(i), r = t.exec(e);
	}
	return n;
}
var nn = function(e) {
	let t = en.exec(e);
	return !(t === null || typeof t > "u");
};
function rn(e) {
	return typeof e < "u";
}
var an = [
	"hasOwnProperty",
	"toString",
	"valueOf",
	"__defineGetter__",
	"__defineSetter__",
	"__lookupGetter__",
	"__lookupSetter__"
], on = [
	"__proto__",
	"constructor",
	"prototype"
], sn = {
	allowBooleanAttributes: !1,
	unpairedTags: []
};
function cn(e, t) {
	t = Object.assign({}, sn, t);
	let n = [], r = !1, i = !1;
	e[0] === "﻿" && (e = e.substr(1));
	for (let a = 0; a < e.length; a++) if (e[a] === "<" && e[a + 1] === "?") {
		if (a += 2, a = un(e, a), a.err) return a;
	} else if (e[a] === "<") {
		let o = a;
		if (a++, e[a] === "!") {
			a = dn(e, a);
			continue;
		} else {
			let s = !1;
			e[a] === "/" && (s = !0, a++);
			let c = "";
			for (; a < e.length && e[a] !== ">" && e[a] !== " " && e[a] !== "	" && e[a] !== "\n" && e[a] !== "\r"; a++) c += e[a];
			if (c = c.trim(), c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1), a--), !xn(c)) {
				let t;
				return t = c.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + c + "' is an invalid name.", yn("InvalidTag", t, Sn(e, a));
			}
			let l = mn(e, a);
			if (l === !1) return yn("InvalidAttr", "Attributes for '" + c + "' have open quote.", Sn(e, a));
			let u = l.value;
			if (a = l.index, u[u.length - 1] === "/") {
				let n = a - u.length;
				u = u.substring(0, u.length - 1);
				let i = gn(u, t);
				if (i === !0) r = !0;
				else return yn(i.err.code, i.err.msg, Sn(e, n + i.err.line));
			} else if (s) if (l.tagClosed) {
				if (u.trim().length > 0) return yn("InvalidTag", "Closing tag '" + c + "' can't have attributes or invalid starting.", Sn(e, o));
				if (n.length === 0) return yn("InvalidTag", "Closing tag '" + c + "' has not been opened.", Sn(e, o));
				{
					let t = n.pop();
					if (c !== t.tagName) {
						let n = Sn(e, t.tagStartPos);
						return yn("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + n.line + ", col " + n.col + ") instead of closing tag '" + c + "'.", Sn(e, o));
					}
					n.length == 0 && (i = !0);
				}
			} else return yn("InvalidTag", "Closing tag '" + c + "' doesn't have proper closing.", Sn(e, a));
			else {
				let s = gn(u, t);
				if (s !== !0) return yn(s.err.code, s.err.msg, Sn(e, a - u.length + s.err.line));
				if (i === !0) return yn("InvalidXml", "Multiple possible root nodes found.", Sn(e, a));
				t.unpairedTags.indexOf(c) !== -1 || n.push({
					tagName: c,
					tagStartPos: o
				}), r = !0;
			}
			for (a++; a < e.length; a++) if (e[a] === "<") if (e[a + 1] === "!") {
				a++, a = dn(e, a);
				continue;
			} else if (e[a + 1] === "?") {
				if (a = un(e, ++a), a.err) return a;
			} else break;
			else if (e[a] === "&") {
				let t = vn(e, a);
				if (t == -1) return yn("InvalidChar", "char '&' is not expected.", Sn(e, a));
				a = t;
			} else if (i === !0 && !ln(e[a])) return yn("InvalidXml", "Extra text at the end", Sn(e, a));
			e[a] === "<" && a--;
		}
	} else {
		if (ln(e[a])) continue;
		return yn("InvalidChar", "char '" + e[a] + "' is not expected.", Sn(e, a));
	}
	if (r) {
		if (n.length == 1) return yn("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", Sn(e, n[0].tagStartPos));
		if (n.length > 0) return yn("InvalidXml", "Invalid '" + JSON.stringify(n.map((e) => e.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
			line: 1,
			col: 1
		});
	} else return yn("InvalidXml", "Start tag expected.", 1);
	return !0;
}
function ln(e) {
	return e === " " || e === "	" || e === "\n" || e === "\r";
}
function un(e, t) {
	let n = t;
	for (; t < e.length; t++) if (e[t] == "?" || e[t] == " ") {
		let r = e.substr(n, t - n);
		if (t > 5 && r === "xml") return yn("InvalidXml", "XML declaration allowed only at the start of the document.", Sn(e, t));
		if (e[t] == "?" && e[t + 1] == ">") {
			t++;
			break;
		} else continue;
	}
	return t;
}
function dn(e, t) {
	if (e.length > t + 5 && e[t + 1] === "-" && e[t + 2] === "-") {
		for (t += 3; t < e.length; t++) if (e[t] === "-" && e[t + 1] === "-" && e[t + 2] === ">") {
			t += 2;
			break;
		}
	} else if (e.length > t + 8 && e[t + 1] === "D" && e[t + 2] === "O" && e[t + 3] === "C" && e[t + 4] === "T" && e[t + 5] === "Y" && e[t + 6] === "P" && e[t + 7] === "E") {
		let n = 1;
		for (t += 8; t < e.length; t++) if (e[t] === "<") n++;
		else if (e[t] === ">" && (n--, n === 0)) break;
	} else if (e.length > t + 9 && e[t + 1] === "[" && e[t + 2] === "C" && e[t + 3] === "D" && e[t + 4] === "A" && e[t + 5] === "T" && e[t + 6] === "A" && e[t + 7] === "[") {
		for (t += 8; t < e.length; t++) if (e[t] === "]" && e[t + 1] === "]" && e[t + 2] === ">") {
			t += 2;
			break;
		}
	}
	return t;
}
var fn = "\"", pn = "'";
function mn(e, t) {
	let n = "", r = "", i = !1;
	for (; t < e.length; t++) {
		if (e[t] === fn || e[t] === pn) r === "" ? r = e[t] : r !== e[t] || (r = "");
		else if (e[t] === ">" && r === "") {
			i = !0;
			break;
		}
		n += e[t];
	}
	return r === "" && {
		value: n,
		index: t,
		tagClosed: i
	};
}
var hn = /* @__PURE__ */ RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
function gn(e, t) {
	let n = tn(e, hn), r = {};
	for (let e = 0; e < n.length; e++) {
		if (n[e][1].length === 0) return yn("InvalidAttr", "Attribute '" + n[e][2] + "' has no space in starting.", Cn(n[e]));
		if (n[e][3] !== void 0 && n[e][4] === void 0) return yn("InvalidAttr", "Attribute '" + n[e][2] + "' is without value.", Cn(n[e]));
		if (n[e][3] === void 0 && !t.allowBooleanAttributes) return yn("InvalidAttr", "boolean attribute '" + n[e][2] + "' is not allowed.", Cn(n[e]));
		let i = n[e][2];
		if (!bn(i)) return yn("InvalidAttr", "Attribute '" + i + "' is an invalid name.", Cn(n[e]));
		if (!Object.prototype.hasOwnProperty.call(r, i)) r[i] = 1;
		else return yn("InvalidAttr", "Attribute '" + i + "' is repeated.", Cn(n[e]));
	}
	return !0;
}
function _n(e, t) {
	let n = /\d/;
	for (e[t] === "x" && (t++, n = /[\da-fA-F]/); t < e.length; t++) {
		if (e[t] === ";") return t;
		if (!e[t].match(n)) break;
	}
	return -1;
}
function vn(e, t) {
	if (t++, e[t] === ";") return -1;
	if (e[t] === "#") return t++, _n(e, t);
	let n = 0;
	for (; t < e.length; t++, n++) if (!(e[t].match(/\w/) && n < 20)) {
		if (e[t] === ";") break;
		return -1;
	}
	return t;
}
function yn(e, t, n) {
	return { err: {
		code: e,
		msg: t,
		line: n.line || n,
		col: n.col
	} };
}
function bn(e) {
	return nn(e);
}
function xn(e) {
	return nn(e);
}
function Sn(e, t) {
	let n = e.substring(0, t).split(/\r?\n/);
	return {
		line: n.length,
		col: n[n.length - 1].length + 1
	};
}
function Cn(e) {
	return e.startIndex + e[1].length;
}
var wn = {
	cent: "¢",
	pound: "£",
	curren: "¤",
	yen: "¥",
	euro: "€",
	dollar: "$",
	euro: "€",
	fnof: "ƒ",
	inr: "₹",
	af: "؋",
	birr: "ብር",
	peso: "₱",
	rub: "₽",
	won: "₩",
	yuan: "¥",
	cedil: "¸"
}, Tn = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	quot: "\""
}, En = {
	nbsp: "\xA0",
	copy: "©",
	reg: "®",
	trade: "™",
	mdash: "—",
	ndash: "–",
	hellip: "…",
	laquo: "«",
	raquo: "»",
	lsquo: "‘",
	rsquo: "’",
	ldquo: "“",
	rdquo: "”",
	bull: "•",
	para: "¶",
	sect: "§",
	deg: "°",
	frac12: "½",
	frac14: "¼",
	frac34: "¾"
}, Dn = /* @__PURE__ */ new Set("!?\\\\/[]$%{}^&*()<>|+");
function On(e) {
	if (e[0] === "#") throw Error(`[EntityReplacer] Invalid character '#' in entity name: "${e}"`);
	for (let t of e) if (Dn.has(t)) throw Error(`[EntityReplacer] Invalid character '${t}' in entity name: "${e}"`);
	return e;
}
function kn(...e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e) if (n) for (let e of Object.keys(n)) {
		let r = n[e];
		if (typeof r == "string") t[e] = r;
		else if (r && typeof r == "object" && r.val !== void 0) {
			let n = r.val;
			typeof n == "string" && (t[e] = n);
		}
	}
	return t;
}
var An = "external", jn = "base", Mn = "all";
function Nn(e) {
	return !e || e === An ? /* @__PURE__ */ new Set([An]) : e === Mn ? /* @__PURE__ */ new Set([Mn]) : e === jn ? /* @__PURE__ */ new Set([jn]) : Array.isArray(e) ? new Set(e) : /* @__PURE__ */ new Set([An]);
}
var Pn = Object.freeze({
	allow: 0,
	leave: 1,
	remove: 2,
	throw: 3
}), Fn = /* @__PURE__ */ new Set([
	9,
	10,
	13
]);
function In(e) {
	if (!e) return {
		xmlVersion: 1,
		onLevel: Pn.allow,
		nullLevel: Pn.remove
	};
	let t = e.xmlVersion === 1.1 ? 1.1 : 1, n = Pn[e.onNCR] ?? Pn.allow, r = Pn[e.nullNCR] ?? Pn.remove;
	return {
		xmlVersion: t,
		onLevel: n,
		nullLevel: Math.max(r, Pn.remove)
	};
}
var Ln = class {
	constructor(e = {}) {
		this._limit = e.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = typeof e.postCheck == "function" ? e.postCheck : (e) => e, this._limitTiers = Nn(this._limit.applyLimitsTo ?? An), this._numericAllowed = e.numericAllowed ?? !0, this._baseMap = kn(Tn, e.namedEntities || null), this._externalMap = /* @__PURE__ */ Object.create(null), this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(e.remove && Array.isArray(e.remove) ? e.remove : []), this._leaveSet = new Set(e.leave && Array.isArray(e.leave) ? e.leave : []);
		let t = In(e.ncr);
		this._ncrXmlVersion = t.xmlVersion, this._ncrOnLevel = t.onLevel, this._ncrNullLevel = t.nullLevel;
	}
	setExternalEntities(e) {
		if (e) for (let t of Object.keys(e)) On(t);
		this._externalMap = kn(e);
	}
	addExternalEntity(e, t) {
		On(e), typeof t == "string" && t.indexOf("&") === -1 && (this._externalMap[e] = t);
	}
	addInputEntities(e) {
		this._totalExpansions = 0, this._expandedLength = 0, this._inputMap = kn(e);
	}
	reset() {
		return this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this;
	}
	setXmlVersion(e) {
		this._ncrXmlVersion = e === 1.1 ? 1.1 : 1;
	}
	decode(e) {
		if (typeof e != "string" || e.length === 0) return e;
		let t = e, n = [], r = e.length, i = 0, a = 0, o = this._maxTotalExpansions > 0, s = this._maxExpandedLength > 0, c = o || s;
		for (; a < r;) {
			if (e.charCodeAt(a) !== 38) {
				a++;
				continue;
			}
			let t = a + 1;
			for (; t < r && e.charCodeAt(t) !== 59 && t - a <= 32;) t++;
			if (t >= r || e.charCodeAt(t) !== 59) {
				a++;
				continue;
			}
			let l = e.slice(a + 1, t);
			if (l.length === 0) {
				a++;
				continue;
			}
			let u, d;
			if (this._removeSet.has(l)) u = "", d === void 0 && (d = An);
			else if (this._leaveSet.has(l)) {
				a++;
				continue;
			} else if (l.charCodeAt(0) === 35) {
				let e = this._resolveNCR(l);
				if (e === void 0) {
					a++;
					continue;
				}
				u = e, d = jn;
			} else {
				let e = this._resolveName(l);
				u = e?.value, d = e?.tier;
			}
			if (u === void 0) {
				a++;
				continue;
			}
			if (a > i && n.push(e.slice(i, a)), n.push(u), i = t + 1, a = i, c && this._tierCounts(d)) {
				if (o && (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions)) throw Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);
				if (s) {
					let e = u.length - (l.length + 2);
					if (e > 0 && (this._expandedLength += e, this._expandedLength > this._maxExpandedLength)) throw Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`);
				}
			}
		}
		i < r && n.push(e.slice(i));
		let l = n.length === 0 ? e : n.join("");
		return this._postCheck(l, t);
	}
	_tierCounts(e) {
		return this._limitTiers.has(Mn) ? !0 : this._limitTiers.has(e);
	}
	_resolveName(e) {
		if (e in this._inputMap) return {
			value: this._inputMap[e],
			tier: An
		};
		if (e in this._externalMap) return {
			value: this._externalMap[e],
			tier: An
		};
		if (e in this._baseMap) return {
			value: this._baseMap[e],
			tier: jn
		};
	}
	_classifyNCR(e) {
		return e === 0 ? this._ncrNullLevel : e >= 55296 && e <= 57343 || this._ncrXmlVersion === 1 && e >= 1 && e <= 31 && !Fn.has(e) ? Pn.remove : -1;
	}
	_applyNCRAction(e, t, n) {
		switch (e) {
			case Pn.allow: return String.fromCodePoint(n);
			case Pn.remove: return "";
			case Pn.leave: return;
			case Pn.throw: throw Error(`[EntityDecoder] Prohibited numeric character reference &${t}; (U+${n.toString(16).toUpperCase().padStart(4, "0")})`);
			default: return String.fromCodePoint(n);
		}
	}
	_resolveNCR(e) {
		let t = e.charCodeAt(1), n;
		if (n = t === 120 || t === 88 ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), Number.isNaN(n) || n < 0 || n > 1114111) return;
		let r = this._classifyNCR(n);
		if (!this._numericAllowed && r < Pn.remove) return;
		let i = r === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, r);
		return this._applyNCRAction(i, e, n);
	}
}, Rn = (e) => an.includes(e) ? "__" + e : e, zn = {
	preserveOrder: !1,
	attributeNamePrefix: "@_",
	attributesGroupName: !1,
	textNodeName: "#text",
	ignoreAttributes: !0,
	removeNSPrefix: !1,
	allowBooleanAttributes: !1,
	parseTagValue: !0,
	parseAttributeValue: !1,
	trimValues: !0,
	cdataPropName: !1,
	numberParseOptions: {
		hex: !0,
		leadingZeros: !0,
		eNotation: !0
	},
	tagValueProcessor: function(e, t) {
		return t;
	},
	attributeValueProcessor: function(e, t) {
		return t;
	},
	stopNodes: [],
	alwaysCreateTextNode: !1,
	isArray: () => !1,
	commentPropName: !1,
	unpairedTags: [],
	processEntities: !0,
	htmlEntities: !1,
	entityDecoder: null,
	ignoreDeclaration: !1,
	ignorePiTags: !1,
	transformTagName: !1,
	transformAttributeName: !1,
	updateTag: function(e, t, n) {
		return e;
	},
	captureMetaData: !1,
	maxNestedTags: 100,
	strictReservedNames: !0,
	jPath: !0,
	onDangerousProperty: Rn
};
function Bn(e, t) {
	if (typeof e != "string") return;
	let n = e.toLowerCase();
	if (an.some((e) => n === e.toLowerCase()) || on.some((e) => n === e.toLowerCase())) throw Error(`[SECURITY] Invalid ${t}: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
}
function Vn(e, t) {
	return typeof e == "boolean" ? {
		enabled: e,
		maxEntitySize: 1e4,
		maxExpansionDepth: 1e4,
		maxTotalExpansions: Infinity,
		maxExpandedLength: 1e5,
		maxEntityCount: 1e3,
		allowedTags: null,
		tagFilter: null,
		appliesTo: "all"
	} : typeof e == "object" && e ? {
		enabled: e.enabled !== !1,
		maxEntitySize: Math.max(1, e.maxEntitySize ?? 1e4),
		maxExpansionDepth: Math.max(1, e.maxExpansionDepth ?? 1e4),
		maxTotalExpansions: Math.max(1, e.maxTotalExpansions ?? Infinity),
		maxExpandedLength: Math.max(1, e.maxExpandedLength ?? 1e5),
		maxEntityCount: Math.max(1, e.maxEntityCount ?? 1e3),
		allowedTags: e.allowedTags ?? null,
		tagFilter: e.tagFilter ?? null,
		appliesTo: e.appliesTo ?? "all"
	} : Vn(!0);
}
var Hn = function(e) {
	let t = Object.assign({}, zn, e), n = [
		{
			value: t.attributeNamePrefix,
			name: "attributeNamePrefix"
		},
		{
			value: t.attributesGroupName,
			name: "attributesGroupName"
		},
		{
			value: t.textNodeName,
			name: "textNodeName"
		},
		{
			value: t.cdataPropName,
			name: "cdataPropName"
		},
		{
			value: t.commentPropName,
			name: "commentPropName"
		}
	];
	for (let { value: e, name: t } of n) e && Bn(e, t);
	return t.onDangerousProperty === null && (t.onDangerousProperty = Rn), t.processEntities = Vn(t.processEntities, t.htmlEntities), t.unpairedTagsSet = new Set(t.unpairedTags), t.stopNodes && Array.isArray(t.stopNodes) && (t.stopNodes = t.stopNodes.map((e) => typeof e == "string" && e.startsWith("*.") ? ".." + e.substring(2) : e)), t;
}, Un = typeof Symbol == "function" ? Symbol("XML Node Metadata") : "@@xmlMetadata", Wn = class {
	constructor(e) {
		this.tagname = e, this.child = [], this[":@"] = /* @__PURE__ */ Object.create(null);
	}
	add(e, t) {
		e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: t });
	}
	addChild(e, t) {
		e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({
			[e.tagname]: e.child,
			":@": e[":@"]
		}) : this.child.push({ [e.tagname]: e.child }), t !== void 0 && (this.child[this.child.length - 1][Un] = { startIndex: t });
	}
	static getMetaDataSymbol() {
		return Un;
	}
}, Gn = class {
	constructor(e) {
		this.suppressValidationErr = !e, this.options = e;
	}
	readDocType(e, t) {
		let n = /* @__PURE__ */ Object.create(null), r = 0;
		if (e[t + 3] === "O" && e[t + 4] === "C" && e[t + 5] === "T" && e[t + 6] === "Y" && e[t + 7] === "P" && e[t + 8] === "E") {
			t += 9;
			let i = 1, a = !1, o = !1, s = "";
			for (; t < e.length; t++) if (e[t] === "<" && !o) {
				if (a && qn(e, "!ENTITY", t)) {
					t += 7;
					let i, a;
					if ([i, a, t] = this.readEntityExp(e, t + 1, this.suppressValidationErr), a.indexOf("&") === -1) {
						if (this.options.enabled !== !1 && this.options.maxEntityCount != null && r >= this.options.maxEntityCount) throw Error(`Entity count (${r + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
						n[i] = a, r++;
					}
				} else if (a && qn(e, "!ELEMENT", t)) {
					t += 8;
					let { index: n } = this.readElementExp(e, t + 1);
					t = n;
				} else if (a && qn(e, "!ATTLIST", t)) t += 8;
				else if (a && qn(e, "!NOTATION", t)) {
					t += 9;
					let { index: n } = this.readNotationExp(e, t + 1, this.suppressValidationErr);
					t = n;
				} else if (qn(e, "!--", t)) o = !0;
				else throw Error("Invalid DOCTYPE");
				i++, s = "";
			} else if (e[t] === ">") {
				if (o ? e[t - 1] === "-" && e[t - 2] === "-" && (o = !1, i--) : i--, i === 0) break;
			} else e[t] === "[" ? a = !0 : s += e[t];
			if (i !== 0) throw Error("Unclosed DOCTYPE");
		} else throw Error("Invalid Tag instead of DOCTYPE");
		return {
			entities: n,
			i: t
		};
	}
	readEntityExp(e, t) {
		t = Kn(e, t);
		let n = t;
		for (; t < e.length && !/\s/.test(e[t]) && e[t] !== "\"" && e[t] !== "'";) t++;
		let r = e.substring(n, t);
		if (Jn(r), t = Kn(e, t), !this.suppressValidationErr) {
			if (e.substring(t, t + 6).toUpperCase() === "SYSTEM") throw Error("External entities are not supported");
			if (e[t] === "%") throw Error("Parameter entities are not supported");
		}
		let i = "";
		if ([t, i] = this.readIdentifierVal(e, t, "entity"), this.options.enabled !== !1 && this.options.maxEntitySize != null && i.length > this.options.maxEntitySize) throw Error(`Entity "${r}" size (${i.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
		return t--, [
			r,
			i,
			t
		];
	}
	readNotationExp(e, t) {
		t = Kn(e, t);
		let n = t;
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		!this.suppressValidationErr && Jn(r), t = Kn(e, t);
		let i = e.substring(t, t + 6).toUpperCase();
		if (!this.suppressValidationErr && i !== "SYSTEM" && i !== "PUBLIC") throw Error(`Expected SYSTEM or PUBLIC, found "${i}"`);
		t += i.length, t = Kn(e, t);
		let a = null, o = null;
		if (i === "PUBLIC") [t, a] = this.readIdentifierVal(e, t, "publicIdentifier"), t = Kn(e, t), (e[t] === "\"" || e[t] === "'") && ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier"));
		else if (i === "SYSTEM" && ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier"), !this.suppressValidationErr && !o)) throw Error("Missing mandatory system identifier for SYSTEM notation");
		return {
			notationName: r,
			publicIdentifier: a,
			systemIdentifier: o,
			index: --t
		};
	}
	readIdentifierVal(e, t, n) {
		let r = "", i = e[t];
		if (i !== "\"" && i !== "'") throw Error(`Expected quoted string, found "${i}"`);
		t++;
		let a = t;
		for (; t < e.length && e[t] !== i;) t++;
		if (r = e.substring(a, t), e[t] !== i) throw Error(`Unterminated ${n} value`);
		return t++, [t, r];
	}
	readElementExp(e, t) {
		t = Kn(e, t);
		let n = t;
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		if (!this.suppressValidationErr && !nn(r)) throw Error(`Invalid element name: "${r}"`);
		t = Kn(e, t);
		let i = "";
		if (e[t] === "E" && qn(e, "MPTY", t)) t += 4;
		else if (e[t] === "A" && qn(e, "NY", t)) t += 2;
		else if (e[t] === "(") {
			t++;
			let n = t;
			for (; t < e.length && e[t] !== ")";) t++;
			if (i = e.substring(n, t), e[t] !== ")") throw Error("Unterminated content model");
		} else if (!this.suppressValidationErr) throw Error(`Invalid Element Expression, found "${e[t]}"`);
		return {
			elementName: r,
			contentModel: i.trim(),
			index: t
		};
	}
	readAttlistExp(e, t) {
		t = Kn(e, t);
		let n = t;
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		for (Jn(r), t = Kn(e, t), n = t; t < e.length && !/\s/.test(e[t]);) t++;
		let i = e.substring(n, t);
		if (!Jn(i)) throw Error(`Invalid attribute name: "${i}"`);
		t = Kn(e, t);
		let a = "";
		if (e.substring(t, t + 8).toUpperCase() === "NOTATION") {
			if (a = "NOTATION", t += 8, t = Kn(e, t), e[t] !== "(") throw Error(`Expected '(', found "${e[t]}"`);
			t++;
			let n = [];
			for (; t < e.length && e[t] !== ")";) {
				let r = t;
				for (; t < e.length && e[t] !== "|" && e[t] !== ")";) t++;
				let i = e.substring(r, t);
				if (i = i.trim(), !Jn(i)) throw Error(`Invalid notation name: "${i}"`);
				n.push(i), e[t] === "|" && (t++, t = Kn(e, t));
			}
			if (e[t] !== ")") throw Error("Unterminated list of notations");
			t++, a += " (" + n.join("|") + ")";
		} else {
			let n = t;
			for (; t < e.length && !/\s/.test(e[t]);) t++;
			if (a += e.substring(n, t), !this.suppressValidationErr && ![
				"CDATA",
				"ID",
				"IDREF",
				"IDREFS",
				"ENTITY",
				"ENTITIES",
				"NMTOKEN",
				"NMTOKENS"
			].includes(a.toUpperCase())) throw Error(`Invalid attribute type: "${a}"`);
		}
		t = Kn(e, t);
		let o = "";
		return e.substring(t, t + 8).toUpperCase() === "#REQUIRED" ? (o = "#REQUIRED", t += 8) : e.substring(t, t + 7).toUpperCase() === "#IMPLIED" ? (o = "#IMPLIED", t += 7) : [t, o] = this.readIdentifierVal(e, t, "ATTLIST"), {
			elementName: r,
			attributeName: i,
			attributeType: a,
			defaultValue: o,
			index: t
		};
	}
}, Kn = (e, t) => {
	for (; t < e.length && /\s/.test(e[t]);) t++;
	return t;
};
function qn(e, t, n) {
	for (let r = 0; r < t.length; r++) if (t[r] !== e[n + r + 1]) return !1;
	return !0;
}
function Jn(e) {
	if (nn(e)) return e;
	throw Error(`Invalid entity name ${e}`);
}
var Yn = /^[-+]?0x[a-fA-F0-9]+$/, Xn = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Zn = {
	hex: !0,
	leadingZeros: !0,
	decimalPoint: ".",
	eNotation: !0,
	infinity: "original"
};
function Qn(e, t = {}) {
	if (t = Object.assign({}, Zn, t), !e || typeof e != "string") return e;
	let n = e.trim();
	if (n.length === 0 || t.skipLike !== void 0 && t.skipLike.test(n)) return e;
	if (n === "0") return 0;
	if (t.hex && Yn.test(n)) return nr(n, 16);
	if (isFinite(n)) {
		if (n.includes("e") || n.includes("E")) return er(e, n, t);
		{
			let r = Xn.exec(n);
			if (r) {
				let i = r[1] || "", a = r[2], o = tr(r[3]), s = i ? e[a.length + 1] === "." : e[a.length] === ".";
				if (!t.leadingZeros && (a.length > 1 || a.length === 1 && !s)) return e;
				{
					let r = Number(n), s = String(r);
					if (r === 0) return r;
					if (s.search(/[eE]/) !== -1) return t.eNotation ? r : e;
					if (n.indexOf(".") !== -1) return s === "0" || s === o || s === `${i}${o}` ? r : e;
					let c = a ? o : n;
					return a ? c === s || i + c === s ? r : e : c === s || c === i + s ? r : e;
				}
			} else return e;
		}
	} else return rr(e, Number(n), t);
}
var $n = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function er(e, t, n) {
	if (!n.eNotation) return e;
	let r = t.match($n);
	if (r) {
		let i = r[1] || "", a = r[3].indexOf("e") === -1 ? "E" : "e", o = r[2], s = i ? e[o.length + 1] === a : e[o.length] === a;
		return o.length > 1 && s ? e : o.length === 1 && (r[3].startsWith(`.${a}`) || r[3][0] === a) ? Number(t) : o.length > 0 ? n.leadingZeros && !s ? (t = (r[1] || "") + r[3], Number(t)) : e : Number(t);
	} else return e;
}
function tr(e) {
	return e && e.indexOf(".") !== -1 && (e = e.replace(/0+$/, ""), e === "." ? e = "0" : e[0] === "." ? e = "0" + e : e[e.length - 1] === "." && (e = e.substring(0, e.length - 1))), e;
}
function nr(e, t) {
	if (parseInt) return parseInt(e, t);
	if (Number.parseInt) return Number.parseInt(e, t);
	if (window && window.parseInt) return window.parseInt(e, t);
	throw Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function rr(e, t, n) {
	let r = t === Infinity;
	switch (n.infinity.toLowerCase()) {
		case "null": return null;
		case "infinity": return t;
		case "string": return r ? "Infinity" : "-Infinity";
		default: return e;
	}
}
function ir(e) {
	return typeof e == "function" ? e : Array.isArray(e) ? (t) => {
		for (let n of e) if (typeof n == "string" && t === n || n instanceof RegExp && n.test(t)) return !0;
	} : () => !1;
}
var ar = class {
	constructor(e, t = {}, n) {
		this.pattern = e, this.separator = t.separator || ".", this.segments = this._parse(e), this.data = n, this._hasDeepWildcard = this.segments.some((e) => e.type === "deep-wildcard"), this._hasAttributeCondition = this.segments.some((e) => e.attrName !== void 0), this._hasPositionSelector = this.segments.some((e) => e.position !== void 0);
	}
	_parse(e) {
		let t = [], n = 0, r = "";
		for (; n < e.length;) e[n] === this.separator ? n + 1 < e.length && e[n + 1] === this.separator ? (r.trim() && (t.push(this._parseSegment(r.trim())), r = ""), t.push({ type: "deep-wildcard" }), n += 2) : (r.trim() && t.push(this._parseSegment(r.trim())), r = "", n++) : (r += e[n], n++);
		return r.trim() && t.push(this._parseSegment(r.trim())), t;
	}
	_parseSegment(e) {
		let t = { type: "tag" }, n = null, r = e, i = e.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
		if (i && (r = i[1] + i[3], i[2])) {
			let e = i[2].slice(1, -1);
			e && (n = e);
		}
		let a, o = r;
		if (r.includes("::")) {
			let t = r.indexOf("::");
			if (a = r.substring(0, t).trim(), o = r.substring(t + 2).trim(), !a) throw Error(`Invalid namespace in pattern: ${e}`);
		}
		let s, c = null;
		if (o.includes(":")) {
			let e = o.lastIndexOf(":"), t = o.substring(0, e).trim(), n = o.substring(e + 1).trim();
			[
				"first",
				"last",
				"odd",
				"even"
			].includes(n) || /^nth\(\d+\)$/.test(n) ? (s = t, c = n) : s = o;
		} else s = o;
		if (!s) throw Error(`Invalid segment pattern: ${e}`);
		if (t.tag = s, a && (t.namespace = a), n) if (n.includes("=")) {
			let e = n.indexOf("=");
			t.attrName = n.substring(0, e).trim(), t.attrValue = n.substring(e + 1).trim();
		} else t.attrName = n.trim();
		if (c) {
			let e = c.match(/^nth\((\d+)\)$/);
			e ? (t.position = "nth", t.positionValue = parseInt(e[1], 10)) : t.position = c;
		}
		return t;
	}
	get length() {
		return this.segments.length;
	}
	hasDeepWildcard() {
		return this._hasDeepWildcard;
	}
	hasAttributeCondition() {
		return this._hasAttributeCondition;
	}
	hasPositionSelector() {
		return this._hasPositionSelector;
	}
	toString() {
		return this.pattern;
	}
}, or = class {
	constructor() {
		this._byDepthAndTag = /* @__PURE__ */ new Map(), this._wildcardByDepth = /* @__PURE__ */ new Map(), this._deepWildcards = [], this._patterns = /* @__PURE__ */ new Set(), this._sealed = !1;
	}
	add(e) {
		if (this._sealed) throw TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");
		if (this._patterns.has(e.pattern)) return this;
		if (this._patterns.add(e.pattern), e.hasDeepWildcard()) return this._deepWildcards.push(e), this;
		let t = e.length, n = e.segments[e.segments.length - 1]?.tag;
		if (!n || n === "*") this._wildcardByDepth.has(t) || this._wildcardByDepth.set(t, []), this._wildcardByDepth.get(t).push(e);
		else {
			let r = `${t}:${n}`;
			this._byDepthAndTag.has(r) || this._byDepthAndTag.set(r, []), this._byDepthAndTag.get(r).push(e);
		}
		return this;
	}
	addAll(e) {
		for (let t of e) this.add(t);
		return this;
	}
	has(e) {
		return this._patterns.has(e.pattern);
	}
	get size() {
		return this._patterns.size;
	}
	seal() {
		return this._sealed = !0, this;
	}
	get isSealed() {
		return this._sealed;
	}
	matchesAny(e) {
		return this.findMatch(e) !== null;
	}
	findMatch(e) {
		let t = e.getDepth(), n = `${t}:${e.getCurrentTag()}`, r = this._byDepthAndTag.get(n);
		if (r) {
			for (let t = 0; t < r.length; t++) if (e.matches(r[t])) return r[t];
		}
		let i = this._wildcardByDepth.get(t);
		if (i) {
			for (let t = 0; t < i.length; t++) if (e.matches(i[t])) return i[t];
		}
		for (let t = 0; t < this._deepWildcards.length; t++) if (e.matches(this._deepWildcards[t])) return this._deepWildcards[t];
		return null;
	}
}, sr = class {
	constructor(e) {
		this._matcher = e;
	}
	get separator() {
		return this._matcher.separator;
	}
	getCurrentTag() {
		let e = this._matcher.path;
		return e.length > 0 ? e[e.length - 1].tag : void 0;
	}
	getCurrentNamespace() {
		let e = this._matcher.path;
		return e.length > 0 ? e[e.length - 1].namespace : void 0;
	}
	getAttrValue(e) {
		let t = this._matcher.path;
		if (t.length !== 0) return t[t.length - 1].values?.[e];
	}
	hasAttr(e) {
		let t = this._matcher.path;
		if (t.length === 0) return !1;
		let n = t[t.length - 1];
		return n.values !== void 0 && e in n.values;
	}
	getPosition() {
		let e = this._matcher.path;
		return e.length === 0 ? -1 : e[e.length - 1].position ?? 0;
	}
	getCounter() {
		let e = this._matcher.path;
		return e.length === 0 ? -1 : e[e.length - 1].counter ?? 0;
	}
	getIndex() {
		return this.getPosition();
	}
	getDepth() {
		return this._matcher.path.length;
	}
	toString(e, t = !0) {
		return this._matcher.toString(e, t);
	}
	toArray() {
		return this._matcher.path.map((e) => e.tag);
	}
	matches(e) {
		return this._matcher.matches(e);
	}
	matchesAny(e) {
		return e.matchesAny(this._matcher);
	}
}, cr = class {
	constructor(e = {}) {
		this.separator = e.separator || ".", this.path = [], this.siblingStacks = [], this._pathStringCache = null, this._view = new sr(this);
	}
	push(e, t = null, n = null) {
		this._pathStringCache = null, this.path.length > 0 && (this.path[this.path.length - 1].values = void 0);
		let r = this.path.length;
		this.siblingStacks[r] || (this.siblingStacks[r] = /* @__PURE__ */ new Map());
		let i = this.siblingStacks[r], a = n ? `${n}:${e}` : e, o = i.get(a) || 0, s = 0;
		for (let e of i.values()) s += e;
		i.set(a, o + 1);
		let c = {
			tag: e,
			position: s,
			counter: o
		};
		n != null && (c.namespace = n), t != null && (c.values = t), this.path.push(c);
	}
	pop() {
		if (this.path.length === 0) return;
		this._pathStringCache = null;
		let e = this.path.pop();
		return this.siblingStacks.length > this.path.length + 1 && (this.siblingStacks.length = this.path.length + 1), e;
	}
	updateCurrent(e) {
		if (this.path.length > 0) {
			let t = this.path[this.path.length - 1];
			e != null && (t.values = e);
		}
	}
	getCurrentTag() {
		return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
	}
	getCurrentNamespace() {
		return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
	}
	getAttrValue(e) {
		if (this.path.length !== 0) return this.path[this.path.length - 1].values?.[e];
	}
	hasAttr(e) {
		if (this.path.length === 0) return !1;
		let t = this.path[this.path.length - 1];
		return t.values !== void 0 && e in t.values;
	}
	getPosition() {
		return this.path.length === 0 ? -1 : this.path[this.path.length - 1].position ?? 0;
	}
	getCounter() {
		return this.path.length === 0 ? -1 : this.path[this.path.length - 1].counter ?? 0;
	}
	getIndex() {
		return this.getPosition();
	}
	getDepth() {
		return this.path.length;
	}
	toString(e, t = !0) {
		let n = e || this.separator;
		if (n === this.separator && t === !0) {
			if (this._pathStringCache !== null) return this._pathStringCache;
			let e = this.path.map((e) => e.namespace ? `${e.namespace}:${e.tag}` : e.tag).join(n);
			return this._pathStringCache = e, e;
		}
		return this.path.map((e) => t && e.namespace ? `${e.namespace}:${e.tag}` : e.tag).join(n);
	}
	toArray() {
		return this.path.map((e) => e.tag);
	}
	reset() {
		this._pathStringCache = null, this.path = [], this.siblingStacks = [];
	}
	matches(e) {
		let t = e.segments;
		return t.length === 0 ? !1 : e.hasDeepWildcard() ? this._matchWithDeepWildcard(t) : this._matchSimple(t);
	}
	_matchSimple(e) {
		if (this.path.length !== e.length) return !1;
		for (let t = 0; t < e.length; t++) if (!this._matchSegment(e[t], this.path[t], t === this.path.length - 1)) return !1;
		return !0;
	}
	_matchWithDeepWildcard(e) {
		let t = this.path.length - 1, n = e.length - 1;
		for (; n >= 0 && t >= 0;) {
			let r = e[n];
			if (r.type === "deep-wildcard") {
				if (n--, n < 0) return !0;
				let r = e[n], i = !1;
				for (let e = t; e >= 0; e--) if (this._matchSegment(r, this.path[e], e === this.path.length - 1)) {
					t = e - 1, n--, i = !0;
					break;
				}
				if (!i) return !1;
			} else {
				if (!this._matchSegment(r, this.path[t], t === this.path.length - 1)) return !1;
				t--, n--;
			}
		}
		return n < 0;
	}
	_matchSegment(e, t, n) {
		if (e.tag !== "*" && e.tag !== t.tag || e.namespace !== void 0 && e.namespace !== "*" && e.namespace !== t.namespace || e.attrName !== void 0 && (!n || !t.values || !(e.attrName in t.values) || e.attrValue !== void 0 && String(t.values[e.attrName]) !== String(e.attrValue))) return !1;
		if (e.position !== void 0) {
			if (!n) return !1;
			let r = t.counter ?? 0;
			if (e.position === "first" && r !== 0 || e.position === "odd" && r % 2 != 1 || e.position === "even" && r % 2 != 0 || e.position === "nth" && r !== e.positionValue) return !1;
		}
		return !0;
	}
	matchesAny(e) {
		return e.matchesAny(this);
	}
	snapshot() {
		return {
			path: this.path.map((e) => ({ ...e })),
			siblingStacks: this.siblingStacks.map((e) => new Map(e))
		};
	}
	restore(e) {
		this._pathStringCache = null, this.path = e.path.map((e) => ({ ...e })), this.siblingStacks = e.siblingStacks.map((e) => new Map(e));
	}
	readOnly() {
		return this._view;
	}
};
function lr(e, t) {
	if (!e) return {};
	let n = t.attributesGroupName ? e[t.attributesGroupName] : e;
	if (!n) return {};
	let r = {};
	for (let e in n) if (e.startsWith(t.attributeNamePrefix)) {
		let i = e.substring(t.attributeNamePrefix.length);
		r[i] = n[e];
	} else r[e] = n[e];
	return r;
}
function ur(e) {
	if (!e || typeof e != "string") return;
	let t = e.indexOf(":");
	if (t !== -1 && t > 0) {
		let n = e.substring(0, t);
		if (n !== "xmlns") return n;
	}
}
var dr = class {
	constructor(e, t) {
		this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.parseXml = gr, this.parseTextData = fr, this.resolveNameSpace = pr, this.buildAttributesMap = hr, this.isItStopNode = br, this.replaceEntitiesValue = vr, this.readStopNodeData = Tr, this.saveTextToParentTag = yr, this.addChild = _r, this.ignoreAttributesFn = ir(this.options.ignoreAttributes), this.entityExpansionCount = 0, this.currentExpandedLength = 0;
		let n = { ...Tn };
		this.options.entityDecoder ? this.entityDecoder = this.options.entityDecoder : (typeof this.options.htmlEntities == "object" ? n = this.options.htmlEntities : this.options.htmlEntities === !0 && (n = {
			...En,
			...wn
		}), this.entityDecoder = new Ln({
			namedEntities: {
				...n,
				...t
			},
			numericAllowed: this.options.htmlEntities,
			limit: {
				maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
				maxExpandedLength: this.options.processEntities.maxExpandedLength,
				applyLimitsTo: this.options.processEntities.appliesTo
			}
		})), this.matcher = new cr(), this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = !1, this.stopNodeExpressionsSet = new or();
		let r = this.options.stopNodes;
		if (r && r.length > 0) {
			for (let e = 0; e < r.length; e++) {
				let t = r[e];
				typeof t == "string" ? this.stopNodeExpressionsSet.add(new ar(t)) : t instanceof ar && this.stopNodeExpressionsSet.add(t);
			}
			this.stopNodeExpressionsSet.seal();
		}
	}
};
function fr(e, t, n, r, i, a, o) {
	let s = this.options;
	if (e !== void 0 && (s.trimValues && !r && (e = e.trim()), e.length > 0)) {
		o || (e = this.replaceEntitiesValue(e, t, n));
		let r = s.jPath ? n.toString() : n, c = s.tagValueProcessor(t, e, r, i, a);
		return c == null ? e : typeof c != typeof e || c !== e ? c : s.trimValues || e.trim() === e ? Er(e, s.parseTagValue, s.numberParseOptions) : e;
	}
}
function pr(e) {
	if (this.options.removeNSPrefix) {
		let t = e.split(":"), n = e.charAt(0) === "/" ? "/" : "";
		if (t[0] === "xmlns") return "";
		t.length === 2 && (e = n + t[1]);
	}
	return e;
}
var mr = /* @__PURE__ */ RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
function hr(e, t, n, r = !1) {
	let i = this.options;
	if (r === !0 || i.ignoreAttributes !== !0 && typeof e == "string") {
		let r = tn(e, mr), a = r.length, o = {}, s = Array(a), c = !1, l = {};
		for (let e = 0; e < a; e++) {
			let t = this.resolveNameSpace(r[e][1]), a = r[e][4];
			if (t.length && a !== void 0) {
				let r = a;
				i.trimValues && (r = r.trim()), r = this.replaceEntitiesValue(r, n, this.readonlyMatcher), s[e] = r, l[t] = r, c = !0;
			}
		}
		c && typeof t == "object" && t.updateCurrent && t.updateCurrent(l);
		let u = i.jPath ? t.toString() : this.readonlyMatcher, d = !1;
		for (let e = 0; e < a; e++) {
			let t = this.resolveNameSpace(r[e][1]);
			if (this.ignoreAttributesFn(t, u)) continue;
			let n = i.attributeNamePrefix + t;
			if (t.length) if (i.transformAttributeName && (n = i.transformAttributeName(n)), n = Or(n, i), r[e][4] !== void 0) {
				let r = s[e], a = i.attributeValueProcessor(t, r, u);
				a == null ? o[n] = r : typeof a != typeof r || a !== r ? o[n] = a : o[n] = Er(r, i.parseAttributeValue, i.numberParseOptions), d = !0;
			} else i.allowBooleanAttributes && (o[n] = !0, d = !0);
		}
		if (!d) return;
		if (i.attributesGroupName && !i.preserveOrder) {
			let e = {};
			return e[i.attributesGroupName] = o, e;
		}
		return o;
	}
}
var gr = function(e) {
	e = e.replace(/\r\n?/g, "\n");
	let t = new Wn("!xml"), n = t, r = "";
	this.matcher.reset(), this.entityDecoder.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0;
	let i = this.options, a = new Gn(i.processEntities), o = e.length;
	for (let s = 0; s < o; s++) if (e[s] === "<") {
		let c = e.charCodeAt(s + 1);
		if (c === 47) {
			let t = Sr(e, ">", s, "Closing Tag is not closed."), a = e.substring(s + 2, t).trim();
			if (i.removeNSPrefix) {
				let e = a.indexOf(":");
				e !== -1 && (a = a.substr(e + 1));
			}
			a = Dr(i.transformTagName, a, "", i).tagName, n && (r = this.saveTextToParentTag(r, n, this.readonlyMatcher));
			let o = this.matcher.getCurrentTag();
			if (a && i.unpairedTagsSet.has(a)) throw Error(`Unpaired tag can not be used as closing tag: </${a}>`);
			o && i.unpairedTagsSet.has(o) && (this.matcher.pop(), this.tagsNodeStack.pop()), this.matcher.pop(), this.isCurrentNodeStopNode = !1, n = this.tagsNodeStack.pop(), r = "", s = t;
		} else if (c === 63) {
			let t = wr(e, s, !1, "?>");
			if (!t) throw Error("Pi Tag is not closed.");
			r = this.saveTextToParentTag(r, n, this.readonlyMatcher);
			let a = this.buildAttributesMap(t.tagExp, this.matcher, t.tagName, !0);
			if (a) {
				let e = a[this.options.attributeNamePrefix + "version"];
				this.entityDecoder.setXmlVersion(Number(e) || 1);
			}
			if (!(i.ignoreDeclaration && t.tagName === "?xml" || i.ignorePiTags)) {
				let e = new Wn(t.tagName);
				e.add(i.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && i.ignoreAttributes !== !0 && (e[":@"] = a), this.addChild(n, e, this.readonlyMatcher, s);
			}
			s = t.closeIndex + 1;
		} else if (c === 33 && e.charCodeAt(s + 2) === 45 && e.charCodeAt(s + 3) === 45) {
			let t = Sr(e, "-->", s + 4, "Comment is not closed.");
			if (i.commentPropName) {
				let a = e.substring(s + 4, t - 2);
				r = this.saveTextToParentTag(r, n, this.readonlyMatcher), n.add(i.commentPropName, [{ [i.textNodeName]: a }]);
			}
			s = t;
		} else if (c === 33 && e.charCodeAt(s + 2) === 68) {
			let t = a.readDocType(e, s);
			this.entityDecoder.addInputEntities(t.entities), s = t.i;
		} else if (c === 33 && e.charCodeAt(s + 2) === 91) {
			let t = Sr(e, "]]>", s, "CDATA is not closed.") - 2, a = e.substring(s + 9, t);
			r = this.saveTextToParentTag(r, n, this.readonlyMatcher);
			let o = this.parseTextData(a, n.tagname, this.readonlyMatcher, !0, !1, !0, !0);
			o ??= "", i.cdataPropName ? n.add(i.cdataPropName, [{ [i.textNodeName]: a }]) : n.add(i.textNodeName, o), s = t + 2;
		} else {
			let a = wr(e, s, i.removeNSPrefix);
			if (!a) {
				let t = e.substring(Math.max(0, s - 50), Math.min(o, s + 50));
				throw Error(`readTagExp returned undefined at position ${s}. Context: "${t}"`);
			}
			let c = a.tagName, l = a.rawTagName, u = a.tagExp, d = a.attrExpPresent, f = a.closeIndex;
			if ({tagName: c, tagExp: u} = Dr(i.transformTagName, c, u, i), i.strictReservedNames && (c === i.commentPropName || c === i.cdataPropName || c === i.textNodeName || c === i.attributesGroupName)) throw Error(`Invalid tag name: ${c}`);
			n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, this.readonlyMatcher, !1));
			let p = n;
			p && i.unpairedTagsSet.has(p.tagname) && (n = this.tagsNodeStack.pop(), this.matcher.pop());
			let m = !1;
			u.length > 0 && u.lastIndexOf("/") === u.length - 1 && (m = !0, c[c.length - 1] === "/" ? (c = c.substr(0, c.length - 1), u = c) : u = u.substr(0, u.length - 1), d = c !== u);
			let h = null, g;
			g = ur(l), c !== t.tagname && this.matcher.push(c, {}, g), c !== u && d && (h = this.buildAttributesMap(u, this.matcher, c), h && lr(h, i)), c !== t.tagname && (this.isCurrentNodeStopNode = this.isItStopNode());
			let _ = s;
			if (this.isCurrentNodeStopNode) {
				let t = "";
				if (m) s = a.closeIndex;
				else if (i.unpairedTagsSet.has(c)) s = a.closeIndex;
				else {
					let n = this.readStopNodeData(e, l, f + 1);
					if (!n) throw Error(`Unexpected end of ${l}`);
					s = n.i, t = n.tagContent;
				}
				let r = new Wn(c);
				h && (r[":@"] = h), r.add(i.textNodeName, t), this.matcher.pop(), this.isCurrentNodeStopNode = !1, this.addChild(n, r, this.readonlyMatcher, _);
			} else {
				if (m) {
					({tagName: c, tagExp: u} = Dr(i.transformTagName, c, u, i));
					let e = new Wn(c);
					h && (e[":@"] = h), this.addChild(n, e, this.readonlyMatcher, _), this.matcher.pop(), this.isCurrentNodeStopNode = !1;
				} else if (i.unpairedTagsSet.has(c)) {
					let e = new Wn(c);
					h && (e[":@"] = h), this.addChild(n, e, this.readonlyMatcher, _), this.matcher.pop(), this.isCurrentNodeStopNode = !1, s = a.closeIndex;
					continue;
				} else {
					let e = new Wn(c);
					if (this.tagsNodeStack.length > i.maxNestedTags) throw Error("Maximum nested tags exceeded");
					this.tagsNodeStack.push(n), h && (e[":@"] = h), this.addChild(n, e, this.readonlyMatcher, _), n = e;
				}
				r = "", s = f;
			}
		}
	} else r += e[s];
	return t.child;
};
function _r(e, t, n, r) {
	this.options.captureMetaData || (r = void 0);
	let i = this.options.jPath ? n.toString() : n, a = this.options.updateTag(t.tagname, i, t[":@"]);
	a === !1 || (typeof a == "string" && (t.tagname = a), e.addChild(t, r));
}
function vr(e, t, n) {
	let r = this.options.processEntities;
	if (!r || !r.enabled) return e;
	if (r.allowedTags) {
		let i = this.options.jPath ? n.toString() : n;
		if (!(Array.isArray(r.allowedTags) ? r.allowedTags.includes(t) : r.allowedTags(t, i))) return e;
	}
	if (r.tagFilter) {
		let i = this.options.jPath ? n.toString() : n;
		if (!r.tagFilter(t, i)) return e;
	}
	return this.entityDecoder.decode(e);
}
function yr(e, t, n, r) {
	return e &&= (r === void 0 && (r = t.child.length === 0), e = this.parseTextData(e, t.tagname, n, !1, t[":@"] ? Object.keys(t[":@"]).length !== 0 : !1, r), e !== void 0 && e !== "" && t.add(this.options.textNodeName, e), ""), e;
}
function br() {
	return this.stopNodeExpressionsSet.size !== 0 && this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
function xr(e, t, n = ">") {
	let r = 0, i = e.length, a = n.charCodeAt(0), o = n.length > 1 ? n.charCodeAt(1) : -1, s = "", c = t;
	for (let n = t; n < i; n++) {
		let t = e.charCodeAt(n);
		if (r) t === r && (r = 0);
		else if (t === 34 || t === 39) r = t;
		else if (t === a) if (o !== -1) {
			if (e.charCodeAt(n + 1) === o) return s += e.substring(c, n), {
				data: s,
				index: n
			};
		} else return s += e.substring(c, n), {
			data: s,
			index: n
		};
		else t === 9 && !r && (s += e.substring(c, n) + " ", c = n + 1);
	}
}
function Sr(e, t, n, r) {
	let i = e.indexOf(t, n);
	if (i === -1) throw Error(r);
	return i + t.length - 1;
}
function Cr(e, t, n, r) {
	let i = e.indexOf(t, n);
	if (i === -1) throw Error(r);
	return i;
}
function wr(e, t, n, r = ">") {
	let i = xr(e, t + 1, r);
	if (!i) return;
	let a = i.data, o = i.index, s = a.search(/\s/), c = a, l = !0;
	s !== -1 && (c = a.substring(0, s), a = a.substring(s + 1).trimStart());
	let u = c;
	if (n) {
		let e = c.indexOf(":");
		e !== -1 && (c = c.substr(e + 1), l = c !== i.data.substr(e + 1));
	}
	return {
		tagName: c,
		tagExp: a,
		closeIndex: o,
		attrExpPresent: l,
		rawTagName: u
	};
}
function Tr(e, t, n) {
	let r = n, i = 1, a = e.length;
	for (; n < a; n++) if (e[n] === "<") {
		let a = e.charCodeAt(n + 1);
		if (a === 47) {
			let a = Cr(e, ">", n, `${t} is not closed`);
			if (e.substring(n + 2, a).trim() === t && (i--, i === 0)) return {
				tagContent: e.substring(r, n),
				i: a
			};
			n = a;
		} else if (a === 63) n = Sr(e, "?>", n + 1, "StopNode is not closed.");
		else if (a === 33 && e.charCodeAt(n + 2) === 45 && e.charCodeAt(n + 3) === 45) n = Sr(e, "-->", n + 3, "StopNode is not closed.");
		else if (a === 33 && e.charCodeAt(n + 2) === 91) n = Sr(e, "]]>", n, "StopNode is not closed.") - 2;
		else {
			let r = wr(e, n, ">");
			r && ((r && r.tagName) === t && r.tagExp[r.tagExp.length - 1] !== "/" && i++, n = r.closeIndex);
		}
	}
}
function Er(e, t, n) {
	if (t && typeof e == "string") {
		let t = e.trim();
		return t === "true" || t !== "false" && Qn(e, n);
	} else return rn(e) ? e : "";
}
function Dr(e, t, n, r) {
	if (e) {
		let r = e(t);
		n === t && (n = r), t = r;
	}
	return t = Or(t, r), {
		tagName: t,
		tagExp: n
	};
}
function Or(e, t) {
	if (on.includes(e)) throw Error(`[SECURITY] Invalid name: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
	return an.includes(e) ? t.onDangerousProperty(e) : e;
}
var kr = Wn.getMetaDataSymbol();
function Ar(e, t) {
	if (!e || typeof e != "object") return {};
	if (!t) return e;
	let n = {};
	for (let r in e) if (r.startsWith(t)) {
		let i = r.substring(t.length);
		n[i] = e[r];
	} else n[r] = e[r];
	return n;
}
function jr(e, t, n, r) {
	return Mr(e, t, n, r);
}
function Mr(e, t, n, r) {
	let i, a = {};
	for (let o = 0; o < e.length; o++) {
		let s = e[o], c = Nr(s);
		if (c !== void 0 && c !== t.textNodeName) {
			let e = Ar(s[":@"] || {}, t.attributeNamePrefix);
			n.push(c, e);
		}
		if (c === t.textNodeName) i === void 0 ? i = s[c] : i += "" + s[c];
		else {
			if (c === void 0) continue;
			if (s[c]) {
				let e = Mr(s[c], t, n, r), i = Fr(e, t);
				if (s[":@"] ? Pr(e, s[":@"], r, t) : Object.keys(e).length === 1 && e[t.textNodeName] !== void 0 && !t.alwaysCreateTextNode ? e = e[t.textNodeName] : Object.keys(e).length === 0 && (t.alwaysCreateTextNode ? e[t.textNodeName] = "" : e = ""), s[kr] !== void 0 && typeof e == "object" && e && (e[kr] = s[kr]), a[c] !== void 0 && Object.prototype.hasOwnProperty.call(a, c)) Array.isArray(a[c]) || (a[c] = [a[c]]), a[c].push(e);
				else {
					let n = t.jPath ? r.toString() : r;
					t.isArray(c, n, i) ? a[c] = [e] : a[c] = e;
				}
				c !== void 0 && c !== t.textNodeName && n.pop();
			}
		}
	}
	return typeof i == "string" ? i.length > 0 && (a[t.textNodeName] = i) : i !== void 0 && (a[t.textNodeName] = i), a;
}
function Nr(e) {
	let t = Object.keys(e);
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (n !== ":@") return n;
	}
}
function Pr(e, t, n, r) {
	if (t) {
		let i = Object.keys(t), a = i.length;
		for (let o = 0; o < a; o++) {
			let a = i[o], s = a.startsWith(r.attributeNamePrefix) ? a.substring(r.attributeNamePrefix.length) : a, c = r.jPath ? n.toString() + "." + s : n;
			r.isArray(a, c, !0, !0) ? e[a] = [t[a]] : e[a] = t[a];
		}
	}
}
function Fr(e, t) {
	let { textNodeName: n } = t, r = Object.keys(e).length;
	return !!(r === 0 || r === 1 && (e[n] || typeof e[n] == "boolean" || e[n] === 0));
}
var Ir = class {
	constructor(e) {
		this.externalEntities = {}, this.options = Hn(e);
	}
	parse(e, t) {
		if (typeof e != "string" && e.toString) e = e.toString();
		else if (typeof e != "string") throw Error("XML data is accepted in String or Bytes[] form.");
		if (t) {
			t === !0 && (t = {});
			let n = cn(e, t);
			if (n !== !0) throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`);
		}
		let n = new dr(this.options, this.externalEntities), r = n.parseXml(e);
		return this.options.preserveOrder || r === void 0 ? r : jr(r, this.options, n.matcher, n.readonlyMatcher);
	}
	addEntity(e, t) {
		if (t.indexOf("&") !== -1) throw Error("Entity value can't have '&'");
		if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
		if (t === "&") throw Error("An entity with value '&' is not permitted");
		this.externalEntities[e] = t;
	}
	static getMetaDataSymbol() {
		return Wn.getMetaDataSymbol();
	}
}, Lr = "\n";
function Rr(e, t) {
	let n = "";
	t.format && t.indentBy.length > 0 && (n = Lr);
	let r = [];
	if (t.stopNodes && Array.isArray(t.stopNodes)) for (let e = 0; e < t.stopNodes.length; e++) {
		let n = t.stopNodes[e];
		typeof n == "string" ? r.push(new ar(n)) : n instanceof ar && r.push(n);
	}
	let i = new cr();
	return zr(e, t, n, i, r);
}
function zr(e, t, n, r, i) {
	let a = "", o = !1;
	if (t.maxNestedTags && r.getDepth() > t.maxNestedTags) throw Error("Maximum nested tags exceeded");
	if (!Array.isArray(e)) {
		if (e != null) {
			let n = e.toString();
			return n = Kr(n, t), n;
		}
		return "";
	}
	for (let s = 0; s < e.length; s++) {
		let c = e[s], l = Ur(c);
		if (l === void 0) continue;
		let u = Br(c[":@"], t);
		r.push(l, u);
		let d = Gr(r, i);
		if (l === t.textNodeName) {
			let e = c[l];
			d || (e = t.tagValueProcessor(l, e), e = Kr(e, t)), o && (a += n), a += e, o = !1, r.pop();
			continue;
		} else if (l === t.cdataPropName) {
			o && (a += n);
			let e = c[l][0][t.textNodeName], i = String(e).replace(/\]\]>/g, "]]]]><![CDATA[>");
			a += `<![CDATA[${i}]]>`, o = !1, r.pop();
			continue;
		} else if (l === t.commentPropName) {
			let e = c[l][0][t.textNodeName], i = String(e).replace(/--/g, "- -").replace(/-$/, "- ");
			a += n + `<!--${i}-->`, o = !0, r.pop();
			continue;
		} else if (l[0] === "?") {
			let e = Wr(c[":@"], t, d), i = l === "?xml" ? "" : n, s = c[l][0][t.textNodeName];
			s = s.length === 0 ? "" : " " + s, a += i + `<${l}${s}${e}?>`, o = !0, r.pop();
			continue;
		}
		let f = n;
		f !== "" && (f += t.indentBy);
		let p = n + `<${l}${Wr(c[":@"], t, d)}`, m;
		m = d ? Vr(c[l], t) : zr(c[l], t, f, r, i), t.unpairedTags.indexOf(l) === -1 ? (!m || m.length === 0) && t.suppressEmptyNode ? a += p + "/>" : m && m.endsWith(">") ? a += p + `>${m}${n}</${l}>` : (a += p + ">", m && n !== "" && (m.includes("/>") || m.includes("</")) ? a += n + t.indentBy + m + n : a += m, a += `</${l}>`) : t.suppressUnpairedNode ? a += p + ">" : a += p + "/>", o = !0, r.pop();
	}
	return a;
}
function Br(e, t) {
	if (!e || t.ignoreAttributes) return null;
	let n = {}, r = !1;
	for (let i in e) {
		if (!Object.prototype.hasOwnProperty.call(e, i)) continue;
		let a = i.startsWith(t.attributeNamePrefix) ? i.substr(t.attributeNamePrefix.length) : i;
		n[a] = e[i], r = !0;
	}
	return r ? n : null;
}
function Vr(e, t) {
	if (!Array.isArray(e)) return e == null ? "" : e.toString();
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e[r], a = Ur(i);
		if (a === t.textNodeName) n += i[a];
		else if (a === t.cdataPropName) n += i[a][0][t.textNodeName];
		else if (a === t.commentPropName) n += i[a][0][t.textNodeName];
		else {
			if (a && a[0] === "?") continue;
			if (a) {
				let e = Hr(i[":@"], t), r = Vr(i[a], t);
				!r || r.length === 0 ? n += `<${a}${e}/>` : n += `<${a}${e}>${r}</${a}>`;
			}
		}
	}
	return n;
}
function Hr(e, t) {
	let n = "";
	if (e && !t.ignoreAttributes) for (let r in e) {
		if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
		let i = e[r];
		i === !0 && t.suppressBooleanAttributes ? n += ` ${r.substr(t.attributeNamePrefix.length)}` : n += ` ${r.substr(t.attributeNamePrefix.length)}="${i}"`;
	}
	return n;
}
function Ur(e) {
	let t = Object.keys(e);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (Object.prototype.hasOwnProperty.call(e, r) && r !== ":@") return r;
	}
}
function Wr(e, t, n) {
	let r = "";
	if (e && !t.ignoreAttributes) for (let i in e) {
		if (!Object.prototype.hasOwnProperty.call(e, i)) continue;
		let a;
		n ? a = e[i] : (a = t.attributeValueProcessor(i, e[i]), a = Kr(a, t)), a === !0 && t.suppressBooleanAttributes ? r += ` ${i.substr(t.attributeNamePrefix.length)}` : r += ` ${i.substr(t.attributeNamePrefix.length)}="${a}"`;
	}
	return r;
}
function Gr(e, t) {
	if (!t || t.length === 0) return !1;
	for (let n = 0; n < t.length; n++) if (e.matches(t[n])) return !0;
	return !1;
}
function Kr(e, t) {
	if (e && e.length > 0 && t.processEntities) for (let n = 0; n < t.entities.length; n++) {
		let r = t.entities[n];
		e = e.replace(r.regex, r.val);
	}
	return e;
}
function qr(e) {
	return typeof e == "function" ? e : Array.isArray(e) ? (t) => {
		for (let n of e) if (typeof n == "string" && t === n || n instanceof RegExp && n.test(t)) return !0;
	} : () => !1;
}
var Jr = {
	attributeNamePrefix: "@_",
	attributesGroupName: !1,
	textNodeName: "#text",
	ignoreAttributes: !0,
	cdataPropName: !1,
	format: !1,
	indentBy: "  ",
	suppressEmptyNode: !1,
	suppressUnpairedNode: !0,
	suppressBooleanAttributes: !0,
	tagValueProcessor: function(e, t) {
		return t;
	},
	attributeValueProcessor: function(e, t) {
		return t;
	},
	preserveOrder: !1,
	commentPropName: !1,
	unpairedTags: [],
	entities: [
		{
			regex: /* @__PURE__ */ RegExp("&", "g"),
			val: "&amp;"
		},
		{
			regex: /* @__PURE__ */ RegExp(">", "g"),
			val: "&gt;"
		},
		{
			regex: /* @__PURE__ */ RegExp("<", "g"),
			val: "&lt;"
		},
		{
			regex: /* @__PURE__ */ RegExp("'", "g"),
			val: "&apos;"
		},
		{
			regex: /* @__PURE__ */ RegExp("\"", "g"),
			val: "&quot;"
		}
	],
	processEntities: !0,
	stopNodes: [],
	oneListGroup: !1,
	maxNestedTags: 100,
	jPath: !0
};
function Yr(e) {
	if (this.options = Object.assign({}, Jr, e), this.options.stopNodes && Array.isArray(this.options.stopNodes) && (this.options.stopNodes = this.options.stopNodes.map((e) => typeof e == "string" && e.startsWith("*.") ? ".." + e.substring(2) : e)), this.stopNodeExpressions = [], this.options.stopNodes && Array.isArray(this.options.stopNodes)) for (let e = 0; e < this.options.stopNodes.length; e++) {
		let t = this.options.stopNodes[e];
		typeof t == "string" ? this.stopNodeExpressions.push(new ar(t)) : t instanceof ar && this.stopNodeExpressions.push(t);
	}
	this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
		return !1;
	} : (this.ignoreAttributesFn = qr(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = Qr), this.processTextOrObjNode = Xr, this.options.format ? (this.indentate = Zr, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
		return "";
	}, this.tagEndChar = ">", this.newLine = "");
}
Yr.prototype.build = function(e) {
	if (this.options.preserveOrder) return Rr(e, this.options);
	{
		Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = { [this.options.arrayNodeName]: e });
		let t = new cr();
		return this.j2x(e, 0, t).val;
	}
}, Yr.prototype.j2x = function(e, t, n) {
	let r = "", i = "";
	if (this.options.maxNestedTags && n.getDepth() >= this.options.maxNestedTags) throw Error("Maximum nested tags exceeded");
	let a = this.options.jPath ? n.toString() : n, o = this.checkStopNode(n);
	for (let s in e) if (Object.prototype.hasOwnProperty.call(e, s)) if (typeof e[s] > "u") this.isAttribute(s) && (i += "");
	else if (e[s] === null) this.isAttribute(s) || s === this.options.cdataPropName ? i += "" : s[0] === "?" ? i += this.indentate(t) + "<" + s + "?" + this.tagEndChar : i += this.indentate(t) + "<" + s + "/" + this.tagEndChar;
	else if (e[s] instanceof Date) i += this.buildTextValNode(e[s], s, "", t, n);
	else if (typeof e[s] != "object") {
		let c = this.isAttribute(s);
		if (c && !this.ignoreAttributesFn(c, a)) r += this.buildAttrPairStr(c, "" + e[s], o);
		else if (!c) if (s === this.options.textNodeName) {
			let t = this.options.tagValueProcessor(s, "" + e[s]);
			i += this.replaceEntitiesValue(t);
		} else {
			n.push(s);
			let r = this.checkStopNode(n);
			if (n.pop(), r) {
				let n = "" + e[s];
				n === "" ? i += this.indentate(t) + "<" + s + this.closeTag(s) + this.tagEndChar : i += this.indentate(t) + "<" + s + ">" + n + "</" + s + this.tagEndChar;
			} else i += this.buildTextValNode(e[s], s, "", t, n);
		}
	} else if (Array.isArray(e[s])) {
		let r = e[s].length, a = "", o = "";
		for (let c = 0; c < r; c++) {
			let r = e[s][c];
			if (!(typeof r > "u")) if (r === null) s[0] === "?" ? i += this.indentate(t) + "<" + s + "?" + this.tagEndChar : i += this.indentate(t) + "<" + s + "/" + this.tagEndChar;
			else if (typeof r == "object") if (this.options.oneListGroup) {
				n.push(s);
				let e = this.j2x(r, t + 1, n);
				n.pop(), a += e.val, this.options.attributesGroupName && r.hasOwnProperty(this.options.attributesGroupName) && (o += e.attrStr);
			} else a += this.processTextOrObjNode(r, s, t, n);
			else if (this.options.oneListGroup) {
				let e = this.options.tagValueProcessor(s, r);
				e = this.replaceEntitiesValue(e), a += e;
			} else {
				n.push(s);
				let e = this.checkStopNode(n);
				if (n.pop(), e) {
					let e = "" + r;
					e === "" ? a += this.indentate(t) + "<" + s + this.closeTag(s) + this.tagEndChar : a += this.indentate(t) + "<" + s + ">" + e + "</" + s + this.tagEndChar;
				} else a += this.buildTextValNode(r, s, "", t, n);
			}
		}
		this.options.oneListGroup && (a = this.buildObjectNode(a, s, o, t)), i += a;
	} else if (this.options.attributesGroupName && s === this.options.attributesGroupName) {
		let t = Object.keys(e[s]), n = t.length;
		for (let i = 0; i < n; i++) r += this.buildAttrPairStr(t[i], "" + e[s][t[i]], o);
	} else i += this.processTextOrObjNode(e[s], s, t, n);
	return {
		attrStr: r,
		val: i
	};
}, Yr.prototype.buildAttrPairStr = function(e, t, n) {
	return n || (t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t)), this.options.suppressBooleanAttributes && t === "true" ? " " + e : " " + e + "=\"" + t + "\"";
};
function Xr(e, t, n, r) {
	let i = this.extractAttributes(e);
	if (r.push(t, i), this.checkStopNode(r)) {
		let i = this.buildRawContent(e), a = this.buildAttributesForStopNode(e);
		return r.pop(), this.buildObjectNode(i, t, a, n);
	}
	let a = this.j2x(e, n + 1, r);
	return r.pop(), e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1 ? this.buildTextValNode(e[this.options.textNodeName], t, a.attrStr, n, r) : this.buildObjectNode(a.val, t, a.attrStr, n);
}
Yr.prototype.extractAttributes = function(e) {
	if (!e || typeof e != "object") return null;
	let t = {}, n = !1;
	if (this.options.attributesGroupName && e[this.options.attributesGroupName]) {
		let r = e[this.options.attributesGroupName];
		for (let e in r) {
			if (!Object.prototype.hasOwnProperty.call(r, e)) continue;
			let i = e.startsWith(this.options.attributeNamePrefix) ? e.substring(this.options.attributeNamePrefix.length) : e;
			t[i] = r[e], n = !0;
		}
	} else for (let r in e) {
		if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
		let i = this.isAttribute(r);
		i && (t[i] = e[r], n = !0);
	}
	return n ? t : null;
}, Yr.prototype.buildRawContent = function(e) {
	if (typeof e == "string") return e;
	if (typeof e != "object" || !e) return String(e);
	if (e[this.options.textNodeName] !== void 0) return e[this.options.textNodeName];
	let t = "";
	for (let n in e) {
		if (!Object.prototype.hasOwnProperty.call(e, n) || this.isAttribute(n) || this.options.attributesGroupName && n === this.options.attributesGroupName) continue;
		let r = e[n];
		if (n === this.options.textNodeName) t += r;
		else if (Array.isArray(r)) {
			for (let e of r) if (typeof e == "string" || typeof e == "number") t += `<${n}>${e}</${n}>`;
			else if (typeof e == "object" && e) {
				let r = this.buildRawContent(e), i = this.buildAttributesForStopNode(e);
				r === "" ? t += `<${n}${i}/>` : t += `<${n}${i}>${r}</${n}>`;
			}
		} else if (typeof r == "object" && r) {
			let e = this.buildRawContent(r), i = this.buildAttributesForStopNode(r);
			e === "" ? t += `<${n}${i}/>` : t += `<${n}${i}>${e}</${n}>`;
		} else t += `<${n}>${r}</${n}>`;
	}
	return t;
}, Yr.prototype.buildAttributesForStopNode = function(e) {
	if (!e || typeof e != "object") return "";
	let t = "";
	if (this.options.attributesGroupName && e[this.options.attributesGroupName]) {
		let n = e[this.options.attributesGroupName];
		for (let e in n) {
			if (!Object.prototype.hasOwnProperty.call(n, e)) continue;
			let r = e.startsWith(this.options.attributeNamePrefix) ? e.substring(this.options.attributeNamePrefix.length) : e, i = n[e];
			i === !0 && this.options.suppressBooleanAttributes ? t += " " + r : t += " " + r + "=\"" + i + "\"";
		}
	} else for (let n in e) {
		if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
		let r = this.isAttribute(n);
		if (r) {
			let i = e[n];
			i === !0 && this.options.suppressBooleanAttributes ? t += " " + r : t += " " + r + "=\"" + i + "\"";
		}
	}
	return t;
}, Yr.prototype.buildObjectNode = function(e, t, n, r) {
	if (e === "") return t[0] === "?" ? this.indentate(r) + "<" + t + n + "?" + this.tagEndChar : this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
	{
		let i = "</" + t + this.tagEndChar, a = "";
		return t[0] === "?" && (a = "?", i = ""), (n || n === "") && e.indexOf("<") === -1 ? this.indentate(r) + "<" + t + n + a + ">" + e + i : this.options.commentPropName !== !1 && t === this.options.commentPropName && a.length === 0 ? this.indentate(r) + `<!--${e}-->` + this.newLine : this.indentate(r) + "<" + t + n + a + this.tagEndChar + e + this.indentate(r) + i;
	}
}, Yr.prototype.closeTag = function(e) {
	let t = "";
	return this.options.unpairedTags.indexOf(e) === -1 ? t = this.options.suppressEmptyNode ? "/" : `></${e}` : this.options.suppressUnpairedNode || (t = "/"), t;
}, Yr.prototype.checkStopNode = function(e) {
	if (!this.stopNodeExpressions || this.stopNodeExpressions.length === 0) return !1;
	for (let t = 0; t < this.stopNodeExpressions.length; t++) if (e.matches(this.stopNodeExpressions[t])) return !0;
	return !1;
}, Yr.prototype.buildTextValNode = function(e, t, n, r, i) {
	if (this.options.cdataPropName !== !1 && t === this.options.cdataPropName) {
		let t = String(e).replace(/\]\]>/g, "]]]]><![CDATA[>");
		return this.indentate(r) + `<![CDATA[${t}]]>` + this.newLine;
	} else if (this.options.commentPropName !== !1 && t === this.options.commentPropName) {
		let t = String(e).replace(/--/g, "- -").replace(/-$/, "- ");
		return this.indentate(r) + `<!--${t}-->` + this.newLine;
	} else {
		if (t[0] === "?") return this.indentate(r) + "<" + t + n + "?" + this.tagEndChar;
		{
			let i = this.options.tagValueProcessor(t, e);
			return i = this.replaceEntitiesValue(i), i === "" ? this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(r) + "<" + t + n + ">" + i + "</" + t + this.tagEndChar;
		}
	}
}, Yr.prototype.replaceEntitiesValue = function(e) {
	if (e && e.length > 0 && this.options.processEntities) for (let t = 0; t < this.options.entities.length; t++) {
		let n = this.options.entities[t];
		e = e.replace(n.regex, n.val);
	}
	return e;
};
function Zr(e) {
	return this.options.indentBy.repeat(e);
}
function Qr(e) {
	return e.startsWith(this.options.attributeNamePrefix) && e !== this.options.textNodeName ? e.substr(this.attrPrefixLen) : !1;
}
var $r = class {};
X($r, "parser", new Ir({
	allowBooleanAttributes: !0,
	attributeNamePrefix: "",
	ignoreAttributes: !1,
	ignoreDeclaration: !0,
	ignorePiTags: !0,
	numberParseOptions: {
		leadingZeros: !0,
		hex: !0
	},
	parseAttributeValue: !0,
	preserveOrder: !1,
	processEntities: !1,
	removeNSPrefix: !0,
	trimValues: !0
})), X($r, "builder", new Yr({
	attributeNamePrefix: "$",
	ignoreAttributes: !1,
	suppressBooleanAttributes: !1
}));
var ei = class e {
	static join(e) {
		let t = {};
		for (let n of e) for (let e in n) if (!t[e]) t[e] = new Set(n[e]);
		else for (let r of n[e]) t[e].add(r);
		return t;
	}
	static intersect(t) {
		if (t.length === 0) return {};
		let n = e.clone(t[0]);
		for (let e = 1; e < t.length; e++) {
			let r = t[e], i = {};
			for (let e in n) if (r[e]) {
				let t = /* @__PURE__ */ new Set();
				for (let i of n[e]) r[e].has(i) && t.add(i);
				t.size > 0 && (i[e] = t);
			}
			n = i;
		}
		return n;
	}
	static clone(e) {
		let t = {};
		for (let n in e) t[n] = new Set(e[n]);
		return t;
	}
	static remove(t, n, r = !1) {
		r && (t = e.clone(t));
		for (let e in n) if (t[e]) {
			for (let r of n[e]) t[e].delete(r);
			t[e].size === 0 && delete t[e];
		}
	}
	static add(t, n, r = !1) {
		r && (t = e.clone(t));
		for (let e in n) if (!t[e]) t[e] = new Set(n[e]);
		else for (let r of n[e]) t[e].add(r);
	}
	static append(e, t, ...n) {
		let r = e[t];
		r || (r = /* @__PURE__ */ new Set(), e[t] = r);
		for (let e of n) r.add(e);
	}
	static isEqual(e, t) {
		let n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (let r of n) {
			if (!t[r] || e[r].size !== t[r].size) return !1;
			for (let n of e[r]) if (!t[r].has(n)) return !1;
		}
		return !0;
	}
	static isEmpty(e) {
		return Object.values(e).reduce((e, t) => e + t.size, 0) === 0;
	}
	static toRaw(e) {
		let t = {};
		for (let n in e) t[n] = Array.from(e[n]);
		return t;
	}
	static fromRaw(e) {
		let t = {};
		for (let n in e) t[n] = new Set(e[n]);
		return t;
	}
}, ti = class extends Map {
	constructor(e) {
		super(e), X(this, "onItemSet", new Z()), X(this, "onItemUpdated", new Z()), X(this, "onItemDeleted", new Z()), X(this, "onCleared", new Z()), X(this, "guard", () => !0);
	}
	clear() {
		super.clear(), this.onCleared.trigger();
	}
	set(e, t) {
		let n = this.has(e);
		if (!(this.guard ?? (() => !0))(e, t)) return this;
		let r = super.set(e, t);
		return n ? (this.onItemUpdated ||= new Z(), this.onItemUpdated.trigger({
			key: e,
			value: t
		})) : (this.onItemSet ||= new Z(), this.onItemSet.trigger({
			key: e,
			value: t
		})), r;
	}
	add(e) {
		let t = $t.create();
		return this.set(t, e), t;
	}
	delete(e) {
		let t = super.delete(e);
		return t && this.onItemDeleted.trigger(e), t;
	}
	dispose() {
		this.clear(), this.onItemSet.reset(), this.onItemDeleted.reset(), this.onCleared.reset();
	}
}, ni = class {
	static isEntry(e) {
		return (/* @__PURE__ */ new Set([
			"Boolean",
			"Color",
			"Text",
			"Number",
			"Select",
			"Vector3",
			"TextSet",
			"None"
		])).has(e.type);
	}
	static copySchema(e, t = {}) {
		for (let n in e) {
			let r = e[n];
			this.isEntry(r) ? t[n] = this.copyEntry(r) : (t[n] = {}, this.copySchema(r, t[n]));
		}
		return t;
	}
	static copyEntry(e) {
		if (e.type === "Boolean") {
			let t = e;
			return {
				type: t.type,
				value: t.value
			};
		}
		if (e.type === "Color") {
			let t = e;
			return {
				type: t.type,
				value: t.value.clone()
			};
		}
		if (e.type === "Text") {
			let t = e;
			return {
				type: t.type,
				value: t.value
			};
		}
		if (e.type === "Number") {
			let t = e;
			return {
				type: t.type,
				value: t.value,
				min: t.min,
				max: t.max,
				interpolable: t.interpolable
			};
		}
		if (e.type === "Select") {
			let t = e;
			return {
				type: t.type,
				value: t.value,
				multiple: t.multiple,
				options: new Set(t.options)
			};
		}
		if (e.type === "Vector3") {
			let t = e;
			return {
				type: t.type,
				value: t.value.clone()
			};
		}
		if (e.type === "TextSet") {
			let t = e;
			return {
				type: t.type,
				value: new Set(t.value)
			};
		}
		if (e.type === "None") {
			let t = e;
			return {
				type: t.type,
				value: t.value
			};
		}
		throw Error("Invalid entry!");
	}
}, ri = class {
	constructor() {
		X(this, "list", /* @__PURE__ */ new Set());
	}
	add(e) {
		for (let t of e) this.list.add(t);
	}
	remove(e) {
		for (let t of e) this.list.delete(t);
	}
	set(e) {
		for (let t of this.list) t.enabled = e;
	}
	reset() {
		for (let e of this.list) e.reset();
	}
}, ii = class {
	constructor(e, t, n, r) {
		X(this, "_component"), X(this, "name"), X(this, "uuid"), this._component = e, this.name = n, this.uuid = r ?? $t.create(), t.get(oi).list.set(this.uuid, this);
	}
	get controls() {
		return ni.copySchema(this._config);
	}
	set(e) {
		for (let t in e) if (t in this) {
			let n = t;
			this[n] = e[t].value;
		}
	}
	export(e = this._config, t = {}) {
		for (let n in e) {
			let r = e[n];
			if (ni.isEntry(r)) if (r.type === "Color") {
				let { r: e, g: i, b: a } = r.value;
				t[n] = {
					...r,
					value: {
						r: e,
						g: i,
						b: a
					}
				};
			} else if (r.type === "Vector3") {
				let { x: e, y: i, z: a } = r.value;
				t[n] = {
					...r,
					value: {
						x: e,
						y: i,
						z: a
					}
				};
			} else if (r.type === "TextSet") {
				let e = Array.from(r.value);
				t[n] = {
					...r,
					value: e
				};
			} else if (r.type === "Select") {
				let e = Array.from(r.options);
				t[n] = {
					...r,
					options: e
				};
			} else t[n] = { ...r };
			else t[n] = {}, this.export(r, t[n]);
		}
		return t;
	}
	import(e, t = {}, n = !0) {
		for (let n in e) {
			let r = e[n];
			if (ni.isEntry(r)) if (r.type === "Color") {
				let { r: e, g: i, b: a } = r.value;
				t[n] = {
					...r,
					value: new N(e, i, a)
				};
			} else if (r.type === "Vector3") {
				let { x: e, y: i, z: a } = r.value;
				t[n] = {
					...r,
					value: new G(e, i, a)
				};
			} else r.type === "TextSet" ? t[n] = {
				...r,
				value: new Set(r.value)
			} : r.type === "Select" ? t[n] = {
				...r,
				options: new Set(r.options)
			} : t[n] = { ...r };
			else t[n] = {}, this.import(r, t[n], !1);
		}
		n && this.set(t);
	}
}, ai = class e extends qt {
	constructor(t) {
		super(t), X(this, "list", new a()), X(this, "enabled", !0), t.add(e.uuid, this);
	}
};
X(ai, "uuid", "b8c764e0-6b24-4e77-9a32-35fa728ee5b4");
var oi = ai, si = class {
	constructor(e) {
		X(this, "_event"), X(this, "_position", new O()), X(this, "onDisposed", new Z()), X(this, "updateMouseInfo", (e) => {
			this._event = e;
		}), this.dom = e, this.setupEvents(!0);
	}
	get position() {
		return this.updatePosition(!1), this._position.clone();
	}
	get rawPosition() {
		return this.updatePosition(!0), this._position.clone();
	}
	dispose() {
		this.setupEvents(!1), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	updatePosition(e) {
		if (this._event) {
			let t = this.dom.getBoundingClientRect();
			this._position.x = this.getPositionX(t, this._event, e), this._position.y = this.getPositionY(t, this._event, e);
		}
	}
	getPositionY(e, t, n) {
		let r = this.getDataObject(t);
		return n ? r.clientY : -((r.clientY - e.top) / (e.bottom - e.top)) * 2 + 1;
	}
	getPositionX(e, t, n) {
		let r = this.getDataObject(t);
		return n ? r.clientX : (r.clientX - e.left) / (e.right - e.left) * 2 - 1;
	}
	getDataObject(e) {
		return e instanceof MouseEvent ? e : e.touches[0];
	}
	setupEvents(e) {
		e ? (this.dom.addEventListener("pointermove", this.updateMouseInfo), this.dom.addEventListener("touchstart", this.updateMouseInfo)) : (this.dom.removeEventListener("pointermove", this.updateMouseInfo), this.dom.removeEventListener("touchstart", this.updateMouseInfo));
	}
}, ci = 0, li = 1, ui = 2, di = 0, fi = 1, pi = 2, mi = 1.25, hi = 1, gi = 32, _i = gi / 4, vi = 65535, yi = 2 ** -24, bi = Symbol("SKIP_GENERATION"), xi = {
	strategy: ci,
	maxDepth: 40,
	maxLeafSize: 10,
	useSharedArrayBuffer: !1,
	setBoundingBox: !0,
	onProgress: null,
	indirect: !1,
	verbose: !0,
	range: null,
	[bi]: !1
};
function Si(e, t, n) {
	return n.min.x = t[e], n.min.y = t[e + 1], n.min.z = t[e + 2], n.max.x = t[e + 3], n.max.y = t[e + 4], n.max.z = t[e + 5], n;
}
function Ci(e) {
	let t = -1, n = -Infinity;
	for (let r = 0; r < 3; r++) {
		let i = e[r + 3] - e[r];
		i > n && (n = i, t = r);
	}
	return t;
}
function wi(e, t) {
	t.set(e);
}
function Ti(e, t, n) {
	let r, i;
	for (let a = 0; a < 3; a++) {
		let o = a + 3;
		r = e[a], i = t[a], n[a] = r < i ? r : i, r = e[o], i = t[o], n[o] = r > i ? r : i;
	}
}
function Ei(e, t, n) {
	for (let r = 0; r < 3; r++) {
		let i = t[e + 2 * r], a = t[e + 2 * r + 1], o = i - a, s = i + a;
		o < n[r] && (n[r] = o), s > n[r + 3] && (n[r + 3] = s);
	}
}
function Di(e) {
	let t = e[3] - e[0], n = e[4] - e[1], r = e[5] - e[2];
	return 2 * (t * n + n * r + r * t);
}
function Oi(e, t) {
	return t[e + 15] === vi;
}
function ki(e, t) {
	return t[e + 6];
}
function Ai(e, t) {
	return t[e + 14];
}
function ji(e) {
	return e + _i;
}
function Mi(e, t) {
	return e + t[e + 6] * _i;
}
function Ni(e, t) {
	return t[e + 7];
}
function Pi(e, t, n, r, i) {
	let a = Infinity, o = Infinity, s = Infinity, c = -Infinity, l = -Infinity, u = -Infinity, d = Infinity, f = Infinity, p = Infinity, m = -Infinity, h = -Infinity, g = -Infinity, _ = e.offset || 0;
	for (let r = (t - _) * 6, i = (t + n - _) * 6; r < i; r += 6) {
		let t = e[r + 0], n = e[r + 1], i = t - n, _ = t + n;
		i < a && (a = i), _ > c && (c = _), t < d && (d = t), t > m && (m = t);
		let v = e[r + 2], y = e[r + 3], b = v - y, x = v + y;
		b < o && (o = b), x > l && (l = x), v < f && (f = v), v > h && (h = v);
		let S = e[r + 4], C = e[r + 5], w = S - C, T = S + C;
		w < s && (s = w), T > u && (u = T), S < p && (p = S), S > g && (g = S);
	}
	r[0] = a, r[1] = o, r[2] = s, r[3] = c, r[4] = l, r[5] = u, i[0] = d, i[1] = f, i[2] = p, i[3] = m, i[4] = h, i[5] = g;
}
var Fi = 32, Ii = (e, t) => e.candidate - t.candidate, Li = /* @__PURE__ */ Array(Fi).fill().map(() => ({
	count: 0,
	bounds: /* @__PURE__ */ new Float32Array(6),
	rightCacheBounds: /* @__PURE__ */ new Float32Array(6),
	leftCacheBounds: /* @__PURE__ */ new Float32Array(6),
	candidate: 0
})), Ri = /* @__PURE__ */ new Float32Array(6);
function zi(e, t, n, r, i, a) {
	let o = -1, s = 0;
	if (a === ci) o = Ci(t), o !== -1 && (s = (t[o] + t[o + 3]) / 2);
	else if (a === li) o = Ci(e), o !== -1 && (s = Bi(n, r, i, o));
	else if (a === ui) {
		let a = Di(e), c = mi * i, l = n.offset || 0, u = (r - l) * 6, d = (r + i - l) * 6;
		for (let e = 0; e < 3; e++) {
			let r = t[e], l = (t[e + 3] - r) / Fi;
			if (i < Fi / 4) {
				let t = [...Li];
				t.length = i;
				let r = 0;
				for (let i = u; i < d; i += 6, r++) {
					let a = t[r];
					a.candidate = n[i + 2 * e], a.count = 0;
					let { bounds: o, leftCacheBounds: s, rightCacheBounds: c } = a;
					for (let e = 0; e < 3; e++) c[e] = Infinity, c[e + 3] = -Infinity, s[e] = Infinity, s[e + 3] = -Infinity, o[e] = Infinity, o[e + 3] = -Infinity;
					Ei(i, n, o);
				}
				t.sort(Ii);
				let l = i;
				for (let e = 0; e < l; e++) {
					let n = t[e];
					for (; e + 1 < l && t[e + 1].candidate === n.candidate;) t.splice(e + 1, 1), l--;
				}
				for (let r = u; r < d; r += 6) {
					let i = n[r + 2 * e];
					for (let e = 0; e < l; e++) {
						let a = t[e];
						i >= a.candidate ? Ei(r, n, a.rightCacheBounds) : (Ei(r, n, a.leftCacheBounds), a.count++);
					}
				}
				for (let n = 0; n < l; n++) {
					let r = t[n], l = r.count, u = i - r.count, d = r.leftCacheBounds, f = r.rightCacheBounds, p = 0;
					l !== 0 && (p = Di(d) / a);
					let m = 0;
					u !== 0 && (m = Di(f) / a);
					let h = hi + mi * (p * l + m * u);
					h < c && (o = e, c = h, s = r.candidate);
				}
			} else {
				for (let e = 0; e < Fi; e++) {
					let t = Li[e];
					t.count = 0, t.candidate = r + l + e * l;
					let n = t.bounds;
					for (let e = 0; e < 3; e++) n[e] = Infinity, n[e + 3] = -Infinity;
				}
				for (let t = u; t < d; t += 6) {
					let i = ~~((n[t + 2 * e] - r) / l);
					i >= Fi && (i = Fi - 1);
					let a = Li[i];
					a.count++, Ei(t, n, a.bounds);
				}
				let t = Li[Fi - 1];
				wi(t.bounds, t.rightCacheBounds);
				for (let e = Fi - 2; e >= 0; e--) {
					let t = Li[e], n = Li[e + 1];
					Ti(t.bounds, n.rightCacheBounds, t.rightCacheBounds);
				}
				let f = 0;
				for (let t = 0; t < Fi - 1; t++) {
					let n = Li[t], r = n.count, l = n.bounds, u = Li[t + 1].rightCacheBounds;
					r !== 0 && (f === 0 ? wi(l, Ri) : Ti(l, Ri, Ri)), f += r;
					let d = 0, p = 0;
					f !== 0 && (d = Di(Ri) / a);
					let m = i - f;
					m !== 0 && (p = Di(u) / a);
					let h = hi + mi * (d * f + p * m);
					h < c && (o = e, c = h, s = n.candidate);
				}
			}
		}
	} else console.warn(`BVH: Invalid build strategy value ${a} used.`);
	return {
		axis: o,
		pos: s
	};
}
function Bi(e, t, n, r) {
	let i = 0, a = e.offset;
	for (let o = t, s = t + n; o < s; o++) i += e[(o - a) * 6 + r * 2];
	return i / n;
}
var Vi = class {
	constructor() {
		this.boundingData = /* @__PURE__ */ new Float32Array(6);
	}
};
function Hi(e, t, n, r, i, a) {
	let o = r, s = r + i - 1, c = a.pos, l = a.axis * 2, u = n.offset || 0;
	for (;;) {
		for (; o <= s && n[(o - u) * 6 + l] < c;) o++;
		for (; o <= s && n[(s - u) * 6 + l] >= c;) s--;
		if (o < s) {
			for (let n = 0; n < t; n++) {
				let r = e[o * t + n];
				e[o * t + n] = e[s * t + n], e[s * t + n] = r;
			}
			for (let e = 0; e < 6; e++) {
				let t = o - u, r = s - u, i = n[t * 6 + e];
				n[t * 6 + e] = n[r * 6 + e], n[r * 6 + e] = i;
			}
			o++, s--;
		} else return o;
	}
}
var Ui, Wi, Gi, Ki, qi = 2 ** 32;
function Ji(e) {
	return "count" in e ? 1 : 1 + Ji(e.left) + Ji(e.right);
}
function Yi(e, t, n) {
	return Ui = new Float32Array(n), Wi = new Uint32Array(n), Gi = new Uint16Array(n), Ki = new Uint8Array(n), Xi(e, t);
}
function Xi(e, t) {
	let n = e / 4, r = e / 2, i = "count" in t, a = t.boundingData;
	for (let e = 0; e < 6; e++) Ui[n + e] = a[e];
	if (i) return t.buffer ? (Ki.set(new Uint8Array(t.buffer), e), e + t.buffer.byteLength) : (Wi[n + 6] = t.offset, Gi[r + 14] = t.count, Gi[r + 15] = vi, e + gi);
	{
		let { left: r, right: i, splitAxis: a } = t, o = Xi(e + gi, r), s = e / gi, c = o / gi - s;
		if (c > qi) throw Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");
		return Wi[n + 6] = c, Wi[n + 7] = a, Xi(o, i);
	}
}
function Zi(e, t, n, r, i, a) {
	let { maxDepth: o, verbose: s, maxLeafSize: c, strategy: l, onProgress: u } = i, d = e.primitiveBuffer, f = e.primitiveBufferStride, p = /* @__PURE__ */ new Float32Array(6), m = !1, h = new Vi();
	return Pi(t, n, r, h.boundingData, p), _(h, n, r, p), h;
	function g(e) {
		u && u((e - a.offset) / a.count);
	}
	function _(e, n, r, i = null, a = 0) {
		if (!m && a >= o && (m = !0, s && console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)), r <= c || a >= o) return g(n + r), e.offset = n, e.count = r, e;
		let u = zi(e.boundingData, i, t, n, r, l);
		if (u.axis === -1) return g(n + r), e.offset = n, e.count = r, e;
		let h = Hi(d, f, t, n, r, u);
		if (h === n || h === n + r) g(n + r), e.offset = n, e.count = r;
		else {
			e.splitAxis = u.axis;
			let i = new Vi(), o = n, s = h - n;
			e.left = i, Pi(t, o, s, i.boundingData, p), _(i, o, s, p, a + 1);
			let c = new Vi(), l = h, d = r - s;
			e.right = c, Pi(t, l, d, c.boundingData, p), _(c, l, d, p, a + 1);
		}
		return e;
	}
}
function Qi(e, t) {
	let n = t.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, r = e.getRootRanges(t.range), i = r[0], a = r[r.length - 1], o = {
		offset: i.offset,
		count: a.offset + a.count - i.offset
	}, s = new Float32Array(6 * o.count);
	s.offset = o.offset, e.computePrimitiveBounds(o.offset, o.count, s), e._roots = r.map((r) => {
		let i = Zi(e, s, r.offset, r.count, t, o), a = Ji(i), c = new n(gi * a);
		return Yi(0, i, c), c;
	});
}
var $i = class {
	constructor(e) {
		this._getNewPrimitive = e, this._primitives = [];
	}
	getPrimitive() {
		let e = this._primitives;
		return e.length === 0 ? this._getNewPrimitive() : e.pop();
	}
	releasePrimitive(e) {
		this._primitives.push(e);
	}
}, ea = /* @__PURE__ */ new class {
	constructor() {
		this.float32Array = null, this.uint16Array = null, this.uint32Array = null;
		let e = [], t = null;
		this.setBuffer = (n) => {
			t && e.push(t), t = n, this.float32Array = new Float32Array(n), this.uint16Array = new Uint16Array(n), this.uint32Array = new Uint32Array(n);
		}, this.clearBuffer = () => {
			t = null, this.float32Array = null, this.uint16Array = null, this.uint32Array = null, e.length !== 0 && this.setBuffer(e.pop());
		};
	}
}(), ta, na, ra = [], ia = /* @__PURE__ */ new $i(() => new _());
function aa(e, t, n, r, i, a) {
	ta = ia.getPrimitive(), na = ia.getPrimitive(), ra.push(ta, na), ea.setBuffer(e._roots[t]);
	let o = oa(0, e.geometry, n, r, i, a);
	ea.clearBuffer(), ia.releasePrimitive(ta), ia.releasePrimitive(na), ra.pop(), ra.pop();
	let s = ra.length;
	return s > 0 && (na = ra[s - 1], ta = ra[s - 2]), o;
}
function oa(e, t, n, r, i = null, a = 0, o = 0) {
	let { float32Array: s, uint16Array: c, uint32Array: l } = ea, u = e * 2;
	if (Oi(u, c)) {
		let t = ki(e, l), n = Ai(u, c);
		return Si(e, s, ta), r(t, n, !1, o, a + e / _i, ta);
	} else {
		let u = function(e) {
			let { uint16Array: t, uint32Array: n } = ea, r = e * 2;
			for (; !Oi(r, t);) e = ji(e), r = e * 2;
			return ki(e, n);
		}, d = function(e) {
			let { uint16Array: t, uint32Array: n } = ea, r = e * 2;
			for (; !Oi(r, t);) e = Mi(e, n), r = e * 2;
			return ki(e, n) + Ai(r, t);
		}, f = ji(e), p = Mi(e, l), m = f, h = p, g, _, v, y;
		if (i && (v = ta, y = na, Si(m, s, v), Si(h, s, y), g = i(v), _ = i(y), _ < g)) {
			m = p, h = f;
			let e = g;
			g = _, _ = e, v = y;
		}
		v || (v = ta, Si(m, s, v));
		let b = Oi(m * 2, c), x = n(v, b, g, o + 1, a + m / _i), S;
		if (x === pi) {
			let e = u(m);
			S = r(e, d(m) - e, !0, o + 1, a + m / _i, v);
		} else S = x && oa(m, t, n, r, i, a, o + 1);
		if (S) return !0;
		y = na, Si(h, s, y);
		let C = Oi(h * 2, c), w = n(y, C, _, o + 1, a + h / _i), T;
		if (w === pi) {
			let e = u(h);
			T = r(e, d(h) - e, !0, o + 1, a + h / _i, y);
		} else T = w && oa(h, t, n, r, i, a, o + 1);
		return !!T;
	}
}
var sa = /* @__PURE__ */ new ea.constructor(), ca = /* @__PURE__ */ new ea.constructor(), la = /* @__PURE__ */ new $i(() => new _()), ua = /* @__PURE__ */ new _(), da = /* @__PURE__ */ new _(), fa = /* @__PURE__ */ new _(), pa = /* @__PURE__ */ new _(), ma = !1;
function ha(e, t, n, r) {
	if (ma) throw Error("MeshBVH: Recursive calls to bvhcast not supported.");
	ma = !0;
	let i = e._roots, a = t._roots, o, s = 0, c = 0, l = new H().copy(n).invert();
	for (let e = 0, t = i.length; e < t; e++) {
		sa.setBuffer(i[e]), c = 0;
		let t = la.getPrimitive();
		Si(0, sa.float32Array, t), t.applyMatrix4(l);
		for (let e = 0, i = a.length; e < i && (ca.setBuffer(a[e]), o = ga(0, 0, n, l, r, s, c, 0, 0, t), ca.clearBuffer(), c += a[e].byteLength / gi, !o); e++);
		if (la.releasePrimitive(t), sa.clearBuffer(), s += i[e].byteLength / gi, o) break;
	}
	return ma = !1, o;
}
function ga(e, t, n, r, i, a = 0, o = 0, s = 0, c = 0, l = null, u = !1) {
	let d, f;
	u ? (d = ca, f = sa) : (d = sa, f = ca);
	let p = d.float32Array, m = d.uint32Array, h = d.uint16Array, g = f.float32Array, _ = f.uint32Array, v = f.uint16Array, y = e * 2, b = t * 2, x = Oi(y, h), S = Oi(b, v), C = !1;
	if (S && x) C = u ? i(ki(t, _), Ai(t * 2, v), ki(e, m), Ai(e * 2, h), c, o + t / _i, s, a + e / _i) : i(ki(e, m), Ai(e * 2, h), ki(t, _), Ai(t * 2, v), s, a + e / _i, c, o + t / _i);
	else if (S) {
		let l = la.getPrimitive();
		Si(t, g, l), l.applyMatrix4(n);
		let d = ji(e), f = Mi(e, m);
		Si(d, p, ua), Si(f, p, da);
		let h = l.intersectsBox(ua), _ = l.intersectsBox(da);
		C = h && ga(t, d, r, n, i, o, a, c, s + 1, l, !u) || _ && ga(t, f, r, n, i, o, a, c, s + 1, l, !u), la.releasePrimitive(l);
	} else {
		let d = ji(t), f = Mi(t, _);
		Si(d, g, fa), Si(f, g, pa);
		let h = l.intersectsBox(fa), v = l.intersectsBox(pa);
		if (h && v) C = ga(e, d, n, r, i, a, o, s, c + 1, l, u) || ga(e, f, n, r, i, a, o, s, c + 1, l, u);
		else if (h) if (x) C = ga(e, d, n, r, i, a, o, s, c + 1, l, u);
		else {
			let t = la.getPrimitive();
			t.copy(fa).applyMatrix4(n);
			let l = ji(e), f = Mi(e, m);
			Si(l, p, ua), Si(f, p, da);
			let h = t.intersectsBox(ua), g = t.intersectsBox(da);
			C = h && ga(d, l, r, n, i, o, a, c, s + 1, t, !u) || g && ga(d, f, r, n, i, o, a, c, s + 1, t, !u), la.releasePrimitive(t);
		}
		else if (v) if (x) C = ga(e, f, n, r, i, a, o, s, c + 1, l, u);
		else {
			let t = la.getPrimitive();
			t.copy(pa).applyMatrix4(n);
			let l = ji(e), d = Mi(e, m);
			Si(l, p, ua), Si(d, p, da);
			let h = t.intersectsBox(ua), g = t.intersectsBox(da);
			C = h && ga(f, l, r, n, i, o, a, c, s + 1, t, !u) || g && ga(f, d, r, n, i, o, a, c, s + 1, t, !u), la.releasePrimitive(t);
		}
	}
	return C;
}
var _a = /* @__PURE__ */ new _(), va = /* @__PURE__ */ new Float32Array(6), ya = class {
	constructor() {
		this._roots = null, this.primitiveBuffer = null, this.primitiveBufferStride = null;
	}
	init(e) {
		e = {
			...xi,
			...e
		}, Qi(this, e);
	}
	getRootRanges() {
		throw Error("BVH: getRootRanges() not implemented");
	}
	writePrimitiveBounds() {
		throw Error("BVH: writePrimitiveBounds() not implemented");
	}
	writePrimitiveRangeBounds(e, t, n, r) {
		let i = Infinity, a = Infinity, o = Infinity, s = -Infinity, c = -Infinity, l = -Infinity;
		for (let n = e, r = e + t; n < r; n++) {
			this.writePrimitiveBounds(n, va, 0);
			let [e, t, r, u, d, f] = va;
			e < i && (i = e), u > s && (s = u), t < a && (a = t), d > c && (c = d), r < o && (o = r), f > l && (l = f);
		}
		return n[r + 0] = i, n[r + 1] = a, n[r + 2] = o, n[r + 3] = s, n[r + 4] = c, n[r + 5] = l, n;
	}
	computePrimitiveBounds(e, t, n) {
		let r = n.offset || 0;
		for (let i = e, a = e + t; i < a; i++) {
			this.writePrimitiveBounds(i, va, 0);
			let [e, t, a, o, s, c] = va, l = (e + o) / 2, u = (t + s) / 2, d = (a + c) / 2, f = (o - e) / 2, p = (s - t) / 2, m = (c - a) / 2, h = (i - r) * 6;
			n[h + 0] = l, n[h + 1] = f + (Math.abs(l) + f) * yi, n[h + 2] = u, n[h + 3] = p + (Math.abs(u) + p) * yi, n[h + 4] = d, n[h + 5] = m + (Math.abs(d) + m) * yi;
		}
		return n;
	}
	shiftPrimitiveOffsets(e) {
		let t = this._indirectBuffer;
		if (t) for (let n = 0, r = t.length; n < r; n++) t[n] += e;
		else {
			let t = this._roots;
			for (let n = 0; n < t.length; n++) {
				let r = t[n], i = new Uint32Array(r), a = new Uint16Array(r), o = r.byteLength / gi;
				for (let t = 0; t < o; t++) {
					let n = _i * t;
					Oi(2 * n, a) && (i[n + 6] += e);
				}
			}
		}
	}
	traverse(e, t = 0) {
		let n = this._roots[t], r = new Uint32Array(n), i = new Uint16Array(n);
		a(0);
		function a(t, o = 0) {
			let s = t * 2, c = Oi(s, i);
			if (c) {
				let a = r[t + 6], l = i[s + 14];
				e(o, c, new Float32Array(n, t * 4, 6), a, l);
			} else {
				let i = ji(t), s = Mi(t, r), l = Ni(t, r);
				e(o, c, new Float32Array(n, t * 4, 6), l) || (a(i, o + 1), a(s, o + 1));
			}
		}
	}
	refit() {
		let e = this._roots;
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t], r = new Uint32Array(n), i = new Uint16Array(n), a = new Float32Array(n), o = n.byteLength / gi;
			for (let e = o - 1; e >= 0; e--) {
				let t = e * _i, n = t * 2;
				if (Oi(n, i)) {
					let e = ki(t, r), o = Ai(n, i);
					this.writePrimitiveRangeBounds(e, o, va, 0), a.set(va, t);
				} else {
					let e = ji(t), n = Mi(t, r);
					for (let r = 0; r < 3; r++) {
						let i = a[e + r], o = a[e + r + 3], s = a[n + r], c = a[n + r + 3];
						a[t + r] = i < s ? i : s, a[t + r + 3] = o > c ? o : c;
					}
				}
			}
		}
	}
	getBoundingBox(e) {
		return e.makeEmpty(), this._roots.forEach((t) => {
			Si(0, new Float32Array(t), _a), e.union(_a);
		}), e;
	}
	shapecast(e) {
		let { boundsTraverseOrder: t, intersectsBounds: n, intersectsRange: r, intersectsPrimitive: i, scratchPrimitive: a, iterate: o } = e;
		if (r && i) {
			let e = r;
			r = (t, n, r, s, c) => e(t, n, r, s, c) ? !0 : o(t, n, this, i, r, s, a);
		} else r ||= i ? (e, t, n, r) => o(e, t, this, i, n, r, a) : (e, t, n) => n;
		let s = !1, c = 0, l = this._roots;
		for (let e = 0, i = l.length; e < i; e++) {
			let i = l[e];
			if (s = aa(this, e, n, r, t, c), s) break;
			c += i.byteLength / gi;
		}
		return s;
	}
	bvhcast(e, t, n) {
		let { intersectsRanges: r } = n;
		return ha(this, e, t, r);
	}
};
function ba() {
	return typeof SharedArrayBuffer < "u";
}
function xa(e) {
	return e.index ? e.index.count : e.attributes.position.count;
}
function Sa(e) {
	return xa(e) / 3;
}
function Ca(e, t = ArrayBuffer) {
	return e > 65535 ? new Uint32Array(new t(4 * e)) : new Uint16Array(new t(2 * e));
}
function wa(e, t) {
	if (!e.index) {
		let n = e.attributes.position.count, r = Ca(n, t.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer);
		e.setIndex(new W(r, 1));
		for (let e = 0; e < n; e++) r[e] = e;
	}
}
function Ta(e, t, n) {
	let r = xa(e) / n, i = t || e.drawRange, a = i.start / n, o = (i.start + i.count) / n, s = Math.max(0, a), c = Math.min(r, o) - s;
	return {
		offset: Math.floor(s),
		count: Math.floor(c)
	};
}
function Ea(e, t) {
	return e.groups.map((e) => ({
		offset: e.start / t,
		count: e.count / t
	}));
}
function Da(e, t, n) {
	let r = Ta(e, t, n), i = Ea(e, n);
	if (!i.length) return [r];
	let a = [], o = r.offset, s = r.offset + r.count, c = xa(e) / n, l = [];
	for (let e of i) {
		let { offset: t, count: n } = e, r = t, i = t + (isFinite(n) ? n : c - t);
		r < s && i > o && (l.push({
			pos: Math.max(o, r),
			isStart: !0
		}), l.push({
			pos: Math.min(s, i),
			isStart: !1
		}));
	}
	l.sort((e, t) => e.pos === t.pos ? e.type === "end" ? -1 : 1 : e.pos - t.pos);
	let u = 0, d = null;
	for (let e of l) {
		let t = e.pos;
		u !== 0 && t !== d && a.push({
			offset: d,
			count: t - d
		}), u += e.isStart ? 1 : -1, d = t;
	}
	return a;
}
function Oa(e, t) {
	let n = e[e.length - 1], r = n.offset + n.count > 2 ** 16, i = e.reduce((e, t) => e + t.count, 0), a = r ? 4 : 2, o = t ? new SharedArrayBuffer(i * a) : new ArrayBuffer(i * a), s = r ? new Uint32Array(o) : new Uint16Array(o), c = 0;
	for (let t = 0; t < e.length; t++) {
		let { offset: n, count: r } = e[t];
		for (let e = 0; e < r; e++) s[c + e] = n + e;
		c += r;
	}
	return s;
}
var ka = class extends ya {
	get indirect() {
		return !!this._indirectBuffer;
	}
	get primitiveStride() {
		return null;
	}
	get primitiveBufferStride() {
		return this.indirect ? 1 : this.primitiveStride;
	}
	set primitiveBufferStride(e) {}
	get primitiveBuffer() {
		return this.indirect ? this._indirectBuffer : this.geometry.index.array;
	}
	set primitiveBuffer(e) {}
	constructor(e, t = {}) {
		if (e.isBufferGeometry) {
			if (e.index && e.index.isInterleavedBufferAttribute) throw Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.");
		} else throw Error("BVH: Only BufferGeometries are supported.");
		if (t.useSharedArrayBuffer && !ba()) throw Error("BVH: SharedArrayBuffer is not available.");
		super(), this.geometry = e, this.resolvePrimitiveIndex = t.indirect ? (e) => this._indirectBuffer[e] : (e) => e, this.primitiveBuffer = null, this.primitiveBufferStride = null, this._indirectBuffer = null, t = {
			...xi,
			...t
		}, t[bi] || this.init(t);
	}
	init(e) {
		let { geometry: t, primitiveStride: n } = this;
		if (e.indirect) {
			let r = Oa(Da(t, e.range, n), e.useSharedArrayBuffer);
			this._indirectBuffer = r;
		} else wa(t, e);
		super.init(e), !t.boundingBox && e.setBoundingBox && (t.boundingBox = this.getBoundingBox(new _()));
	}
	getRootRanges(e) {
		return this.indirect ? [{
			offset: 0,
			count: this._indirectBuffer.length
		}] : Da(this.geometry, e, this.primitiveStride);
	}
	raycastObject3D() {
		throw Error("BVH: raycastObject3D() not implemented");
	}
}, Aa = class {
	constructor() {
		this.min = Infinity, this.max = -Infinity;
	}
	setFromPointsField(e, t) {
		let n = Infinity, r = -Infinity;
		for (let i = 0, a = e.length; i < a; i++) {
			let a = e[i][t];
			n = a < n ? a : n, r = a > r ? a : r;
		}
		this.min = n, this.max = r;
	}
	setFromPoints(e, t) {
		let n = Infinity, r = -Infinity;
		for (let i = 0, a = t.length; i < a; i++) {
			let a = t[i], o = e.dot(a);
			n = o < n ? o : n, r = o > r ? o : r;
		}
		this.min = n, this.max = r;
	}
	isSeparated(e) {
		return this.min > e.max || e.min > this.max;
	}
};
Aa.prototype.setFromBox = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new G();
	return function(t, n) {
		let r = n.min, i = n.max, a = Infinity, o = -Infinity;
		for (let n = 0; n <= 1; n++) for (let s = 0; s <= 1; s++) for (let c = 0; c <= 1; c++) {
			e.x = r.x * n + i.x * (1 - n), e.y = r.y * s + i.y * (1 - s), e.z = r.z * c + i.z * (1 - c);
			let l = t.dot(e);
			a = Math.min(l, a), o = Math.max(l, o);
		}
		this.min = a, this.max = o;
	};
}();
var ja = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new G(), t = /* @__PURE__ */ new G(), n = /* @__PURE__ */ new G();
	return function(r, i, a) {
		let o = r.start, s = e, c = i.start, l = t;
		n.subVectors(o, c), e.subVectors(r.end, r.start), t.subVectors(i.end, i.start);
		let u = n.dot(l), d = l.dot(s), f = l.dot(l), p = n.dot(s), m = s.dot(s) * f - d * d, h, g;
		h = m === 0 ? 0 : (u * d - p * f) / m, g = (u + h * d) / f, a.x = h, a.y = g;
	};
}(), Ma = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new O(), t = /* @__PURE__ */ new G(), n = /* @__PURE__ */ new G();
	return function(r, i, a, o) {
		ja(r, i, e);
		let s = e.x, c = e.y;
		if (s >= 0 && s <= 1 && c >= 0 && c <= 1) {
			r.at(s, a), i.at(c, o);
			return;
		} else if (s >= 0 && s <= 1) {
			c < 0 ? i.at(0, o) : i.at(1, o), r.closestPointToPoint(o, !0, a);
			return;
		} else if (c >= 0 && c <= 1) {
			s < 0 ? r.at(0, a) : r.at(1, a), i.closestPointToPoint(a, !0, o);
			return;
		} else {
			let e;
			e = s < 0 ? r.start : r.end;
			let l;
			l = c < 0 ? i.start : i.end;
			let u = t, d = n;
			if (r.closestPointToPoint(l, !0, t), i.closestPointToPoint(e, !0, n), u.distanceToSquared(l) <= d.distanceToSquared(e)) {
				a.copy(u), o.copy(l);
				return;
			} else {
				a.copy(e), o.copy(d);
				return;
			}
		}
	};
}(), Na = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new G(), t = /* @__PURE__ */ new G(), n = /* @__PURE__ */ new ne(), r = /* @__PURE__ */ new z();
	return function(i, a) {
		let { radius: o, center: s } = i, { a: c, b: l, c: u } = a;
		if (r.start = c, r.end = l, r.closestPointToPoint(s, !0, e).distanceTo(s) <= o || (r.start = c, r.end = u, r.closestPointToPoint(s, !0, e).distanceTo(s) <= o) || (r.start = l, r.end = u, r.closestPointToPoint(s, !0, e).distanceTo(s) <= o)) return !0;
		let d = a.getPlane(n);
		if (Math.abs(d.distanceToPoint(s)) <= o) {
			let e = d.projectPoint(s, t);
			if (a.containsPoint(e)) return !0;
		}
		return !1;
	};
}(), Pa = [
	"x",
	"y",
	"z"
], Fa = 1e-15, Ia = Fa * Fa;
function La(e) {
	return Math.abs(e) < Fa;
}
var Ra = class extends m {
	constructor(...e) {
		super(...e), this.isExtendedTriangle = !0, this.satAxes = [
			,
			,
			,
			,
		].fill().map(() => new G()), this.satBounds = [
			,
			,
			,
			,
		].fill().map(() => new Aa()), this.points = [
			this.a,
			this.b,
			this.c
		], this.plane = new ne(), this.isDegenerateIntoSegment = !1, this.isDegenerateIntoPoint = !1, this.degenerateSegment = new z(), this.needsUpdate = !0;
	}
	intersectsSphere(e) {
		return Na(e, this);
	}
	update() {
		let e = this.a, t = this.b, n = this.c, r = this.points, i = this.satAxes, a = this.satBounds, o = i[0], s = a[0];
		this.getNormal(o), s.setFromPoints(o, r);
		let c = i[1], l = a[1];
		c.subVectors(e, t), l.setFromPoints(c, r);
		let u = i[2], d = a[2];
		u.subVectors(t, n), d.setFromPoints(u, r);
		let f = i[3], p = a[3];
		f.subVectors(n, e), p.setFromPoints(f, r);
		let m = c.length(), h = u.length(), g = f.length();
		this.isDegenerateIntoPoint = !1, this.isDegenerateIntoSegment = !1, m < Fa ? h < Fa || g < Fa ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(e), this.degenerateSegment.end.copy(n)) : h < Fa ? g < Fa ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(t), this.degenerateSegment.end.copy(e)) : g < Fa && (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(n), this.degenerateSegment.end.copy(t)), this.plane.setFromNormalAndCoplanarPoint(o, e), this.needsUpdate = !1;
	}
};
Ra.prototype.closestPointToSegment = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new G(), t = /* @__PURE__ */ new G(), n = /* @__PURE__ */ new z();
	return function(r, i = null, a = null) {
		let { start: o, end: s } = r, c = this.points, l, u = Infinity;
		for (let o = 0; o < 3; o++) {
			let s = (o + 1) % 3;
			n.start.copy(c[o]), n.end.copy(c[s]), Ma(n, r, e, t), l = e.distanceToSquared(t), l < u && (u = l, i && i.copy(e), a && a.copy(t));
		}
		return this.closestPointToPoint(o, e), l = o.distanceToSquared(e), l < u && (u = l, i && i.copy(e), a && a.copy(o)), this.closestPointToPoint(s, e), l = s.distanceToSquared(e), l < u && (u = l, i && i.copy(e), a && a.copy(s)), Math.sqrt(u);
	};
}(), Ra.prototype.intersectsTriangle = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new Ra(), t = /* @__PURE__ */ new Aa(), n = /* @__PURE__ */ new Aa(), r = /* @__PURE__ */ new G(), i = /* @__PURE__ */ new G(), a = /* @__PURE__ */ new G(), o = /* @__PURE__ */ new G(), s = /* @__PURE__ */ new z(), c = /* @__PURE__ */ new z(), l = /* @__PURE__ */ new G(), u = /* @__PURE__ */ new O(), d = /* @__PURE__ */ new O();
	function f(e, i, a, s) {
		let c = r;
		!e.isDegenerateIntoPoint && !e.isDegenerateIntoSegment ? c.copy(e.plane.normal) : c.copy(i.plane.normal);
		let l = e.satBounds, u = e.satAxes;
		for (let r = 1; r < 4; r++) {
			let a = l[r], s = u[r];
			if (t.setFromPoints(s, i.points), a.isSeparated(t) || (o.copy(c).cross(s), t.setFromPoints(o, e.points), n.setFromPoints(o, i.points), t.isSeparated(n))) return !1;
		}
		let d = i.satBounds, f = i.satAxes;
		for (let r = 1; r < 4; r++) {
			let a = d[r], s = f[r];
			if (t.setFromPoints(s, e.points), a.isSeparated(t) || (o.crossVectors(c, s), t.setFromPoints(o, e.points), n.setFromPoints(o, i.points), t.isSeparated(n))) return !1;
		}
		return a && (s || console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."), a.start.set(0, 0, 0), a.end.set(0, 0, 0)), !0;
	}
	function p(e, t, n, r, i, a, o, s, c, l, u) {
		let d = o / (o - s);
		l.x = r + (i - r) * d, u.start.subVectors(t, e).multiplyScalar(d).add(e), d = o / (o - c), l.y = r + (a - r) * d, u.end.subVectors(n, e).multiplyScalar(d).add(e);
	}
	function m(e, t, n, r, i, a, o, s, c, l, u) {
		if (i > 0) p(e.c, e.a, e.b, r, t, n, c, o, s, l, u);
		else if (a > 0) p(e.b, e.a, e.c, n, t, r, s, o, c, l, u);
		else if (s * c > 0 || o != 0) p(e.a, e.b, e.c, t, n, r, o, s, c, l, u);
		else if (s != 0) p(e.b, e.a, e.c, n, t, r, s, o, c, l, u);
		else if (c != 0) p(e.c, e.a, e.b, r, t, n, c, o, s, l, u);
		else return !0;
		return !1;
	}
	function h(e, t, n, i) {
		let a = t.degenerateSegment, o = e.plane.distanceToPoint(a.start), s = e.plane.distanceToPoint(a.end);
		return La(o) ? La(s) ? f(e, t, n, i) : (n && (n.start.copy(a.start), n.end.copy(a.start)), e.containsPoint(a.start)) : La(s) ? (n && (n.start.copy(a.end), n.end.copy(a.end)), e.containsPoint(a.end)) : e.plane.intersectLine(a, r) == null ? !1 : (n && (n.start.copy(r), n.end.copy(r)), e.containsPoint(r));
	}
	function g(e, t, n) {
		let r = t.a;
		return La(e.plane.distanceToPoint(r)) && e.containsPoint(r) ? (n && (n.start.copy(r), n.end.copy(r)), !0) : !1;
	}
	function _(e, t, n) {
		let i = e.degenerateSegment, a = t.a;
		return i.closestPointToPoint(a, !0, r), a.distanceToSquared(r) < Ia ? (n && (n.start.copy(a), n.end.copy(a)), !0) : !1;
	}
	function v(e, t, n, o) {
		if (e.isDegenerateIntoSegment) if (t.isDegenerateIntoSegment) {
			let o = e.degenerateSegment, s = t.degenerateSegment, c = i, l = a;
			o.delta(c), s.delta(l);
			let u = r.subVectors(s.start, o.start), d = c.x * l.y - c.y * l.x;
			if (La(d)) return !1;
			let f = (u.x * l.y - u.y * l.x) / d, p = -(c.x * u.y - c.y * u.x) / d;
			return f < 0 || f > 1 || p < 0 || p > 1 ? !1 : La(o.start.z + c.z * f - (s.start.z + l.z * p)) ? (n && (n.start.copy(o.start).addScaledVector(c, f), n.end.copy(o.start).addScaledVector(c, f)), !0) : !1;
		} else return t.isDegenerateIntoPoint ? _(e, t, n) : h(t, e, n, o);
		else {
			if (e.isDegenerateIntoPoint) return t.isDegenerateIntoPoint ? t.a.distanceToSquared(e.a) < Ia ? (n && (n.start.copy(e.a), n.end.copy(e.a)), !0) : !1 : t.isDegenerateIntoSegment ? _(t, e, n) : g(t, e, n);
			if (t.isDegenerateIntoPoint) return g(e, t, n);
			if (t.isDegenerateIntoSegment) return h(e, t, n, o);
		}
	}
	return function(t, n = null, r = !1) {
		this.needsUpdate && this.update(), t.isExtendedTriangle ? t.needsUpdate && t.update() : (e.copy(t), e.update(), t = e);
		let o = v(this, t, n, r);
		if (o !== void 0) return o;
		let p = this.plane, h = t.plane, g = h.distanceToPoint(this.a), _ = h.distanceToPoint(this.b), y = h.distanceToPoint(this.c);
		La(g) && (g = 0), La(_) && (_ = 0), La(y) && (y = 0);
		let b = g * _, x = g * y;
		if (b > 0 && x > 0) return !1;
		let S = p.distanceToPoint(t.a), C = p.distanceToPoint(t.b), w = p.distanceToPoint(t.c);
		La(S) && (S = 0), La(C) && (C = 0), La(w) && (w = 0);
		let T = S * C, E = S * w;
		if (T > 0 && E > 0) return !1;
		i.copy(p.normal), a.copy(h.normal);
		let D = i.cross(a), O = 0, k = Math.abs(D.x), A = Math.abs(D.y);
		A > k && (k = A, O = 1), Math.abs(D.z) > k && (O = 2);
		let j = Pa[O], M = this.a[j], N = this.b[j], ee = this.c[j], P = t.a[j], F = t.b[j], I = t.c[j];
		if (m(this, M, N, ee, b, x, g, _, y, u, s) || m(t, P, F, I, T, E, S, C, w, d, c)) return f(this, t, n, r);
		if (u.y < u.x) {
			let e = u.y;
			u.y = u.x, u.x = e, l.copy(s.start), s.start.copy(s.end), s.end.copy(l);
		}
		if (d.y < d.x) {
			let e = d.y;
			d.y = d.x, d.x = e, l.copy(c.start), c.start.copy(c.end), c.end.copy(l);
		}
		return u.y < d.x || d.y < u.x ? !1 : (n && (d.x > u.x ? n.start.copy(c.start) : n.start.copy(s.start), d.y < u.y ? n.end.copy(c.end) : n.end.copy(s.end)), !0);
	};
}(), Ra.prototype.distanceToPoint = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new G();
	return function(t) {
		return this.closestPointToPoint(t, e), t.distanceTo(e);
	};
}(), Ra.prototype.distanceToTriangle = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new G(), t = /* @__PURE__ */ new G(), n = [
		"a",
		"b",
		"c"
	], r = /* @__PURE__ */ new z(), i = /* @__PURE__ */ new z();
	return function(a, o = null, s = null) {
		let c = o || s ? r : null;
		if (this.intersectsTriangle(a, c)) return (o || s) && (o && c.getCenter(o), s && c.getCenter(s)), 0;
		let l = Infinity;
		for (let t = 0; t < 3; t++) {
			let r, i = n[t], c = a[i];
			this.closestPointToPoint(c, e), r = c.distanceToSquared(e), r < l && (l = r, o && o.copy(e), s && s.copy(c));
			let u = this[i];
			a.closestPointToPoint(u, e), r = u.distanceToSquared(e), r < l && (l = r, o && o.copy(u), s && s.copy(e));
		}
		for (let c = 0; c < 3; c++) {
			let u = n[c], d = n[(c + 1) % 3];
			r.set(this[u], this[d]);
			for (let c = 0; c < 3; c++) {
				let u = n[c], d = n[(c + 1) % 3];
				i.set(a[u], a[d]), Ma(r, i, e, t);
				let f = e.distanceToSquared(t);
				f < l && (l = f, o && o.copy(e), s && s.copy(t));
			}
		}
		return Math.sqrt(l);
	};
}();
var za = class {
	constructor(e, t, n) {
		this.isOrientedBox = !0, this.min = new G(), this.max = new G(), this.matrix = new H(), this.invMatrix = new H(), this.points = Array(8).fill().map(() => new G()), this.satAxes = [
			,
			,
			,
		].fill().map(() => new G()), this.satBounds = [
			,
			,
			,
		].fill().map(() => new Aa()), this.alignedSatBounds = [
			,
			,
			,
		].fill().map(() => new Aa()), this.needsUpdate = !1, e && this.min.copy(e), t && this.max.copy(t), n && this.matrix.copy(n);
	}
	set(e, t, n) {
		this.min.copy(e), this.max.copy(t), this.matrix.copy(n), this.needsUpdate = !0;
	}
	copy(e) {
		this.min.copy(e.min), this.max.copy(e.max), this.matrix.copy(e.matrix), this.needsUpdate = !0;
	}
};
za.prototype.update = /* @__PURE__ */ function() {
	return function() {
		let e = this.matrix, t = this.min, n = this.max, r = this.points;
		for (let i = 0; i <= 1; i++) for (let a = 0; a <= 1; a++) for (let o = 0; o <= 1; o++) {
			let s = r[1 * i | 2 * a | 4 * o];
			s.x = i ? n.x : t.x, s.y = a ? n.y : t.y, s.z = o ? n.z : t.z, s.applyMatrix4(e);
		}
		let i = this.satBounds, a = this.satAxes, o = r[0];
		for (let e = 0; e < 3; e++) {
			let t = a[e], n = i[e], s = r[1 << e];
			t.subVectors(o, s), n.setFromPoints(t, r);
		}
		let s = this.alignedSatBounds;
		s[0].setFromPointsField(r, "x"), s[1].setFromPointsField(r, "y"), s[2].setFromPointsField(r, "z"), this.invMatrix.copy(this.matrix).invert(), this.needsUpdate = !1;
	};
}(), za.prototype.intersectsBox = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new Aa();
	return function(t) {
		this.needsUpdate && this.update();
		let n = t.min, r = t.max, i = this.satBounds, a = this.satAxes, o = this.alignedSatBounds;
		if (e.min = n.x, e.max = r.x, o[0].isSeparated(e) || (e.min = n.y, e.max = r.y, o[1].isSeparated(e)) || (e.min = n.z, e.max = r.z, o[2].isSeparated(e))) return !1;
		for (let n = 0; n < 3; n++) {
			let r = a[n], o = i[n];
			if (e.setFromBox(r, t), o.isSeparated(e)) return !1;
		}
		return !0;
	};
}(), za.prototype.intersectsTriangle = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new Ra(), t = [
		,
		,
		,
	], n = /* @__PURE__ */ new Aa(), r = /* @__PURE__ */ new Aa(), i = /* @__PURE__ */ new G();
	return function(a) {
		this.needsUpdate && this.update(), a.isExtendedTriangle ? a.needsUpdate && a.update() : (e.copy(a), e.update(), a = e);
		let o = this.satBounds, s = this.satAxes;
		t[0] = a.a, t[1] = a.b, t[2] = a.c;
		for (let e = 0; e < 3; e++) {
			let r = o[e], i = s[e];
			if (n.setFromPoints(i, t), r.isSeparated(n)) return !1;
		}
		let c = a.satBounds, l = a.satAxes, u = this.points;
		for (let e = 0; e < 3; e++) {
			let t = c[e], r = l[e];
			if (n.setFromPoints(r, u), t.isSeparated(n)) return !1;
		}
		for (let e = 0; e < 3; e++) {
			let a = s[e];
			for (let e = 0; e < 4; e++) {
				let o = l[e];
				if (i.crossVectors(a, o), n.setFromPoints(i, t), r.setFromPoints(i, u), n.isSeparated(r)) return !1;
			}
		}
		return !0;
	};
}(), za.prototype.closestPointToPoint = /* @__PURE__ */ function() {
	return function(e, t) {
		return this.needsUpdate && this.update(), t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix), t;
	};
}(), za.prototype.distanceToPoint = function() {
	let e = new G();
	return function(t) {
		return this.closestPointToPoint(t, e), t.distanceTo(e);
	};
}(), za.prototype.distanceToBox = /* @__PURE__ */ function() {
	let e = [
		"x",
		"y",
		"z"
	], t = /* @__PURE__ */ Array(12).fill().map(() => new z()), n = /* @__PURE__ */ Array(12).fill().map(() => new z()), r = /* @__PURE__ */ new G(), i = /* @__PURE__ */ new G();
	return function(a, o = 0, s = null, c = null) {
		if (this.needsUpdate && this.update(), this.intersectsBox(a)) return (s || c) && (a.getCenter(i), this.closestPointToPoint(i, r), a.closestPointToPoint(r, i), s && s.copy(r), c && c.copy(i)), 0;
		let l = o * o, u = a.min, d = a.max, f = this.points, p = Infinity;
		for (let e = 0; e < 8; e++) {
			let t = f[e];
			i.copy(t).clamp(u, d);
			let n = t.distanceToSquared(i);
			if (n < p && (p = n, s && s.copy(t), c && c.copy(i), n < l)) return Math.sqrt(n);
		}
		let m = 0;
		for (let r = 0; r < 3; r++) for (let i = 0; i <= 1; i++) for (let a = 0; a <= 1; a++) {
			let o = (r + 1) % 3, s = (r + 2) % 3, c = i << o | a << s, l = 1 << r | i << o | a << s, p = f[c], h = f[l];
			t[m].set(p, h);
			let g = e[r], _ = e[o], v = e[s], y = n[m], b = y.start, x = y.end;
			b[g] = u[g], b[_] = i ? u[_] : d[_], b[v] = a ? u[v] : d[_], x[g] = d[g], x[_] = i ? u[_] : d[_], x[v] = a ? u[v] : d[_], m++;
		}
		for (let e = 0; e <= 1; e++) for (let t = 0; t <= 1; t++) for (let n = 0; n <= 1; n++) {
			i.x = e ? d.x : u.x, i.y = t ? d.y : u.y, i.z = n ? d.z : u.z, this.closestPointToPoint(i, r);
			let a = i.distanceToSquared(r);
			if (a < p && (p = a, s && s.copy(r), c && c.copy(i), a < l)) return Math.sqrt(a);
		}
		for (let e = 0; e < 12; e++) {
			let a = t[e];
			for (let e = 0; e < 12; e++) {
				let t = n[e];
				Ma(a, t, r, i);
				let o = r.distanceToSquared(i);
				if (o < p && (p = o, s && s.copy(r), c && c.copy(i), o < l)) return Math.sqrt(o);
			}
		}
		return Math.sqrt(p);
	};
}();
var Ba = /* @__PURE__ */ new class extends $i {
	constructor() {
		super(() => new Ra());
	}
}(), Va = /* @__PURE__ */ new G(), Ha = /* @__PURE__ */ new G();
function Ua(e, t, n = {}, r = 0, i = Infinity) {
	let a = r * r, o = i * i, s = Infinity, c = null;
	if (e.shapecast({
		boundsTraverseOrder: (e) => (Va.copy(t).clamp(e.min, e.max), Va.distanceToSquared(t)),
		intersectsBounds: (e, t, n) => n < s && n < o,
		intersectsTriangle: (e, n) => {
			e.closestPointToPoint(t, Va);
			let r = t.distanceToSquared(Va);
			return r < s && (Ha.copy(Va), s = r, c = n), r < a;
		}
	}), s === Infinity) return null;
	let l = Math.sqrt(s);
	return n.point ? n.point.copy(Ha) : n.point = Ha.clone(), n.distance = l, n.faceIndex = c, n;
}
var Wa = !0, Ga = /* @__PURE__ */ new G(), Ka = /* @__PURE__ */ new G(), qa = /* @__PURE__ */ new G(), Ja = /* @__PURE__ */ new O(), Ya = /* @__PURE__ */ new O(), Xa = /* @__PURE__ */ new O(), Za = /* @__PURE__ */ new G(), Qa = /* @__PURE__ */ new G(), $a = /* @__PURE__ */ new G(), eo = /* @__PURE__ */ new G();
function to(e, t, n, r, i, a, o, s) {
	let c;
	if (c = a === 1 ? e.intersectTriangle(r, n, t, !0, i) : e.intersectTriangle(t, n, r, a !== 2, i), c === null) return null;
	let l = e.origin.distanceTo(i);
	return l < o || l > s ? null : {
		distance: l,
		point: i.clone()
	};
}
function no(e, t, n, r, i, a, o, s, c, l, u) {
	Ga.fromBufferAttribute(t, a), Ka.fromBufferAttribute(t, o), qa.fromBufferAttribute(t, s);
	let d = to(e, Ga, Ka, qa, eo, c, l, u);
	if (d) {
		if (r) {
			Ja.fromBufferAttribute(r, a), Ya.fromBufferAttribute(r, o), Xa.fromBufferAttribute(r, s), d.uv = new O();
			let e = m.getInterpolation(eo, Ga, Ka, qa, Ja, Ya, Xa, d.uv);
			Wa || (d.uv = e);
		}
		if (i) {
			Ja.fromBufferAttribute(i, a), Ya.fromBufferAttribute(i, o), Xa.fromBufferAttribute(i, s), d.uv1 = new O();
			let e = m.getInterpolation(eo, Ga, Ka, qa, Ja, Ya, Xa, d.uv1);
			Wa || (d.uv1 = e);
		}
		if (n) {
			Za.fromBufferAttribute(n, a), Qa.fromBufferAttribute(n, o), $a.fromBufferAttribute(n, s), d.normal = new G();
			let t = m.getInterpolation(eo, Ga, Ka, qa, Za, Qa, $a, d.normal);
			d.normal.dot(e.direction) > 0 && d.normal.multiplyScalar(-1), Wa || (d.normal = t);
		}
		let t = {
			a,
			b: o,
			c: s,
			normal: new G(),
			materialIndex: 0
		};
		if (m.getNormal(Ga, Ka, qa, t.normal), d.face = t, d.faceIndex = a, Wa) {
			let e = new G();
			m.getBarycoord(eo, Ga, Ka, qa, e), d.barycoord = e;
		}
	}
	return d;
}
function ro(e) {
	return e && e.isMaterial ? e.side : e;
}
function io(e, t, n, r, i, a, o) {
	let s = r * 3, c = s + 0, l = s + 1, u = s + 2, { index: d, groups: f } = e;
	e.index && (c = d.getX(c), l = d.getX(l), u = d.getX(u));
	let { position: p, normal: m, uv: h, uv1: g } = e.attributes;
	if (Array.isArray(t)) {
		let e = r * 3;
		for (let s = 0, d = f.length; s < d; s++) {
			let { start: d, count: _, materialIndex: v } = f[s];
			if (e >= d && e < d + _) {
				let e = ro(t[v]), s = no(n, p, m, h, g, c, l, u, e, a, o);
				if (s) if (s.faceIndex = r, s.face.materialIndex = v, i) i.push(s);
				else return s;
			}
		}
	} else {
		let e = ro(t), s = no(n, p, m, h, g, c, l, u, e, a, o);
		if (s) if (s.faceIndex = r, s.face.materialIndex = 0, i) i.push(s);
		else return s;
	}
	return null;
}
function ao(e, t, n, r) {
	let i = e.a, a = e.b, o = e.c, s = t, c = t + 1, l = t + 2;
	n && (s = n.getX(s), c = n.getX(c), l = n.getX(l)), i.x = r.getX(s), i.y = r.getY(s), i.z = r.getZ(s), a.x = r.getX(c), a.y = r.getY(c), a.z = r.getZ(c), o.x = r.getX(l), o.y = r.getY(l), o.z = r.getZ(l);
}
function oo(e, t, n, r, i, a, o, s) {
	let { geometry: c, _indirectBuffer: l } = e;
	for (let e = r, l = r + i; e < l; e++) io(c, t, n, e, a, o, s);
}
function so(e, t, n, r, i, a, o) {
	let { geometry: s, _indirectBuffer: c } = e, l = Infinity, u = null;
	for (let e = r, c = r + i; e < c; e++) {
		let r;
		r = io(s, t, n, e, null, a, o), r && r.distance < l && (u = r, l = r.distance);
	}
	return u;
}
function co(e, t, n, r, i, a, o) {
	let { geometry: s } = n, { index: c } = s, l = s.attributes.position;
	for (let n = e, s = t + e; n < s; n++) {
		let e;
		if (e = n, ao(o, e * 3, c, l), o.needsUpdate = !0, r(o, e, i, a)) return !0;
	}
	return !1;
}
function lo(e, t = null) {
	t && Array.isArray(t) && (t = new Set(t));
	let n = e.geometry, r = n.index ? n.index.array : null, i = n.attributes.position, a, o, s, c, l = 0, u = e._roots;
	for (let e = 0, t = u.length; e < t; e++) a = u[e], o = new Uint32Array(a), s = new Uint16Array(a), c = new Float32Array(a), d(0, l), l += a.byteLength;
	function d(e, n, a = !1) {
		let l = e * 2;
		if (Oi(l, s)) {
			let t = ki(e, o), n = Ai(l, s), a = Infinity, u = Infinity, d = Infinity, f = -Infinity, p = -Infinity, m = -Infinity;
			for (let e = 3 * t, o = 3 * (t + n); e < o; e++) {
				let t = r[e], n = i.getX(t), o = i.getY(t), s = i.getZ(t);
				n < a && (a = n), n > f && (f = n), o < u && (u = o), o > p && (p = o), s < d && (d = s), s > m && (m = s);
			}
			return c[e + 0] !== a || c[e + 1] !== u || c[e + 2] !== d || c[e + 3] !== f || c[e + 4] !== p || c[e + 5] !== m ? (c[e + 0] = a, c[e + 1] = u, c[e + 2] = d, c[e + 3] = f, c[e + 4] = p, c[e + 5] = m, !0) : !1;
		} else {
			let r = ji(e), i = Mi(e, o), s = a, l = !1, u = !1;
			if (t) {
				if (!s) {
					let e = r / _i + n / gi, a = i / _i + n / gi;
					l = t.has(e), u = t.has(a), s = !l && !u;
				}
			} else l = !0, u = !0;
			let f = s || l, p = s || u, m = !1;
			f && (m = d(r, n, s));
			let h = !1;
			p && (h = d(i, n, s));
			let g = m || h;
			if (g) for (let t = 0; t < 3; t++) {
				let n = r + t, a = i + t, o = c[n], s = c[n + 3], l = c[a], u = c[a + 3];
				c[e + t] = o < l ? o : l, c[e + t + 3] = s > u ? s : u;
			}
			return g;
		}
	}
}
function uo(e, t, n, r, i) {
	let a, o, s, c, l, u, d = 1 / n.direction.x, f = 1 / n.direction.y, p = 1 / n.direction.z, m = n.origin.x, h = n.origin.y, g = n.origin.z, _ = t[e], v = t[e + 3], y = t[e + 1], b = t[e + 3 + 1], x = t[e + 2], S = t[e + 3 + 2];
	return d >= 0 ? (a = (_ - m) * d, o = (v - m) * d) : (a = (v - m) * d, o = (_ - m) * d), f >= 0 ? (s = (y - h) * f, c = (b - h) * f) : (s = (b - h) * f, c = (y - h) * f), a > c || s > o || ((s > a || isNaN(a)) && (a = s), (c < o || isNaN(o)) && (o = c), p >= 0 ? (l = (x - g) * p, u = (S - g) * p) : (l = (S - g) * p, u = (x - g) * p), a > u || l > o) ? !1 : ((l > a || a !== a) && (a = l), (u < o || o !== o) && (o = u), a <= i && o >= r);
}
function fo(e, t, n, r, i, a, o, s) {
	let { geometry: c, _indirectBuffer: l } = e;
	for (let e = r, u = r + i; e < u; e++) io(c, t, n, l ? l[e] : e, a, o, s);
}
function po(e, t, n, r, i, a, o) {
	let { geometry: s, _indirectBuffer: c } = e, l = Infinity, u = null;
	for (let e = r, d = r + i; e < d; e++) {
		let r;
		r = io(s, t, n, c ? c[e] : e, null, a, o), r && r.distance < l && (u = r, l = r.distance);
	}
	return u;
}
function mo(e, t, n, r, i, a, o) {
	let { geometry: s } = n, { index: c } = s, l = s.attributes.position;
	for (let s = e, u = t + e; s < u; s++) {
		let e;
		if (e = n.resolveTriangleIndex(s), ao(o, e * 3, c, l), o.needsUpdate = !0, r(o, e, i, a)) return !0;
	}
	return !1;
}
function ho(e, t, n, r, i, a, o) {
	ea.setBuffer(e._roots[t]), go(0, e, n, r, i, a, o), ea.clearBuffer();
}
function go(e, t, n, r, i, a, o) {
	let { float32Array: s, uint16Array: c, uint32Array: l } = ea, u = e * 2;
	if (Oi(u, c)) oo(t, n, r, ki(e, l), Ai(u, c), i, a, o);
	else {
		let c = ji(e);
		uo(c, s, r, a, o) && go(c, t, n, r, i, a, o);
		let u = Mi(e, l);
		uo(u, s, r, a, o) && go(u, t, n, r, i, a, o);
	}
}
var _o = [
	"x",
	"y",
	"z"
];
function vo(e, t, n, r, i, a) {
	ea.setBuffer(e._roots[t]);
	let o = yo(0, e, n, r, i, a);
	return ea.clearBuffer(), o;
}
function yo(e, t, n, r, i, a) {
	let { float32Array: o, uint16Array: s, uint32Array: c } = ea, l = e * 2;
	if (Oi(l, s)) return so(t, n, r, ki(e, c), Ai(l, s), i, a);
	{
		let s = Ni(e, c), l = _o[s], u = r.direction[l] >= 0, d, f;
		u ? (d = ji(e), f = Mi(e, c)) : (d = Mi(e, c), f = ji(e));
		let p = uo(d, o, r, i, a) ? yo(d, t, n, r, i, a) : null;
		if (p) {
			let e = p.point[l];
			if (u ? e <= o[f + s] : e >= o[f + s + 3]) return p;
		}
		let m = uo(f, o, r, i, a) ? yo(f, t, n, r, i, a) : null;
		return p && m ? p.distance <= m.distance ? p : m : p || m || null;
	}
}
var bo = /* @__PURE__ */ new _(), xo = /* @__PURE__ */ new Ra(), So = /* @__PURE__ */ new Ra(), Co = /* @__PURE__ */ new H(), wo = /* @__PURE__ */ new za(), To = /* @__PURE__ */ new za();
function Eo(e, t, n, r) {
	ea.setBuffer(e._roots[t]);
	let i = Do(0, e, n, r);
	return ea.clearBuffer(), i;
}
function Do(e, t, n, r, i = null) {
	let { float32Array: a, uint16Array: o, uint32Array: s } = ea, c = e * 2;
	if (i === null && (n.boundingBox || n.computeBoundingBox(), wo.set(n.boundingBox.min, n.boundingBox.max, r), i = wo), Oi(c, o)) {
		let i = t.geometry, l = i.index, u = i.attributes.position, d = n.index, f = n.attributes.position, p = ki(e, s), m = Ai(c, o);
		if (Co.copy(r).invert(), n.boundsTree) return Si(e, a, To), To.matrix.copy(Co), To.needsUpdate = !0, n.boundsTree.shapecast({
			intersectsBounds: (e) => To.intersectsBox(e),
			intersectsTriangle: (e) => {
				e.a.applyMatrix4(r), e.b.applyMatrix4(r), e.c.applyMatrix4(r), e.needsUpdate = !0;
				for (let t = p * 3, n = (m + p) * 3; t < n; t += 3) if (ao(So, t, l, u), So.needsUpdate = !0, e.intersectsTriangle(So)) return !0;
				return !1;
			}
		});
		{
			let e = Sa(n);
			for (let t = p * 3, n = (m + p) * 3; t < n; t += 3) {
				ao(xo, t, l, u), xo.a.applyMatrix4(Co), xo.b.applyMatrix4(Co), xo.c.applyMatrix4(Co), xo.needsUpdate = !0;
				for (let t = 0, n = e * 3; t < n; t += 3) if (ao(So, t, d, f), So.needsUpdate = !0, xo.intersectsTriangle(So)) return !0;
			}
		}
	} else {
		let o = ji(e), c = Mi(e, s);
		return Si(o, a, bo), !!(i.intersectsBox(bo) && Do(o, t, n, r, i) || (Si(c, a, bo), i.intersectsBox(bo) && Do(c, t, n, r, i)));
	}
}
var Oo = /* @__PURE__ */ new H(), ko = /* @__PURE__ */ new za(), Ao = /* @__PURE__ */ new za(), jo = /* @__PURE__ */ new G(), Mo = /* @__PURE__ */ new G(), No = /* @__PURE__ */ new G(), Po = /* @__PURE__ */ new G();
function Fo(e, t, n, r = {}, i = {}, a = 0, o = Infinity) {
	t.boundingBox || t.computeBoundingBox(), ko.set(t.boundingBox.min, t.boundingBox.max, n), ko.needsUpdate = !0;
	let s = e.geometry, c = s.attributes.position, l = s.index, u = t.attributes.position, d = t.index, f = Ba.getPrimitive(), p = Ba.getPrimitive(), m = jo, h = Mo, g = null, _ = null;
	i && (g = No, _ = Po);
	let v = Infinity, y = null, b = null;
	return Oo.copy(n).invert(), Ao.matrix.copy(Oo), e.shapecast({
		boundsTraverseOrder: (e) => ko.distanceToBox(e),
		intersectsBounds: (e, t, n) => n < v && n < o ? (t && (Ao.min.copy(e.min), Ao.max.copy(e.max), Ao.needsUpdate = !0), !0) : !1,
		intersectsRange: (e, r) => {
			if (t.boundsTree) return t.boundsTree.shapecast({
				boundsTraverseOrder: (e) => Ao.distanceToBox(e),
				intersectsBounds: (e, t, n) => n < v && n < o,
				intersectsRange: (t, i) => {
					for (let o = t, s = t + i; o < s; o++) {
						ao(p, 3 * o, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
						for (let t = e, n = e + r; t < n; t++) {
							ao(f, 3 * t, l, c), f.needsUpdate = !0;
							let e = f.distanceToTriangle(p, m, g);
							if (e < v && (h.copy(m), _ && _.copy(g), v = e, y = t, b = o), e < a) return !0;
						}
					}
				}
			});
			{
				let i = Sa(t);
				for (let t = 0, o = i; t < o; t++) {
					ao(p, 3 * t, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
					for (let n = e, i = e + r; n < i; n++) {
						ao(f, 3 * n, l, c), f.needsUpdate = !0;
						let e = f.distanceToTriangle(p, m, g);
						if (e < v && (h.copy(m), _ && _.copy(g), v = e, y = n, b = t), e < a) return !0;
					}
				}
			}
		}
	}), Ba.releasePrimitive(f), Ba.releasePrimitive(p), v === Infinity ? null : (r.point ? r.point.copy(h) : r.point = h.clone(), r.distance = v, r.faceIndex = y, i && (i.point ? i.point.copy(_) : i.point = _.clone(), i.point.applyMatrix4(Oo), h.applyMatrix4(Oo), i.distance = h.sub(i.point).length(), i.faceIndex = b), r);
}
function Io(e, t = null) {
	t && Array.isArray(t) && (t = new Set(t));
	let n = e.geometry, r = n.index ? n.index.array : null, i = n.attributes.position, a, o, s, c, l = 0, u = e._roots;
	for (let e = 0, t = u.length; e < t; e++) a = u[e], o = new Uint32Array(a), s = new Uint16Array(a), c = new Float32Array(a), d(0, l), l += a.byteLength;
	function d(n, a, l = !1) {
		let u = n * 2;
		if (Oi(u, s)) {
			let t = ki(n, o), a = Ai(u, s), l = Infinity, d = Infinity, f = Infinity, p = -Infinity, m = -Infinity, h = -Infinity;
			for (let n = t, o = t + a; n < o; n++) {
				let t = 3 * e.resolveTriangleIndex(n);
				for (let e = 0; e < 3; e++) {
					let n = t + e;
					n = r ? r[n] : n;
					let a = i.getX(n), o = i.getY(n), s = i.getZ(n);
					a < l && (l = a), a > p && (p = a), o < d && (d = o), o > m && (m = o), s < f && (f = s), s > h && (h = s);
				}
			}
			return c[n + 0] !== l || c[n + 1] !== d || c[n + 2] !== f || c[n + 3] !== p || c[n + 4] !== m || c[n + 5] !== h ? (c[n + 0] = l, c[n + 1] = d, c[n + 2] = f, c[n + 3] = p, c[n + 4] = m, c[n + 5] = h, !0) : !1;
		} else {
			let e = ji(n), r = Mi(n, o), i = l, s = !1, u = !1;
			if (t) {
				if (!i) {
					let n = e / _i + a / gi, o = r / _i + a / gi;
					s = t.has(n), u = t.has(o), i = !s && !u;
				}
			} else s = !0, u = !0;
			let f = i || s, p = i || u, m = !1;
			f && (m = d(e, a, i));
			let h = !1;
			p && (h = d(r, a, i));
			let g = m || h;
			if (g) for (let t = 0; t < 3; t++) {
				let i = e + t, a = r + t, o = c[i], s = c[i + 3], l = c[a], u = c[a + 3];
				c[n + t] = o < l ? o : l, c[n + t + 3] = s > u ? s : u;
			}
			return g;
		}
	}
}
function Lo(e, t, n, r, i, a, o) {
	ea.setBuffer(e._roots[t]), Ro(0, e, n, r, i, a, o), ea.clearBuffer();
}
function Ro(e, t, n, r, i, a, o) {
	let { float32Array: s, uint16Array: c, uint32Array: l } = ea, u = e * 2;
	if (Oi(u, c)) fo(t, n, r, ki(e, l), Ai(u, c), i, a, o);
	else {
		let c = ji(e);
		uo(c, s, r, a, o) && Ro(c, t, n, r, i, a, o);
		let u = Mi(e, l);
		uo(u, s, r, a, o) && Ro(u, t, n, r, i, a, o);
	}
}
var zo = [
	"x",
	"y",
	"z"
];
function Bo(e, t, n, r, i, a) {
	ea.setBuffer(e._roots[t]);
	let o = Vo(0, e, n, r, i, a);
	return ea.clearBuffer(), o;
}
function Vo(e, t, n, r, i, a) {
	let { float32Array: o, uint16Array: s, uint32Array: c } = ea, l = e * 2;
	if (Oi(l, s)) return po(t, n, r, ki(e, c), Ai(l, s), i, a);
	{
		let s = Ni(e, c), l = zo[s], u = r.direction[l] >= 0, d, f;
		u ? (d = ji(e), f = Mi(e, c)) : (d = Mi(e, c), f = ji(e));
		let p = uo(d, o, r, i, a) ? Vo(d, t, n, r, i, a) : null;
		if (p) {
			let e = p.point[l];
			if (u ? e <= o[f + s] : e >= o[f + s + 3]) return p;
		}
		let m = uo(f, o, r, i, a) ? Vo(f, t, n, r, i, a) : null;
		return p && m ? p.distance <= m.distance ? p : m : p || m || null;
	}
}
var Ho = /* @__PURE__ */ new _(), Uo = /* @__PURE__ */ new Ra(), Wo = /* @__PURE__ */ new Ra(), Go = /* @__PURE__ */ new H(), Ko = /* @__PURE__ */ new za(), qo = /* @__PURE__ */ new za();
function Jo(e, t, n, r) {
	ea.setBuffer(e._roots[t]);
	let i = Yo(0, e, n, r);
	return ea.clearBuffer(), i;
}
function Yo(e, t, n, r, i = null) {
	let { float32Array: a, uint16Array: o, uint32Array: s } = ea, c = e * 2;
	if (i === null && (n.boundingBox || n.computeBoundingBox(), Ko.set(n.boundingBox.min, n.boundingBox.max, r), i = Ko), Oi(c, o)) {
		let i = t.geometry, l = i.index, u = i.attributes.position, d = n.index, f = n.attributes.position, p = ki(e, s), m = Ai(c, o);
		if (Go.copy(r).invert(), n.boundsTree) return Si(e, a, qo), qo.matrix.copy(Go), qo.needsUpdate = !0, n.boundsTree.shapecast({
			intersectsBounds: (e) => qo.intersectsBox(e),
			intersectsTriangle: (e) => {
				e.a.applyMatrix4(r), e.b.applyMatrix4(r), e.c.applyMatrix4(r), e.needsUpdate = !0;
				for (let n = p, r = m + p; n < r; n++) if (ao(Wo, 3 * t.resolveTriangleIndex(n), l, u), Wo.needsUpdate = !0, e.intersectsTriangle(Wo)) return !0;
				return !1;
			}
		});
		{
			let e = Sa(n);
			for (let n = p, r = m + p; n < r; n++) {
				ao(Uo, 3 * t.resolveTriangleIndex(n), l, u), Uo.a.applyMatrix4(Go), Uo.b.applyMatrix4(Go), Uo.c.applyMatrix4(Go), Uo.needsUpdate = !0;
				for (let t = 0, n = e * 3; t < n; t += 3) if (ao(Wo, t, d, f), Wo.needsUpdate = !0, Uo.intersectsTriangle(Wo)) return !0;
			}
		}
	} else {
		let o = ji(e), c = Mi(e, s);
		return Si(o, a, Ho), !!(i.intersectsBox(Ho) && Yo(o, t, n, r, i) || (Si(c, a, Ho), i.intersectsBox(Ho) && Yo(c, t, n, r, i)));
	}
}
var Xo = /* @__PURE__ */ new H(), Zo = /* @__PURE__ */ new za(), Qo = /* @__PURE__ */ new za(), $o = /* @__PURE__ */ new G(), es = /* @__PURE__ */ new G(), ts = /* @__PURE__ */ new G(), ns = /* @__PURE__ */ new G();
function rs(e, t, n, r = {}, i = {}, a = 0, o = Infinity) {
	t.boundingBox || t.computeBoundingBox(), Zo.set(t.boundingBox.min, t.boundingBox.max, n), Zo.needsUpdate = !0;
	let s = e.geometry, c = s.attributes.position, l = s.index, u = t.attributes.position, d = t.index, f = Ba.getPrimitive(), p = Ba.getPrimitive(), m = $o, h = es, g = null, _ = null;
	i && (g = ts, _ = ns);
	let v = Infinity, y = null, b = null;
	return Xo.copy(n).invert(), Qo.matrix.copy(Xo), e.shapecast({
		boundsTraverseOrder: (e) => Zo.distanceToBox(e),
		intersectsBounds: (e, t, n) => n < v && n < o ? (t && (Qo.min.copy(e.min), Qo.max.copy(e.max), Qo.needsUpdate = !0), !0) : !1,
		intersectsRange: (r, i) => {
			if (t.boundsTree) {
				let s = t.boundsTree;
				return s.shapecast({
					boundsTraverseOrder: (e) => Qo.distanceToBox(e),
					intersectsBounds: (e, t, n) => n < v && n < o,
					intersectsRange: (t, o) => {
						for (let x = t, S = t + o; x < S; x++) {
							let t = s.resolveTriangleIndex(x);
							ao(p, 3 * t, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
							for (let t = r, n = r + i; t < n; t++) {
								let n = e.resolveTriangleIndex(t);
								ao(f, 3 * n, l, c), f.needsUpdate = !0;
								let r = f.distanceToTriangle(p, m, g);
								if (r < v && (h.copy(m), _ && _.copy(g), v = r, y = t, b = x), r < a) return !0;
							}
						}
					}
				});
			} else {
				let o = Sa(t);
				for (let t = 0, s = o; t < s; t++) {
					ao(p, 3 * t, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
					for (let n = r, o = r + i; n < o; n++) {
						let r = e.resolveTriangleIndex(n);
						ao(f, 3 * r, l, c), f.needsUpdate = !0;
						let i = f.distanceToTriangle(p, m, g);
						if (i < v && (h.copy(m), _ && _.copy(g), v = i, y = n, b = t), i < a) return !0;
					}
				}
			}
		}
	}), Ba.releasePrimitive(f), Ba.releasePrimitive(p), v === Infinity ? null : (r.point ? r.point.copy(h) : r.point = h.clone(), r.distance = v, r.faceIndex = y, i && (i.point ? i.point.copy(_) : i.point = _.clone(), i.point.applyMatrix4(Xo), h.applyMatrix4(Xo), i.distance = h.sub(i.point).length(), i.faceIndex = b), r);
}
function is(e, t, n) {
	return e === null ? null : (e.point.applyMatrix4(t.matrixWorld), e.distance = e.point.distanceTo(n.ray.origin), e.object = t, e);
}
var as = /* @__PURE__ */ new za(), os = /* @__PURE__ */ new M(), ss = /* @__PURE__ */ new G(), cs = /* @__PURE__ */ new H(), ls = /* @__PURE__ */ new G(), us = [
	"getX",
	"getY",
	"getZ"
], ds = class e extends ka {
	static serialize(e, t = {}) {
		t = {
			cloneBuffers: !0,
			...t
		};
		let n = e.geometry, r = e._roots, i = e._indirectBuffer, a = n.getIndex(), o = {
			version: 1,
			roots: null,
			index: null,
			indirectBuffer: null
		};
		return t.cloneBuffers ? (o.roots = r.map((e) => e.slice()), o.index = a ? a.array.slice() : null, o.indirectBuffer = i ? i.slice() : null) : (o.roots = r, o.index = a ? a.array : null, o.indirectBuffer = i), o;
	}
	static deserialize(t, n, r = {}) {
		r = {
			setIndex: !0,
			indirect: !!t.indirectBuffer,
			...r
		};
		let { index: i, roots: a, indirectBuffer: o } = t;
		t.version || (console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."), c(a));
		let s = new e(n, {
			...r,
			[bi]: !0
		});
		if (s._roots = a, s._indirectBuffer = o || null, r.setIndex) {
			let e = n.getIndex();
			if (e === null) {
				let e = new W(t.index, 1, !1);
				n.setIndex(e);
			} else e.array !== i && (e.array.set(i), e.needsUpdate = !0);
		}
		return s;
		function c(e) {
			for (let t = 0; t < e.length; t++) {
				let n = e[t], r = new Uint32Array(n), i = new Uint16Array(n);
				for (let e = 0, t = n.byteLength / gi; e < t; e++) {
					let t = _i * e;
					Oi(2 * t, i) || (r[t + 6] = r[t + 6] / _i - e);
				}
			}
		}
	}
	get primitiveStride() {
		return 3;
	}
	get resolveTriangleIndex() {
		return this.resolvePrimitiveIndex;
	}
	constructor(e, t = {}) {
		t.maxLeafTris && (console.warn("MeshBVH: \"maxLeafTris\" option has been deprecated. Use maxLeafSize, instead."), t = {
			...t,
			maxLeafSize: t.maxLeafTris
		}), super(e, t);
	}
	shiftTriangleOffsets(e) {
		return super.shiftPrimitiveOffsets(e);
	}
	writePrimitiveBounds(e, t, n) {
		let r = this.geometry, i = this._indirectBuffer, a = r.attributes.position, o = r.index ? r.index.array : null, s = (i ? i[e] : e) * 3, c = s + 0, l = s + 1, u = s + 2;
		o && (c = o[c], l = o[l], u = o[u]);
		for (let e = 0; e < 3; e++) {
			let r = a[us[e]](c), i = a[us[e]](l), o = a[us[e]](u), s = r;
			i < s && (s = i), o < s && (s = o);
			let d = r;
			i > d && (d = i), o > d && (d = o), t[n + e] = s, t[n + e + 3] = d;
		}
		return t;
	}
	computePrimitiveBounds(e, t, n) {
		let r = this.geometry, i = this._indirectBuffer, a = r.attributes.position, o = r.index ? r.index.array : null, s = a.normalized;
		if (e < 0 || t + e - n.offset > n.length / 6) throw Error("MeshBVH: compute triangle bounds range is invalid.");
		let c = a.array, l = a.offset || 0, u = 3;
		a.isInterleavedBufferAttribute && (u = a.data.stride);
		let d = [
			"getX",
			"getY",
			"getZ"
		], f = n.offset;
		for (let r = e, p = e + t; r < p; r++) {
			let e = (i ? i[r] : r) * 3, t = (r - f) * 6, p = e + 0, m = e + 1, h = e + 2;
			o && (p = o[p], m = o[m], h = o[h]), s || (p = p * u + l, m = m * u + l, h = h * u + l);
			for (let e = 0; e < 3; e++) {
				let r, i, o;
				s ? (r = a[d[e]](p), i = a[d[e]](m), o = a[d[e]](h)) : (r = c[p + e], i = c[m + e], o = c[h + e]);
				let l = r;
				i < l && (l = i), o < l && (l = o);
				let u = r;
				i > u && (u = i), o > u && (u = o);
				let f = (u - l) / 2, g = e * 2;
				n[t + g + 0] = l + f, n[t + g + 1] = f + (Math.abs(l) + f) * yi;
			}
		}
		return n;
	}
	raycastObject3D(e, t, n = []) {
		let { material: r } = e;
		if (r === void 0) return;
		cs.copy(e.matrixWorld).invert(), os.copy(t.ray).applyMatrix4(cs), ls.setFromMatrixScale(e.matrixWorld), ss.copy(os.direction).multiply(ls);
		let i = ss.length(), a = t.near / i, o = t.far / i;
		if (t.firstHitOnly === !0) {
			let i = this.raycastFirst(os, r, a, o);
			i = is(i, e, t), i && n.push(i);
		} else {
			let i = this.raycast(os, r, a, o);
			for (let r = 0, a = i.length; r < a; r++) {
				let a = is(i[r], e, t);
				a && n.push(a);
			}
		}
		return n;
	}
	refit(e = null) {
		return (this.indirect ? Io : lo)(this, e);
	}
	raycast(e, t = 0, n = 0, r = Infinity) {
		let i = this._roots, a = [], o = this.indirect ? Lo : ho;
		for (let s = 0, c = i.length; s < c; s++) o(this, s, t, e, a, n, r);
		return a;
	}
	raycastFirst(e, t = 0, n = 0, r = Infinity) {
		let i = this._roots, a = null, o = this.indirect ? Bo : vo;
		for (let s = 0, c = i.length; s < c; s++) {
			let i = o(this, s, t, e, n, r);
			i != null && (a == null || i.distance < a.distance) && (a = i);
		}
		return a;
	}
	intersectsGeometry(e, t) {
		let n = !1, r = this._roots, i = this.indirect ? Jo : Eo;
		for (let a = 0, o = r.length; a < o && (n = i(this, a, e, t), !n); a++);
		return n;
	}
	shapecast(e) {
		let t = Ba.getPrimitive(), n = super.shapecast({
			...e,
			intersectsPrimitive: e.intersectsTriangle,
			scratchPrimitive: t,
			iterate: this.indirect ? mo : co
		});
		return Ba.releasePrimitive(t), n;
	}
	bvhcast(t, n, r) {
		let { intersectsRanges: i, intersectsTriangles: a } = r, o = Ba.getPrimitive(), s = this.geometry.index, c = this.geometry.attributes.position, l = this.indirect ? (e) => {
			let t = this.resolveTriangleIndex(e);
			ao(o, t * 3, s, c);
		} : (e) => {
			ao(o, e * 3, s, c);
		}, u = Ba.getPrimitive(), d = t.geometry.index, f = t.geometry.attributes.position, p = t.indirect ? (e) => {
			let n = t.resolveTriangleIndex(e);
			ao(u, n * 3, d, f);
		} : (e) => {
			ao(u, e * 3, d, f);
		};
		if (a) {
			if (!(t instanceof e)) throw Error("MeshBVH: \"intersectsTriangles\" callback can only be used with another MeshBVH.");
			let r = (e, t, r, i, s, c, d, f) => {
				for (let m = r, h = r + i; m < h; m++) {
					p(m), u.a.applyMatrix4(n), u.b.applyMatrix4(n), u.c.applyMatrix4(n), u.needsUpdate = !0;
					for (let n = e, r = e + t; n < r; n++) if (l(n), o.needsUpdate = !0, a(o, u, n, m, s, c, d, f)) return !0;
				}
				return !1;
			};
			if (i) {
				let e = i;
				i = function(t, n, i, a, o, s, c, l) {
					return e(t, n, i, a, o, s, c, l) ? !0 : r(t, n, i, a, o, s, c, l);
				};
			} else i = r;
		}
		return super.bvhcast(t, n, { intersectsRanges: i });
	}
	intersectsBox(e, t) {
		return as.set(e.min, e.max, t), as.needsUpdate = !0, this.shapecast({
			intersectsBounds: (e) => as.intersectsBox(e),
			intersectsTriangle: (e) => as.intersectsTriangle(e)
		});
	}
	intersectsSphere(e) {
		return this.shapecast({
			intersectsBounds: (t) => e.intersectsBox(t),
			intersectsTriangle: (t) => t.intersectsSphere(e)
		});
	}
	closestPointToGeometry(e, t, n = {}, r = {}, i = 0, a = Infinity) {
		return (this.indirect ? rs : Fo)(this, e, t, n, r, i, a);
	}
	closestPointToPoint(e, t = {}, n = 0, r = Infinity) {
		return Ua(this, e, t, n, r);
	}
}, fs = /* @__PURE__ */ new H(), ps = /* @__PURE__ */ new M(), ms = /* @__PURE__ */ new $i(() => new z()), hs = /* @__PURE__ */ new G(), gs = /* @__PURE__ */ new G(), _s = /* @__PURE__ */ new _(), vs = [
	"getX",
	"getY",
	"getZ"
], ys = class extends ka {
	get primitiveStride() {
		return 2;
	}
	writePrimitiveBounds(e, t, n) {
		let r = this._indirectBuffer, { geometry: i, primitiveStride: a } = this, o = i.attributes.position, s = i.index, c = s ? s.count : o.count, l = (r ? r[e] : e) * a, u = (l + 1) % c;
		s && (l = s.getX(l), u = s.getX(u));
		for (let e = 0; e < 3; e++) {
			let r = o[vs[e]](l), i = o[vs[e]](u), a = r < i ? r : i, s = r > i ? r : i;
			t[n + e] = a, t[n + e + 3] = s;
		}
		return t;
	}
	shapecast(e) {
		let t = ms.getPrimitive(), n = super.shapecast({
			...e,
			intersectsPrimitive: e.intersectsLine,
			scratchPrimitive: t,
			iterate: bs
		});
		return ms.releasePrimitive(t), n;
	}
	raycastObject3D(e, t, n = []) {
		let { matrixWorld: r } = e, { firstHitOnly: i } = t;
		fs.copy(r).invert(), ps.copy(t.ray).applyMatrix4(fs);
		let a = t.params.Line.threshold / ((e.scale.x + e.scale.y + e.scale.z) / 3), o = a * a, s = null, c = Infinity;
		return this.shapecast({
			boundsTraverseOrder: (e) => e.distanceToPoint(ps.origin),
			intersectsBounds: (e) => (_s.copy(e).expandByScalar(Math.abs(a)), ps.intersectsBox(_s) ? fi : di),
			intersectsLine: (a, l) => {
				if (ps.distanceSqToSegment(a.start, a.end, hs, gs) > o) return;
				hs.applyMatrix4(e.matrixWorld);
				let u = t.ray.origin.distanceTo(hs);
				u < t.near || u > t.far || i && u >= c || (c = u, l = this.resolvePrimitiveIndex(l), s = {
					distance: u,
					point: gs.clone().applyMatrix4(r),
					index: l * this.primitiveStride,
					face: null,
					faceIndex: null,
					barycoord: null,
					object: e
				}, i || n.push(s));
			}
		}), i && s && n.push(s), n;
	}
};
function bs(e, t, n, r, i, a, o) {
	let { geometry: s, primitiveStride: c } = n, { index: l } = s, u = s.attributes.position, d = l ? l.count : u.count;
	for (let s = e, f = t + e; s < f; s++) {
		let e = n.resolvePrimitiveIndex(s) * c, t = (e + 1) % d;
		if (l && (e = l.getX(e), t = l.getX(t)), o.start.fromBufferAttribute(u, e), o.end.fromBufferAttribute(u, t), r(o, s, i, a)) return !0;
	}
	return !1;
}
var xs = {
	Mesh: U.prototype.raycast,
	Line: e.prototype.raycast,
	LineSegments: B.prototype.raycast,
	LineLoop: Me.prototype.raycast,
	Points: oe.prototype.raycast,
	BatchedMesh: p.prototype.raycast
}, Ss = /* @__PURE__ */ new U(), Cs = [];
function ws(t, n) {
	if (this.isBatchedMesh) Ts.call(this, t, n);
	else {
		let { geometry: r } = this;
		if (r.boundsTree) r.boundsTree.raycastObject3D(this, t, n);
		else {
			let r;
			if (this instanceof U) r = xs.Mesh;
			else if (this instanceof B) r = xs.LineSegments;
			else if (this instanceof Me) r = xs.LineLoop;
			else if (this instanceof e) r = xs.Line;
			else if (this instanceof oe) r = xs.Points;
			else throw Error("BVH: Fallback raycast function not found.");
			r.call(this, t, n);
		}
	}
}
function Ts(e, t) {
	if (this.boundsTrees) {
		let n = this.boundsTrees, r = this._drawInfo || this._instanceInfo, i = this._drawRanges || this._geometryInfo, a = this.matrixWorld;
		Ss.material = this.material, Ss.geometry = this.geometry;
		let o = Ss.geometry.boundsTree, s = Ss.geometry.drawRange;
		Ss.geometry.boundingSphere === null && (Ss.geometry.boundingSphere = new b());
		for (let o = 0, s = r.length; o < s; o++) {
			if (!this.getVisibleAt(o)) continue;
			let s = r[o].geometryIndex;
			if (Ss.geometry.boundsTree = n[s], this.getMatrixAt(o, Ss.matrixWorld).premultiply(a), !Ss.geometry.boundsTree) {
				this.getBoundingBoxAt(s, Ss.geometry.boundingBox), this.getBoundingSphereAt(s, Ss.geometry.boundingSphere);
				let e = i[s];
				Ss.geometry.setDrawRange(e.start, e.count);
			}
			Ss.raycast(e, Cs);
			for (let e = 0, n = Cs.length; e < n; e++) {
				let n = Cs[e];
				n.object = this, n.batchId = o, t.push(n);
			}
			Cs.length = 0;
		}
		Ss.geometry.boundsTree = o, Ss.geometry.drawRange = s, Ss.material = null, Ss.geometry = null;
	} else xs.BatchedMesh.call(this, e, t);
}
function Es(e = {}) {
	let { type: t = ds } = e;
	return this.boundsTree = new t(this, e), this.boundsTree;
}
function Ds() {
	this.boundsTree = null;
}
var Os = class e extends qt {
	constructor(t) {
		super(t), X(this, "onDisposed", new Z()), X(this, "onBeforeDispose", new Z()), X(this, "onFragmentsLoaded", new Z()), X(this, "baseCoordinationModel", ""), X(this, "baseCoordinationMatrix", new H()), X(this, "enabled", !0), X(this, "_core"), this.components.add(e.uuid, this);
	}
	static getWorker() {
		return j.getWorker();
	}
	get initialized() {
		return !!this._core;
	}
	get list() {
		return this.core.models.list;
	}
	get core() {
		if (!this._core) throw Error("FragmentsManager not initialized. Call init() first.");
		return this._core;
	}
	get _hasCoordinationModel() {
		return this.baseCoordinationModel !== "";
	}
	dispose() {
		this.onBeforeDispose.trigger(), this._core &&= (this.core.dispose(), void 0), this.baseCoordinationModel = "", this.onFragmentsLoaded.reset(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	init(e, t) {
		this._core = new j(e, t), this.core.onModelLoaded.add(async () => {
			if (this._hasCoordinationModel) return;
			let e = [...this.list.values()][0];
			e && (this.baseCoordinationModel = e.modelId, this.baseCoordinationMatrix = await e.getCoordinationMatrix());
		}), this.list.onItemDeleted.add(() => {
			this.list.size > 0 || (this.baseCoordinationModel = "", this.baseCoordinationMatrix = new H());
		});
	}
	async raycast(e) {
		let t = [];
		for (let n of this.core.models.list.values()) if (e.snappingClasses && e.snappingClasses.length > 0) {
			let r = await n.raycastWithSnapping(e);
			if (r && r.length > 0) t.push(r[0]);
			else {
				let r = await n.raycast(e);
				r && t.push(r);
			}
		} else {
			let r = await n.raycast(e);
			r && t.push(r);
		}
		if (await Promise.all(t), t.length === 0) return;
		let n = t[0], r = n.distance;
		for (let e = 1; e < t.length; e++) t[e].distance < r && (r = t[e].distance, n = t[e]);
		return n;
	}
	async getPositions(e) {
		let t = [], n = async (e, n) => {
			let r = await e.getPositions(n);
			for (let e of r) t.push(e);
		}, r = [];
		for (let t in e) {
			let i = this.core.models.list.get(t);
			i && r.push(n(i, Array.from(e[t])));
		}
		return await Promise.all(r), t;
	}
	async getBBoxes(e) {
		let t = [], n = async (e, n) => {
			let r = await e.getBoxes(n);
			if (r) for (let e of r) t.push(e);
		}, r = [];
		for (let t in e) {
			let i = this.core.models.list.get(t);
			i && r.push(n(i, Array.from(e[t])));
		}
		return await Promise.all(r), t;
	}
	async highlight(e, t) {
		await this.forEachModel(t, "highlight", e);
	}
	async getData(e, t) {
		let n = {};
		for (let [r, i] of Object.entries(e)) {
			let e = this.list.get(r);
			if (e) {
				if (i.size === 0) {
					n[r] = [];
					continue;
				}
				n[r] = await e.getItemsData([...i], t);
			}
		}
		return n;
	}
	async resetHighlight(e) {
		await this.forEachModel(e, "resetHighlight");
	}
	async forEachModel(e, t, ...n) {
		let r = {};
		if (e) for (let t in e) {
			let n = e[t];
			r[t] = Array.from(n);
		}
		else for (let e of this.core.models.list.keys()) r[e] = void 0;
		let i = [];
		for (let e in r) {
			let a = this.core.models.list.get(e);
			if (a) {
				let o = r[e], s = a[t](o, ...n);
				i.push(s);
			}
		}
		await Promise.all(i);
	}
	async guidsToModelIdMap(e) {
		let t = {};
		for (let [n, r] of this.list) {
			let i = (await r.getLocalIdsByGuids([...e])).filter((e) => e !== null);
			t[n] = new Set(i);
		}
		return t;
	}
	async modelIdMapToGuids(e) {
		let t = [];
		for (let [n, r] of Object.entries(e)) {
			let e = this.list.get(n);
			if (!e) continue;
			let i = (await e.getGuidsByLocalIds([...r])).filter((e) => e !== null);
			t.push(...i);
		}
		return t;
	}
	applyBaseCoordinateSystem(e, t) {
		let n = new H();
		return t && n.copy(t.clone()).invert(), n.multiply(this.baseCoordinationMatrix), e.applyMatrix4(n), n;
	}
};
X(Os, "uuid", "fef46874-46a3-461b-8c44-2922ab77c806");
var Q = Os;
function ks(e, t) {
	t.x = (e & 255) / 255, t.y = (e >> 8 & 255) / 255, t.z = (e >> 16 & 255) / 255, t.w = 1;
}
function As(e, t) {
	return e[t] | e[t + 1] << 8 | e[t + 2] << 16;
}
function js(e) {
	let t = /* @__PURE__ */ new Set();
	return e.traverse((e) => {
		e.isMesh && t.add(e);
	}), Array.from(t);
}
var Ms = class {
	constructor(e, t = {}) {
		let { pixelsPerMeter: n = .1 } = t;
		this.pixelsPerMeter = n, this.renderer = e;
	}
	async cull(e) {
		e = js(e);
		let { renderer: t, pixelsPerMeter: n } = this, r = new G(), i = new ge(), a = new _(), o = new P(1, 1);
		a.makeEmpty(), e.forEach((e) => {
			a.expandByObject(e);
		}), a.getSize(r);
		let s = Math.min(t.capabilities.maxTextureSize, 2 ** 13), l = Math.ceil(r.x / n), u = Math.ceil(r.z / n), d = Math.ceil(l / s), f = Math.ceil(u / s);
		o.setSize(Math.ceil(l / d), Math.ceil(u / f)), i.rotation.x = -Math.PI / 2, i.far = a.max.y - a.min.y + i.near, i.position.y = a.max.y + i.near;
		let p = new c(), m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), g = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			m.set(n, n.material), h.set(n, n.parent);
			let r = new Ns();
			r.objectId = t, g.push(r), n.material = r, p.add(n);
		}
		let v = t.getClearColor(new N()), y = t.getClearAlpha(), b = t.getRenderTarget(), x = t.autoClear;
		t.autoClear = !0, t.setClearColor(0, 0), t.setRenderTarget(o);
		let S = new Uint8Array(o.width * o.height * 4), C = /* @__PURE__ */ new Set(), w = r.x / d, T = r.z / f;
		for (let n = 0; n < d; n++) for (let r = 0; r < f; r++) {
			let s = a.min.x + w * n, c = s + w, l = a.min.z + T * r, u = l + T, d = (s + c) / 2, f = (l + u) / 2;
			i.position.set(d, a.max.y, f);
			let m = w / 2, h = T / 2;
			i.left = -m, i.right = m, i.top = h, i.bottom = -h, i.updateProjectionMatrix(), t.render(p, i);
			let g = await t.readRenderTargetPixelsAsync(o, 0, 0, o.width, o.height, S);
			for (let t = 0, n = g.length; t < n; t += 4) {
				if (g[t + 3] === 0) continue;
				let n = As(g, t);
				C.add(e[n]);
			}
		}
		for (let t of e) {
			t.material = m.get(t);
			let e = h.get(t);
			e ? e.add(t) : p.remove(t);
		}
		t.setClearColor(v, y), t.setRenderTarget(b), t.autoClear = x;
		for (let e of g) e.dispose();
		return o.dispose(), Array.from(C);
	}
}, Ns = class extends w {
	get objectId() {
		return this._objectId;
	}
	set objectId(e) {
		this._objectId = e, ks(e, this.uniforms.objectId.value);
	}
	constructor(e) {
		super({
			glslVersion: I,
			blending: 0,
			uniforms: { objectId: { value: new i() } },
			vertexShader: "\n				void main() {\n\n					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n				}\n			",
			fragmentShader: "\n				layout(location = 0) out vec4 out_id;\n				uniform vec4 objectId;\n\n				void main() {\n\n					out_id = objectId;\n\n				}\n			"
		}), this._objectId = 0, this.setValues(e);
	}
}, Ps = 1e-16, Fs = /* @__PURE__ */ new G(0, 1, 0), Is = new G();
function Ls(e) {
	return e.delta(Is).normalize(), Math.abs(Is.dot(Fs)) >= 1 - Ps;
}
function Rs(e, t) {
	let { start: n, end: r } = t, i = e.points, a = !1, o = !1;
	for (let e = 0; e < 3; e++) {
		let t = i[e];
		if (!a && n.distanceToSquared(t) <= Ps && (a = !0), !o && r.distanceToSquared(t) <= Ps && (o = !0), a && o) return !0;
	}
	return a && o;
}
var zs = /* @__PURE__ */ new z();
function Bs(e, t, n = !1, r = []) {
	let i = [[0, 1]];
	for (let e = 0, n = t.length; e < n; e++) {
		let n = i[e], r = t[e];
		n[1] = r[0], i.push([r[1], 1]);
	}
	n && ([t, i] = [i, t]);
	for (let t = 0, n = i.length; t < n; t++) {
		let { start: n, end: a } = e;
		zs.start.lerpVectors(n, a, i[t][0]), zs.end.lerpVectors(n, a, i[t][1]), r.push(new Float32Array([
			zs.start.x,
			zs.start.y,
			zs.start.z,
			zs.end.x,
			zs.end.y,
			zs.end.z
		]));
	}
	return r;
}
var Vs = 1e-10, Hs = /* @__PURE__ */ new G(0, 1, 0), Us = /* @__PURE__ */ new G(), Ws = /* @__PURE__ */ new G(), Gs = /* @__PURE__ */ new G(), Ks = /* @__PURE__ */ new m();
function* qs(e, t = [], n = {}) {
	let { projectionDirection: r = Hs, thresholdAngle: i = 1, iterationTime: a = 30 } = n, o = 10 ** 4, s = Math.cos(Pe.DEG2RAD * i), c = e.getIndex(), l = e.getAttribute("position"), u = c ? c.count : l.count, d = [
		0,
		0,
		0
	], f = [
		"a",
		"b",
		"c"
	], p = [
		,
		,
		,
	], m = {}, h = performance.now();
	for (let e = 0; e < u; e += 3) {
		performance.now() - h > a && (yield, h = performance.now()), c ? (d[0] = c.getX(e), d[1] = c.getX(e + 1), d[2] = c.getX(e + 2)) : (d[0] = e, d[1] = e + 1, d[2] = e + 2);
		let { a: n, b: i, c: u } = Ks;
		if (n.fromBufferAttribute(l, d[0]), i.fromBufferAttribute(l, d[1]), u.fromBufferAttribute(l, d[2]), Ks.getNormal(Gs), p[0] = `${Math.round(n.x * o)},${Math.round(n.y * o)},${Math.round(n.z * o)}`, p[1] = `${Math.round(i.x * o)},${Math.round(i.y * o)},${Math.round(i.z * o)}`, p[2] = `${Math.round(u.x * o)},${Math.round(u.y * o)},${Math.round(u.z * o)}`, !(p[0] === p[1] || p[1] === p[2] || p[2] === p[0])) for (let e = 0; e < 3; e++) {
			let n = (e + 1) % 3, i = p[e], a = p[n], o = Ks[f[e]], c = Ks[f[n]], l = `${i}_${a}`, u = `${a}_${i}`;
			if (u in m && m[u]) {
				let e = m[u].normal, n = Gs.dot(e) <= s, i = !1;
				if (r !== null) {
					let t = r.dot(Gs);
					t = Math.abs(t) < Vs ? 0 : t;
					let n = r.dot(e);
					n = Math.abs(n) < Vs ? 0 : n, i = Math.sign(t) !== Math.sign(n);
				}
				if (n || i) {
					let e = new z();
					e.start.copy(o), e.end.copy(c), t.push(e);
				}
				m[u] = null;
			} else l in m || (m[l] = {
				index0: d[e],
				index1: d[n],
				normal: Gs.clone()
			});
		}
	}
	for (let e in m) if (m[e]) {
		let { index0: n, index1: r } = m[e];
		Us.fromBufferAttribute(l, n), Ws.fromBufferAttribute(l, r);
		let i = new z();
		i.start.copy(Us), i.end.copy(Ws), t.push(i);
	}
	return t;
}
var Js = /* @__PURE__ */ new z();
function Ys(e, t, n, r = []) {
	return e.bvhcast(t, n, { intersectsTriangles: (e, t) => {
		if (Zs(e, t) || (e.needsUpdate && e.update(), t.needsUpdate && t.update(), Math.abs(e.plane.normal.dot(t.plane.normal)) > .999999)) return !1;
		e.intersectsTriangle(t, Js, !0) && !Rs(e, Js) && !Rs(t, Js) && r.push(Js.clone());
	} }), r;
}
function Xs(e, t) {
	return e.distanceTo(t) < 1e-10;
}
function Zs(e, t) {
	let n = [
		"a",
		"b",
		"c"
	], r = 0;
	for (let i = 0; i < 3; i++) for (let a = 0; a < 3; a++) {
		let o = e[n[i]], s = t[n[a]];
		Xs(o, s) && r++;
	}
	return r >= 2;
}
function Qs(e) {
	$s(e);
	let t = [];
	return e.traverse((e) => {
		e.geometry && e.visible && t.push(e);
	}), t;
}
var $s = (e) => {
	if (e === void 0) return;
	let t = [...e.children];
	for (let n of t) n === void 0 ? e.children.splice(e.children.indexOf(n), 1) : $s(n);
}, ec = /* @__PURE__ */ new H(), tc = /* @__PURE__ */ new H(), nc = class {
	constructor() {
		this.projectionDirection = new G(0, 1, 0), this.thresholdAngle = 50, this.iterationTime = 30;
	}
	getEdges(...e) {
		let t = this.iterationTime;
		this.iterationTime = Infinity;
		let n = this.getEdgesGenerator(...e).next().value;
		return this.iterationTime = t, n;
	}
	*getEdgesGenerator(e, t = [], n = null) {
		let { projectionDirection: r, thresholdAngle: i, iterationTime: a } = this;
		if (e.isObject3D) {
			let o = Qs(e), s = null;
			r && (s = new G());
			let c = performance.now();
			for (let e = 0; e < o.length; e++) {
				c - performance.now() > a && (yield);
				let l = o[e];
				s && (tc.copy(l.matrixWorld).invert(), s.copy(r).transformDirection(tc).normalize());
				let u = yield* qs(l.geometry, [], {
					projectionDirection: s,
					thresholdAngle: i,
					iterationTime: a
				});
				rc(u, l.matrixWorld);
				for (let e = 0; e < u.length; e++) t.push(u[e]);
				if (n !== null) for (let e = 0; e < u.length; e++) n.push(l);
			}
			return t;
		} else return yield* qs(e, t, {
			projectionDirection: r,
			thresholdAngle: i,
			iterationTime: a
		});
	}
	getIntersectionEdges(...e) {
		let t = this.iterationTime;
		this.iterationTime = Infinity;
		let n = this.getIntersectionEdgesGenerator(...e).next().value;
		return this.iterationTime = t, n;
	}
	*getIntersectionEdgesGenerator(e, t = [], n = null) {
		let { iterationTime: r } = this;
		if (e.isObject3D) {
			let i = Qs(e), a = /* @__PURE__ */ new Map(), o = performance.now();
			for (let e = 0; e < i.length; e++) {
				performance.now() - o > r && (yield, o = performance.now());
				let t = i[e].geometry;
				if (!a.has(t)) {
					let e = t.boundsTree || new ds(t, { maxLeafSize: 1 });
					a.set(t, e);
				}
			}
			o = performance.now();
			for (let e = 0; e < i.length; e++) for (let s = e; s < i.length; s++) {
				performance.now() - o > r && (yield, o = performance.now());
				let c = i[e], l = i[s], u = a.get(c.geometry), d = a.get(l.geometry);
				ec.copy(c.matrixWorld).invert().multiply(l.matrixWorld);
				let f = Ys(u, d, ec, []);
				rc(f, c.matrixWorld);
				for (let e = 0; e < f.length; e++) t.push(f[e]);
				if (n !== null) for (let e = 0; e < f.length; e++) n.push(c);
			}
			return t;
		} else {
			let n;
			return e.isBufferGeometry ? n = e.boundsTree || new ds(e, { maxLeafSize: 1 }) : (n = e, e = n.geometry), ec.identity(), Ys(n, n, ec, t);
		}
	}
};
function rc(e, t, n = 1e-6) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		i.applyMatrix4(t), i.start.y += n, i.end.y += n;
	}
}
var ic = class extends ya {
	get lines() {
		return this.primitiveBuffer;
	}
	constructor(e, t) {
		super(t), this.primitiveBuffer = e, this.primitiveBufferStride = 1, this.heightOffset = t.heightOffset ?? 1e3, this.init(t);
	}
	writePrimitiveBounds(e, t, n) {
		let { primitiveBuffer: r, heightOffset: i } = this, { start: a, end: o } = r[e];
		t[n + 0] = Math.min(a.x, o.x), t[n + 1] = Math.min(a.y, o.y), t[n + 2] = Math.min(a.z, o.z), t[n + 3] = Math.max(a.x, o.x), t[n + 4] = Math.max(a.y, o.y) + i, t[n + 5] = Math.max(a.z, o.z);
	}
	getRootRanges() {
		return [{
			offset: 0,
			count: this.primitiveBuffer.length
		}];
	}
}, ac = 1e-16, oc = /* @__PURE__ */ new G(0, 1, 0), sc = /* @__PURE__ */ new ne(), cc = /* @__PURE__ */ new G(), lc = /* @__PURE__ */ new G();
function uc(e, t, n) {
	e.needsUpdate && e.update(), sc.copy(e.plane), sc.normal.dot(oc) < 0 && (sc.normal.multiplyScalar(-1), sc.constant *= -1);
	let r = sc.distanceToPoint(t.start), i = sc.distanceToPoint(t.end), a = Math.abs(r) < ac, o = r < 0, s = i < 0;
	if (t.delta(lc).normalize(), Math.abs(sc.normal.dot(lc)) < ac) return a || !o ? !1 : (n.copy(t), !0);
	if (o && s) return n.copy(t), !0;
	if (!o && !s) return !1;
	{
		let e = Pe.mapLinear(0, r, i, 0, 1);
		if (t.at(e, cc), o) return n.start.copy(t.start), n.end.copy(cc), !0;
		if (s) return n.end.copy(t.end), n.start.copy(cc), !0;
	}
	return !1;
}
var dc = 1e-16, fc = 1e-16, pc = /* @__PURE__ */ new ne(), mc = /* @__PURE__ */ new G(), hc = /* @__PURE__ */ new G(), gc = /* @__PURE__ */ new Ra(), _c = /* @__PURE__ */ new z(), vc = /* @__PURE__ */ new z(), yc = /* @__PURE__ */ new G(), bc = /* @__PURE__ */ new G(), xc = /* @__PURE__ */ new G();
function Sc(e, t, n = new z()) {
	if (gc.copy(t), gc.a.y = 0, gc.b.y = 0, gc.c.y = 0, gc.update(), _c.copy(e), _c.start.y = 0, _c.end.y = 0, gc.getArea() <= dc) return null;
	let r = _c.distance();
	_c.delta(yc).divideScalar(r), bc.copy(yc).cross(gc.plane.normal).normalize(), pc.setFromNormalAndCoplanarPoint(bc, _c.start);
	let i = 0, { points: a } = gc;
	for (let e = 0; e < 3; e++) {
		let t = a[e], n = a[(e + 1) % 3], r = pc.distanceToPoint(t), o = pc.distanceToPoint(n), s = Math.abs(r) < fc, c = Math.abs(o) < fc, l = !1;
		if (!s && !c && r * o < 0) {
			let e = r / (r - o);
			mc.lerpVectors(t, n, e), l = !0;
		}
		if ((l && !c || s) && (s && !l && mc.copy(t), i === 0 ? vc.start.copy(mc) : vc.end.copy(mc), i++, i === 2)) break;
	}
	if (i === 2) {
		if (vc.delta(xc).normalize(), yc.dot(xc) < 0) {
			let e = vc.start;
			vc.start = vc.end, vc.end = e;
		}
		let t = hc.subVectors(_c.end, _c.start).dot(yc), i = hc.subVectors(vc.start, _c.start).dot(yc), a = hc.subVectors(vc.end, _c.start).dot(yc);
		return t <= i || a <= 0 ? null : (e.at(Math.max(0, i) / r, n.start), e.at(Math.min(t, a) / r, n.end), n);
	}
	return null;
}
var Cc = 1e-16, wc = /* @__PURE__ */ new G(), Tc = /* @__PURE__ */ new G(), Ec = /* @__PURE__ */ new G();
function Dc(e, t, n) {
	let r = Oc(e, t);
	return r ? (kc(r, n), !0) : !1;
}
function Oc(e, t) {
	e.delta(wc), Tc.subVectors(t.start, e.start), Ec.subVectors(t.end, e.start);
	let n = wc.length(), r = Tc.length() / n, i = Ec.length() / n;
	return r = Math.min(Math.max(r, 0), 1), i = Math.min(Math.max(i, 0), 1), Math.abs(r - i) <= Cc ? null : [r, i];
}
function kc(e, t) {
	let [n, r] = e, i = 0, a = t.length;
	for (; i < a;) {
		let e = i + a >>> 1;
		t[e][0] <= n ? i = e + 1 : a = e;
	}
	let o = Math.max(0, i - 1), s = 0;
	for (let e = o, i = t.length; e < i; e++) {
		let [i, a] = t[e];
		if (n <= a && r >= i) n = Math.min(i, n), r = Math.max(a, r), s++;
		else if (n >= i) o = e + 1;
		else break;
	}
	t.splice(o, s, [n, r]);
}
var Ac = new G(0, 1, 0), jc = 1e-10, Mc = /* @__PURE__ */ new z(), Nc = /* @__PURE__ */ new z(), Pc = /* @__PURE__ */ new Ra();
Pc.update = () => {
	Pc.plane.setFromCoplanarPoints(...Pc.points);
};
function Fc(e, t, n, r, i = null) {
	let { geometry: a, matrixWorld: o, material: s } = n, c = s.side, l = o.determinant() < 0, u = e.lines;
	e.bvhcast(t, o, { intersectsRanges: (e, t, n, s) => {
		i && (i.candidates += t * s);
		for (let d = n, f = s + n; d < f; d++) {
			let n = 3 * d + 0, s = 3 * d + 1, f = 3 * d + 2;
			a.index && (n = a.index.getX(n), s = a.index.getX(s), f = a.index.getX(f));
			let { a: p, b: m, c: h } = Pc;
			if (p.fromBufferAttribute(a.attributes.position, n).applyMatrix4(o), m.fromBufferAttribute(a.attributes.position, s).applyMatrix4(o), h.fromBufferAttribute(a.attributes.position, f).applyMatrix4(o), Pc.needsUpdate = !0, Pc.update(), c !== 2 && Pc.plane.normal.dot(Ac) !== l == (c === 1)) {
				i && (i.backFaceCulled += t);
				continue;
			}
			let g = Math.max(p.y, m.y, h.y), _ = Math.min(p.y, m.y, h.y), v = Pc.plane.normal, y = v.x, b = v.y, x = v.z, S = Pc.plane.constant;
			b < 0 && (y = -y, b = -b, x = -x, S = -S);
			for (let n = e, a = t + e; n < a; n++) {
				let e = u[n], t = Math.min(e.start.y, e.end.y), a = Math.max(e.start.y, e.end.y);
				if (g <= t) {
					i && i.yBoundsCulled++;
					continue;
				}
				let o = e.end.x - e.start.x, s = e.end.z - e.start.z, c = o * o + s * s;
				if (c > 1e-20) {
					let t = 1 / Math.sqrt(c), n = o * t, r = s * t, a = -r, l = n, u = p.x - e.start.x, d = p.z - e.start.z, f = m.x - e.start.x, g = m.z - e.start.z, _ = h.x - e.start.x, v = h.z - e.start.z, y = u * n + d * r, b = f * n + g * r, x = _ * n + v * r, S = 1 / t;
					if (Math.max(y, b, x) < 0 || Math.min(y, b, x) > S) {
						i && i.xzBoundsCulled++;
						continue;
					}
					let C = u * a + d * l, w = f * a + g * l, T = _ * a + v * l;
					if (Math.min(C, w, T) > 0 || Math.max(C, w, T) < 0) {
						i && i.xzBoundsCulled++;
						continue;
					}
				}
				let l = y * e.start.x + b * e.start.y + x * e.start.z + S, d = y * e.end.x + b * e.end.y + x * e.end.z + S;
				if (l >= 0 && d >= 0) {
					i && i.planeTrimCulled++;
					continue;
				}
				if (Rs(Pc, e)) {
					i && i.triangleEdgeCulled++;
					continue;
				}
				if (a < _) Mc.copy(e);
				else if (!uc(Pc, e, Mc)) {
					i && i.planeTrimCulled++;
					continue;
				}
				if (Mc.distance() < jc) {
					i && i.distThresholdCulled++;
					continue;
				}
				Sc(Mc, Pc, Nc) ? (i && i.used++, Dc(e, Nc, r[n])) : i && i.noOverlapCulled++;
			}
		}
	} });
}
var Ic = !1, Lc = {}, Rc = {}, zc = null, Bc = 0, Vc = 0, $ = {
	get enabled() {
		return Ic;
	},
	set enabled(e) {
		Ic = e;
	},
	reset() {
		for (let e in Lc) delete Lc[e];
		for (let e in Rc) delete Rc[e];
		zc = null, Bc = 0, Vc = 0;
	},
	setStat(e, t) {
		Rc[e] = t;
	},
	startTotal() {
		Ic && (Vc = performance.now());
	},
	startStep(e) {
		Ic && (zc !== null && this.endStep(), zc = e, Bc = performance.now());
	},
	endStep() {
		!Ic || zc === null || (Lc[zc] = performance.now() - Bc, zc = null);
	},
	printSummary() {
		if (!Ic) return;
		zc !== null && this.endStep();
		let e = performance.now() - Vc;
		console.log("\n=== Projection Summary ==="), console.log(`Total time: ${e.toFixed(1)}ms
`);
		for (let [t, n] of Object.entries(Lc)) {
			let r = (n / e * 100).toFixed(1);
			console.log(`  ${t}: ${n.toFixed(1)}ms (${r}%)`);
		}
		if (Object.keys(Rc).length > 0) {
			console.log("\n--- Stats ---");
			for (let [e, t] of Object.entries(Rc)) console.log(`  ${e}: ${t}`);
		}
		console.log("");
	}
}, Hc = 1e-5, Uc = 1e-16, Wc = 1e-16;
function Gc(e) {
	let t = new Float32Array(e.length * 6);
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		t[n * 6 + 0] = r.start.x, t[n * 6 + 1] = r.start.y, t[n * 6 + 2] = r.start.z, t[n * 6 + 3] = r.end.x, t[n * 6 + 4] = r.end.y, t[n * 6 + 5] = r.end.z;
	}
	return t;
}
function Kc(e, t, n, r, i) {
	e.bvhcast(t, n.matrixWorld, { intersectsRanges: (e, t, n, a) => {
		r._edgeOffsets.push(e), r._edgeCounts.push(t), r._meshOffsets.push(n), r._meshCounts.push(a), r._meshIndex.push(i), r.groupCount++;
	} });
}
var qc = 1e3, Jc = 1e5, Yc = 5, Xc = 3, Zc = 2e6, Qc = null;
async function $c() {
	return Qc === null && (Qc = new k(), await Qc.init()), Qc;
}
async function el(e, t, n, r, i = null) {
	let a = await $c();
	e._edgeOffsets && (e.edgeOffsets = new Uint32Array(e._edgeOffsets), e.edgeCounts = new Uint32Array(e._edgeCounts), e.meshOffsets = new Uint32Array(e._meshOffsets), e.meshCounts = new Uint32Array(e._meshCounts), e.meshIndex = new Uint32Array(e._meshIndex), e._edgeOffsets = null, e._edgeCounts = null, e._meshOffsets = null, e._meshCounts = null, e._meshIndex = null);
	let o = le(Gc(n.lines), "float");
	$.enabled && console.log("Number of meshes:", t.length), $.enabled && console.log("Group count:", e.groupCount);
	let s = [];
	{
		let e = 0;
		for (; e < t.length;) {
			let n = e, r = 0;
			for (; n < t.length;) {
				let i = t[n].geometry, a = i.index ? i.index.count / 3 : i.attributes.position.count / 3;
				if (n > e && (n - e >= qc || r + a > Jc)) break;
				r += a, n++;
			}
			s.push({
				start: e,
				end: n
			}), e = n;
		}
	}
	$.enabled && console.log(`Split ${t.length} meshes into ${s.length} batches`);
	let c = 0, l = 0, u = 0, d = 0, f = 0;
	for (let n = 0; n < s.length; n++) {
		let { start: p, end: m } = s[n], h = m - p;
		$.enabled && console.log(`Processing batch ${n + 1}/${s.length} (meshes ${p}-${m - 1})`);
		let g = 0, _ = 0, v = [];
		for (let e = p; e < m; e++) {
			let n = t[e].geometry;
			v.push(_ / 3), g += n.attributes.position.array.length, _ += n.index.array.length;
		}
		let y = new Float32Array(g), b = new Uint32Array(_), x = 0, S = 0, C = 0;
		for (let e = p; e < m; e++) {
			let n = t[e].geometry, r = n.attributes.position.array, i = n.index.array;
			y.set(r, x), x += r.length;
			for (let e = 0; e < i.length; e++) b[S + e] = i[e] + C;
			S += i.length, C += n.attributes.position.count;
		}
		let w = new Float32Array(h * 16);
		for (let e = p; e < m; e++) {
			let n = e - p;
			w.set(t[e].matrixWorld.elements, n * 16);
		}
		let T = [];
		for (let t = 0; t < e.groupCount; t++) {
			let n = e.meshIndex[t];
			if (n >= p && n < m) {
				let r = n - p, i = v[r] + e.meshOffsets[t];
				T.push({
					edgeOffset: e.edgeOffsets[t],
					edgeCount: e.edgeCounts[t],
					triOffset: i,
					triCount: e.meshCounts[t],
					meshIdx: r
				});
			}
		}
		if (T.length === 0) {
			$.enabled && console.log(`  Batch ${n + 1}: no groups, skipping`);
			continue;
		}
		let E = new Uint32Array(T.length * Yc);
		for (let e = 0; e < T.length; e++) {
			let t = T[e], n = e * Yc;
			E[n + 0] = t.edgeOffset, E[n + 1] = t.edgeCount, E[n + 2] = t.triOffset, E[n + 3] = t.triCount, E[n + 4] = t.meshIdx;
		}
		let D = 0;
		for (let e = 0; e < T.length; e++) D += T[e].edgeCount * T[e].triCount;
		i && (i.candidates += D);
		let O = Math.min(Math.ceil(D * .1), Zc), k = Math.max(O, 1e4);
		$.enabled && console.log(`  Batch ${n + 1}: ${T.length} groups, ${g / 3} vertices, ${_ / 3} triangles, ${D} pairs, buffer for ${k} overlaps`);
		let A = performance.now(), j = le(y, "float"), M = le(b, "uint"), N = le(w, "float"), ee = le(E, "uint"), P = le(new Uint32Array([0]), "uint").toAtomic(), F = le(new Float32Array(k * Xc), "float");
		d += performance.now() - A;
		let I = performance.now(), L = je(() => {
			let e = Le.mul(Yc), t = ee.element(e), n = ee.element(e.add(1)), r = ee.element(e.add(2)), i = ee.element(e.add(3)), a = ee.element(e.add(4)).mul(16), s = Oe(N.element(a), N.element(a.add(1)), N.element(a.add(2)), N.element(a.add(3)), N.element(a.add(4)), N.element(a.add(5)), N.element(a.add(6)), N.element(a.add(7)), N.element(a.add(8)), N.element(a.add(9)), N.element(a.add(10)), N.element(a.add(11)), N.element(a.add(12)), N.element(a.add(13)), N.element(a.add(14)), N.element(a.add(15)));
			re({
				start: de(0),
				end: i.toInt(),
				type: "int",
				condition: "<",
				name: "triIdx"
			}, ({ triIdx: e }) => {
				let i = r.add(e.toUint()).mul(3), a = M.element(i), c = M.element(i.add(1)), l = M.element(i.add(2)), u = ae(j.element(a.mul(3)), j.element(a.mul(3).add(1)), j.element(a.mul(3).add(2))), d = ae(j.element(c.mul(3)), j.element(c.mul(3).add(1)), j.element(c.mul(3).add(2))), f = ae(j.element(l.mul(3)), j.element(l.mul(3).add(1)), j.element(l.mul(3).add(2))), p = s.mul(He(u, V(1))).xyz, m = s.mul(He(d, V(1))).xyz, h = s.mul(He(f, V(1))).xyz, g = se(m.sub(p), h.sub(p));
				_e(g.dot(g).lessThan(V(4 * Uc * Uc)), () => {
					we();
				}), _e(g.y.lessThan(0), () => {
					we();
				});
				let _ = Se(p.y, Se(m.y, h.y));
				re({
					start: de(0),
					end: n.toInt(),
					type: "int",
					condition: "<",
					name: "edgeIdx"
				}, ({ edgeIdx: e }) => {
					let n = t.add(e.toUint()), r = n.mul(6), i = ae(o.element(r), o.element(r.add(1)), o.element(r.add(2))), a = ae(o.element(r.add(3)), o.element(r.add(4)), o.element(r.add(5))), s = he(i.y, a.y);
					_e(_.lessThanEqual(s), () => {
						we();
					});
					let c = te(g), l = c.dot(p).negate(), u = c.y.lessThan(0), d = Re(u, c.negate(), c), f = Re(u, l.negate(), l), v = d.dot(i).add(f), y = d.dot(a).add(f), b = v.lessThan(0), x = y.lessThan(0), S = Ee(v).lessThan(V(Hc)), C = b.not().and(x.not()), w = y.sub(v), T = Ee(w).lessThan(V(Hc));
					_e(T.and(S.or(b.not())), () => {
						we();
					}), _e(C.and(T.not()), () => {
						we();
					});
					let E = pe(i, a, v.negate().div(w)), D = ae(Re(T.or(b), i.x, E.x), Re(T.or(b), i.y, E.y), Re(T.or(b), i.z, E.z)), O = ae(Re(T.or(x), a.x, E.x), Re(T.or(x), a.y, E.y), Re(T.or(x), a.z, E.z)), A = O.sub(D);
					_e(A.dot(A).lessThan(V(Hc)), () => {
						we();
					});
					let j = i.sub(p), M = i.sub(m), N = i.sub(h), ee = a.sub(p), I = a.sub(m), L = a.sub(h), R = j.dot(j).lessThanEqual(V(Hc)), ne = M.dot(M).lessThanEqual(V(Hc)), re = N.dot(N).lessThanEqual(V(Hc)), ie = ee.dot(ee).lessThanEqual(V(Hc)), oe = I.dot(I).lessThanEqual(V(Hc)), ce = L.dot(L).lessThanEqual(V(Hc)), le = R.or(ne).or(re), ue = ie.or(oe).or(ce);
					_e(le.and(ue), () => {
						we();
					});
					let z = ae(p.x, V(0), p.z), de = ae(m.x, V(0), m.z), fe = ae(h.x, V(0), h.z), me = ae(D.x, V(0), D.z), ge = ae(O.x, V(0), O.z), B = ae(i.x, V(0), i.z), ve = ae(a.x, V(0), a.z).sub(B), ye = ve.dot(ve);
					_e(ye.lessThan(V(Hc)), () => {
						we();
					});
					let be = ye.sqrt(), xe = se(de.sub(z), fe.sub(z));
					_e(xe.dot(xe).lessThanEqual(V(4 * Uc * Uc)), () => {
						we();
					});
					let H = ge.sub(me), Ce = H.dot(H);
					_e(Ce.lessThan(V(Hc)), () => {
						we();
					});
					let Te = Ce.sqrt(), De = H.div(Te), Oe = ve.div(be), ke = se(De, te(xe)), Ae = V(0).toVar(), je = V(0).toVar(), Me = V(0).toVar(), Pe = V(0).toVar(), Fe = We(0).toVar(), Ie = ke.dot(z.sub(me)), Le = ke.dot(de.sub(me)), U = Ee(Ie).lessThan(V(Wc)), ze = Ee(Le).lessThan(V(Wc)), Be = U.not().and(ze.not()).and(Ie.mul(Le).lessThan(0));
					_e(Be, () => {
						let e = Ie.div(Ie.sub(Le)), t = pe(z.x, de.x, e), n = pe(z.z, de.z, e);
						_e(Fe.equal(0), () => {
							Ae.assign(t), je.assign(n);
						}).Else(() => {
							Me.assign(t), Pe.assign(n);
						}), Fe.addAssign(1);
					}).ElseIf(U, () => {
						_e(Fe.equal(0), () => {
							Ae.assign(z.x), je.assign(z.z);
						}).Else(() => {
							Me.assign(z.x), Pe.assign(z.z);
						}), Fe.addAssign(1);
					});
					let Ve = Le, He = ke.dot(fe.sub(me)), Ue = ze, Ge = Ee(He).lessThan(V(Wc)), W = Ue.not().and(Ge.not()).and(Ve.mul(He).lessThan(0));
					_e(Fe.lessThan(2), () => {
						_e(W, () => {
							let e = Ve.div(Ve.sub(He)), t = pe(de.x, fe.x, e), n = pe(de.z, fe.z, e);
							_e(Fe.equal(0), () => {
								Ae.assign(t), je.assign(n);
							}).Else(() => {
								Me.assign(t), Pe.assign(n);
							}), Fe.addAssign(1);
						}).ElseIf(Ue.and(Be.not()).and(U.not()), () => {
							_e(Fe.equal(0), () => {
								Ae.assign(de.x), je.assign(de.z);
							}).Else(() => {
								Me.assign(de.x), Pe.assign(de.z);
							}), Fe.addAssign(1);
						});
					});
					let G = He, Ke = Ie, qe = Ge, Je = U, Ye = qe.not().and(Je.not()).and(G.mul(Ke).lessThan(0));
					_e(Fe.lessThan(2), () => {
						_e(Ye, () => {
							let e = G.div(G.sub(Ke)), t = pe(fe.x, z.x, e), n = pe(fe.z, z.z, e);
							_e(Fe.equal(0), () => {
								Ae.assign(t), je.assign(n);
							}).Else(() => {
								Me.assign(t), Pe.assign(n);
							}), Fe.addAssign(1);
						}).ElseIf(qe.and(W.not()).and(Ue.not()), () => {
							_e(Fe.equal(0), () => {
								Ae.assign(fe.x), je.assign(fe.z);
							}).Else(() => {
								Me.assign(fe.x), Pe.assign(fe.z);
							}), Fe.addAssign(1);
						});
					}), _e(Fe.notEqual(2), () => {
						we();
					});
					let Xe = ae(Ae, V(0), je), Ze = ae(Me, V(0), Pe).sub(Xe).dot(De), Qe = ae(Ae, V(0), je).toVar(), $e = ae(Me, V(0), Pe).toVar();
					_e(Ze.lessThan(0), () => {
						let e = Ae, t = je;
						Qe.x.assign(Me), Qe.z.assign(Pe), $e.x.assign(e), $e.z.assign(t);
					});
					let K = V(0), et = Te, q = Qe.sub(me).dot(De), tt = $e.sub(me).dot(De);
					_e(et.lessThanEqual(q).or(tt.lessThanEqual(K)), () => {
						we();
					});
					let nt = Se(K, q), rt = he(et, tt), it = me.add(De.mul(nt)), at = me.add(De.mul(rt)), ot = it.sub(B).dot(Oe).div(be), st = at.sub(B).dot(Oe).div(be), ct = Se(V(0), he(V(1), ot)), lt = Se(V(0), he(V(1), st));
					_e(Ee(lt.sub(ct)).lessThanEqual(V(Wc)), () => {
						we();
					});
					let ut = Ne(P.element(0), 1);
					_e(ut.lessThan(We(k)), () => {
						let e = ut.mul(Xc);
						F.element(e).assign(n.toFloat()), F.element(e.add(1)).assign(ct), F.element(e.add(2)).assign(lt);
					});
				});
			});
		})().compute(T.length);
		f += performance.now() - I;
		let R = performance.now();
		await a.computeAsync(L), c += performance.now() - R;
		let ne = performance.now(), ie = await a.getArrayBufferAsync(P.value), oe = new Uint32Array(ie)[0];
		if (i && (i.used += Math.min(oe, k)), $.enabled && console.log(`  Batch ${n + 1}: ${oe} overlaps found (capacity: ${k})`), oe > k && $.enabled && console.warn(`  WARNING: Overlap buffer overflow! ${oe} > ${k}. Some occlusion data lost.`), oe > 0) {
			let e = await a.getArrayBufferAsync(F.value), t = new Float32Array(e);
			l += performance.now() - ne;
			let n = performance.now(), i = Math.min(oe, k);
			for (let e = 0; e < i; e++) {
				let n = e * Xc, i = Math.round(t[n]), a = t[n + 1], o = t[n + 2];
				kc([a, o], r[i]);
			}
			u += performance.now() - n, $.enabled && console.log(`  Processed ${i} overlaps into hiddenOverlapMap`);
		} else l += performance.now() - ne;
	}
	a.dispose(), Qc = null;
	let p = d + f + c + l + u;
	$.enabled && (console.log(`WebGPU timing breakdown (total: ${p.toFixed(1)}ms):`), console.log(`  Buffer creation: ${d.toFixed(1)}ms`), console.log(`  Shader build: ${f.toFixed(1)}ms`), console.log(`  GPU compute: ${c.toFixed(1)}ms`), console.log(`  Readback: ${l.toFixed(1)}ms`), console.log(`  CPU merge: ${u.toFixed(1)}ms`));
}
var tl = /* @__PURE__ */ new G(0, 1, 0);
function nl(e, t = null) {
	let n = new Float32Array(e.length * 6), i = 0;
	for (let t = 0, r = e.length; t < r; t++) {
		let r = e[t];
		n[i++] = r[0], n[i++] = 0, n[i++] = r[2], n[i++] = r[3], n[i++] = 0, n[i++] = r[5];
	}
	let a = new r(), o = new W(n, 3, !0);
	if (a.setAttribute("position", o), t) {
		let n = new Float32Array(e.length * 2);
		for (let e = 0, r = t.length; e < r; e++) n[e * 2] = t[e], n[e * 2 + 1] = t[e];
		a.setAttribute("group", new W(n, 1));
	}
	return a;
}
var rl = class {
	constructor(e, t = !0) {
		this.meshes = Qs(e), this.bvhs = /* @__PURE__ */ new Map(), this.visibleEdges = [], this.hiddenEdges = [], this.visibleGroupIndices = [], this.hiddenGroupIndices = [], this.groupKeyToIndex = null, this.hasGroups = !1, this.iterationTime = 30, this.useWebGPU = t;
	}
	reset() {
		this.visibleEdges.length = 0, this.hiddenEdges.length = 0, this.visibleGroupIndices.length = 0, this.hiddenGroupIndices.length = 0, this.groupKeyToIndex = null, this.hasGroups = !1;
	}
	getVisibleLineGeometry() {
		return nl(this.visibleEdges, this.groupKeyToIndex ? this.visibleGroupIndices : null);
	}
	getHiddenLineGeometry() {
		return nl(this.hiddenEdges, this.groupKeyToIndex ? this.hiddenGroupIndices : null);
	}
	getGroupKeys() {
		return this.groupKeyToIndex ? Object.fromEntries(this.groupKeyToIndex) : {};
	}
	addEdges(...e) {
		let t = this.iterationTime;
		this.iterationTime = Infinity;
		let n = this.addEdgesGenerator(...e).next().value;
		return this.iterationTime = t, n;
	}
	*addEdgesGenerator(e, t = {}) {
		let { meshes: n, bvhs: r, visibleEdges: i, hiddenEdges: a, iterationTime: o } = this, s = performance.now();
		$.startStep("Building mesh BVH");
		for (let e = 0; e < n.length; e++) {
			performance.now() - s > o && (yield, s = performance.now());
			let t = n[e].geometry;
			if (!r.has(t)) {
				let e = t.boundsTree || new ds(t);
				r.set(t, e);
			}
		}
		let c = 0;
		for (let e = 0; e < n.length; e++) {
			let t = n[e].geometry;
			c += t.index ? t.index.count / 3 : t.attributes.position.count / 3;
		}
		let l = {};
		for (let t = 0; t < e.length; t++) l[t] = [];
		$.startStep("Building line BVH");
		let u = new ic(e, {
			maxLeafSize: 2,
			strategy: ui
		});
		$.startStep("BVHcast overlaps"), s = performance.now();
		let d = {
			candidates: 0,
			backFaceCulled: 0,
			yBoundsCulled: 0,
			xzBoundsCulled: 0,
			triangleEdgeCulled: 0,
			planeTrimCulled: 0,
			distThresholdCulled: 0,
			noOverlapCulled: 0,
			used: 0,
			totalEdges: e.length,
			totalTriangles: c
		}, f = this.useWebGPU, p = {};
		f && (p._edgeOffsets = [], p._edgeCounts = [], p._meshOffsets = [], p._meshCounts = [], p._meshIndex = [], p.groupCount = 0);
		for (let e = 0; e < n.length; e++) {
			performance.now() - s > o && (t.onProgress && t.onProgress(e, n.length), yield, s = performance.now());
			let i = n[e];
			f ? Kc(u, r.get(i.geometry), i, p, e) : Fc(u, r.get(i.geometry), i, l, d);
		}
		if (f) {
			let e = !1;
			for (el(p, n, u, l, d).then(() => {
				e = !0;
			}); !e;) yield;
		}
		let m = d.totalEdges * d.totalTriangles;
		if ($.setStat("Total edges", d.totalEdges.toLocaleString()), $.setStat("Total triangles", d.totalTriangles.toLocaleString()), $.setStat("Brute-force pairs (edges × triangles)", m.toLocaleString()), $.setStat("BVH candidate pairs", d.candidates.toLocaleString()), m > 0 && $.setStat("BVH reduction", (d.candidates / m * 100).toFixed(3) + "% of brute-force"), d.candidates > 0) {
			let e = d.candidates, t = (t) => (t / e * 100).toFixed(2) + "%";
			f || ($.setStat("Rejected: back-face culling", d.backFaceCulled.toLocaleString() + " (" + t(d.backFaceCulled) + ")"), $.setStat("Rejected: Y-bounds (tri below edge)", d.yBoundsCulled.toLocaleString() + " (" + t(d.yBoundsCulled) + ")"), $.setStat("Rejected: XZ-bounds (no 2D overlap)", d.xzBoundsCulled.toLocaleString() + " (" + t(d.xzBoundsCulled) + ")"), $.setStat("Rejected: edge lies on triangle", d.triangleEdgeCulled.toLocaleString() + " (" + t(d.triangleEdgeCulled) + ")"), $.setStat("Rejected: line above tri plane", d.planeTrimCulled.toLocaleString() + " (" + t(d.planeTrimCulled) + ")"), $.setStat("Rejected: trimmed edge too small", d.distThresholdCulled.toLocaleString() + " (" + t(d.distThresholdCulled) + ")"), $.setStat("Rejected: no projected overlap", d.noOverlapCulled.toLocaleString() + " (" + t(d.noOverlapCulled) + ")")), $.setStat("Producing overlaps", d.used.toLocaleString() + " (" + t(d.used) + ")");
		}
		$.startStep("Converting overlaps to lines");
		let h = this.hasGroups;
		for (let t = 0; t < e.length; t++) {
			performance.now() - s > o && (yield, s = performance.now());
			let n = e[t], r = l[t], c = i.length, u = a.length;
			if (Bs(n, r, !1, i), Bs(n, r, !0, a), h) {
				let e = n.groupIndex;
				for (let t = c; t < i.length; t++) this.visibleGroupIndices.push(e);
				for (let t = u; t < a.length; t++) this.hiddenGroupIndices.push(e);
			}
		}
	}
}, il = class {
	constructor() {
		this.iterationTime = 30, this.angleThreshold = 50, this.includeIntersectionEdges = !0, this.useWebGPU = !0;
	}
	generateAsync(e, t = {}) {
		return new Promise((n, r) => {
			let { signal: i } = t, a = this.generate(e, t);
			o();
			function o() {
				if (i && i.aborted) {
					r(/* @__PURE__ */ Error("ProjectionGenerator: Process aborted via AbortSignal."));
					return;
				}
				let e = a.next();
				e.done ? n(e.value) : requestAnimationFrame(o);
			}
		});
	}
	*generate(e, t) {
		let { iterationTime: n, angleThreshold: r, includeIntersectionEdges: i } = this, { onProgress: a = () => {}, visibilityCuller: o = null, groupFn: s = null } = t;
		if ($.reset(), $.startTotal(), e.isBufferGeometry && (e = new U(e)), o) {
			$.startStep("Visibility culling");
			let t = !1;
			for (o.cull(e).then((n) => {
				e = new c(), e.children = n, t = !0;
			}); !t;) yield;
		}
		let l = new nc();
		l.iterationTime = n, l.thresholdAngle = r, l.projectionDirection.copy(tl), $.startStep("Generating candidate edges"), a("Generating candidate edges");
		let u = [], d = s ? [] : null;
		if (yield* l.getEdgesGenerator(e, u, d), i && ($.startStep("Generating intersection edges"), a("Generating intersection edges"), yield* l.getIntersectionEdgesGenerator(e, u, d)), $.startStep("Pre-filtering edges"), a("Pre-filtering edges"), d) {
			let e = [], t = [];
			for (let n = 0; n < u.length; n++) Ls(u[n]) || (e.push(u[n]), t.push(d[n]));
			u = e, d = t;
		} else u = u.filter((e) => !Ls(e));
		yield;
		let f = new rl(e, this.useWebGPU);
		if (f.iterationTime = n, s && d) {
			let e = /* @__PURE__ */ new Map();
			for (let t = 0; t < u.length; t++) {
				let n = s(d[t]);
				e.has(n) || e.set(n, e.size), u[t].groupIndex = e.get(n);
			}
			f.groupKeyToIndex = e, f.hasGroups = !0;
		}
		return a("Building BVH & computing overlaps"), yield* f.addEdgesGenerator(u, { onProgress: a ? (e, t) => {
			a("Building BVH & computing overlaps", e / t, f);
		} : null }), $.printSummary(), f;
	}
};
new z(), new z(), new G();
var al = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "onDisposed", new Z()), X(this, "generator", new il()), X(this, "cullerPixelsPerMeter", .05), X(this, "projectionDirection", new G(0, -1, 0)), X(this, "nearPlane", -Infinity), X(this, "farPlane", Infinity), this.components.add(e.uuid, this), this.generator.includeIntersectionEdges = !1;
	}
	async get(e, t, n) {
		let i = this.components.get(Q), a = new R(), s = /* @__PURE__ */ new Map();
		for (let [t, n] of Object.entries(e)) {
			let e = i.list.get(t);
			if (!e) continue;
			let o = (await e.getItemsIdsWithGeometry()).filter((e) => n.has(e));
			if (o.length === 0) continue;
			let c = await e.getItemsGeometry(o);
			for (let n in c) {
				let i = c[n];
				for (let n of i) {
					if (!n.positions || !n.indices || !n.transform || !n.representationId) continue;
					let i = n.representationId;
					if (!s.has(i)) {
						let e = new r();
						e.setAttribute("position", new h(n.positions, 3)), n.normals && e.setAttribute("normal", new h(n.normals, 3)), e.setIndex(Array.from(n.indices)), s.set(i, e);
					}
					let o = new U(s.get(i));
					o.applyMatrix4(n.transform), o.applyMatrix4(e.object.matrixWorld), o.updateWorldMatrix(!0, !0), o.userData._edgeProjectorModelId = t, o.userData._edgeProjectorLocalId = n.localId, a.add(o);
				}
			}
		}
		let c = this.projectionDirection.clone().normalize(), l = new G(0, -1, 0), u = new o().setFromUnitVectors(c, l), d = new H().makeRotationFromQuaternion(u), f = d.clone().invert();
		for (let e of a.children) e.applyMatrix4(d), e.updateWorldMatrix(!1, !1);
		if (a.traverse((e) => {
			let t = e;
			if (t.geometry && !t.geometry.boundsTree) {
				let e = t.geometry.index ? t.geometry.index.count : t.geometry.attributes.position.count;
				t.geometry.groups.forEach((t) => {
					t.count === Infinity && (t.count = e - t.start);
				}), t.geometry.boundsTree = new ds(t.geometry, {
					maxLeafSize: 1,
					strategy: ui
				});
			}
		}), this.nearPlane !== -Infinity || this.farPlane !== Infinity) {
			let e = new _(), t = [];
			for (let n of a.children) {
				let r = n;
				r.geometry && (e.setFromObject(r), (e.max.y < this.nearPlane || e.min.y > this.farPlane) && t.push(r));
			}
			for (let e of t) a.remove(e);
		}
		let p = t.renderer.three, m = new Ms(p, { pixelsPerMeter: this.cullerPixelsPerMeter }), g = await this.generator.generateAsync(a, {
			visibilityCuller: m,
			groupFn: (e) => `${e.userData._edgeProjectorModelId ?? "unknown"}:${e.userData._edgeProjectorLocalId ?? 0}`,
			onProgress: n?.onProgress
		}), v = g.getVisibleLineGeometry(), y = g.getHiddenLineGeometry();
		v.applyMatrix4(f), y.applyMatrix4(f);
		let b = g.getGroupKeys(), x = {};
		for (let [e, t] of Object.entries(b)) {
			let n = e.lastIndexOf(":");
			x[t] = {
				modelId: e.substring(0, n),
				localId: Number(e.substring(n + 1))
			};
		}
		for (let e of s.values()) e.dispose();
		return {
			visible: v,
			hidden: y,
			groups: x
		};
	}
	dispose() {
		this.onDisposed.trigger(e.uuid), this.onDisposed.reset();
	}
};
X(al, "uuid", "f2e76c3a-8b1d-4d5e-9a3f-7c6b2d4e8f1a");
var ol = al, sl = class {
	constructor() {
		X(this, "wasm", {
			path: "",
			absolute: !1,
			logLevel: x.LOG_LEVEL_OFF
		}), X(this, "webIfc", { COORDINATE_TO_ORIGIN: !0 }), X(this, "autoSetWasm", !0), X(this, "customLocateFileHandler", null);
	}
};
X(class e extends qt {
	constructor(t) {
		super(t), X(this, "onDisposed", new Z()), X(this, "onIfcStartedLoading", new Z()), X(this, "onIfcImporterInitialized", new Z()), X(this, "onSetup", new Z()), X(this, "settings", new sl()), X(this, "webIfc", new y()), X(this, "enabled", !0), this.components.add(e.uuid, this);
	}
	dispose() {
		this.webIfc = null, this.onDisposed.trigger(e.uuid), this.onDisposed.reset();
	}
	async setup(e) {
		this.settings = {
			...this.settings,
			...e
		}, this.settings.autoSetWasm && await this.autoSetWasm(), this.onSetup.trigger();
	}
	async load(e, t, n, r) {
		let i = this.components.get(Q);
		if (!i.initialized) throw Error("You need to initialize fragments first.");
		this.settings.autoSetWasm && await this.autoSetWasm(), i.core.settings.autoCoordinate = t;
		let a = new l();
		a.wasm.path = this.settings.wasm.path, a.wasm.absolute = this.settings.wasm.absolute, a.webIfcSettings = this.settings.webIfc, this.onIfcImporterInitialized.trigger(a), r != null && r.instanceCallback && r.instanceCallback(a);
		let o = await a.process({
			...r?.processData,
			bytes: e
		});
		return await i.core.load(o, {
			modelId: n,
			userData: r?.userData
		});
	}
	async readIfcFile(e) {
		let { path: t, absolute: n, logLevel: r } = this.settings.wasm;
		return this.webIfc.SetWasmPath(t, n), await this.webIfc.Init(this.settings.customLocateFileHandler || void 0), r && this.webIfc.SetLogLevel(r), this.webIfc.OpenModel(e, this.settings.webIfc);
	}
	cleanUp() {
		try {
			this.webIfc.Dispose();
		} catch {
			console.log("Web-ifc wasn't disposed.");
		}
		this.webIfc = null, this.webIfc = new y();
	}
	async autoSetWasm() {
		let e = await fetch(`https://unpkg.com/@thatopen/components@${Ql.release}/package.json`);
		if (!e.ok) {
			console.warn("Couldn't get openbim-components package.json. Set wasm settings manually.");
			return;
		}
		let t = await e.json();
		if (!("web-ifc" in t.peerDependencies)) console.warn("Couldn't get web-ifc from peer dependencies in openbim-components. Set wasm settings manually.");
		else {
			let e = t.peerDependencies["web-ifc"];
			this.settings.wasm.path = `https://unpkg.com/web-ifc@${e}/`, this.settings.wasm.absolute = !0;
		}
	}
}, "uuid", "a659add7-1418-4771-a0d6-7d4d438e4624");
var cl = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), this.components.add(e.uuid, this);
	}
	async set(e, t) {
		let n = this.components.get(Q), r = [];
		if (t) for (let [i, a] of Object.entries(t)) {
			let t = n.list.get(i);
			t && r.push(t.setVisible([...a], e));
		}
		else for (let t of n.list.values()) r.push(t.setVisible(void 0, e));
		await Promise.all(r), await n.core.update(!0);
	}
	async isolate(e) {
		await Promise.all([this.set(!1), this.set(!0, e)]);
	}
	async toggle(e) {
		let t = [], n = this.components.get(Q);
		for (let [r, i] of Object.entries(e)) {
			let e = n.list.get(r);
			e && t.push(e.toggleVisible([...i]));
		}
		await Promise.all(t), await n.core.update(!0);
	}
	async getVisibilityMap(e, t) {
		let n = [], r = [], i = this.components.get(Q);
		if (t) for (let a of t) {
			let t = i.list.get(a);
			t && (n.push(t.modelId), r.push(t.getItemsByVisibility(e)));
		}
		else for (let t of i.list.values()) n.push(t.modelId), r.push(t.getItemsByVisibility(e));
		let a = await Promise.all(r), o = {};
		for (let [e, t] of n.entries()) o[t] = a[e];
		return o;
	}
};
X(cl, "uuid", "dd9ccf2d-8a21-4821-b7f6-2949add16a29");
var ll = cl, ul = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "onDisposed", new Z()), X(this, "list", new Be()), this.components.add(e.uuid, this);
	}
	dispose(t = !0) {
		this.list.clear(), this.onDisposed.trigger(e.uuid), t && (this.onDisposed.reset(), this.list.eventsEnabled = !1, this.list.dispose());
	}
	get() {
		let e = new _();
		for (let t of this.list) e.union(t);
		return e;
	}
	async addFromModelIdMap(e) {
		let t = this.components.get(Q), n = new _();
		for (let [r, i] of Object.entries(e)) {
			let e = t.list.get(r);
			if (!e) continue;
			let a = await e.getMergedBox([...i]);
			n.union(a);
		}
		this.list.add(n);
	}
	addFromModels(e) {
		let t = this.components.get(Q);
		for (let [n, r] of t.list) e && !e.some((e) => e.test(n)) || this.list.add(r.box);
	}
	async getCenter(e) {
		this.list.clear(), await this.addFromModelIdMap(e);
		let t = this.get();
		this.list.clear();
		let n = new G();
		return t.getCenter(n), n;
	}
	async getCameraOrientation(e, t = 1) {
		let n = this.components.get(Q);
		this.list.clear();
		for (let [e, t] of n.list) this.list.add(t.box);
		let r = this.get();
		this.list.clear();
		let i = new G();
		r.getCenter(i);
		let a = new G();
		r.getSize(a);
		let o = Math.max(a.x, a.y, a.z) * t, s = new G();
		switch (e) {
			case "front":
				s.set(i.x, i.y, i.z + o);
				break;
			case "back":
				s.set(i.x, i.y, i.z - o);
				break;
			case "left":
				s.set(i.x - o, i.y, i.z);
				break;
			case "right":
				s.set(i.x + o, i.y, i.z);
				break;
			case "top":
				s.set(i.x, i.y + o, i.z);
				break;
			case "bottom":
				s.set(i.x, i.y - o, i.z);
				break;
			default: s.set(i.x, i.y, i.z + o);
		}
		return {
			position: s,
			target: i
		};
	}
};
X(ul, "uuid", "d1444724-dba6-4cdd-a0c7-68ee1450d166");
var dl = ul, fl = class {
	constructor(e, t) {
		X(this, "name", "Query"), X(this, "customData", {}), X(this, "_components"), X(this, "_queries", []), X(this, "_aggregation", "exclusive"), X(this, "result", null), X(this, "cache", !0), X(this, "serializeQueryParameters", (e) => ({
			categories: e.categories?.map((e) => e.source),
			attributes: e.attributes ? {
				aggregation: e.attributes.aggregation,
				queries: e.attributes.queries.map(this.serializeAttributeQuery)
			} : void 0,
			relation: e.relation ? {
				name: e.relation.name,
				query: e.relation.query ? this.serializeQueryParameters(e.relation.query) : void 0
			} : void 0
		})), X(this, "deserializeQueryParameters", (e) => ({
			categories: e.categories?.map((e) => new RegExp(e)),
			attributes: e.attributes ? {
				aggregation: e.attributes.aggregation,
				queries: e.attributes.queries.map(this.deserializeAttributeQuery)
			} : void 0,
			relation: e.relation ? {
				name: e.relation.name,
				query: e.relation.query ? this.deserializeQueryParameters(e.relation.query) : void 0
			} : void 0
		})), this._components = e, this.queries = t;
	}
	set queries(e) {
		this._queries = e, this.clearCache();
	}
	get queries() {
		return this._queries;
	}
	set aggregation(e) {
		e !== this._aggregation && this.clearCache(), this._aggregation = e;
	}
	get aggregation() {
		return this._aggregation;
	}
	async test(e) {
		let { modelIds: t, force: n } = {
			force: !1,
			...e
		};
		if (this.result && !n) return this.result;
		let r = await this._components.get(ml).getItems(this.queries, {
			modelIds: t,
			aggregation: this.aggregation
		});
		return this.cache && (this.result = r), r;
	}
	clearCache() {
		this.result = null;
	}
	serializeAttributeQuery(e) {
		let t;
		return t = Array.isArray(e.value) ? e.value.map((e) => e.source) : e.value instanceof RegExp ? e.value.source : e.value, {
			name: e.name.source,
			value: t,
			type: e.type instanceof RegExp ? e.type.source : e.type,
			negate: e.negate,
			itemIds: e.itemIds
		};
	}
	toJSON() {
		return {
			guid: this._components.get(ml).list.getKey(this) ?? $t.create(),
			name: this.name,
			customData: this.customData,
			queries: this.queries.map(this.serializeQueryParameters),
			aggregation: this.aggregation,
			cache: this.cache
		};
	}
	deserializeAttributeQuery(e) {
		let t;
		return t = Array.isArray(e.value) ? e.value.map((e) => new RegExp(e)) : typeof e.value == "string" ? new RegExp(e.value) : e.value, {
			name: new RegExp(e.name),
			value: t,
			type: e.type ? new RegExp(e.type) : void 0,
			negate: e.negate,
			itemIds: e.itemIds
		};
	}
	fromJSON(e) {
		return this.name = e.name, this.customData = e.customData, this.aggregation = e.aggregation, this.cache = e.cache, this.queries = e.queries.map(this.deserializeQueryParameters), this;
	}
}, pl = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "list", new a()), t.add(e.uuid, this);
	}
	async getItems(e, t) {
		let n;
		if (t) {
			let { modelIds: e, items: r } = t;
			if (r) {
				let e = Object.keys(r);
				e.length > 0 && (n = e.map((e) => RegExp(`^${e}$`)));
			} else e && (n = e);
		}
		let r = t?.aggregation ?? "exclusive", i = this.components.get(Q), a = await Promise.all(e.map(async (e) => {
			let r = {};
			return await Promise.all(Array.from(i.list).map(async ([i, a]) => {
				if (n && !n.some((e) => e.test(i))) return;
				let o = t?.items?.[i], s = await a.getItemsByQuery(e, { localIds: o ? [...o] : void 0 });
				r[i] = new Set(s);
			})), r;
		}));
		return r === "inclusive" ? ei.join(a) : ei.intersect(a);
	}
	create(e, t) {
		let n = new fl(this.components, t);
		return this.list.set(e, n), n;
	}
	async addFromCategories(e) {
		let t = /* @__PURE__ */ new Set(), n = this.components.get(Q);
		for (let [r, i] of n.list) {
			if (e && !e.some((e) => e.test(r))) continue;
			let n = (await i.getItemsWithGeometryCategories()).filter((e) => e !== null), a = new Set(n);
			for (let e of a) this.list.has(e) || (this.create(e, [{ categories: [RegExp(`^${e}$`)] }]), t.add(e));
		}
		return [...t];
	}
	import(e) {
		let { data: t } = e, n = [];
		if (!t) return n;
		for (let e of t) {
			let t = this.create(e.guid, []);
			t.fromJSON(e), n.push(t);
		}
		return n;
	}
	export() {
		let e = [];
		for (let [t, n] of this.list.entries()) {
			let r = {
				...n.toJSON(),
				name: t
			};
			e.push(r);
		}
		return { data: e };
	}
};
X(pl, "uuid", "0da7ad77-f734-42ca-942f-a074adfd1e3a");
var ml = pl, hl = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "onDisposed", new Z()), X(this, "list", new a()), X(this, "defaultSaveFunction", (e) => "value" in e.Name ? e.Name.value : null), X(this, "onBeforeFragmentsDispose", async (e) => {
			let { key: t, value: n } = e, r = await n.getLocalIds(), i = { [t]: new Set(r) };
			this.removeItems(i);
		}), t.add(e.uuid, this), this.setupEvents(), t.get(Q).list.onBeforeDelete.add(this.onBeforeFragmentsDispose);
	}
	setupEvents() {
		this.list.onBeforeDelete.add(({ value: e }) => e.dispose());
	}
	getClassificationGroups(e) {
		let t = this.list.get(e);
		return t || (t = new a(), this.list.set(e, t)), t;
	}
	getModelItems(e, t, n) {
		let { map: r } = this.getGroupData(e, t), i = r[n];
		return i || (i = /* @__PURE__ */ new Set(), r[n] = i), i;
	}
	getGroupData(e, t) {
		let n = this.components.get(ml), r = this.getClassificationGroups(e), i = r.get(t);
		return i || (i = {
			map: {},
			get() {
				return new Promise((e) => {
					if (!i) {
						e({});
						return;
					}
					if (i.query) {
						let { name: t, config: r } = i.query, a = n.list.get(t);
						if (!a) throw Error("Classifier: the query name associated with the group doesn't exist in the ItemsFinder component");
						a.test(r).then((t) => {
							if (!i) {
								e({});
								return;
							}
							e(ei.join([t, i.map]));
						});
					} else e(i.map);
				});
			}
		}, r.set(t, i)), i;
	}
	async aggregateItems(e, t, n) {
		let r = n?.data ?? void 0, i = n?.aggregationCallback ?? this.defaultSaveFunction, a = this.components.get(Q), o = await this.components.get(ml).getItems([t], { modelIds: n?.modelIds });
		for (let [t, n] of Object.entries(o)) {
			let o = a.list.get(t);
			if (!o) continue;
			let s = (n, ...r) => {
				let i = this.getModelItems(e, n, t);
				for (let e of r) i.add(e);
			}, c = await o.getItemsData([...n], r);
			for (let e of c) i(e, s);
		}
	}
	addGroupItems(e, t, n) {
		let { map: r } = this.getGroupData(e, t);
		ei.add(r, n);
	}
	setGroupQuery(e, t, n) {
		let r = this.getGroupData(e, t);
		r.query = n;
	}
	async find(e) {
		let t = [];
		for (let [n, r] of Object.entries(e)) {
			let e = [], i = this.list.get(n);
			if (!i) continue;
			for (let t of r) {
				let n = i.get(t);
				if (!n) continue;
				let r = await n.get();
				e.push(r);
			}
			let a = ei.join(e);
			t.push(a);
		}
		return ei.intersect(t);
	}
	async aggregateItemRelations(e, t, n, r) {
		let i = r?.attribute ?? "Name", a = { relations: { [n]: {
			attributes: !0,
			relations: !1
		} } };
		await this.aggregateItems(e, t, {
			modelIds: r?.modelIds,
			data: a,
			aggregationCallback: (e, t) => {
				if (!(e != null && e[i])) return;
				let r = e[i];
				if (!("value" in r)) return;
				let a = e[n];
				if (Array.isArray(a)) for (let e of a) "value" in e._localId && t(r.value, e._localId.value);
			}
		});
	}
	async byIfcBuildingStorey(e) {
		await this.aggregateItemRelations(e?.classificationName ?? "Storeys", { categories: [/BUILDINGSTOREY/] }, "ContainsElements", { modelIds: e?.modelIds });
	}
	async byCategory(e) {
		let t = await this.components.get(ml).addFromCategories(e?.modelIds);
		for (let n of t) this.setGroupQuery(e?.classificationName ?? "Categories", n, { name: n });
	}
	dispose() {
		this.list.clear(), this.components.get(Q).list.onBeforeDelete.remove(this.onBeforeFragmentsDispose), this.onDisposed.trigger();
	}
	removeItems(e, t) {
		if (t && t.classificationName) {
			let n = this.list.get(t.classificationName);
			if (!n || t.groupName && !n.get(t.groupName)) return;
			for (let [, t] of n) ei.remove(t.map, e);
			return;
		}
		for (let [, t] of this.list.entries()) for (let [, n] of t) ei.remove(n.map, e);
	}
	async byModel(e) {
		let t = this.components.get(Q), n = e?.classificationName ?? "Models";
		for (let [r, i] of t.list) {
			if (e && e.modelIds && !e.modelIds.some((e) => e.test(r))) continue;
			let t = await i.getItemsIdsWithGeometry(), a = { [r]: new Set(t) };
			this.getGroupData(n, r), this.addGroupItems(n, r, a);
		}
	}
};
X(hl, "uuid", "e25a7f3c-46c4-4a14-9d3d-5115f24ebeb7");
var gl = hl, _l = class e {
	constructor(e, t) {
		if (X(this, "enabled", !0), X(this, "components"), X(this, "onDisposed", new Z()), X(this, "mouse"), X(this, "world"), X(this, "debugMode", !1), X(this, "_renderTarget"), X(this, "_renderTargetSize", new O()), X(this, "_debugCanvas"), X(this, "_debugContainer"), X(this, "_idMaterial"), X(this, "_depthMaterial"), X(this, "_normalMaterial"), X(this, "_originalMaterials", /* @__PURE__ */ new Map()), X(this, "_hiddenLods", []), !t.renderer) throw Error("A renderer is needed for the FastModelPicker to work!");
		this.world = t, this.mouse = new si(t.renderer.three.domElement), this.components = e, this._idMaterial = this.buildIdMaterial(), this._depthMaterial = this.buildDepthMaterial(), this._normalMaterial = this.buildNormalMaterial(), this.setupRenderTarget();
	}
	async getModelAt(e) {
		let t = await this.runIdPass(e);
		return t ? t.modelId : null;
	}
	async getItemAt(e) {
		let t = await this.runIdPass(e);
		if (!t) return null;
		let n = this.components.get(Q).list.get(t.modelId);
		if (!n) return null;
		let r = (await n.getLocalIdsFromItemIds([t.itemId]))?.[0];
		return r == null ? null : {
			modelId: t.modelId,
			localId: r,
			itemId: t.itemId
		};
	}
	async getPointAt(e) {
		if (!this.enabled || !this._renderTarget || !this.world.renderer) return null;
		let t = this.components.get(Q);
		if (!t.initialized || t.list.size === 0) return null;
		this.renderDepthPass();
		let n = e ?? this.mouse.position, r = this.readPixelAt(n);
		if (!r || r[0] === 0 && r[1] === 0 && r[2] === 0 && r[3] === 0) return null;
		let i = yl(r);
		return i >= .999999 ? null : bl(n, i, this.world.camera.three);
	}
	async getNormalAt(e) {
		if (!this.enabled || !this._renderTarget || !this.world.renderer) return null;
		let t = this.components.get(Q);
		if (!t.initialized || t.list.size === 0) return null;
		this.renderNormalPass();
		let n = e ?? this.mouse.position, r = this.readPixelAt(n);
		if (!r || r[3] === 0) return null;
		let i = new G(r[0] / 255 * 2 - 1, r[1] / 255 * 2 - 1, r[2] / 255 * 2 - 1);
		return i.lengthSq() < 1e-8 ? null : i.normalize();
	}
	async getFullPick(e) {
		let t = await this.getItemAt(e);
		if (!t) return null;
		let n = await this.getPointAt(e);
		if (!n) return null;
		let r = await this.getNormalAt(e), i = n.distanceTo(this.world.camera.three.position);
		return {
			...t,
			point: n,
			normal: r,
			distance: i
		};
	}
	setDebugMode(e) {
		this.debugMode = e, e ? this.setupDebugCanvas() : this.removeDebugCanvas();
	}
	dispose() {
		this.mouse.dispose(), this.removeDebugCanvas(), this._idMaterial.dispose(), this._depthMaterial.dispose(), this._normalMaterial.dispose(), this._renderTarget && this._renderTarget.dispose(), this._renderTarget = void 0, this._originalMaterials.clear(), this._hiddenLods.length = 0, this.onDisposed.trigger(), this.onDisposed.reset();
	}
	async runIdPass(e) {
		if (!this.enabled || !this._renderTarget || !this.world.renderer) return null;
		let t = this.components.get(Q);
		if (!t.initialized || t.list.size === 0) return null;
		let n = this.applyIdMaterial();
		if (n.size === 0) return this.restoreOriginalMaterials(), null;
		let r = e ?? this.mouse.position;
		this.renderIdPass(n, r), this.restoreOriginalMaterials(), this.debugMode && this._debugCanvas && this.updateDebugCanvas();
		let i = this.readPixelAt(this._renderTarget, r);
		if (!i) return null;
		let a = i[0];
		if (a === 0) return null;
		let o = n.get(a);
		if (!o) return null;
		let s = i[1] << 16 | i[2] << 8 | i[3];
		return s === 0 ? null : {
			modelId: o,
			itemId: s - 1
		};
	}
	applyIdMaterial() {
		let t = this.components.get(Q), n = /* @__PURE__ */ new Map(), r = 1;
		for (let [i, a] of t.list) {
			if (r > e.MAX_MODELS) break;
			let t = r;
			r += 1;
			let o = !1;
			a.object.traverse((e) => {
				if (!(e instanceof U)) return;
				let t = e.geometry;
				if (t) {
					if (!t.attributes || !t.attributes.id) {
						e.visible &&= (this._hiddenLods.push(e), !1);
						return;
					}
					this._originalMaterials.set(e, e.material), e.material = this._idMaterial, o = !0;
				}
			}), o && n.set(t, i);
		}
		return n;
	}
	renderIdPass(e, t) {
		this.renderPickPass(e, this._renderTarget, this._idMaterial, t);
	}
	renderPickPass(e, t, n, r) {
		let a = this.world.renderer.three, o = this.world.scene.three, s = this.world.camera.three, c = this.components.get(Q), l = a.clippingPlanes ?? [];
		n.clippingPlanes = l, n.clipping = l.length > 0;
		let u = a.getRenderTarget(), d = a.autoClear, f = a.getClearColor(new N()), p = a.getClearAlpha(), m = a.getScissorTest(), h = a.getScissor(new i());
		a.setRenderTarget(t), a.setClearColor(0, 0), a.autoClear = !1, a.setScissorTest(!1), a.clear(!0, !0, !1);
		let g = t.width, _ = t.height, v = Math.floor((r.x + 1) * .5 * g), y = Math.floor((r.y + 1) * .5 * (_ - 1)), b = Math.max(0, Math.min(g - 4, v - 2)), x = Math.max(0, Math.min(_ - 4, y - 2));
		a.setScissor(b, x, 4, 4), a.setScissorTest(!0);
		let S = /* @__PURE__ */ new Map();
		for (let [e, t] of c.list) S.set(e, t.object);
		let C = new Set(S.values()), w = /* @__PURE__ */ new Map(), T = (e) => {
			let t = e;
			for (; t;) {
				if (C.has(t)) return !0;
				t = t.parent;
			}
			return !1;
		};
		o.traverse((e) => {
			e !== o && e.isMesh && (T(e) || (w.set(e, e.visible), e.visible = !1));
		});
		let E = /* @__PURE__ */ new Map();
		for (let e of S.values()) E.set(e, e.visible), e.visible = !1;
		for (let [t, r] of e) {
			let e = S.get(r);
			e && (e.visible = !0, n.uniforms.modelByte.value = t, a.render(o, s), e.visible = !1);
		}
		for (let [e, t] of E) e.visible = t;
		for (let [e, t] of w) e.visible = t;
		a.setScissorTest(m), a.setScissor(h), a.setRenderTarget(u), a.autoClear = d, a.setClearColor(f, p);
	}
	renderWithTileMaterial(e) {
		let t = this.world.renderer.three, n = this.world.scene.three, r = this.world.camera.three, i = this.components.get(Q), a = t.clippingPlanes ?? [];
		e.clippingPlanes = a, e.clipping = a.length > 0;
		let o = t.getRenderTarget(), s = t.autoClear, c = t.getClearColor(new N()), l = t.getClearAlpha(), u = /* @__PURE__ */ new Map(), d = [];
		for (let [, t] of i.list) t.object.traverse((t) => {
			if (!(t instanceof U)) return;
			let n = t.geometry;
			if (n) {
				if (!n.attributes || !n.attributes.id) {
					t.visible &&= (d.push(t), !1);
					return;
				}
				t.visible && (u.set(t, t.material), t.material = e);
			}
		});
		let f = /* @__PURE__ */ new Set();
		for (let [, e] of i.list) f.add(e.object);
		let p = (e) => {
			let t = e;
			for (; t;) {
				if (f.has(t)) return !0;
				t = t.parent;
			}
			return !1;
		}, m = /* @__PURE__ */ new Map();
		n.traverse((e) => {
			e !== n && e.isMesh && (p(e) || (m.set(e, e.visible), e.visible = !1));
		}), t.setRenderTarget(this._renderTarget), t.setClearColor(0, 0), t.autoClear = !1, t.clear(!0, !0, !1), t.render(n, r);
		for (let [e, t] of u) e.material = t;
		for (let e of d) e.visible = !0;
		for (let [e, t] of m) e.visible = t;
		t.setRenderTarget(o), t.autoClear = s, t.setClearColor(c, l);
	}
	renderDepthPass() {
		this.renderWithTileMaterial(this._depthMaterial);
	}
	renderNormalPass() {
		this.renderWithTileMaterial(this._normalMaterial);
	}
	restoreOriginalMaterials() {
		for (let [e, t] of this._originalMaterials) e.material = t;
		this._originalMaterials.clear();
		for (let e of this._hiddenLods) e.visible = !0;
		this._hiddenLods.length = 0;
	}
	readPixelAt(e, t) {
		let n, r;
		e instanceof P ? (n = e, r = t) : (n = this._renderTarget, r = e);
		let i = this.world.renderer.three, a = this._renderTargetSize, o = Math.floor((r.x + 1) * .5 * a.x), s = Math.floor((r.y + 1) * .5 * (a.y - 1)), c = Math.max(0, Math.min(a.x - 1, o)), l = Math.max(0, Math.min(a.y - 1, s)), u = /* @__PURE__ */ new Uint8Array(4);
		return i.readRenderTargetPixels(n, c, l, 1, 1, u), u;
	}
	buildIdMaterial() {
		return new w({
			uniforms: { modelByte: { value: 1 } },
			vertexShader: "\n        attribute vec4 id;\n        varying vec4 vId;\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n        #endif\n        void main() {\n          vId = id;\n          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n          #if NUM_CLIPPING_PLANES > 0\n            vClipPosition = -mvPosition.xyz;\n          #endif\n          gl_Position = projectionMatrix * mvPosition;\n        }\n      ",
			fragmentShader: "\n        precision highp float;\n        uniform float modelByte;\n        varying vec4 vId;\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n          uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n        #endif\n        void main() {\n          #if NUM_CLIPPING_PLANES > 0\n            for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {\n              vec4 plane = clippingPlanes[i];\n              if (dot(vClipPosition, plane.xyz) > plane.w) discard;\n            }\n          #endif\n          gl_FragColor = vec4(modelByte / 255.0, vId.y / 255.0, vId.z / 255.0, vId.w / 255.0);\n        }\n      ",
			side: 2
		});
	}
	buildDepthMaterial() {
		return new w({
			uniforms: {},
			vertexShader: "\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n        #endif\n        void main() {\n          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n          #if NUM_CLIPPING_PLANES > 0\n            vClipPosition = -mvPosition.xyz;\n          #endif\n          gl_Position = projectionMatrix * mvPosition;\n        }\n      ",
			fragmentShader: "\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n          uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n        #endif\n        void main() {\n          #if NUM_CLIPPING_PLANES > 0\n            for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {\n              vec4 plane = clippingPlanes[i];\n              if (dot(vClipPosition, plane.xyz) > plane.w) discard;\n            }\n          #endif\n          float v = gl_FragCoord.z;\n          vec4 r = vec4(\n            fract(v * 16777216.0),\n            fract(v * 65536.0),\n            fract(v * 256.0),\n            v\n          );\n          r.yzw -= r.xyz * (1.0 / 256.0);\n          gl_FragColor = r * (256.0 / 255.0);\n        }\n      ",
			side: 2
		});
	}
	buildNormalMaterial() {
		return new w({
			uniforms: {},
			vertexShader: "\n        varying vec3 vWorldNormal;\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n        #endif\n        void main() {\n          vWorldNormal = normalize(\n            (modelMatrix * vec4(normal, 0.0)).xyz\n          );\n          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n          #if NUM_CLIPPING_PLANES > 0\n            vClipPosition = -mvPosition.xyz;\n          #endif\n          gl_Position = projectionMatrix * mvPosition;\n        }\n      ",
			fragmentShader: "\n        varying vec3 vWorldNormal;\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n          uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n        #endif\n        void main() {\n          #if NUM_CLIPPING_PLANES > 0\n            for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {\n              vec4 plane = clippingPlanes[i];\n              if (dot(vClipPosition, plane.xyz) > plane.w) discard;\n            }\n          #endif\n          vec3 n = normalize(vWorldNormal);\n          if (!gl_FrontFacing) n = -n;\n          gl_FragColor = vec4(n * 0.5 + 0.5, 1.0);\n        }\n      ",
			side: 2
		});
	}
	setupRenderTarget() {
		let e = this.world.renderer.three.getSize(new O());
		this._renderTargetSize.copy(e);
		let t = {
			format: Ve,
			type: v,
			minFilter: ke,
			magFilter: ke,
			depthBuffer: !0
		};
		this._renderTarget = new P(e.x, e.y, t), this.debugMode && this.setupDebugCanvas(), this.world.renderer.onResize.add((e) => {
			this._renderTargetSize.copy(e), this._renderTarget.setSize(e.x, e.y), this._debugCanvas && (this._debugCanvas.width = e.x, this._debugCanvas.height = e.y);
		});
	}
	setupDebugCanvas() {
		if (this._debugCanvas) return;
		let e = this.world.renderer.three.getSize(new O());
		this._debugContainer = document.createElement("div"), this._debugContainer.style.position = "fixed", this._debugContainer.style.top = "10px", this._debugContainer.style.right = "10px", this._debugContainer.style.width = "300px", this._debugContainer.style.height = "300px", this._debugContainer.style.border = "2px solid #fff", this._debugContainer.style.backgroundColor = "#000", this._debugContainer.style.zIndex = "10000", this._debugContainer.style.pointerEvents = "none", this._debugCanvas = document.createElement("canvas"), this._debugCanvas.width = e.x, this._debugCanvas.height = e.y, this._debugCanvas.style.width = "100%", this._debugCanvas.style.height = "100%", this._debugCanvas.style.imageRendering = "pixelated", this._debugContainer.appendChild(this._debugCanvas), document.body.appendChild(this._debugContainer);
	}
	removeDebugCanvas() {
		this._debugContainer && (this._debugContainer.remove(), this._debugContainer = void 0, this._debugCanvas = void 0);
	}
	updateDebugCanvas() {
		if (!this._debugCanvas || !this._renderTarget || !this.world.renderer) return;
		let e = this.world.renderer.three, t = this._renderTargetSize, n = new Uint8Array(t.x * t.y * 4);
		e.readRenderTargetPixels(this._renderTarget, 0, 0, t.x, t.y, n);
		let r = this._debugCanvas.getContext("2d");
		if (!r) return;
		let i = r.createImageData(t.x, t.y), a = t.x * 4;
		for (let e = 0; e < t.y; e++) {
			let r = e, o = t.y - 1 - e, s = r * a, c = o * a;
			i.data.set(n.subarray(s, s + a), c);
		}
		r.putImageData(i, 0, 0);
	}
};
X(_l, "MAX_MODELS", 254);
var vl = _l;
function yl(e) {
	let t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = e[3] / 255;
	return 255 / 256 * (t / (256 * 256 * 256) + n / (256 * 256) + r / 256 + i);
}
function bl(e, t, n) {
	let r = new G(e.x, e.y, t * 2 - 1);
	return r.unproject(n), r;
}
var xl = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "list", /* @__PURE__ */ new Map()), X(this, "onDisposed", new Z()), t.add(e.uuid, this);
	}
	get(e) {
		if (this.list.has(e.uuid)) return this.list.get(e.uuid);
		let t = new vl(this.components, e);
		return this.list.set(e.uuid, t), e.onDisposed.add(() => {
			this.delete(e);
		}), t;
	}
	delete(e) {
		let t = this.list.get(e.uuid);
		t && t.dispose(), this.list.delete(e.uuid);
	}
	dispose() {
		for (let [e, t] of this.list) t.dispose();
		this.list.clear(), this.onDisposed.trigger();
	}
};
X(xl, "uuid", "4a82430c-7ff2-49ea-9401-60807502dad6");
var Sl = xl, Cl = 1e3, wl = class e {
	constructor(e) {
		X(this, "onDisposed", new Z()), X(this, "maxDistance", 1), X(this, "maxCacheSize", 1e3), X(this, "components"), X(this, "cache", /* @__PURE__ */ new Map()), this.components = e;
	}
	dispose() {
		this.cache.clear(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	async resolve(t, n, r, i) {
		let a = e.keyOf(n, r), o = this.cache.get(a);
		if (o) this.cache.delete(a), this.cache.set(a, o);
		else {
			if (o = await this.fetchItemSnapData(n, r), !o) return null;
			this.storeWithLRU(a, o);
		}
		let s = this.snap(t, o, 2), c = new Set(i), l = [
			0,
			1,
			2
		], u = null;
		for (let e of l) {
			if (!c.has(e)) continue;
			let n = this.snap(t, o, e);
			if (n) {
				u = n.result;
				break;
			}
		}
		if (!u) return s ? s.result : null;
		if (s && u.snappingClass !== 2) {
			let e = s.result;
			!u.normal && e.normal && (u.normal = e.normal), !u.facePoints && e.facePoints && (u.facePoints = e.facePoints), !u.faceIndices && e.faceIndices && (u.faceIndices = e.faceIndices);
		}
		return u;
	}
	async prefetch(t, n) {
		let r = e.keyOf(t, n);
		if (this.cache.has(r)) return;
		let i = await this.fetchItemSnapData(t, n);
		i && this.storeWithLRU(r, i);
	}
	invalidate(t, n) {
		let r = e.keyOf(t, n);
		this.cache.delete(r);
	}
	clear() {
		this.cache.clear();
	}
	static keyOf(e, t) {
		return `${e}:${t}`;
	}
	storeWithLRU(e, t) {
		for (this.cache.set(e, t); this.cache.size > this.maxCacheSize;) {
			let e = this.cache.keys().next().value;
			if (e === void 0) break;
			this.cache.delete(e);
		}
	}
	async fetchItemSnapData(e, t) {
		let n = this.components.get(Q).list.get(e);
		if (!n) return null;
		let r = await n._getItemSnapData(t);
		if (!r) return null;
		let i = n.object.matrixWorld, a = [];
		for (let e of Object.keys(r.samples ?? {})) {
			let t = r.samples[Number(e)], n = r.representations[t.representation];
			if (!n || n.representationClass !== 1) continue;
			let o = n.geometry;
			if (!o) continue;
			let s = r.localTransforms[t.localTransform], c = r.globalTransforms[t.item], l = Ml(i, c, s);
			this.collectPolygonsFromShell(o, l, a);
		}
		return a.length === 0 ? null : {
			faces: a,
			edges: Fl(a),
			vertices: Il(a)
		};
	}
	collectPolygonsFromShell(e, t, n) {
		let r = e.points, i = e.profiles ?? /* @__PURE__ */ new Map(), a = e.bigProfiles ?? /* @__PURE__ */ new Map(), o = new G(), s = (e) => {
			if (e.length < 3) return;
			let i = new Float32Array(e.length * 3);
			for (let n = 0; n < e.length; n++) {
				let a = r[e[n]];
				o.set(a[0], a[1], a[2]).applyMatrix4(t), i[n * 3] = o.x, i[n * 3 + 1] = o.y, i[n * 3 + 2] = o.z;
			}
			let a = Nl(i);
			if (!a) return;
			let s = a.x * i[0] + a.y * i[1] + a.z * i[2];
			n.push({
				points: i,
				normal: a,
				d: s
			});
		};
		for (let e of i.values()) s(e);
		for (let e of a.values()) s(e);
	}
	snap(e, t, n) {
		return n === 0 ? this.snapToPoint(e, t) : n === 1 ? this.snapToLine(e, t) : n === 2 ? this.snapToFace(e, t) : null;
	}
	snapToPoint(e, t) {
		let n = t.vertices;
		if (n.length === 0) return null;
		let r = this.maxDistance * this.maxDistance, i = -1, a = Infinity;
		for (let t = 0; t < n.length; t += 3) {
			let o = n[t] - e.x, s = n[t + 1] - e.y, c = n[t + 2] - e.z, l = o * o + s * s + c * c;
			l <= r && l < a && (a = l, i = t);
		}
		return i < 0 ? null : { result: {
			point: new G(n[i], n[i + 1], n[i + 2]),
			snappingClass: 0
		} };
	}
	snapToLine(e, t) {
		let n = t.edges;
		if (n.length === 0) return null;
		let r = this.maxDistance * this.maxDistance, i = new G(), a = new G(), o = Infinity, s = -1;
		for (let t = 0; t < n.length; t += 6) {
			let c = zl(e, n[t], n[t + 1], n[t + 2], n[t + 3], n[t + 4], n[t + 5], a);
			c <= r && c < o && (o = c, s = t, i.copy(a));
		}
		return s < 0 ? null : { result: {
			point: i.clone(),
			snappingClass: 1,
			snappedEdgeP1: new G(n[s], n[s + 1], n[s + 2]),
			snappedEdgeP2: new G(n[s + 3], n[s + 4], n[s + 5])
		} };
	}
	snapToFace(e, t) {
		let n = t.faces;
		if (n.length === 0) return null;
		let r = null, i = Infinity;
		for (let t of n) {
			let n = t.normal.x * e.x + t.normal.y * e.y + t.normal.z * e.z - t.d, a = Math.abs(n);
			a <= this.maxDistance && a < i && (i = a, r = t);
		}
		return r ? { result: {
			point: e.clone().sub(r.normal.clone().multiplyScalar(r.normal.x * e.x + r.normal.y * e.y + r.normal.z * e.z - r.d)),
			normal: r.normal.clone(),
			snappingClass: 2,
			facePoints: r.points,
			faceIndices: Pl(r.points.length / 3)
		} } : null;
	}
}, Tl = new H(), El = new G(), Dl = new G(), Ol = new G();
function kl(e, t) {
	if (!e) return t.identity();
	let n = e.position[0], r = e.position[1], i = e.position[2];
	return El.set(e.xDirection[0], e.xDirection[1], e.xDirection[2]), Dl.set(e.yDirection[0], e.yDirection[1], e.yDirection[2]), Ol.crossVectors(El, Dl), t.set(El.x, Dl.x, Ol.x, n, El.y, Dl.y, Ol.y, r, El.z, Dl.z, Ol.z, i, 0, 0, 0, 1), t;
}
var Al = new H(), jl = new H();
function Ml(e, t, n) {
	return kl(t, Al), kl(n, jl), Tl.copy(e).multiply(Al).multiply(jl).clone();
}
function Nl(e) {
	let t = new G(), n = e.length / 3;
	for (let r = 0; r < n; r++) {
		let i = (r + 1) % n, a = e[r * 3], o = e[r * 3 + 1], s = e[r * 3 + 2], c = e[i * 3], l = e[i * 3 + 1], u = e[i * 3 + 2];
		t.x += (o - l) * (s + u), t.y += (s - u) * (a + c), t.z += (a - c) * (o + l);
	}
	let r = t.length();
	return r < 1e-10 ? null : t.divideScalar(r);
}
function Pl(e) {
	if (e < 3) return /* @__PURE__ */ new Uint32Array();
	let t = e - 2, n = new Uint32Array(t * 3);
	for (let e = 0; e < t; e++) n[e * 3] = 0, n[e * 3 + 1] = e + 1, n[e * 3 + 2] = e + 2;
	return n;
}
function Fl(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.points, i = e.length / 3;
		for (let r = 0; r < i; r++) {
			let a = (r + 1) % i, o = e[r * 3], s = e[r * 3 + 1], c = e[r * 3 + 2], l = e[a * 3], u = e[a * 3 + 1], d = e[a * 3 + 2], f = Rl(o, s, c, l, u, d);
			t.has(f) || (t.add(f), n.push(o, s, c, l, u, d));
		}
	}
	return new Float32Array(n);
}
function Il(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.points, i = e.length / 3;
		for (let r = 0; r < i; r++) {
			let i = e[r * 3], a = e[r * 3 + 1], o = e[r * 3 + 2], s = Ll(i, a, o);
			t.has(s) || (t.add(s), n.push(i, a, o));
		}
	}
	return new Float32Array(n);
}
function Ll(e, t, n) {
	return `${Math.round(e * Cl)},${Math.round(t * Cl)},${Math.round(n * Cl)}`;
}
function Rl(e, t, n, r, i, a) {
	let o = Ll(e, t, n), s = Ll(r, i, a);
	return o < s ? `${o}|${s}` : `${s}|${o}`;
}
function zl(e, t, n, r, i, a, o, s) {
	let c = i - t, l = a - n, u = o - r, d = c * c + l * l + u * u, f = 0;
	d > 0 && (f = ((e.x - t) * c + (e.y - n) * l + (e.z - r) * u) / d, f < 0 ? f = 0 : f > 1 && (f = 1));
	let p = t + f * c, m = n + f * l, h = r + f * u;
	s.set(p, m, h);
	let g = e.x - p, _ = e.y - m, v = e.z - h;
	return g * g + _ * _ + v * v;
}
var Bl = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "onDisposed", new Z()), X(this, "_resolver"), t.add(e.uuid, this), this._resolver = new wl(t);
	}
	get() {
		return this._resolver;
	}
	dispose() {
		this._resolver.dispose(), this.onDisposed.trigger();
	}
};
X(Bl, "uuid", "be9b8e6c-7f5b-4a36-8e7e-3a1f5e2a6c9d");
var Vl = Bl, Hl = class {
	constructor(e, t) {
		X(this, "enabled", !0), X(this, "components"), X(this, "onDisposed", new Z()), X(this, "mouse"), X(this, "three", new u()), X(this, "world");
		let n = t.renderer;
		if (!n) throw Error("A renderer is needed for the raycaster to work!");
		this.world = t, this.mouse = new si(n.three.domElement), this.components = e;
	}
	dispose() {
		this.mouse.dispose(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	castRayToObjects(e = Array.from(this.world.meshes), t = this.mouse.position) {
		if (!this.world) throw Error("A world is needed to cast rays!");
		let n = this.world.camera.three;
		return this.three.setFromCamera(t, n), this.intersect(e);
	}
	async castRay(e) {
		let t = e?.snappingClasses, n = e?.items ?? Array.from(this.world.meshes), r = e?.position ?? this.mouse.position;
		if (!this.world) throw Error("A world is needed to cast rays!");
		let i = this.world.camera.three, a = this.components.get(Q), o = null;
		if (a.initialized) {
			let e = await this.components.get(Sl).get(this.world).getFullPick(r);
			if (e) {
				let n = a.list.get(e.modelId);
				if (o = {
					localId: e.localId,
					point: e.point,
					normal: e.normal,
					distance: e.distance,
					fragments: n,
					object: n?.object,
					ray: void 0,
					frustum: void 0
				}, t && t.length > 0) {
					let n = await this.components.get(Vl).get().resolve(e.point, e.modelId, e.itemId, t);
					n && (o.point = n.point, n.normal && (o.normal = n.normal), o.snappingClass = n.snappingClass, n.facePoints && (o.facePoints = n.facePoints), n.faceIndices && (o.faceIndices = n.faceIndices), n.snappedEdgeP1 && (o.snappedEdgeP1 = n.snappedEdgeP1), n.snappedEdgeP2 && (o.snappedEdgeP2 = n.snappedEdgeP2), o.distance = n.point.distanceTo(i.position));
				}
			}
			if (n.length === 0) return o;
		}
		this.three.setFromCamera(r, i);
		let s = this.intersect(n);
		return o ? s && s.distance < o.distance ? s : o : s;
	}
	castRayFromVector(e, t, n = Array.from(this.world.meshes)) {
		return this.three.set(e, t), this.intersect(n);
	}
	intersect(e = Array.from(this.world.meshes)) {
		let t = this.three.intersectObjects(e), n = this.filterClippingPlanes(t);
		return n.length > 0 ? n[0] : null;
	}
	filterClippingPlanes(e) {
		if (!this.world.renderer) throw Error("Renderer not found!");
		let t = this.world.renderer.three;
		if (!t.clippingPlanes) return e;
		let n = t.clippingPlanes;
		return e.length <= 0 || !n || n?.length <= 0 ? e : e.filter((e) => n.every((t) => t.distanceToPoint(e.point) > 0));
	}
}, Ul = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "list", /* @__PURE__ */ new Map()), X(this, "onDisposed", new Z()), t.add(e.uuid, this);
	}
	get(e) {
		if (this.list.has(e.uuid)) return this.list.get(e.uuid);
		let t = new Hl(this.components, e);
		return this.list.set(e.uuid, t), e.onDisposed.add(() => {
			this.delete(e);
		}), t;
	}
	delete(e) {
		let t = this.list.get(e.uuid);
		t && t.dispose(), this.list.delete(e.uuid);
	}
	dispose() {
		for (let [e, t] of this.list) t.dispose();
		this.list.clear(), this.onDisposed.trigger();
	}
};
X(Ul, "uuid", "d5d8bdf0-db25-4952-b951-b643af207ace");
var Wl = Ul, Gl = class extends Kt {
	constructor() {
		super(...arguments), X(this, "onCameraChanged", new Z()), X(this, "meshes", /* @__PURE__ */ new Set()), X(this, "onAfterUpdate", new Z()), X(this, "onBeforeUpdate", new Z()), X(this, "onDisposed", new Z()), X(this, "isDisposing", !1), X(this, "enabled", !0), X(this, "_dynamicAnchor", !1), X(this, "uuid", $t.create()), X(this, "name"), X(this, "_scene"), X(this, "_camera"), X(this, "_renderer", null), X(this, "onPointerDown", async (e) => {
			if (!this.camera.hasCameraControls()) throw Error("World: can't set dynamic anchor if the camera doesn't have controls.");
			let t = await this.components.get(Wl).get(this).castRay();
			t && t.point && e.button === 0 && this.camera.controls.setOrbitPoint(t.point.x, t.point.y, t.point.z);
		}), X(this, "_defaultCamera");
	}
	set dynamicAnchor(e) {
		let t = this.renderer?.three.domElement.parentElement;
		if (!t) throw Error("World: the renderer must have a parentElement to set dynamic anchoring.");
		e ? (this.camera.controls && (this.camera.controls.minDistance = .01), t.addEventListener("pointerdown", this.onPointerDown)) : t.removeEventListener("pointerdown", this.onPointerDown);
	}
	get dynamicAnchor() {
		return this._dynamicAnchor;
	}
	get defaultCamera() {
		if (!this._defaultCamera) throw Error("World: there is no default camera defined.");
		return this._defaultCamera;
	}
	set defaultCamera(e) {
		this._defaultCamera = e;
	}
	get scene() {
		if (!this._scene) throw Error("No scene initialized!");
		return this._scene;
	}
	set scene(e) {
		this._scene = e, e.worlds.set(this.uuid, this), e.currentWorld = this, e.onWorldChanged.trigger({
			world: this,
			action: "added"
		});
	}
	get camera() {
		if (!this._camera) throw Error("No camera initialized!");
		return this._camera;
	}
	set camera(e) {
		this._camera || (this.defaultCamera = e), this._camera = e, e.currentWorld = this, this.onCameraChanged.trigger(e);
	}
	get renderer() {
		return this._renderer;
	}
	set renderer(e) {
		this._renderer = e, e && (e.worlds.set(this.uuid, this), e.currentWorld = this, e.onWorldChanged.trigger({
			world: this,
			action: "added"
		}));
	}
	useDefaultCamera() {
		this.camera = this.defaultCamera;
	}
	update(e) {
		this.enabled && (!this._scene || !this._camera || (this.scene.currentWorld = this, this.camera.currentWorld = this, this.renderer && (this.renderer.currentWorld = this), this.onBeforeUpdate.trigger(), this.scene.isUpdateable() && this.scene.update(e), this.camera.isUpdateable() && this.camera.update(e), this.renderer && this.renderer.update(e), this.onAfterUpdate.trigger()));
	}
	dispose(e = !0) {
		if (this.enabled = !1, this.isDisposing = !0, this.scene.onWorldChanged.trigger({
			world: this,
			action: "removed"
		}), this.camera.onWorldChanged.trigger({
			world: this,
			action: "removed"
		}), this.renderer && this.renderer.onWorldChanged.trigger({
			world: this,
			action: "removed"
		}), e) {
			let e = this.components.get(Zt);
			this.scene.dispose(), this.camera.isDisposeable() && this.camera.dispose(), this.renderer && this.renderer.dispose();
			for (let t of this.meshes) e.destroy(t);
			this.meshes.clear();
		}
		this._scene = null, this._camera = null, this._renderer = null, this.components.get(Jl).list.delete(this.uuid), this.onDisposed.trigger(), this.onDisposed.reset();
	}
}, Kl = class e extends Yt {
	constructor(e) {
		super(e), X(this, "onBeforeUpdate", new Z()), X(this, "onAfterUpdate", new Z()), X(this, "onAspectUpdated", new Z()), X(this, "onDisposed", new Z()), X(this, "three"), X(this, "_resizeObserver", null), X(this, "_allControls", /* @__PURE__ */ new Map()), X(this, "updateAspect", () => {
			var e;
			if (!(!this.currentWorld || !this.currentWorld.renderer)) {
				if (this.three instanceof ge) {
					this.onAspectUpdated.trigger();
					return;
				}
				if ((e = this.currentWorld.renderer) != null && e.isResizeable()) {
					let e = this.currentWorld.renderer.getSize();
					this.three.aspect = e.width / e.height, this.three.updateProjectionMatrix(), this.onAspectUpdated.trigger();
				}
			}
		}), this.three = this.setupCamera(), this.worlds.onItemSet.add(({ value: e }) => {
			let t = this.newCameraControls();
			this.setupEvents(!0), this._allControls.set(e.uuid, t);
		}), this.worlds.onBeforeDelete.add(({ value: e }) => {
			var t;
			let n = this._allControls.get(e.uuid);
			n && (n.dispose(), this._allControls.delete(e.uuid)), (t = this._resizeObserver) == null || t.disconnect();
		});
	}
	get controls() {
		if (!this.currentWorld) throw Error("This camera needs a world to work!");
		let e = this._allControls.get(this.currentWorld.uuid);
		if (!e) throw Error("Controls not found!");
		return e;
	}
	get enabled() {
		return this.currentWorld !== null && this.controls.enabled;
	}
	set enabled(e) {
		this.currentWorld !== null && (this.controls.enabled = e);
	}
	set currentWorld(e) {
		super.currentWorld = e, e && (this.worlds.get(e.uuid) || this.worlds.set(e.uuid, e));
	}
	get currentWorld() {
		return this._currentWorld;
	}
	dispose() {
		this.setupEvents(!1), this.onAspectUpdated.reset(), this.onBeforeUpdate.reset(), this.onAfterUpdate.reset(), this.three.removeFromParent(), this.onDisposed.trigger(), this.onDisposed.reset();
		for (let [e, t] of this._allControls) t.dispose();
		this.worlds.clear();
	}
	async fitToItems(e) {
		let t = await this.getItemsBounding(e);
		await this.controls.fitToSphere(t, !0);
	}
	async setOrbitToItems(e) {
		let t = await this.getItemsBounding(e);
		this.controls.setOrbitPoint(t.center.x, t.center.y, t.center.z);
	}
	update(e) {
		this.enabled && (this.onBeforeUpdate.trigger(this), this.controls.update(e), this.onAfterUpdate.trigger(this));
	}
	async getItemsBounding(e) {
		let t = this.components.get(Q), n = this.components.get(dl);
		n.list.clear();
		let r = new b();
		if (e) await n.addFromModelIdMap(e);
		else for (let [, e] of t.list) n.list.add(e.box);
		return n.get().getBoundingSphere(r), n.list.clear(), r;
	}
	setupCamera() {
		let e = new me(60, window.innerWidth / window.innerHeight, 1, 1e3);
		return e.position.set(50, 50, 50), e.lookAt(new G(0, 0, 0)), e;
	}
	newCameraControls() {
		if (!this.currentWorld) throw Error("This camera needs a world to work!");
		if (!this.currentWorld.renderer) throw Error("This camera needs a renderer to work!");
		Ut.install({ THREE: e.getSubsetOfThree() });
		let { domElement: t } = this.currentWorld.renderer.three, n = new Ut(this.three, t);
		return n.smoothTime = .2, n.dollyToCursor = !0, n.infinityDolly = !0, n.minDistance = 6, n;
	}
	setupEvents(e) {
		if (this._resizeObserver &&= (this._resizeObserver.disconnect(), null), e) {
			if (!this.currentWorld) throw Error("This camera needs a world to work!");
			if (!this.currentWorld.renderer) throw Error("This camera needs a renderer to work!");
			let { domElement: e } = this.currentWorld.renderer.three;
			this._resizeObserver = new ResizeObserver(this.updateAspect), this._resizeObserver.observe(e);
		}
	}
	static getSubsetOfThree() {
		return {
			MOUSE: De,
			Vector2: O,
			Vector3: G,
			Vector4: i,
			Quaternion: o,
			Matrix4: H,
			Spherical: T,
			Box3: _,
			Sphere: b,
			Raycaster: u,
			MathUtils: Pe
		};
	}
}, ql = class e extends qt {
	constructor(t) {
		super(t), X(this, "onAfterUpdate", new Z()), X(this, "onBeforeUpdate", new Z()), X(this, "onDisposed", new Z()), X(this, "list", new a()), X(this, "enabled", !0), t.add(e.uuid, this);
	}
	create() {
		let e = new Gl(this.components), t = e.uuid;
		if (this.list.has(t)) throw Error("There is already a world with this name!");
		return this.list.set(t, e), e;
	}
	delete(e) {
		if (!this.list.has(e.uuid)) throw Error("The provided world is not found in the list!");
		this.list.delete(e.uuid), e.dispose();
	}
	dispose() {
		this.enabled = !1;
		for (let [e, t] of this.list) t.dispose();
		this.list.clear(), this.onDisposed.trigger();
	}
	update(e) {
		if (this.enabled) for (let [t, n] of this.list) n.update(e);
	}
};
X(ql, "uuid", "fdb61dc4-2ec1-4966-b83d-54ea795fad4a");
var Jl = ql, Yl = class extends ii {
	constructor() {
		super(...arguments), X(this, "_config", {
			visible: {
				value: !0,
				type: "Boolean"
			},
			color: {
				value: new N(),
				type: "Color"
			},
			primarySize: {
				type: "Number",
				interpolable: !0,
				value: 1,
				min: 0,
				max: 1e3
			},
			secondarySize: {
				type: "Number",
				interpolable: !0,
				value: 10,
				min: 0,
				max: 1e3
			},
			distance: {
				type: "Number",
				interpolable: !0,
				value: 500,
				min: 0,
				max: 500
			}
		});
	}
	get visible() {
		return this._config.visible.value;
	}
	set visible(e) {
		this._config.visible.value = e, this._component.visible = e;
	}
	get color() {
		return this._config.color.value;
	}
	set color(e) {
		this._config.color.value = e, this._component.material.uniforms.uColor.value = e, this._component.material.uniformsNeedUpdate = !0;
	}
	get primarySize() {
		return this._config.primarySize.value;
	}
	set primarySize(e) {
		this._config.primarySize.value = e, this._component.material.uniforms.uSize1.value = e, this._component.material.uniformsNeedUpdate = !0;
	}
	get secondarySize() {
		return this._config.secondarySize.value;
	}
	set secondarySize(e) {
		this._config.secondarySize.value = e, this._component.material.uniforms.uSize2.value = e, this._component.material.uniformsNeedUpdate = !0;
	}
	get distance() {
		return this._config.distance.value;
	}
	set distance(e) {
		this._config.distance.value = e, this._component.material.uniforms.uDistance.value = e, this._component.material.uniformsNeedUpdate = !0;
	}
}, Xl = class {
	constructor(e, t) {
		X(this, "onDisposed", new Z()), X(this, "onSetup", new Z()), X(this, "isSetup", !1), X(this, "world"), X(this, "components"), X(this, "config"), X(this, "_defaultConfig", {
			visible: !0,
			color: new N(12303291),
			primarySize: 1,
			secondarySize: 10,
			distance: 500
		}), X(this, "three"), X(this, "_fade", 3), X(this, "updateZoom", () => {
			this.world.camera instanceof Kl && (this.material.uniforms.uZoom.value = this.world.camera.three.zoom);
		}), this.world = t;
		let { color: n, primarySize: r, secondarySize: i, distance: a } = this._defaultConfig;
		this.components = e, this.config = new Yl(this, this.components, "Grid");
		let o = new ze(2, 2, 1, 1), s = new w({
			side: 2,
			uniforms: {
				uSize1: { value: r },
				uSize2: { value: i },
				uColor: { value: n },
				uDistance: { value: a },
				uFade: { value: this._fade },
				uZoom: { value: 1 }
			},
			transparent: !0,
			vertexShader: "\n            \n            varying vec3 worldPosition;\n            \n            uniform float uDistance;\n            \n            void main() {\n            \n                    vec3 pos = position.xzy * uDistance;\n                    pos.xz += cameraPosition.xz;\n                    \n                    worldPosition = pos;\n                    \n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n            \n            }\n            ",
			fragmentShader: "\n            \n            varying vec3 worldPosition;\n            \n            uniform float uZoom;\n            uniform float uFade;\n            uniform float uSize1;\n            uniform float uSize2;\n            uniform vec3 uColor;\n            uniform float uDistance;\n                \n                \n                \n                float getGrid(float size) {\n                \n                    vec2 r = worldPosition.xz / size;\n                    \n                    \n                    vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);\n                    float line = min(grid.x, grid.y);\n                    \n                \n                    return 1.0 - min(line, 1.0);\n                }\n                \n            void main() {\n            \n                    \n                    float d = 1.0 - min(distance(cameraPosition.xz, worldPosition.xz) / uDistance, 1.0);\n                    \n                    float g1 = getGrid(uSize1);\n                    float g2 = getGrid(uSize2);\n                    \n                    // Ortho camera fades the grid away when zooming out\n                    float minZoom = step(0.2, uZoom);\n                    float zoomFactor = pow(min(uZoom, 1.), 2.) * minZoom;\n                    \n                    gl_FragColor = vec4(uColor.rgb, mix(g2, g1, g1) * pow(d, uFade));\n                    gl_FragColor.a = mix(0.5 * gl_FragColor.a, gl_FragColor.a, g2) * zoomFactor;\n                    \n                    if ( gl_FragColor.a <= 0.0 ) discard;\n                    \n            \n            }\n            \n            ",
			extensions: { derivatives: !0 }
		});
		this.three = new U(o, s), this.three.frustumCulled = !1, t.scene.three.add(this.three), this.setupEvents(!0);
	}
	get visible() {
		return this.three.visible;
	}
	set visible(e) {
		this.three.visible = e, e ? this.world.scene.three.add(this.three) : this.three.removeFromParent();
	}
	get material() {
		return this.three.material;
	}
	get fade() {
		return this._fade === 3;
	}
	set fade(e) {
		this._fade = e ? 3 : 0, this.material.uniforms.uFade.value = this._fade;
	}
	setup(e) {
		let t = {
			...this._defaultConfig,
			...e
		};
		this.config.visible = !0, this.config.color = t.color, this.config.primarySize = t.primarySize, this.config.secondarySize = t.secondarySize, this.config.distance = t.distance, this.isSetup = !0, this.onSetup.trigger();
	}
	dispose() {
		this.setupEvents(!1), this.components.get(oi).list.delete(this.config.uuid), this.components.get(Zt).destroy(this.three), this.onDisposed.trigger(), this.onDisposed.reset(), this.world = null, this.components = null;
	}
	setupEvents(e) {
		if (this.world.isDisposing || !(this.world.camera instanceof Kl)) return;
		let t = this.world.camera.controls;
		e ? t.addEventListener("update", this.updateZoom) : t.removeEventListener("update", this.updateZoom);
	}
};
X(class e extends qt {
	constructor(t) {
		super(t), X(this, "list", /* @__PURE__ */ new Map()), X(this, "onDisposed", new Z()), X(this, "enabled", !0), t.add(e.uuid, this);
	}
	create(e) {
		if (this.list.has(e.uuid)) throw Error("This world already has a grid!");
		let t = new Xl(this.components, e);
		return this.list.set(e.uuid, t), e.onDisposed.add(() => {
			this.delete(e);
		}), t;
	}
	delete(e) {
		let t = this.list.get(e.uuid);
		t && t.dispose(), this.list.delete(e.uuid);
	}
	dispose() {
		for (let [e, t] of this.list) t.dispose();
		this.list.clear(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
}, "uuid", "d1e814d5-b81c-4452-87a2-f039375e0489");
var Zl = class e {
	constructor() {
		X(this, "onDisposed", new Z()), X(this, "list", new a()), X(this, "enabled", !1), X(this, "_timer"), X(this, "onInit", new Z()), X(this, "update", () => {
			if (!this.enabled) return;
			this._timer.update();
			let e = this._timer.getDelta();
			for (let [t, n] of this.list) n.enabled && n.isUpdateable() && n.update(e);
			requestAnimationFrame(this.update);
		}), this._timer = new d(), e.setupBVH();
	}
	add(e, t) {
		if (this.list.has(e)) throw Error("You're trying to add a component that already exists in the components instance. Use Components.get() instead.");
		$t.validate(e), this.list.set(e, t);
	}
	get(e) {
		var t;
		let n = e.uuid;
		if (!this.list.has(n)) {
			let r = new e(this);
			return (t = r.isDisposeable) != null && t.call(r) && r.onDisposed.add(() => this.list.delete(n)), this.list.has(n) || this.add(n, r), r;
		}
		return this.list.get(n);
	}
	init() {
		this.enabled = !0;
		for (let [e, t] of this.list.entries()) t.enabled = !0;
		this._timer.reset(), this.update(), this.onInit.trigger();
	}
	dispose() {
		this.enabled = !1;
		let e;
		for (let [t, n] of this.list) {
			if (n.enabled = !1, t === Q.uuid) {
				e = n;
				continue;
			}
			n.isDisposeable() && n.dispose();
		}
		e?.dispose(), this._timer.dispose(), this.onDisposed.trigger();
	}
	static setupBVH() {
		r.prototype.computeBoundsTree = Es, r.prototype.disposeBoundsTree = Ds, U.prototype.raycast = ws, B.prototype.raycast = ws;
	}
};
X(Zl, "release", "2.4.3");
var Ql = Zl, $l = class {
	constructor(e) {
		X(this, "enabled", !1), X(this, "id", "FirstPerson"), this.camera = e;
	}
	set(e) {
		if (this.enabled = e, e) {
			if (this.camera.projection.current !== "Perspective") {
				this.camera.set("Orbit");
				return;
			}
			this.setupFirstPersonCamera();
		}
	}
	setupFirstPersonCamera() {
		let e = this.camera.controls, t = new G();
		e.distance--, e.getPosition(t), e.minDistance = 1, e.maxDistance = 1, e.distance = 1, e.moveTo(t.x, t.y, t.z), e.truckSpeed = 50, e.mouseButtons.wheel = Ut.ACTION.DOLLY, e.touches.two = Ut.ACTION.TOUCH_ZOOM_TRUCK;
	}
}, eu = class {
	constructor(e) {
		X(this, "enabled", !0), X(this, "id", "Orbit"), this.camera = e, this.activateOrbitControls();
	}
	set(e) {
		this.enabled = e, e && this.activateOrbitControls();
	}
	activateOrbitControls() {
		let e = this.camera.controls;
		e.minDistance = 1, e.maxDistance = 300;
		let t = new G();
		e.getPosition(t);
		let n = t.length();
		e.distance = n, e.truckSpeed = 2;
		let { rotation: r } = this.camera.three, i = new G(0, 0, -1).applyEuler(r), a = t.addScaledVector(i, n);
		e.moveTo(a.x, a.y, a.z);
	}
}, tu = class {
	constructor(e) {
		X(this, "enabled", !1), X(this, "id", "Plan"), X(this, "mouseAction1"), X(this, "mouseAction2"), X(this, "mouseInitialized", !1), X(this, "defaultAzimuthSpeed"), X(this, "defaultPolarSpeed"), this.camera = e, this.defaultAzimuthSpeed = e.controls.azimuthRotateSpeed, this.defaultPolarSpeed = e.controls.polarRotateSpeed;
	}
	set(e) {
		this.enabled = e;
		let t = this.camera.controls;
		t.azimuthRotateSpeed = e ? 0 : this.defaultAzimuthSpeed, t.polarRotateSpeed = e ? 0 : this.defaultPolarSpeed, this.mouseInitialized ||= (this.mouseAction1 = t.touches.one, this.mouseAction2 = t.touches.two, !0), e ? (t.mouseButtons.left = Ut.ACTION.TRUCK, t.touches.one = Ut.ACTION.TOUCH_TRUCK, t.touches.two = Ut.ACTION.TOUCH_ZOOM) : (t.mouseButtons.left = Ut.ACTION.ROTATE, t.touches.one = this.mouseAction1, t.touches.two = this.mouseAction2);
	}
}, nu = class {
	constructor(e) {
		X(this, "onChanged", new Z()), X(this, "current", "Perspective"), X(this, "camera"), X(this, "matchOrthoDistanceEnabled", !1), X(this, "_component"), X(this, "_previousDistance", -1), this._component = e, this.camera = e.three;
	}
	async set(e) {
		this.current !== e && (e === "Orthographic" ? this.setOrthoCamera() : await this.setPerspectiveCamera(), this.onChanged.trigger(this.camera));
	}
	async toggle() {
		let e = this.current === "Perspective" ? "Orthographic" : "Perspective";
		await this.set(e);
	}
	setOrthoCamera() {
		if (this._component.mode === null || this._component.mode.id === "FirstPerson") return;
		this._previousDistance = this._component.controls.distance, this._component.controls.distance = 200;
		let e = this.getPerspectiveDims();
		if (!e) return;
		let { width: t, height: n } = e;
		this.setupOrthoCamera(n, t), this.camera = this._component.threeOrtho, this.current = "Orthographic";
	}
	getPerspectiveDims() {
		let e = this._component.currentWorld;
		if (!e || !e.renderer) return null;
		let t = new G();
		this._component.threePersp.getWorldDirection(t);
		let n = new G();
		this._component.controls.getTarget(n);
		let r = n.clone().sub(this._component.threePersp.position).dot(t), i = e.renderer.getSize(), a = i.x / i.y, o = this._component.threePersp, s = r * 2 * Math.atan(o.fov * (Math.PI / 180) / 2);
		return {
			width: s * a,
			height: s
		};
	}
	setupOrthoCamera(e, t) {
		this._component.controls.mouseButtons.wheel = Ut.ACTION.ZOOM, this._component.controls.mouseButtons.middle = Ut.ACTION.ZOOM;
		let n = this._component.threePersp, r = this._component.threeOrtho;
		r.zoom = 1, r.left = t / -2, r.right = t / 2, r.top = e / 2, r.bottom = e / -2, r.updateProjectionMatrix(), r.position.copy(n.position), r.quaternion.copy(n.quaternion), this._component.controls.camera = r;
	}
	getDistance() {
		let e = this._component.threePersp, t = this._component.threeOrtho;
		return (t.top - t.bottom) / t.zoom / (2 * Math.atan(e.fov * (Math.PI / 180) / 2));
	}
	async setPerspectiveCamera() {
		this._component.controls.mouseButtons.wheel = Ut.ACTION.DOLLY, this._component.controls.mouseButtons.middle = Ut.ACTION.DOLLY;
		let e = this._component.threePersp, t = this._component.threeOrtho;
		e.position.copy(t.position), e.quaternion.copy(t.quaternion), this._component.controls.mouseButtons.wheel = Ut.ACTION.DOLLY, this.matchOrthoDistanceEnabled ? this._component.controls.distance = this.getDistance() : this._component.controls.distance = this._previousDistance, await this._component.controls.zoomTo(1), e.updateProjectionMatrix(), this._component.controls.camera = e, this.camera = e, this.current = "Perspective";
	}
}, ru = class extends Kl {
	constructor(e) {
		super(e), X(this, "projection"), X(this, "threeOrtho"), X(this, "threePersp"), X(this, "_userInputButtons", {}), X(this, "_frustumSize", 50), X(this, "_navigationModes", /* @__PURE__ */ new Map()), X(this, "_mode", null), X(this, "previousSize", null), this.threePersp = this.three, this.threeOrtho = this.newOrthoCamera(), this.projection = new nu(this), this.onAspectUpdated.add(() => {
			this.setOrthoPerspCameraAspect();
		}), this.projection.onChanged.add((e) => {
			this.three = e, this.updateAspect();
		}), this.worlds.onItemSet.add(() => {
			this._navigationModes.clear(), this._navigationModes.set("Orbit", new eu(this)), this._navigationModes.set("FirstPerson", new $l(this)), this._navigationModes.set("Plan", new tu(this)), this._mode = this._navigationModes.get("Orbit"), this.mode.set(!0, { preventTargetAdjustment: !0 }), this.currentWorld && this.currentWorld.renderer && (this.previousSize = this.currentWorld.renderer.getSize().clone());
		}), this.worlds.onItemDeleted.add(() => {
			this._navigationModes.clear();
		});
	}
	get mode() {
		if (!this._mode) throw Error("Mode not found, camera not initialized");
		return this._mode;
	}
	dispose() {
		super.dispose(), this.threeOrtho.removeFromParent();
	}
	set(e) {
		if (this.mode !== null && this.mode.id !== e) {
			if (this.mode.set(!1), !this._navigationModes.has(e)) throw Error("The specified mode does not exist!");
			this._mode = this._navigationModes.get(e), this.mode.set(!0);
		}
	}
	async fit(e, t = 1.5) {
		if (!this.enabled) return;
		let n = Number.MAX_VALUE, r = Number.MIN_VALUE, i = new G(n, n, n), a = new G(r, r, r);
		for (let t of e) {
			let e = new _().setFromObject(t);
			e.min.x < i.x && (i.x = e.min.x), e.min.y < i.y && (i.y = e.min.y), e.min.z < i.z && (i.z = e.min.z), e.max.x > a.x && (a.x = e.max.x), e.max.y > a.y && (a.y = e.max.y), e.max.z > a.z && (a.z = e.max.z);
		}
		let o = new _(i, a), s = this.components.get(Q);
		if (s.initialized) for (let [, e] of s.list) {
			let t = e.box;
			t.min.x < i.x && (i.x = t.min.x), t.min.y < i.y && (i.y = t.min.y), t.min.z < i.z && (i.z = t.min.z), t.max.x > a.x && (a.x = t.max.x), t.max.y > a.y && (a.y = t.max.y), t.max.z > a.z && (a.z = t.max.z);
		}
		let c = new G();
		o.getSize(c);
		let l = new G();
		o.getCenter(l);
		let u = new b(l, Math.max(c.x, c.y, c.z) * t);
		await this.controls.fitToSphere(u, !0);
	}
	setUserInput(e) {
		e ? this.enableUserInput() : this.disableUserInput();
	}
	addCustomNavigationMode(e) {
		this._navigationModes.set(e.id, e);
	}
	disableUserInput() {
		this._userInputButtons.left = this.controls.mouseButtons.left, this._userInputButtons.right = this.controls.mouseButtons.right, this._userInputButtons.middle = this.controls.mouseButtons.middle, this._userInputButtons.wheel = this.controls.mouseButtons.wheel, this.controls.mouseButtons.left = 0, this.controls.mouseButtons.right = 0, this.controls.mouseButtons.middle = 0, this.controls.mouseButtons.wheel = 0;
	}
	enableUserInput() {
		Object.keys(this._userInputButtons).length !== 0 && (this.controls.mouseButtons.left = this._userInputButtons.left, this.controls.mouseButtons.right = this._userInputButtons.right, this.controls.mouseButtons.middle = this._userInputButtons.middle, this.controls.mouseButtons.wheel = this._userInputButtons.wheel);
	}
	newOrthoCamera() {
		let e = window.innerWidth / window.innerHeight;
		return new ge(this._frustumSize * e / -2, this._frustumSize * e / 2, this._frustumSize / 2, this._frustumSize / -2, .1, 1e3);
	}
	setOrthoPerspCameraAspect() {
		if (!this.currentWorld || !this.currentWorld.renderer || !this.previousSize) return;
		let e = this.currentWorld.renderer.getSize(), t = this.threeOrtho.top, n = this.threeOrtho.right, r = e.y / this.previousSize.y, i = e.x / this.previousSize.x, a = t * r, o = n * i;
		this.threeOrtho.left = -o, this.threeOrtho.right = o, this.threeOrtho.top = a, this.threeOrtho.bottom = -a, this.threeOrtho.updateProjectionMatrix(), this.previousSize.copy(e);
	}
}, iu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function au(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ou(e) {
	throw Error("Could not dynamically require \"" + e + "\". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.");
}
var su = { exports: {} };
(function(e, t) {
	(function(t) {
		e.exports = t();
	})(function() {
		return function e(t, n, r) {
			function i(o, s) {
				if (!n[o]) {
					if (!t[o]) {
						var c = typeof ou == "function" && ou;
						if (!s && c) return c(o, !0);
						if (a) return a(o, !0);
						var l = /* @__PURE__ */ Error("Cannot find module '" + o + "'");
						throw l.code = "MODULE_NOT_FOUND", l;
					}
					var u = n[o] = { exports: {} };
					t[o][0].call(u.exports, function(e) {
						var n = t[o][1][e];
						return i(n || e);
					}, u, u.exports, e, t, n, r);
				}
				return n[o].exports;
			}
			for (var a = typeof ou == "function" && ou, o = 0; o < r.length; o++) i(r[o]);
			return i;
		}({
			1: [function(e, t, n) {
				var r = e("./utils"), i = e("./support"), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				n.encode = function(e) {
					for (var t, n, i, o, s, c, l, u = [], d = 0, f = e.length, p = f, m = r.getTypeOf(e) !== "string"; d < e.length;) p = f - d, i = m ? (t = e[d++], n = d < f ? e[d++] : 0, d < f ? e[d++] : 0) : (t = e.charCodeAt(d++), n = d < f ? e.charCodeAt(d++) : 0, d < f ? e.charCodeAt(d++) : 0), o = t >> 2, s = (3 & t) << 4 | n >> 4, c = 1 < p ? (15 & n) << 2 | i >> 6 : 64, l = 2 < p ? 63 & i : 64, u.push(a.charAt(o) + a.charAt(s) + a.charAt(c) + a.charAt(l));
					return u.join("");
				}, n.decode = function(e) {
					var t, n, r, o, s, c, l = 0, u = 0, d = "data:";
					if (e.substr(0, d.length) === d) throw Error("Invalid base64 input, it looks like a data url.");
					var f, p = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
					if (e.charAt(e.length - 1) === a.charAt(64) && p--, e.charAt(e.length - 2) === a.charAt(64) && p--, p % 1 != 0) throw Error("Invalid base64 input, bad content length.");
					for (f = i.uint8array ? new Uint8Array(0 | p) : Array(0 | p); l < e.length;) t = a.indexOf(e.charAt(l++)) << 2 | (o = a.indexOf(e.charAt(l++))) >> 4, n = (15 & o) << 4 | (s = a.indexOf(e.charAt(l++))) >> 2, r = (3 & s) << 6 | (c = a.indexOf(e.charAt(l++))), f[u++] = t, s !== 64 && (f[u++] = n), c !== 64 && (f[u++] = r);
					return f;
				};
			}, {
				"./support": 30,
				"./utils": 32
			}],
			2: [function(e, t, n) {
				var r = e("./external"), i = e("./stream/DataWorker"), a = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
				function s(e, t, n, r, i) {
					this.compressedSize = e, this.uncompressedSize = t, this.crc32 = n, this.compression = r, this.compressedContent = i;
				}
				s.prototype = {
					getContentWorker: function() {
						var e = new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), t = this;
						return e.on("end", function() {
							if (this.streamInfo.data_length !== t.uncompressedSize) throw Error("Bug : uncompressed data size mismatch");
						}), e;
					},
					getCompressedWorker: function() {
						return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
					}
				}, s.createWorkerFrom = function(e, t, n) {
					return e.pipe(new a()).pipe(new o("uncompressedSize")).pipe(t.compressWorker(n)).pipe(new o("compressedSize")).withStreamInfo("compression", t);
				}, t.exports = s;
			}, {
				"./external": 6,
				"./stream/Crc32Probe": 25,
				"./stream/DataLengthProbe": 26,
				"./stream/DataWorker": 27
			}],
			3: [function(e, t, n) {
				var r = e("./stream/GenericWorker");
				n.STORE = {
					magic: "\0\0",
					compressWorker: function() {
						return new r("STORE compression");
					},
					uncompressWorker: function() {
						return new r("STORE decompression");
					}
				}, n.DEFLATE = e("./flate");
			}, {
				"./flate": 7,
				"./stream/GenericWorker": 28
			}],
			4: [function(e, t, n) {
				var r = e("./utils"), i = function() {
					for (var e, t = [], n = 0; n < 256; n++) {
						e = n;
						for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
						t[n] = e;
					}
					return t;
				}();
				t.exports = function(e, t) {
					return e !== void 0 && e.length ? r.getTypeOf(e) === "string" ? function(e, t, n, r) {
						var a = i, o = r + n;
						e ^= -1;
						for (var s = r; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t.charCodeAt(s))];
						return -1 ^ e;
					}(0 | t, e, e.length, 0) : function(e, t, n, r) {
						var a = i, o = r + n;
						e ^= -1;
						for (var s = r; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];
						return -1 ^ e;
					}(0 | t, e, e.length, 0) : 0;
				};
			}, { "./utils": 32 }],
			5: [function(e, t, n) {
				n.base64 = !1, n.binary = !1, n.dir = !1, n.createFolders = !0, n.date = null, n.compression = null, n.compressionOptions = null, n.comment = null, n.unixPermissions = null, n.dosPermissions = null;
			}, {}],
			6: [function(e, t, n) {
				var r = null;
				r = typeof Promise < "u" ? Promise : e("lie"), t.exports = { Promise: r };
			}, { lie: 37 }],
			7: [function(e, t, n) {
				var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", i = e("pako"), a = e("./utils"), o = e("./stream/GenericWorker"), s = r ? "uint8array" : "array";
				function c(e, t) {
					o.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {};
				}
				n.magic = "\b\0", a.inherits(c, o), c.prototype.processChunk = function(e) {
					this.meta = e.meta, this._pako === null && this._createPako(), this._pako.push(a.transformTo(s, e.data), !1);
				}, c.prototype.flush = function() {
					o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
				}, c.prototype.cleanUp = function() {
					o.prototype.cleanUp.call(this), this._pako = null;
				}, c.prototype._createPako = function() {
					this._pako = new i[this._pakoAction]({
						raw: !0,
						level: this._pakoOptions.level || -1
					});
					var e = this;
					this._pako.onData = function(t) {
						e.push({
							data: t,
							meta: e.meta
						});
					};
				}, n.compressWorker = function(e) {
					return new c("Deflate", e);
				}, n.uncompressWorker = function() {
					return new c("Inflate", {});
				};
			}, {
				"./stream/GenericWorker": 28,
				"./utils": 32,
				pako: 38
			}],
			8: [function(e, t, n) {
				function r(e, t) {
					var n, r = "";
					for (n = 0; n < t; n++) r += String.fromCharCode(255 & e), e >>>= 8;
					return r;
				}
				function i(e, t, n, i, o, u) {
					var d, f, p = e.file, m = e.compression, h = u !== s.utf8encode, g = a.transformTo("string", u(p.name)), _ = a.transformTo("string", s.utf8encode(p.name)), v = p.comment, y = a.transformTo("string", u(v)), b = a.transformTo("string", s.utf8encode(v)), x = _.length !== p.name.length, S = b.length !== v.length, C = "", w = "", T = "", E = p.dir, D = p.date, O = {
						crc32: 0,
						compressedSize: 0,
						uncompressedSize: 0
					};
					t && !n || (O.crc32 = e.crc32, O.compressedSize = e.compressedSize, O.uncompressedSize = e.uncompressedSize);
					var k = 0;
					t && (k |= 8), h || !x && !S || (k |= 2048);
					var A = 0, j = 0;
					E && (A |= 16), o === "UNIX" ? (j = 798, A |= function(e, t) {
						var n = e;
						return e || (n = t ? 16893 : 33204), (65535 & n) << 16;
					}(p.unixPermissions, E)) : (j = 20, A |= function(e) {
						return 63 & (e || 0);
					}(p.dosPermissions)), d = D.getUTCHours(), d <<= 6, d |= D.getUTCMinutes(), d <<= 5, d |= D.getUTCSeconds() / 2, f = D.getUTCFullYear() - 1980, f <<= 4, f |= D.getUTCMonth() + 1, f <<= 5, f |= D.getUTCDate(), x && (w = r(1, 1) + r(c(g), 4) + _, C += "up" + r(w.length, 2) + w), S && (T = r(1, 1) + r(c(y), 4) + b, C += "uc" + r(T.length, 2) + T);
					var M = "";
					return M += "\n\0", M += r(k, 2), M += m.magic, M += r(d, 2), M += r(f, 2), M += r(O.crc32, 4), M += r(O.compressedSize, 4), M += r(O.uncompressedSize, 4), M += r(g.length, 2), M += r(C.length, 2), {
						fileRecord: l.LOCAL_FILE_HEADER + M + g + C,
						dirRecord: l.CENTRAL_FILE_HEADER + r(j, 2) + M + r(y.length, 2) + "\0\0\0\0" + r(A, 4) + r(i, 4) + g + C + y
					};
				}
				var a = e("../utils"), o = e("../stream/GenericWorker"), s = e("../utf8"), c = e("../crc32"), l = e("../signature");
				function u(e, t, n, r) {
					o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = n, this.encodeFileName = r, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
				}
				a.inherits(u, o), u.prototype.push = function(e) {
					var t = e.meta.percent || 0, n = this.entriesCount, r = this._sources.length;
					this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, o.prototype.push.call(this, {
						data: e.data,
						meta: {
							currentFile: this.currentFile,
							percent: n ? (t + 100 * (n - r - 1)) / n : 100
						}
					}));
				}, u.prototype.openedSource = function(e) {
					this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
					var t = this.streamFiles && !e.file.dir;
					if (t) {
						var n = i(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
						this.push({
							data: n.fileRecord,
							meta: { percent: 0 }
						});
					} else this.accumulate = !0;
				}, u.prototype.closedSource = function(e) {
					this.accumulate = !1;
					var t = this.streamFiles && !e.file.dir, n = i(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
					if (this.dirRecords.push(n.dirRecord), t) this.push({
						data: function(e) {
							return l.DATA_DESCRIPTOR + r(e.crc32, 4) + r(e.compressedSize, 4) + r(e.uncompressedSize, 4);
						}(e),
						meta: { percent: 100 }
					});
					else for (this.push({
						data: n.fileRecord,
						meta: { percent: 0 }
					}); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
					this.currentFile = null;
				}, u.prototype.flush = function() {
					for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++) this.push({
						data: this.dirRecords[t],
						meta: { percent: 100 }
					});
					var n = this.bytesWritten - e, i = function(e, t, n, i, o) {
						var s = a.transformTo("string", o(i));
						return l.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(e, 2) + r(e, 2) + r(t, 4) + r(n, 4) + r(s.length, 2) + s;
					}(this.dirRecords.length, n, e, this.zipComment, this.encodeFileName);
					this.push({
						data: i,
						meta: { percent: 100 }
					});
				}, u.prototype.prepareNextSource = function() {
					this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
				}, u.prototype.registerPrevious = function(e) {
					this._sources.push(e);
					var t = this;
					return e.on("data", function(e) {
						t.processChunk(e);
					}), e.on("end", function() {
						t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end();
					}), e.on("error", function(e) {
						t.error(e);
					}), this;
				}, u.prototype.resume = function() {
					return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
				}, u.prototype.error = function(e) {
					var t = this._sources;
					if (!o.prototype.error.call(this, e)) return !1;
					for (var n = 0; n < t.length; n++) try {
						t[n].error(e);
					} catch {}
					return !0;
				}, u.prototype.lock = function() {
					o.prototype.lock.call(this);
					for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock();
				}, t.exports = u;
			}, {
				"../crc32": 4,
				"../signature": 23,
				"../stream/GenericWorker": 28,
				"../utf8": 31,
				"../utils": 32
			}],
			9: [function(e, t, n) {
				var r = e("../compressions"), i = e("./ZipFileWorker");
				n.generateWorker = function(e, t, n) {
					var a = new i(t.streamFiles, n, t.platform, t.encodeFileName), o = 0;
					try {
						e.forEach(function(e, n) {
							o++;
							var i = function(e, t) {
								var n = e || t, i = r[n];
								if (!i) throw Error(n + " is not a valid compression method !");
								return i;
							}(n.options.compression, t.compression), s = n.options.compressionOptions || t.compressionOptions || {}, c = n.dir, l = n.date;
							n._compressWorker(i, s).withStreamInfo("file", {
								name: e,
								dir: c,
								date: l,
								comment: n.comment || "",
								unixPermissions: n.unixPermissions,
								dosPermissions: n.dosPermissions
							}).pipe(a);
						}), a.entriesCount = o;
					} catch (e) {
						a.error(e);
					}
					return a;
				};
			}, {
				"../compressions": 3,
				"./ZipFileWorker": 8
			}],
			10: [function(e, t, n) {
				function r() {
					if (!(this instanceof r)) return new r();
					if (arguments.length) throw Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
					this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
						var e = new r();
						for (var t in this) typeof this[t] != "function" && (e[t] = this[t]);
						return e;
					};
				}
				(r.prototype = e("./object")).loadAsync = e("./load"), r.support = e("./support"), r.defaults = e("./defaults"), r.version = "3.10.1", r.loadAsync = function(e, t) {
					return new r().loadAsync(e, t);
				}, r.external = e("./external"), t.exports = r;
			}, {
				"./defaults": 5,
				"./external": 6,
				"./load": 11,
				"./object": 15,
				"./support": 30
			}],
			11: [function(e, t, n) {
				var r = e("./utils"), i = e("./external"), a = e("./utf8"), o = e("./zipEntries"), s = e("./stream/Crc32Probe"), c = e("./nodejsUtils");
				function l(e) {
					return new i.Promise(function(t, n) {
						var r = e.decompressed.getContentWorker().pipe(new s());
						r.on("error", function(e) {
							n(e);
						}).on("end", function() {
							r.streamInfo.crc32 === e.decompressed.crc32 ? t() : n(/* @__PURE__ */ Error("Corrupted zip : CRC32 mismatch"));
						}).resume();
					});
				}
				t.exports = function(e, t) {
					var n = this;
					return t = r.extend(t || {}, {
						base64: !1,
						checkCRC32: !1,
						optimizedBinaryString: !1,
						createFolders: !1,
						decodeFileName: a.utf8decode
					}), c.isNode && c.isStream(e) ? i.Promise.reject(/* @__PURE__ */ Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", e, !0, t.optimizedBinaryString, t.base64).then(function(e) {
						var n = new o(t);
						return n.load(e), n;
					}).then(function(e) {
						var n = [i.Promise.resolve(e)], r = e.files;
						if (t.checkCRC32) for (var a = 0; a < r.length; a++) n.push(l(r[a]));
						return i.Promise.all(n);
					}).then(function(e) {
						for (var i = e.shift(), a = i.files, o = 0; o < a.length; o++) {
							var s = a[o], c = s.fileNameStr, l = r.resolve(s.fileNameStr);
							n.file(l, s.decompressed, {
								binary: !0,
								optimizedBinaryString: !0,
								date: s.date,
								dir: s.dir,
								comment: s.fileCommentStr.length ? s.fileCommentStr : null,
								unixPermissions: s.unixPermissions,
								dosPermissions: s.dosPermissions,
								createFolders: t.createFolders
							}), s.dir || (n.file(l).unsafeOriginalName = c);
						}
						return i.zipComment.length && (n.comment = i.zipComment), n;
					});
				};
			}, {
				"./external": 6,
				"./nodejsUtils": 14,
				"./stream/Crc32Probe": 25,
				"./utf8": 31,
				"./utils": 32,
				"./zipEntries": 33
			}],
			12: [function(e, t, n) {
				var r = e("../utils"), i = e("../stream/GenericWorker");
				function a(e, t) {
					i.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(t);
				}
				r.inherits(a, i), a.prototype._bindStream = function(e) {
					var t = this;
					(this._stream = e).pause(), e.on("data", function(e) {
						t.push({
							data: e,
							meta: { percent: 0 }
						});
					}).on("error", function(e) {
						t.isPaused ? this.generatedError = e : t.error(e);
					}).on("end", function() {
						t.isPaused ? t._upstreamEnded = !0 : t.end();
					});
				}, a.prototype.pause = function() {
					return !!i.prototype.pause.call(this) && (this._stream.pause(), !0);
				}, a.prototype.resume = function() {
					return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
				}, t.exports = a;
			}, {
				"../stream/GenericWorker": 28,
				"../utils": 32
			}],
			13: [function(e, t, n) {
				var r = e("readable-stream").Readable;
				function i(e, t, n) {
					r.call(this, t), this._helper = e;
					var i = this;
					e.on("data", function(e, t) {
						i.push(e) || i._helper.pause(), n && n(t);
					}).on("error", function(e) {
						i.emit("error", e);
					}).on("end", function() {
						i.push(null);
					});
				}
				e("../utils").inherits(i, r), i.prototype._read = function() {
					this._helper.resume();
				}, t.exports = i;
			}, {
				"../utils": 32,
				"readable-stream": 16
			}],
			14: [function(e, t, n) {
				t.exports = {
					isNode: typeof Buffer < "u",
					newBufferFrom: function(e, t) {
						if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
						if (typeof e == "number") throw Error("The \"data\" argument must not be a number");
						return new Buffer(e, t);
					},
					allocBuffer: function(e) {
						if (Buffer.alloc) return Buffer.alloc(e);
						var t = new Buffer(e);
						return t.fill(0), t;
					},
					isBuffer: function(e) {
						return Buffer.isBuffer(e);
					},
					isStream: function(e) {
						return e && typeof e.on == "function" && typeof e.pause == "function" && typeof e.resume == "function";
					}
				};
			}, {}],
			15: [function(e, t, n) {
				function r(e, t, n) {
					var r, i = a.getTypeOf(t), s = a.extend(n || {}, c);
					s.date = s.date || /* @__PURE__ */ new Date(), s.compression !== null && (s.compression = s.compression.toUpperCase()), typeof s.unixPermissions == "string" && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (e = h(e)), s.createFolders && (r = m(e)) && g.call(this, r, !0);
					var d = i === "string" && s.binary === !1 && s.base64 === !1;
					n && n.binary !== void 0 || (s.binary = !d), (t instanceof l && t.uncompressedSize === 0 || s.dir || !t || t.length === 0) && (s.base64 = !1, s.binary = !0, t = "", s.compression = "STORE", i = "string");
					var _ = null;
					_ = t instanceof l || t instanceof o ? t : f.isNode && f.isStream(t) ? new p(e, t) : a.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
					var v = new u(e, _, s);
					this.files[e] = v;
				}
				var i = e("./utf8"), a = e("./utils"), o = e("./stream/GenericWorker"), s = e("./stream/StreamHelper"), c = e("./defaults"), l = e("./compressedObject"), u = e("./zipObject"), d = e("./generate"), f = e("./nodejsUtils"), p = e("./nodejs/NodejsStreamInputAdapter"), m = function(e) {
					e.slice(-1) === "/" && (e = e.substring(0, e.length - 1));
					var t = e.lastIndexOf("/");
					return 0 < t ? e.substring(0, t) : "";
				}, h = function(e) {
					return e.slice(-1) !== "/" && (e += "/"), e;
				}, g = function(e, t) {
					return t = t === void 0 ? c.createFolders : t, e = h(e), this.files[e] || r.call(this, e, null, {
						dir: !0,
						createFolders: t
					}), this.files[e];
				};
				function _(e) {
					return Object.prototype.toString.call(e) === "[object RegExp]";
				}
				t.exports = {
					load: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					forEach: function(e) {
						var t, n, r;
						for (t in this.files) r = this.files[t], (n = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(n, r);
					},
					filter: function(e) {
						var t = [];
						return this.forEach(function(n, r) {
							e(n, r) && t.push(r);
						}), t;
					},
					file: function(e, t, n) {
						if (arguments.length !== 1) return e = this.root + e, r.call(this, e, t, n), this;
						if (_(e)) {
							var i = e;
							return this.filter(function(e, t) {
								return !t.dir && i.test(e);
							});
						}
						var a = this.files[this.root + e];
						return a && !a.dir ? a : null;
					},
					folder: function(e) {
						if (!e) return this;
						if (_(e)) return this.filter(function(t, n) {
							return n.dir && e.test(t);
						});
						var t = this.root + e, n = g.call(this, t), r = this.clone();
						return r.root = n.name, r;
					},
					remove: function(e) {
						e = this.root + e;
						var t = this.files[e];
						if (t ||= (e.slice(-1) !== "/" && (e += "/"), this.files[e]), t && !t.dir) delete this.files[e];
						else for (var n = this.filter(function(t, n) {
							return n.name.slice(0, e.length) === e;
						}), r = 0; r < n.length; r++) delete this.files[n[r].name];
						return this;
					},
					generate: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					generateInternalStream: function(e) {
						var t, n = {};
						try {
							if ((n = a.extend(e || {}, {
								streamFiles: !1,
								compression: "STORE",
								compressionOptions: null,
								type: "",
								platform: "DOS",
								comment: null,
								mimeType: "application/zip",
								encodeFileName: i.utf8encode
							})).type = n.type.toLowerCase(), n.compression = n.compression.toUpperCase(), n.type === "binarystring" && (n.type = "string"), !n.type) throw Error("No output type specified.");
							a.checkSupport(n.type), n.platform !== "darwin" && n.platform !== "freebsd" && n.platform !== "linux" && n.platform !== "sunos" || (n.platform = "UNIX"), n.platform === "win32" && (n.platform = "DOS");
							var r = n.comment || this.comment || "";
							t = d.generateWorker(this, n, r);
						} catch (e) {
							(t = new o("error")).error(e);
						}
						return new s(t, n.type || "string", n.mimeType);
					},
					generateAsync: function(e, t) {
						return this.generateInternalStream(e).accumulate(t);
					},
					generateNodeStream: function(e, t) {
						return (e ||= {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t);
					}
				};
			}, {
				"./compressedObject": 2,
				"./defaults": 5,
				"./generate": 9,
				"./nodejs/NodejsStreamInputAdapter": 12,
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./stream/StreamHelper": 29,
				"./utf8": 31,
				"./utils": 32,
				"./zipObject": 35
			}],
			16: [function(e, t, n) {
				t.exports = e("stream");
			}, { stream: void 0 }],
			17: [function(e, t, n) {
				var r = e("./DataReader");
				function i(e) {
					r.call(this, e);
					for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t];
				}
				e("../utils").inherits(i, r), i.prototype.byteAt = function(e) {
					return this.data[this.zero + e];
				}, i.prototype.lastIndexOfSignature = function(e) {
					for (var t = e.charCodeAt(0), n = e.charCodeAt(1), r = e.charCodeAt(2), i = e.charCodeAt(3), a = this.length - 4; 0 <= a; --a) if (this.data[a] === t && this.data[a + 1] === n && this.data[a + 2] === r && this.data[a + 3] === i) return a - this.zero;
					return -1;
				}, i.prototype.readAndCheckSignature = function(e) {
					var t = e.charCodeAt(0), n = e.charCodeAt(1), r = e.charCodeAt(2), i = e.charCodeAt(3), a = this.readData(4);
					return t === a[0] && n === a[1] && r === a[2] && i === a[3];
				}, i.prototype.readData = function(e) {
					if (this.checkOffset(e), e === 0) return [];
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			18: [function(e, t, n) {
				var r = e("../utils");
				function i(e) {
					this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
				}
				i.prototype = {
					checkOffset: function(e) {
						this.checkIndex(this.index + e);
					},
					checkIndex: function(e) {
						if (this.length < this.zero + e || e < 0) throw Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
					},
					setIndex: function(e) {
						this.checkIndex(e), this.index = e;
					},
					skip: function(e) {
						this.setIndex(this.index + e);
					},
					byteAt: function() {},
					readInt: function(e) {
						var t, n = 0;
						for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) n = (n << 8) + this.byteAt(t);
						return this.index += e, n;
					},
					readString: function(e) {
						return r.transformTo("string", this.readData(e));
					},
					readData: function() {},
					lastIndexOfSignature: function() {},
					readAndCheckSignature: function() {},
					readDate: function() {
						var e = this.readInt(4);
						return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
					}
				}, t.exports = i;
			}, { "../utils": 32 }],
			19: [function(e, t, n) {
				var r = e("./Uint8ArrayReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.readData = function(e) {
					this.checkOffset(e);
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./Uint8ArrayReader": 21
			}],
			20: [function(e, t, n) {
				var r = e("./DataReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.byteAt = function(e) {
					return this.data.charCodeAt(this.zero + e);
				}, i.prototype.lastIndexOfSignature = function(e) {
					return this.data.lastIndexOf(e) - this.zero;
				}, i.prototype.readAndCheckSignature = function(e) {
					return e === this.readData(4);
				}, i.prototype.readData = function(e) {
					this.checkOffset(e);
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			21: [function(e, t, n) {
				var r = e("./ArrayReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.readData = function(e) {
					if (this.checkOffset(e), e === 0) return /* @__PURE__ */ new Uint8Array();
					var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./ArrayReader": 17
			}],
			22: [function(e, t, n) {
				var r = e("../utils"), i = e("../support"), a = e("./ArrayReader"), o = e("./StringReader"), s = e("./NodeBufferReader"), c = e("./Uint8ArrayReader");
				t.exports = function(e) {
					var t = r.getTypeOf(e);
					return r.checkSupport(t), t !== "string" || i.uint8array ? t === "nodebuffer" ? new s(e) : i.uint8array ? new c(r.transformTo("uint8array", e)) : new a(r.transformTo("array", e)) : new o(e);
				};
			}, {
				"../support": 30,
				"../utils": 32,
				"./ArrayReader": 17,
				"./NodeBufferReader": 19,
				"./StringReader": 20,
				"./Uint8ArrayReader": 21
			}],
			23: [function(e, t, n) {
				n.LOCAL_FILE_HEADER = "PK", n.CENTRAL_FILE_HEADER = "PK", n.CENTRAL_DIRECTORY_END = "PK", n.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", n.ZIP64_CENTRAL_DIRECTORY_END = "PK", n.DATA_DESCRIPTOR = "PK\x07\b";
			}, {}],
			24: [function(e, t, n) {
				var r = e("./GenericWorker"), i = e("../utils");
				function a(e) {
					r.call(this, "ConvertWorker to " + e), this.destType = e;
				}
				i.inherits(a, r), a.prototype.processChunk = function(e) {
					this.push({
						data: i.transformTo(this.destType, e.data),
						meta: e.meta
					});
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			25: [function(e, t, n) {
				var r = e("./GenericWorker"), i = e("../crc32");
				function a() {
					r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
				}
				e("../utils").inherits(a, r), a.prototype.processChunk = function(e) {
					this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0), this.push(e);
				}, t.exports = a;
			}, {
				"../crc32": 4,
				"../utils": 32,
				"./GenericWorker": 28
			}],
			26: [function(e, t, n) {
				var r = e("../utils"), i = e("./GenericWorker");
				function a(e) {
					i.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
				}
				r.inherits(a, i), a.prototype.processChunk = function(e) {
					if (e) {
						var t = this.streamInfo[this.propName] || 0;
						this.streamInfo[this.propName] = t + e.data.length;
					}
					i.prototype.processChunk.call(this, e);
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			27: [function(e, t, n) {
				var r = e("../utils"), i = e("./GenericWorker");
				function a(e) {
					i.call(this, "DataWorker");
					var t = this;
					this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function(e) {
						t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0, t.type = r.getTypeOf(e), t.isPaused || t._tickAndRepeat();
					}, function(e) {
						t.error(e);
					});
				}
				r.inherits(a, i), a.prototype.cleanUp = function() {
					i.prototype.cleanUp.call(this), this.data = null;
				}, a.prototype.resume = function() {
					return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, r.delay(this._tickAndRepeat, [], this)), !0);
				}, a.prototype._tickAndRepeat = function() {
					this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (r.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
				}, a.prototype._tick = function() {
					if (this.isPaused || this.isFinished) return !1;
					var e = null, t = Math.min(this.max, this.index + 16384);
					if (this.index >= this.max) return this.end();
					switch (this.type) {
						case "string":
							e = this.data.substring(this.index, t);
							break;
						case "uint8array":
							e = this.data.subarray(this.index, t);
							break;
						case "array":
						case "nodebuffer": e = this.data.slice(this.index, t);
					}
					return this.index = t, this.push({
						data: e,
						meta: { percent: this.max ? this.index / this.max * 100 : 0 }
					});
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			28: [function(e, t, n) {
				function r(e) {
					this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
						data: [],
						end: [],
						error: []
					}, this.previous = null;
				}
				r.prototype = {
					push: function(e) {
						this.emit("data", e);
					},
					end: function() {
						if (this.isFinished) return !1;
						this.flush();
						try {
							this.emit("end"), this.cleanUp(), this.isFinished = !0;
						} catch (e) {
							this.emit("error", e);
						}
						return !0;
					},
					error: function(e) {
						return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
					},
					on: function(e, t) {
						return this._listeners[e].push(t), this;
					},
					cleanUp: function() {
						this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
					},
					emit: function(e, t) {
						if (this._listeners[e]) for (var n = 0; n < this._listeners[e].length; n++) this._listeners[e][n].call(this, t);
					},
					pipe: function(e) {
						return e.registerPrevious(this);
					},
					registerPrevious: function(e) {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
						var t = this;
						return e.on("data", function(e) {
							t.processChunk(e);
						}), e.on("end", function() {
							t.end();
						}), e.on("error", function(e) {
							t.error(e);
						}), this;
					},
					pause: function() {
						return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
					},
					resume: function() {
						if (!this.isPaused || this.isFinished) return !1;
						var e = this.isPaused = !1;
						return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
					},
					flush: function() {},
					processChunk: function(e) {
						this.push(e);
					},
					withStreamInfo: function(e, t) {
						return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this;
					},
					mergeStreamInfo: function() {
						for (var e in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
					},
					lock: function() {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.isLocked = !0, this.previous && this.previous.lock();
					},
					toString: function() {
						var e = "Worker " + this.name;
						return this.previous ? this.previous + " -> " + e : e;
					}
				}, t.exports = r;
			}, {}],
			29: [function(e, t, n) {
				var r = e("../utils"), i = e("./ConvertWorker"), a = e("./GenericWorker"), o = e("../base64"), s = e("../support"), c = e("../external"), l = null;
				if (s.nodestream) try {
					l = e("../nodejs/NodejsStreamOutputAdapter");
				} catch {}
				function u(e, t) {
					return new c.Promise(function(n, i) {
						var a = [], s = e._internalType, c = e._outputType, l = e._mimeType;
						e.on("data", function(e, n) {
							a.push(e), t && t(n);
						}).on("error", function(e) {
							a = [], i(e);
						}).on("end", function() {
							try {
								n(function(e, t, n) {
									switch (e) {
										case "blob": return r.newBlob(r.transformTo("arraybuffer", t), n);
										case "base64": return o.encode(t);
										default: return r.transformTo(e, t);
									}
								}(c, function(e, t) {
									var n, r = 0, i = null, a = 0;
									for (n = 0; n < t.length; n++) a += t[n].length;
									switch (e) {
										case "string": return t.join("");
										case "array": return Array.prototype.concat.apply([], t);
										case "uint8array":
											for (i = new Uint8Array(a), n = 0; n < t.length; n++) i.set(t[n], r), r += t[n].length;
											return i;
										case "nodebuffer": return Buffer.concat(t);
										default: throw Error("concat : unsupported type '" + e + "'");
									}
								}(s, a), l));
							} catch (e) {
								i(e);
							}
							a = [];
						}).resume();
					});
				}
				function d(e, t, n) {
					var o = t;
					switch (t) {
						case "blob":
						case "arraybuffer":
							o = "uint8array";
							break;
						case "base64": o = "string";
					}
					try {
						this._internalType = o, this._outputType = t, this._mimeType = n, r.checkSupport(o), this._worker = e.pipe(new i(o)), e.lock();
					} catch (e) {
						this._worker = new a("error"), this._worker.error(e);
					}
				}
				d.prototype = {
					accumulate: function(e) {
						return u(this, e);
					},
					on: function(e, t) {
						var n = this;
						return e === "data" ? this._worker.on(e, function(e) {
							t.call(n, e.data, e.meta);
						}) : this._worker.on(e, function() {
							r.delay(t, arguments, n);
						}), this;
					},
					resume: function() {
						return r.delay(this._worker.resume, [], this._worker), this;
					},
					pause: function() {
						return this._worker.pause(), this;
					},
					toNodejsStream: function(e) {
						if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw Error(this._outputType + " is not supported by this method");
						return new l(this, { objectMode: this._outputType !== "nodebuffer" }, e);
					}
				}, t.exports = d;
			}, {
				"../base64": 1,
				"../external": 6,
				"../nodejs/NodejsStreamOutputAdapter": 13,
				"../support": 30,
				"../utils": 32,
				"./ConvertWorker": 24,
				"./GenericWorker": 28
			}],
			30: [function(e, t, n) {
				if (n.base64 = !0, n.array = !0, n.string = !0, n.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", n.nodebuffer = typeof Buffer < "u", n.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") n.blob = !1;
				else {
					var r = /* @__PURE__ */ new ArrayBuffer(0);
					try {
						n.blob = new Blob([r], { type: "application/zip" }).size === 0;
					} catch {
						try {
							var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							i.append(r), n.blob = i.getBlob("application/zip").size === 0;
						} catch {
							n.blob = !1;
						}
					}
				}
				try {
					n.nodestream = !!e("readable-stream").Readable;
				} catch {
					n.nodestream = !1;
				}
			}, { "readable-stream": 16 }],
			31: [function(e, t, n) {
				for (var r = e("./utils"), i = e("./support"), a = e("./nodejsUtils"), o = e("./stream/GenericWorker"), s = Array(256), c = 0; c < 256; c++) s[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
				s[254] = s[254] = 1;
				function l() {
					o.call(this, "utf-8 decode"), this.leftOver = null;
				}
				function u() {
					o.call(this, "utf-8 encode");
				}
				n.utf8encode = function(e) {
					return i.nodebuffer ? a.newBufferFrom(e, "utf-8") : function(e) {
						var t, n, r, a, o, s = e.length, c = 0;
						for (a = 0; a < s; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (r = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
						for (t = i.uint8array ? new Uint8Array(c) : Array(c), a = o = 0; o < c; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (r = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++), n < 128 ? t[o++] = n : (n < 2048 ? t[o++] = 192 | n >>> 6 : (n < 65536 ? t[o++] = 224 | n >>> 12 : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63), t[o++] = 128 | n >>> 6 & 63), t[o++] = 128 | 63 & n);
						return t;
					}(e);
				}, n.utf8decode = function(e) {
					return i.nodebuffer ? r.transformTo("nodebuffer", e).toString("utf-8") : function(e) {
						var t, n, i, a, o = e.length, c = Array(2 * o);
						for (t = n = 0; t < o;) if ((i = e[t++]) < 128) c[n++] = i;
						else if (4 < (a = s[i])) c[n++] = 65533, t += a - 1;
						else {
							for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; 1 < a && t < o;) i = i << 6 | 63 & e[t++], a--;
							1 < a ? c[n++] = 65533 : i < 65536 ? c[n++] = i : (i -= 65536, c[n++] = 55296 | i >> 10 & 1023, c[n++] = 56320 | 1023 & i);
						}
						return c.length !== n && (c.subarray ? c = c.subarray(0, n) : c.length = n), r.applyFromCharCode(c);
					}(e = r.transformTo(i.uint8array ? "uint8array" : "array", e));
				}, r.inherits(l, o), l.prototype.processChunk = function(e) {
					var t = r.transformTo(i.uint8array ? "uint8array" : "array", e.data);
					if (this.leftOver && this.leftOver.length) {
						if (i.uint8array) {
							var a = t;
							(t = new Uint8Array(a.length + this.leftOver.length)).set(this.leftOver, 0), t.set(a, this.leftOver.length);
						} else t = this.leftOver.concat(t);
						this.leftOver = null;
					}
					var o = function(e, t) {
						var n;
						for ((t ||= e.length) > e.length && (t = e.length), n = t - 1; 0 <= n && (192 & e[n]) == 128;) n--;
						return n < 0 || n === 0 ? t : n + s[e[n]] > t ? n : t;
					}(t), c = t;
					o !== t.length && (i.uint8array ? (c = t.subarray(0, o), this.leftOver = t.subarray(o, t.length)) : (c = t.slice(0, o), this.leftOver = t.slice(o, t.length))), this.push({
						data: n.utf8decode(c),
						meta: e.meta
					});
				}, l.prototype.flush = function() {
					this.leftOver && this.leftOver.length && (this.push({
						data: n.utf8decode(this.leftOver),
						meta: {}
					}), this.leftOver = null);
				}, n.Utf8DecodeWorker = l, r.inherits(u, o), u.prototype.processChunk = function(e) {
					this.push({
						data: n.utf8encode(e.data),
						meta: e.meta
					});
				}, n.Utf8EncodeWorker = u;
			}, {
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./support": 30,
				"./utils": 32
			}],
			32: [function(e, t, n) {
				var r = e("./support"), i = e("./base64"), a = e("./nodejsUtils"), o = e("./external");
				function s(e) {
					return e;
				}
				function c(e, t) {
					for (var n = 0; n < e.length; ++n) t[n] = 255 & e.charCodeAt(n);
					return t;
				}
				e("setimmediate"), n.newBlob = function(e, t) {
					n.checkSupport("blob");
					try {
						return new Blob([e], { type: t });
					} catch {
						try {
							var r = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							return r.append(e), r.getBlob(t);
						} catch {
							throw Error("Bug : can't construct the Blob.");
						}
					}
				};
				var l = {
					stringifyByChunk: function(e, t, n) {
						var r = [], i = 0, a = e.length;
						if (a <= n) return String.fromCharCode.apply(null, e);
						for (; i < a;) t === "array" || t === "nodebuffer" ? r.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + n, a)))) : r.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + n, a)))), i += n;
						return r.join("");
					},
					stringifyByChar: function(e) {
						for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
						return t;
					},
					applyCanBeUsed: {
						uint8array: function() {
							try {
								return r.uint8array && String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1)).length === 1;
							} catch {
								return !1;
							}
						}(),
						nodebuffer: function() {
							try {
								return r.nodebuffer && String.fromCharCode.apply(null, a.allocBuffer(1)).length === 1;
							} catch {
								return !1;
							}
						}()
					}
				};
				function u(e) {
					var t = 65536, r = n.getTypeOf(e), i = !0;
					if (r === "uint8array" ? i = l.applyCanBeUsed.uint8array : r === "nodebuffer" && (i = l.applyCanBeUsed.nodebuffer), i) for (; 1 < t;) try {
						return l.stringifyByChunk(e, r, t);
					} catch {
						t = Math.floor(t / 2);
					}
					return l.stringifyByChar(e);
				}
				function d(e, t) {
					for (var n = 0; n < e.length; n++) t[n] = e[n];
					return t;
				}
				n.applyFromCharCode = u;
				var f = {};
				f.string = {
					string: s,
					array: function(e) {
						return c(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return f.string.uint8array(e).buffer;
					},
					uint8array: function(e) {
						return c(e, new Uint8Array(e.length));
					},
					nodebuffer: function(e) {
						return c(e, a.allocBuffer(e.length));
					}
				}, f.array = {
					string: u,
					array: s,
					arraybuffer: function(e) {
						return new Uint8Array(e).buffer;
					},
					uint8array: function(e) {
						return new Uint8Array(e);
					},
					nodebuffer: function(e) {
						return a.newBufferFrom(e);
					}
				}, f.arraybuffer = {
					string: function(e) {
						return u(new Uint8Array(e));
					},
					array: function(e) {
						return d(new Uint8Array(e), Array(e.byteLength));
					},
					arraybuffer: s,
					uint8array: function(e) {
						return new Uint8Array(e);
					},
					nodebuffer: function(e) {
						return a.newBufferFrom(new Uint8Array(e));
					}
				}, f.uint8array = {
					string: u,
					array: function(e) {
						return d(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return e.buffer;
					},
					uint8array: s,
					nodebuffer: function(e) {
						return a.newBufferFrom(e);
					}
				}, f.nodebuffer = {
					string: u,
					array: function(e) {
						return d(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return f.nodebuffer.uint8array(e).buffer;
					},
					uint8array: function(e) {
						return d(e, new Uint8Array(e.length));
					},
					nodebuffer: s
				}, n.transformTo = function(e, t) {
					return t ||= "", e ? (n.checkSupport(e), f[n.getTypeOf(t)][e](t)) : t;
				}, n.resolve = function(e) {
					for (var t = e.split("/"), n = [], r = 0; r < t.length; r++) {
						var i = t[r];
						i === "." || i === "" && r !== 0 && r !== t.length - 1 || (i === ".." ? n.pop() : n.push(i));
					}
					return n.join("/");
				}, n.getTypeOf = function(e) {
					return typeof e == "string" ? "string" : Object.prototype.toString.call(e) === "[object Array]" ? "array" : r.nodebuffer && a.isBuffer(e) ? "nodebuffer" : r.uint8array && e instanceof Uint8Array ? "uint8array" : r.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
				}, n.checkSupport = function(e) {
					if (!r[e.toLowerCase()]) throw Error(e + " is not supported by this platform");
				}, n.MAX_VALUE_16BITS = 65535, n.MAX_VALUE_32BITS = -1, n.pretty = function(e) {
					var t, n, r = "";
					for (n = 0; n < (e || "").length; n++) r += "\\x" + ((t = e.charCodeAt(n)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
					return r;
				}, n.delay = function(e, t, n) {
					setImmediate(function() {
						e.apply(n || null, t || []);
					});
				}, n.inherits = function(e, t) {
					function n() {}
					n.prototype = t.prototype, e.prototype = new n();
				}, n.extend = function() {
					var e, t, n = {};
					for (e = 0; e < arguments.length; e++) for (t in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], t) && n[t] === void 0 && (n[t] = arguments[e][t]);
					return n;
				}, n.prepareContent = function(e, t, a, s, l) {
					return o.Promise.resolve(t).then(function(e) {
						return r.blob && (e instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(e)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(t, n) {
							var r = new FileReader();
							r.onload = function(e) {
								t(e.target.result);
							}, r.onerror = function(e) {
								n(e.target.error);
							}, r.readAsArrayBuffer(e);
						}) : e;
					}).then(function(t) {
						var u = n.getTypeOf(t);
						return u ? (u === "arraybuffer" ? t = n.transformTo("uint8array", t) : u === "string" && (l ? t = i.decode(t) : a && s !== !0 && (t = function(e) {
							return c(e, r.uint8array ? new Uint8Array(e.length) : Array(e.length));
						}(t))), t) : o.Promise.reject(/* @__PURE__ */ Error("Can't read the data of '" + e + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
					});
				};
			}, {
				"./base64": 1,
				"./external": 6,
				"./nodejsUtils": 14,
				"./support": 30,
				setimmediate: 54
			}],
			33: [function(e, t, n) {
				var r = e("./reader/readerFor"), i = e("./utils"), a = e("./signature"), o = e("./zipEntry"), s = e("./support");
				function c(e) {
					this.files = [], this.loadOptions = e;
				}
				c.prototype = {
					checkSignature: function(e) {
						if (!this.reader.readAndCheckSignature(e)) {
							this.reader.index -= 4;
							var t = this.reader.readString(4);
							throw Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")");
						}
					},
					isSignature: function(e, t) {
						var n = this.reader.index;
						this.reader.setIndex(e);
						var r = this.reader.readString(4) === t;
						return this.reader.setIndex(n), r;
					},
					readBlockEndOfCentral: function() {
						this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
						var e = this.reader.readData(this.zipCommentLength), t = s.uint8array ? "uint8array" : "array", n = i.transformTo(t, e);
						this.zipComment = this.loadOptions.decodeFileName(n);
					},
					readBlockZip64EndOfCentral: function() {
						this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
						for (var e, t, n, r = this.zip64EndOfCentralSize - 44; 0 < r;) e = this.reader.readInt(2), t = this.reader.readInt(4), n = this.reader.readData(t), this.zip64ExtensibleData[e] = {
							id: e,
							length: t,
							value: n
						};
					},
					readBlockZip64EndOfCentralLocator: function() {
						if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw Error("Multi-volumes zip are not supported");
					},
					readLocalFiles: function() {
						var e, t;
						for (e = 0; e < this.files.length; e++) t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes();
					},
					readCentralDir: function() {
						var e;
						for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);) (e = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
						if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
					},
					readEndOfCentral: function() {
						var e = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
						if (e < 0) throw this.isSignature(0, a.LOCAL_FILE_HEADER) ? /* @__PURE__ */ Error("Corrupted zip: can't find end of central directory") : /* @__PURE__ */ Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
						this.reader.setIndex(e);
						var t = e;
						if (this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
							if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
							if (this.reader.setIndex(e), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw Error("Corrupted zip: can't find the ZIP64 end of central directory");
							this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
						}
						var n = this.centralDirOffset + this.centralDirSize;
						this.zip64 && (n += 20, n += 12 + this.zip64EndOfCentralSize);
						var r = t - n;
						if (0 < r) this.isSignature(t, a.CENTRAL_FILE_HEADER) || (this.reader.zero = r);
						else if (r < 0) throw Error("Corrupted zip: missing " + Math.abs(r) + " bytes.");
					},
					prepareReader: function(e) {
						this.reader = r(e);
					},
					load: function(e) {
						this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
					}
				}, t.exports = c;
			}, {
				"./reader/readerFor": 22,
				"./signature": 23,
				"./support": 30,
				"./utils": 32,
				"./zipEntry": 34
			}],
			34: [function(e, t, n) {
				var r = e("./reader/readerFor"), i = e("./utils"), a = e("./compressedObject"), o = e("./crc32"), s = e("./utf8"), c = e("./compressions"), l = e("./support");
				function u(e, t) {
					this.options = e, this.loadOptions = t;
				}
				u.prototype = {
					isEncrypted: function() {
						return (1 & this.bitFlag) == 1;
					},
					useUTF8: function() {
						return (2048 & this.bitFlag) == 2048;
					},
					readLocalPart: function(e) {
						var t, n;
						if (e.skip(22), this.fileNameLength = e.readInt(2), n = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(n), this.compressedSize === -1 || this.uncompressedSize === -1) throw Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
						if ((t = function(e) {
							for (var t in c) if (Object.prototype.hasOwnProperty.call(c, t) && c[t].magic === e) return c[t];
							return null;
						}(this.compressionMethod)) === null) throw Error("Corrupted zip : compression " + i.pretty(this.compressionMethod) + " unknown (inner file : " + i.transformTo("string", this.fileName) + ")");
						this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize));
					},
					readCentralPart: function(e) {
						this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
						var t = e.readInt(2);
						if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw Error("Encrypted zip are not supported");
						e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
					},
					processAttributes: function() {
						this.unixPermissions = null, this.dosPermissions = null;
						var e = this.versionMadeBy >> 8;
						this.dir = !!(16 & this.externalFileAttributes), e == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), e == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
					},
					parseZIP64ExtraField: function() {
						if (this.extraFields[1]) {
							var e = r(this.extraFields[1].value);
							this.uncompressedSize === i.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === i.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === i.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === i.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
						}
					},
					readExtraFields: function(e) {
						var t, n, r, i = e.index + this.extraFieldsLength;
						for (this.extraFields ||= {}; e.index + 4 < i;) t = e.readInt(2), n = e.readInt(2), r = e.readData(n), this.extraFields[t] = {
							id: t,
							length: n,
							value: r
						};
						e.setIndex(i);
					},
					handleUTF8: function() {
						var e = l.uint8array ? "uint8array" : "array";
						if (this.useUTF8()) this.fileNameStr = s.utf8decode(this.fileName), this.fileCommentStr = s.utf8decode(this.fileComment);
						else {
							var t = this.findExtraFieldUnicodePath();
							if (t !== null) this.fileNameStr = t;
							else {
								var n = i.transformTo(e, this.fileName);
								this.fileNameStr = this.loadOptions.decodeFileName(n);
							}
							var r = this.findExtraFieldUnicodeComment();
							if (r !== null) this.fileCommentStr = r;
							else {
								var a = i.transformTo(e, this.fileComment);
								this.fileCommentStr = this.loadOptions.decodeFileName(a);
							}
						}
					},
					findExtraFieldUnicodePath: function() {
						var e = this.extraFields[28789];
						if (e) {
							var t = r(e.value);
							return t.readInt(1) !== 1 || o(this.fileName) !== t.readInt(4) ? null : s.utf8decode(t.readData(e.length - 5));
						}
						return null;
					},
					findExtraFieldUnicodeComment: function() {
						var e = this.extraFields[25461];
						if (e) {
							var t = r(e.value);
							return t.readInt(1) !== 1 || o(this.fileComment) !== t.readInt(4) ? null : s.utf8decode(t.readData(e.length - 5));
						}
						return null;
					}
				}, t.exports = u;
			}, {
				"./compressedObject": 2,
				"./compressions": 3,
				"./crc32": 4,
				"./reader/readerFor": 22,
				"./support": 30,
				"./utf8": 31,
				"./utils": 32
			}],
			35: [function(e, t, n) {
				function r(e, t, n) {
					this.name = e, this.dir = n.dir, this.date = n.date, this.comment = n.comment, this.unixPermissions = n.unixPermissions, this.dosPermissions = n.dosPermissions, this._data = t, this._dataBinary = n.binary, this.options = {
						compression: n.compression,
						compressionOptions: n.compressionOptions
					};
				}
				var i = e("./stream/StreamHelper"), a = e("./stream/DataWorker"), o = e("./utf8"), s = e("./compressedObject"), c = e("./stream/GenericWorker");
				r.prototype = {
					internalStream: function(e) {
						var t = null, n = "string";
						try {
							if (!e) throw Error("No output type specified.");
							var r = (n = e.toLowerCase()) === "string" || n === "text";
							n !== "binarystring" && n !== "text" || (n = "string"), t = this._decompressWorker();
							var a = !this._dataBinary;
							a && !r && (t = t.pipe(new o.Utf8EncodeWorker())), !a && r && (t = t.pipe(new o.Utf8DecodeWorker()));
						} catch (e) {
							(t = new c("error")).error(e);
						}
						return new i(t, n, "");
					},
					async: function(e, t) {
						return this.internalStream(e).accumulate(t);
					},
					nodeStream: function(e, t) {
						return this.internalStream(e || "nodebuffer").toNodejsStream(t);
					},
					_compressWorker: function(e, t) {
						if (this._data instanceof s && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
						var n = this._decompressWorker();
						return this._dataBinary || (n = n.pipe(new o.Utf8EncodeWorker())), s.createWorkerFrom(n, e, t);
					},
					_decompressWorker: function() {
						return this._data instanceof s ? this._data.getContentWorker() : this._data instanceof c ? this._data : new a(this._data);
					}
				};
				for (var l = [
					"asText",
					"asBinary",
					"asNodeBuffer",
					"asUint8Array",
					"asArrayBuffer"
				], u = function() {
					throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
				}, d = 0; d < l.length; d++) r.prototype[l[d]] = u;
				t.exports = r;
			}, {
				"./compressedObject": 2,
				"./stream/DataWorker": 27,
				"./stream/GenericWorker": 28,
				"./stream/StreamHelper": 29,
				"./utf8": 31
			}],
			36: [function(e, t, n) {
				(function(e) {
					var n, r, i = e.MutationObserver || e.WebKitMutationObserver;
					if (i) {
						var a = 0, o = new i(u), s = e.document.createTextNode("");
						o.observe(s, { characterData: !0 }), n = function() {
							s.data = a = ++a % 2;
						};
					} else if (e.setImmediate || e.MessageChannel === void 0) n = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
						var t = e.document.createElement("script");
						t.onreadystatechange = function() {
							u(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
						}, e.document.documentElement.appendChild(t);
					} : function() {
						setTimeout(u, 0);
					};
					else {
						var c = new e.MessageChannel();
						c.port1.onmessage = u, n = function() {
							c.port2.postMessage(0);
						};
					}
					var l = [];
					function u() {
						var e, t;
						r = !0;
						for (var n = l.length; n;) {
							for (t = l, l = [], e = -1; ++e < n;) t[e]();
							n = l.length;
						}
						r = !1;
					}
					t.exports = function(e) {
						l.push(e) !== 1 || r || n();
					};
				}).call(this, typeof iu < "u" ? iu : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}],
			37: [function(e, t, n) {
				var r = e("immediate");
				function i() {}
				var a = {}, o = ["REJECTED"], s = ["FULFILLED"], c = ["PENDING"];
				function l(e) {
					if (typeof e != "function") throw TypeError("resolver must be a function");
					this.state = c, this.queue = [], this.outcome = void 0, e !== i && p(this, e);
				}
				function u(e, t, n) {
					this.promise = e, typeof t == "function" && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), typeof n == "function" && (this.onRejected = n, this.callRejected = this.otherCallRejected);
				}
				function d(e, t, n) {
					r(function() {
						var r;
						try {
							r = t(n);
						} catch (t) {
							return a.reject(e, t);
						}
						r === e ? a.reject(e, /* @__PURE__ */ TypeError("Cannot resolve promise with itself")) : a.resolve(e, r);
					});
				}
				function f(e) {
					var t = e && e.then;
					if (e && (typeof e == "object" || typeof e == "function") && typeof t == "function") return function() {
						t.apply(e, arguments);
					};
				}
				function p(e, t) {
					var n = !1;
					function r(t) {
						n || (n = !0, a.reject(e, t));
					}
					function i(t) {
						n || (n = !0, a.resolve(e, t));
					}
					var o = m(function() {
						t(i, r);
					});
					o.status === "error" && r(o.value);
				}
				function m(e, t) {
					var n = {};
					try {
						n.value = e(t), n.status = "success";
					} catch (e) {
						n.status = "error", n.value = e;
					}
					return n;
				}
				(t.exports = l).prototype.finally = function(e) {
					if (typeof e != "function") return this;
					var t = this.constructor;
					return this.then(function(n) {
						return t.resolve(e()).then(function() {
							return n;
						});
					}, function(n) {
						return t.resolve(e()).then(function() {
							throw n;
						});
					});
				}, l.prototype.catch = function(e) {
					return this.then(null, e);
				}, l.prototype.then = function(e, t) {
					if (typeof e != "function" && this.state === s || typeof t != "function" && this.state === o) return this;
					var n = new this.constructor(i);
					return this.state === c ? this.queue.push(new u(n, e, t)) : d(n, this.state === s ? e : t, this.outcome), n;
				}, u.prototype.callFulfilled = function(e) {
					a.resolve(this.promise, e);
				}, u.prototype.otherCallFulfilled = function(e) {
					d(this.promise, this.onFulfilled, e);
				}, u.prototype.callRejected = function(e) {
					a.reject(this.promise, e);
				}, u.prototype.otherCallRejected = function(e) {
					d(this.promise, this.onRejected, e);
				}, a.resolve = function(e, t) {
					var n = m(f, t);
					if (n.status === "error") return a.reject(e, n.value);
					var r = n.value;
					if (r) p(e, r);
					else {
						e.state = s, e.outcome = t;
						for (var i = -1, o = e.queue.length; ++i < o;) e.queue[i].callFulfilled(t);
					}
					return e;
				}, a.reject = function(e, t) {
					e.state = o, e.outcome = t;
					for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
					return e;
				}, l.resolve = function(e) {
					return e instanceof this ? e : a.resolve(new this(i), e);
				}, l.reject = function(e) {
					var t = new this(i);
					return a.reject(t, e);
				}, l.all = function(e) {
					var t = this;
					if (Object.prototype.toString.call(e) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var n = e.length, r = !1;
					if (!n) return this.resolve([]);
					for (var o = Array(n), s = 0, c = -1, l = new this(i); ++c < n;) u(e[c], c);
					return l;
					function u(e, i) {
						t.resolve(e).then(function(e) {
							o[i] = e, ++s !== n || r || (r = !0, a.resolve(l, o));
						}, function(e) {
							r || (r = !0, a.reject(l, e));
						});
					}
				}, l.race = function(e) {
					var t = this;
					if (Object.prototype.toString.call(e) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var n = e.length, r = !1;
					if (!n) return this.resolve([]);
					for (var o = -1, s = new this(i); ++o < n;) c = e[o], t.resolve(c).then(function(e) {
						r || (r = !0, a.resolve(s, e));
					}, function(e) {
						r || (r = !0, a.reject(s, e));
					});
					var c;
					return s;
				};
			}, { immediate: 36 }],
			38: [function(e, t, n) {
				var r = {};
				(0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = r;
			}, {
				"./lib/deflate": 39,
				"./lib/inflate": 40,
				"./lib/utils/common": 41,
				"./lib/zlib/constants": 44
			}],
			39: [function(e, t, n) {
				var r = e("./zlib/deflate"), i = e("./utils/common"), a = e("./utils/strings"), o = e("./zlib/messages"), s = e("./zlib/zstream"), c = Object.prototype.toString, l = 0, u = -1, d = 0, f = 8;
				function p(e) {
					if (!(this instanceof p)) return new p(e);
					this.options = i.assign({
						level: u,
						method: f,
						chunkSize: 16384,
						windowBits: 15,
						memLevel: 8,
						strategy: d,
						to: ""
					}, e || {});
					var t = this.options;
					t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
					var n = r.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
					if (n !== l) throw Error(o[n]);
					if (t.header && r.deflateSetHeader(this.strm, t.header), t.dictionary) {
						var m;
						if (m = typeof t.dictionary == "string" ? a.string2buf(t.dictionary) : c.call(t.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(t.dictionary) : t.dictionary, (n = r.deflateSetDictionary(this.strm, m)) !== l) throw Error(o[n]);
						this._dict_set = !0;
					}
				}
				function m(e, t) {
					var n = new p(t);
					if (n.push(e, !0), n.err) throw n.msg || o[n.err];
					return n.result;
				}
				p.prototype.push = function(e, t) {
					var n, o, s = this.strm, u = this.options.chunkSize;
					if (this.ended) return !1;
					o = t === ~~t ? t : t === !0 ? 4 : 0, typeof e == "string" ? s.input = a.string2buf(e) : c.call(e) === "[object ArrayBuffer]" ? s.input = new Uint8Array(e) : s.input = e, s.next_in = 0, s.avail_in = s.input.length;
					do {
						if (s.avail_out === 0 && (s.output = new i.Buf8(u), s.next_out = 0, s.avail_out = u), (n = r.deflate(s, o)) !== 1 && n !== l) return this.onEnd(n), !(this.ended = !0);
						s.avail_out !== 0 && (s.avail_in !== 0 || o !== 4 && o !== 2) || (this.options.to === "string" ? this.onData(a.buf2binstring(i.shrinkBuf(s.output, s.next_out))) : this.onData(i.shrinkBuf(s.output, s.next_out)));
					} while ((0 < s.avail_in || s.avail_out === 0) && n !== 1);
					return o === 4 ? (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === l) : o !== 2 || (this.onEnd(l), !(s.avail_out = 0));
				}, p.prototype.onData = function(e) {
					this.chunks.push(e);
				}, p.prototype.onEnd = function(e) {
					e === l && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
				}, n.Deflate = p, n.deflate = m, n.deflateRaw = function(e, t) {
					return (t ||= {}).raw = !0, m(e, t);
				}, n.gzip = function(e, t) {
					return (t ||= {}).gzip = !0, m(e, t);
				};
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/deflate": 46,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			40: [function(e, t, n) {
				var r = e("./zlib/inflate"), i = e("./utils/common"), a = e("./utils/strings"), o = e("./zlib/constants"), s = e("./zlib/messages"), c = e("./zlib/zstream"), l = e("./zlib/gzheader"), u = Object.prototype.toString;
				function d(e) {
					if (!(this instanceof d)) return new d(e);
					this.options = i.assign({
						chunkSize: 16384,
						windowBits: 0,
						to: ""
					}, e || {});
					var t = this.options;
					t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && !(15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
					var n = r.inflateInit2(this.strm, t.windowBits);
					if (n !== o.Z_OK) throw Error(s[n]);
					this.header = new l(), r.inflateGetHeader(this.strm, this.header);
				}
				function f(e, t) {
					var n = new d(t);
					if (n.push(e, !0), n.err) throw n.msg || s[n.err];
					return n.result;
				}
				d.prototype.push = function(e, t) {
					var n, s, c, l, d, f, p = this.strm, m = this.options.chunkSize, h = this.options.dictionary, g = !1;
					if (this.ended) return !1;
					s = t === ~~t ? t : t === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof e == "string" ? p.input = a.binstring2buf(e) : u.call(e) === "[object ArrayBuffer]" ? p.input = new Uint8Array(e) : p.input = e, p.next_in = 0, p.avail_in = p.input.length;
					do {
						if (p.avail_out === 0 && (p.output = new i.Buf8(m), p.next_out = 0, p.avail_out = m), (n = r.inflate(p, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && h && (f = typeof h == "string" ? a.string2buf(h) : u.call(h) === "[object ArrayBuffer]" ? new Uint8Array(h) : h, n = r.inflateSetDictionary(this.strm, f)), n === o.Z_BUF_ERROR && g === !0 && (n = o.Z_OK, g = !1), n !== o.Z_STREAM_END && n !== o.Z_OK) return this.onEnd(n), !(this.ended = !0);
						p.next_out && (p.avail_out !== 0 && n !== o.Z_STREAM_END && (p.avail_in !== 0 || s !== o.Z_FINISH && s !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (c = a.utf8border(p.output, p.next_out), l = p.next_out - c, d = a.buf2string(p.output, c), p.next_out = l, p.avail_out = m - l, l && i.arraySet(p.output, p.output, c, l, 0), this.onData(d)) : this.onData(i.shrinkBuf(p.output, p.next_out)))), p.avail_in === 0 && p.avail_out === 0 && (g = !0);
					} while ((0 < p.avail_in || p.avail_out === 0) && n !== o.Z_STREAM_END);
					return n === o.Z_STREAM_END && (s = o.Z_FINISH), s === o.Z_FINISH ? (n = r.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === o.Z_OK) : s !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(p.avail_out = 0));
				}, d.prototype.onData = function(e) {
					this.chunks.push(e);
				}, d.prototype.onEnd = function(e) {
					e === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
				}, n.Inflate = d, n.inflate = f, n.inflateRaw = function(e, t) {
					return (t ||= {}).raw = !0, f(e, t);
				}, n.ungzip = f;
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/constants": 44,
				"./zlib/gzheader": 47,
				"./zlib/inflate": 49,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			41: [function(e, t, n) {
				var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
				n.assign = function(e) {
					for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
						var n = t.shift();
						if (n) {
							if (typeof n != "object") throw TypeError(n + "must be non-object");
							for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
						}
					}
					return e;
				}, n.shrinkBuf = function(e, t) {
					return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
				};
				var i = {
					arraySet: function(e, t, n, r, i) {
						if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i);
						else for (var a = 0; a < r; a++) e[i + a] = t[n + a];
					},
					flattenChunks: function(e) {
						var t, n, r, i, a, o;
						for (t = r = 0, n = e.length; t < n; t++) r += e[t].length;
						for (o = new Uint8Array(r), t = i = 0, n = e.length; t < n; t++) a = e[t], o.set(a, i), i += a.length;
						return o;
					}
				}, a = {
					arraySet: function(e, t, n, r, i) {
						for (var a = 0; a < r; a++) e[i + a] = t[n + a];
					},
					flattenChunks: function(e) {
						return [].concat.apply([], e);
					}
				};
				n.setTyped = function(e) {
					e ? (n.Buf8 = Uint8Array, n.Buf16 = Uint16Array, n.Buf32 = Int32Array, n.assign(n, i)) : (n.Buf8 = Array, n.Buf16 = Array, n.Buf32 = Array, n.assign(n, a));
				}, n.setTyped(r);
			}, {}],
			42: [function(e, t, n) {
				var r = e("./common"), i = !0, a = !0;
				try {
					String.fromCharCode.apply(null, [0]);
				} catch {
					i = !1;
				}
				try {
					String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
				} catch {
					a = !1;
				}
				for (var o = new r.Buf8(256), s = 0; s < 256; s++) o[s] = 252 <= s ? 6 : 248 <= s ? 5 : 240 <= s ? 4 : 224 <= s ? 3 : 192 <= s ? 2 : 1;
				function c(e, t) {
					if (t < 65537 && (e.subarray && a || !e.subarray && i)) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
					for (var n = "", o = 0; o < t; o++) n += String.fromCharCode(e[o]);
					return n;
				}
				o[254] = o[254] = 1, n.string2buf = function(e) {
					var t, n, i, a, o, s = e.length, c = 0;
					for (a = 0; a < s; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), a++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
					for (t = new r.Buf8(c), a = o = 0; o < c; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), a++), n < 128 ? t[o++] = n : (n < 2048 ? t[o++] = 192 | n >>> 6 : (n < 65536 ? t[o++] = 224 | n >>> 12 : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63), t[o++] = 128 | n >>> 6 & 63), t[o++] = 128 | 63 & n);
					return t;
				}, n.buf2binstring = function(e) {
					return c(e, e.length);
				}, n.binstring2buf = function(e) {
					for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
					return t;
				}, n.buf2string = function(e, t) {
					var n, r, i, a, s = t || e.length, l = Array(2 * s);
					for (n = r = 0; n < s;) if ((i = e[n++]) < 128) l[r++] = i;
					else if (4 < (a = o[i])) l[r++] = 65533, n += a - 1;
					else {
						for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; 1 < a && n < s;) i = i << 6 | 63 & e[n++], a--;
						1 < a ? l[r++] = 65533 : i < 65536 ? l[r++] = i : (i -= 65536, l[r++] = 55296 | i >> 10 & 1023, l[r++] = 56320 | 1023 & i);
					}
					return c(l, r);
				}, n.utf8border = function(e, t) {
					var n;
					for ((t ||= e.length) > e.length && (t = e.length), n = t - 1; 0 <= n && (192 & e[n]) == 128;) n--;
					return n < 0 || n === 0 ? t : n + o[e[n]] > t ? n : t;
				};
			}, { "./common": 41 }],
			43: [function(e, t, n) {
				t.exports = function(e, t, n, r) {
					for (var i = 65535 & e | 0, a = e >>> 16 & 65535 | 0, o = 0; n !== 0;) {
						for (n -= o = 2e3 < n ? 2e3 : n; a = a + (i = i + t[r++] | 0) | 0, --o;);
						i %= 65521, a %= 65521;
					}
					return i | a << 16 | 0;
				};
			}, {}],
			44: [function(e, t, n) {
				t.exports = {
					Z_NO_FLUSH: 0,
					Z_PARTIAL_FLUSH: 1,
					Z_SYNC_FLUSH: 2,
					Z_FULL_FLUSH: 3,
					Z_FINISH: 4,
					Z_BLOCK: 5,
					Z_TREES: 6,
					Z_OK: 0,
					Z_STREAM_END: 1,
					Z_NEED_DICT: 2,
					Z_ERRNO: -1,
					Z_STREAM_ERROR: -2,
					Z_DATA_ERROR: -3,
					Z_BUF_ERROR: -5,
					Z_NO_COMPRESSION: 0,
					Z_BEST_SPEED: 1,
					Z_BEST_COMPRESSION: 9,
					Z_DEFAULT_COMPRESSION: -1,
					Z_FILTERED: 1,
					Z_HUFFMAN_ONLY: 2,
					Z_RLE: 3,
					Z_FIXED: 4,
					Z_DEFAULT_STRATEGY: 0,
					Z_BINARY: 0,
					Z_TEXT: 1,
					Z_UNKNOWN: 2,
					Z_DEFLATED: 8
				};
			}, {}],
			45: [function(e, t, n) {
				var r = function() {
					for (var e, t = [], n = 0; n < 256; n++) {
						e = n;
						for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
						t[n] = e;
					}
					return t;
				}();
				t.exports = function(e, t, n, i) {
					var a = r, o = i + n;
					e ^= -1;
					for (var s = i; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];
					return -1 ^ e;
				};
			}, {}],
			46: [function(e, t, n) {
				var r, i = e("../utils/common"), a = e("./trees"), o = e("./adler32"), s = e("./crc32"), c = e("./messages"), l = 0, u = 4, d = 0, f = -2, p = -1, m = 4, h = 2, g = 8, _ = 9, v = 286, y = 30, b = 19, x = 2 * v + 1, S = 15, C = 3, w = 258, T = w + C + 1, E = 42, D = 113, O = 1, k = 2, A = 3, j = 4;
				function M(e, t) {
					return e.msg = c[t], t;
				}
				function N(e) {
					return (e << 1) - (4 < e ? 9 : 0);
				}
				function ee(e) {
					for (var t = e.length; 0 <= --t;) e[t] = 0;
				}
				function P(e) {
					var t = e.state, n = t.pending;
					n > e.avail_out && (n = e.avail_out), n !== 0 && (i.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, t.pending === 0 && (t.pending_out = 0));
				}
				function F(e, t) {
					a._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, P(e.strm);
				}
				function I(e, t) {
					e.pending_buf[e.pending++] = t;
				}
				function L(e, t) {
					e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
				}
				function R(e, t) {
					var n, r, i = e.max_chain_length, a = e.strstart, o = e.prev_length, s = e.nice_match, c = e.strstart > e.w_size - T ? e.strstart - (e.w_size - T) : 0, l = e.window, u = e.w_mask, d = e.prev, f = e.strstart + w, p = l[a + o - 1], m = l[a + o];
					e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead);
					do
						if (l[(n = t) + o] === m && l[n + o - 1] === p && l[n] === l[a] && l[++n] === l[a + 1]) {
							a += 2, n++;
							do							;
while (l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && a < f);
							if (r = w - (f - a), a = f - w, o < r) {
								if (e.match_start = t, s <= (o = r)) break;
								p = l[a + o - 1], m = l[a + o];
							}
						}
					while ((t = d[t & u]) > c && --i != 0);
					return o <= e.lookahead ? o : e.lookahead;
				}
				function te(e) {
					var t, n, r, a, c, l, u, d, f, p, m = e.w_size;
					do {
						if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= m + (m - T)) {
							for (i.arraySet(e.window, e.window, m, m, 0), e.match_start -= m, e.strstart -= m, e.block_start -= m, t = n = e.hash_size; r = e.head[--t], e.head[t] = m <= r ? r - m : 0, --n;);
							for (t = n = m; r = e.prev[--t], e.prev[t] = m <= r ? r - m : 0, --n;);
							a += m;
						}
						if (e.strm.avail_in === 0) break;
						if (l = e.strm, u = e.window, d = e.strstart + e.lookahead, f = a, p = void 0, p = l.avail_in, f < p && (p = f), n = p === 0 ? 0 : (l.avail_in -= p, i.arraySet(u, l.input, l.next_in, p, d), l.state.wrap === 1 ? l.adler = o(l.adler, u, p, d) : l.state.wrap === 2 && (l.adler = s(l.adler, u, p, d)), l.next_in += p, l.total_in += p, p), e.lookahead += n, e.lookahead + e.insert >= C) for (c = e.strstart - e.insert, e.ins_h = e.window[c], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + C - 1]) & e.hash_mask, e.prev[c & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = c, c++, e.insert--, !(e.lookahead + e.insert < C)););
					} while (e.lookahead < T && e.strm.avail_in !== 0);
				}
				function ne(e, t) {
					for (var n, r;;) {
						if (e.lookahead < T) {
							if (te(e), e.lookahead < T && t === l) return O;
							if (e.lookahead === 0) break;
						}
						if (n = 0, e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), n !== 0 && e.strstart - n <= e.w_size - T && (e.match_length = R(e, n)), e.match_length >= C) if (r = a._tr_tally(e, e.strstart - e.match_start, e.match_length - C), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= C) {
							for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, --e.match_length != 0;);
							e.strstart++;
						} else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
						else r = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
						if (r && (F(e, !1), e.strm.avail_out === 0)) return O;
					}
					return e.insert = e.strstart < C - 1 ? e.strstart : C - 1, t === u ? (F(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (F(e, !1), e.strm.avail_out === 0) ? O : k;
				}
				function re(e, t) {
					for (var n, r, i;;) {
						if (e.lookahead < T) {
							if (te(e), e.lookahead < T && t === l) return O;
							if (e.lookahead === 0) break;
						}
						if (n = 0, e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = C - 1, n !== 0 && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - T && (e.match_length = R(e, n), e.match_length <= 5 && (e.strategy === 1 || e.match_length === C && 4096 < e.strstart - e.match_start) && (e.match_length = C - 1)), e.prev_length >= C && e.match_length <= e.prev_length) {
							for (i = e.strstart + e.lookahead - C, r = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - C), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), --e.prev_length != 0;);
							if (e.match_available = 0, e.match_length = C - 1, e.strstart++, r && (F(e, !1), e.strm.avail_out === 0)) return O;
						} else if (e.match_available) {
							if ((r = a._tr_tally(e, 0, e.window[e.strstart - 1])) && F(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return O;
						} else e.match_available = 1, e.strstart++, e.lookahead--;
					}
					return e.match_available &&= (r = a._tr_tally(e, 0, e.window[e.strstart - 1]), 0), e.insert = e.strstart < C - 1 ? e.strstart : C - 1, t === u ? (F(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (F(e, !1), e.strm.avail_out === 0) ? O : k;
				}
				function ie(e, t, n, r, i) {
					this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = i;
				}
				function ae() {
					this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = g, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new i.Buf16(2 * x), this.dyn_dtree = new i.Buf16(2 * (2 * y + 1)), this.bl_tree = new i.Buf16(2 * (2 * b + 1)), ee(this.dyn_ltree), ee(this.dyn_dtree), ee(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i.Buf16(S + 1), this.heap = new i.Buf16(2 * v + 1), ee(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new i.Buf16(2 * v + 1), ee(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
				}
				function oe(e) {
					var t;
					return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = h, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? E : D, e.adler = t.wrap === 2 ? 0 : 1, t.last_flush = l, a._tr_init(t), d) : M(e, f);
				}
				function se(e) {
					var t = oe(e);
					return t === d && function(e) {
						e.window_size = 2 * e.w_size, ee(e.head), e.max_lazy_match = r[e.level].max_lazy, e.good_match = r[e.level].good_length, e.nice_match = r[e.level].nice_length, e.max_chain_length = r[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = C - 1, e.match_available = 0, e.ins_h = 0;
					}(e.state), t;
				}
				function ce(e, t, n, r, a, o) {
					if (!e) return f;
					var s = 1;
					if (t === p && (t = 6), r < 0 ? (s = 0, r = -r) : 15 < r && (s = 2, r -= 16), a < 1 || _ < a || n !== g || r < 8 || 15 < r || t < 0 || 9 < t || o < 0 || m < o) return M(e, f);
					r === 8 && (r = 9);
					var c = new ae();
					return (e.state = c).strm = e, c.wrap = s, c.gzhead = null, c.w_bits = r, c.w_size = 1 << c.w_bits, c.w_mask = c.w_size - 1, c.hash_bits = a + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, c.hash_shift = ~~((c.hash_bits + C - 1) / C), c.window = new i.Buf8(2 * c.w_size), c.head = new i.Buf16(c.hash_size), c.prev = new i.Buf16(c.w_size), c.lit_bufsize = 1 << a + 6, c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new i.Buf8(c.pending_buf_size), c.d_buf = 1 * c.lit_bufsize, c.l_buf = 3 * c.lit_bufsize, c.level = t, c.strategy = o, c.method = n, se(e);
				}
				r = [
					new ie(0, 0, 0, 0, function(e, t) {
						var n = 65535;
						for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
							if (e.lookahead <= 1) {
								if (te(e), e.lookahead === 0 && t === l) return O;
								if (e.lookahead === 0) break;
							}
							e.strstart += e.lookahead, e.lookahead = 0;
							var r = e.block_start + n;
							if ((e.strstart === 0 || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, F(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - T && (F(e, !1), e.strm.avail_out === 0)) return O;
						}
						return e.insert = 0, t === u ? (F(e, !0), e.strm.avail_out === 0 ? A : j) : (e.strstart > e.block_start && (F(e, !1), e.strm.avail_out), O);
					}),
					new ie(4, 4, 8, 4, ne),
					new ie(4, 5, 16, 8, ne),
					new ie(4, 6, 32, 32, ne),
					new ie(4, 4, 16, 16, re),
					new ie(8, 16, 32, 32, re),
					new ie(8, 16, 128, 128, re),
					new ie(8, 32, 128, 256, re),
					new ie(32, 128, 258, 1024, re),
					new ie(32, 258, 258, 4096, re)
				], n.deflateInit = function(e, t) {
					return ce(e, t, g, 15, 8, 0);
				}, n.deflateInit2 = ce, n.deflateReset = se, n.deflateResetKeep = oe, n.deflateSetHeader = function(e, t) {
					return e && e.state && e.state.wrap === 2 ? (e.state.gzhead = t, d) : f;
				}, n.deflate = function(e, t) {
					var n, i, o, c;
					if (!e || !e.state || 5 < t || t < 0) return e ? M(e, f) : f;
					if (i = e.state, !e.output || !e.input && e.avail_in !== 0 || i.status === 666 && t !== u) return M(e, e.avail_out === 0 ? -5 : f);
					if (i.strm = e, n = i.last_flush, i.last_flush = t, i.status === E) if (i.wrap === 2) e.adler = 0, I(i, 31), I(i, 139), I(i, 8), i.gzhead ? (I(i, +!!i.gzhead.text + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), I(i, 255 & i.gzhead.time), I(i, i.gzhead.time >> 8 & 255), I(i, i.gzhead.time >> 16 & 255), I(i, i.gzhead.time >> 24 & 255), I(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), I(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (I(i, 255 & i.gzhead.extra.length), I(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (e.adler = s(e.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69) : (I(i, 0), I(i, 0), I(i, 0), I(i, 0), I(i, 0), I(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), I(i, 3), i.status = D);
					else {
						var p = g + (i.w_bits - 8 << 4) << 8;
						p |= (2 <= i.strategy || i.level < 2 ? 0 : i.level < 6 ? 1 : i.level === 6 ? 2 : 3) << 6, i.strstart !== 0 && (p |= 32), p += 31 - p % 31, i.status = D, L(i, p), i.strstart !== 0 && (L(i, e.adler >>> 16), L(i, 65535 & e.adler)), e.adler = 1;
					}
					if (i.status === 69) if (i.gzhead.extra) {
						for (o = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), P(e), o = i.pending, i.pending !== i.pending_buf_size));) I(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
						i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = 73);
					} else i.status = 73;
					if (i.status === 73) if (i.gzhead.name) {
						o = i.pending;
						do {
							if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), P(e), o = i.pending, i.pending === i.pending_buf_size)) {
								c = 1;
								break;
							}
							c = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, I(i, c);
						} while (c !== 0);
						i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), c === 0 && (i.gzindex = 0, i.status = 91);
					} else i.status = 91;
					if (i.status === 91) if (i.gzhead.comment) {
						o = i.pending;
						do {
							if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), P(e), o = i.pending, i.pending === i.pending_buf_size)) {
								c = 1;
								break;
							}
							c = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, I(i, c);
						} while (c !== 0);
						i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), c === 0 && (i.status = 103);
					} else i.status = 103;
					if (i.status === 103 && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && P(e), i.pending + 2 <= i.pending_buf_size && (I(i, 255 & e.adler), I(i, e.adler >> 8 & 255), e.adler = 0, i.status = D)) : i.status = D), i.pending !== 0) {
						if (P(e), e.avail_out === 0) return i.last_flush = -1, d;
					} else if (e.avail_in === 0 && N(t) <= N(n) && t !== u) return M(e, -5);
					if (i.status === 666 && e.avail_in !== 0) return M(e, -5);
					if (e.avail_in !== 0 || i.lookahead !== 0 || t !== l && i.status !== 666) {
						var m = i.strategy === 2 ? function(e, t) {
							for (var n;;) {
								if (e.lookahead === 0 && (te(e), e.lookahead === 0)) {
									if (t === l) return O;
									break;
								}
								if (e.match_length = 0, n = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (F(e, !1), e.strm.avail_out === 0)) return O;
							}
							return e.insert = 0, t === u ? (F(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (F(e, !1), e.strm.avail_out === 0) ? O : k;
						}(i, t) : i.strategy === 3 ? function(e, t) {
							for (var n, r, i, o, s = e.window;;) {
								if (e.lookahead <= w) {
									if (te(e), e.lookahead <= w && t === l) return O;
									if (e.lookahead === 0) break;
								}
								if (e.match_length = 0, e.lookahead >= C && 0 < e.strstart && (r = s[i = e.strstart - 1]) === s[++i] && r === s[++i] && r === s[++i]) {
									o = e.strstart + w;
									do									;
while (r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && i < o);
									e.match_length = w - (o - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
								}
								if (e.match_length >= C ? (n = a._tr_tally(e, 1, e.match_length - C), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (F(e, !1), e.strm.avail_out === 0)) return O;
							}
							return e.insert = 0, t === u ? (F(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (F(e, !1), e.strm.avail_out === 0) ? O : k;
						}(i, t) : r[i.level].func(i, t);
						if (m !== A && m !== j || (i.status = 666), m === O || m === A) return e.avail_out === 0 && (i.last_flush = -1), d;
						if (m === k && (t === 1 ? a._tr_align(i) : t !== 5 && (a._tr_stored_block(i, 0, 0, !1), t === 3 && (ee(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), P(e), e.avail_out === 0)) return i.last_flush = -1, d;
					}
					return t === u ? i.wrap <= 0 ? 1 : (i.wrap === 2 ? (I(i, 255 & e.adler), I(i, e.adler >> 8 & 255), I(i, e.adler >> 16 & 255), I(i, e.adler >> 24 & 255), I(i, 255 & e.total_in), I(i, e.total_in >> 8 & 255), I(i, e.total_in >> 16 & 255), I(i, e.total_in >> 24 & 255)) : (L(i, e.adler >>> 16), L(i, 65535 & e.adler)), P(e), 0 < i.wrap && (i.wrap = -i.wrap), i.pending === 0 ? 1 : d) : d;
				}, n.deflateEnd = function(e) {
					var t;
					return e && e.state ? (t = e.state.status) !== E && t !== 69 && t !== 73 && t !== 91 && t !== 103 && t !== D && t !== 666 ? M(e, f) : (e.state = null, t === D ? M(e, -3) : d) : f;
				}, n.deflateSetDictionary = function(e, t) {
					var n, r, a, s, c, l, u, p, m = t.length;
					if (!e || !e.state || (s = (n = e.state).wrap) === 2 || s === 1 && n.status !== E || n.lookahead) return f;
					for (s === 1 && (e.adler = o(e.adler, t, m, 0)), n.wrap = 0, m >= n.w_size && (s === 0 && (ee(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), p = new i.Buf8(n.w_size), i.arraySet(p, t, m - n.w_size, n.w_size, 0), t = p, m = n.w_size), c = e.avail_in, l = e.next_in, u = e.input, e.avail_in = m, e.next_in = 0, e.input = t, te(n); n.lookahead >= C;) {
						for (r = n.strstart, a = n.lookahead - (C - 1); n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + C - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = r, r++, --a;);
						n.strstart = r, n.lookahead = C - 1, te(n);
					}
					return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = C - 1, n.match_available = 0, e.next_in = l, e.input = u, e.avail_in = c, n.wrap = s, d;
				}, n.deflateInfo = "pako deflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./messages": 51,
				"./trees": 52
			}],
			47: [function(e, t, n) {
				t.exports = function() {
					this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
				};
			}, {}],
			48: [function(e, t, n) {
				t.exports = function(e, t) {
					var n = e.state, r = e.next_in, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e.input, E;
					i = r + (e.avail_in - 5), a = e.next_out, E = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), c = n.dmax, l = n.wsize, u = n.whave, d = n.wnext, f = n.window, p = n.hold, m = n.bits, h = n.lencode, g = n.distcode, _ = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;
					t: do {
						m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = h[p & _];
						e: for (;;) {
							if (p >>>= b = y >>> 24, m -= b, (b = y >>> 16 & 255) == 0) E[a++] = 65535 & y;
							else {
								if (!(16 & b)) {
									if (!(64 & b)) {
										y = h[(65535 & y) + (p & (1 << b) - 1)];
										continue e;
									}
									if (32 & b) {
										n.mode = 12;
										break t;
									}
									e.msg = "invalid literal/length code", n.mode = 30;
									break t;
								}
								x = 65535 & y, (b &= 15) && (m < b && (p += T[r++] << m, m += 8), x += p & (1 << b) - 1, p >>>= b, m -= b), m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = g[p & v];
								s: for (;;) {
									if (p >>>= b = y >>> 24, m -= b, !(16 & (b = y >>> 16 & 255))) {
										if (!(64 & b)) {
											y = g[(65535 & y) + (p & (1 << b) - 1)];
											continue s;
										}
										e.msg = "invalid distance code", n.mode = 30;
										break t;
									}
									if (S = 65535 & y, m < (b &= 15) && (p += T[r++] << m, (m += 8) < b && (p += T[r++] << m, m += 8)), c < (S += p & (1 << b) - 1)) {
										e.msg = "invalid distance too far back", n.mode = 30;
										break t;
									}
									if (p >>>= b, m -= b, (b = a - o) < S) {
										if (u < (b = S - b) && n.sane) {
											e.msg = "invalid distance too far back", n.mode = 30;
											break t;
										}
										if (w = f, (C = 0) === d) {
											if (C += l - b, b < x) {
												for (x -= b; E[a++] = f[C++], --b;);
												C = a - S, w = E;
											}
										} else if (d < b) {
											if (C += l + d - b, (b -= d) < x) {
												for (x -= b; E[a++] = f[C++], --b;);
												if (C = 0, d < x) {
													for (x -= b = d; E[a++] = f[C++], --b;);
													C = a - S, w = E;
												}
											}
										} else if (C += d - b, b < x) {
											for (x -= b; E[a++] = f[C++], --b;);
											C = a - S, w = E;
										}
										for (; 2 < x;) E[a++] = w[C++], E[a++] = w[C++], E[a++] = w[C++], x -= 3;
										x && (E[a++] = w[C++], 1 < x && (E[a++] = w[C++]));
									} else {
										for (C = a - S; E[a++] = E[C++], E[a++] = E[C++], E[a++] = E[C++], 2 < (x -= 3););
										x && (E[a++] = E[C++], 1 < x && (E[a++] = E[C++]));
									}
									break;
								}
							}
							break;
						}
					} while (r < i && a < s);
					r -= x = m >> 3, p &= (1 << (m -= x << 3)) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < i ? i - r + 5 : 5 - (r - i), e.avail_out = a < s ? s - a + 257 : 257 - (a - s), n.hold = p, n.bits = m;
				};
			}, {}],
			49: [function(e, t, n) {
				var r = e("../utils/common"), i = e("./adler32"), a = e("./crc32"), o = e("./inffast"), s = e("./inftrees"), c = 1, l = 2, u = 0, d = -2, f = 1, p = 852, m = 592;
				function h(e) {
					return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
				}
				function g() {
					this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
				}
				function _(e) {
					var t;
					return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = f, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new r.Buf32(p), t.distcode = t.distdyn = new r.Buf32(m), t.sane = 1, t.back = -1, u) : d;
				}
				function v(e) {
					var t;
					return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, _(e)) : d;
				}
				function y(e, t) {
					var n, r;
					return e && e.state ? (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t) ? d : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, v(e))) : d;
				}
				function b(e, t) {
					var n, r;
					return e ? (r = new g(), (e.state = r).window = null, (n = y(e, t)) !== u && (e.state = null), n) : d;
				}
				var x, S, C = !0;
				function w(e) {
					if (C) {
						var t;
						for (x = new r.Buf32(512), S = new r.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
						for (; t < 256;) e.lens[t++] = 9;
						for (; t < 280;) e.lens[t++] = 7;
						for (; t < 288;) e.lens[t++] = 8;
						for (s(c, e.lens, 0, 288, x, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5;
						s(l, e.lens, 0, 32, S, 0, e.work, { bits: 5 }), C = !1;
					}
					e.lencode = x, e.lenbits = 9, e.distcode = S, e.distbits = 5;
				}
				function T(e, t, n, i) {
					var a, o = e.state;
					return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new r.Buf8(o.wsize)), i >= o.wsize ? (r.arraySet(o.window, t, n - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : (i < (a = o.wsize - o.wnext) && (a = i), r.arraySet(o.window, t, n - i, a, o.wnext), (i -= a) ? (r.arraySet(o.window, t, n - i, i, 0), o.wnext = i, o.whave = o.wsize) : (o.wnext += a, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += a))), 0;
				}
				n.inflateReset = v, n.inflateReset2 = y, n.inflateResetKeep = _, n.inflateInit = function(e) {
					return b(e, 15);
				}, n.inflateInit2 = b, n.inflate = function(e, t) {
					var n, p, m, g, _, v, y, b, x, S, C, E, D, O, k, A, j, M, N, ee, P, F, I, L, R = 0, te = new r.Buf8(4), ne = [
						16,
						17,
						18,
						0,
						8,
						7,
						9,
						6,
						10,
						5,
						11,
						4,
						12,
						3,
						13,
						2,
						14,
						1,
						15
					];
					if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return d;
					(n = e.state).mode === 12 && (n.mode = 13), _ = e.next_out, m = e.output, y = e.avail_out, g = e.next_in, p = e.input, v = e.avail_in, b = n.hold, x = n.bits, S = v, C = y, F = u;
					t: for (;;) switch (n.mode) {
						case f:
							if (n.wrap === 0) {
								n.mode = 13;
								break;
							}
							for (; x < 16;) {
								if (v === 0) break t;
								v--, b += p[g++] << x, x += 8;
							}
							if (2 & n.wrap && b === 35615) {
								te[n.check = 0] = 255 & b, te[1] = b >>> 8 & 255, n.check = a(n.check, te, 2, 0), x = b = 0, n.mode = 2;
								break;
							}
							if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & b) << 8) + (b >> 8)) % 31) {
								e.msg = "incorrect header check", n.mode = 30;
								break;
							}
							if ((15 & b) != 8) {
								e.msg = "unknown compression method", n.mode = 30;
								break;
							}
							if (x -= 4, P = 8 + (15 & (b >>>= 4)), n.wbits === 0) n.wbits = P;
							else if (P > n.wbits) {
								e.msg = "invalid window size", n.mode = 30;
								break;
							}
							n.dmax = 1 << P, e.adler = n.check = 1, n.mode = 512 & b ? 10 : 12, x = b = 0;
							break;
						case 2:
							for (; x < 16;) {
								if (v === 0) break t;
								v--, b += p[g++] << x, x += 8;
							}
							if (n.flags = b, (255 & n.flags) != 8) {
								e.msg = "unknown compression method", n.mode = 30;
								break;
							}
							if (57344 & n.flags) {
								e.msg = "unknown header flags set", n.mode = 30;
								break;
							}
							n.head && (n.head.text = b >> 8 & 1), 512 & n.flags && (te[0] = 255 & b, te[1] = b >>> 8 & 255, n.check = a(n.check, te, 2, 0)), x = b = 0, n.mode = 3;
						case 3:
							for (; x < 32;) {
								if (v === 0) break t;
								v--, b += p[g++] << x, x += 8;
							}
							n.head && (n.head.time = b), 512 & n.flags && (te[0] = 255 & b, te[1] = b >>> 8 & 255, te[2] = b >>> 16 & 255, te[3] = b >>> 24 & 255, n.check = a(n.check, te, 4, 0)), x = b = 0, n.mode = 4;
						case 4:
							for (; x < 16;) {
								if (v === 0) break t;
								v--, b += p[g++] << x, x += 8;
							}
							n.head && (n.head.xflags = 255 & b, n.head.os = b >> 8), 512 & n.flags && (te[0] = 255 & b, te[1] = b >>> 8 & 255, n.check = a(n.check, te, 2, 0)), x = b = 0, n.mode = 5;
						case 5:
							if (1024 & n.flags) {
								for (; x < 16;) {
									if (v === 0) break t;
									v--, b += p[g++] << x, x += 8;
								}
								n.length = b, n.head && (n.head.extra_len = b), 512 & n.flags && (te[0] = 255 & b, te[1] = b >>> 8 & 255, n.check = a(n.check, te, 2, 0)), x = b = 0;
							} else n.head && (n.head.extra = null);
							n.mode = 6;
						case 6:
							if (1024 & n.flags && (v < (E = n.length) && (E = v), E && (n.head && (P = n.head.extra_len - n.length, n.head.extra || (n.head.extra = Array(n.head.extra_len)), r.arraySet(n.head.extra, p, g, E, P)), 512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, n.length -= E), n.length)) break t;
							n.length = 0, n.mode = 7;
						case 7:
							if (2048 & n.flags) {
								if (v === 0) break t;
								for (E = 0; P = p[g + E++], n.head && P && n.length < 65536 && (n.head.name += String.fromCharCode(P)), P && E < v;);
								if (512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, P) break t;
							} else n.head && (n.head.name = null);
							n.length = 0, n.mode = 8;
						case 8:
							if (4096 & n.flags) {
								if (v === 0) break t;
								for (E = 0; P = p[g + E++], n.head && P && n.length < 65536 && (n.head.comment += String.fromCharCode(P)), P && E < v;);
								if (512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, P) break t;
							} else n.head && (n.head.comment = null);
							n.mode = 9;
						case 9:
							if (512 & n.flags) {
								for (; x < 16;) {
									if (v === 0) break t;
									v--, b += p[g++] << x, x += 8;
								}
								if (b !== (65535 & n.check)) {
									e.msg = "header crc mismatch", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = 12;
							break;
						case 10:
							for (; x < 32;) {
								if (v === 0) break t;
								v--, b += p[g++] << x, x += 8;
							}
							e.adler = n.check = h(b), x = b = 0, n.mode = 11;
						case 11:
							if (n.havedict === 0) return e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, 2;
							e.adler = n.check = 1, n.mode = 12;
						case 12: if (t === 5 || t === 6) break t;
						case 13:
							if (n.last) {
								b >>>= 7 & x, x -= 7 & x, n.mode = 27;
								break;
							}
							for (; x < 3;) {
								if (v === 0) break t;
								v--, b += p[g++] << x, x += 8;
							}
							switch (n.last = 1 & b, --x, 3 & (b >>>= 1)) {
								case 0:
									n.mode = 14;
									break;
								case 1:
									if (w(n), n.mode = 20, t !== 6) break;
									b >>>= 2, x -= 2;
									break t;
								case 2:
									n.mode = 17;
									break;
								case 3: e.msg = "invalid block type", n.mode = 30;
							}
							b >>>= 2, x -= 2;
							break;
						case 14:
							for (b >>>= 7 & x, x -= 7 & x; x < 32;) {
								if (v === 0) break t;
								v--, b += p[g++] << x, x += 8;
							}
							if ((65535 & b) != (b >>> 16 ^ 65535)) {
								e.msg = "invalid stored block lengths", n.mode = 30;
								break;
							}
							if (n.length = 65535 & b, x = b = 0, n.mode = 15, t === 6) break t;
						case 15: n.mode = 16;
						case 16:
							if (E = n.length) {
								if (v < E && (E = v), y < E && (E = y), E === 0) break t;
								r.arraySet(m, p, g, E, _), v -= E, g += E, y -= E, _ += E, n.length -= E;
								break;
							}
							n.mode = 12;
							break;
						case 17:
							for (; x < 14;) {
								if (v === 0) break t;
								v--, b += p[g++] << x, x += 8;
							}
							if (n.nlen = 257 + (31 & b), b >>>= 5, x -= 5, n.ndist = 1 + (31 & b), b >>>= 5, x -= 5, n.ncode = 4 + (15 & b), b >>>= 4, x -= 4, 286 < n.nlen || 30 < n.ndist) {
								e.msg = "too many length or distance symbols", n.mode = 30;
								break;
							}
							n.have = 0, n.mode = 18;
						case 18:
							for (; n.have < n.ncode;) {
								for (; x < 3;) {
									if (v === 0) break t;
									v--, b += p[g++] << x, x += 8;
								}
								n.lens[ne[n.have++]] = 7 & b, b >>>= 3, x -= 3;
							}
							for (; n.have < 19;) n.lens[ne[n.have++]] = 0;
							if (n.lencode = n.lendyn, n.lenbits = 7, I = { bits: n.lenbits }, F = s(0, n.lens, 0, 19, n.lencode, 0, n.work, I), n.lenbits = I.bits, F) {
								e.msg = "invalid code lengths set", n.mode = 30;
								break;
							}
							n.have = 0, n.mode = 19;
						case 19:
							for (; n.have < n.nlen + n.ndist;) {
								for (; A = (R = n.lencode[b & (1 << n.lenbits) - 1]) >>> 16 & 255, j = 65535 & R, !((k = R >>> 24) <= x);) {
									if (v === 0) break t;
									v--, b += p[g++] << x, x += 8;
								}
								if (j < 16) b >>>= k, x -= k, n.lens[n.have++] = j;
								else {
									if (j === 16) {
										for (L = k + 2; x < L;) {
											if (v === 0) break t;
											v--, b += p[g++] << x, x += 8;
										}
										if (b >>>= k, x -= k, n.have === 0) {
											e.msg = "invalid bit length repeat", n.mode = 30;
											break;
										}
										P = n.lens[n.have - 1], E = 3 + (3 & b), b >>>= 2, x -= 2;
									} else if (j === 17) {
										for (L = k + 3; x < L;) {
											if (v === 0) break t;
											v--, b += p[g++] << x, x += 8;
										}
										x -= k, P = 0, E = 3 + (7 & (b >>>= k)), b >>>= 3, x -= 3;
									} else {
										for (L = k + 7; x < L;) {
											if (v === 0) break t;
											v--, b += p[g++] << x, x += 8;
										}
										x -= k, P = 0, E = 11 + (127 & (b >>>= k)), b >>>= 7, x -= 7;
									}
									if (n.have + E > n.nlen + n.ndist) {
										e.msg = "invalid bit length repeat", n.mode = 30;
										break;
									}
									for (; E--;) n.lens[n.have++] = P;
								}
							}
							if (n.mode === 30) break;
							if (n.lens[256] === 0) {
								e.msg = "invalid code -- missing end-of-block", n.mode = 30;
								break;
							}
							if (n.lenbits = 9, I = { bits: n.lenbits }, F = s(c, n.lens, 0, n.nlen, n.lencode, 0, n.work, I), n.lenbits = I.bits, F) {
								e.msg = "invalid literal/lengths set", n.mode = 30;
								break;
							}
							if (n.distbits = 6, n.distcode = n.distdyn, I = { bits: n.distbits }, F = s(l, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, I), n.distbits = I.bits, F) {
								e.msg = "invalid distances set", n.mode = 30;
								break;
							}
							if (n.mode = 20, t === 6) break t;
						case 20: n.mode = 21;
						case 21:
							if (6 <= v && 258 <= y) {
								e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, o(e, C), _ = e.next_out, m = e.output, y = e.avail_out, g = e.next_in, p = e.input, v = e.avail_in, b = n.hold, x = n.bits, n.mode === 12 && (n.back = -1);
								break;
							}
							for (n.back = 0; A = (R = n.lencode[b & (1 << n.lenbits) - 1]) >>> 16 & 255, j = 65535 & R, !((k = R >>> 24) <= x);) {
								if (v === 0) break t;
								v--, b += p[g++] << x, x += 8;
							}
							if (A && !(240 & A)) {
								for (M = k, N = A, ee = j; A = (R = n.lencode[ee + ((b & (1 << M + N) - 1) >> M)]) >>> 16 & 255, j = 65535 & R, !(M + (k = R >>> 24) <= x);) {
									if (v === 0) break t;
									v--, b += p[g++] << x, x += 8;
								}
								b >>>= M, x -= M, n.back += M;
							}
							if (b >>>= k, x -= k, n.back += k, n.length = j, A === 0) {
								n.mode = 26;
								break;
							}
							if (32 & A) {
								n.back = -1, n.mode = 12;
								break;
							}
							if (64 & A) {
								e.msg = "invalid literal/length code", n.mode = 30;
								break;
							}
							n.extra = 15 & A, n.mode = 22;
						case 22:
							if (n.extra) {
								for (L = n.extra; x < L;) {
									if (v === 0) break t;
									v--, b += p[g++] << x, x += 8;
								}
								n.length += b & (1 << n.extra) - 1, b >>>= n.extra, x -= n.extra, n.back += n.extra;
							}
							n.was = n.length, n.mode = 23;
						case 23:
							for (; A = (R = n.distcode[b & (1 << n.distbits) - 1]) >>> 16 & 255, j = 65535 & R, !((k = R >>> 24) <= x);) {
								if (v === 0) break t;
								v--, b += p[g++] << x, x += 8;
							}
							if (!(240 & A)) {
								for (M = k, N = A, ee = j; A = (R = n.distcode[ee + ((b & (1 << M + N) - 1) >> M)]) >>> 16 & 255, j = 65535 & R, !(M + (k = R >>> 24) <= x);) {
									if (v === 0) break t;
									v--, b += p[g++] << x, x += 8;
								}
								b >>>= M, x -= M, n.back += M;
							}
							if (b >>>= k, x -= k, n.back += k, 64 & A) {
								e.msg = "invalid distance code", n.mode = 30;
								break;
							}
							n.offset = j, n.extra = 15 & A, n.mode = 24;
						case 24:
							if (n.extra) {
								for (L = n.extra; x < L;) {
									if (v === 0) break t;
									v--, b += p[g++] << x, x += 8;
								}
								n.offset += b & (1 << n.extra) - 1, b >>>= n.extra, x -= n.extra, n.back += n.extra;
							}
							if (n.offset > n.dmax) {
								e.msg = "invalid distance too far back", n.mode = 30;
								break;
							}
							n.mode = 25;
						case 25:
							if (y === 0) break t;
							if (E = C - y, n.offset > E) {
								if ((E = n.offset - E) > n.whave && n.sane) {
									e.msg = "invalid distance too far back", n.mode = 30;
									break;
								}
								D = E > n.wnext ? (E -= n.wnext, n.wsize - E) : n.wnext - E, E > n.length && (E = n.length), O = n.window;
							} else O = m, D = _ - n.offset, E = n.length;
							for (y < E && (E = y), y -= E, n.length -= E; m[_++] = O[D++], --E;);
							n.length === 0 && (n.mode = 21);
							break;
						case 26:
							if (y === 0) break t;
							m[_++] = n.length, y--, n.mode = 21;
							break;
						case 27:
							if (n.wrap) {
								for (; x < 32;) {
									if (v === 0) break t;
									v--, b |= p[g++] << x, x += 8;
								}
								if (C -= y, e.total_out += C, n.total += C, C && (e.adler = n.check = n.flags ? a(n.check, m, C, _ - C) : i(n.check, m, C, _ - C)), C = y, (n.flags ? b : h(b)) !== n.check) {
									e.msg = "incorrect data check", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.mode = 28;
						case 28:
							if (n.wrap && n.flags) {
								for (; x < 32;) {
									if (v === 0) break t;
									v--, b += p[g++] << x, x += 8;
								}
								if (b !== (4294967295 & n.total)) {
									e.msg = "incorrect length check", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.mode = 29;
						case 29:
							F = 1;
							break t;
						case 30:
							F = -3;
							break t;
						case 31: return -4;
						case 32:
						default: return d;
					}
					return e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, (n.wsize || C !== e.avail_out && n.mode < 30 && (n.mode < 27 || t !== 4)) && T(e, e.output, e.next_out, C - e.avail_out) ? (n.mode = 31, -4) : (S -= e.avail_in, C -= e.avail_out, e.total_in += S, e.total_out += C, n.total += C, n.wrap && C && (e.adler = n.check = n.flags ? a(n.check, m, C, e.next_out - C) : i(n.check, m, C, e.next_out - C)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === 12 ? 128 : 0) + (n.mode === 20 || n.mode === 15 ? 256 : 0), (S == 0 && C === 0 || t === 4) && F === u && (F = -5), F);
				}, n.inflateEnd = function(e) {
					if (!e || !e.state) return d;
					var t = e.state;
					return t.window &&= null, e.state = null, u;
				}, n.inflateGetHeader = function(e, t) {
					var n;
					return e && e.state && 2 & (n = e.state).wrap ? ((n.head = t).done = !1, u) : d;
				}, n.inflateSetDictionary = function(e, t) {
					var n, r = t.length;
					return e && e.state ? (n = e.state).wrap !== 0 && n.mode !== 11 ? d : n.mode === 11 && i(1, t, r, 0) !== n.check ? -3 : T(e, t, r, r) ? (n.mode = 31, -4) : (n.havedict = 1, u) : d;
				}, n.inflateInfo = "pako inflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./inffast": 48,
				"./inftrees": 50
			}],
			50: [function(e, t, n) {
				var r = e("../utils/common"), i = [
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					13,
					15,
					17,
					19,
					23,
					27,
					31,
					35,
					43,
					51,
					59,
					67,
					83,
					99,
					115,
					131,
					163,
					195,
					227,
					258,
					0,
					0
				], a = [
					16,
					16,
					16,
					16,
					16,
					16,
					16,
					16,
					17,
					17,
					17,
					17,
					18,
					18,
					18,
					18,
					19,
					19,
					19,
					19,
					20,
					20,
					20,
					20,
					21,
					21,
					21,
					21,
					16,
					72,
					78
				], o = [
					1,
					2,
					3,
					4,
					5,
					7,
					9,
					13,
					17,
					25,
					33,
					49,
					65,
					97,
					129,
					193,
					257,
					385,
					513,
					769,
					1025,
					1537,
					2049,
					3073,
					4097,
					6145,
					8193,
					12289,
					16385,
					24577,
					0,
					0
				], s = [
					16,
					16,
					16,
					16,
					17,
					17,
					18,
					18,
					19,
					19,
					20,
					20,
					21,
					21,
					22,
					22,
					23,
					23,
					24,
					24,
					25,
					25,
					26,
					26,
					27,
					27,
					28,
					28,
					29,
					29,
					64,
					64
				];
				t.exports = function(e, t, n, c, l, u, d, f) {
					var p, m, h, g, _, v, y, b, x, S = f.bits, C = 0, w = 0, T = 0, E = 0, D = 0, O = 0, k = 0, A = 0, j = 0, M = 0, N = null, ee = 0, P = new r.Buf16(16), F = new r.Buf16(16), I = null, L = 0;
					for (C = 0; C <= 15; C++) P[C] = 0;
					for (w = 0; w < c; w++) P[t[n + w]]++;
					for (D = S, E = 15; 1 <= E && P[E] === 0; E--);
					if (E < D && (D = E), E === 0) return l[u++] = 20971520, l[u++] = 20971520, f.bits = 1, 0;
					for (T = 1; T < E && P[T] === 0; T++);
					for (D < T && (D = T), C = A = 1; C <= 15; C++) if (A <<= 1, (A -= P[C]) < 0) return -1;
					if (0 < A && (e === 0 || E !== 1)) return -1;
					for (F[1] = 0, C = 1; C < 15; C++) F[C + 1] = F[C] + P[C];
					for (w = 0; w < c; w++) t[n + w] !== 0 && (d[F[t[n + w]]++] = w);
					if (v = e === 0 ? (N = I = d, 19) : e === 1 ? (N = i, ee -= 257, I = a, L -= 257, 256) : (N = o, I = s, -1), C = T, _ = u, k = w = M = 0, h = -1, g = (j = 1 << (O = D)) - 1, e === 1 && 852 < j || e === 2 && 592 < j) return 1;
					for (;;) {
						for (y = C - k, x = d[w] < v ? (b = 0, d[w]) : d[w] > v ? (b = I[L + d[w]], N[ee + d[w]]) : (b = 96, 0), p = 1 << C - k, T = m = 1 << O; l[_ + (M >> k) + (m -= p)] = y << 24 | b << 16 | x | 0, m !== 0;);
						for (p = 1 << C - 1; M & p;) p >>= 1;
						if (p === 0 ? M = 0 : (M &= p - 1, M += p), w++, --P[C] == 0) {
							if (C === E) break;
							C = t[n + d[w]];
						}
						if (D < C && (M & g) !== h) {
							for (k === 0 && (k = D), _ += T, A = 1 << (O = C - k); O + k < E && !((A -= P[O + k]) <= 0);) O++, A <<= 1;
							if (j += 1 << O, e === 1 && 852 < j || e === 2 && 592 < j) return 1;
							l[h = M & g] = D << 24 | O << 16 | _ - u | 0;
						}
					}
					return M !== 0 && (l[_ + M] = C - k << 24 | 4194304), f.bits = D, 0;
				};
			}, { "../utils/common": 41 }],
			51: [function(e, t, n) {
				t.exports = {
					2: "need dictionary",
					1: "stream end",
					0: "",
					"-1": "file error",
					"-2": "stream error",
					"-3": "data error",
					"-4": "insufficient memory",
					"-5": "buffer error",
					"-6": "incompatible version"
				};
			}, {}],
			52: [function(e, t, n) {
				var r = e("../utils/common"), i = 0, a = 1;
				function o(e) {
					for (var t = e.length; 0 <= --t;) e[t] = 0;
				}
				var s = 0, c = 29, l = 256, u = l + 1 + c, d = 30, f = 19, p = 2 * u + 1, m = 15, h = 16, g = 7, _ = 256, v = 16, y = 17, b = 18, x = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					1,
					1,
					1,
					2,
					2,
					2,
					2,
					3,
					3,
					3,
					3,
					4,
					4,
					4,
					4,
					5,
					5,
					5,
					5,
					0
				], S = [
					0,
					0,
					0,
					0,
					1,
					1,
					2,
					2,
					3,
					3,
					4,
					4,
					5,
					5,
					6,
					6,
					7,
					7,
					8,
					8,
					9,
					9,
					10,
					10,
					11,
					11,
					12,
					12,
					13,
					13
				], C = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					2,
					3,
					7
				], w = [
					16,
					17,
					18,
					0,
					8,
					7,
					9,
					6,
					10,
					5,
					11,
					4,
					12,
					3,
					13,
					2,
					14,
					1,
					15
				], T = Array(2 * (u + 2));
				o(T);
				var E = Array(2 * d);
				o(E);
				var D = Array(512);
				o(D);
				var O = Array(256);
				o(O);
				var k = Array(c);
				o(k);
				var A, j, M, N = Array(d);
				function ee(e, t, n, r, i) {
					this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length;
				}
				function P(e, t) {
					this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
				}
				function F(e) {
					return e < 256 ? D[e] : D[256 + (e >>> 7)];
				}
				function I(e, t) {
					e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
				}
				function L(e, t, n) {
					e.bi_valid > h - n ? (e.bi_buf |= t << e.bi_valid & 65535, I(e, e.bi_buf), e.bi_buf = t >> h - e.bi_valid, e.bi_valid += n - h) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
				}
				function R(e, t, n) {
					L(e, n[2 * t], n[2 * t + 1]);
				}
				function te(e, t) {
					for (var n = 0; n |= 1 & e, e >>>= 1, n <<= 1, 0 < --t;);
					return n >>> 1;
				}
				function ne(e, t, n) {
					var r, i, a = Array(m + 1), o = 0;
					for (r = 1; r <= m; r++) a[r] = o = o + n[r - 1] << 1;
					for (i = 0; i <= t; i++) {
						var s = e[2 * i + 1];
						s !== 0 && (e[2 * i] = te(a[s]++, s));
					}
				}
				function re(e) {
					var t;
					for (t = 0; t < u; t++) e.dyn_ltree[2 * t] = 0;
					for (t = 0; t < d; t++) e.dyn_dtree[2 * t] = 0;
					for (t = 0; t < f; t++) e.bl_tree[2 * t] = 0;
					e.dyn_ltree[2 * _] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
				}
				function ie(e) {
					8 < e.bi_valid ? I(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
				}
				function ae(e, t, n, r) {
					var i = 2 * t, a = 2 * n;
					return e[i] < e[a] || e[i] === e[a] && r[t] <= r[n];
				}
				function oe(e, t, n) {
					for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && ae(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !ae(t, r, e.heap[i], e.depth));) e.heap[n] = e.heap[i], n = i, i <<= 1;
					e.heap[n] = r;
				}
				function se(e, t, n) {
					var r, i, a, o, s = 0;
					if (e.last_lit !== 0) for (; r = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, r === 0 ? R(e, i, t) : (R(e, (a = O[i]) + l + 1, t), (o = x[a]) !== 0 && L(e, i -= k[a], o), R(e, a = F(--r), n), (o = S[a]) !== 0 && L(e, r -= N[a], o)), s < e.last_lit;);
					R(e, _, t);
				}
				function ce(e, t) {
					var n, r, i, a = t.dyn_tree, o = t.stat_desc.static_tree, s = t.stat_desc.has_stree, c = t.stat_desc.elems, l = -1;
					for (e.heap_len = 0, e.heap_max = p, n = 0; n < c; n++) a[2 * n] === 0 ? a[2 * n + 1] = 0 : (e.heap[++e.heap_len] = l = n, e.depth[n] = 0);
					for (; e.heap_len < 2;) a[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= o[2 * i + 1]);
					for (t.max_code = l, n = e.heap_len >> 1; 1 <= n; n--) oe(e, a, n);
					for (i = c; n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], oe(e, a, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, a[2 * i] = a[2 * n] + a[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, a[2 * n + 1] = a[2 * r + 1] = i, e.heap[1] = i++, oe(e, a, 1), 2 <= e.heap_len;);
					e.heap[--e.heap_max] = e.heap[1], function(e, t) {
						var n, r, i, a, o, s, c = t.dyn_tree, l = t.max_code, u = t.stat_desc.static_tree, d = t.stat_desc.has_stree, f = t.stat_desc.extra_bits, h = t.stat_desc.extra_base, g = t.stat_desc.max_length, _ = 0;
						for (a = 0; a <= m; a++) e.bl_count[a] = 0;
						for (c[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < p; n++) g < (a = c[2 * c[2 * (r = e.heap[n]) + 1] + 1] + 1) && (a = g, _++), c[2 * r + 1] = a, l < r || (e.bl_count[a]++, o = 0, h <= r && (o = f[r - h]), s = c[2 * r], e.opt_len += s * (a + o), d && (e.static_len += s * (u[2 * r + 1] + o)));
						if (_ !== 0) {
							do {
								for (a = g - 1; e.bl_count[a] === 0;) a--;
								e.bl_count[a]--, e.bl_count[a + 1] += 2, e.bl_count[g]--, _ -= 2;
							} while (0 < _);
							for (a = g; a !== 0; a--) for (r = e.bl_count[a]; r !== 0;) l < (i = e.heap[--n]) || (c[2 * i + 1] !== a && (e.opt_len += (a - c[2 * i + 1]) * c[2 * i], c[2 * i + 1] = a), r--);
						}
					}(e, t), ne(a, l, e.bl_count);
				}
				function le(e, t, n) {
					var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
					for (o === 0 && (c = 138, l = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = o, o = t[2 * (r + 1) + 1], ++s < c && i === o || (s < l ? e.bl_tree[2 * i] += s : i === 0 ? s <= 10 ? e.bl_tree[2 * y]++ : e.bl_tree[2 * b]++ : (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * v]++), a = i, l = (s = 0) === o ? (c = 138, 3) : i === o ? (c = 6, 3) : (c = 7, 4));
				}
				function ue(e, t, n) {
					var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
					for (o === 0 && (c = 138, l = 3), r = 0; r <= n; r++) if (i = o, o = t[2 * (r + 1) + 1], !(++s < c && i === o)) {
						if (s < l) for (; R(e, i, e.bl_tree), --s != 0;);
						else i === 0 ? s <= 10 ? (R(e, y, e.bl_tree), L(e, s - 3, 3)) : (R(e, b, e.bl_tree), L(e, s - 11, 7)) : (i !== a && (R(e, i, e.bl_tree), s--), R(e, v, e.bl_tree), L(e, s - 3, 2));
						a = i, l = (s = 0) === o ? (c = 138, 3) : i === o ? (c = 6, 3) : (c = 7, 4);
					}
				}
				o(N);
				var z = !1;
				function de(e, t, n, i) {
					L(e, (s << 1) + +!!i, 3), function(e, t, n, i) {
						ie(e), I(e, n), I(e, ~n), r.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n;
					}(e, t, n);
				}
				n._tr_init = function(e) {
					z ||= (function() {
						var e, t, n, r, i, a = Array(m + 1);
						for (r = n = 0; r < c - 1; r++) for (k[r] = n, e = 0; e < 1 << x[r]; e++) O[n++] = r;
						for (O[n - 1] = r, r = i = 0; r < 16; r++) for (N[r] = i, e = 0; e < 1 << S[r]; e++) D[i++] = r;
						for (i >>= 7; r < d; r++) for (N[r] = i << 7, e = 0; e < 1 << S[r] - 7; e++) D[256 + i++] = r;
						for (t = 0; t <= m; t++) a[t] = 0;
						for (e = 0; e <= 143;) T[2 * e + 1] = 8, e++, a[8]++;
						for (; e <= 255;) T[2 * e + 1] = 9, e++, a[9]++;
						for (; e <= 279;) T[2 * e + 1] = 7, e++, a[7]++;
						for (; e <= 287;) T[2 * e + 1] = 8, e++, a[8]++;
						for (ne(T, u + 1, a), e = 0; e < d; e++) E[2 * e + 1] = 5, E[2 * e] = te(e, 5);
						A = new ee(T, x, l + 1, u, m), j = new ee(E, S, 0, d, m), M = new ee([], C, 0, f, g);
					}(), !0), e.l_desc = new P(e.dyn_ltree, A), e.d_desc = new P(e.dyn_dtree, j), e.bl_desc = new P(e.bl_tree, M), e.bi_buf = 0, e.bi_valid = 0, re(e);
				}, n._tr_stored_block = de, n._tr_flush_block = function(e, t, n, r) {
					var o, s, c = 0;
					0 < e.level ? (e.strm.data_type === 2 && (e.strm.data_type = function(e) {
						var t, n = 4093624447;
						for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && e.dyn_ltree[2 * t] !== 0) return i;
						if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) return a;
						for (t = 32; t < l; t++) if (e.dyn_ltree[2 * t] !== 0) return a;
						return i;
					}(e)), ce(e, e.l_desc), ce(e, e.d_desc), c = function(e) {
						var t;
						for (le(e, e.dyn_ltree, e.l_desc.max_code), le(e, e.dyn_dtree, e.d_desc.max_code), ce(e, e.bl_desc), t = f - 1; 3 <= t && e.bl_tree[2 * w[t] + 1] === 0; t--);
						return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
					}(e), o = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= o && (o = s)) : o = s = n + 5, n + 4 <= o && t !== -1 ? de(e, t, n, r) : e.strategy === 4 || s === o ? (L(e, 2 + +!!r, 3), se(e, T, E)) : (L(e, 4 + +!!r, 3), function(e, t, n, r) {
						var i;
						for (L(e, t - 257, 5), L(e, n - 1, 5), L(e, r - 4, 4), i = 0; i < r; i++) L(e, e.bl_tree[2 * w[i] + 1], 3);
						ue(e, e.dyn_ltree, t - 1), ue(e, e.dyn_dtree, n - 1);
					}(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1), se(e, e.dyn_ltree, e.dyn_dtree)), re(e), r && ie(e);
				}, n._tr_tally = function(e, t, n) {
					return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, t === 0 ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (O[n] + l + 1)]++, e.dyn_dtree[2 * F(t)]++), e.last_lit === e.lit_bufsize - 1;
				}, n._tr_align = function(e) {
					L(e, 2, 3), R(e, _, T), function(e) {
						e.bi_valid === 16 ? (I(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
					}(e);
				};
			}, { "../utils/common": 41 }],
			53: [function(e, t, n) {
				t.exports = function() {
					this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
				};
			}, {}],
			54: [function(e, t, n) {
				(function(e) {
					(function(e, t) {
						if (!e.setImmediate) {
							var n, r, i, a, o = 1, s = {}, c = !1, l = e.document, u = Object.getPrototypeOf && Object.getPrototypeOf(e);
							u = u && u.setTimeout ? u : e, n = {}.toString.call(e.process) === "[object process]" ? function(e) {
								process.nextTick(function() {
									f(e);
								});
							} : function() {
								if (e.postMessage && !e.importScripts) {
									var t = !0, n = e.onmessage;
									return e.onmessage = function() {
										t = !1;
									}, e.postMessage("", "*"), e.onmessage = n, t;
								}
							}() ? (a = "setImmediate$" + Math.random() + "$", e.addEventListener ? e.addEventListener("message", p, !1) : e.attachEvent("onmessage", p), function(t) {
								e.postMessage(a + t, "*");
							}) : e.MessageChannel ? ((i = new MessageChannel()).port1.onmessage = function(e) {
								f(e.data);
							}, function(e) {
								i.port2.postMessage(e);
							}) : l && "onreadystatechange" in l.createElement("script") ? (r = l.documentElement, function(e) {
								var t = l.createElement("script");
								t.onreadystatechange = function() {
									f(e), t.onreadystatechange = null, r.removeChild(t), t = null;
								}, r.appendChild(t);
							}) : function(e) {
								setTimeout(f, 0, e);
							}, u.setImmediate = function(e) {
								typeof e != "function" && (e = Function("" + e));
								for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
								return s[o] = {
									callback: e,
									args: t
								}, n(o), o++;
							}, u.clearImmediate = d;
						}
						function d(e) {
							delete s[e];
						}
						function f(e) {
							if (c) setTimeout(f, 0, e);
							else {
								var n = s[e];
								if (n) {
									c = !0;
									try {
										(function(e) {
											var n = e.callback, r = e.args;
											switch (r.length) {
												case 0:
													n();
													break;
												case 1:
													n(r[0]);
													break;
												case 2:
													n(r[0], r[1]);
													break;
												case 3:
													n(r[0], r[1], r[2]);
													break;
												default: n.apply(t, r);
											}
										})(n);
									} finally {
										d(e), c = !1;
									}
								}
							}
						}
						function p(t) {
							t.source === e && typeof t.data == "string" && t.data.indexOf(a) === 0 && f(+t.data.slice(a.length));
						}
					})(typeof self > "u" ? e === void 0 ? this : e : self);
				}).call(this, typeof iu < "u" ? iu : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}]
		}, {}, [10])(10);
	});
})(su);
var cu = su.exports, lu = /* @__PURE__ */ au(cu), uu = class {
	constructor(e, t) {
		X(this, "date", /* @__PURE__ */ new Date()), X(this, "author"), X(this, "guid", $t.create()), X(this, "viewpoint"), X(this, "modifiedAuthor"), X(this, "modifiedDate"), X(this, "topic"), X(this, "_components"), X(this, "_comment", ""), this._components = e, this._comment = t;
		let n = this._components.get(gu);
		this.author = n.config.author;
	}
	set comment(e) {
		var t;
		let n = this._components.get(gu);
		this._comment = e, this.modifiedDate = /* @__PURE__ */ new Date(), this.modifiedAuthor = n.config.author, (t = this.topic) == null || t.comments.set(this.guid, this);
	}
	get comment() {
		return this._comment;
	}
	toJSON() {
		let e = {
			guid: this.guid,
			date: this.date.toISOString(),
			author: this.author,
			comment: this.comment,
			topic_guid: this.topic?.guid,
			viewpoint_guid: this.viewpoint,
			modified_date: this.modifiedDate?.toISOString(),
			modified_author: this.modifiedAuthor
		};
		for (let [t, n] of Object.entries(e)) n === void 0 && delete e[t];
		return e;
	}
}, du = class e {
	constructor(t) {
		X(this, "guid", $t.create()), X(this, "title", e.default.title), X(this, "creationDate", /* @__PURE__ */ new Date()), X(this, "creationAuthor", ""), X(this, "viewpoints", new Be()), X(this, "relatedTopics", new Be()), X(this, "comments", new a()), X(this, "documentReferences", new Be()), X(this, "customData", {}), X(this, "description"), X(this, "serverAssignedId"), X(this, "dueDate"), X(this, "modifiedAuthor"), X(this, "modifiedDate"), X(this, "index"), X(this, "_type", e.default.type), X(this, "_status", e.default.status), X(this, "_priority", e.default.priority), X(this, "_stage", e.default.stage), X(this, "_assignedTo", e.default.assignedTo), X(this, "_labels", e.default.labels ?? /* @__PURE__ */ new Set()), X(this, "_components"), this._components = t;
		let n = t.get(gu);
		this.creationAuthor = n.config.author, this.relatedTopics.guard = (e) => e !== this.guid;
	}
	set type(e) {
		let { strict: t, types: n } = this._components.get(gu).config;
		(!t || n.has(e)) && (this._type = e);
	}
	get type() {
		return this._type;
	}
	set status(e) {
		let { strict: t, statuses: n } = this._components.get(gu).config;
		(!t || n.has(e)) && (this._status = e);
	}
	get status() {
		return this._status;
	}
	set priority(e) {
		let t = this._components.get(gu);
		if (e) {
			let { strict: n, priorities: r } = t.config;
			if (!(!n || r.has(e))) return;
			this._priority = e;
		} else this._priority = e;
	}
	get priority() {
		return this._priority;
	}
	set stage(e) {
		let t = this._components.get(gu);
		if (e) {
			let { strict: n, stages: r } = t.config;
			if (!(!n || r.has(e))) return;
			this._stage = e;
		} else this._stage = e;
	}
	get stage() {
		return this._stage;
	}
	set assignedTo(e) {
		let t = this._components.get(gu);
		if (e) {
			let { strict: n, users: r } = t.config;
			if (!(!n || r.has(e))) return;
			this._assignedTo = e;
		} else this._assignedTo = e;
	}
	get assignedTo() {
		return this._assignedTo;
	}
	set labels(e) {
		let { strict: t, labels: n } = this._components.get(gu).config;
		if (t) {
			let r = /* @__PURE__ */ new Set();
			for (let i of e) (!t || n.has(i)) && r.add(i);
			this._labels = r;
		} else this._labels = e;
	}
	get labels() {
		return this._labels;
	}
	get _managerVersion() {
		return this._components.get(gu).config.version;
	}
	set(e) {
		let t = e, n = this;
		for (let r in e) {
			if (r === "guid") continue;
			let e = t[r];
			r in this && (n[r] = e);
		}
		return this._components.get(gu).list.set(this.guid, this), this;
	}
	createComment(e, t) {
		let n = new uu(this._components, e);
		return n.viewpoint = t, n.topic = this, this.comments.set(n.guid, n), n;
	}
	createLabelTags() {
		let e = [...this.labels];
		if (this._components.get(gu).config.exportCustomDataAsLabels) for (let t in this.customData) {
			let n = this.customData[t];
			typeof n == "string" && e.push(n);
		}
		return e;
	}
	createCommentTags() {
		return [...this.comments.values()].map((e) => ({
			$Guid: e.guid,
			Date: e.date.toISOString(),
			Author: e.author,
			Comment: e.comment,
			ModifiedAuthor: e.modifiedAuthor,
			ModifiedDate: e.modifiedDate?.toISOString(),
			Viewpoint: e.viewpoint ? { $Guid: e.viewpoint } : void 0
		}));
	}
	createViewpointTags() {
		let e = this._components.get(wu);
		return [...this.viewpoints].map((t) => e.list.get(t)).filter((e) => e).map((t) => {
			let n = {
				$Guid: t.guid,
				Viewpoint: `${t.title ?? t.guid}.bcfv`
			};
			if (e.snapshots.get(t.snapshot)) {
				let r = e.getSnapshotExtension(t.snapshot);
				n.Snapshot = `${t.snapshot}.${r}`;
			}
			return n;
		});
	}
	createRelatedTopicTags() {
		return [...this.relatedTopics].map((e) => ({ $Guid: e }));
	}
	createDocumentReferencesTag(e = this._managerVersion) {
		let t = [];
		if (!(e === "3" || e === "2.1")) return t;
		let n = this._components.get(gu);
		for (let r of this.documentReferences) {
			let i = n.documents.get(r);
			if (!i) continue;
			let a = {
				$Guid: $t.create(),
				Description: i.description
			};
			e === "2.1" && (a = {
				...a,
				$isExternal: i.type === "external" || void 0,
				ReferencedDocument: i.type === "external" ? i.url : `../${i.fileName}`
			}), e === "3" && (a = {
				...a,
				DocumentGuid: i.type === "internal" ? r : void 0,
				Url: i.type === "external" ? i.url : void 0
			}), Object.keys(a).length > 0 && t.push(a);
		}
		return t;
	}
	toJSON() {
		let e = {
			guid: this.guid,
			server_assigned_id: this.serverAssignedId,
			topic_type: this.type,
			topic_status: this.status,
			title: this.title,
			priority: this.priority,
			index: this.index,
			labels: [...this.labels],
			creation_date: this.creationDate.toISOString(),
			creation_author: this.creationAuthor,
			modified_date: this.modifiedDate?.toISOString(),
			modified_author: this.modifiedAuthor,
			assigned_to: this.assignedTo,
			stage: this.stage,
			description: this.description,
			due_date: this.dueDate?.toISOString(),
			comments: [...this.comments].map(([e, t]) => t.toJSON()),
			relatedTopics: [...this.relatedTopics].map((e) => ({ related_topic_guid: e }))
		}, t = this._components.get(wu);
		for (let n of this.viewpoints) {
			let r = t.list.get(n);
			r && (e.viewpoints ||= [], e.viewpoints.push(r.toJSON()));
		}
		let n = this._components.get(gu);
		for (let t of this.documentReferences) {
			let r = n.documents.get(t);
			r && (e.document_references ||= [], r.type === "external" ? e.document_references.push({
				guid: $t.create(),
				description: r.description,
				url: r.url
			}) : e.document_references.push({
				guid: $t.create(),
				description: r.description,
				document_guid: t
			}));
		}
		for (let [t, n] of Object.entries(e)) (n === void 0 || Array.isArray(n) && n.length === 0) && delete e[t];
		return e;
	}
	serialize() {
		let e = this._managerVersion, t = {
			$Guid: this.guid,
			$TopicType: this.type,
			$TopicStatus: this.status,
			$ServerAssignedId: this.serverAssignedId,
			Title: this.title,
			CreationAuthor: this.creationAuthor,
			CreationDate: this.creationDate.toISOString(),
			Priority: this.priority,
			Index: e === "2.1" ? this.index : void 0,
			ModifiedDate: this.modifiedDate?.toISOString(),
			ModifiedAuthor: this.modifiedAuthor,
			DueDate: this.dueDate?.toISOString(),
			AssignedTo: this.assignedTo,
			Description: this.description,
			Stage: this.stage,
			DocumentReferences: e === "3" ? { DocumentReference: this.createDocumentReferencesTag(e) } : void 0,
			RelatedTopics: e === "3" ? { RelatedTopic: this.createRelatedTopicTags() } : void 0,
			RelatedTopic: e === "2.1" ? this.createRelatedTopicTags() : void 0,
			Labels: e === "3" ? { Label: this.createLabelTags() } : void 0,
			Viewpoints: e === "3" ? { ViewPoint: this.createViewpointTags() } : void 0,
			Comments: e === "3" ? { Comment: this.createCommentTags() } : void 0
		};
		e === "2.1" && (t.Labels = this.createLabelTags(), t.DocumentReference = this.createDocumentReferencesTag(e));
		let n = { Markup: { Topic: t } };
		return e === "2.1" && (n.Markup.Viewpoints = this.createViewpointTags(), n.Markup.Comment = this.createCommentTags()), `<?xml version="1.0" encoding="UTF-8"?>
    ${$r.builder.build(n)}`;
	}
};
X(du, "default", {
	title: "BCF Topic",
	type: "Issue",
	status: "Active"
});
var fu = du, pu = (e, t) => {
	if (t.trim() === "") return;
	let n = gu.xmlParser.parse(t).Extensions;
	if (!n) return;
	let { Priorities: r, TopicStatuses: i, TopicTypes: a, Users: o } = n;
	if (r && r.Priority) {
		let t = Array.isArray(r.Priority) ? r.Priority : [r.Priority];
		for (let n of t) e.config.priorities.add(n);
	}
	if (i && i.TopicStatus) {
		let t = Array.isArray(i.TopicStatus) ? i.TopicStatus : [i.TopicStatus];
		for (let n of t) e.config.statuses.add(n);
	}
	if (a && a.TopicType) {
		let t = Array.isArray(a.TopicType) ? a.TopicType : [a.TopicType];
		for (let n of t) e.config.types.add(n);
	}
	if (o && o.User) {
		let t = Array.isArray(o.User) ? o.User : [o.User];
		for (let n of t) e.config.users.add(n);
	}
}, mu = class extends ii {
	constructor() {
		super(...arguments), X(this, "_config", {
			version: {
				type: "Select",
				options: /* @__PURE__ */ new Set(["2.1", "3"]),
				multiple: !1,
				value: ""
			},
			author: {
				type: "Text",
				value: ""
			},
			types: {
				type: "TextSet",
				value: /* @__PURE__ */ new Set()
			},
			statuses: {
				type: "TextSet",
				value: /* @__PURE__ */ new Set()
			},
			priorities: {
				type: "TextSet",
				value: /* @__PURE__ */ new Set()
			},
			labels: {
				type: "TextSet",
				value: /* @__PURE__ */ new Set()
			},
			stages: {
				type: "TextSet",
				value: /* @__PURE__ */ new Set()
			},
			users: {
				type: "TextSet",
				value: /* @__PURE__ */ new Set()
			},
			includeSelectionTag: {
				type: "Boolean",
				value: !1
			},
			updateExtensionsOnImport: {
				type: "Boolean",
				value: !1
			},
			strict: {
				type: "Boolean",
				value: !1
			},
			includeAllExtensionsOnExport: {
				type: "Boolean",
				value: !1
			},
			fallbackVersionOnImport: {
				type: "Select",
				multiple: !1,
				options: /* @__PURE__ */ new Set(["2.1", "3"]),
				value: ""
			},
			ignoreIncompleteTopicsOnImport: {
				type: "Boolean",
				value: !1
			},
			exportCustomDataAsLabels: {
				type: "Boolean",
				value: !1
			}
		});
	}
	get version() {
		return this._config.version.value;
	}
	set version(e) {
		this._config.version.value = e;
	}
	get author() {
		return this._config.author.value;
	}
	set author(e) {
		this._config.author.value = e;
	}
	get types() {
		return this._config.types.value;
	}
	set types(e) {
		this._config.types.value = e;
	}
	get statuses() {
		return this._config.statuses.value;
	}
	set statuses(e) {
		this._config.statuses.value = e;
	}
	get priorities() {
		return this._config.priorities.value;
	}
	set priorities(e) {
		this._config.priorities.value = e;
	}
	get labels() {
		return this._config.labels.value;
	}
	set labels(e) {
		this._config.labels.value = e;
	}
	get stages() {
		return this._config.stages.value;
	}
	set stages(e) {
		this._config.stages.value = e;
	}
	get users() {
		return this._config.users.value;
	}
	set users(e) {
		this._config.users.value = e;
	}
	get includeSelectionTag() {
		return this._config.includeSelectionTag.value;
	}
	set includeSelectionTag(e) {
		this._config.includeSelectionTag.value = e;
	}
	get updateExtensionsOnImport() {
		return this._config.updateExtensionsOnImport.value;
	}
	set updateExtensionsOnImport(e) {
		this._config.updateExtensionsOnImport.value = e;
	}
	get strict() {
		return this._config.strict.value;
	}
	set strict(e) {
		this._config.strict.value = e;
	}
	get includeAllExtensionsOnExport() {
		return this._config.includeAllExtensionsOnExport.value;
	}
	set includeAllExtensionsOnExport(e) {
		this._config.includeAllExtensionsOnExport.value = e;
	}
	get fallbackVersionOnImport() {
		return this._config.fallbackVersionOnImport.value;
	}
	set fallbackVersionOnImport(e) {
		this._config.fallbackVersionOnImport.value = e;
	}
	get ignoreIncompleteTopicsOnImport() {
		return this._config.ignoreIncompleteTopicsOnImport.value;
	}
	set ignoreIncompleteTopicsOnImport(e) {
		this._config.ignoreIncompleteTopicsOnImport.value = e;
	}
	get exportCustomDataAsLabels() {
		return this._config.exportCustomDataAsLabels.value;
	}
	set exportCustomDataAsLabels(e) {
		this._config.exportCustomDataAsLabels.value = e;
	}
}, hu = class e extends qt {
	constructor() {
		super(...arguments), X(this, "enabled", !1), X(this, "_defaultConfig", {
			author: "jhon.doe@example.com",
			version: "2.1",
			types: /* @__PURE__ */ new Set([
				"Clash",
				"Failure",
				"Fault",
				"Inquiry",
				"Issue",
				"Remark",
				"Request"
			]),
			statuses: /* @__PURE__ */ new Set([
				"Active",
				"In Progress",
				"Done",
				"In Review",
				"Closed"
			]),
			priorities: /* @__PURE__ */ new Set([
				"On hold",
				"Minor",
				"Normal",
				"Major",
				"Critical"
			]),
			labels: /* @__PURE__ */ new Set(),
			stages: /* @__PURE__ */ new Set(),
			users: /* @__PURE__ */ new Set(),
			includeSelectionTag: !1,
			updateExtensionsOnImport: !0,
			strict: !1,
			includeAllExtensionsOnExport: !0,
			fallbackVersionOnImport: "2.1",
			ignoreIncompleteTopicsOnImport: !1,
			exportCustomDataAsLabels: !1
		}), X(this, "config", new mu(this, this.components, "BCF Topics", e.uuid)), X(this, "list", new a()), X(this, "documents", new a()), X(this, "onSetup", new Z()), X(this, "isSetup", !1), X(this, "onBCFImported", new Z()), X(this, "onDisposed", new Z());
	}
	setup(e) {
		if (this.isSetup) return;
		let t = {
			...this._defaultConfig,
			...e
		};
		this.config.version = t.version, this.config.author = t.author, this.config.types = t.types, this.config.statuses = t.statuses, this.config.priorities = t.priorities, this.config.labels = t.labels, this.config.stages = t.stages, this.config.users = t.users, this.config.includeSelectionTag = t.includeSelectionTag, this.config.updateExtensionsOnImport = t.updateExtensionsOnImport, this.config.strict = t.strict, this.config.includeAllExtensionsOnExport = t.includeAllExtensionsOnExport, this.config.fallbackVersionOnImport = t.fallbackVersionOnImport || "", this.config.ignoreIncompleteTopicsOnImport = t.ignoreIncompleteTopicsOnImport, this.isSetup = !0, this.enabled = !0, this.onSetup.trigger();
	}
	create(e) {
		let t = new fu(this.components);
		return e ? (t.guid = e.guid ?? t.guid, t.set(e)) : this.list.set(t.guid, t), t;
	}
	dispose() {
		this.list.dispose(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	get usedTypes() {
		let e = [...this.list].map(([e, t]) => t.type);
		return new Set(e);
	}
	get usedStatuses() {
		let e = [...this.list].map(([e, t]) => t.status);
		return new Set(e);
	}
	get usedPriorities() {
		let e = [...this.list].map(([e, t]) => t.priority).filter((e) => e);
		return new Set(e);
	}
	get usedStages() {
		let e = [...this.list].map(([e, t]) => t.stage).filter((e) => e);
		return new Set(e);
	}
	get usedUsers() {
		let e = [];
		for (let [t, n] of this.list) {
			e.push(n.creationAuthor), n.assignedTo && e.push(n.assignedTo), n.modifiedAuthor && e.push(n.modifiedAuthor);
			for (let [t, r] of n.comments) e.push(r.author), r.modifiedAuthor && e.push(r.modifiedAuthor);
		}
		return new Set(e);
	}
	get usedLabels() {
		let e = [];
		for (let [t, n] of this.list) e.push(...n.labels);
		return new Set(e);
	}
	updateExtensions() {
		for (let [e, t] of this.list) {
			for (let e of t.labels) this.config.labels.add(e);
			this.config.types.add(t.type), t.priority && this.config.priorities.add(t.priority), t.stage && this.config.stages.add(t.stage), this.config.statuses.add(t.status), this.config.users.add(t.creationAuthor), t.assignedTo && this.config.users.add(t.assignedTo), t.modifiedAuthor && this.config.users.add(t.modifiedAuthor);
			for (let [e, n] of t.comments) this.config.users.add(n.author), n.modifiedAuthor && this.config.users.add(n.modifiedAuthor);
		}
	}
	updateViewpointReferences() {
		let e = this.components.get(wu);
		for (let [t, n] of this.list) for (let t of n.viewpoints) e.list.has(t) || n.viewpoints.delete(t);
	}
	async export(e = this.list.values()) {
		let t = new lu();
		t.file("bcf.version", `<?xml version="1.0" encoding="UTF-8"?>
    <Version VersionId="${this.config.version}" xsi:noNamespaceSchemaLocation="https://raw.githubusercontent.com/buildingSMART/BCF-XML/release_3_0/Schemas/version.xsd"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    </Version>`);
		for (let [e, n] of this.documents.entries()) n.type !== "external" && t.file(this.config.version === "2.1" ? n.fileName : `documents/${e}`, n.data);
		if (this.config.version === "3") {
			let e = [];
			for (let [t, n] of this.documents.entries()) {
				let { type: r, description: i } = n;
				r !== "external" && e.push(`<Document Guid="${t}">
        <Filename>${n.fileName}</Filename>
        ${i ? `<Description>${i}</Description>` : ""}
      </Document>`);
			}
			e.length > 0 && t.file("documents.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <DocumentInfo xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="documents.xsd">
    <Documents>
      ${e.join("\n")}
    </Documents>
  </DocumentInfo>`);
		}
		t.file("bcf.extensions", this.serializeExtensions());
		let n = this.components.get(wu);
		for (let r of e) {
			let e = t.folder(r.guid);
			e.file("markup.bcf", r.serialize());
			for (let t of r.viewpoints) {
				let r = n.list.get(t);
				if (!r) continue;
				let i = r.title ?? r.guid;
				e.file(`${i}.bcfv`, await r.serialize());
				let a = n.snapshots.get(r.snapshot);
				if (!a) continue;
				let o = a ? r.snapshot : r.guid, s = n.getSnapshotExtension(r.snapshot);
				e.file(`${o}.${s}`, a, { binary: !0 });
			}
		}
		return await t.generateAsync({ type: "blob" });
	}
	serializeExtensions() {
		let e = [...this.config.types].map((e) => `<TopicType>${e}</TopicType>`).join("\n"), t = [...this.config.statuses].map((e) => `<TopicStatus>${e}</TopicStatus>`).join("\n"), n = [...this.config.priorities].map((e) => `<Priority>${e}</Priority>`).join("\n"), r = [...this.config.labels].map((e) => `<TopicLabel>${e}</TopicLabel>`).join("\n"), i = [...this.config.stages].map((e) => `<Stage>${e}</Stage>`).join("\n"), a = [...this.config.users].map((e) => `<User>${e}</User>`).join("\n");
		return `
      <?xml version="1.0" encoding="UTF-8"?>
      <Extensions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="your-schema-location.xsd">
        ${e.length === 0 ? "" : `<TopicTypes>
${e}
</TopicTypes>`}
        ${t.length === 0 ? "" : `<TopicStatuses>
${t}
</TopicStatuses>`}
        ${n.length === 0 ? "" : `<Priorities>
${n}
</Priorities>`}
        ${r.length === 0 ? "" : `<TopicLabels>
${r}
</TopicLabels>`}
        ${i.length === 0 ? "" : `<Stages>
${i}
</Stages>`}
        ${a.length === 0 ? "" : `<Users>
${a}
</Users>`}
      </Extensions>
    `;
	}
	processMarkupComment(e) {
		let { Guid: t, Date: n, Author: r, Comment: i, Viewpoint: a } = e;
		if (!(t && n && r && uu)) return null;
		let o = new uu(this.components, i ?? "");
		return o.guid = t, o.date = new Date(n), o.author = r, o.viewpoint = a?.Guid, o.modifiedAuthor = e.ModifiedAuthor, o.modifiedDate = e.ModifiedDate ? new Date(e.ModifiedDate) : void 0, o;
	}
	getMarkupComments(e, t) {
		let n;
		if (t === "2.1" && (n = e.Comment), t === "3" && (n = e.Topic.Comments?.Comment), !n) return [];
		n = Array.isArray(n) ? n : [n];
		let r = n.map((e) => this.processMarkupComment(e)).filter((e) => e);
		return Array.isArray(r) ? r : [r];
	}
	getMarkupLabels(e, t) {
		let n;
		return t === "2.1" && (n = e.Topic.Labels), t === "3" && (n = e.Topic.Labels?.Label), n ? Array.isArray(n) ? n : [n] : [];
	}
	getMarkupViewpoints(e, t) {
		let n;
		return t === "2.1" && (n = e.Viewpoints), t === "3" && (n = e.Topic.Viewpoints?.ViewPoint), n ? (n = Array.isArray(n) ? n : [n], n) : [];
	}
	getMarkupRelatedTopics(e, t) {
		let n;
		return t === "2.1" && (n = e.Topic.RelatedTopic), t === "3" && (n = e.Topic.RelatedTopics?.RelatedTopic), n ? (Array.isArray(n) ? n : [n]).map((e) => e.Guid) : [];
	}
	getMarkupDocumentReferences(e, t) {
		let n;
		return t === "2.1" && (n = e.Topic.DocumentReference), t === "3" && (n = e.Topic.DocumentReferences?.DocumentReference), n ? Array.isArray(n) ? n : [n] : [];
	}
	async load(t) {
		let { fallbackVersionOnImport: n, ignoreIncompleteTopicsOnImport: r, updateExtensionsOnImport: i } = this.config, a = new lu();
		await a.loadAsync(t);
		let o = Object.values(a.files), s = n, c = o.find((e) => e.name.endsWith(".version"));
		if (c) {
			let t = await c.async("string"), n = e.xmlParser.parse(t).Version.VersionId;
			s = String(n);
		}
		if (!(s && (s === "2.1" || s === "3"))) throw Error(`BCFTopics: ${s} is not supported.`);
		let l = o.find((e) => e.name.endsWith(".extensions"));
		if (i && l) {
			let e = await l.async("string");
			pu(this, e);
		}
		let u = [], d = this.components.get(wu), f = o.filter((e) => e.name.endsWith(".bcfv"));
		for (let t of f) {
			let n = await t.async("string"), r = e.xmlParser.parse(n).VisualizationInfo;
			if (!r) {
				console.warn("Missing VisualizationInfo in Viewpoint");
				continue;
			}
			let i = {}, { Guid: a, ClippingPlanes: o, Components: c, OrthogonalCamera: l, PerspectiveCamera: d } = r;
			if (a && (i.guid = a), c) {
				let e = {
					selection: [],
					coloring: [],
					visibility: {
						default_visibility: !1,
						exceptions: [],
						view_setup_hints: {
							spaces_visible: !1,
							space_boundaries_visible: !1,
							openings_visible: !1
						}
					}
				};
				i.components = e;
				let { Selection: t, Visibility: n } = c;
				if (t && t.Component && (e.selection = (Array.isArray(t.Component) ? t.Component : [t.Component]).map((e) => e.IfcGuid ? { ifc_guid: e.IfcGuid } : null).filter((e) => e !== null)), n && "DefaultVisibility" in n && (e.visibility.default_visibility = n.DefaultVisibility), n && n.Exceptions && "Component" in n.Exceptions) {
					let { Component: t } = n.Exceptions, r = Array.isArray(t) ? t : [t];
					e.visibility.exceptions = r.map((e) => e.IfcGuid ? { ifc_guid: e.IfcGuid } : null).filter((e) => e !== null);
				}
				let r;
				s === "2.1" && (r = c.ViewSetupHints), s === "3" && (r = c.Visibility?.ViewSetupHints), r && ("OpeningsVisible" in r && (e.visibility.view_setup_hints.openings_visible = r.OpeningsVisible), "SpacesVisible" in r && (e.visibility.view_setup_hints.spaces_visible = r.SpacesVisible), "SpaceBoundariesVisible" in r && (e.visibility.view_setup_hints.space_boundaries_visible = r.SpaceBoundariesVisible));
				let { Coloring: a } = c;
				if (a && a.Color) {
					let t = Array.isArray(a.Color) ? a.Color : [a.Color];
					for (let n of t) {
						let { Color: t, Component: r } = n;
						if (!(t.length === 6 || t.length === 8)) continue;
						let i = t.length === 6 ? t : t.slice(2), a = (Array.isArray(r) ? r : [r]).map((e) => e.IfcGuid ? { ifc_guid: e.IfcGuid } : null).filter((e) => e !== null);
						e.coloring.push({
							color: i,
							components: a
						});
					}
				}
			}
			if (l || d) {
				let e = r.PerspectiveCamera ?? r.OrthogonalCamera, { CameraViewPoint: t, CameraDirection: n } = e, a = new G(Number(t.X), Number(t.Z), Number(-t.Y)), o = new G(Number(n.X), Number(n.Z), Number(-n.Y)), s = {
					camera_view_point: {
						x: a.x,
						y: a.y,
						z: a.z
					},
					camera_direction: {
						x: o.x,
						y: o.y,
						z: o.z
					},
					aspect_ratio: "AspectRatio" in e ? e.AspectRatio : 1,
					camera_up_vector: {
						x: 0,
						y: 0,
						z: 0
					}
				};
				"ViewToWorldScale" in e && (i.orthogonal_camera = {
					...s,
					view_to_world_scale: e.ViewToWorldScale
				}), "FieldOfView" in e && (i.perspective_camera = {
					...s,
					field_of_view: e.FieldOfView
				});
			}
			o && (i.clipping_planes = (Array.isArray(o.ClippingPlane) ? o.ClippingPlane : [o.ClippingPlane]).map(({ Location: e, Direction: t }) => ({
				location: {
					x: e.x,
					y: e.y,
					z: e.z
				},
				direction: {
					x: t.x,
					y: t.y,
					z: t.z
				}
			})));
			let f = new xu(this.components, i);
			u.push(f);
		}
		let p = {}, m = [], h = o.filter((e) => e.name.endsWith(".bcf"));
		for (let t of h) {
			let n = await t.async("string"), i = e.xmlParser.parse(n).Markup, a = i.Topic, { Guid: c, TopicType: l, TopicStatus: u, Title: f, CreationDate: h, CreationAuthor: g } = a;
			if (r && !(c && l && u && f && h && g)) continue;
			let _ = new fu(this.components);
			_.guid = c ?? _.guid;
			let v = this.getMarkupRelatedTopics(i, s);
			p[_.guid] = new Set(v), _.type = l ?? _.type, _.status = u ?? _.status, _.title = f ?? _.title, _.creationDate = h ? new Date(h) : _.creationDate, _.creationAuthor = g ?? _.creationAuthor, _.serverAssignedId = a.ServerAssignedId, _.priority = a.Priority, _.index = a.Index, _.modifiedDate = a.ModifiedDate ? new Date(a.ModifiedDate) : void 0, _.modifiedAuthor = a.ModifiedAuthor, _.dueDate = a.DueDate ? new Date(a.DueDate) : void 0, _.assignedTo = a.AssignedTo, _.description = a.Description, _.stage = a.Stage;
			let y = this.getMarkupLabels(i, s);
			for (let e of y) _.labels.add(e);
			let b = this.getMarkupComments(i, s);
			for (let e of b) _.comments.set(e.guid, e);
			let x = this.getMarkupViewpoints(i, s);
			for (let e of x) {
				if (!(e && e.Guid)) continue;
				let t = d.list.get(e.Guid);
				if (!t) continue;
				_.viewpoints.add(t.guid);
				let n = `${_.guid}/${e.Snapshot}`, r = o.find(({ name: e }) => e === n);
				if (r) {
					let e = await r.async("arraybuffer"), n = new Uint8Array(e);
					d.snapshots.set(t.guid, n), t.snapshot = t.guid ?? null;
				}
			}
			let S = this.getMarkupDocumentReferences(i, s), C = o.find((e) => e.name === "documents.xml"), w = [], T = await C?.async("string");
			if (T) {
				let e = $r.parser.parse(T).DocumentInfo?.Documents?.Document;
				w = Array.isArray(e) ? e : [e];
			}
			for (let e of S) {
				let { Description: t, DocumentGuid: n, Url: r, isExternal: i, ReferencedDocument: a } = e;
				if (n && w.length > 0) {
					let e = w.find(({ Guid: e }) => e === n), t = await o.find((e) => e.name.endsWith(n))?.async("uint8array");
					if (!(e && t)) continue;
					let { Description: r, Filename: i } = e;
					this.documents.set(n, {
						type: "internal",
						fileName: i,
						description: r,
						data: t
					}), _.documentReferences.add(n);
				}
				if (r) {
					let e = this.documents.add({
						type: "external",
						url: r,
						description: t
					});
					_.documentReferences.add(e);
				}
				if (a) {
					let e = null;
					if (i) e = this.documents.add({
						type: "external",
						url: a,
						description: t
					});
					else {
						let n = a.split("/"), r = n[n.length - 1], i = await o.find((e) => e.name.endsWith(r))?.async("uint8array");
						if (!i) continue;
						e = this.documents.add({
							type: "internal",
							fileName: r,
							data: i,
							description: t
						});
					}
					_.documentReferences.add(e);
				}
			}
			this.list.set(_.guid, _), m.push(_);
		}
		for (let e in p) {
			let t = this.list.get(e);
			if (!t) continue;
			let n = p[e];
			for (let e of n) t.relatedTopics.add(e);
		}
		return this.onBCFImported.trigger(m), {
			viewpoints: u,
			topics: m
		};
	}
};
X(hu, "uuid", "de977976-e4f6-4e4f-a01a-204727839802"), X(hu, "xmlParser", new Ir({
	allowBooleanAttributes: !0,
	attributeNamePrefix: "",
	ignoreAttributes: !1,
	ignoreDeclaration: !0,
	ignorePiTags: !0,
	numberParseOptions: {
		leadingZeros: !0,
		hex: !0
	},
	parseAttributeValue: !0,
	preserveOrder: !1,
	processEntities: !1,
	removeNSPrefix: !0,
	trimValues: !0
}));
var gu = hu, _u = class e {
	constructor(t, n, r, i, a, o = 5, s = !0) {
		X(this, "onDraggingStarted", new Z()), X(this, "onDraggingEnded", new Z()), X(this, "onDisposed", new Z()), X(this, "normal"), X(this, "origin"), X(this, "three", new ne()), X(this, "components"), X(this, "world"), X(this, "type", "default"), X(this, "_title", "Clipping Plane"), X(this, "_helper"), X(this, "_visible", !0), X(this, "_enabled", !0), X(this, "_controlsActive", !1), X(this, "_arrowBoundBox", new U()), X(this, "_planeMesh"), X(this, "_controls"), X(this, "_hiddenMaterial", new ue({ visible: !1 })), X(this, "_sizeMultiplier", 5), X(this, "_autoScale", !0), X(this, "_visibilityBeforeDisabled", !0), X(this, "notifyManager", () => {
			let e = this.components.get(bu), t = e.list.getKey(this);
			t && e.list.set(t, this);
		}), X(this, "update", () => {
			this._enabled && (this.three.setFromNormalAndCoplanarPoint(this.normal, this._helper.position), this.updateScale());
		}), X(this, "updateScale", () => {
			if (!this.autoScale) return;
			let e = this.world.camera?.three;
			if (!e || !(e instanceof me)) return;
			let t = new G();
			e.getWorldPosition(t);
			let n = t.distanceTo(this._helper.position) / 7 * this._sizeMultiplier;
			this._planeMesh.scale.set(n, n, n);
		}), X(this, "changeDrag", (e) => {
			this._visible = !e.value, this.preventCameraMovement(), this.notifyDraggingChanged(e);
		});
		var c;
		if (this.components = t, this.world = n, !n.renderer) throw Error("The given world must have a renderer!");
		this.normal = i, this.origin = r, this._sizeMultiplier = o;
		let l = t.get(bu);
		n.renderer.setPlane(!0, this.three, l.localClippingPlanes), this._planeMesh = e.newPlaneMesh(o, a), this._helper = this.newHelper(), this._controls = this.newTransformControls(), this.three.setFromNormalAndCoplanarPoint(i, r), s && this.toggleControls(!0), this.updateScale(), (c = n.camera) != null && c.controls && n.camera.controls.addEventListener("update", this.updateScale);
	}
	set title(e) {
		this._title = e, this.notifyManager();
	}
	get title() {
		return this._title;
	}
	get autoScale() {
		return this._autoScale;
	}
	set autoScale(e) {
		this._autoScale = e, e && this.updateScale();
	}
	get enabled() {
		return this._enabled;
	}
	set enabled(e) {
		if (this.world.isDisposing) return;
		if (!this.world.renderer) throw Error("No renderer found for clipping plane!");
		this._enabled = e, e ? this.visible = this._visibilityBeforeDisabled : (this._visibilityBeforeDisabled = this.visible, this.visible = !1);
		let t = this.components.get(bu);
		this.world.renderer.setPlane(e, this.three, t.localClippingPlanes), this.notifyManager();
	}
	get visible() {
		return this._visible;
	}
	set visible(e) {
		this._visible = e, this._controls.getHelper().visible = e, this._helper.visible = e, this.toggleControls(e), this.notifyManager();
	}
	get meshes() {
		return [this._planeMesh, this._arrowBoundBox];
	}
	get planeMaterial() {
		return this._planeMesh.material;
	}
	set planeMaterial(e) {
		this._planeMesh.material = e;
	}
	get size() {
		return this._sizeMultiplier;
	}
	set size(e) {
		this._sizeMultiplier = e, this.autoScale ? this.updateScale() : this._planeMesh.scale.set(e, e, e);
	}
	get helper() {
		return this._helper;
	}
	get controls() {
		return this._controls;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		this.reset(), this.normal.equals(e) || (this.normal.copy(e), this._helper.lookAt(e)), this.origin.copy(t), this._helper.position.copy(t), this._helper.updateMatrix(), this.update();
	}
	dispose() {
		var e;
		this._enabled = !1, (e = this.world.camera) != null && e.controls && this.world.camera.controls.removeEventListener("update", this.updateScale), this.onDraggingStarted.reset(), this.onDraggingEnded.reset(), this._helper.removeFromParent(), this.world.renderer && this.world.renderer.setPlane(!1, this.three), this._arrowBoundBox.removeFromParent(), this._arrowBoundBox.geometry.dispose(), this._planeMesh.geometry.dispose(), this._controls.getHelper().removeFromParent(), this._controls.dispose(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	reset() {
		let e = new G(1, 0, 0), t = new G();
		this.normal.equals(e) || (this.normal.copy(e), this._helper.lookAt(e)), this.origin.copy(t), this._helper.position.copy(t), this._helper.updateMatrix();
	}
	toggleControls(e) {
		if (e) {
			if (this._controlsActive) return;
			this._controls.addEventListener("change", this.update), this._controls.addEventListener("dragging-changed", this.changeDrag);
		} else this._controls.removeEventListener("change", this.update), this._controls.removeEventListener("dragging-changed", this.changeDrag);
		this._controlsActive = e;
	}
	newTransformControls() {
		if (!this.world.renderer) throw Error("No renderer found for clipping plane!");
		let e = this.world.camera.three, t = this.world.renderer.three.domElement, n = new Fe(e, t);
		return this.initializeControls(n), this.world.scene.three.add(n.getHelper()), n;
	}
	initializeControls(e) {
		e.attach(this._helper), e.showX = !1, e.showY = !1, e.setSpace("local"), this.createArrowBoundingBox(), e.getHelper().children[0].children[0].add(this._arrowBoundBox);
	}
	createArrowBoundingBox() {
		this._arrowBoundBox.geometry = new F(.18, .18, 1.2), this._arrowBoundBox.material = this._hiddenMaterial, this._arrowBoundBox.rotateX(Math.PI / 2), this._arrowBoundBox.updateMatrix(), this._arrowBoundBox.geometry.applyMatrix4(this._arrowBoundBox.matrix);
	}
	notifyDraggingChanged(e) {
		e.value ? this.onDraggingStarted.trigger() : this.onDraggingEnded.trigger();
	}
	preventCameraMovement() {
		this.world.camera.enabled = this._visible;
	}
	newHelper() {
		let e = new Ce();
		return e.lookAt(this.normal), e.position.copy(this.origin), this._planeMesh.position.z += .01, e.add(this._planeMesh), this.world.scene.three.add(e), e;
	}
	static newPlaneMesh(e, t) {
		let n = new U(new ze(1), t);
		return n.scale.set(e, e, e), n;
	}
}, vu = class extends ii {
	constructor() {
		super(...arguments), X(this, "_config", {
			enabled: {
				value: !0,
				type: "Boolean"
			},
			visible: {
				value: !0,
				type: "Boolean"
			},
			color: {
				value: new N(),
				type: "Color"
			},
			opacity: {
				type: "Number",
				interpolable: !0,
				value: 1,
				min: 0,
				max: 1
			},
			size: {
				type: "Number",
				interpolable: !0,
				value: 2,
				min: 0,
				max: 100
			}
		});
	}
	get enabled() {
		return this._config.enabled.value;
	}
	set enabled(e) {
		this._config.enabled.value = e, this._component.enabled = e;
	}
	get visible() {
		return this._config.visible.value;
	}
	set visible(e) {
		this._config.visible.value = e, this._component.visible = e;
	}
	get color() {
		return this._config.color.value;
	}
	set color(e) {
		this._config.color.value = e, this._component.material.color.copy(e);
	}
	get opacity() {
		return this._config.opacity.value;
	}
	set opacity(e) {
		this._config.opacity.value = e, this._component.material.opacity = e;
	}
	get size() {
		return this._config.size.value;
	}
	set size(e) {
		this._config.size.value = e, this._component.size = e;
	}
}, yu = class e extends qt {
	constructor(t) {
		super(t), X(this, "onSetup", new Z()), X(this, "onBeforeDrag", new Z()), X(this, "onAfterDrag", new Z()), X(this, "onBeforeCreate", new Z()), X(this, "onBeforeCancel", new Z()), X(this, "onAfterCancel", new Z()), X(this, "onBeforeDelete", new Z()), X(this, "onAfterCreate", new Z()), X(this, "onAfterDelete", new Z()), X(this, "onDisposed", new Z()), X(this, "isSetup", !1), X(this, "orthogonalY", !1), X(this, "toleranceOrthogonalY", .7), X(this, "autoScalePlanes", !0), X(this, "localClippingPlanes", !1), X(this, "Type", _u), X(this, "list", new a()), X(this, "config", new vu(this, this.components, "Clipper", e.uuid)), X(this, "_defaultConfig", {
			color: new N(12255487),
			opacity: .2,
			size: 2
		}), X(this, "_material", new ue({
			color: 12255487,
			side: 2,
			transparent: !0,
			opacity: .2
		})), X(this, "_size", 5), X(this, "_enabled", !1), X(this, "_visible", !0), X(this, "onStateChanged", new Z()), this.components.add(e.uuid, this), this.setEvents();
	}
	get enabled() {
		return this._enabled;
	}
	set enabled(e) {
		this._enabled = e, this.onStateChanged.trigger(["enabled"]);
	}
	get visible() {
		return this._visible;
	}
	set visible(e) {
		this._visible = e;
		for (let [t, n] of this.list) n.visible = e;
		this.onStateChanged.trigger(["visibility"]);
	}
	get material() {
		return this._material;
	}
	set material(e) {
		this._material = e;
		for (let [t, n] of this.list) n.planeMaterial = e;
		this.onStateChanged.trigger(["material"]);
	}
	get size() {
		return this._size;
	}
	set size(e) {
		this._size = e;
		for (let [t, n] of this.list) n.size = e;
		this.onStateChanged.trigger(["size"]);
	}
	setEvents() {
		this.list.onBeforeDelete.add(({ value: e }) => {
			if (!e.world.renderer) throw Error("Renderer not found for this plane's world!");
			e.world.renderer.setPlane(!1, e.three), e.dispose(), this.updateMaterialsAndPlanes(), this.onAfterDelete.trigger(e);
		});
		let e = this.components.get(Q);
		if (e.initialized) this.subscribeToFragmentMaterials();
		else {
			let t = () => {
				e.onFragmentsLoaded.remove(t), this.subscribeToFragmentMaterials();
			};
			e.onFragmentsLoaded.add(t);
		}
	}
	subscribeToFragmentMaterials() {
		let e = this.components.get(Q);
		for (let [, t] of e.core.models.materials.list) this.applyClippingToFragmentMaterial(t);
		e.core.models.materials.list.onItemSet.add(({ value: e }) => {
			this.applyClippingToFragmentMaterial(e);
		});
	}
	applyClippingToFragmentMaterial(e) {
		if (!this.localClippingPlanes) return;
		let t = this.components.get(Jl);
		for (let [, n] of t.list) if (n.renderer) {
			e.clippingPlanes = n.renderer.clippingPlanes;
			return;
		}
	}
	dispose() {
		this._enabled = !1, this.components.get(oi).list.delete(this.config.uuid), this.list.clear(), this._material.dispose(), this.onBeforeCreate.reset(), this.onBeforeCancel.reset(), this.onBeforeDelete.reset(), this.onBeforeDrag.reset(), this.onAfterCreate.reset(), this.onAfterCancel.reset(), this.onAfterDelete.reset(), this.onAfterDrag.reset(), this.onDisposed.trigger(e.uuid), this.onDisposed.reset();
	}
	async create(e) {
		let t = await this.components.get(Wl).get(e).castRay();
		return t ? this.createPlaneFromIntersection(e, t) : null;
	}
	createFromNormalAndCoplanarPoint(e, t, n) {
		let r = this.newPlane(e, n, t);
		return this.updateMaterialsAndPlanes(), r;
	}
	async delete(e, t) {
		if (!t) {
			let n = await this.pickPlane(e);
			if (!n) return;
			t = this.list.getKey(n);
		}
		t && this.list.delete(t);
	}
	deleteAll(e) {
		for (let [t, n] of this.list) (!e || e.has(n.type)) && this.list.delete(t);
	}
	setup(e) {
		let t = {
			...this._defaultConfig,
			...e
		};
		this.config.color = t.color, this.config.opacity = t.opacity, this.config.size = t.size, this.isSetup = !0, this.onSetup.trigger();
	}
	pickPlane(e) {
		let t = this.components.get(Wl).get(e), n = this.getAllPlaneMeshes(), r = t.castRayToObjects(n);
		if (r) {
			let e = r.object;
			return [...this.list.values()].find((t) => t.meshes.includes(e));
		}
	}
	getAllPlaneMeshes() {
		let e = [];
		for (let [t, n] of this.list) e.push(...n.meshes);
		return e;
	}
	createPlaneFromIntersection(e, t) {
		if (!e.renderer) throw Error("The given world must have a renderer!");
		let n = t.point.distanceTo(new G(0, 0, 0)), r = t.normal || t.face?.normal;
		if (!n || !r) return null;
		let i = this.getWorldNormal(t, r), a = this.newPlane(e, t.point, i.negate()), o = this.list.get(a);
		return o.visible = this._visible, o.size = this._size, e.renderer.setPlane(!0, o.three, this.localClippingPlanes), this.updateMaterialsAndPlanes(), o;
	}
	getWorldNormal(e, t) {
		let n = e.object, r = e.object.matrixWorld.clone();
		if (n instanceof E && e.instanceId !== void 0) {
			let t = new H();
			n.getMatrixAt(e.instanceId, t), r = t.multiply(r);
		}
		let i = new ce().getNormalMatrix(r), a = t.clone().applyMatrix3(i).normalize();
		return this.normalizePlaneDirectionY(a), a;
	}
	normalizePlaneDirectionY(e) {
		this.orthogonalY && (e.y > this.toleranceOrthogonalY && (e.x = 0, e.y = 1, e.z = 0), e.y < -this.toleranceOrthogonalY && (e.x = 0, e.y = -1, e.z = 0));
	}
	newPlane(e, t, n) {
		let r = new this.Type(this.components, e, t, n, this._material);
		r.autoScale = this.autoScalePlanes, r.onDraggingStarted.add(() => this.onBeforeDrag.trigger(r)), r.onDraggingEnded.add(() => this.onAfterDrag.trigger(r));
		let i = $t.create();
		return this.list.set(i, r), this.onAfterCreate.trigger(r), i;
	}
	updateMaterialsAndPlanes() {
		let e = this.components.get(Jl);
		for (let [t, n] of e.list) {
			if (!n.renderer) continue;
			n.renderer.updateClippingPlanes();
			let { clippingPlanes: e } = n.renderer;
			for (let t of n.meshes) if (t.material) if (Array.isArray(t.material)) for (let n of t.material) n.clippingPlanes = e;
			else t.material.clippingPlanes = e;
		}
	}
};
X(yu, "uuid", "66290bc5-18c4-4cd1-9379-2e17a0617611");
var bu = yu, xu = class {
	constructor(e, t) {
		X(this, "title"), X(this, "guid", $t.create()), X(this, "clippingPlanes", new Be()), X(this, "camera", {
			aspect_ratio: 1,
			field_of_view: 60,
			camera_direction: {
				x: 0,
				y: 0,
				z: 0
			},
			camera_view_point: {
				x: 0,
				y: 0,
				z: 0
			},
			camera_up_vector: {
				x: 0,
				y: 1,
				z: 0
			}
		}), X(this, "customData", {}), X(this, "exceptionComponents", new Be()), X(this, "selectionComponents", new Be()), X(this, "componentColors", new a()), X(this, "spacesVisible", !1), X(this, "spaceBoundariesVisible", !1), X(this, "openingsVisible", !1), X(this, "defaultVisibility", !0), X(this, "snapshot", this.guid), X(this, "_components"), X(this, "_world", null), X(this, "notifyUpdate", () => {
			this._components.get(wu).list.set(this.guid, this);
		}), this._components = e, t && (this.guid = t.guid ?? this.guid, this.set(t)), this.setEvents();
	}
	async getSelectionMap() {
		return await this._components.get(Q).guidsToModelIdMap([...this.selectionComponents]);
	}
	async getExceptionMap() {
		return await this._components.get(Q).guidsToModelIdMap([...this.exceptionComponents]);
	}
	get projection() {
		return "field_of_view" in this.camera ? "Perspective" : "Orthographic";
	}
	get position() {
		let e = this._components.get(Q), { camera_view_point: t } = this.camera, { x: n, y: r, z: i } = t, a = new G(n, r, i);
		return e.applyBaseCoordinateSystem(a, new H()), a;
	}
	set position(e) {
		let t = e.clone(), n = this._components.get(Q);
		e.clone().applyMatrix4(n.baseCoordinationMatrix.clone().invert()), this.camera.camera_view_point = {
			x: t.x,
			y: t.y,
			z: t.z
		};
	}
	get direction() {
		let { camera_direction: e } = this.camera, { x: t, y: n, z: r } = e;
		return new G(t, n, r);
	}
	set world(e) {
		this._world = e;
	}
	get world() {
		return this._world;
	}
	get _managerVersion() {
		return this._components.get(gu).config.version;
	}
	get topics() {
		return [...this._components.get(gu).list.values()].filter((e) => e.viewpoints.has(this.guid));
	}
	setEvents() {
		this.selectionComponents.onUpdated.add(this.notifyUpdate), this.exceptionComponents.onUpdated.add(this.notifyUpdate), this.clippingPlanes.onUpdated.add(this.notifyUpdate), this.componentColors.onItemSet.add(this.notifyUpdate), this.componentColors.onItemDeleted.add(this.notifyUpdate), this.componentColors.onItemUpdated.add(this.notifyUpdate), this.componentColors.onCleared.add(this.notifyUpdate);
	}
	set(e) {
		this.title = e.title;
		let { components: t, perspective_camera: n, orthogonal_camera: r, clipping_planes: i } = e;
		if (t) {
			let { selection: e, visibility: n, coloring: r } = t;
			if (e) {
				this.selectionComponents.clear();
				for (let { ifc_guid: t } of e) t && this.selectionComponents.add(t);
			}
			if (n) {
				let { default_visibility: e, exceptions: t, view_setup_hints: r } = n;
				if (e !== void 0 && (this.defaultVisibility = e), t) {
					this.exceptionComponents.clear();
					for (let { ifc_guid: e } of t) e && this.exceptionComponents.add(e);
				}
				if (r) {
					let { spaces_visible: e, space_boundaries_visible: t, openings_visible: n } = r;
					e !== void 0 && (this.spacesVisible = e), t !== void 0 && (this.spaceBoundariesVisible = t), n !== void 0 && (this.openingsVisible = n);
				}
			}
			if (r) {
				this.componentColors.clear();
				for (let e of r) {
					let { color: t, components: n } = e, r = n.map((e) => e.ifc_guid).filter((e) => e !== null);
					this.componentColors.set(t, r);
				}
			}
		}
		if ((n || r) && (this.camera = n ?? r), i && this.world) {
			let e = this._components.get(bu);
			for (let t of i) {
				let { location: n, direction: r } = t, i = new G(n.x, n.z, -n.y), a = new G(r.x, r.z, -r.y), o = e.createFromNormalAndCoplanarPoint(this.world, a, i);
				this.clippingPlanes.add(o), e.list.get(o).enabled = !1, e.list.get(o).visible = !1;
			}
		}
		this.notifyUpdate();
	}
	async go(e) {
		if (!this.world) return;
		let { camera: t } = this.world;
		if (!(t instanceof ru)) throw Error("Viewpoint: the world's camera component must be of type OrthoPerspectiveCamera to switch between perspective and orthographic projections.");
		let { transition: n, applyClippings: r, applyVisibility: i, clippingsVisibility: a } = {
			transition: !0,
			applyClippings: !0,
			applyVisibility: !0,
			clippingsVisibility: !0,
			...e
		};
		t.projection.set(this.projection);
		let o = new G(this.camera.camera_view_point.x, this.camera.camera_view_point.y, this.camera.camera_view_point.z), s = new G(this.camera.camera_direction.x, this.camera.camera_direction.y, this.camera.camera_direction.z);
		if (o.equals(new G()) && s.equals(new G())) return;
		let c = this.position, l = this.direction, u = {
			x: c.x + l.x * 80,
			y: c.y + l.y * 80,
			z: c.z + l.z * 80
		}, d = [];
		r && this.setClippingState(!0), i && d.push(this.applyVisibility()), this.setClippingVisibility(a), d.push(t.controls.setLookAt(c.x, c.y, c.z, u.x, u.y, u.z, n)), await Promise.all(d);
	}
	async updateCamera(e = !0) {
		return new Promise((t) => {
			if (!this.world) {
				t(!1);
				return;
			}
			let { camera: n, renderer: r } = this.world;
			if (!r) throw Error("Viewpoint: the world needs to have a renderer!");
			if (!n.hasCameraControls()) throw Error("Viewpoint: world's camera need camera controls!");
			let i = n.three, a = i.getWorldPosition(new G()), o = i.getWorldDirection(new G()), { width: s, height: c } = r.getSize(), l = s / c;
			Number.isNaN(l) && (l = 1);
			let u = this._components.get(Q);
			a.applyMatrix4(u.baseCoordinationMatrix.clone().invert());
			let d = {
				aspect_ratio: l,
				camera_view_point: {
					x: a.x,
					y: a.y,
					z: a.z
				},
				camera_direction: {
					x: o.x,
					y: o.y,
					z: o.z
				},
				camera_up_vector: {
					x: 0,
					y: 1,
					z: 0
				}
			};
			if (i instanceof me ? this.camera = {
				...d,
				field_of_view: i.fov
			} : i instanceof ge && (this.camera = {
				...d,
				view_to_world_scale: i.top - i.bottom
			}), e) {
				let e = this._components.get(wu), i = r.three.domElement;
				r.three.render(this.world.scene.three, n.three), i.toBlob(async (n) => {
					if (n) {
						let t = await n.arrayBuffer(), r = new Uint8Array(t);
						e.snapshots.set(this.guid, r);
					}
					this.notifyUpdate(), t(!0);
				});
			} else this.notifyUpdate(), t(!0);
		});
	}
	takeSnapshot() {
		return new Promise((e) => {
			if (!this.world) {
				e(!1);
				return;
			}
			let { camera: t, renderer: n } = this.world;
			if (!n) throw Error("Viewpoint: the world needs to have a renderer!");
			let r = this._components.get(wu), i = n.three.domElement;
			n.three.render(this.world.scene.three, t.three), i.toBlob(async (t) => {
				if (t) {
					let e = await t.arrayBuffer(), n = new Uint8Array(e);
					r.snapshots.set(this.guid, n);
				}
				this.notifyUpdate(), e(!0);
			});
		});
	}
	updateClippingPlanes() {
		this.clippingPlanes.clear();
		let e = this._components.get(bu);
		for (let [t, n] of e.list) n.enabled && this.clippingPlanes.add(t);
	}
	async applyVisibility() {
		let e = this._components.get(ll);
		e.set(this.defaultVisibility);
		let t = await this.getExceptionMap();
		e.set(!this.defaultVisibility, t);
		let n = await this.getSelectionMap();
		e.set(!0, n);
	}
	async setColorizationState(e) {
		let t = this._components.get(Q), n = [];
		if (e) for (let [e, r] of this.componentColors) {
			let i = `#${e}`, a = await t.guidsToModelIdMap(r);
			for (let [e, r] of Object.entries(a)) {
				let a = t.list.get(e);
				a && n.push(a.highlight([...r], {
					customId: i,
					color: new N(i),
					renderedFaces: s.ONE,
					opacity: 1,
					transparent: !1
				}));
			}
		}
		else for (let [e, r] of this.componentColors) {
			let e = await t.guidsToModelIdMap(r);
			for (let [r, i] of Object.entries(e)) {
				let e = t.list.get(r);
				e && n.push(e.resetHighlight([...i]));
			}
		}
		n.push(t.core.update(!0)), await Promise.all(n);
	}
	setClippingState(e) {
		let t = this._components.get(bu);
		for (let [n, r] of t.list) r.enabled = e && this.clippingPlanes.has(n);
	}
	setClippingVisibility(e) {
		let t = this._components.get(bu);
		for (let n of this.clippingPlanes) {
			let r = t.list.get(n);
			r && (r.visible = e);
		}
	}
	async createComponentTags(e) {
		let t = this._components.get(Q), n = this._components.get(gu), r = "";
		if (n.config.includeSelectionTag) {
			let n = e === "selection" ? await this.getSelectionMap() : await this.getExceptionMap();
			for (let e in n) {
				let i = t.list.get(e);
				if (!i) continue;
				let a = n[e];
				for (let e of a) {
					let t = i.getItem(e), n = await t.getGuid();
					if (!n) continue;
					let a = (await t.getAttributes())?.getValue("Tag"), o = null;
					a && (o = `AuthoringToolId="${a}"`), r += `
<Component IfcGuid="${n}" ${o ?? ""} />`;
				}
			}
		} else r = [...this.selectionComponents].map((e) => `<Component IfcGuid="${e}" />`).join("\n");
		return r;
	}
	createColorTags() {
		let e = "";
		for (let [t, n] of this.componentColors.entries()) {
			let r = n.map((e) => `
<Component IfcGuid="${e}" />`).join("\n");
			e += `<Color Color="${t}">
${r}
</Color>`;
		}
		return e.length === 0 ? "<Coloring />" : `<Coloring>
${e}
</Coloring>`;
	}
	toJSON() {
		let e = this._components.get(bu), t = {
			guid: this.guid,
			components: {
				selection: [...this.selectionComponents].map((e) => ({
					ifc_guid: e,
					authoring_tool_id: null
				})),
				coloring: [...this.componentColors].map(([e, t]) => ({
					color: e,
					components: t.map((e) => ({
						ifc_guid: e,
						authoring_tool_id: null
					}))
				})),
				visibility: {
					default_visibility: this.defaultVisibility,
					exceptions: [...this.exceptionComponents].map((e) => ({
						ifc_guid: e,
						authoring_tool_id: null
					})),
					view_setup_hints: {
						spaces_visible: this.spacesVisible,
						space_boundaries_visible: this.spaceBoundariesVisible,
						openings_visible: this.openingsVisible
					}
				}
			},
			clipping_planes: [...this.clippingPlanes].map((t) => {
				let n = e.list.get(t);
				if (!n) return null;
				let r = n._controls.worldPosition ?? n.origin, { normal: i } = n;
				return {
					location: {
						x: r.x,
						y: -r.z,
						z: r.y
					},
					direction: {
						x: i.x,
						y: -i.z,
						z: i.y
					}
				};
			}).filter((e) => e !== null)
		};
		"field_of_view" in this.camera ? t.perspective_camera = this.camera : t.orthogonal_camera = this.camera;
		let n = this._components.get(wu), r = n.snapshots.get(this.snapshot);
		if (r) {
			let e = r.toString(), i = btoa(e);
			t.snapshot = {
				snapshot_type: n.getSnapshotExtension(this.snapshot),
				snapshot_data: i
			};
		}
		return t;
	}
	async serialize(e = this._managerVersion) {
		let t = this._components.get(Q), n = this.position;
		n.applyMatrix4(t.baseCoordinationMatrix.clone().invert());
		let r = this.direction;
		r.normalize();
		let i = new H().makeRotationX(Math.PI / 2), a = r.clone().applyMatrix4(i);
		a.normalize();
		let o = `<CameraViewPoint>
      <X>${n.x}</X>
      <Y>${-n.z}</Y>
      <Z>${n.y}</Z>
    </CameraViewPoint>`, s = `<CameraDirection>
      <X>${r.x}</X>
      <Y>${-r.z}</Y>
      <Z>${r.y}</Z>
    </CameraDirection>`, c = `<CameraUpVector>
      <X>${a.x}</X>
      <Y>${-a.z}</Y>
      <Z>${a.y}</Z>
    </CameraUpVector>`, l = `<AspectRatio>${this.camera.aspect_ratio}</AspectRatio>`, u = "";
		"view_to_world_scale" in this.camera ? u = `<OrthogonalCamera>
        ${o}
        ${s}
        ${c}
        ${l}
        <ViewToWorldScale>${this.camera.view_to_world_scale}</ViewToWorldScale>
      </OrthogonalCamera>` : "field_of_view" in this.camera && (u = `<PerspectiveCamera>
        ${o}
        ${s}
        ${c}
        ${l}
        <FieldOfView>${this.camera.field_of_view}</FieldOfView>
      </PerspectiveCamera>`);
		let d = `<ViewSetupHints SpacesVisible="${this.spacesVisible ?? !1}" SpaceBoundariesVisible="${this.spaceBoundariesVisible ?? !1}" OpeningsVisible="${this.openingsVisible ?? !1}" />`, f = (await this.createComponentTags("selection")).trim(), p = (await this.createComponentTags("exception")).trim(), m = this.createColorTags();
		return `<?xml version="1.0" encoding="UTF-8"?>
    <VisualizationInfo Guid="${this.guid}">
      <Components>
        ${e === "2.1" ? d : ""}
        ${f.length === 0 ? "" : `<Selection>${f}</Selection>`}
        <Visibility DefaultVisibility="${this.defaultVisibility}">
          ${e === "3" ? d : ""}
          ${p.length === 0 ? "" : `<Exceptions>${p}</Exceptions>`}
        </Visibility>
        ${m}
      </Components>
      ${u}
    </VisualizationInfo>`;
	}
}, Su = class extends ii {
	constructor() {
		super(...arguments), X(this, "_config", { overwriteColors: {
			value: !1,
			type: "Boolean"
		} });
	}
	get overwriteColors() {
		return this._config.overwriteColors.value;
	}
	set overwriteColors(e) {
		this._config.overwriteColors.value = e;
	}
}, Cu = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "world", null), X(this, "list", new a()), X(this, "snapshots", new a()), X(this, "isSetup", !1), X(this, "onSetup", new Z()), X(this, "config", new Su(this, this.components, "Viewpoints", e.uuid)), X(this, "onDisposed", new Z()), t.add(e.uuid, this);
	}
	create(e) {
		let t = new xu(this.components, e);
		return t.world = this.world, e || this.list.set(t.guid, t), t;
	}
	getSnapshotExtension(e) {
		let t = "jpeg", n = this.snapshots.get(e);
		if (!n) return t;
		let r = n.subarray(0, 4), i = "";
		for (let e = 0; e < r.length; e++) i += r[e].toString(16);
		return i.startsWith("89504e47") && (t = "png"), i.startsWith("ffd8ffe") && (t = "jpeg"), t;
	}
	setup() {}
	dispose() {
		this.list.dispose(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
};
X(Cu, "uuid", "ee867824-a796-408d-8aa0-4e5962a83c66");
var wu = Cu, Tu = class {
	constructor(e, t) {
		X(this, "_components"), X(this, "_cameraOffset", 10), X(this, "_planeHelper"), X(this, "_farPlaneHelper"), X(this, "_cameraHelper"), X(this, "onStateChanged", new Z()), X(this, "onUpdated", new Z()), X(this, "onDisposed", new Z()), X(this, "camera"), X(this, "plane", new ne()), X(this, "farPlane", new ne()), X(this, "id", $t.create()), X(this, "_open", !1), X(this, "_range", Du.defaultRange), X(this, "_world", null), X(this, "_helpersVisible", !1), X(this, "_planesEnabled", !1), this._components = e, this.camera = new ru(this._components);
		let { threeOrtho: n } = this.camera;
		if (t != null && t.id && (this.id = t.id), t != null && t.normal && t != null && t.point) {
			let { normal: e, point: n } = t;
			this.plane.setFromNormalAndCoplanarPoint(e, n);
		}
		this._cameraHelper = new ee(n), this._planeHelper = new Ge(this.plane, 50), this._farPlaneHelper = new Ge(this.farPlane, 50), this.farPlaneHelperColor = new N("blue"), this.update();
	}
	get _planeNormalOpposite() {
		return this.plane.normal.clone().negate();
	}
	get _planePosition() {
		return this.plane.normal.clone().multiplyScalar(-this.plane.constant);
	}
	get _cameraPosition() {
		return this._planePosition.addScaledVector(this._planeNormalOpposite, this._cameraOffset);
	}
	set open(e) {
		this._open = e, this.onStateChanged.trigger(["open"]);
	}
	get open() {
		return this._open;
	}
	set planeHelperColor(e) {
		!Array.isArray(this._planeHelper.material) && "color" in this._planeHelper.material && this._planeHelper.material.color instanceof N && (this._planeHelper.material.color = e);
	}
	set farPlaneHelperColor(e) {
		!Array.isArray(this._farPlaneHelper.material) && "color" in this._farPlaneHelper.material && this._farPlaneHelper.material.color instanceof N && (this._farPlaneHelper.material.color = e);
	}
	set range(e) {
		this._range = e, this.update();
	}
	get range() {
		return this._range;
	}
	set distance(e) {
		this.plane.constant = e, this.update();
	}
	get distance() {
		return this.plane.constant;
	}
	set world(e) {
		this._world = e, this.camera.currentWorld = e, e && (this.camera.projection.set("Orthographic"), this.camera.set("Plan"), this.camera.controls.dollySpeed = 6, this.camera.controls.restThreshold = .005, this.update());
	}
	get world() {
		return this._world;
	}
	set helpersVisible(e) {
		if (!e) {
			this._helpersVisible = e, this._planeHelper.removeFromParent(), this._farPlaneHelper.removeFromParent(), this._cameraHelper.removeFromParent();
			return;
		}
		this.world && (this._helpersVisible = e, this.world.scene.three.add(this._planeHelper, this._farPlaneHelper));
	}
	get helpersVisible() {
		return this._helpersVisible;
	}
	set planesEnabled(e) {
		let { world: t } = this;
		if (!t) return;
		let { renderer: n } = t;
		n && (n.setPlane(e, this.plane), n.setPlane(e, this.farPlane), this._planesEnabled = e);
	}
	get planesEnabled() {
		return this._planesEnabled;
	}
	dispose() {
		this.helpersVisible = !1;
		let e = this._components.get(Zt);
		e.destroy(this._planeHelper), e.destroy(this._farPlaneHelper), e.destroy(this._cameraHelper), this.camera.dispose(), this.onDisposed.trigger();
	}
	update() {
		if (this.world) {
			let e = this._cameraPosition, t = this._planePosition;
			this.camera.controls.setLookAt(e.x, e.y, e.z, t.x, t.y, t.z, !1);
		}
		this.farPlane.normal.copy(this._planeNormalOpposite), this.farPlane.constant = this.range - this.plane.constant, this.onUpdated.trigger();
	}
	flip() {
		this.plane.normal.negate(), this.update();
	}
}, Eu = class e extends qt {
	constructor(t) {
		super(t), X(this, "list", new a()), X(this, "enabled", !0), X(this, "world", null), X(this, "_fragmentsUpdateEvent", () => {
			this.components.get(Q).core.update(!0);
		}), X(this, "restoreCameraOnClose", !0), X(this, "_restoreState", null), t.add(e.uuid, this), this.setupEvents();
	}
	get hasOpenViews() {
		return [...this.list.values()].some((e) => e.open);
	}
	setupEvents() {
		this.list.onBeforeDelete.add(({ key: e, value: t }) => {
			t.open && this.close(e), t.dispose();
		});
	}
	create(e, t, n) {
		let r = new Tu(this.components, {
			id: n?.id,
			normal: e,
			point: t
		});
		return r.world = n?.world ?? this.world, this.list.set(r.id, r), r;
	}
	createFromPlane(e, t) {
		let n = new Tu(this.components, { id: t?.id });
		return n.plane.copy(e), n.update(), n.world = t?.world ?? this.world, this.list.set(n.id, n), n;
	}
	async createFromIfcStoreys(e) {
		let t = [], n = this.components.get(Q), r = e?.offset === void 0 ? .25 : e.offset;
		for (let [i, a] of n.list) {
			if (e && e.modelIds && !e.modelIds.some((e) => e.test(i))) continue;
			let n = Object.values(await a.getItemsOfCategories([/BUILDINGSTOREY/])).flat();
			if (n.length === 0) continue;
			let o = await a.getItemsData(n), [, s] = await a.getCoordinates(), c = new G(0, -1, 0);
			for (let n of o) {
				if (!("value" in n.Name && "value" in n.Elevation)) continue;
				let { value: i } = n.Name;
				if (e != null && e.storeyNames && !e.storeyNames.some((e) => e.test(i))) continue;
				let a = new ne(c, n.Elevation.value + s + r), o = this.createFromPlane(a, {
					id: i,
					world: e?.world
				});
				t.push(o);
			}
		}
		return t;
	}
	createElevations(e) {
		let t = [], n = this.components.get(Q), r = e?.combine !== void 0 && e.combine, i = e?.namingCallback ?? ((e) => ({
			front: `${r ? "Front" : `${e}: Front`}`,
			back: `${r ? "Back" : `${e}: Back`}`,
			left: `${r ? "Left" : `${e}: Left`}`,
			right: `${r ? "Right" : `${e}: Right`}`
		})), a = [];
		for (let [t, r] of n.list) e && e.modelIds && !e.modelIds.some((e) => e.test(t)) || a.push({
			id: t,
			box: r.box
		});
		if (a.length === 0) return t;
		if (r) {
			let e = this.components.get(dl);
			e.list.clear(), e.list.add(...a.map((e) => e.box)), a = [{
				id: "combined",
				box: e.get()
			}];
		}
		for (let { id: n, box: r } of a) {
			let { min: a, max: o } = r, s = Math.abs(o.x - a.x), c = Math.abs(o.z - a.z), l = new G();
			r.getCenter(l);
			let u = new ne(new G(0, 0, -1), o.z), d = new ne(new G(0, 0, 1), -a.z), f = new ne(new G(-1, 0, 0), o.x), p = new ne(new G(1, 0, 0), -a.x), { front: m, back: h, left: g, right: _ } = i(n), v = this.createFromPlane(u, {
				id: m,
				world: e?.world
			});
			v.range = c;
			let y = this.createFromPlane(d, {
				id: h,
				world: e?.world
			});
			y.range = c;
			let b = this.createFromPlane(f, {
				id: g,
				world: e?.world
			});
			b.range = s;
			let x = this.createFromPlane(p, {
				id: _,
				world: e?.world
			});
			x.range = s, t.push(v, y, b, x);
		}
		return t;
	}
	open(e) {
		let t = this.list.get(e);
		if (!t) throw Error(`Views: the view with id ${e} doesn't exist.`);
		if (t.open) return;
		let { world: n } = t;
		if (!n) throw Error(`Views: no world found for view with id ${e}.`);
		let { renderer: r } = n;
		if (!r) throw Error(`Views: no renderer found for world with id ${n.uuid}.`);
		for (let [, e] of this.list) e.world === n && this.close(e.id);
		this.restoreCameraOnClose && n.camera !== t.camera && !this._restoreState && n.camera.controls && (this._restoreState = {
			camera: n.camera,
			json: n.camera.controls.toJSON()
		}), r.setPlane(!0, t.plane), r.setPlane(!0, t.farPlane), this.setOnlyEnabledControls(n, t), t.camera.controls.addEventListener("rest", this._fragmentsUpdateEvent), n.camera = t.camera, t.open = !0;
	}
	close(e) {
		let t;
		if (t = e ? this.list.get(e) : [...this.list.values()].find((e) => e.open), e && !t) throw Error(`Views: the view with id ${e} doesn't exist.`);
		if (!t || !t.open) return;
		let { world: n } = t;
		if (!n) throw Error(`Views: no world found for view with id ${e}.`);
		let { renderer: r } = n;
		if (!r) throw Error(`Views: no renderer found for world with id ${n.uuid}.`);
		if (r.setPlane(!1, t.plane), r.setPlane(!1, t.farPlane), t.camera.controls.removeEventListener("rest", this._fragmentsUpdateEvent), n.useDefaultCamera(), t.open = !1, this.setOnlyEnabledControls(n, null), this.restoreCameraOnClose && this._restoreState) {
			let { camera: e, json: t } = this._restoreState;
			e === n.camera && e.controls && e.controls.fromJSON(t, !1), this._restoreState = null;
		}
	}
	setOnlyEnabledControls(e, t) {
		let n = t ? t.camera : e.defaultCamera, r = (e, t) => {
			e.controls && (e.controls.enabled = t);
		};
		r(n, !0), n !== e.defaultCamera && r(e.defaultCamera, !1);
		for (let [, t] of this.list) t.world === e && t.camera !== n && r(t.camera, !1);
	}
};
X(Eu, "uuid", "fb22f1f5-6598-4664-a11d-de8963ae420f"), X(Eu, "defaultRange", 15);
var Du = Eu, Ou = class {
	constructor(e) {
		X(this, "cardinality", "required"), X(this, "instructions"), X(this, "evalRequirement", (e, t, n, r) => {
			let i = {
				parameter: n,
				currentValue: e,
				requiredValue: t,
				pass: !1
			};
			r && this.addCheckResult(i, r);
			let a = !1;
			if (t.type === "simple" && (a = e === t.parameter), t.type === "enumeration" && (a = t.parameter.includes(e)), t.type === "pattern" && (a = new RegExp(t.parameter).test(String(e))), t.type === "length") {
				let { min: n, length: r, max: i } = t.parameter;
				r !== void 0 && (a = String(e).length === r), n !== void 0 && (a = String(e).length >= n), i !== void 0 && (a = String(e).length <= i);
			}
			if (t.type === "bounds" && typeof e == "number") {
				let { min: n, minInclusive: r, max: i, maxInclusive: o } = t.parameter, s = !0, c = !0;
				n !== void 0 && (s = r ? e >= n : e > n), i !== void 0 && (c = o ? e <= i : e < i), a = s && c;
			}
			return this.cardinality === "prohibited" && (a = !a), this.cardinality === "optional" && (a = !0), i.pass = a, i.pass;
		}), this._components = e;
	}
	addCheckResult(e, t) {
		let n = t.findIndex(({ parameter: t }) => t === e.parameter);
		n === -1 ? t.push(e) : t[n] = e;
	}
	getItemChecks(e, t, n, r) {
		if (!("value" in n._localId && typeof n._localId.value == "number")) return null;
		let i = e.get(t);
		i || (i = new a(), e.set(t, i));
		let o = i.get(n._localId.value);
		if (o && r && !o.pass) return null;
		if (!o) {
			let e = [];
			o = {
				guid: Array.isArray(n._guid) ? void 0 : n._guid.value,
				pass: !1,
				checks: e
			}, Object.defineProperty(o, "pass", { get: () => e.every(({ pass: e }) => e) }), i.set(n._localId.value, o);
		}
		let s = [], c = {
			facetType: this.facetType,
			cardinality: this.cardinality,
			checks: s,
			pass: !1
		};
		return Object.defineProperty(c, "pass", { get: () => s.every(({ pass: e }) => e) }), o.checks.push(c), c.checks;
	}
}, ku = (e, t) => {
	let n = "";
	if (!t) return n;
	if (t.type === "simple" && (n = `<simpleValue>${t.parameter}</simpleValue>`), t.type === "enumeration" && (n = `<xs:restriction base="xs:string">
    ${t.parameter.map((e) => `<xs:enumeration value="${e}" />`).join("\n")}
    </xs:restriction>`), t.type === "pattern" && (n = `<xs:restriction base="xs:string">
      <xs:pattern value="${t.parameter}" />
    </xs:restriction>`), t.type === "bounds") {
		let { min: e, minInclusive: r, max: i, maxInclusive: a } = t.parameter, o = "";
		e !== void 0 && (o = `<xs:min${r ? "Inclusive" : "Exclusive"} value="${e}">`);
		let s = "";
		i !== void 0 && (s = `<xs:max${a ? "Inclusive" : "Exclusive"} value="${i}">`), n = `<xs:restriction base="xs:double">
      ${o}
      ${s}
    </xs:restriction>`;
	}
	if (t.type === "length") {
		let { length: e, min: r, max: i } = t.parameter, a = "";
		e !== void 0 && r === void 0 && i === void 0 && (a = `<xs:length value="${e}" />`);
		let o = "";
		r !== void 0 && e === void 0 && (o = `<xs:minLength value="${r}" />`);
		let s = "";
		i !== void 0 && e === void 0 && (s = `<xs:maxLength value="${i}" />`), n = `<xs:restriction base="xs:string">
      ${a}
      ${o}
      ${s}
    </xs:restriction>`;
	}
	return `<${e[0].toLowerCase() + e.slice(1)}>
    ${n}
  </${e[0].toLowerCase() + e.slice(1)}>`;
}, Au = class extends Ou {
	constructor(e, t) {
		super(e), X(this, "facetType", "Attribute"), X(this, "name"), X(this, "value"), this.name = t;
	}
	serialize(e) {
		let t = ku("Name", this.name), n = ku("Value", this.value), r = "";
		return e === "requirement" && (r += `cardinality="${this.cardinality}"`, r += this.instructions ? `instructions="${this.instructions}"` : ""), `<attribute ${r}>
  ${t}
  ${n}
</attribute>`;
	}
	async getEntities() {}
	async test(e, t, n = { skipIfFails: !0 }) {
		let r = this._components.get(Q);
		for (let [i, a] of Object.entries(e)) {
			let e = r.list.get(i);
			if (!e) continue;
			let o = await e.getItemsData([...a]);
			for (let e of o) {
				let r = this.getItemChecks(t, i, e, n.skipIfFails);
				if (!r) continue;
				let a = Object.keys(e).filter((t) => {
					let n = this.evalRequirement(t, this.name, "Name");
					if (!n) return !1;
					let r = e[t];
					return Array.isArray(r) ? !0 : r === null || r.value === null ? this.cardinality === "optional" || this.cardinality === "prohibited" : Array.isArray(r.value) && r.value.length === 0 || typeof r.value == "string" && r.value.trim() === "" ? !1 : n;
				}), o = a.length > 0;
				if (r.push({
					parameter: "Name",
					currentValue: o ? a[0] : null,
					requiredValue: this.name,
					pass: this.cardinality === "prohibited" ? !o : o
				}), this.value) if (a[0]) {
					let t = e[a[0]];
					Array.isArray(t) || Array.isArray(t.value) ? r.push({
						parameter: "Value",
						currentValue: null,
						requiredValue: this.value,
						pass: this.cardinality === "prohibited"
					}) : this.evalRequirement(t.value, this.value, "Value", r);
				} else r.push({
					parameter: "Value",
					currentValue: null,
					requiredValue: this.value,
					pass: this.cardinality === "prohibited"
				});
			}
		}
	}
}, ju = class extends Ou {
	constructor(e, t) {
		super(e), X(this, "facetType", "Classification"), X(this, "system"), X(this, "value"), X(this, "uri"), this.system = t;
	}
	serialize(e) {
		let t = ku("System", this.system), n = ku("Value", this.value), r = "";
		return e === "requirement" && (r += `cardinality="${this.cardinality}"`, r += this.uri ? `uri=${this.uri}` : "", r += this.instructions ? `instructions="${this.instructions}"` : ""), `<classification ${r}>
  ${t}
  ${n}
</classification>`;
	}
	async getEntities(e, t) {}
	async test(e, t) {}
}, Mu = class extends Ou {
	constructor(e, t) {
		super(e), X(this, "facetType", "Entity"), X(this, "name"), X(this, "predefinedType"), this.name = t;
	}
	serialize(e) {
		let t = ku("Name", this.name), n = ku("Name", this.predefinedType), r = "";
		return e === "requirement" && (r += `cardinality="${this.cardinality}"`, r += this.instructions ? `instructions="${this.instructions}"` : ""), `<entity ${r}>
  ${t}
  ${n}
</entity>`;
	}
	async getEntities(e, t) {
		let n = this._components.get(Q), r = /* @__PURE__ */ new Map();
		for (let [t, i] of n.list) {
			if (!e.find((e) => e.test(t))) continue;
			let n = await i.getCategories();
			for (let e of n) {
				if (!await this.evalName(e)) continue;
				let n = r.get(t);
				n || (n = [], r.set(t, n)), n.push(e);
			}
		}
		let i = {};
		if (await Promise.all(Array.from(r.entries()).map(async ([e, t]) => {
			let r = n.list.get(e);
			if (!r) return;
			let a = t.map((e) => RegExp(`^${e}$`)), o = await r.getItemsOfCategories(a), s = Object.values(o).flat();
			i[e] = new Set(s);
		})), !this.predefinedType) {
			ei.add(t, i);
			return;
		}
		for (let [e, r] of Object.entries(i)) {
			let i = n.list.get(e);
			if (!i) continue;
			let a = await i.getItemsData([...r]);
			for (let n of a) "value" in n._localId && await this.evalPredefinedType(e, n) && ei.append(t, e, n._localId.value);
		}
	}
	async test(e, t, n) {
		let r = this._components.get(Q);
		for (let [i, a] of Object.entries(e)) {
			let e = r.list.get(i);
			if (!e) continue;
			let o = await e.getItemsData([...a]);
			for (let e of o) {
				if (!("value" in e._category)) continue;
				let r = this.getItemChecks(t, i, e, n.skipIfFails);
				r && (await this.evalName(e._category.value, r), await this.evalPredefinedType(i, e, r));
			}
		}
	}
	async evalName(e, t) {
		return this.evalRequirement(e, this.name, "Name", t);
	}
	async evalPredefinedType(e, t, n) {
		if (!this.predefinedType || !("value" in t.PredefinedType)) return null;
		let r = typeof this.predefinedType.parameter == "string" && this.predefinedType.parameter === "USERDEFINED", i = t.PredefinedType.value;
		if (i === "USERDEFINED" && !r) {
			let e = Object.keys(t).find((e) => /^((?!Predefined).)*Type$/.test(e));
			if (e) {
				let n = t[e];
				"value" in n && (i = n.value);
			} else i = "USERDEFINED";
		}
		if (!i) {
			let n = this._components.get(Q).list.get(e);
			if (n && "value" in t._localId) {
				let [e] = await n.getItemsData([t._localId.value], { relations: { IsTypedBy: {
					attributes: !0,
					relations: !1
				} } });
				if (Array.isArray(e.IsTypedBy)) {
					let t = e.IsTypedBy[0];
					if (t && "value" in t.PredefinedType && (i = t.PredefinedType.value, i === "USERDEFINED" && !r)) {
						let e = Object.keys(t).find((e) => /^((?!Predefined).)*Type$/.test(e));
						if (e) {
							let n = t[e];
							"value" in n && (i = n.value);
						} else i = "USERDEFINED";
					}
				}
			}
		}
		return this.evalRequirement(i, this.predefinedType, "PredefinedType", n);
	}
}, Nu = class extends Ou {
	constructor(e, t, n) {
		super(e), X(this, "facetType", "Property"), X(this, "propertySet"), X(this, "baseName"), X(this, "value"), X(this, "dataType"), X(this, "uri"), X(this, "_unsupportedTypes", ["IFCCOMPLEXPROPERTY", "IFCPHYSICALCOMPLEXQUANTITY"]), this.propertySet = t, this.baseName = n;
	}
	serialize(e) {
		let t = ku("PropertySet", this.propertySet), n = ku("BaseName", this.baseName), r = ku("Value", this.value), i = this.dataType ? `dataType=${this.dataType}` : "", a = "";
		return e === "requirement" && (a += `cardinality="${this.cardinality}"`, a += this.uri ? `uri=${this.uri}` : "", a += this.instructions ? `instructions="${this.instructions}"` : ""), `<property ${i} ${a}>
  ${t}
  ${n}
  ${r}
</property>`;
	}
	async getEntities(e, t) {
		let n = this._components.get(Q);
		for (let [r, i] of n.list) {
			if (!e.find((e) => e.test(r))) continue;
			let n = await i.getItemsOfCategories([/PROPERTYSET/, /ELEMENTQUANTITY/]), a = Object.values(n).flat();
			if (a.length === 0) continue;
			let o = await i.getItemsData(a, { relations: {
				HasProperties: {
					attributes: !0,
					relations: !1
				},
				DefinesOcurrence: {
					attributes: !0,
					relations: !1
				}
			} });
			for (let e of o) {
				if (!("value" in e._localId && "value" in e._category && "value" in e.Name && Array.isArray(e.DefinesOcurrence)) || !this.evalRequirement(e.Name.value, this.propertySet, "PropertySet")) continue;
				let n;
				if (e._category.value === "IFCPROPERTYSET" && (n = "HasProperties"), e._category.value === "IFCELEMENTQUANTITY" && (n = "Quantities"), !n) continue;
				let i = e[n];
				if (Array.isArray(i)) for (let n of i) {
					let i = Object.keys(n), a = i.find((e) => /Name/.test(e));
					if (!(a && "value" in n[a])) continue;
					let o = n[a];
					if (!("value" in o) || !this.evalRequirement(o.value, this.baseName, "BaseName")) continue;
					if (this.value) {
						let e = i.find((e) => /Value/.test(e));
						if (!e) continue;
						let t = n[e];
						if (!("value" in t) || !this.evalRequirement(t.value, this.value, "Value")) continue;
					}
					let s = e.DefinesOcurrence.map((e) => "value" in e._localId && typeof e._localId.value == "number" ? e._localId.value : null).filter((e) => e !== null);
					ei.append(t, r, ...s);
				}
			}
		}
	}
	async test(e, t, n = { skipIfFails: !0 }) {
		let r = this._components.get(Q);
		for (let [i, a] of Object.entries(e)) {
			let e = r.list.get(i);
			if (!e) continue;
			let o = await e.getItemsData([...a], { relations: {
				IsDefinedBy: {
					attributes: !0,
					relations: !0
				},
				IsTypedBy: {
					attributes: !0,
					relations: !1
				},
				HasPropertySets: {
					attributes: !0,
					relations: !0
				},
				DefinesOcurrence: {
					attributes: !1,
					relations: !1
				}
			} });
			for (let e of o) {
				let r = this.getItemChecks(t, i, e, n.skipIfFails);
				if (!r) continue;
				let a = (await this.getPsets(e)).filter((e) => !("value" in e.Name) || !this.evalRequirement(e.Name.value, this.propertySet, "PropertySet") ? !1 : (r.push({
					currentValue: e.Name.value,
					parameter: "PropertySet",
					pass: !0,
					requiredValue: this.propertySet
				}), !0));
				if (a.length === 0) {
					r.push({
						currentValue: null,
						parameter: "PropertySet",
						pass: !1,
						requiredValue: this.propertySet
					});
					continue;
				}
				for (let e of a) {
					let t = this.getPropertyListName(e);
					if (!t) continue;
					let n = e[t];
					if (!Array.isArray(n)) {
						r.push({
							currentValue: null,
							parameter: "BaseName",
							pass: !1,
							requiredValue: this.baseName
						});
						continue;
					}
					let i = n.filter((e) => !("value" in e._category && "value" in e.Name) || this._unsupportedTypes.includes(e._category.value) || !this.evalRequirement(e.Name.value, this.baseName, "BaseName") ? !1 : (r.push({
						currentValue: e.Name.value,
						parameter: "BaseName",
						pass: !0,
						requiredValue: this.baseName
					}), !0));
					if (i.length === 0) {
						r.push({
							currentValue: null,
							parameter: "BaseName",
							pass: !1,
							requiredValue: this.baseName
						});
						continue;
					}
					for (let e of i) this.evalValue(e, r), this.evalDataType(e, r), this.evalURI();
				}
			}
		}
	}
	getPropertyListName(e) {
		let t;
		return "value" in e._category && (e._category.value === "IFCPROPERTYSET" && (t = "HasProperties"), e._category.value === "IFCELEMENTQUANTITY" && (t = "Quantities")), t;
	}
	getValueKey(e) {
		return Object.keys(e).find((e) => /Value/.test(e) || /Values/.test(e));
	}
	getTypePsets(e) {
		if (!Array.isArray(e.IsTypedBy)) return [];
		let [t] = e.IsTypedBy;
		return t && Array.isArray(t.HasPropertySets) ? t.HasPropertySets : [];
	}
	async getPsets(e) {
		let t = this.getTypePsets(e);
		if (!Array.isArray(e.IsDefinedBy)) return t;
		let n = [];
		for (let r of e.IsDefinedBy) {
			if (!("value" in r.Name)) continue;
			let e = r.Name.value, i = this.getPropertyListName(r);
			if (!(e && i)) continue;
			let a = t.find((t) => "value" in t.Name && t.Name.value === e);
			if (a && Array.isArray(a.HasProperties) && Array.isArray(r.HasProperties)) for (let e of a.HasProperties) {
				if (!("value" in e.Name)) continue;
				let t = e.Name.value;
				r.HasProperties.find((e) => "value" in e.Name && e.Name.value === t) || r.HasProperties.push(e);
			}
			n.push(r);
		}
		return n;
	}
	evalValue(e, t) {
		let n = this.getValueKey(e), r = e[n];
		if (!("value" in r)) return !1;
		if (this.value) {
			if (!n) return t?.push({
				parameter: "Value",
				currentValue: null,
				pass: !1,
				requiredValue: this.value
			}), !1;
			let e = structuredClone(this.value);
			return r.type === "IFCLABEL" && e.type === "simple" && (e.parameter = String(e.parameter)), this.evalRequirement(r.value, e, "Value", t);
		}
		return n && typeof r.value == "string" && r.value.trim() === "" ? (t?.push({
			parameter: "Value",
			currentValue: "",
			pass: !1,
			requiredValue: this.value
		}), !1) : !0;
	}
	evalDataType(e, t) {
		if (!this.dataType) return !0;
		let n = this.getValueKey(e);
		if (!(n && "value" in e[n])) return t?.push({
			parameter: "DataType",
			currentValue: null,
			pass: !1,
			requiredValue: this.dataType
		}), !1;
		let r = e[n];
		return this.evalRequirement(r.type ?? null, {
			type: "simple",
			parameter: this.dataType
		}, "DataType", t);
	}
	evalURI() {
		return !0;
	}
}, Pu = class extends Ou {
	constructor() {
		super(...arguments), X(this, "_ifcMaterialEntities", [
			/^IFCMATERIALLAYERSETUSAGE$/,
			/^IFCMATERIALCONSTITUENTSET$/,
			/^IFCMATERIAL$/,
			/^IFCMATERIALLIST$/
		]), X(this, "facetType", "Material"), X(this, "value"), X(this, "uri");
	}
	serialize(e) {
		if (!(this.value && this.uri)) return "<material />";
		let t = ku("Value", this.value), n = "";
		return e === "requirement" && (n += `cardinality="${this.cardinality}"`, n += this.uri ? `uri=${this.uri}` : "", n += this.instructions ? `instructions="${this.instructions}"` : ""), `<material ${n}>
  ${t}
</material>`;
	}
	async getEntities(e, t) {
		let n = this._components.get(Q);
		for (let [r, i] of n.list) {
			if (!e.find((e) => e.test(r))) continue;
			let n = await i.getItemsOfCategories(this._ifcMaterialEntities), a = Object.values(n).flat();
			if (a.length === 0) continue;
			let o = await i.getItemsData(a, { relations: {
				AssociatedTo: {
					attributes: !0,
					relations: !1
				},
				MaterialConstituents: {
					attributes: !0,
					relations: !0
				},
				ForLayerSet: {
					attributes: !0,
					relations: !0
				},
				MaterialLayers: {
					attributes: !0,
					relations: !0
				},
				Materials: {
					attributes: !0,
					relations: !1
				}
			} });
			for (let e of o) {
				if (!("value" in e._localId && "value" in e._category && Array.isArray(e.AssociatedTo)) || !this.hasValidMaterial(e)) continue;
				let n = e.AssociatedTo.map((e) => "value" in e._localId && e._localId.value ? e._localId.value : null).filter((e) => e !== null);
				ei.append(t, r, ...n);
			}
		}
	}
	async test(e, t, n = { skipIfFails: !0 }) {
		let r = this._components.get(Q);
		for (let [i, a] of Object.entries(e)) {
			let e = r.list.get(i);
			if (!e) continue;
			let o = await e.getItemsData([[...a][0]], { relations: {
				AssociatedTo: {
					attributes: !1,
					relations: !1
				},
				HasAssociations: {
					attributes: !0,
					relations: !0
				},
				MaterialConstituents: {
					attributes: !0,
					relations: !0
				},
				ForLayerSet: {
					attributes: !0,
					relations: !0
				},
				MaterialLayers: {
					attributes: !0,
					relations: !0
				},
				Materials: {
					attributes: !0,
					relations: !1
				}
			} });
			for (let e of o) {
				let r = this.getItemChecks(t, i, e, n.skipIfFails);
				if (r) {
					if (!Array.isArray(e.HasAssociations)) {
						r.push({
							parameter: null,
							currentValue: null,
							requiredValue: this.value,
							pass: !1
						});
						continue;
					}
					for (let t of e.HasAssociations) if (this._ifcMaterialEntities.some((e) => "value" in t._category && e.test(t._category.value)) && this.hasValidMaterial(t, r)) break;
				}
			}
		}
	}
	hasValidMaterial(e, t) {
		let n = !1;
		if ("value" in e._category && e._category.value === "IFCMATERIAL") this.evalValue(e, t) && (n = !0);
		else for (let [r, i] of Object.entries(e)) if ([
			"ForLayerSet",
			"MaterialLayers",
			"Material",
			"MaterialConstituents",
			"Materials"
		].includes(r) && Array.isArray(i)) {
			for (let e of i) if ("value" in e._category && e._category.value === "IFCMATERIAL") {
				if (this.evalValue(e, t)) {
					n = !0;
					break;
				}
			} else if (this.hasValidMaterial(e)) {
				n = !0;
				break;
			}
		}
		return n;
	}
	evalValue(e, t) {
		if (!this.value) return t?.push({
			parameter: null,
			currentValue: e.Name && "value" in e.Name ? e.Name.value : null,
			pass: !0
		}), !0;
		if (!("value" in e._category && e._category.value === "IFCMATERIAL")) return null;
		let n = !1;
		return e.Name && "value" in e.Name && (n = this.evalRequirement(e.Name.value, this.value, "Value", t)), n || (e.Category && "value" in e.Category && (n = this.evalRequirement(e.Category.value, this.value, "Value", t)), n);
	}
}, Fu = class extends Ou {
	constructor(e, t) {
		super(e), X(this, "facetType", "PartOf"), X(this, "_entityFacet"), X(this, "_entity"), X(this, "relation"), X(this, "cardinality", "required"), this._entity = t, this._entityFacet = new Mu(e, t.name), this._entityFacet.predefinedType = t.predefinedType;
	}
	set entity(e) {
		this._entity = e;
		let { name: t, predefinedType: n } = e;
		this._entityFacet = new Mu(this._components, t), this._entityFacet.predefinedType = n;
	}
	get entity() {
		return this._entity;
	}
	serialize() {
		return "";
	}
	async getEntities(e, t) {}
	async test(e) {}
}, Iu = class {
	constructor(e, t, n) {
		X(this, "name"), X(this, "ifcVersion", /* @__PURE__ */ new Set()), X(this, "identifier", $t.create()), X(this, "description"), X(this, "instructions"), X(this, "requirementsDescription"), X(this, "applicability", new Be()), X(this, "requirements", new Be()), X(this, "components"), this.components = e, this.name = t;
		for (let e of n) this.ifcVersion.add(e);
	}
	set(e) {
		let t = e, n = this;
		for (let r in e) {
			if (r === "identifier") continue;
			let e = t[r];
			r in this && (n[r] = e);
		}
		return this.components.get(Gu).list.set(this.identifier, this), this;
	}
	async test(e, t = { skipIfFails: !0 }) {
		let n = new a();
		if (this.requirements.size === 0) return n;
		let r = {}, i = [];
		for (let t of this.applicability) i.push(t.getEntities(e, r));
		await Promise.all(i);
		let o = [];
		for (let e of this.requirements) o.push(e.test(r, n, t));
		return await Promise.all(o), n;
	}
	serialize() {
		let e = `name="${this.name}"`, t = this.identifier ? `identifier="${this.identifier}"` : "", n = this.description ? `description="${this.description}"` : "", r = this.instructions ? `instructions="${this.instructions}"` : "";
		return `<specification ifcVersion="${[...this.ifcVersion].join(" ")}" ${e} ${t} ${n} ${r}>
      <applicability minOccurs="1" maxOccurs="unbounded">
        ${[...this.applicability].map((e) => e.serialize("applicability")).join("\n")}
      </applicability>
      <requirements>
        ${[...this.requirements].map((e) => e.serialize("requirement")).join("\n")}
      </requirements>
    </specification>`;
	}
}, Lu = (e) => {
	if (!e) return;
	let t = {};
	if ("simpleValue" in e && (t.type = "simple", t.parameter = e.simpleValue), "restriction" in e) {
		let n = e.restriction, r = Object.keys(n);
		if ("pattern" in n && (t.type = "pattern", t.parameter = n.pattern.value), "enumeration" in n && (t.type = "enumeration", t.parameter = n.enumeration.map(({ value: e }) => n.base.includes("string") ? String(e) : n.base.includes("integer") || n.base.includes("double") ? Number(e) : e)), r.some((e) => [
			"minInclusive",
			"minExclusive",
			"maxInclusive",
			"maxExclusive"
		].includes(e))) {
			t.type = "bounds";
			let e = {}, i = r.find((e) => e.includes("min")), a = r.find((e) => e.includes("max"));
			i && (e.minInclusive = i === "minInclusive", e.min = n[i].value), a && (e.maxInclusive = a === "maxInclusive", e.max = n[a].value), t.parameter = e;
		}
		if (r.some((e) => [
			"minLength",
			"length",
			"maxLength"
		].includes(e))) {
			t.type = "length";
			let e = {};
			n.length !== void 0 && (e.length = n.length.value), n.minLength !== void 0 && (e.min = n.minLength.value), n.maxLength !== void 0 && (e.max = n.maxLength.value), t.parameter = e;
		}
	}
	if (t.parameter !== void 0) return t;
}, Ru = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = r.name, i = Lu(t);
		if (!i) continue;
		let a = new Mu(e, i);
		r.cardinality && (a.cardinality = r.cardinality), a.predefinedType = Lu(r.predefinedType), a.instructions = r.instructions, n.push(a);
	}
	return n;
}, zu = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = r.name, i = Lu(t);
		if (!i) continue;
		let a = new Au(e, i);
		r.cardinality && (a.cardinality = r.cardinality), a.value = Lu(r.value), a.instructions = r.instructions, n.push(a);
	}
	return n;
}, Bu = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = new Pu(e);
		r.cardinality && (t.cardinality = r.cardinality);
		let i = Lu(r.value);
		i?.type === "enumeration" && Array.isArray(i.parameter) && (i.parameter = i.parameter.map(String)), t.value = i, t.uri = r.uri, t.instructions = r.instructions, n.push(t);
	}
	return n;
}, Vu = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = r.propertySet, i = r.baseName, a = Lu(t), o = Lu(i);
		if (!(o && a)) continue;
		let s = new Nu(e, a, o);
		r.cardinality && (s.cardinality = r.cardinality), s.value = Lu(r.value), s.dataType = r.dataType, s.uri = r.uri, s.instructions = r.instructions, n.push(s);
	}
	return n;
}, Hu = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = r.system, i = Lu(t);
		if (!i) continue;
		let a = new ju(e, i);
		r.cardinality && (a.cardinality = r.cardinality);
		let o = Lu(r.value);
		o?.type === "simple" && (o.parameter = String(o.parameter)), o?.type === "enumeration" && Array.isArray(o.parameter) && (o.parameter = o.parameter.map(String)), a.value = o, a.uri = r.uri, a.instructions = r.instructions, n.push(a);
	}
	return n;
}, Uu = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = Lu(r.entity.name);
		if (!t) continue;
		let i = new Fu(e, {
			name: t,
			predefinedType: Lu(r.entity.predefinedType)
		});
		i.relation = r.relation, r.cardinality && (i.cardinality = r.cardinality), i.instructions = r.instructions, n.push(i);
	}
	return n;
}, Wu = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "IDSInfo"), X(this, "list", new a()), t.add(e.uuid, this);
	}
	getModelIdMap(e) {
		let t = {}, n = {};
		for (let [r, i] of e) {
			let e = [...i].filter(([, e]) => e.pass).map(([e]) => e);
			ei.append(t, r, ...e);
			let a = [...i].filter(([, e]) => !e.pass).map(([e]) => e);
			ei.append(n, r, ...a);
		}
		return {
			pass: t,
			fail: n
		};
	}
	create(e, t, n) {
		let r = new Iu(this.components, e, t);
		return n && (r.identifier = n), this.list.set(r.identifier, r), r;
	}
	load(t) {
		let n = [], { specifications: r, info: i } = e.xmlParser.parse(t).ids;
		if (this.IDSInfo = { ...i }, r && r.specification) {
			let e = Array.isArray(r.specification) ? r.specification : [r.specification];
			for (let t of e) {
				let { name: e, ifcVersion: r, description: i, instructions: a, identifier: o } = t;
				if (!(e && r)) continue;
				let s = [], c = [], { applicability: l, requirements: u } = t;
				if (l) {
					let { maxOccurs: e, ...t } = l, n = Array.isArray(t) ? t : [t];
					for (let e of n) for (let t in e) {
						let n = Array.isArray(e[t]) ? e[t] : [e[t]];
						if (t === "entity") {
							let e = Ru(this.components, n);
							s.push(...e);
						}
						if (t === "attribute") {
							let e = zu(this.components, n);
							s.push(...e);
						}
						if (t === "material") {
							let e = Bu(this.components, n);
							s.push(...e);
						}
						if (t === "classification") {
							let e = Hu(this.components, n);
							s.push(...e);
						}
						if (t === "property") {
							let e = Vu(this.components, n);
							s.push(...e);
						}
						if (t === "partOf") {
							let e = Uu(this.components, n);
							s.push(...e);
						}
					}
				}
				let d;
				if (u) {
					let { maxOccurs: e, ...t } = u;
					d = u.description;
					let n = Array.isArray(t) ? t : [t];
					for (let e of n) for (let t in e) {
						let n = Array.isArray(e[t]) ? e[t] : [e[t]];
						if (t === "entity") {
							let e = Ru(this.components, n);
							c.push(...e);
						}
						if (t === "attribute") {
							let e = zu(this.components, n);
							c.push(...e);
						}
						if (t === "material") {
							let e = Bu(this.components, n);
							c.push(...e);
						}
						if (t === "classification") {
							let e = Hu(this.components, n);
							c.push(...e);
						}
						if (t === "property") {
							let e = Vu(this.components, n);
							c.push(...e);
						}
						if (t === "partOf") {
							let e = Uu(this.components, n);
							c.push(...e);
						}
					}
				}
				let f = this.create(e, r.split(/\s+/), o);
				f.description = i, f.instructions = a, f.requirementsDescription = d, f.applicability.add(...s), f.requirements.add(...c), n.push(f);
			}
		}
		return n;
	}
	export(e, t = this.list.values()) {
		let n = t ?? this.list;
		return `<ids xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://standards.buildingsmart.org/IDS http://standards.buildingsmart.org/IDS/1.0/ids.xsd" xmlns:ids="http://standards.buildingsmart.org/IDS">
  <!-- Made with That Open Engine ${Ql.release} (https://github.com/thatopen/engine_components) -->
  <info>
    <title>${e.title}</title>
    ${e.copyright ? `<copyright>${e.copyright}</copyright>` : ""}
    ${e.version ? `<version>${e.version}</version>` : ""}
    ${e.description ? `<description>${e.description}</description>` : ""}
    ${e.author ? `<author>${e.author}</author>` : ""}
    ${e.date ? `<date>${e.date.toISOString().split("T")[0]}</date>` : ""}
    ${e.purpose ? `<purpose>${e.purpose}</purpose>` : ""}
    ${e.milestone ? `<milestone>${e.milestone}</milestone>` : ""}
  </info>
  <specifications>
    ${[...n].map((e) => e.serialize()).join("\n")}
  </specifications>
</ids>`;
	}
};
X(Wu, "uuid", "9f0b9f78-9b2e-481a-b766-2fbfd01f342c"), X(Wu, "xmlParser", new Ir({
	allowBooleanAttributes: !0,
	attributeNamePrefix: "",
	ignoreAttributes: !1,
	ignoreDeclaration: !0,
	ignorePiTags: !0,
	numberParseOptions: {
		leadingZeros: !0,
		hex: !0
	},
	parseAttributeValue: !0,
	preserveOrder: !1,
	processEntities: !1,
	removeNSPrefix: !0,
	trimValues: !0
}));
var Gu = Wu, Ku = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), t.add(e.uuid, this);
	}
	static distanceFromPointToLine(e, t, n, r = !1) {
		let i = new z(), a = new G();
		return i.set(t, n), i.closestPointToPoint(e, r, a), a.distanceTo(e);
	}
	round(e) {
		e.x = Math.trunc(e.x * 1e3) / 1e3, e.y = Math.trunc(e.y * 1e3) / 1e3, e.z = Math.trunc(e.z * 1e3) / 1e3;
	}
	async getVolumeFromFragments(e) {
		return console.warn("getVolumeFromFragments is deprecated. Use getItemsVolume instead."), this.getItemsVolume(e);
	}
	async getItemsVolume(e) {
		let t = 0, n = this.components.get(Q);
		for (let [r, i] of Object.entries(e)) {
			let e = n.list.get(r);
			e && (t += await e.getItemsVolume([...i]));
		}
		return t;
	}
	static convertUnits(e, t, n, r = 2) {
		let i = {
			m: 1,
			cm: .01,
			mm: .001,
			km: 1e3,
			m2: 1,
			cm2: 1e-4,
			mm2: 1e-6,
			km2: 1e6,
			m3: 1,
			cm3: 1e-6,
			mm3: 1e-9,
			km3: 1e9
		};
		if (!i[t] || !i[n]) throw Error("Invalid units provided for conversion.");
		if (!Number.isInteger(r) || r < 0 || r > 5) throw Error("Precision must be an integer between 0 and 5.");
		let a = e * (i[t] / i[n]), o = 10 ** r;
		return Math.round(a * o) / o;
	}
};
X(Ku, "uuid", "267ca032-672f-4cb0-afa9-d24e904f39d6");
var qu = Ku, Ju = (e, t, n) => {
	let r = new G(-t.z, 0, t.x), i = new G(t.x + r.x, 0, t.z + r.z).normalize().multiplyScalar(n / 2);
	return [
		e.x + i.x,
		e.y,
		e.z + i.z,
		e.x - i.x,
		e.y,
		e.z - i.z
	];
}, Yu = (e, t, n) => {
	let r = new G(-t.z, 0, t.x), i = e.x - t.x * n + r.x * n * .4, a = e.z - t.z * n + r.z * n * .4, o = e.x - t.x * n - r.x * n * .4, s = e.z - t.z * n - r.z * n * .4;
	return [
		e.x,
		e.y,
		e.z,
		i,
		e.y,
		a,
		e.x,
		e.y,
		e.z,
		o,
		e.y,
		s
	];
}, Xu = () => [], Zu = (e, t, n) => {
	let r = new G(-t.z, 0, t.x), i = e.clone().addScaledVector(t, -n), a = i.clone().addScaledVector(r, n * .4), o = i.clone().addScaledVector(r, -n * .4);
	return [
		e.x,
		e.y,
		e.z,
		a.x,
		a.y,
		a.z,
		o.x,
		o.y,
		o.z
	];
}, Qu = class extends a {
	constructor() {
		super();
	}
	getBySystem(e) {
		let t = /* @__PURE__ */ new Map();
		for (let [n, r] of this) r.system === e && t.set(n, r.data);
		return t;
	}
}, $u = class extends a {
	constructor(e) {
		super(), X(this, "_container"), this._container = e, this.deleteGuard = (e) => e !== "0", this.set("0", {
			name: "0",
			visible: !0,
			material: new Ie({ color: 0 })
		});
	}
	create(e, t) {
		if (!this.has(e)) {
			let n = {
				name: e,
				visible: t?.visible ?? !0,
				material: t?.material ?? new Ie({ color: 0 })
			};
			this.set(e, n);
		}
		return this.get(e);
	}
	setColor(e, t) {
		let n = this.get(e);
		n && (n.material.color.setHex(t), this.set(e, n));
	}
	setMaterial(e, t) {
		let n = this.get(e);
		if (!n) return;
		let r = n.material;
		n.material = t, this._container.traverse((n) => {
			n.userData.layer === e && (n.userData.isDimension || n.isLineSegments && (n.material = t));
		}), r.dispose(), this.set(e, n);
	}
	setVisibility(e, t) {
		let n = this.get(e);
		n && (n.visible = t, this._container.traverse((n) => {
			n.userData.layer === e && (n.visible = t);
		}), this.set(e, n));
	}
	assign(e, t) {
		let n = this.get(t);
		n && (e.userData.layer = t, n.visible || (e.visible = !1), e.isLineSegments && (e.material = n.material));
	}
	resolveColor(e) {
		let t = this.get(e);
		if (t) return t.material.color.getHex();
	}
}, ed = class e extends R {
	constructor(t) {
		super(), X(this, "_viewport"), X(this, "_border"), X(this, "_handles", []), X(this, "_raycaster", new u()), X(this, "_resizable", !1), X(this, "_movable", !1), X(this, "_dragHandle", null), X(this, "_dragConstraints", []), X(this, "_hoveredHandle", null), X(this, "_moveDrag", null), X(this, "_hoveringBorder", !1), X(this, "_normalMat"), X(this, "_hoverMat"), X(this, "_borderMat"), this._viewport = t, this._borderMat = new Ie({
			color: e._BORDER_COLOR,
			depthTest: !1
		});
		let n = new r();
		n.setAttribute("position", new W(/* @__PURE__ */ new Float32Array(24), 3)), this._border = new B(n, this._borderMat), this._border.renderOrder = 999, this._border.frustumCulled = !1, this._border.userData.isDimension = !0, this.add(this._border), this._normalMat = new ue({ color: e._BORDER_COLOR }), this._hoverMat = new ue({ color: e._BORDER_HOVER_COLOR });
		let i = new S(.05, 8, 6);
		for (let t of e._HANDLE_DEFS) {
			let e = new U(i, this._normalMat);
			e.renderOrder = 1e3, e.visible = !1, e.userData.constraints = t.constraints, e.userData.isDimension = !0, this.add(e), this._handles.push(e);
		}
		this.update();
	}
	get resizable() {
		return this._resizable;
	}
	set resizable(e) {
		this._resizable = e;
		for (let t of this._handles) t.visible = e;
		e || (this._hoveredHandle &&= (this._hoveredHandle.material = this._normalMat, null), this._dragHandle = null, this._dragConstraints = []);
	}
	get movable() {
		return this._movable;
	}
	set movable(e) {
		this._movable = e, e || (this._moveDrag = null, this._setBorderHover(!1));
	}
	get isDragging() {
		return this._dragHandle !== null || this._moveDrag !== null;
	}
	update() {
		let e = this._viewport, t = e.left, n = e.right, r = -e.top, i = -e.bottom, a = .005, o = this._border.geometry.attributes.position;
		o.setXYZ(0, t, a, r), o.setXYZ(1, n, a, r), o.setXYZ(2, n, a, r), o.setXYZ(3, n, a, i), o.setXYZ(4, n, a, i), o.setXYZ(5, t, a, i), o.setXYZ(6, t, a, i), o.setXYZ(7, t, a, r), o.needsUpdate = !0, this._border.geometry.computeBoundingSphere();
		let s = (t + n) / 2, c = (r + i) / 2, l = .01, u = [
			[
				t,
				l,
				r
			],
			[
				n,
				l,
				r
			],
			[
				n,
				l,
				i
			],
			[
				t,
				l,
				i
			],
			[
				s,
				l,
				r
			],
			[
				n,
				l,
				c
			],
			[
				s,
				l,
				i
			],
			[
				t,
				l,
				c
			]
		];
		for (let e = 0; e < this._handles.length; e++) this._handles[e].position.set(...u[e]);
	}
	onPointerMove(t) {
		if (this._dragHandle) {
			let e = this._projectToLocal(t);
			if (!e) return;
			for (let t of this._dragConstraints) switch (t) {
				case "left":
					this._viewport.left = e.x;
					break;
				case "right":
					this._viewport.right = e.x;
					break;
				case "top":
					this._viewport.top = -e.z;
					break;
				case "bottom":
					this._viewport.bottom = -e.z;
					break;
			}
			this._viewport.right < this._viewport.left && ([this._viewport.left, this._viewport.right] = [this._viewport.right, this._viewport.left], this._dragConstraints = this._dragConstraints.map((e) => e === "right" ? "left" : e === "left" ? "right" : e)), this._viewport.top < this._viewport.bottom && ([this._viewport.top, this._viewport.bottom] = [this._viewport.bottom, this._viewport.top], this._dragConstraints = this._dragConstraints.map((e) => e === "top" ? "bottom" : e === "bottom" ? "top" : e)), this.update();
			return;
		}
		if (this._moveDrag) {
			let e = this._projectToLocal(t);
			if (!e) return;
			let n = e.x - this._moveDrag.origin.x, r = e.z - this._moveDrag.origin.z;
			this._viewport.left = this._moveDrag.left0 + n, this._viewport.right = this._moveDrag.right0 + n, this._viewport.top = this._moveDrag.top0 - r, this._viewport.bottom = this._moveDrag.bottom0 - r, this.update();
			return;
		}
		if (!this._resizable && !this._movable) return;
		this._raycaster.set(t.origin, t.direction);
		let n = null;
		if (this._resizable) {
			let e = this._handles.filter((e) => e.visible), t = this._raycaster.intersectObjects(e, !1);
			n = t.length > 0 ? t[0].object : null;
		}
		if (n !== this._hoveredHandle && (this._hoveredHandle && (this._hoveredHandle.material = this._normalMat), n && (n.material = this._hoverMat), this._hoveredHandle = n), this._movable && !this._hoveredHandle) {
			this._raycaster.params.Line = { threshold: e._LINE_THRESHOLD };
			let t = this._raycaster.intersectObject(this._border, !1).length > 0;
			this._setBorderHover(t);
		} else this._setBorderHover(!1);
	}
	onPointerDown(t) {
		if (!(!this._resizable && !this._movable)) {
			if (this._raycaster.set(t.origin, t.direction), this._resizable) {
				let e = this._handles.filter((e) => e.visible), t = this._raycaster.intersectObjects(e, !1);
				if (t.length > 0) {
					this._dragHandle = t[0].object, this._dragConstraints = [...this._dragHandle.userData.constraints];
					return;
				}
			}
			if (this._movable && (this._raycaster.params.Line = { threshold: e._LINE_THRESHOLD }, this._raycaster.intersectObject(this._border, !1).length > 0)) {
				let e = this._projectToLocal(t);
				if (!e) return;
				this._moveDrag = {
					origin: e,
					left0: this._viewport.left,
					right0: this._viewport.right,
					top0: this._viewport.top,
					bottom0: this._viewport.bottom
				};
			}
		}
	}
	onPointerUp() {
		this._dragHandle = null, this._dragConstraints = [], this._moveDrag = null;
	}
	dispose() {
		this._border.geometry.dispose(), this._borderMat.dispose(), this._normalMat.dispose(), this._hoverMat.dispose(), this._handles.length > 0 && this._handles[0].geometry.dispose(), this.removeFromParent();
	}
	_projectToLocal(e) {
		this.updateWorldMatrix(!0, !1);
		let t = new G(0, 1, 0).transformDirection(this.matrixWorld), n = new G().setFromMatrixPosition(this.matrixWorld), r = new ne().setFromNormalAndCoplanarPoint(t, n), i = new G();
		return e.intersectPlane(r, i) ? this.worldToLocal(i) : null;
	}
	_setBorderHover(t) {
		t !== this._hoveringBorder && (this._hoveringBorder = t, this._borderMat.color.setHex(t ? e._BORDER_HOVER_COLOR : e._BORDER_COLOR));
	}
};
X(ed, "_BORDER_COLOR", 22015), X(ed, "_BORDER_HOVER_COLOR", 16746496), X(ed, "_LINE_THRESHOLD", .06), X(ed, "_HANDLE_DEFS", [
	{ constraints: ["left", "top"] },
	{ constraints: ["right", "top"] },
	{ constraints: ["right", "bottom"] },
	{ constraints: ["left", "bottom"] },
	{ constraints: ["top"] },
	{ constraints: ["right"] },
	{ constraints: ["bottom"] },
	{ constraints: ["left"] }
]);
var td = ed, nd = class {
	constructor(e) {
		X(this, "uuid", Pe.generateUUID()), X(this, "name"), X(this, "camera"), X(this, "onDisposed", new Z()), X(this, "_left"), X(this, "_right"), X(this, "_top"), X(this, "_bottom"), X(this, "_drawingScale"), X(this, "_container", null), X(this, "_helper", null), X(this, "_helperVisible", !1), this._left = e.left, this._right = e.right, this._top = e.top, this._bottom = e.bottom, this._drawingScale = e.scale ?? 100, this.name = e.name ?? "Drawing Viewport", this.camera = new ge(this._left, this._right, this._top, this._bottom, .1, 30), this.camera.up.set(0, 0, -1), this.camera.position.set(0, 10, 0), this.camera.lookAt(0, 0, 0), this.camera.layers.set(1);
	}
	get left() {
		return this._left;
	}
	set left(e) {
		var t;
		this._left = e, this.camera.left = e, this.camera.updateProjectionMatrix(), (t = this._helper) == null || t.update();
	}
	get right() {
		return this._right;
	}
	set right(e) {
		var t;
		this._right = e, this.camera.right = e, this.camera.updateProjectionMatrix(), (t = this._helper) == null || t.update();
	}
	get top() {
		return this._top;
	}
	set top(e) {
		var t;
		this._top = e, this.camera.top = e, this.camera.updateProjectionMatrix(), (t = this._helper) == null || t.update();
	}
	get bottom() {
		return this._bottom;
	}
	set bottom(e) {
		var t;
		this._bottom = e, this.camera.bottom = e, this.camera.updateProjectionMatrix(), (t = this._helper) == null || t.update();
	}
	get drawingScale() {
		return this._drawingScale;
	}
	set drawingScale(e) {
		this._drawingScale = e;
	}
	get helper() {
		return this._helper ||= new td(this), this._helper;
	}
	get helperVisible() {
		return this._helperVisible;
	}
	set helperVisible(e) {
		var t, n;
		this._helperVisible = e, e ? (t = this._container) == null || t.add(this.helper) : (n = this._helper) == null || n.removeFromParent();
	}
	get bbox() {
		return new _(new G(this._left, 0, -this._top), new G(this._right, 0, -this._bottom));
	}
	get size() {
		let e = new G();
		return this.bbox.getSize(e), new O(e.x * 1e3, e.z * 1e3);
	}
	get localXAxis() {
		return new G(1, 0, 0);
	}
	get localYAxis() {
		return new G(0, 0, -1);
	}
	get normal() {
		return new G(0, 1, 0);
	}
	setContainer(e) {
		this._container = e, this._helperVisible && this._helper && e.add(this._helper);
	}
	clipLine(e) {
		let t = this.bbox, { start: n, end: r } = e, i = t.containsPoint(n), a = t.containsPoint(r);
		if (i && a) return e;
		if (!i && !a) {
			let t = this.getPlaneIntersections(e);
			return t.length < 2 ? null : new z(t[0], t[1]);
		}
		let o = this.getPlaneIntersections(e);
		return o.length === 0 ? null : i ? new z(n, o[0]) : new z(o[0], r);
	}
	dispose() {
		var e;
		(e = this._helper) == null || e.dispose(), this._helper = null, this.onDisposed.trigger(), this.onDisposed.reset();
	}
	get bboxPlanes() {
		let e = this.bbox;
		return [
			new ne(new G(1, 0, 0), -e.min.x),
			new ne(new G(-1, 0, 0), e.max.x),
			new ne(new G(0, 0, 1), -e.min.z),
			new ne(new G(0, 0, -1), e.max.z)
		];
	}
	getPlaneIntersections(e) {
		let t = [];
		for (let n of this.bboxPlanes) {
			let r = new G();
			n.intersectLine(e, r) && this.bbox.containsPoint(r) && t.push(r);
		}
		return t;
	}
}, rd = class extends a {
	constructor(e) {
		super(), X(this, "_container"), this._container = e, this.onBeforeDelete.add(({ value: e }) => {
			this._container.remove(e.camera), e.dispose();
		});
	}
	create(e) {
		let t = new nd(e);
		return this._container.add(t.camera), t.setContainer(this._container), this.set(t.uuid, t), t;
	}
}, id = class e extends R {
	constructor(t) {
		super(), X(this, "_drawing"), X(this, "_topFrame"), X(this, "_pillars"), X(this, "_bottomFrame"), X(this, "_topPlane"), X(this, "_bottomPlane"), X(this, "_frameMat"), X(this, "_depthMat"), X(this, "_planeMat"), X(this, "width", 10), X(this, "height", 10), X(this, "farHandle", new Ce()), X(this, "widthHandle", new Ce()), X(this, "heightHandle", new Ce()), this._drawing = t, this._frameMat = new Ie({
			color: e._FRAME_COLOR,
			depthTest: !1
		}), this._depthMat = new Ie({
			color: e._DEPTH_COLOR,
			depthTest: !1,
			transparent: !0,
			opacity: .4
		}), this._planeMat = new ue({
			color: e._FRAME_COLOR,
			transparent: !0,
			opacity: .07,
			side: 2,
			depthTest: !1
		});
		let n = () => {
			let e = new r();
			return e.setAttribute("position", new W(/* @__PURE__ */ new Float32Array(12), 3)), e.setIndex([
				0,
				1,
				2,
				0,
				2,
				3
			]), e;
		};
		this._topPlane = new U(n(), this._planeMat), this._topPlane.renderOrder = 998, this._topPlane.frustumCulled = !1, this._topPlane.userData.isDimension = !0, this._bottomPlane = new U(n(), this._planeMat), this._bottomPlane.renderOrder = 998, this._bottomPlane.frustumCulled = !1, this._bottomPlane.userData.isDimension = !0;
		let i = new r();
		i.setAttribute("position", new W(/* @__PURE__ */ new Float32Array(24), 3)), this._topFrame = new B(i, this._frameMat), this._topFrame.renderOrder = 999, this._topFrame.frustumCulled = !1, this._topFrame.userData.isDimension = !0;
		let a = new r();
		a.setAttribute("position", new W(/* @__PURE__ */ new Float32Array(24), 3)), this._pillars = new B(a, this._depthMat), this._pillars.renderOrder = 999, this._pillars.frustumCulled = !1, this._pillars.userData.isDimension = !0;
		let o = new r();
		o.setAttribute("position", new W(/* @__PURE__ */ new Float32Array(24), 3)), this._bottomFrame = new B(o, this._depthMat), this._bottomFrame.renderOrder = 999, this._bottomFrame.frustumCulled = !1, this._bottomFrame.userData.isDimension = !0, this.add(this._topPlane, this._bottomPlane), this.add(this._topFrame, this._pillars, this._bottomFrame), this.add(this.farHandle, this.widthHandle, this.heightHandle), this.farHandle.rotation.x = Math.PI, this.update();
	}
	update() {
		let e = this.width / 2, t = this.height / 2, n = -this._drawing.far, r = .005, i = -e, a = e, o = -t, s = t, c = this._topFrame.geometry.attributes.position;
		c.setXYZ(0, i, r, o), c.setXYZ(1, a, r, o), c.setXYZ(2, a, r, o), c.setXYZ(3, a, r, s), c.setXYZ(4, a, r, s), c.setXYZ(5, i, r, s), c.setXYZ(6, i, r, s), c.setXYZ(7, i, r, o), c.needsUpdate = !0, this._topFrame.geometry.computeBoundingSphere();
		let l = this._pillars.geometry.attributes.position;
		l.setXYZ(0, i, r, o), l.setXYZ(1, i, n, o), l.setXYZ(2, a, r, o), l.setXYZ(3, a, n, o), l.setXYZ(4, a, r, s), l.setXYZ(5, a, n, s), l.setXYZ(6, i, r, s), l.setXYZ(7, i, n, s), l.needsUpdate = !0, this._pillars.geometry.computeBoundingSphere();
		let u = this._bottomFrame.geometry.attributes.position;
		u.setXYZ(0, i, n, o), u.setXYZ(1, a, n, o), u.setXYZ(2, a, n, o), u.setXYZ(3, a, n, s), u.setXYZ(4, a, n, s), u.setXYZ(5, i, n, s), u.setXYZ(6, i, n, s), u.setXYZ(7, i, n, o), u.needsUpdate = !0, this._bottomFrame.geometry.computeBoundingSphere();
		let d = (e, t) => {
			let n = e.geometry.attributes.position;
			n.setXYZ(0, i, t, o), n.setXYZ(1, a, t, o), n.setXYZ(2, a, t, s), n.setXYZ(3, i, t, s), n.needsUpdate = !0, e.geometry.computeBoundingSphere();
		};
		d(this._topPlane, r), d(this._bottomPlane, n), this.farHandle.position.set(0, n, 0), this.widthHandle.position.set(a, r, 0), this.heightHandle.position.set(0, r, s);
	}
	attachFarGizmo(e) {
		e.attach(this.farHandle), e.setSpace("local"), e.showX = !1, e.showZ = !1, e.addEventListener("objectChange", () => {
			this.farHandle.position.x = 0, this.farHandle.position.z = 0;
			let e = Math.max(.1, -this.farHandle.position.y);
			this._drawing.far = e, this.farHandle.position.y = -e, this.update();
		});
	}
	attachWidthGizmo(e) {
		e.attach(this.widthHandle), e.setSpace("local"), e.showY = !1, e.showZ = !1, e.addEventListener("objectChange", () => {
			this.widthHandle.position.y = .005, this.widthHandle.position.z = 0, this.width = Math.max(.1, this.widthHandle.position.x * 2), this.widthHandle.position.x = this.width / 2, this.update();
		});
	}
	attachHeightGizmo(e) {
		e.attach(this.heightHandle), e.setSpace("local"), e.showX = !1, e.showY = !1, e.addEventListener("objectChange", () => {
			this.heightHandle.position.x = 0, this.heightHandle.position.y = .005, this.height = Math.max(.1, this.heightHandle.position.z * 2), this.heightHandle.position.z = this.height / 2, this.update();
		});
	}
	dispose() {
		this._topPlane.geometry.dispose(), this._bottomPlane.geometry.dispose(), this._topFrame.geometry.dispose(), this._pillars.geometry.dispose(), this._bottomFrame.geometry.dispose(), this._planeMat.dispose(), this._frameMat.dispose(), this._depthMat.dispose(), this.removeFromParent();
	}
};
X(id, "_FRAME_COLOR", 22015), X(id, "_DEPTH_COLOR", 22015);
function ad(e, t) {
	if (e.length !== 3 || t.length !== 3) throw Error("computeAlignmentMatrix requires exactly 3 point pairs.");
	let n = (e, t) => {
		let n = new G().subVectors(e[1], e[0]), r = new G().subVectors(e[2], e[0]);
		if (new G().crossVectors(n, r).length() < 1e-6) throw Error(`${t} points are collinear — three non-collinear points are required to define a plane.`);
	};
	n(e, "Drawing"), n(t, "World");
	let r = (e, t, n) => {
		let r = new G().subVectors(t, e), i = new G().subVectors(n, e), a = r.clone().normalize(), o = new G().crossVectors(r, i).normalize(), s = new G().crossVectors(a, o).normalize();
		return new H().makeBasis(a, o, s);
	}, i = r(e[0], e[1], e[2]), a = r(t[0], t[1], t[2]).clone().multiply(i.clone().invert()), s = e[0].distanceTo(e[1]);
	if (s < 1e-10) throw Error("The first two drawing points are coincident — cannot compute scale.");
	let c = t[0].distanceTo(t[1]) / s, l = e[0].clone().multiplyScalar(c).applyMatrix4(a), u = new G().subVectors(t[0], l), d = new o().setFromRotationMatrix(a), f = new H();
	return f.compose(u, d, new G(c, c, c)), f;
}
var od = class e {
	constructor(e) {
		X(this, "uuid", Pe.generateUUID()), X(this, "_raycaster", new u()), X(this, "_components"), X(this, "world", null), X(this, "three", new R()), X(this, "annotations", new Qu()), X(this, "layers", new $u(this.three)), X(this, "activeLayer", "0"), X(this, "far", 10), X(this, "viewports", new rd(this.three)), X(this, "onDisposed", new Z()), this._components = e;
	}
	raycast(e, t = null) {
		this._raycaster.set(e.origin, e.direction), this._raycaster.layers.set(1), this._raycaster.params.Line && (this._raycaster.params.Line.threshold = .1);
		let n = [];
		this.three.traverse((e) => {
			e instanceof B && !e.userData.isDimension && n.push(e);
		});
		let r = this._raycaster.intersectObjects(n, !1);
		if (r.length === 0) return null;
		let i = r[0], a = this.three.worldToLocal(i.point.clone()), o = null;
		if (i.object instanceof B && i.index !== void 0) {
			let e = i.object.geometry.attributes.position, t = i.index, n = new G(e.getX(t), e.getY(t), e.getZ(t)), r = new G(e.getX(t + 1), e.getY(t + 1), e.getZ(t + 1));
			n.applyMatrix4(i.object.matrixWorld), this.three.worldToLocal(n), r.applyMatrix4(i.object.matrixWorld), this.three.worldToLocal(r), o = new z(n, r);
		}
		return {
			point: a,
			object: i.object,
			viewport: t,
			line: o
		};
	}
	alignTo(e, t) {
		ad(e, t).decompose(this.three.position, this.three.quaternion, this.three.scale);
	}
	static toDrawingSpace(e, t) {
		e.updateWorldMatrix(!0, !1), t.three.updateWorldMatrix(!0, !1);
		let n = new H().copy(t.three.matrixWorld).invert().multiply(e.matrixWorld), i = e.geometry.attributes.position, a = i.count, o = new Float32Array(a * 3), s = new G();
		for (let e = 0; e < a; e++) s.fromBufferAttribute(i, e).applyMatrix4(n), o[e * 3] = s.x, o[e * 3 + 1] = 0, o[e * 3 + 2] = s.z;
		let c = new r();
		return c.setAttribute("position", new W(o, 3)), new B(c);
	}
	addProjectionLines(e, t = "0") {
		return this.layers.has(t) || (console.warn(`[TechnicalDrawing] Layer "${t}" does not exist. Falling back to "0".`), t = "0"), this.layers.assign(e, t), e.layers.set(1), e.material instanceof Te && e.computeLineDistances(), e.geometry.computeBoundsTree({
			strategy: 0,
			indirect: !0,
			type: ys
		}), this.three.add(e), e;
	}
	async addProjectionFromItems(t, n) {
		if (!this.world) {
			console.warn("[TechnicalDrawing] addProjectionFromItems: drawing has no world assigned.");
			return;
		}
		for (let e of [n.layers.visible, n.layers.hidden]) if (!this.layers.has(e)) {
			console.warn(`[TechnicalDrawing] Layer "${e}" does not exist — create it before calling addProjectionFromItems.`);
			return;
		}
		let r = this._components.get(ol), i = r.projectionDirection.clone(), a = r.nearPlane, s = r.farPlane;
		try {
			this.three.updateWorldMatrix(!0, !1);
			let i = new G(0, -1, 0).transformDirection(this.three.matrixWorld).normalize();
			r.projectionDirection.copy(i);
			let a = new H().makeRotationFromQuaternion(new o().setFromUnitVectors(i, new G(0, -1, 0))), s = new G().setFromMatrixPosition(this.three.matrixWorld).applyMatrix4(a).y;
			r.farPlane = s, r.nearPlane = s - this.far;
			let c = await r.get(t, this.world, { onProgress: n.onProgress }), l = (t) => e.toDrawingSpace(new B(t), this);
			this.addProjectionLines(l(c.visible), n.layers.visible), this.addProjectionLines(l(c.hidden), n.layers.hidden);
		} finally {
			r.projectionDirection.copy(i), r.nearPlane = a, r.farPlane = s;
		}
	}
	orientTo(e) {
		let t = e.clone().normalize(), n = Math.SQRT1_2;
		t.x > .999 ? this.three.quaternion.set(.5, -.5, .5, .5) : t.x < -.999 ? this.three.quaternion.set(.5, .5, -.5, .5) : t.y > .999 ? this.three.quaternion.set(0, 0, 1, 0) : t.y < -.999 ? this.three.quaternion.set(0, 0, 0, 1) : t.z > .999 ? this.three.quaternion.set(0, n, -n, 0) : t.z < -.999 ? this.three.quaternion.set(n, 0, 0, n) : console.warn("[TechnicalDrawing] orientTo: direction does not match any of the 6 standard axes.");
	}
	dispose() {
		this.viewports.clear(), this.layers.clear(), this.annotations.clear(), this._components.get(Zt).destroy(this.three), this.onDisposed.trigger(), this.onDisposed.reset();
	}
}, sd = class {
	constructor(e) {
		X(this, "styles", new a()), X(this, "activeStyle", "default"), X(this, "onCommit", new Z()), X(this, "onUpdate", new Z()), X(this, "onDelete", new Z()), X(this, "onDisposed", new Z()), X(this, "_knownDrawings", /* @__PURE__ */ new Set()), X(this, "_previewMaterial", new Ie({
			color: 16737894,
			depthTest: !1
		})), X(this, "_previewObject", null), X(this, "_previewDrawing", null), X(this, "_materialCache", new a()), X(this, "_meshMaterialCache", new a()), X(this, "_ownsChildGeometry", !0), this._components = e, this.styles.onItemUpdated.add(({ key: e }) => {
			let t = this._materialCache.get(e);
			t && t.color.setHex(this._resolveStyle(e).color);
			let n = this._meshMaterialCache.get(e);
			n && n.color.setHex(this._resolveStyle(e).color);
			let r = this._components.get(ef), i = r ? [...r.list.values()] : [...this._knownDrawings];
			for (let t of i) {
				let n = [...t.annotations.getBySystem(this)].filter(([, t]) => t.style === e).map(([e]) => e);
				n.length > 0 && this.update(t, n, {});
			}
		});
	}
	_onAfterPersist(e, t) {}
	_onDispose() {}
	_updatePreview() {}
	get(e) {
		let t = new a();
		for (let n of e) for (let [e, r] of n.annotations.getBySystem(this)) t.set(e, {
			drawingUuid: n.uuid,
			item: r
		});
		return t;
	}
	add(e, t) {
		let n = {
			uuid: Pe.generateUUID(),
			style: this.activeStyle,
			...t
		}, r = this._persist(e, n);
		return this.onCommit.trigger([r]), n;
	}
	update(e, t, n) {
		for (let r of t) {
			let t = e.annotations.get(r);
			if (!t || t.system !== this) continue;
			let i = t.data;
			Object.assign(i, n), this._redraw(i, t.three), this.onUpdate.trigger({
				item: i,
				group: t.three
			});
		}
	}
	pick(t, n = .05) {
		let r = new u();
		r.ray.copy(t), r.params.Line = { threshold: n }, r.params.LineSegments = { threshold: n };
		let i = e.prototype.raycast, a = null, o = Infinity;
		for (let e of this._knownDrawings) for (let [t, n] of e.annotations) {
			if (n.system !== this) continue;
			let e = n.three;
			e.updateWorldMatrix(!0, !0), e.traverse((n) => {
				if (n === e) return;
				let s = [];
				if (n instanceof B && n.userData.isDimension) i.call(n, r, s), s.length > 0 && s[0].distance < o && (o = s[0].distance, a = t);
				else if (n instanceof U) {
					let e = new _().setFromObject(n), i = new G();
					if (r.ray.intersectBox(e, i)) {
						let e = r.ray.origin.distanceTo(i);
						e < o && (o = e, a = t);
					}
				}
			});
		}
		return a;
	}
	delete(e, t) {
		let n = [];
		for (let r of t) {
			let t = e.annotations.get(r);
			!t || t.system !== this || (this._disposeGroup(t.three), e.annotations.delete(r), n.push(r));
		}
		n.length && this.onDelete.trigger(n);
	}
	clear(e) {
		let t = e ?? [...this._knownDrawings];
		for (let e of t) {
			let t = [];
			for (let [n, r] of e.annotations) r.system === this && t.push(n);
			for (let n of t) {
				let t = e.annotations.get(n);
				this._disposeGroup(t.three), e.annotations.delete(n);
			}
		}
	}
	dispose() {
		this._clearPreview(), this._onDispose(), this.clear();
		for (let e of this._materialCache.values()) e.dispose();
		this._materialCache.clear();
		for (let e of this._meshMaterialCache.values()) e.dispose();
		this._meshMaterialCache.clear(), this._previewMaterial.dispose(), this.onCommit.reset(), this.onUpdate.reset(), this.onDelete.reset(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	_trackDrawing(e) {
		this._knownDrawings.has(e) || (this._knownDrawings.add(e), e.onDisposed.add(() => this._knownDrawings.delete(e)));
	}
	_resolveStyle(e) {
		return this.styles.get(e) ?? this.styles.get("default");
	}
	_getMaterial(e) {
		let t = this._materialCache.get(e);
		if (t) return t;
		let n = new Ie({ color: this._resolveStyle(e).color });
		return this._materialCache.set(e, n), n;
	}
	_getMeshMaterial(e) {
		let t = this._meshMaterialCache.get(e);
		if (t) return t;
		let n = new ue({
			color: this._resolveStyle(e).color,
			side: 2
		});
		return this._meshMaterialCache.set(e, n), n;
	}
	_disposeGroup(e) {
		if (e.removeFromParent(), this._ownsChildGeometry) e.traverse((e) => {
			e.geometry instanceof r && e.geometry.dispose();
		});
		else for (; e.children.length > 0;) e.remove(e.children[0]);
	}
	_clearPreview() {
		this._previewObject &&= (this._previewObject.removeFromParent(), this._previewObject.geometry.dispose(), null);
	}
	_persist(e, t) {
		this._trackDrawing(e);
		let n = this._resolveStyle(t.style), r = this._buildGroup(t, n);
		return r.userData.isDimension = !0, r.userData.annotationUuid = t.uuid, r.userData.layer = e.activeLayer, e.three.add(r), e.annotations.set(t.uuid, {
			system: this,
			data: t,
			three: r
		}), this._onAfterPersist(t, r), {
			drawing: e,
			item: t,
			group: r
		};
	}
	_redraw(e, t) {
		for (; t.children.length > 0;) {
			let e = t.children[0];
			this._ownsChildGeometry && e.geometry instanceof r && e.geometry.dispose(), t.remove(e);
		}
		let n = this._resolveStyle(e.style), i = this._buildGroup(e, n);
		for (; i.children.length > 0;) t.add(i.children[0]);
		this._onAfterPersist(e, t);
	}
};
function cd(e, t, n) {
	let r = e.clone().sub(t.start).dot(n);
	return t.start.clone().addScaledVector(n, r);
}
function ld(e, t) {
	return Math.abs(e.dot(t)) > .999;
}
function ud(e, t) {
	return e.start.distanceTo(t.start) < 1e-6 && e.end.distanceTo(t.end) < 1e-6 || e.start.distanceTo(t.end) < 1e-6 && e.end.distanceTo(t.start) < 1e-6;
}
function dd(e, t) {
	let n = e[0], r = e[e.length - 1], i = new G().subVectors(r, n);
	if (i.lengthSq() < 1e-10) return 0;
	i.normalize();
	let a = new G(-i.z, 0, i.x);
	return t.clone().sub(n).dot(a);
}
function fd(e, t) {
	let n = [];
	for (let r = 0; r < e.length - 1; r++) n.push({
		uuid: Pe.generateUUID(),
		pointA: e[r].clone(),
		pointB: e[r + 1].clone(),
		offset: t,
		style: ""
	});
	return n;
}
function pd(e, t) {
	switch (e.kind) {
		case "awaitingFirstPoint":
			if (t.type === "CLICK") {
				if (!t.line) return e;
				let n = new G().subVectors(t.line.end, t.line.start).normalize();
				return {
					kind: "placingPoints",
					points: [t.point.clone()],
					cursor: null,
					lineDir: n,
					firstLine: t.line.clone()
				};
			}
			return t.type === "SELECT_LINE" ? {
				kind: "positioningOffset",
				points: [t.line.start.clone(), t.line.end.clone()],
				cursor: null
			} : e;
		case "placingPoints":
			if (t.type === "MOUSE_MOVE") {
				let n = new G(-e.lineDir.z, 0, e.lineDir.x), r = e.points[e.points.length - 1], i = t.point.clone().sub(r).dot(n), a = r.clone().addScaledVector(n, i);
				return {
					...e,
					cursor: a
				};
			}
			if (t.type === "CLICK") {
				if (!t.line || ud(t.line, e.firstLine) || !ld(new G().subVectors(t.line.end, t.line.start).normalize(), e.lineDir)) return e;
				let n = cd(e.points[0], t.line, e.lineDir), r = [...e.points, n];
				return {
					...e,
					points: r,
					cursor: e.cursor
				};
			}
			return t.type === "CONFIRM" && e.points.length >= 2 ? {
				kind: "positioningOffset",
				points: e.points,
				cursor: null
			} : t.type === "ESCAPE" ? { kind: "awaitingFirstPoint" } : e;
		case "positioningOffset":
			if (t.type === "MOUSE_MOVE") return {
				...e,
				cursor: t.point.clone()
			};
			if (t.type === "CLICK") {
				let n = dd(e.points, t.point);
				return {
					kind: "committed",
					dimensions: fd(e.points, n)
				};
			}
			return t.type === "ESCAPE" ? { kind: "awaitingFirstPoint" } : e;
		case "committed": return t.type === "ESCAPE" ? { kind: "awaitingFirstPoint" } : e;
	}
}
function md(e) {
	let { pointA: t, pointB: n, offset: r } = e, i = new G().subVectors(n, t), a = new G(-i.z, 0, i.x).normalize(), o = t.clone().addScaledVector(a, r), s = n.clone().addScaledVector(a, r), c = new G().subVectors(s, o).normalize();
	return [{
		tip: o,
		dir: c
	}, {
		tip: s,
		dir: c.clone().negate()
	}];
}
function hd(e, t) {
	let { pointA: n, pointB: r, offset: i } = e, a = new G().subVectors(r, n), o = new G(-a.z, 0, a.x).normalize(), s = i >= 0 ? 1 : -1, c = Math.abs(i), l = n.clone().addScaledVector(o, t.extensionGap * s), u = n.clone().addScaledVector(o, (c + t.extensionOvershoot) * s), d = r.clone().addScaledVector(o, t.extensionGap * s), f = r.clone().addScaledVector(o, (c + t.extensionOvershoot) * s), p = n.clone().addScaledVector(o, i), m = r.clone().addScaledVector(o, i), h = new G().subVectors(m, p).normalize(), g = t.lineTick(p, h, t.tickSize), _ = t.lineTick(m, h.clone().negate(), t.tickSize);
	return [
		l.x,
		l.y,
		l.z,
		u.x,
		u.y,
		u.z,
		d.x,
		d.y,
		d.z,
		f.x,
		f.y,
		f.z,
		p.x,
		p.y,
		p.z,
		m.x,
		m.y,
		m.z,
		...g,
		..._
	];
}
function gd(e, t, n, r) {
	if (e === "placingPoints") {
		let e = [];
		for (let n = 0; n < t.length - 1; n++) {
			let r = t[n], i = t[n + 1];
			e.push(r.x, r.y, r.z, i.x, i.y, i.z);
		}
		if (n) {
			let r = t[t.length - 1];
			e.push(r.x, r.y, r.z, n.x, n.y, n.z);
		}
		return e;
	}
	if (!n || t.length < 2) return [];
	let i = dd(t, n), a = [];
	for (let e = 0; e < t.length - 1; e++) a.push(...hd({
		uuid: "",
		pointA: t[e],
		pointB: t[e + 1],
		offset: i,
		style: ""
	}, r));
	return a;
}
var _d = class extends sd {
	constructor(e) {
		super(e), X(this, "enabled", !0), X(this, "machineState", { kind: "awaitingFirstPoint" }), X(this, "onMachineStateChanged", new Z()), this.styles.set("default", {
			lineTick: Ju,
			tickSize: .4,
			extensionGap: .05,
			extensionOvershoot: .2,
			color: 0,
			textOffset: .4,
			fontSize: .45
		});
	}
	pickHandle(e, t, n = .1) {
		let r = new H().copy(e.three.matrixWorld).invert(), i = new M(t.origin.clone().applyMatrix4(r), t.direction.clone().transformDirection(r).normalize()), a = new ne(new G(0, 1, 0), 0), o = i.intersectPlane(a, new G());
		if (!o) return null;
		let s = null, c = n;
		for (let [t, n] of e.annotations.getBySystem(this)) {
			let e = new G().subVectors(n.pointB, n.pointA), r = new G(-e.z, 0, e.x).normalize(), i = new G().addVectors(n.pointA, n.pointB).multiplyScalar(.5).addScaledVector(r, n.offset);
			for (let [e, r] of [
				["pointA", n.pointA],
				["pointB", n.pointB],
				["offset", i]
			]) {
				let n = Math.hypot(o.x - r.x, o.z - r.z);
				n < c && (c = n, s = {
					uuid: t,
					handle: e
				});
			}
		}
		return s;
	}
	sendMachineEvent(e) {
		let t = e.drawing ?? null;
		t && (this._previewDrawing = t);
		let n = pd(this.machineState, e);
		if (n !== this.machineState) {
			if (this.machineState = n, this._updatePreview(), n.kind === "committed") {
				if (!this._previewDrawing) {
					console.warn("LinearAnnotations: no drawing context — send a CLICK or SELECT_LINE with `drawing` first. Skipping."), this._resetMachine();
					return;
				}
				for (let e of n.dimensions) e.style = this.activeStyle;
				let e = n.dimensions.map((e) => this._persist(this._previewDrawing, e));
				this.onCommit.trigger(e);
			}
			this.onMachineStateChanged.trigger(this.machineState), n.kind === "committed" && this._resetMachine();
		}
	}
	_buildGroup(e, t) {
		let n = new R(), i = hd(e, t), a = new r();
		a.setAttribute("position", new W(new Float32Array(i), 3));
		let o = new B(a, this._getMaterial(e.style));
		if (o.layers.set(1), o.userData.isDimension = !0, n.add(o), t.meshTick) for (let { tip: i, dir: a } of md(e)) {
			let o = t.meshTick(i, a, t.tickSize), s = new r();
			s.setAttribute("position", new W(new Float32Array(o), 3));
			let c = new U(s, this._getMeshMaterial(e.style));
			c.layers.set(1), c.userData.isMeshTick = !0, n.add(c);
		}
		return n;
	}
	_updatePreview() {
		let e = this.machineState;
		if (e.kind !== "placingPoints" && e.kind !== "positioningOffset") {
			this._clearPreview();
			return;
		}
		if (!this._previewDrawing) {
			this._clearPreview();
			return;
		}
		let t = this._resolveStyle(this.activeStyle);
		this._previewMaterial.color.setHex(t.color);
		let n = gd(e.kind, e.points, e.cursor, t);
		if (n.length === 0) {
			this._clearPreview();
			return;
		}
		let i = n.length / 3;
		if (!this._previewObject || this._previewObject.geometry.attributes.position.count !== i) {
			this._clearPreview();
			let e = new r();
			e.setAttribute("position", new W(new Float32Array(n), 3)), this._previewObject = new B(e, this._previewMaterial), this._previewObject.layers.set(1), this._previewObject.renderOrder = 1, this._previewObject.userData.isDimension = !0, this._previewDrawing.three.add(this._previewObject);
		} else {
			let e = this._previewObject.geometry.attributes.position;
			e.set(n), e.needsUpdate = !0;
		}
	}
	_resetMachine() {
		this.machineState = { kind: "awaitingFirstPoint" }, this._previewDrawing = null, this._updatePreview(), this.onMachineStateChanged.trigger(this.machineState);
	}
}, vd = Math.PI / 180;
function yd(e, t, n, r) {
	let i = t.x * r.z - t.z * r.x;
	if (Math.abs(i) < 1e-10) return null;
	let a = new G().subVectors(n, e), o = (a.x * r.z - a.z * r.x) / i;
	return new G(e.x + t.x * o, 0, e.z + t.z * o);
}
function bd(e, t, n) {
	let r = new G().subVectors(e, t).normalize(), i = new G().subVectors(n, t).normalize();
	return new G().addVectors(r, i).normalize();
}
function xd(e, t, n, r) {
	let i = bd(e, t, n);
	return new G().subVectors(r, t).setY(0).dot(i);
}
function Sd(e, t, n, r) {
	return xd(e, t, n, r) < 0;
}
function Cd(e, t) {
	switch (e.kind) {
		case "awaitingFirstLine": return t.type === "CLICK" && t.line ? {
			kind: "awaitingSecondLine",
			line1: t.line.clone(),
			pointA: t.point.clone()
		} : e;
		case "awaitingSecondLine":
			if (t.type === "CLICK" && t.line) {
				let n = new G().subVectors(e.line1.end, e.line1.start).normalize(), r = new G().subVectors(t.line.end, t.line.start).normalize();
				if (Math.abs(n.dot(r)) > Math.cos(vd)) return e;
				let i = yd(e.line1.start, n, t.line.start, r);
				return i ? {
					kind: "positioningArc",
					pointA: e.pointA.clone(),
					vertex: i,
					pointB: t.point.clone(),
					cursor: null,
					flipped: !1
				} : e;
			}
			return t.type === "ESCAPE" ? { kind: "awaitingFirstLine" } : e;
		case "positioningArc":
			if (t.type === "MOUSE_MOVE") {
				let n = Sd(e.pointA, e.vertex, e.pointB, t.point);
				return {
					...e,
					cursor: t.point.clone(),
					flipped: n
				};
			}
			if (t.type === "CLICK") {
				let n = Sd(e.pointA, e.vertex, e.pointB, t.point), r = Math.max(.05, Math.abs(xd(e.pointA, e.vertex, e.pointB, t.point)));
				return {
					kind: "committed",
					dimension: {
						uuid: Pe.generateUUID(),
						pointA: e.pointA.clone(),
						vertex: e.vertex.clone(),
						pointB: e.pointB.clone(),
						arcRadius: r,
						flipped: n,
						style: ""
					}
				};
			}
			return t.type === "ESCAPE" ? { kind: "awaitingFirstLine" } : e;
		case "committed": return t.type === "ESCAPE" ? { kind: "awaitingFirstLine" } : e;
	}
}
function wd(e) {
	let t = new G().subVectors(e.pointA, e.vertex).normalize(), n = new G().subVectors(e.pointB, e.vertex).normalize(), r = Math.atan2(t.z, t.x), i = Math.atan2(n.z, n.x) - r;
	for (; i > Math.PI;) i -= 2 * Math.PI;
	for (; i < -Math.PI;) i += 2 * Math.PI;
	e.flipped && (i -= Math.sign(i) * 2 * Math.PI);
	let a = new G(e.vertex.x + Math.cos(r) * e.arcRadius, 0, e.vertex.z + Math.sin(r) * e.arcRadius), o = r + i, s = new G(e.vertex.x + Math.cos(o) * e.arcRadius, 0, e.vertex.z + Math.sin(o) * e.arcRadius), c = Math.sign(i);
	return [{
		tip: a,
		dir: new G(-Math.sin(r) * c, 0, Math.cos(r) * c)
	}, {
		tip: s,
		dir: new G(Math.sin(o) * c, 0, -Math.cos(o) * c)
	}];
}
function Td(e) {
	let t = new G().subVectors(e.pointA, e.vertex).normalize(), n = new G().subVectors(e.pointB, e.vertex).normalize(), r = Math.acos(Pe.clamp(t.dot(n), -1, 1));
	return e.flipped ? 2 * Math.PI - r : r;
}
function Ed(e) {
	let t = new G().subVectors(e.pointA, e.vertex).normalize(), n = new G().subVectors(e.pointB, e.vertex).normalize(), r = Math.atan2(t.z, t.x), i = Math.atan2(n.z, n.x) - r;
	for (; i > Math.PI;) i -= 2 * Math.PI;
	for (; i < -Math.PI;) i += 2 * Math.PI;
	let a = r + i / 2;
	return e.flipped ? a + Math.PI : a;
}
function Dd(e, t, n, r, i, a = !1) {
	let o = Math.atan2(t.z, t.x), s = Math.atan2(n.z, n.x) - o;
	for (; s > Math.PI;) s -= 2 * Math.PI;
	for (; s < -Math.PI;) s += 2 * Math.PI;
	a && (s -= Math.sign(s) * 2 * Math.PI);
	let c = [];
	for (let t = 0; t < 8; t++) {
		let n = o + t / 8 * s, i = o + s * ((t + 1) / 8);
		c.push(e.x + Math.cos(n) * r, 0, e.z + Math.sin(n) * r, e.x + Math.cos(i) * r, 0, e.z + Math.sin(i) * r);
	}
	let l = new G(e.x + Math.cos(o) * r, 0, e.z + Math.sin(o) * r), u = new G(e.x + Math.cos(o + s) * r, 0, e.z + Math.sin(o + s) * r), d = e.clone().addScaledVector(t, i.extensionGap), f = e.clone().addScaledVector(n, i.extensionGap);
	c.push(d.x, d.y, d.z, l.x, l.y, l.z, f.x, f.y, f.z, u.x, u.y, u.z);
	let p = Math.sign(s), m = new G(-Math.sin(o) * p, 0, Math.cos(o) * p), h = o + s, g = new G(Math.sin(h) * p, 0, -Math.cos(h) * p);
	return c.push(...i.lineTick(l, m, i.tickSize), ...i.lineTick(u, g, i.tickSize)), c;
}
function Od(e, t) {
	let n = new G().subVectors(e.pointA, e.vertex).normalize(), r = new G().subVectors(e.pointB, e.vertex).normalize();
	return Dd(e.vertex, n, r, e.arcRadius, t, e.flipped ?? !1);
}
function kd(e, t, n, r, i, a = !1) {
	if (!r) return [];
	let o = Math.max(.05, new G().subVectors(r, t).setY(0).length());
	return Dd(t, new G().subVectors(e, t).normalize(), new G().subVectors(n, t).normalize(), o, i, a);
}
var Ad = class extends sd {
	constructor(e) {
		super(e), X(this, "enabled", !0), X(this, "machineState", { kind: "awaitingFirstLine" }), X(this, "onMachineStateChanged", new Z()), X(this, "_secondLinePreviewObject", null), this.styles.set("default", {
			lineTick: Ju,
			tickSize: .4,
			extensionGap: .05,
			color: 0,
			textOffset: .25,
			fontSize: .45
		});
	}
	pickHandle(e, t, n) {
		return null;
	}
	sendMachineEvent(e) {
		let t = e.drawing ?? null;
		if (this.machineState.kind === "awaitingSecondLine" && e.type === "MOUSE_MOVE") {
			t && (this._previewDrawing = t), this._updateSecondLinePreview(e.point, e.line ?? null);
			return;
		}
		let n = Cd(this.machineState, e);
		if (n !== this.machineState) {
			if (this.machineState.kind === "awaitingSecondLine" && this._clearSecondLinePreview(), this.machineState = n, t && (this._previewDrawing = t), this._updatePreview(), n.kind === "committed") {
				if (!this._previewDrawing) {
					console.warn("AngleAnnotations: CLICK that commits must include `drawing`. Skipping."), this._resetMachine();
					return;
				}
				n.dimension.style = this.activeStyle;
				let e = this._persist(this._previewDrawing, n.dimension);
				this.onCommit.trigger([e]);
			}
			this.onMachineStateChanged.trigger(this.machineState), n.kind === "committed" && this._resetMachine();
		}
	}
	_buildGroup(e, t) {
		let n = new R(), i = Od(e, t), a = new r();
		a.setAttribute("position", new W(new Float32Array(i), 3));
		let o = new B(a, this._getMaterial(e.style));
		if (o.layers.set(1), o.userData.isDimension = !0, n.add(o), t.meshTick) for (let { tip: i, dir: a } of wd(e)) {
			let o = t.meshTick(i, a, t.tickSize), s = new r();
			s.setAttribute("position", new W(new Float32Array(o), 3));
			let c = new U(s, this._getMeshMaterial(e.style));
			c.layers.set(1), c.userData.isMeshTick = !0, n.add(c);
		}
		return n;
	}
	_updatePreview() {
		let e = this.machineState;
		if (e.kind !== "positioningArc") {
			this._clearPreview();
			return;
		}
		if (!this._previewDrawing) {
			this._clearPreview();
			return;
		}
		let t = this._resolveStyle(this.activeStyle), n = kd(e.pointA, e.vertex, e.pointB, e.cursor, t, e.flipped);
		if (n.length === 0) {
			this._clearPreview();
			return;
		}
		let i = n.length / 3;
		if (!this._previewObject || this._previewObject.geometry.attributes.position.count !== i) {
			this._clearPreview();
			let e = new r();
			e.setAttribute("position", new W(new Float32Array(n), 3)), this._previewObject = new B(e, this._previewMaterial), this._previewObject.layers.set(1), this._previewObject.renderOrder = 1, this._previewObject.userData.isDimension = !0, this._previewDrawing.three.add(this._previewObject);
		} else {
			let e = this._previewObject.geometry.attributes.position;
			e.set(n), e.needsUpdate = !0;
		}
	}
	_onDispose() {
		this._clearSecondLinePreview();
	}
	_resetMachine() {
		this.machineState = { kind: "awaitingFirstLine" }, this._previewDrawing = null, this._updatePreview(), this.onMachineStateChanged.trigger(this.machineState);
	}
	_clearSecondLinePreview() {
		this._secondLinePreviewObject &&= (this._secondLinePreviewObject.removeFromParent(), this._secondLinePreviewObject.geometry.dispose(), null);
	}
	_updateSecondLinePreview(e, t) {
		if (this.machineState.kind !== "awaitingSecondLine") {
			this._clearSecondLinePreview();
			return;
		}
		if (!this._previewDrawing) {
			this._clearSecondLinePreview();
			return;
		}
		let n = this.machineState, i = new G().subVectors(n.line1.end, n.line1.start).normalize();
		if (!t) {
			this._clearSecondLinePreview();
			return;
		}
		let a = new G().subVectors(t.end, t.start).normalize(), o = jd(n.line1.start, i, t.start, a);
		if (!o) {
			this._clearSecondLinePreview();
			return;
		}
		let s = e.clone(), c = new G().subVectors(s, o).setY(0);
		if (c.length() < .01) {
			this._clearSecondLinePreview();
			return;
		}
		let l = new G().subVectors(n.pointA, o).normalize(), u = c.normalize(), d = Math.atan2(l.z, l.x), f = Math.atan2(u.z, u.x) - d;
		for (; f > Math.PI;) f -= 2 * Math.PI;
		for (; f < -Math.PI;) f += 2 * Math.PI;
		let p = d + f / 2, m = Math.max(.1, Math.min(n.pointA.distanceTo(o), s.distanceTo(o)) * .4), h = new G(o.x + Math.cos(p) * m, 0, o.z + Math.sin(p) * m), g = this._resolveStyle(this.activeStyle), _ = kd(n.pointA, o, s, h, g);
		if (_.length === 0) {
			this._clearSecondLinePreview();
			return;
		}
		let v = _.length / 3;
		if (!this._secondLinePreviewObject || this._secondLinePreviewObject.geometry.attributes.position.count !== v) {
			this._clearSecondLinePreview();
			let e = new r();
			e.setAttribute("position", new W(new Float32Array(_), 3)), this._secondLinePreviewObject = new B(e, this._previewMaterial), this._secondLinePreviewObject.layers.set(1), this._secondLinePreviewObject.renderOrder = 1, this._secondLinePreviewObject.userData.isDimension = !0, this._previewDrawing.three.add(this._secondLinePreviewObject);
		} else {
			let e = this._secondLinePreviewObject.geometry.attributes.position;
			e.set(_), e.needsUpdate = !0;
		}
	}
};
function jd(e, t, n, r) {
	let i = t.x * r.z - t.z * r.x;
	if (Math.abs(i) < 1e-6) return null;
	let a = n.x - e.x, o = n.z - e.z, s = (a * r.z - o * r.x) / i;
	return new G(e.x + s * t.x, 0, e.z + s * t.z);
}
function Md(e, t) {
	let n = t.x - e.x, r = t.z - e.z, i = Math.sqrt(n * n + r * r);
	if (i === 0) return e.clone();
	let a = Math.round(Math.atan2(r, n) / (Math.PI / 4)) * (Math.PI / 4);
	return new G(e.x + Math.cos(a) * i, 0, e.z + Math.sin(a) * i);
}
function Nd(e, t) {
	switch (e.kind) {
		case "awaitingArrowTip": return t.type === "CLICK" ? {
			kind: "placingElbow",
			arrowTip: t.point.clone(),
			cursor: null
		} : e;
		case "placingElbow": return t.type === "MOUSE_MOVE" ? {
			...e,
			cursor: t.point.clone()
		} : t.type === "CLICK" ? {
			kind: "placingExtension",
			arrowTip: e.arrowTip,
			elbow: t.point.clone(),
			cursor: null
		} : t.type === "ESCAPE" ? { kind: "awaitingArrowTip" } : e;
		case "placingExtension": return t.type === "MOUSE_MOVE" ? {
			...e,
			cursor: Md(e.elbow, t.point)
		} : t.type === "CLICK" ? {
			kind: "enteringText",
			arrowTip: e.arrowTip,
			elbow: e.elbow,
			extensionEnd: Md(e.elbow, t.point)
		} : t.type === "ESCAPE" ? { kind: "awaitingArrowTip" } : e;
		case "enteringText": return t.type === "SUBMIT_TEXT" && t.text.trim().length > 0 ? {
			kind: "committed",
			annotation: {
				uuid: Pe.generateUUID(),
				arrowTip: e.arrowTip.clone(),
				elbow: e.elbow.clone(),
				extensionEnd: e.extensionEnd.clone(),
				text: t.text.trim(),
				style: ""
			}
		} : t.type === "ESCAPE" ? { kind: "awaitingArrowTip" } : e;
		case "committed": return t.type === "ESCAPE" ? { kind: "awaitingArrowTip" } : e;
	}
}
var Pd = 24;
function Fd(e, t, n, r) {
	let i = [
		e.x,
		e.y,
		e.z,
		t.x,
		t.y,
		t.z,
		t.x,
		t.y,
		t.z,
		n.x,
		n.y,
		n.z
	];
	if (r.lineTick) {
		let n = new G().subVectors(e, t);
		n.lengthSq() > 1e-10 && i.push(...r.lineTick(e, n.normalize(), r.tickSize));
	}
	return i;
}
function Id(e, t, n, r) {
	let i = new A(e, t, n).getPoints(Pd), a = [];
	for (let e = 0; e < i.length - 1; e++) {
		let t = i[e], n = i[e + 1];
		a.push(t.x, t.y, t.z, n.x, n.y, n.z);
	}
	if (r.lineTick) {
		let n = new G().subVectors(e, t);
		n.lengthSq() > 1e-10 && a.push(...r.lineTick(e, n.normalize(), r.tickSize));
	}
	return a;
}
function Ld(e, t, n, r) {
	return r.leaderShape === "curved" ? Id(e, t, n, r) : Fd(e, t, n, r);
}
function Rd(e, t) {
	return Ld(e.arrowTip, e.elbow, e.extensionEnd, t);
}
function zd(e, t, n, r, i) {
	return r ? e === "placingElbow" ? Ld(t, r, r, i) : Ld(t, n, r, i) : [];
}
var Bd = class extends sd {
	constructor(e) {
		super(e), X(this, "enabled", !0), X(this, "machineState", { kind: "awaitingArrowTip" }), X(this, "onMachineStateChanged", new Z()), X(this, "_previewMeshMaterial", new ue({
			color: 16737894,
			side: 2,
			depthTest: !1
		})), X(this, "_previewMeshObject", null), this.styles.set("default", {
			tickSize: .4,
			color: 0,
			textOffset: .1,
			fontSize: .45,
			lineTick: Yu
		});
	}
	pickHandle(e, t, n = .1) {
		let r = new H().copy(e.three.matrixWorld).invert(), i = new M(t.origin.clone().applyMatrix4(r), t.direction.clone().transformDirection(r).normalize()), a = new ne(new G(0, 1, 0), 0), o = i.intersectPlane(a, new G());
		if (!o) return null;
		let s = null, c = n;
		for (let [t, n] of e.annotations.getBySystem(this)) for (let [e, r] of [["elbow", n.elbow], ["extensionEnd", n.extensionEnd]]) {
			let n = Math.hypot(o.x - r.x, o.z - r.z);
			n < c && (c = n, s = {
				uuid: t,
				handle: e
			});
		}
		return s;
	}
	sendMachineEvent(e) {
		let t = e.drawing ?? null;
		t && (this._previewDrawing = t);
		let n = Nd(this.machineState, e);
		if (n !== this.machineState) {
			if (this.machineState = n, this._updatePreview(), n.kind === "committed") {
				if (!this._previewDrawing) {
					console.warn("LeaderAnnotations: commit requires a drawing. Skipping."), this._resetMachine();
					return;
				}
				n.annotation.style = this.activeStyle;
				let e = this._persist(this._previewDrawing, n.annotation);
				this.onCommit.trigger([e]);
			}
			this.onMachineStateChanged.trigger(this.machineState), n.kind === "committed" && this._resetMachine();
		}
	}
	_buildGroup(e, t) {
		let n = new R(), i = Rd(e, t), a = new r();
		a.setAttribute("position", new W(new Float32Array(i), 3));
		let o = new B(a, this._getMaterial(e.style));
		if (o.layers.set(1), o.userData.isDimension = !0, n.add(o), t.meshTick) {
			let i = new G().subVectors(e.arrowTip, e.elbow);
			if (i.lengthSq() > 1e-10) {
				i.normalize();
				let a = t.meshTick(e.arrowTip, i, t.tickSize), o = new r();
				o.setAttribute("position", new W(new Float32Array(a), 3));
				let s = new U(o, this._getMeshMaterial(e.style));
				s.layers.set(1), s.userData.isMeshArrow = !0, n.add(s);
			}
		}
		return n;
	}
	_updatePreview() {
		let e = this.machineState;
		if (e.kind !== "placingElbow" && e.kind !== "placingExtension") {
			this._clearPreview();
			return;
		}
		if (!this._previewDrawing) {
			this._clearPreview();
			return;
		}
		let t = this._resolveStyle(this.activeStyle), n = e.kind === "placingElbow" ? zd("placingElbow", e.arrowTip, null, e.cursor, t) : zd("placingExtension", e.arrowTip, e.elbow, e.cursor, t);
		if (n.length === 0) {
			this._clearPreview();
			return;
		}
		let i = n.length / 3;
		if (!this._previewObject || this._previewObject.geometry.attributes.position.count !== i) {
			this._clearPreview();
			let e = new r();
			e.setAttribute("position", new W(new Float32Array(n), 3)), this._previewObject = new B(e, this._previewMaterial), this._previewObject.layers.set(1), this._previewObject.renderOrder = 1, this._previewObject.frustumCulled = !1, this._previewObject.userData.isDimension = !0, this._previewDrawing.three.add(this._previewObject);
		} else {
			let e = this._previewObject.geometry.attributes.position;
			e.set(n), e.needsUpdate = !0;
		}
		if (t.meshTick) {
			let n = e.kind === "placingElbow" ? e.cursor : e.elbow, i = n ? new G().subVectors(e.arrowTip, n) : null;
			if (i && i.lengthSq() > 1e-10) {
				i.normalize();
				let n = t.meshTick(e.arrowTip, i, t.tickSize);
				if (this._previewMeshObject) {
					let e = this._previewMeshObject.geometry.attributes.position;
					e.set(n), e.needsUpdate = !0;
				} else {
					let e = new r();
					e.setAttribute("position", new W(new Float32Array(n), 3)), this._previewMeshObject = new U(e, this._previewMeshMaterial), this._previewMeshObject.layers.set(1), this._previewMeshObject.renderOrder = 1, this._previewMeshObject.frustumCulled = !1, this._previewDrawing.three.add(this._previewMeshObject);
				}
			} else this._clearPreviewMesh();
		} else this._clearPreviewMesh();
	}
	_clearPreview() {
		super._clearPreview(), this._clearPreviewMesh();
	}
	_onDispose() {
		this._clearPreviewMesh(), this._previewMeshMaterial.dispose();
	}
	_resetMachine() {
		this.machineState = { kind: "awaitingArrowTip" }, this._previewDrawing = null, this._updatePreview(), this.onMachineStateChanged.trigger(this.machineState);
	}
	_clearPreviewMesh() {
		this._previewMeshObject &&= (this._previewMeshObject.removeFromParent(), this._previewMeshObject.geometry.dispose(), null);
	}
}, Vd = class extends sd {
	constructor(e) {
		super(e), X(this, "enabled", !0), X(this, "_ownsChildGeometry", !1), X(this, "definitions", new a()), this.styles.set("default", {
			color: 0,
			textOffset: 0,
			fontSize: 0
		});
	}
	pickHandle(e, t, n) {
		return null;
	}
	pick(e, t = .05) {
		let n = new u();
		n.ray.copy(e), n.params.Line = { threshold: t }, n.params.LineSegments = { threshold: t };
		let r = null, i = Infinity;
		for (let e of this._knownDrawings) for (let [t, a] of e.annotations) {
			if (a.system !== this) continue;
			let e = a.three;
			e.updateWorldMatrix(!0, !0), e.traverse((a) => {
				if (a === e || !(a instanceof B)) return;
				let o = [];
				a.raycast(n, o), o.length > 0 && o[0].distance < i && (i = o[0].distance, r = t);
			});
		}
		return r;
	}
	define(e, t) {
		this.definitions.set(e, t);
	}
	_buildGroup(e, t) {
		let n = this.definitions.get(e.blockName);
		if (!n) throw Error(`BlockAnnotations: block "${e.blockName}" is not defined.`);
		let r = new R();
		if (n.lines) {
			let t = new B(n.lines, this._getMaterial(e.style));
			t.layers.set(1), t.userData.isDimension = !0, r.add(t);
		}
		if (n.mesh) {
			let t = new U(n.mesh, this._getMeshMaterial(e.style));
			t.layers.set(1), t.userData.isBlockMesh = !0, r.add(t);
		}
		return r;
	}
	_onAfterPersist(e, t) {
		t.position.set(e.position.x, 0, e.position.z), t.rotation.set(0, e.rotation, 0), t.scale.setScalar(e.scale);
	}
	_onDispose() {
		var e, t;
		for (let n of this.definitions.values()) (e = n.lines) == null || e.dispose(), (t = n.mesh) == null || t.dispose();
		this.definitions.clear();
	}
};
function Hd(e, t) {
	let { position: n, direction: r } = e, { length: i } = t, a = new G(n.x + r.x * i, 0, n.z + r.z * i), o = new G(r.x, 0, r.z), s = t.lineTick(a, o, t.tickSize), c = [
		n.x,
		0,
		n.z,
		a.x,
		0,
		a.z
	];
	return new Float32Array([...c, ...s]);
}
function Ud(e, t) {
	return new G(e.position.x + e.direction.x * t, 0, e.position.z + e.direction.z * t);
}
function Wd(e, t) {
	switch (t) {
		case "percentage": return `${(e * 100).toFixed(2)} %`;
		case "ratio": return e === 0 ? "1:∞" : `1:${(1 / e).toFixed(2)}`;
		case "degrees": return `${(Math.atan(e) * 180 / Math.PI).toFixed(2)}°`;
	}
}
var Gd = class extends sd {
	constructor(e) {
		super(e), X(this, "enabled", !0), this.styles.set("default", {
			lineTick: Xu,
			meshTick: Zu,
			tickSize: .4,
			length: 3,
			color: 0,
			textOffset: .1,
			fontSize: .45,
			format: "percentage"
		});
	}
	pickHandle(e, t, n) {
		return null;
	}
	_buildGroup(e, t) {
		let n = new R(), i = Hd(e, t), a = new r();
		a.setAttribute("position", new W(i, 3));
		let o = new B(a, this._getMaterial(e.style));
		if (o.layers.set(1), o.userData.isDimension = !0, n.add(o), t.meshTick) {
			let i = Ud(e, t.length), a = t.meshTick(i, e.direction, t.tickSize), o = new r();
			o.setAttribute("position", new W(new Float32Array(a), 3));
			let s = new U(o, this._getMeshMaterial(e.style));
			s.layers.set(1), s.userData.isDimension = !0, n.add(s);
		}
		return n;
	}
};
function Kd(e, t) {
	let n = t.x - e.x, r = t.z - e.z, i = Math.sqrt(n * n + r * r);
	if (i === 0) return e.clone();
	let a = Math.round(Math.atan2(r, n) / (Math.PI / 4)) * (Math.PI / 4);
	return new G(e.x + Math.cos(a) * i, 0, e.z + Math.sin(a) * i);
}
function qd(e, t) {
	switch (e.kind) {
		case "awaitingCenter": return t.type === "CLICK" ? {
			kind: "awaitingRadius",
			center: t.point.clone(),
			cursor: null
		} : e;
		case "awaitingRadius":
			if (t.type === "MOUSE_MOVE") return {
				...e,
				cursor: t.point.clone()
			};
			if (t.type === "CLICK") {
				let n = Math.max(.1, Math.abs(t.point.x - e.center.x)), r = Math.max(.1, Math.abs(t.point.z - e.center.z));
				return {
					kind: "awaitingElbow",
					center: e.center,
					halfW: n,
					halfH: r,
					cursor: null
				};
			}
			return t.type === "ESCAPE" ? { kind: "awaitingCenter" } : e;
		case "awaitingElbow": return t.type === "MOUSE_MOVE" ? {
			...e,
			cursor: t.point.clone()
		} : t.type === "CLICK" ? {
			kind: "awaitingExtension",
			center: e.center,
			halfW: e.halfW,
			halfH: e.halfH,
			elbow: t.point.clone(),
			cursor: null
		} : t.type === "ESCAPE" ? { kind: "awaitingCenter" } : e;
		case "awaitingExtension": return t.type === "MOUSE_MOVE" ? {
			...e,
			cursor: Kd(e.elbow, t.point)
		} : t.type === "CLICK" ? {
			kind: "enteringText",
			center: e.center,
			halfW: e.halfW,
			halfH: e.halfH,
			elbow: e.elbow,
			extensionEnd: Kd(e.elbow, t.point)
		} : t.type === "ESCAPE" ? { kind: "awaitingCenter" } : e;
		case "enteringText": return t.type === "SUBMIT_TEXT" && t.text.trim().length > 0 ? {
			kind: "committed",
			annotation: {
				uuid: Pe.generateUUID(),
				center: e.center.clone(),
				halfW: e.halfW,
				halfH: e.halfH,
				elbow: e.elbow.clone(),
				extensionEnd: e.extensionEnd.clone(),
				text: t.text.trim(),
				style: ""
			}
		} : t.type === "ESCAPE" ? { kind: "awaitingCenter" } : e;
		case "committed": return t.type === "ESCAPE" ? { kind: "awaitingCenter" } : e;
	}
}
function Jd(e, t) {
	let n = [];
	n.push(...t.enclosure.buildGeometry(e.center, e.halfW, e.halfH));
	let r = new G().subVectors(e.elbow, e.center), i = r.lengthSq() > 1e-10 ? r.clone().normalize() : new G(1, 0, 0), a = t.enclosure.getAttachmentPoint(e.center, e.halfW, e.halfH, i);
	if (n.push(a.x, a.y, a.z, e.elbow.x, e.elbow.y, e.elbow.z, e.elbow.x, e.elbow.y, e.elbow.z, e.extensionEnd.x, e.extensionEnd.y, e.extensionEnd.z), t.lineTick) {
		let r = new G().subVectors(e.extensionEnd, e.elbow);
		r.lengthSq() > 1e-10 && n.push(...t.lineTick(e.extensionEnd, r.normalize(), t.tickSize));
	}
	return n;
}
function Yd(e, t, n, r, i, a, o) {
	let s = e === "awaitingRadius" ? a ? Math.max(.05, Math.abs(a.x - t.x)) : 0 : n, c = e === "awaitingRadius" ? a ? Math.max(.05, Math.abs(a.z - t.z)) : 0 : r;
	if (s < 1e-10 || c < 1e-10) return [];
	let l = [];
	if (l.push(...o.enclosure.buildGeometry(t, s, c)), e === "awaitingRadius") return l;
	let u = e === "awaitingElbow" ? a : i;
	if (!u) return l;
	let d = new G().subVectors(u, t), f = d.lengthSq() > 1e-10 ? d.clone().normalize() : new G(1, 0, 0), p = o.enclosure.getAttachmentPoint(t, s, c, f);
	return e === "awaitingElbow" ? (l.push(p.x, 0, p.z, u.x, 0, u.z), l) : (a && l.push(p.x, 0, p.z, i.x, 0, i.z, i.x, 0, i.z, a.x, 0, a.z), l);
}
var Xd = 8, Zd = {
	buildGeometry(e, t, n) {
		let r = Math.min(t, n) * .25, i = new G(e.x - t, 0, e.z - n), a = new G(e.x + t, 0, e.z - n), o = new G(e.x + t, 0, e.z + n), s = new G(e.x - t, 0, e.z + n), c = [
			[
				i,
				a,
				new G(0, 0, -1)
			],
			[
				a,
				o,
				new G(1, 0, 0)
			],
			[
				o,
				s,
				new G(0, 0, 1)
			],
			[
				s,
				i,
				new G(-1, 0, 0)
			]
		], l = [];
		for (let [e, t, n] of c) {
			let i = e.distanceTo(t), a = Math.max(1, Math.round(i / (2 * r))), o = i / a, s = o / 2, c = new G().subVectors(t, e).normalize();
			for (let t = 0; t < a; t++) {
				let r = e.clone().addScaledVector(c, (t + .5) * o), i = e.clone().addScaledVector(c, t * o), a = new G().subVectors(i, r), u = i.clone();
				for (let e = 1; e <= Xd; e++) {
					let t = e / Xd * Math.PI, i = new G(r.x + a.x * Math.cos(t) + n.x * s * Math.sin(t), 0, r.z + a.z * Math.cos(t) + n.z * s * Math.sin(t));
					l.push(u.x, 0, u.z, i.x, 0, i.z), u = i;
				}
			}
		}
		return l;
	},
	getAttachmentPoint(e, t, n, r) {
		let i = Math.abs(r.x) > 1e-10 ? t / Math.abs(r.x) : Infinity, a = Math.abs(r.z) > 1e-10 ? n / Math.abs(r.z) : Infinity, o = Math.min(i, a);
		return new G(e.x + r.x * o, 0, e.z + r.z * o);
	}
}, Qd = class extends sd {
	constructor(e) {
		super(e), X(this, "enabled", !0), X(this, "machineState", { kind: "awaitingCenter" }), X(this, "onMachineStateChanged", new Z()), this.styles.set("default", {
			enclosure: Zd,
			lineTick: Yu,
			tickSize: .4,
			color: 22015,
			textOffset: .1,
			fontSize: .45
		});
	}
	pickHandle(e, t, n) {
		return null;
	}
	sendMachineEvent(e) {
		let t = e.drawing ?? null;
		t && (this._previewDrawing = t);
		let n = qd(this.machineState, e);
		if (n !== this.machineState) {
			if (this.machineState = n, this._updatePreview(), n.kind === "committed") {
				if (!this._previewDrawing) {
					console.warn("CalloutAnnotations: commit requires a drawing. Pass `drawing` on the first CLICK."), this._resetMachine();
					return;
				}
				n.annotation.style = this.activeStyle;
				let e = this._persist(this._previewDrawing, n.annotation);
				this.onCommit.trigger([e]);
			}
			this.onMachineStateChanged.trigger(this.machineState), n.kind === "committed" && this._resetMachine();
		}
	}
	_buildGroup(e, t) {
		let n = new R(), i = Jd(e, t), a = new r();
		a.setAttribute("position", new W(new Float32Array(i), 3));
		let o = new B(a, this._getMaterial(e.style));
		if (o.layers.set(1), o.userData.isDimension = !0, n.add(o), t.meshTick) {
			let i = new G().subVectors(e.extensionEnd, e.elbow);
			if (i.lengthSq() > 1e-10) {
				i.normalize();
				let a = t.meshTick(e.extensionEnd, i, t.tickSize), o = new r();
				o.setAttribute("position", new W(new Float32Array(a), 3));
				let s = new U(o, this._getMeshMaterial(e.style));
				s.layers.set(1), s.userData.isMeshArrow = !0, n.add(s);
			}
		}
		return n;
	}
	_updatePreview() {
		let e = this.machineState;
		if (e.kind !== "awaitingRadius" && e.kind !== "awaitingElbow" && e.kind !== "awaitingExtension") {
			this._clearPreview();
			return;
		}
		if (!this._previewDrawing) return;
		let t = this._resolveStyle(this.activeStyle), n = (() => {
			switch (e.kind) {
				case "awaitingRadius": return Yd("awaitingRadius", e.center, 0, 0, null, e.cursor, t);
				case "awaitingElbow": return Yd("awaitingElbow", e.center, e.halfW, e.halfH, null, e.cursor, t);
				case "awaitingExtension": return Yd("awaitingExtension", e.center, e.halfW, e.halfH, e.elbow, e.cursor, t);
			}
		})();
		if (n.length === 0) {
			this._clearPreview();
			return;
		}
		let i = n.length / 3;
		if (!this._previewObject || this._previewObject.geometry.attributes.position.count !== i) {
			this._clearPreview();
			let e = new r();
			e.setAttribute("position", new W(new Float32Array(n), 3)), this._previewObject = new B(e, this._previewMaterial), this._previewObject.layers.set(1), this._previewObject.renderOrder = 1, this._previewObject.frustumCulled = !1, this._previewObject.userData.isDimension = !0, this._previewDrawing.three.add(this._previewObject);
		} else {
			let e = this._previewObject.geometry.attributes.position;
			e.set(n), e.needsUpdate = !0;
		}
	}
	_resetMachine() {
		this.machineState = { kind: "awaitingCenter" }, this._clearPreview(), this._previewDrawing = null, this.onMachineStateChanged.trigger(this.machineState);
	}
}, $d = class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "list", new a()), X(this, "systems", new a()), X(this, "onDisposed", new Z()), t.add(e.uuid, this), this.list.onBeforeDelete.add(({ value: e }) => e.dispose()), this.systems.onBeforeDelete.add(({ value: e }) => e.dispose());
	}
	use(e) {
		if (this.systems.has(e)) return this.systems.get(e);
		let t = new e(this.components);
		return this.systems.set(e, t), t;
	}
	create(e) {
		let t = new od(this.components);
		t.world = e, e.scene.three.add(t.three), e.onDisposed.add(() => this.list.delete(t.uuid));
		let n = e.camera;
		return n.three.layers.enable(1), n instanceof ru && (n.threePersp.layers.enable(1), n.threeOrtho.layers.enable(1)), this.list.set(t.uuid, t), t;
	}
	dispose() {
		this.list.clear(), this.systems.clear(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
};
X($d, "uuid", "5c7d3b9a-4e8f-4a2b-9c1d-0e3f2a5b7c8d");
var ef = $d, tf = [
	[16711680, 1],
	[16776960, 2],
	[65280, 3],
	[65535, 4],
	[255, 5],
	[16711935, 6],
	[16777215, 7],
	[0, 7]
];
function nf(e) {
	let t = e >> 16 & 255, n = e >> 8 & 255, r = e & 255, i = 7, a = Infinity;
	for (let [e, o] of tf) {
		let s = (t - (e >> 16 & 255)) ** 2 + (n - (e >> 8 & 255)) ** 2 + (r - (e & 255)) ** 2;
		s < a && (a = s, i = o);
	}
	return i;
}
var rf = "\0HANDSEED\0", af = class {
	constructor() {
		X(this, "_lines", []), X(this, "_handleCounter", 1);
	}
	p(e, t) {
		return this._lines.push(String(e), String(t)), this;
	}
	n(e, t, n = 6) {
		return this._lines.push(String(e), t.toFixed(n)), this;
	}
	handle() {
		return (this._handleCounter++).toString(16).toUpperCase();
	}
	entityHeader(e, t, n) {
		return this._lines.push("0", e, "5", this.handle(), "100", "AcDbEntity", "8", t, "62", String(n)), this;
	}
	symbolTable(e, t) {
		return this._lines.push("0", "TABLE", "2", e, "5", this.handle(), "100", "AcDbSymbolTable", "70", String(t)), this;
	}
	symbolRecord(e, t) {
		return this._lines.push("0", e, "5", this.handle(), "100", "AcDbSymbolTableRecord", "100", t), this;
	}
	writeHandSeed() {
		return this._lines.push("9", "$HANDSEED", "5", rf), this;
	}
	build() {
		return (this._lines.join("\n") + "\n").replace(rf, this._handleCounter.toString(16).toUpperCase());
	}
}, of = class {
	constructor(e) {
		X(this, "precision", 2), X(this, "config", { trueColor: !1 }), X(this, "_viewport", null), X(this, "_paperSlot", null), X(this, "_annotationLayers", /* @__PURE__ */ new Map()), X(this, "_systemExporters", /* @__PURE__ */ new Map()), this._components = e;
	}
	registerSystemExporter(e, t) {
		this._systemExporters.set(e, t);
	}
	export(e, t) {
		let n = !!t, r = new af(), i = /* @__PURE__ */ new Map();
		for (let t of e) for (let e of t.drawing.layers.values()) i.has(e.name) || i.set(e.name, e);
		let a = [...i.values()], o = this._components.get(ef).systems.get(Vd), s = o ? [...o.definitions.keys()] : [];
		this._writeHeader(r, n), this._writeTables(r, a, s), this._writeBlocks(r, o ?? null), r.p(0, "SECTION").p(2, "ENTITIES"), n && t && this._writePaperBorders(r, t);
		for (let i of e) {
			i.drawing.three.traverse((e) => {
				e.userData.isDimension && e.userData.annotationUuid && this._annotationLayers.set(e.userData.annotationUuid, e.userData.layer ?? "0");
			});
			for (let e of i.viewports) {
				if (this._viewport = e.viewport ?? null, n && e.viewport) {
					let n = e.viewport, r = t.heightMm - 2 * t.margin;
					this._paperSlot = {
						x: e.x ?? 0,
						y: r - (e.y ?? 0),
						mmPerUnit: 1e3 / n.drawingScale,
						vpLeft: n.left,
						vpTop: n.top
					};
				} else this._paperSlot = null;
				this._writeViewportBorder(r), this._writeRawLines(r, i.drawing), this._writeLinearAnnotations(r, i.drawing), this._writeAngleAnnotations(r, i.drawing), this._writeLeaderAnnotations(r, i.drawing), this._writeSlopeAnnotations(r, i.drawing), this._writeCalloutAnnotations(r, i.drawing), this._writeBlockInsertions(r, i.drawing), this._writeCustomSystems(r, i.drawing);
			}
			this._annotationLayers.clear();
		}
		return r.p(0, "ENDSEC"), this._writeObjects(r), r.p(0, "EOF"), this._viewport = null, this._paperSlot = null, r.build();
	}
	_writeHeader(e, t) {
		e.p(0, "SECTION").p(2, "HEADER"), e.p(9, "$ACADVER").p(1, this.config.trueColor ? "AC1018" : "AC1015"), e.p(9, "$DWGCODEPAGE").p(3, "ANSI_1252"), e.p(9, "$INSUNITS").p(70, t ? 4 : 6), e.writeHandSeed(), e.p(0, "ENDSEC");
	}
	_writeTables(e, t, n) {
		e.p(0, "SECTION").p(2, "TABLES"), e.symbolTable("VPORT", 0).p(0, "ENDTAB"), e.symbolTable("LTYPE", 1), e.symbolRecord("LTYPE", "AcDbLinetypeTableRecord").p(2, "CONTINUOUS").p(70, 0).p(3, "Solid line").p(72, 65).p(73, 0).n(40, 0), e.p(0, "ENDTAB"), e.symbolTable("LAYER", t.length);
		for (let n of t) {
			let t = nf(n.material.color.getHex());
			e.symbolRecord("LAYER", "AcDbLayerTableRecord").p(2, n.name).p(70, 0).p(62, t).p(6, "CONTINUOUS");
		}
		e.p(0, "ENDTAB"), e.symbolTable("STYLE", 1), e.symbolRecord("STYLE", "AcDbTextStyleTableRecord").p(2, "STANDARD").p(70, 0).n(40, 0).n(41, 1).n(50, 0).p(71, 0).n(42, .2).p(3, "txt").p(4, ""), e.p(0, "ENDTAB"), e.symbolTable("VIEW", 0).p(0, "ENDTAB"), e.symbolTable("UCS", 0).p(0, "ENDTAB"), e.symbolTable("APPID", 1), e.symbolRecord("APPID", "AcDbRegAppTableRecord").p(2, "ACAD").p(70, 0), e.p(0, "ENDTAB"), e.symbolTable("DIMSTYLE", 0).p(0, "ENDTAB");
		let r = [
			"*Model_Space",
			"*Paper_Space",
			...n
		];
		e.symbolTable("BLOCK_RECORD", r.length);
		for (let t of r) e.symbolRecord("BLOCK_RECORD", "AcDbBlockTableRecord").p(2, t);
		e.p(0, "ENDTAB"), e.p(0, "ENDSEC");
	}
	_writeBlocks(e, t) {
		if (e.p(0, "SECTION").p(2, "BLOCKS"), this._writeBlock(e, "*Model_Space", null), this._writeBlock(e, "*Paper_Space", null), t) for (let [n, r] of t.definitions) this._writeBlock(e, n, r.lines ?? null);
		e.p(0, "ENDSEC");
	}
	_writeBlock(e, t, n) {
		if (e.p(0, "BLOCK").p(5, e.handle()).p(100, "AcDbEntity").p(8, "0").p(100, "AcDbBlockBegin").p(2, t).p(70, 0).n(10, 0).n(20, 0).n(30, 0).p(3, t).p(1, ""), n) {
			let t = this._viewport, r = this._paperSlot;
			this._viewport = null, this._paperSlot = null, this._writeGeoAsLines(e, n, "0"), this._viewport = t, this._paperSlot = r;
		}
		e.p(0, "ENDBLK").p(5, e.handle()).p(100, "AcDbEntity").p(8, "0").p(100, "AcDbBlockEnd");
	}
	_writeViewportBorder(e) {
		if (!this._viewport) return;
		let t = this._viewport, n = this._tx(t.left), r = this._tx(t.right), i = this._ty(-t.bottom), a = this._ty(-t.top);
		this._writeRawLine(e, n, i, r, i, "0", 7), this._writeRawLine(e, r, i, r, a, "0", 7), this._writeRawLine(e, r, a, n, a, "0", 7), this._writeRawLine(e, n, a, n, i, "0", 7);
	}
	_writePaperBorders(e, t) {
		let { margin: n, widthMm: r, heightMm: i } = t, a = r - 2 * n, o = i - 2 * n;
		this._writeRawLine(e, 0, 0, a, 0, "0", 7), this._writeRawLine(e, a, 0, a, o, "0", 7), this._writeRawLine(e, a, o, 0, o, "0", 7), this._writeRawLine(e, 0, o, 0, 0, "0", 7), this._writeRawLine(e, -n, -n, a + n, -n, "0", 7), this._writeRawLine(e, a + n, -n, a + n, o + n, "0", 7), this._writeRawLine(e, a + n, o + n, -n, o + n, "0", 7), this._writeRawLine(e, -n, o + n, -n, -n, "0", 7);
	}
	_writeObjects(e) {
		e.p(0, "SECTION").p(2, "OBJECTS"), e.p(0, "DICTIONARY").p(5, e.handle()).p(330, 0).p(100, "AcDbDictionary").p(281, 1), e.p(0, "ENDSEC");
	}
	_writeRawLines(e, t) {
		t.three.traverse((t) => {
			var n;
			if (!(t instanceof B) || t.userData.isDimension || (n = t.parent) != null && n.userData.blockUuid || !t.visible) return;
			let r = t.userData.layer ?? "0", i = t.material.color.getHex();
			this._writeGeoAsLines(e, t.geometry, r, nf(i), i);
		});
	}
	_writeLinearAnnotations(e, t) {
		let n = this._components.get(ef).systems.get(_d);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			let i = n.styles.get(r.style) ?? n.styles.get("default"), a = nf(i.color), o = this._annotationLayers.get(r.uuid) ?? "0";
			if (t.layers.get(o)?.visible === !1) continue;
			let s = hd(r, i);
			if (!this._fullyInViewport(this._bboxFromPositions(s))) continue;
			if (this._writePairsAsLines(e, s, o, a, i.color), i.meshTick) for (let { tip: t, dir: n } of md(r)) this._writeMeshTriangles(e, i.meshTick(t, n, i.tickSize), o, a, i.color);
			let c = new G().subVectors(r.pointB, r.pointA), l = new G(-c.z, 0, c.x).normalize(), u = r.offset >= 0 ? 1 : -1, d = r.pointA.clone().addScaledVector(l, r.offset), f = r.pointB.clone().addScaledVector(l, r.offset), p = d.clone().add(f).multiplyScalar(.5).addScaledVector(l, (i.textOffset + i.fontSize * .5) * u), m = i.unit ?? {
				factor: 1,
				suffix: "m"
			}, h = `${(r.pointA.distanceTo(r.pointB) * m.factor).toFixed(this.precision)} ${m.suffix}`;
			this._writeText(e, h, p.x, p.z, i.fontSize, o, a, this._textAngle(c.x, c.z), 1, 2, i.color);
		}
	}
	_writeAngleAnnotations(e, t) {
		let n = this._components.get(ef).systems.get(Ad);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			let i = n.styles.get(r.style) ?? n.styles.get("default"), a = nf(i.color), o = this._annotationLayers.get(r.uuid) ?? "0";
			if (t.layers.get(o)?.visible === !1) continue;
			let s = Od(r, i);
			if (!this._fullyInViewport(this._bboxFromPositions(s))) continue;
			if (this._writePairsAsLines(e, s, o, a, i.color), i.meshTick) for (let { tip: t, dir: n } of wd(r)) this._writeMeshTriangles(e, i.meshTick(t, n, i.tickSize), o, a, i.color);
			let c = Ed(r), l = r.arcRadius + i.textOffset, u = r.vertex.x + Math.cos(c) * l, d = r.vertex.z + Math.sin(c) * l, f = Pe.radToDeg(Td(r));
			this._writeText(e, `${f.toFixed(this.precision)}°`, u, d, i.fontSize, o, a, 0, 1, 0, i.color);
		}
	}
	_writeLeaderAnnotations(e, t) {
		let n = this._components.get(ef).systems.get(Bd);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			let i = n.styles.get(r.style) ?? n.styles.get("default"), a = nf(i.color), o = this._annotationLayers.get(r.uuid) ?? "0";
			if (t.layers.get(o)?.visible === !1) continue;
			let s = Rd(r, i);
			if (!this._fullyInViewport(this._bboxFromPositions(s))) continue;
			if (this._writePairsAsLines(e, s, o, a, i.color), i.meshTick) {
				let t = new G().subVectors(r.arrowTip, r.elbow);
				t.lengthSq() > 1e-10 && this._writeMeshTriangles(e, i.meshTick(r.arrowTip, t.normalize(), i.tickSize), o, a, i.color);
			}
			let c = new G().subVectors(r.extensionEnd, r.elbow).setY(0).normalize(), l = c.x < -.1 ? 2 : c.x > .1 ? 0 : 1, u = l === 1 ? i.fontSize * .5 : 0, d = r.extensionEnd.clone().addScaledVector(c, i.textOffset + u);
			this._writeText(e, r.text, d.x, d.z, i.fontSize, o, a, 0, l, 2, i.color);
		}
	}
	_writeSlopeAnnotations(e, t) {
		let n = this._components.get(ef).systems.get(Gd);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			let i = n.styles.get(r.style) ?? n.styles.get("default"), a = nf(i.color), o = this._annotationLayers.get(r.uuid) ?? "0";
			if (t.layers.get(o)?.visible === !1) continue;
			let s = Hd(r, i);
			if (!this._fullyInViewport(this._bboxFromPositions(s))) continue;
			if (this._writePairsAsLines(e, s, o, a, i.color), i.meshTick) {
				let t = Ud(r, i.length);
				this._writeMeshTriangles(e, i.meshTick(t, r.direction, i.tickSize), o, a, i.color);
			}
			let c = new G(r.position.x + r.direction.x * i.length, 0, r.position.z + r.direction.z * i.length), l = r.position.clone().add(c).multiplyScalar(.5).addScaledVector(new G(-r.direction.z, 0, r.direction.x), i.textOffset + i.fontSize);
			this._writeText(e, Wd(r.slope, i.format), l.x, l.z, i.fontSize, o, a, this._textAngle(r.direction.x, r.direction.z), 1, 0, i.color);
		}
	}
	_writeCalloutAnnotations(e, t) {
		let n = this._components.get(ef).systems.get(Qd);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			let i = n.styles.get(r.style) ?? n.styles.get("default"), a = nf(i.color), o = this._annotationLayers.get(r.uuid) ?? "0";
			if (t.layers.get(o)?.visible === !1) continue;
			let s = Jd(r, i);
			if (!this._fullyInViewport(this._bboxFromPositions(s))) continue;
			if (this._writePairsAsLines(e, s, o, a, i.color), i.meshTick) {
				let t = new G().subVectors(r.extensionEnd, r.elbow);
				t.lengthSq() > 1e-10 && this._writeMeshTriangles(e, i.meshTick(r.extensionEnd, t.normalize(), i.tickSize), o, a, i.color);
			}
			let c = new G().subVectors(r.extensionEnd, r.elbow).setY(0).normalize(), l = c.x < -.1 ? 2 : c.x > .1 ? 0 : 1, u = l === 1 ? i.fontSize * .5 : 0, d = r.extensionEnd.clone().addScaledVector(c, i.textOffset + u);
			this._writeText(e, r.text, d.x, d.z, i.fontSize, o, a, 0, l, 2, i.color);
		}
	}
	_writeBlockInsertions(e, t) {
		let n = this._components.get(ef).systems.get(Vd);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			if (!this._inViewport(r.position.x, r.position.z)) continue;
			let t = n.styles.get(r.style) ?? n.styles.get("default"), i = nf(t.color), a = -Pe.radToDeg(r.rotation), o = r.scale * this._scale();
			e.entityHeader("INSERT", "0", i), this._emitTrueColor(e, t.color), e.p(100, "AcDbBlockReference").p(2, r.blockName).n(10, this._tx(r.position.x)).n(20, this._ty(r.position.z)).n(30, 0).n(41, o).n(42, o).n(43, o).n(50, a);
		}
	}
	_writeGeoAsLines(e, t, n, r = 7, i) {
		let a = t.attributes.position;
		if (a) for (let t = 0; t + 1 < a.count; t += 2) {
			let o = this._clipSegment(new G(a.getX(t), 0, a.getZ(t)), new G(a.getX(t + 1), 0, a.getZ(t + 1)));
			o && this._writeLine(e, o.start.x, o.start.z, o.end.x, o.end.z, n, r, i);
		}
	}
	_writePairsAsLines(e, t, n, r = 7, i) {
		for (let a = 0; a + 5 < t.length; a += 6) {
			let o = this._clipSegment(new G(t[a], 0, t[a + 2]), new G(t[a + 3], 0, t[a + 5]));
			o && this._writeLine(e, o.start.x, o.start.z, o.end.x, o.end.z, n, r, i);
		}
	}
	_emitTrueColor(e, t) {
		this.config.trueColor && t !== void 0 && e.p(420, t);
	}
	_writeLine(e, t, n, r, i, a, o, s) {
		e.entityHeader("LINE", a, o), this._emitTrueColor(e, s), e.p(100, "AcDbLine").n(10, this._tx(t)).n(20, this._ty(n)).n(30, 0).n(11, this._tx(r)).n(21, this._ty(i)).n(31, 0);
	}
	_writeRawLine(e, t, n, r, i, a, o) {
		e.entityHeader("LINE", a, o).p(100, "AcDbLine").n(10, t).n(20, n).n(30, 0).n(11, r).n(21, i).n(31, 0);
	}
	_writeSolid(e, t, n, r, i, a, o, s, c, l) {
		e.entityHeader("SOLID", s, c), this._emitTrueColor(e, l), e.p(100, "AcDbTrace").n(10, this._tx(t)).n(20, this._ty(n)).n(30, 0).n(11, this._tx(r)).n(21, this._ty(i)).n(31, 0).n(12, this._tx(a)).n(22, this._ty(o)).n(32, 0).n(13, this._tx(a)).n(23, this._ty(o)).n(33, 0);
	}
	_writeMeshTriangles(e, t, n, r, i) {
		for (let a = 0; a + 8 < t.length; a += 9) this._writeSolid(e, t[a], t[a + 2], t[a + 3], t[a + 5], t[a + 6], t[a + 8], n, r, i);
	}
	_writeText(e, t, n, r, i, a, o, s = 0, c = 0, l = 0, u) {
		let d = this._tx(n), f = this._ty(r);
		e.entityHeader("TEXT", a, o), this._emitTrueColor(e, u), e.p(100, "AcDbText").n(10, d).n(20, f).n(30, 0).n(40, i * this._scale()).n(50, s).p(1, t), (c !== 0 || l !== 0) && (c !== 0 && e.p(72, c), l !== 0 && e.p(73, l), e.n(11, d).n(21, f).n(31, 0));
	}
	_tx(e) {
		return this._paperSlot ? this._paperSlot.x + (e - this._paperSlot.vpLeft) * this._paperSlot.mmPerUnit : this._viewport ? e - this._viewport.left : e;
	}
	_ty(e) {
		return this._paperSlot ? this._paperSlot.y - (e + this._paperSlot.vpTop) * this._paperSlot.mmPerUnit : this._viewport ? -e - this._viewport.bottom : -e;
	}
	_scale() {
		return this._paperSlot ? this._paperSlot.mmPerUnit : 1;
	}
	_clipSegment(e, t) {
		return this._viewport ? this._viewport.clipLine(new z(e, t)) : new z(e, t);
	}
	_inViewport(e, t) {
		return !this._viewport || this._viewport.bbox.containsPoint(new G(e, 0, t));
	}
	_bboxFromPositions(e) {
		let t = new _();
		for (let n = 0; n + 2 < e.length; n += 3) t.expandByPoint(new G(e[n], 0, e[n + 2]));
		return t;
	}
	_fullyInViewport(e) {
		return !this._viewport || this._viewport.bbox.containsBox(e);
	}
	_textAngle(e, t) {
		let n = Math.atan2(-t, e);
		return (n > Math.PI / 2 || n <= -Math.PI / 2) && (n += Math.PI), Pe.radToDeg(n);
	}
	_writeCustomSystems(e, t) {
		if (this._systemExporters.size === 0) return;
		let n = this._makeContext(e);
		for (let [e, t] of this._systemExporters) {
			let r = this._components.get(ef).systems.get(e);
			r && t(r, n);
		}
	}
	_makeContext(e) {
		return {
			writeLine: (t, n, r, i, a = "0", o = 7) => {
				this._writeLine(e, t, n, r, i, a, o);
			},
			writePairs: (t, n = "0", r = 7) => {
				this._writePairsAsLines(e, t, n, r);
			},
			writeMeshTriangles: (t, n = "0", r = 7) => {
				this._writeMeshTriangles(e, t, n, r);
			},
			writeText: (t, n, r, i, a = {}) => {
				this._writeText(e, t, n, r, i, a.layer ?? "0", a.aciColor ?? 7, a.rotDeg ?? 0, a.hAlign ?? 0);
			},
			hexToAci: nf,
			textAngle: (e, t) => this._textAngle(e, t)
		};
	}
};
X(class e extends qt {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "exporter", new of(this.components)), t.add(e.uuid, this);
	}
}, "uuid", "e9a2c3d4-5f67-4b89-a012-1c3d5e7f9b2a");
var sf = class {
	constructor(e, t, n) {
		K(this, "three"), K(this, "world"), K(this, "wasVisible", !0), K(this, "onDisposed", new Z()), this.world = e;
		let r;
		t ? r = t : (r = document.createElement("div"), r.style.color = "white", r.style.height = "6px", r.style.width = "6px", r.style.borderRadius = "50%", r.style.border = "2px solid rgb(122, 75, 209)", r.style.zIndex = "-20"), this.three = new qe(r), (n || e.scene.three).add(this.three), this.visible = !0;
	}
	set visible(e) {
		this.three.visible = e, this.wasVisible = e;
	}
	get visible() {
		return this.three.visible;
	}
	toggleVisibility() {
		this.visible = !this.visible;
	}
	notDisplay() {
		this.visible = !1;
	}
	dispose() {
		this.three.removeFromParent(), this.three.element.remove(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
}, cf = class e extends qt {
	constructor(t) {
		super(t), K(this, "onDisposed", new Z()), K(this, "enabled", !0), K(this, "threshold", 50), K(this, "autoCluster", !0), K(this, "clusterElementStyles", { ...e.DEFAULT_CLUSTER_STYLES }), K(this, "list", /* @__PURE__ */ new Map()), K(this, "clusterLabels", /* @__PURE__ */ new Set()), K(this, "currentKeys", /* @__PURE__ */ new Set()), K(this, "_color", "white"), K(this, "_markerKey", 0), K(this, "_clusterKey", 0), K(this, "_worldEvents", /* @__PURE__ */ new Map()), K(this, "_setupWorlds", /* @__PURE__ */ new Set()), K(this, "clusterElementFactory", () => {
			let e = document.createElement("div");
			return e.style.color = "#000000", e.style.background = "#FFFFFF", e.style.fontSize = "1.2rem", e.style.fontWeight = "500", e.style.borderRadius = "50%", e.style.padding = "5px 11px", e.style.textAlign = "center", e.addEventListener("pointerover", () => {
				e.style.background = this.clusterElementStyles.hoverBackgroundColor || "#BCF124";
			}), e.addEventListener("pointerout", () => {
				e.style.background = this.clusterElementStyles.backgroundColor || "#FFFFFF";
			}), e;
		}), t.add(e.uuid, this);
	}
	get color() {
		return this._color;
	}
	set color(e) {
		this._color = e;
		for (let [t, n] of this.list) for (let [t, r] of n) r.label.three.element.style.color = e;
	}
	create(e, t, n, r = !1) {
		this.setupEvents(e, !0);
		let i = this._markerKey.toString(), a = this.getWorldMarkerList(e);
		if (a.has(i)) return null;
		let o = document.createElement("span");
		o.append(t);
		let s = new sf(e, o);
		return s.three.position.copy(n), a.set(i, {
			key: i,
			label: s,
			merged: !1,
			static: r
		}), this._markerKey++, i;
	}
	delete(e) {
		for (let [t, n] of this.list) {
			let t = n.get(e);
			t && t.label.dispose(), n.delete(e);
		}
	}
	getWorldMarkerList(e) {
		return this.list.has(e.uuid) || this.list.set(e.uuid, /* @__PURE__ */ new Map()), this.list.get(e.uuid);
	}
	dispose(e) {
		for (let [t, n] of this.list) {
			let t = [...n.keys()];
			for (let r of t) {
				let t = n.get(r);
				e && t.type !== e || (t.label.dispose(), n.delete(r));
			}
		}
		if (!e) {
			this.list.clear(), this._markerKey = 0;
			for (let e of this.clusterLabels) e.label.dispose();
			this.clusterLabels.clear(), this._clusterKey = 0, this.currentKeys.clear();
		}
		this.onDisposed.trigger();
	}
	setupEvents(e, t) {
		if (t && this._setupWorlds.has(e.uuid) || !e.camera.hasCameraControls()) return;
		let n = this.getWorldEvent(e);
		e.camera.controls.removeEventListener("sleep", n), e.camera.controls.removeEventListener("rest", n), t && (e.camera.controls.addEventListener("sleep", n), e.camera.controls.addEventListener("rest", n));
	}
	cluster(e) {
		if (!this.autoCluster) return;
		this.resetMarkers();
		let t = this.list.get(e.uuid);
		if (t) {
			for (let [e, n] of t) if (!n.merged && !n.static) {
				this.currentKeys.clear();
				for (let [e, r] of t) r.static || n.key !== r.key && !r.merged && this.distance(n.label, r.label) < this.threshold && (this.currentKeys.add(r.key), r.merged = !0);
				if (this.currentKeys.size > 0) {
					this.currentKeys.add(n.key), n.merged = !0;
					let e = Array.from(this.currentKeys), t = this.getAveragePositionFromLabels(e), r = new sf(n.label.world, this.createClusterElement(this._clusterKey.toString())), { element: i } = r.three;
					i.firstChild.textContent = e.length.toString(), r.three.position.copy(t), this.clusterLabels.add({
						key: this._clusterKey.toString(),
						markerKeys: e,
						label: r
					}), this._clusterKey++;
				}
			}
			this.removeMergeMarkers(e);
		}
	}
	getWorldEvent(e) {
		return this._worldEvents.has(e.uuid) || this._worldEvents.set(e.uuid, () => {
			this.cluster(e);
		}), this._worldEvents.get(e.uuid);
	}
	resetMarkers() {
		for (let [e, t] of this.list) for (let [e, n] of t) n.merged = !1;
		for (let e of this.clusterLabels) e.label.dispose();
		this.clusterLabels.clear(), this._clusterKey = 0;
	}
	removeMergeMarkers(e) {
		let t = this.list.get(e.uuid);
		if (t) {
			for (let [e, n] of t) n.merged ? n.label.dispose() : n.label.world.scene.three.add(n.label.three);
			for (let e of this.clusterLabels) if (e.markerKeys.length === 1) {
				for (let [t, n] of this.list) {
					let t = n.get(e.markerKeys[0]);
					t && (t.label.world.scene.three.add(t.label.three), t.merged = !1);
				}
				e.label.dispose(), this.clusterLabels.delete(e);
			}
		}
	}
	getAveragePositionFromLabels(e) {
		let t = e.map((e) => {
			for (let [t, n] of this.list) {
				let t = n.get(e);
				if (t) return t.label.three.position;
			}
			return new G();
		});
		return t.reduce((e, t) => e.add(t), new G()).divideScalar(t.length);
	}
	createClusterElement(e) {
		let t = this.clusterElementFactory();
		t.textContent = e;
		let n = document.createElement("span");
		return n.append(t), n.style.pointerEvents = "auto", n.style.cursor = "pointer", n.addEventListener("pointerdown", () => {
			this.navigateToCluster(e);
		}), n;
	}
	getScreenPosition(e) {
		let t = new G();
		if (!e.world.renderer) throw Error("Renderer not found!");
		let n = e.three.position.clone();
		n.project(e.world.camera.three);
		let r = e.world.renderer.getSize();
		return t.x = n.x * r.x / 2 + r.x / 2, t.y = -(n.y * r.y / 2) + r.y / 2, t;
	}
	distance(e, t) {
		let n = this.getScreenPosition(e), r = this.getScreenPosition(t), i = n.x - r.x, a = n.y - r.y, o = Math.sqrt(i * i + a * a) * .5;
		return o === 0 ? this.threshold + 1 : o;
	}
	navigateToCluster(e) {
		let t = [], n = Array.from(this.clusterLabels).find((t) => t.key === e);
		if (!n) return;
		let i = n.label.world.camera;
		if (!i.hasCameraControls()) {
			console.warn("Zoom to clusters only supported with Camera Controls!");
			return;
		}
		for (let e of n.markerKeys) for (let [n, r] of this.list) {
			let n = r.get(e);
			if (n) {
				let { x: e, y: r, z: i } = n.label.three.position;
				t.push(e, r, i);
			}
		}
		n.label.dispose(), this.clusterLabels.delete(n);
		let a = new r(), o = new W(new Float32Array(t), 3);
		a.setAttribute("position", o);
		let s = new U(a);
		s.geometry.computeBoundingSphere(), s.geometry.boundingSphere && i.controls.fitToSphere(s, !0), a.dispose(), s.clear(), t.length = 0;
	}
};
K(cf, "uuid", "4079eb91-79b0-4ede-bcf2-15b837129236"), K(cf, "DEFAULT_CLUSTER_STYLES", {
	backgroundColor: "#FFFFFF",
	textColor: "#000000",
	fontSize: "1.2rem",
	fontWeight: "500",
	borderRadius: "50%",
	padding: "5px 11px",
	textAlign: "center",
	cursor: "pointer",
	hoverBackgroundColor: "#BCF124",
	transition: void 0
});
var lf = class {
	constructor(e, t) {
		K(this, "_components"), K(this, "_modelStyleGeometries", new a()), K(this, "_clipperUnlisten", []), K(this, "onDisposed", new Z()), K(this, "three", new R()), K(this, "plane"), K(this, "items", new a()), K(this, "world", null), K(this, "_visible", !1), this._components = e, this.plane = t, this.setupEvents();
	}
	set visible(e) {
		e ? this.world && (this.world.scene.three.add(this.three), this._visible = !0) : (this.three.removeFromParent(), this._visible = !1);
	}
	get visible() {
		return this._visible;
	}
	setupEvents() {
		let e = this._components.get(df);
		this.items.guard = (t, { style: n }) => !!e.styles.get(n), this.items.onItemSet.add(({ value: e }) => {
			let { style: t, data: n } = e;
			this.create(t, n);
		});
		let t = this._components.get(bu);
		if (!t.localClippingPlanes) return;
		let n = () => this.refreshClippingPlanes();
		t.onAfterCreate.add(n), t.onAfterDelete.add(n), this._clipperUnlisten.push(() => t.onAfterCreate.remove(n)), this._clipperUnlisten.push(() => t.onAfterDelete.remove(n));
	}
	refreshClippingPlanes() {
		let e = this._components.get(bu), t = [];
		for (let [, n] of e.list) n.three !== this.plane && t.push(n.three);
		for (let [, e] of this._modelStyleGeometries) for (let [, { edges: n, fills: r }] of e) n && (n.material.clippingPlanes = t), r && (r.material.clippingPlanes = t);
	}
	async getStyleMeshes(e, t) {
		let n = this._components.get(df).styles.get(t);
		if (!n) throw Error(`ClipStyler: "${t}" style not found.`);
		let i = this._components.get(Q), o = i.list.get(e);
		if (!o) throw Error(`ClipEdges: model with id "${e}" not found.`);
		let { linesMaterial: s, fillsMaterial: c } = n, l = this._modelStyleGeometries.get(e);
		l || (l = new a(), this._modelStyleGeometries.set(e, l));
		let u = l.get(t);
		if (!u) {
			let e = this._components.get(bu).localClippingPlanes, n = e && s ? s.clone() : s, a = e && c ? c.clone() : c, d;
			n && (d = new be(new ve(), n), d.frustumCulled = !1, o && i.applyBaseCoordinateSystem(d, await o.getCoordinationMatrix()), this.three.add(d));
			let f;
			a && (f = new U(new r(), a), o && i.applyBaseCoordinateSystem(f, await o.getCoordinationMatrix()), this.three.add(f)), u = {
				edges: d,
				fills: f
			}, l.set(t, u);
		}
		return u;
	}
	async updateMeshes(e, t, n) {
		let i = this._components.get(Q), a = i.list.get(e);
		if (!a) return;
		let o = this._components.get(Zt), s = this._components.get(bu).localClippingPlanes, c = this.plane.clone(), l = (await a.getCoordinationMatrix()).clone().multiply(i.baseCoordinationMatrix.clone().invert());
		c.applyMatrix4(l), s || (c.constant -= .01);
		let { buffer: u, index: d, fillsIndices: f } = await a.getSection(c, n), { edges: p, fills: m } = await this.getStyleMeshes(e, t);
		s && this.refreshClippingPlanes();
		let h = new W(u, 3, !1);
		if (p) {
			h.setUsage(g);
			let e = new r();
			e.setAttribute("position", h), e.setDrawRange(0, d);
			let t = new B(e);
			p.geometry.fromLineSegments(t), o.destroy(t);
		}
		m && (m.geometry.attributes.position = h, m.geometry.setIndex(f));
	}
	async create(e, t) {
		if (!this._components.get(df).styles.get(e)) throw Error(`ClipEdges: "${e}" style not found.`);
		let n = this._components.get(gl), r = null;
		t && (r = await n.find(t));
		let i = this._components.get(Q);
		if (r) for (let [t, n] of Object.entries(r)) i.list.get(t) && this.updateMeshes(t, e, [...n]);
		else for (let [t] of i.list) this.updateMeshes(t, e);
	}
	async update(e) {
		for (let [t, { data: n, style: r }] of this.items) e && !e.includes(t) || this.create(r, n);
	}
	dispose() {
		this._components.get(Zt).destroy(this.three, !0, !0), this._modelStyleGeometries.clear();
		for (let e of this._clipperUnlisten) e();
		this._clipperUnlisten.length = 0;
	}
}, uf = class e extends qt {
	constructor(t) {
		super(t), K(this, "onDisposed", new Z()), K(this, "enabled", !0), K(this, "world", null), K(this, "styles", new a()), K(this, "list", new a()), K(this, "_visible", !0), this.components.list.set(e.uuid, this), this.setEvents();
	}
	get visible() {
		return this._visible;
	}
	set visible(e) {
		this._visible = e;
		for (let [, t] of this.list) t.visible = e;
	}
	setEvents() {
		this.list.onBeforeDelete.add(({ value: e }) => e.dispose());
	}
	setEdgesConfig(e, t) {
		if (e.world = t?.world ?? this.world, t != null && t.items) for (let [n, r] of Object.entries(t.items)) e.items.set(n, r);
		let n = t?.id ?? $t.create();
		this.list.set(n, e);
	}
	create(e, t) {
		let n = new lf(this.components, e);
		return t && this.setEdgesConfig(n, t), n;
	}
	createFromView(e, t) {
		let n = this.create(e.plane, t);
		return (t?.link === void 0 || t.link) && (e.onDisposed.add(() => n.dispose()), e.onUpdated.add(() => n.update()), e.onStateChanged.add(() => n.visible = e.open)), n;
	}
	createFromClipping(e, t) {
		let n = this.components.get(bu).list.get(e);
		if (!n) throw Error(`ClipStyler: Clipping plane with ID ${e} not found.`);
		let r = this.create(n.three, t);
		return r.visible = !0, (t?.link === void 0 || t.link) && (n.onDraggingEnded.add(() => r.update()), n.onDisposed.add(() => r.dispose())), r;
	}
	dispose() {
		this.styles.clear(), this.list.clear(), this.onDisposed.trigger(e.uuid);
	}
};
K(uf, "uuid", "24dfc306-a3c4-410f-8071-babc4afa5e4d");
var df = uf, ff = class e extends qt {
	constructor(t) {
		super(t), K(this, "onDisposed", new Z()), K(this, "onBeforeUpdate", new Z()), K(this, "onAfterUpdate", new Z()), K(this, "onSetup", new Z()), K(this, "isSetup", !1), K(this, "enabled", !0), K(this, "events", {}), K(this, "multiple", "ctrlKey"), K(this, "zoomFactor", 1.5), K(this, "zoomToSelection", !1), K(this, "backupColor", null), K(this, "selection", {}), K(this, "config", {
			selectName: "select",
			selectionColor: null,
			autoHighlightOnClick: !0,
			world: null,
			selectEnabled: !0,
			autoUpdateFragments: !0,
			selectMaterialDefinition: {
				color: new N("#BCF124"),
				renderedFaces: s.ONE,
				opacity: 1,
				transparent: !1
			}
		}), K(this, "styles", new a()), K(this, "autoToggle", /* @__PURE__ */ new Set()), K(this, "mouseDownPosition", {
			x: 0,
			y: 0
		}), K(this, "mouseMoveThreshold", 5), K(this, "selectable", {}), K(this, "eventManager", new ri()), K(this, "_mouseState", {
			down: !1,
			moved: !1
		}), K(this, "_fromHighlight", !1), K(this, "restorePreviousColors", (e = this.selection.select) => {
			for (let [t, n] of Object.entries(this.selection)) if (!(t === this.config.selectName || !this.styles.get(t))) for (let [t, r] of Object.entries(e)) {
				let e = n[t];
				if (!e) continue;
				let i = [...r].filter((t) => e.has(t));
				i.length !== 0 && new Set(i);
			}
		}), K(this, "onMouseDown", (e) => {
			this.enabled && (this.debounceTimeout && clearTimeout(this.debounceTimeout), this.mouseDownPosition = {
				x: e.clientX,
				y: e.clientY
			}, this._mouseState.down = !0);
		}), K(this, "debounceTimeout", null), K(this, "onMouseUp", async (e) => {
			if (!this.enabled) return;
			let { world: t, autoHighlightOnClick: n, selectEnabled: r } = this.config;
			if (!t) throw Error("No world found!");
			if (!t.renderer) throw Error("This world doesn't have a renderer!");
			if (e.target === t.renderer.three.domElement) {
				if (this._mouseState.down = !1, this._mouseState.moved || e.button !== 0) {
					this._mouseState.moved = !1;
					return;
				}
				if (this._mouseState.moved = !1, n && r) {
					let t = this.multiple === "none" || !e[this.multiple];
					await this.highlight(this.config.selectName, t, this.zoomToSelection);
				}
			}
		}), K(this, "onMouseMove", async (e) => {
			if (!this.enabled) return;
			let t = e.clientX - this.mouseDownPosition.x, n = e.clientY - this.mouseDownPosition.y, r = Math.sqrt(t * t + n * n);
			this._mouseState.moved || r > this.mouseMoveThreshold && (this._mouseState.moved = this._mouseState.down);
		}), this.components.add(e.uuid, this), this.eventManager.list.add(this.onSetup), this.eventManager.list.add(this.onDisposed), this.setStyleEvents();
	}
	setStyleEvents() {
		this.styles.onBeforeDelete.add(async ({ key: e }) => {
			if (await this.clear(e), delete this.selection[e], !(e in this.events)) return;
			let { onClear: t, onHighlight: n, onBeforeHighlight: r } = this.events[e];
			this.eventManager.list.delete(t), this.eventManager.list.delete(n), this.eventManager.list.delete(r), delete this.events[e];
		}), this.styles.onItemSet.add(({ key: e }) => {
			this.selection[e] = {};
			let t = new Z(), n = new Z(), r = new Z();
			this.events[e] = {
				onHighlight: t,
				onClear: r,
				onBeforeHighlight: n
			}, this.eventManager.add([
				r,
				t,
				n
			]);
		});
	}
	async dispose() {
		this.setupEvents(!1), this.onBeforeUpdate.reset(), this.onAfterUpdate.reset(), this.selection = {}, this.styles.clear(), this.onDisposed.trigger(e.uuid), this.eventManager.reset(), this.isSetup = !1;
	}
	add(e) {
		if (console.warn("highlighter.add() is deprecated, use highlighter.styles.set() instead"), typeof e == "string") this.styles.set(e, null);
		else {
			let { customId: t } = e;
			this.styles.set(t, e);
		}
	}
	async remove(e) {
		console.warn("highlighter.remove() is deprecated, use highlighter.styles.delete() instead"), this.styles.delete(e);
	}
	async highlight(e, t = !0, n = this.zoomToSelection, r = null) {
		if (!this.enabled) return;
		if (!this.config.world) throw Error("No world found in config!");
		let i = this.config.world;
		if (!this.selection[e]) throw Error(`Selection ${e} does not exist.`);
		let a = await this.components.get(Wl).get(i).castRay();
		if (!a || a.localId === void 0 || a.localId === null) {
			t && this.clear(e);
			return;
		}
		let { localId: o, fragments: { modelId: s } } = a, c = { [s]: /* @__PURE__ */ new Set([o]) };
		await this.highlightByID(e, c, t, n, r, !0);
	}
	async highlightByID(e, t, n = !0, r = this.zoomToSelection, i = null, a = !1) {
		if (!this.enabled) return;
		this._fromHighlight = !0, this.events[e].onBeforeHighlight.trigger(this.selection[e]);
		let o = ei.clone(t), s = this.components.get(Q);
		for (let [e, n] of Object.entries(t)) {
			let t = s.list.get(e);
			t != null && t.isDeltaModel && t.parentModelId && ei.add(o, { [t.parentModelId]: n });
		}
		let c = this.selectable?.[e];
		if (c) {
			let e = ei.clone(c);
			o = ei.intersect([o, e]);
		}
		if (i) {
			let e = ei.clone(i);
			for (let [t, n] of Object.entries(e)) {
				let r = s.list.get(t);
				r != null && r.deltaModelId && ei.add(e, { [r.deltaModelId]: n });
			}
			ei.remove(o, i);
		}
		let l = a && this.autoToggle.has(e), u = l && ei.isEqual(this.selection[e], o);
		if (n && !u && await this.clear(e), l) {
			let t = {}, n = !1;
			for (let r in o) {
				let i = this.selection[e][r];
				if (!i) continue;
				let a = o[r];
				for (let e of a) if (i.has(e)) {
					i.delete(e);
					let a = t[r];
					a || (a = /* @__PURE__ */ new Set(), t[r] = a), a.add(e), n = !0;
				} else i.add(e);
				o[r] = i;
			}
			n && (this.events[e].onClear.trigger(t), e === this.config.selectName && this.restorePreviousColors(t));
		}
		this.updateStyleMap(e, o), this.events[e].onHighlight.trigger(this.selection[e]), this._fromHighlight = !1, await this.updateColors(), r && await this.zoomSelection(o);
	}
	async updateColors() {
		let e = this.components.get(Q), t = [e.resetHighlight()];
		for (let [n, r] of Object.entries(this.selection)) {
			let i = this.styles.get(n);
			if (!i) continue;
			let a = n === "select" || !this.styles.get(this.config.selectName) ? r : this.getMapWithoutSelection(n);
			a && t.push(e.highlight({
				...i,
				customId: n
			}, a));
		}
		this.config.autoUpdateFragments && t.push(e.core.update(!0)), await Promise.allSettled(t);
	}
	updateStyleMap(e, t) {
		let n = this.selection[e];
		for (let e in t) {
			let r = n[e];
			r || (r = /* @__PURE__ */ new Set(), n[e] = r);
			let i = t[e];
			for (let e of i) r.add(e);
		}
		if (e !== this.config.selectName) for (let [t, r] of Object.entries(this.selection)) {
			if (t === this.config.selectName || t === e) continue;
			let i = r;
			for (let [e, t] of Object.entries(n)) {
				let n = i[e];
				if (n) for (let e of t) n.delete(e);
			}
		}
	}
	getMapWithoutSelection(e, t) {
		let n = this.selection[e];
		if (!n) throw Error(`Style ${e} does not exist.`);
		let r = this.selection[this.config.selectName] ?? {}, i = {};
		for (let a in n) {
			let o = n[a], s = e === this.config.selectName ? /* @__PURE__ */ new Set() : r[a] ?? /* @__PURE__ */ new Set(), c = Array.from(o).filter((e) => !s.has(e) && (!t || t[a]?.has(e)));
			c.length > 0 && (i[a] = new Set(c));
		}
		return Object.keys(i).length > 0 ? i : null;
	}
	async clear(e, t) {
		let n = e ? [e] : Object.keys(this.selection), r = t ?? void 0;
		for (let e of n) {
			let t = this.selection[e] ?? {}, n = r ?? t;
			e === this.config.selectName && this.restorePreviousColors();
			let i = {};
			for (let [e, r] of Object.entries(n)) {
				let n = t[e];
				if (n) for (let t of r) {
					if (!n.delete(t)) continue;
					let r = i[e];
					r || (r = /* @__PURE__ */ new Set(), i[e] = r), r.add(t);
				}
			}
			Object.keys(i).length > 0 && this.events[e].onClear.trigger(i), ei.remove(this.selection[e], i);
		}
		this._fromHighlight || await this.updateColors();
	}
	setup(e) {
		if (this.isSetup) return;
		this.config = {
			...this.config,
			...e
		};
		let { selectName: t, selectionColor: n, selectMaterialDefinition: r } = this.config;
		this.config.world && this.components.get(Wl).get(this.config.world), r ? (n && (console.warn("highlighter.config.selectionColor is deprecated, use selectMaterialDefinition instead"), r.color = n), this.styles.set(t, r)) : this.styles.set(t, null), this.autoToggle.add(this.config.selectName), this.setupEvents(!0), this.enabled = !0, this.isSetup = !0, this.onSetup.trigger(this);
	}
	async zoomSelection(e) {
		if (!this.config.world) throw Error("No world found in config!");
		let t = this.config.world, n = !1;
		for (let t in e) if (e[t].size > 0) {
			n = !0;
			break;
		}
		if (!n || !t.camera.hasCameraControls()) return;
		let r = await this.components.get(Q).getBBoxes(e), i = new b(), a = new _();
		for (let e of r) a.union(e);
		a.getBoundingSphere(i);
		let o = Infinity, s = -Infinity, { x: c, y: l, z: u } = i.center, d = i.radius === o || c === o || l === o || u === o, f = i.radius === s || c === s || l === s || u === s, p = i.radius === 0;
		d || f || p || (i.radius *= this.zoomFactor, await t.camera.controls.fitToSphere(i, !0));
	}
	setupEvents(e) {
		if (!this.config.world) {
			console.log("No world found while setting up events!");
			return;
		}
		if (this.config.world.isDisposing) return;
		if (!this.config.world.renderer) throw Error("The given world doesn't have a renderer!");
		let t = this.config.world.renderer.three.domElement;
		t.removeEventListener("mousedown", this.onMouseDown), t.removeEventListener("mouseup", this.onMouseUp), t.removeEventListener("pointermove", this.onMouseMove), e && (t.addEventListener("mousedown", this.onMouseDown), t.addEventListener("mouseup", this.onMouseUp), t.addEventListener("pointermove", this.onMouseMove));
	}
};
K(ff, "uuid", "cb8a76f2-654a-4b50-80c6-66fd83cafd77");
var pf = ff, mf = "default";
K(class e extends qt {
	constructor(t) {
		super(t), K(this, "_world"), K(this, "styles", new Be()), K(this, "outlinePositions", !1), K(this, "_mesh", null), K(this, "onDisposed", new Z()), K(this, "_groups", /* @__PURE__ */ new Map()), K(this, "_tileListeners", /* @__PURE__ */ new Map()), t.add(e.uuid, this), this.ensureGroup(mf), this.setupEvents();
	}
	set world(e) {
		this._world = e, e && this.getRenderer().postproduction.excludedObjectsPass.addExcludedMaterial(this._points.material);
	}
	get world() {
		return this._world;
	}
	get _points() {
		return this._mesh ||= new oe(new r(), new Ue({
			size: 10,
			sizeAttenuation: !1,
			depthTest: !1
		})), this._mesh;
	}
	get enabled() {
		return !this.world || this.world.isDisposing ? !1 : this.getRenderer().postproduction.outlinesEnabled;
	}
	set enabled(e) {
		if (!this.world || this.world.isDisposing) return;
		let t = this.getRenderer();
		t.postproduction.outlinesEnabled = e, this.outlinePositions && (this._points.material.color = this.color, this.world.scene.three.add(this._points));
	}
	get color() {
		return this.getRenderer().postproduction.outlinePass.outlineColor;
	}
	set color(e) {
		let t = this.getRenderer().postproduction.outlinePass;
		t.outlineColor = e, this._points.material.color.copy(e);
	}
	get thickness() {
		return this.getRenderer().postproduction.outlinePass.thickness;
	}
	set thickness(e) {
		this.getRenderer().postproduction.outlinePass.thickness = e;
	}
	get fillColor() {
		return this.getRenderer().postproduction.outlinePass.fillColor;
	}
	set fillColor(e) {
		this.getRenderer().postproduction.outlinePass.fillColor = e;
	}
	get fillOpacity() {
		return this.getRenderer().postproduction.outlinePass.fillOpacity;
	}
	set fillOpacity(e) {
		this.getRenderer().postproduction.outlinePass.fillOpacity = e;
	}
	create(e, t = {}) {
		this.world && this.getRenderer().postproduction.outlinePass.addGroup(e, this.toPassConfig(t)), this.ensureGroup(e);
	}
	configure(e, t) {
		this.world && this.getRenderer().postproduction.outlinePass.configureGroup(e, this.toPassConfig(t));
	}
	remove(e) {
		if (e === mf) return;
		let t = this._groups.get(e);
		if (!t) return;
		let n = this.components.get(pf);
		for (let e of Object.keys(t.styleCallbacks)) {
			let { onHighlight: r, onClear: i } = t.styleCallbacks[e], a = n.events[e];
			a && (a.onHighlight.remove(r), a.onClear.remove(i));
		}
		this.detachAll(t), this._groups.delete(e), this.world && this.getRenderer().postproduction.outlinePass.removeGroup(e);
	}
	list() {
		return [...this._groups.keys()];
	}
	bindStyle(e, t = mf) {
		return this.components.get(pf).styles.has(e) ? (this.ensureGroup(t), this.wireStyle(e, t), !0) : !1;
	}
	async addItems(e, t = mf) {
		let n = this.ensureGroup(t);
		ei.add(n.map, e), await this.updateGroup(t, e);
	}
	async removeItems(e, t = mf) {
		let n = this._groups.get(t);
		n && (ei.remove(n.map, e), await this.updateGroup(t));
	}
	async update(e, t = mf) {
		e === void 0 ? await this.updateGroup(t) : await this.updateGroup(t, e);
	}
	clean(e) {
		if (e !== void 0) {
			let t = this._groups.get(e);
			if (!t) return;
			t.map = {}, t.activeStyles.clear(), this.detachAll(t), e === mf && this.cleanPoints();
			return;
		}
		for (let [, e] of this._groups) e.map = {}, e.activeStyles.clear(), this.detachAll(e);
		this.cleanPoints();
	}
	dispose() {
		this.styles.clear();
		for (let [, e] of this._tileListeners) e();
		this._tileListeners.clear();
		for (let e of [...this._groups.keys()]) e !== mf && this.remove(e);
		this.clean(), this.onDisposed.trigger(e.uuid);
	}
	toPassConfig(e) {
		return {
			outlineColor: e.color,
			fillColor: e.fillColor,
			fillOpacity: e.fillOpacity,
			thickness: e.thickness,
			priority: e.priority
		};
	}
	ensureGroup(e) {
		let t = this._groups.get(e);
		return t || (t = {
			map: {},
			attached: /* @__PURE__ */ new Map(),
			activeStyles: /* @__PURE__ */ new Set(),
			styleCallbacks: {}
		}, this._groups.set(e, t), t);
	}
	setupEvents() {
		let e = this.components.get(pf);
		this.styles.guard = (t) => e.styles.has(t), this.styles.onItemAdded.add((e) => {
			this.wireStyle(e, mf);
		}), this.styles.onBeforeDelete.add((e) => {
			this.unwireStyle(e, mf);
		}), e.styles.onItemDeleted.add((e) => {
			this.styles.delete(e);
			for (let [t] of this._groups) this.unwireStyle(e, t);
		});
	}
	wireStyle(e, t) {
		let n = this.components.get(pf).events[e];
		if (!n) return;
		let r = this.ensureGroup(t);
		if (r.styleCallbacks[e]) return;
		let i = () => {
			r.activeStyles.add(e), this.updateFromStyles(t);
		}, a = () => {
			r.activeStyles.delete(e), this.updateFromStyles(t);
		};
		r.styleCallbacks[e] = {
			onHighlight: i,
			onClear: a
		}, n.onHighlight.add(i), n.onClear.add(a);
	}
	unwireStyle(e, t) {
		let n = this._groups.get(t);
		if (!n) return;
		let r = n.styleCallbacks[e];
		if (!r) return;
		let i = this.components.get(pf).events[e];
		i && (i.onHighlight.remove(r.onHighlight), i.onClear.remove(r.onClear)), n.activeStyles.delete(e), delete n.styleCallbacks[e];
	}
	async updateFromStyles(e) {
		let t = this.components.get(pf), n = this._groups.get(e);
		if (!n) return;
		let r = [];
		for (let e of n.activeStyles) {
			let n = t.selection[e];
			n && r.push(n);
		}
		n.map = ei.join(r), await this.updateGroup(e);
	}
	async updateGroup(e, t) {
		let n = this.ensureGroup(e);
		if (!this.world) return;
		let r = this.getRenderer().postproduction.outlinePass;
		r.hasGroup(e) || r.addGroup(e), e === mf && this.outlinePositions && await this.updatePoints();
		let i = this.components.get(Q), a = n.map, o = /* @__PURE__ */ new Map();
		for (let [e, t] of n.attached) o.set(e, new Set(t));
		let s = /* @__PURE__ */ new Map(), c = [];
		for (let [e, t] of Object.entries(a)) {
			if (t.size === 0) continue;
			let n = i.list.get(e);
			n && (this.bindModelTileEvents(e), c.push((async () => {
				let r = await n.getItemDrawChunks(t);
				return {
					modelId: e,
					chunks: r
				};
			})()));
		}
		let l = await Promise.all(c);
		for (let { modelId: t, chunks: n } of l) {
			let a = i.list.get(t);
			if (!a) continue;
			let o = /* @__PURE__ */ new Set();
			for (let t of n) {
				let n = a.tiles.get(t.tileId);
				n && (r.attachOutlinedTile(n, {
					position: t.position,
					size: t.size
				}, e), o.add(n));
			}
			s.set(t, o);
		}
		for (let [e, t] of o) {
			let n = s.get(e) ?? /* @__PURE__ */ new Set();
			for (let e of t) n.has(e) || r.detachOutlinedTile(e);
		}
		n.attached = s;
	}
	detachAll(e) {
		if (!this.world) {
			e.attached = /* @__PURE__ */ new Map();
			return;
		}
		let t = this.getRenderer().postproduction.outlinePass;
		for (let [, n] of e.attached) for (let e of n) t.detachOutlinedTile(e);
		e.attached = /* @__PURE__ */ new Map();
	}
	bindModelTileEvents(e) {
		if (this._tileListeners.has(e)) return;
		let t = this.components.get(Q).list.get(e);
		if (!t) return;
		let n = () => {
			for (let [t, n] of this._groups) {
				let r = n.map[e];
				r && r.size > 0 && this.updateGroup(t);
			}
		};
		t.tiles.onItemSet.add(n), t.tiles.onItemDeleted.add(n), this._tileListeners.set(e, () => {
			t.tiles.onItemSet.remove(n), t.tiles.onItemDeleted.remove(n);
		});
	}
	cleanPoints() {
		this._mesh && this.components.get(Zt).destroy(this._mesh, !0, !0), this._mesh = null;
	}
	async updatePoints() {
		let e = this._groups.get(mf)?.map ?? {}, t = 0;
		for (let [, n] of Object.entries(e)) t += n.size;
		this._points.geometry.setAttribute("position", new h(new Float32Array(t * 3), 3));
		let n = await this.components.get(Q).getPositions(e);
		for (let e = 0; e < n.length; e++) {
			let { x: t, y: r, z: i } = n[e];
			this._points.geometry.attributes.position.array[e * 3] = t, this._points.geometry.attributes.position.array[e * 3 + 1] = r, this._points.geometry.attributes.position.array[e * 3 + 2] = i;
		}
		this._points.geometry.attributes.position.needsUpdate = !0;
	}
	getRenderer() {
		if (!this.world) throw Error("You must set a world to use the outliner!");
		let e = this.world.renderer;
		if (!e.postproduction) throw Error("The world given to the outliner must use the postproduction renderer.");
		return e;
	}
}, "uuid", "2fd3bcc5-b3b6-4ded-9f64-f47a02854a10");
var hf = class e extends qt {
	constructor(t) {
		super(t), K(this, "onHoverStarted", new Z()), K(this, "onHoverEnded", new Z()), K(this, "onDisposed", new Z()), K(this, "mode", "mousemove"), K(this, "fade", !0), K(this, "fadeDuration", 200), K(this, "HOVERER_OPACITY_KEY", "_maxHoverOpacity"), K(this, "_world", null), K(this, "_enabled", !1), K(this, "_material", new ue({
			color: 16777215,
			transparent: !0,
			opacity: .5,
			depthTest: !1,
			side: 2,
			userData: { [this.HOVERER_OPACITY_KEY]: .5 }
		})), K(this, "_proxies", /* @__PURE__ */ new Set()), K(this, "_current", null), K(this, "_chunksCache", /* @__PURE__ */ new Map()), K(this, "_fadeAnimation", null), K(this, "_hoverGen", 0), K(this, "_settleTimer", null), K(this, "_moveScheduled", !1), K(this, "_moveInflight", !1), K(this, "_nullPicks", 0), K(this, "_dragging", !1), K(this, "_wheeling", !1), K(this, "_wheelIdleTimer", null), K(this, "_onCtrlStart", null), K(this, "_onCtrlEnd", null), K(this, "_onWheel", null), K(this, "onMouseMove", () => {
			if (this.mode === "mousemove") {
				if (this._moveScheduled) return;
				this._moveScheduled = !0, requestAnimationFrame(() => {
					this._moveScheduled = !1, this.hover();
				});
				return;
			}
			this._settleTimer !== null && clearTimeout(this._settleTimer), this._settleTimer = window.setTimeout(() => {
				this._settleTimer = null, this.hover();
			}, e.MOUSE_STOP_SETTLE_MS);
		}), K(this, "onMouseLeave", () => {
			this.cancelTimers(), this.beginUnhover();
		}), K(this, "animate", () => {
			if (!this._fadeAnimation) return;
			let { startTime: e, duration: t, fadeIn: n } = this._fadeAnimation, r = Date.now() - e, i = Math.min(r / t, 1), a = n ? i : 1 - i, o = this.material.userData[this.HOVERER_OPACITY_KEY] ?? 1;
			this.material.opacity = a * o;
			for (let e of this._proxies) {
				let t = e.userData.__hoverSource;
				t && e.matrixWorld.copy(t.matrixWorld);
			}
			i < 1 ? requestAnimationFrame(this.animate) : (n || this.detachAll(), this._fadeAnimation = null, this.onHoverEnded.trigger(this));
		}), t.add(e.uuid, this), this.setupFragmentListeners();
	}
	set world(e) {
		e !== this._world && (this.detachAll(), this._world = e, this.setupEvents(this._enabled && !!e));
	}
	get world() {
		return this._world;
	}
	set enabled(e) {
		this._enabled = e, this.setupEvents(e && !!this._world), e || this.detachAll();
	}
	get enabled() {
		return this._enabled;
	}
	set material(e) {
		if (e !== this._material) {
			e.userData[this.HOVERER_OPACITY_KEY] = e.opacity;
			for (let t of this._proxies) t.material[0] = e;
			this._material.dispose(), this._material = e;
		}
	}
	get material() {
		return this._material;
	}
	clear() {
		this.cancelTimers(), this._current = null, this._nullPicks = 0, this._fadeAnimation = null, this.detachAll();
	}
	dispose() {
		this._enabled = !1, this.setupEvents(!1), this.cancelTimers(), this.detachAll(), this._chunksCache.clear(), this._fadeAnimation = null, this.onHoverStarted.reset(), this.onHoverEnded.reset(), this.onDisposed.trigger();
	}
	async hover() {
		if (this._enabled && this._world && !(this.mode === "mousemove" && this._moveInflight)) {
			this._moveInflight = this.mode === "mousemove";
			try {
				if (this._dragging || this._wheeling) return;
				let t = await this.components.get(Sl).get(this._world).getItemAt();
				if (!t) {
					this._nullPicks += 1, this._nullPicks > e.NULL_PICK_TOLERANCE && this.beginUnhover();
					return;
				}
				if (this._nullPicks = 0, this._current && this._current.modelId === t.modelId && this._current.localId === t.localId) return;
				this.detachAll(), this._current = t, this._hoverGen += 1, await this.attachForCurrent(this._hoverGen);
			} finally {
				this._moveInflight = !1;
			}
		}
	}
	beginUnhover() {
		if (this._current && (this._current = null, this._nullPicks = 0, this._hoverGen += 1, this._proxies.size !== 0)) {
			if (!this.fade || !this.material.transparent) {
				this.detachAll();
				return;
			}
			this._fadeAnimation = {
				startTime: Date.now(),
				duration: this.fadeDuration,
				fadeIn: !1
			}, this.animate();
		}
	}
	async attachForCurrent(e) {
		if (e !== this._hoverGen || !this._current || !this._world) return;
		let t = this.components.get(Q).list.get(this._current.modelId);
		if (!t) return;
		let n = await this.getOrFetchChunks(t, this._current.modelId, this._current.localId);
		if (e !== this._hoverGen || !n || n.length === 0) return;
		for (let e of n) {
			let n = t.tiles.get(e.tileId);
			if (!n) continue;
			let r = this.buildProxy(n, e.position, e.size);
			this._world.scene.three.add(r), this._proxies.add(r);
		}
		if (this._proxies.size === 0) return;
		let r = this.material.userData[this.HOVERER_OPACITY_KEY] ?? 1;
		this.fade && this.material.transparent ? (this._fadeAnimation = {
			startTime: Date.now(),
			duration: this.fadeDuration,
			fadeIn: !0
		}, this.onHoverStarted.trigger(this), this.animate()) : (this.material.opacity = r, this.onHoverStarted.trigger(this));
	}
	async getOrFetchChunks(e, t, n) {
		let r = this._chunksCache.get(t);
		if (r != null && r.has(n)) return r.get(n);
		let i;
		try {
			i = await e.getItemDrawChunks([n]);
		} catch {
			return null;
		}
		return r || (r = /* @__PURE__ */ new Map(), this._chunksCache.set(t, r)), r.set(n, i), i;
	}
	buildProxy(e, t, n) {
		let i = e.geometry, a = new r();
		a.attributes = i.attributes, i.index && a.setIndex(i.index), a.boundingBox = i.boundingBox, a.boundingSphere = i.boundingSphere;
		let o = Math.min(t.length, n.length);
		for (let e = 0; e < o; e++) {
			let r = t[e], i = n[e], o = i === 4294967295 ? Infinity : i;
			a.addGroup(r, o, 0);
		}
		let s = new U(a, [this._material]);
		return s.matrixAutoUpdate = !1, s.matrixWorldAutoUpdate = !1, s.frustumCulled = !1, s.matrixWorld.copy(e.matrixWorld), s.userData.__hoverSource = e, s;
	}
	detachAll() {
		for (let e of this._proxies) e.removeFromParent();
		this._proxies.clear();
	}
	cancelTimers() {
		this._settleTimer !== null && (clearTimeout(this._settleTimer), this._settleTimer = null), this._moveScheduled = !1;
	}
	setupEvents(t) {
		if (!this._world || this._world.isDisposing || !this._world.renderer) return;
		let n = this._world.renderer.three.domElement;
		n.removeEventListener("mousemove", this.onMouseMove), n.removeEventListener("mouseleave", this.onMouseLeave);
		let r = this._world.camera?.controls;
		this._onCtrlStart && r && r.removeEventListener("controlstart", this._onCtrlStart), this._onCtrlEnd && r && r.removeEventListener("controlend", this._onCtrlEnd), this._onWheel && n.removeEventListener("wheel", this._onWheel), this._onCtrlStart = null, this._onCtrlEnd = null, this._onWheel = null, this._wheelIdleTimer !== null && (clearTimeout(this._wheelIdleTimer), this._wheelIdleTimer = null), this._dragging = !1, this._wheeling = !1, t && (n.addEventListener("mousemove", this.onMouseMove), n.addEventListener("mouseleave", this.onMouseLeave), r && (this._onCtrlStart = () => {
			this._dragging = !0;
		}, this._onCtrlEnd = () => {
			this._dragging = !1;
		}, r.addEventListener("controlstart", this._onCtrlStart), r.addEventListener("controlend", this._onCtrlEnd)), this._onWheel = () => {
			this._wheeling = !0, this._wheelIdleTimer !== null && clearTimeout(this._wheelIdleTimer), this._wheelIdleTimer = window.setTimeout(() => {
				this._wheeling = !1, this._wheelIdleTimer = null;
			}, e.WHEEL_IDLE_MS);
		}, n.addEventListener("wheel", this._onWheel, { passive: !0 }));
	}
	setupFragmentListeners() {
		this.components.get(Q).list.onItemDeleted.add((e) => {
			this._chunksCache.delete(e), this._current && this._current.modelId === e && this.clear();
		});
	}
};
K(hf, "uuid", "26fbd870-b1b2-4b71-b747-4063d484de1b"), K(hf, "MOUSE_STOP_SETTLE_MS", 30), K(hf, "NULL_PICK_TOLERANCE", 2), K(hf, "WHEEL_IDLE_MS", 80);
var gf = hf;
K(class e extends qt {
	constructor() {
		super(...arguments), K(this, "enabled", !0), K(this, "geometries", new a()), K(this, "onDisposed", new Z());
	}
	async get(e, t) {
		let { material: n, applyTransformation: r } = {
			applyTransformation: !0,
			...t
		}, i = this.components.get(Q), o = new a();
		for (let [t, s] of Object.entries(e)) {
			let e = i.list.get(t);
			if (!e) continue;
			let c = this.getModelMeshes(t);
			for (let i of s) {
				let s = o.get(t);
				s || (s = new a(), o.set(t, s));
				let l = c.get(i);
				if (l && l.length > 0) {
					let t = [];
					for (let [i, { geometry: a, transform: o }] of l.entries()) {
						let i = await this.createMesh(e, a, o, {
							material: n,
							applyTransformation: r
						});
						t.push(i);
					}
					s.set(i, t);
					continue;
				} else l = [], c.set(i, l);
				let [u] = await e.getItemsGeometry([i]);
				if (!u) continue;
				let d = [];
				for (let t of u) {
					let i = this.createGeometry(t);
					if (!i) continue;
					let { geometry: a, transform: o } = i;
					l.push(i);
					let s = await this.createMesh(e, a, o, {
						material: n,
						applyTransformation: r
					});
					d.push(s);
				}
				s.set(i, d);
			}
		}
		return o;
	}
	getModelMeshes(e) {
		let t = this.geometries.get(e);
		return t || (t = new a(), this.geometries.set(e, t)), t;
	}
	remove(e = [...this.geometries.keys()]) {
		for (let t of e) {
			let e = this.geometries.get(t);
			if (e) {
				for (let [t, n] of e) for (let { geometry: e } of n) e.dispose();
				this.geometries.delete(t);
			}
		}
	}
	dispose(t = !0) {
		this.remove(), t && this.geometries.dispose(), this.onDisposed.trigger(e.uuid);
	}
	getMeshesFromResult(e) {
		let t = [];
		for (let n of e.values()) for (let e of n.values()) t.push(...e);
		return t;
	}
	createGeometry(e) {
		let { positions: t, indices: n, normals: i, transform: a } = e;
		if (!(t && n && i)) return null;
		let o = new r();
		return o.setAttribute("position", new W(t, 3)), o.setAttribute("normal", new W(i, 3, !0)), o.setIndex(new W(n, 1)), {
			geometry: o,
			transform: a
		};
	}
	async createMesh(e, t, n, r) {
		let { material: i, applyTransformation: a } = {
			applyTransformation: !0,
			...r
		}, o = new U(t, i);
		return o.applyMatrix4(n), o.applyMatrix4(e.object.matrixWorld), a || (o.position.set(0, 0, 0), o.rotation.set(0, 0, 0)), o;
	}
}, "uuid", "ab45d0a7-feea-4afc-927c-80832dae76dd");
var _f = class {
	constructor(e) {
		K(this, "alignments", []), K(this, "enabled", !0), K(this, "world", null), K(this, "_raycastable", []), K(this, "_components"), this._components = e;
	}
	update() {
		this.dispose();
		for (let t of this.alignments) for (let n of t.children) {
			let t = n;
			t.updateWorldMatrix(!0, !0);
			for (let n of t.children) {
				let t = n;
				if (t.isLine2 && t.userData.points) {
					let n = new r(), i = new e();
					i.geometry.setIndex(t.geometry.index);
					let a = new W(new Float32Array(t.userData.points), 3);
					n.setAttribute("position", a), i.geometry = n, i.userData.curve = t, i.applyMatrix4(t.matrixWorld), i.updateMatrixWorld(), this._raycastable.push(i);
				}
			}
		}
	}
	dispose() {
		for (let e of this._raycastable) e.geometry.dispose(), e.geometry = void 0;
		this._raycastable = [];
	}
	castRay() {
		if (!this.enabled || !this.world) return null;
		let e = this._components.get(Wl).get(this.world).castRayToObjects(this._raycastable);
		if (!e) return null;
		let t = e.object, n = t.geometry, r = e.index, i = n.attributes.position.array[r * 3], a = n.attributes.position.array[r * 3 + 1], o = n.attributes.position.array[r * 3 + 2], s = n.attributes.position.array[r * 3 + 3], c = n.attributes.position.array[r * 3 + 4], l = n.attributes.position.array[r * 3 + 5], u = new G(s - i, c - a, l - o).normalize();
		return {
			point: e.point,
			normal: u,
			curve: t.userData.curve,
			alignment: t.userData.curve.parent
		};
	}
}, vf = class {
	static alignmentPercentageToPoint(e, t) {
		let n = new G(), r = new G(), i = t * this.alignmentLength(e), a = 0;
		if (e.updateWorldMatrix(!0, !0), t === 1) for (let t = e.children.length - 1; t >= 0; t--) {
			let n = e.children[t], r = n.userData.points;
			if (!r) continue;
			let i = new G(r[r.length - 3], r[r.length - 2], r[r.length - 1]);
			return i.applyMatrix4(n.matrixWorld), {
				normal: new G(),
				point: i,
				curve: n,
				alignment: e
			};
		}
		for (let t of e.children) {
			let o = t.userData.points;
			if (o) for (let s = 0; s < o.length - 3; s += 3) {
				let c = n.set(o[s], o[s + 1], o[s + 2]), l = r.set(o[s + 3], o[s + 4], o[s + 5]), u = c.distanceTo(l);
				if (a + u >= i) {
					let n = i - a, r = l.clone().sub(c).normalize(), o = r.clone().multiplyScalar(n);
					return c.add(o), c.applyMatrix4(t.matrixWorld), {
						normal: r,
						point: c,
						curve: t,
						alignment: e
					};
				}
				a += u;
			}
		}
		return null;
	}
	static curvePercentageToPoint(e, t, n) {
		let r = new G(), i = new G(), a = n * this.curveLength(t), o = 0, s = t.userData.points;
		if (!s) throw Error("No points found in curve");
		for (let n = 0; n < s.length - 3; n += 3) {
			let c = r.set(s[n], s[n + 1], s[n + 2]), l = i.set(s[n + 3], s[n + 4], s[n + 5]), u = c.distanceTo(l);
			if (o + u >= a) {
				let n = a - o, r = l.clone().sub(c).normalize(), i = r.clone().multiplyScalar(n);
				return c.add(i), {
					normal: r,
					point: c,
					curve: t,
					alignment: e
				};
			}
			o += u;
		}
		return null;
	}
	static alignmentLength(e) {
		let t = 0;
		if (e.userData.length !== void 0) return e.userData.length;
		for (let n of e.children) "isLine2" in n && (t += this.curveLength(n));
		return e.userData.length = t, t;
	}
	static curveLength(e) {
		let t = 0;
		if (e.userData.length !== void 0) return e.userData.length;
		let n = new G(), r = new G(), i = e.userData.points;
		if (!i) throw Error("No points found in curve");
		for (let e = 0; e < i.length - 2 - 3; e += 3) {
			let a = n.set(i[e], i[e + 1], i[e + 2]), o = r.set(i[e + 3], i[e + 4], i[e + 5]);
			t += a.distanceTo(o);
		}
		return e.userData.length = t, t;
	}
	static curvePointToAlignmentPercentage(e, t, n) {
		let r = new G(), i = new G(), a = this.alignmentLength(e), o = 0;
		e.updateWorldMatrix(!0, !0);
		for (let s of e.children) {
			let e = s.userData.points;
			if (e) for (let c = 0; c < e.length - 3; c += 3) {
				let l = r.set(e[c], e[c + 1], e[c + 2]), u = i.set(e[c + 3], e[c + 4], e[c + 5]);
				l.applyMatrix4(s.matrixWorld), u.applyMatrix4(s.matrixWorld);
				let d = l.distanceTo(u), f = l.distanceTo(t) < .001, p = u.distanceTo(t) < .001, m = this.isPointbetweenTwoOthers(l, u, t);
				if (s === n && (f || p || m)) {
					let e = l.distanceTo(t);
					return (o + e) / a;
				}
				o += d;
			}
		}
		return null;
	}
	static isPointbetweenTwoOthers(e, t, n) {
		let r = new G();
		r.subVectors(t, e).normalize();
		let i = new G();
		i.subVectors(n, e).normalize();
		let a = new G();
		return a.subVectors(n, t).normalize(), r.dot(i) > .9984 && r.dot(a) < -.9984;
	}
}, yf = class {
	constructor(e, t) {
		K(this, "onDisposed", new Z()), K(this, "alignments", []), K(this, "components"), K(this, "onMarkerChange", new Z()), K(this, "enabled", !0), K(this, "highlightMaterial"), K(this, "increments", 20), K(this, "screenDistanceLimit", .1), K(this, "fadeInTime", 500), K(this, "_mouseMarkers"), K(this, "_highlighted", /* @__PURE__ */ new Set()), K(this, "_stationPoints", /* @__PURE__ */ new Map()), K(this, "_originalHighlightMaterialId", "originalHighlightMaterial"), K(this, "_world", null), K(this, "_raycaster"), K(this, "_stationLabelColor", new N(16777215)), K(this, "_stationLabelBackgroundColor", new N(8014801)), K(this, "_stationPointerColor", new N(16777215)), K(this, "_stationPointerBackgroundColor", new N(4803766)), K(this, "_pointerDown", performance.now()), K(this, "_pointerDownTime", 150), K(this, "onPointerDown", () => {
			this._pointerDown = performance.now();
		}), K(this, "onPointerUp", () => {
			if (performance.now() - this._pointerDown > this._pointerDownTime) return;
			let e = this.setMarkerToMouse("select");
			e && this.onMarkerChange.trigger(e);
		}), K(this, "onMouseMove", () => {
			this.setMarkerToMouse("hover");
		}), this.components = e, this.highlightMaterial = t, this._raycaster = new _f(e), this._raycaster.alignments = this.alignments;
	}
	get world() {
		return this._world;
	}
	set world(e) {
		var t, n, r, i;
		if (e === this._world || (this._world && this.setupEvents(!1), this._world = e, (t = this._mouseMarkers) == null || t.hover.removeFromParent(), (n = this._mouseMarkers) == null || n.select.removeFromParent(), (r = this._mouseMarkers) == null || r.hover.element.remove(), (i = this._mouseMarkers) == null || i.select.element.remove(), !e)) return;
		this._raycaster.world = e;
		let a = this.newCivilLabel(0, "stationPointer");
		e.scene.three.add(a), a.visible = !1, a.element.style.transition = "";
		let o = this.newCivilLabel(0, "stationPointer");
		o.element.style.transition = "", o.element.style.opacity = "0.5", e.scene.three.add(o), o.visible = !1, this._mouseMarkers = {
			select: a,
			hover: o
		}, this.setupEvents(!0);
	}
	get stationLabelColor() {
		return this._stationLabelColor;
	}
	set stationLabelColor(e) {
		this._stationLabelColor = e;
		let t = `#${e.getHexString()}`;
		for (let [, { labels: e }] of this._stationPoints) {
			let n = [...e.children];
			for (let e of n) {
				let n = this.getLabel(e);
				n.style.color = t;
				let r = this.getPoint(e);
				r.style.backgroundColor = t;
			}
		}
	}
	get stationLabelBackgroundColor() {
		return this._stationLabelBackgroundColor;
	}
	set stationLabelBackgroundColor(e) {
		this._stationLabelBackgroundColor = e;
		let t = `#${e.getHexString()}`;
		for (let [, { labels: e }] of this._stationPoints) {
			let n = [...e.children];
			for (let e of n) {
				let n = this.getLabel(e);
				n.style.backgroundColor = t;
				let r = this.getPoint(e);
				r.style.border = `2px solid ${t}`;
			}
		}
	}
	get stationPointerColor() {
		return this._stationPointerColor;
	}
	set stationPointerColor(e) {
		this._stationPointerColor = e;
		let t = `#${e.getHexString()}`;
		if (this._mouseMarkers) {
			let e = this._mouseMarkers.select, n = this.getLabel(e);
			n.style.color = t;
			let r = this.getPoint(e);
			r.style.backgroundColor = t;
		}
	}
	get stationPointerBackgroundColor() {
		return this._stationPointerBackgroundColor;
	}
	set stationPointerBackgroundColor(e) {
		this._stationPointerBackgroundColor = e;
		let t = `#${e.getHexString()}`;
		if (this._mouseMarkers) {
			let e = this._mouseMarkers.select, n = this.getLabel(e);
			n.style.backgroundColor = t;
			let r = this.getPoint(e);
			r.style.border = `2px solid ${t}`;
		}
	}
	dispose() {
		var e, t, n, r;
		this.clearHighlight(), this.clearStations(), this.alignments = [], (e = this._mouseMarkers) == null || e.hover.removeFromParent(), (t = this._mouseMarkers) == null || t.select.removeFromParent(), (n = this._mouseMarkers) == null || n.hover.element.remove(), (r = this._mouseMarkers) == null || r.select.element.remove(), this._raycaster.dispose(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	updateAlignments() {
		this._raycaster.update();
	}
	setMarkerAtPoint(e, t) {
		if (!this._mouseMarkers) throw Error("No mouse markers found! Initialize the world before using this.");
		this.updateMarkerValue(e, t), this._mouseMarkers[t].visible = !0, this._mouseMarkers[t].position.copy(e.point);
	}
	highlight(e, t = !0) {
		t && this.clearHighlight(this._highlighted);
		for (let t of e.children) "isLineSegments2" in t && "material" in t && (t.userData[this._originalHighlightMaterialId] = t.material, t.material = this.highlightMaterial);
		this._highlighted.add(e);
	}
	clearHighlight(e = this._highlighted) {
		for (let t of e) for (let e of t.children) "isLineSegments2" in e && "material" in e && (e.material = e.userData[this._originalHighlightMaterialId], delete e.userData[this._originalHighlightMaterialId]);
		this._highlighted.clear();
	}
	createStations(e) {
		if (!this.world || this._stationPoints.has(e.uuid)) return;
		let t = new R();
		this.world.scene.three.add(t), this._stationPoints.set(e.uuid, {
			alignment: e,
			labels: t
		});
	}
	clearStations(e = this._stationPoints.keys()) {
		for (let t of e) {
			let e = this._stationPoints.get(t);
			e && (this.clearLabels(e.labels), this._stationPoints.delete(t));
		}
	}
	updateStations() {
		if (!this.world) throw Error("No world found!");
		if (!this.world.renderer) throw Error("No renderer found!");
		let e = this.world.camera.three, t = this.world.renderer.three, n = new L(), r = t.clippingPlanes, i = new G(), a = new G(), o = !0, s = new G();
		for (let [, { alignment: t, labels: c }] of this._stationPoints) {
			this.clearLabels(c), t.updateWorldMatrix(!0, !0);
			let l = t.userData.initialStation, u = l || 0, d = u % this.increments, f = l + this.increments - d;
			for (let l of t.children) {
				if (!("isLine2" in l)) continue;
				let t = l;
				if (t.geometry.boundingBox || t.geometry.computeBoundingBox(), n.setFromProjectionMatrix(new H().multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse)), !n.intersectsBox(t.geometry.boundingBox)) {
					let e = vf.curveLength(l);
					u += e;
					let t = u % this.increments;
					f = u + this.increments - t;
					continue;
				}
				let d = l.userData.points, p = d[0], m = d[1], h = d[2];
				if (s.set(p, m, h), s.applyMatrix4(l.matrixWorld), !this.isLabelClipped(r, s)) {
					if (o) {
						o = !1, i.set(s.x, s.y, s.z), i.project(e), i.z = 0;
						let t = this.newCivilLabel(u, "stationLabel");
						t.position.set(s.x, s.y, s.z), c.children.push(t);
					} else if (a.set(s.x, s.y, s.z), a.project(e), a.z = 0, i.distanceTo(a) > this.screenDistanceLimit) {
						let e = this.newCivilLabel(u, "stationLabel");
						e.position.set(s.x, s.y, s.z), c.children.push(e), i.copy(a);
					}
				}
				let g = new G(), _ = new G();
				for (let t = 0; t < d.length - 3; t += 3) {
					g.set(d[t], d[t + 1], d[t + 2]), _.set(d[t + 3], d[t + 4], d[t + 5]);
					let o = g.distanceTo(_), p = u + o, m = _.clone().sub(g).normalize();
					for (; p > f;) {
						let t = f - u, o = m.clone();
						o.multiplyScalar(t);
						let { x: d, y: p, z: h } = g.clone().add(o);
						if (s.set(d, p, h), s.applyMatrix4(l.matrixWorld), !this.isLabelClipped(r, s) && n.containsPoint(s) && (a.set(s.x, s.y, s.z), a.project(e), a.z = 0, i.distanceTo(a) > this.screenDistanceLimit)) {
							let e = this.newCivilLabel(f, "stationLabel");
							e.position.set(s.x, s.y, s.z), c.children.push(e), i.copy(a);
						}
						f += this.increments;
					}
					u += o;
				}
				let v = d[d.length - 3], y = d[d.length - 2], b = d[d.length - 1];
				if (s.set(v, y, b), s.applyMatrix4(l.matrixWorld), !(this.isLabelClipped(r, s) || !n.containsPoint(s)) && (a.set(s.x, s.y, s.z), a.project(e), a.z = 0, i.distanceTo(a) > this.screenDistanceLimit)) {
					let e = this.newCivilLabel(u, "stationLabel");
					e.position.set(s.x, s.y, s.z), c.children.push(e), i.copy(a);
				}
			}
		}
	}
	getCursorValue() {
		if (!this._mouseMarkers) throw Error("No mouse markers found! Initialize the world before using this.");
		return this._mouseMarkers.select.element.children[0].children[0].innerText;
	}
	setCursorValue(e, t) {
		if (!this._mouseMarkers) throw Error("No mouse markers found! Initialize the world before using this.");
		let n = this._mouseMarkers[t].element.children[0].children[0];
		n.innerText = e;
	}
	isLabelClipped(e, t) {
		for (let n of e) if (!(n.distanceToPoint(t) > 0)) return !0;
		return !1;
	}
	clearLabels(e) {
		let t = [...e.children];
		for (let e of t) e.element.style.opacity = "0";
		setTimeout(() => {
			for (let e of t) e.removeFromParent(), e.element.remove(), e.visible = !1;
		}, this.fadeInTime);
	}
	newCivilLabel(e, t) {
		let n = document.createElement("div"), r = t === "stationLabel" ? this.stationLabelColor : this.stationPointerColor, i = t === "stationLabel" ? this.stationLabelBackgroundColor : this.stationPointerBackgroundColor, a = document.createElement("div");
		a.style.width = "4px", a.style.height = "4px", a.style.borderRadius = "50%", a.style.backgroundColor = `#${r.getHexString()}`, a.style.border = `2px solid #${i.getHexString()}`, a.style.display = "flex", a.style.justifyContent = "center";
		let o = this.getFormattedStation(e), s = document.createElement("div");
		s.innerText = o, s.style.backgroundColor = `#${i.getHexString()}`, s.style.color = `#${r.getHexString()}`, s.style.padding = "0.3rem", s.style.position = "absolute", s.style.bottom = "1rem", s.style.borderRadius = "6px", s.style.boxShadow = "rgba(0, 0, 0, 0.6) 0px 4px 6px", a.appendChild(s);
		let c = new qe(n);
		return n.appendChild(a), t === "stationLabel" && (n.style.transition = `opacity ${this.fadeInTime}ms ease-in-out`, n.style.opacity = "0", setTimeout(() => {
			n.style.opacity = "1";
		})), c;
	}
	setupEvents(e) {
		if (!this.world) throw Error("No world found!");
		if (this.world.isDisposing || !this.world.renderer) return;
		let t = this.world.renderer.three.domElement, n = this.components.get(Wl).get(this.world);
		n.three.params.Line || (n.three.params.Line = { threshold: 10 }), t.removeEventListener("pointerdown", this.onPointerDown), t.removeEventListener("pointerup", this.onPointerUp), t.removeEventListener("pointermove", this.onMouseMove), e && (t.addEventListener("pointerdown", this.onPointerDown), t.addEventListener("pointerup", this.onPointerUp), t.addEventListener("pointermove", this.onMouseMove));
	}
	setMarkerToMouse(e) {
		if (!this.enabled || !this._mouseMarkers) return null;
		if (!this.world) throw Error("No world found!");
		let t = this._raycaster.castRay();
		if (!t) return this._mouseMarkers[e].visible = !1, null;
		this._mouseMarkers[e].visible = !0;
		let n = t.point;
		return this._mouseMarkers[e].position.copy(n), this.updateMarkerValue(t, e), t;
	}
	updateMarkerValue(e, t) {
		if (!this._mouseMarkers) return;
		let { alignment: n, curve: r, point: i } = e, a = vf.curvePointToAlignmentPercentage(n, i, r);
		if (a === null) throw Error("Point is not on the curve");
		let o = a * vf.alignmentLength(n) + n.userData.initialStation, s = this.getFormattedStation(o);
		this.setCursorValue(s, t);
	}
	getFormattedStation(e) {
		let t = Math.floor(e / 1e3);
		return `${t}+${Math.round(e - t * 1e3)}`;
	}
	getLabel(e) {
		return e.element.children[0].children[0];
	}
	getPoint(e) {
		return e.element.children[0];
	}
};
K(class e extends qt {
	constructor(n) {
		super(n), K(this, "onDisposed", new Z()), K(this, "list", /* @__PURE__ */ new Map()), K(this, "enabled", !0), K(this, "highlightMaterial", new t({
			color: 8014801,
			linewidth: 5,
			depthTest: !1
		})), K(this, "_increments", 20), K(this, "_screenDistanceLimit", .1), K(this, "_fadeInTime", 500), K(this, "_stationLabelColor", new N(16777215)), K(this, "_stationLabelBackgroundColor", new N(8014801)), K(this, "_stationPointerColor", new N(16777215)), K(this, "_stationPointerBackgroundColor", new N(4803766)), this.components.add(e.uuid, this);
	}
	get increments() {
		return this._increments;
	}
	set increments(e) {
		this._increments = e;
		for (let [, t] of this.list) t.increments = e;
	}
	get screenDistanceLimit() {
		return this._screenDistanceLimit;
	}
	set screenDistanceLimit(e) {
		this._screenDistanceLimit = e;
		for (let [, t] of this.list) t.screenDistanceLimit = e;
	}
	get fadeInTime() {
		return this._fadeInTime;
	}
	set fadeInTime(e) {
		this._fadeInTime = e;
		for (let [, t] of this.list) t.fadeInTime = e;
	}
	get stationLabelColor() {
		return this._stationLabelColor;
	}
	set stationLabelColor(e) {
		this._stationLabelColor = e;
		for (let [, t] of this.list) t.stationLabelColor = e;
	}
	get stationLabelBackgroundColor() {
		return this._stationLabelBackgroundColor;
	}
	set stationLabelBackgroundColor(e) {
		this._stationLabelBackgroundColor = e;
		for (let [, t] of this.list) t.stationLabelBackgroundColor = e;
	}
	get stationPointerColor() {
		return this._stationPointerColor;
	}
	set stationPointerColor(e) {
		this._stationPointerColor = e;
		for (let [, t] of this.list) t.stationPointerColor = e;
	}
	get stationPointerBackgroundColor() {
		return this._stationPointerBackgroundColor;
	}
	set stationPointerBackgroundColor(e) {
		this._stationPointerBackgroundColor = e;
		for (let [, t] of this.list) t.stationPointerBackgroundColor = e;
	}
	create(e) {
		let t = new yf(this.components, this.highlightMaterial);
		return this.list.set(e, t), t;
	}
	delete(e) {
		let t = this.list.get(e);
		t && (t.dispose(), this.list.delete(e));
	}
	dispose() {
		for (let [, e] of this.list) e.dispose();
		this.onDisposed.trigger(), this.onDisposed.reset();
	}
	updateAlignments() {
		for (let [, e] of this.list) e.updateAlignments();
	}
}, "uuid", "0a59c09e-2b49-474a-9320-99f51f40f182"), K(class e extends qt {
	constructor(n) {
		super(n), K(this, "enabled", !0), K(this, "onDisposed", new Z()), K(this, "_world", null), K(this, "_flip", !1), K(this, "_plane"), K(this, "_point", new G()), K(this, "_edgeMeshes", []), K(this, "_sectionVisible", !1), K(this, "_sectionOffset", .1), K(this, "edgeMaterial", new t({
			color: 0,
			linewidth: 5,
			depthTest: !1
		})), this.components.add(e.uuid, this);
	}
	get plane() {
		if (!this._plane) throw Error("Plane is not set. You must give a world.");
		return this._plane;
	}
	set plane(e) {
		this._plane = e;
	}
	get sectionVisible() {
		return this._sectionVisible;
	}
	set sectionVisible(e) {
		this._sectionVisible = e;
		for (let t of this._edgeMeshes) t.visible = e;
	}
	get world() {
		return this._world;
	}
	set world(e) {
		var t;
		if (this._world = e, (t = this._plane) == null || t.dispose(), !e) return;
		let n = this.components.get(bu), r = n.createFromNormalAndCoplanarPoint(e, new G(1, 0, 0), new G());
		this.plane = n.list.get(r), this.plane.visible = !1, this.plane.enabled = !1;
	}
	get flip() {
		return this._flip;
	}
	set flip(e) {
		if (e === this._flip) return;
		this._flip = e;
		let t = this.plane?.normal.clone().multiplyScalar(-1);
		for (let e of this._edgeMeshes) e.position.add(t.clone().multiplyScalar(this._sectionOffset));
		this.plane.setFromNormalAndCoplanarPoint(t, this._point), this.plane.update();
	}
	dispose() {
		var e;
		this.clearMeshes(), (e = this.plane) == null || e.dispose(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	async set(e, t) {
		this.flip && t.multiplyScalar(-1), this.plane.setFromNormalAndCoplanarPoint(t, e), this._point.copy(e);
	}
	async update() {
		this.clearMeshes();
		let e = this.components.get(Q);
		this.plane.update();
		let t = [];
		for (let [, n] of e.list) t.push(this.generateModelSection(n));
		await Promise.all(t);
	}
	async generateModelSection(e) {
		if (!this.world) return;
		let t = this.plane.three.clone();
		t.constant -= .01;
		let { buffer: n } = await e.getSection(t), i = new r(), a = new W(n, 3, !1);
		i.setAttribute("position", a);
		let o = new B(i), s = new ve();
		s.fromLineSegments(o);
		let c = new be(s, this.edgeMaterial);
		c.frustumCulled = !1, this.world.scene.three.add(c), this._edgeMeshes.push(c), c.renderOrder = 3, o.geometry.dispose();
	}
	clearMeshes() {
		for (let e of this._edgeMeshes) e.removeFromParent(), e.geometry.dispose(), e.material = void 0;
		this._edgeMeshes = [];
	}
}, "uuid", "96b2c87e-d90b-4639-8257-8f01136fe324");
var bf = class e {
	constructor(e) {
		K(this, "onDisposed", new Z()), K(this, "marker", null), K(this, "_world", null), K(this, "_pointerMoveHandler", null), K(this, "mode", 0), K(this, "maxDistance", 1), K(this, "_pickerSize", 6), K(this, "_enabled", !1), K(this, "_components"), K(this, "stickyRadiusPx", 12), K(this, "_lastNdc", new O(2, 2)), K(this, "_lastClient", {
			x: 0,
			y: 0
		}), K(this, "_ndcWorld", new G()), K(this, "_cursorRafScheduled", !1), K(this, "_snapStickyClient", null), this._components = e;
	}
	set world(e) {
		e !== this._world && (this.detachCursorTracking(), this._world = e, e && this.attachCursorTracking());
	}
	get world() {
		return this._world;
	}
	get pickerSize() {
		return this._pickerSize;
	}
	set pickerSize(e) {
		this._pickerSize = e;
		let t = `${e}px`;
		this.marker && (this.marker.three.element.style.width = t, this.marker.three.element.style.height = t);
	}
	set enabled(e) {
		this._enabled = e, this.marker && (this.marker.visible = e), e && this.get();
	}
	get enabled() {
		return this._enabled;
	}
	dispose() {
		this.detachCursorTracking(), this.marker && this.marker.dispose();
	}
	async get(t) {
		let n = t?.world ?? this.world;
		if (!n) throw Error("GraphicVertexPicker: a world is need to get a casting result.");
		let r = await this._components.get(Wl).get(n).castRay({ snappingClasses: t?.snappingClasses });
		if (r) {
			if (!this.marker) {
				let e = document.createElement("div");
				this.marker = new sf(n, e);
			}
			if (this.marker.world !== n && (this.marker.world = n, this.marker.three.removeFromParent(), n.scene.three.add(this.marker.three)), this.marker.visible = !0, this.marker.three.position.copy(r.point), this._snapStickyClient = {
				x: this._lastClient.x,
				y: this._lastClient.y
			}, "snappingClass" in r && typeof r.snappingClass == "number" && (r.snappingClass === 0 || r.snappingClass === 1 || r.snappingClass === 2)) {
				let t = e.snappingStyles[r.snappingClass] ?? e.baseSnappingStyle;
				Object.assign(this.marker.three.element.style, t);
			} else Object.assign(this.marker.three.element.style, e.baseSnappingStyle);
			this.applyMarkerSize();
		} else this.marker && (this.marker.visible = !1, this._snapStickyClient = null);
		return r;
	}
	applyMarkerSize() {
		if (!this.marker) return;
		let e = `${this._pickerSize}px`;
		this.marker.three.element.style.width = e, this.marker.three.element.style.height = e;
	}
	attachCursorTracking() {
		var e;
		if (!((e = this._world) != null && e.renderer)) return;
		let t = this._world.renderer.three.domElement;
		this._pointerMoveHandler = (e) => {
			let n = t.getBoundingClientRect(), r = (e.clientX - n.left) / n.width * 2 - 1, i = -((e.clientY - n.top) / n.height) * 2 + 1;
			if (this._lastNdc.set(r, i), this._lastClient.x = e.clientX, this._lastClient.y = e.clientY, this._snapStickyClient) {
				let t = e.clientX - this._snapStickyClient.x, n = e.clientY - this._snapStickyClient.y;
				if (t * t + n * n <= this.stickyRadiusPx * this.stickyRadiusPx) return;
				this._snapStickyClient = null;
			}
			this._cursorRafScheduled || (this._cursorRafScheduled = !0, requestAnimationFrame(() => {
				var e;
				this._cursorRafScheduled = !1, this.syncMarkerToCursor(), (e = this._world?.renderer) == null || e.update();
			}));
		}, t.addEventListener("pointermove", this._pointerMoveHandler);
	}
	detachCursorTracking() {
		var e;
		!this._pointerMoveHandler || !((e = this._world) != null && e.renderer) || (this._world.renderer.three.domElement.removeEventListener("pointermove", this._pointerMoveHandler), this._pointerMoveHandler = null);
	}
	syncMarkerToCursor() {
		var e;
		if (!this.marker || !((e = this._world) != null && e.camera)) return;
		let t = this._world.camera.three;
		this._ndcWorld.set(this._lastNdc.x, this._lastNdc.y, .5).unproject(t), this.marker.three.position.copy(this._ndcWorld);
	}
};
K(bf, "baseSnappingStyle", {
	height: "6px",
	width: "6px",
	borderRadius: "100%",
	borderWidth: "2px",
	borderColor: "rgb(122, 75, 209)",
	borderStyle: "solid",
	zIndex: "-20"
}), K(bf, "snappingStyles", {
	[C.FACE]: { ...bf.baseSnappingStyle },
	[C.POINT]: {
		...bf.baseSnappingStyle,
		borderColor: "#e25959",
		borderRadius: "0"
	},
	[C.LINE]: {
		...bf.baseSnappingStyle,
		borderColor: "#2d2d2d",
		borderRadius: "0"
	}
});
var xf = bf;
function Sf() {
	let e = document.createElement("div");
	return e.style.backgroundColor = "blue", e.style.color = "white", e.style.padding = "6px", e.style.borderRadius = "6px", e.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.6)", e.style.zIndex = "-10", e;
}
function Cf(e = {}) {
	let { color: t = "white", size: n = "4px", border: r = "2px solid blue", background: i = "white" } = e, a = document.createElement("div");
	return a.style.backgroundColor = i, a.style.color = t, a.style.height = n, a.style.width = n, a.style.borderRadius = "50%", a.style.border = r, a.style.zIndex = "-20", a;
}
var wf = class extends z {
	constructor() {
		super(...arguments), K(this, "id", $t.create()), K(this, "_units", "m"), K(this, "_rounding", 2);
	}
	set units(e) {
		this._units = e;
	}
	get units() {
		return this._units;
	}
	set rounding(e) {
		this._rounding = e;
	}
	get rounding() {
		return this._rounding;
	}
	get value() {
		let e = this.distance();
		return qu.convertUnits(e, "m", this.units, this.rounding);
	}
}, Tf = class t {
	constructor(e, t, n, r = 2, i = "m") {
		K(this, "label"), K(this, "boundingBox", new U()), K(this, "world"), K(this, "_components"), K(this, "_units", "m"), K(this, "_rounding", 2), K(this, "startNormal", null), K(this, "line"), K(this, "rectangleComponentLines", []), K(this, "projectionComponentLines", []), K(this, "_visible", !0), K(this, "_root", new R()), K(this, "_endpoints", new Be()), K(this, "lineElement"), K(this, "rectangleDimensions", new Be()), K(this, "projectionDimensions", new Be()), K(this, "isSelected", !1), K(this, "_latestRectangularInversion", !1), K(this, "_endpointElement", Cf()), K(this, "_material"), K(this, "_componentsMaterial", new Te({
			depthTest: !1,
			gapSize: .2,
			dashSize: .2,
			transparent: !0,
			opacity: .5,
			color: 3026478
		})), K(this, "valueFormatter", null), this._components = e, this.world = t, this._material = n.lineMaterial, this._rounding = r, this._units = i, this.line = n.line, this.startNormal = n.startNormal ?? null, this.rectangleComponentLines = [new wf(), new wf()], this.updateRectangleComponents(), this.updateProjectionComponents(), this.lineElement = this.createLine(n), this._endpoints.onItemAdded.add((e) => {
			this._root.add(e.three);
			let t = this._endpoints.size === 1 ? this.line.start : this.line.end;
			e.three.position.copy(t);
		}), this._endpoints.onBeforeDelete.add((e) => e.dispose()), this.createEndpoints();
		for (let e of this._endpoints) e.three.element.style.borderColor = `#${n.lineMaterial.color.getHexString()}`;
		this.label = this.newText(), this.label.three.element.style.backgroundColor = `#${n.lineMaterial.color.getHexString()}`, this.label.three.renderOrder = 1, this._root.renderOrder = 2, this.world.scene.three.add(this._root), this.setupEvents();
	}
	set units(e) {
		for (let t of this.rectangleDimensions) t.units = e;
		for (let t of this.projectionDimensions) t.units = e;
		this._units = e, this.updateLabel();
	}
	get units() {
		return this._units;
	}
	set rounding(e) {
		for (let t of this.rectangleDimensions) t.rounding = e;
		for (let t of this.projectionDimensions) t.rounding = e;
		this._rounding = e, this.updateLabel();
	}
	get rounding() {
		return this._rounding;
	}
	get visible() {
		return this._visible;
	}
	set visible(e) {
		for (let t of this.rectangleDimensions) t.visible = e;
		for (let t of this.projectionDimensions) t.visible = e;
		this._visible = e, this.label.visible = e;
		for (let t of this._endpoints) t.visible = e;
		let [t, n] = this._endpoints, r = t.three, i = n.three, a = this.label.three;
		e ? (this.world.scene.three.add(this._root), this._root.add(a, r, i)) : (a.removeFromParent(), r.removeFromParent(), i.removeFromParent(), this._root.removeFromParent());
	}
	set end(e) {
		this.line.end = e;
		let t = this.lineElement.geometry.attributes.position;
		t.setXYZ(1, e.x, e.y, e.z), t.needsUpdate = !0, this.update();
	}
	set start(e) {
		this.line.start = e;
		let t = this.lineElement.geometry.attributes.position;
		t.setXYZ(0, e.x, e.y, e.z), t.needsUpdate = !0, this.update();
	}
	applyPlanesVisibility(e) {
		for (let t of this._endpoints) {
			if (!t.wasVisible) continue;
			let n = !1;
			for (let r of e) if (r.distanceToPoint(t.three.position) < 0) {
				n = !0;
				break;
			}
			t.three.visible = !n;
		}
		if (this.label.wasVisible) {
			let t = !1, n = this.label.three.position;
			for (let r of e) if (r.distanceToPoint(n) < 0) {
				t = !0;
				break;
			}
			this.label.three.visible = !t;
		}
		for (let t of this.rectangleDimensions) t.applyPlanesVisibility(e);
		for (let t of this.projectionDimensions) t.applyPlanesVisibility(e);
	}
	setupEvents() {
		this.rectangleDimensions.onBeforeDelete.add((e) => e.dispose()), this.projectionDimensions.onBeforeDelete.add((e) => e.dispose());
	}
	dispose() {
		this.visible = !1;
		let e = this._components.get(Zt);
		e.destroy(this._root), e.destroy(this.lineElement), this._endpoints.clear(), this.label.dispose(), this.boundingBox && e.destroy(this.boundingBox), this.rectangleDimensions.clear(), this.projectionDimensions.clear(), this._components = null;
	}
	createBoundingBox() {
		let e = new G();
		this.line.getCenter(e);
		let t = this.line.distance();
		this.boundingBox.geometry = new D(1, 1, t), this.boundingBox.position.copy(e), this.boundingBox.lookAt(this.line.end), this.boundingBox.visible = !1, this._root.add(this.boundingBox);
	}
	invertRectangularDimensions() {
		this.rectangleDimensions.size !== 0 && (this.rectangleDimensions.clear(), this._latestRectangularInversion = !this._latestRectangularInversion, this.updateRectangleComponents(this._latestRectangularInversion), this.displayRectangularDimensions());
	}
	displayRectangularDimensions() {
		this.rectangleDimensions.clear();
		for (let e of this.rectangleComponentLines) {
			let n = new t(this._components, this.world, {
				line: e,
				lineMaterial: this._componentsMaterial,
				endpointElement: this.endpointElement
			});
			n.lineElement.computeLineDistances(), this.rectangleDimensions.add(n);
		}
	}
	displayProjectionDimensions() {
		this.projectionDimensions.clear();
		for (let e of this.projectionComponentLines) {
			let n = new t(this._components, this.world, {
				line: e,
				lineMaterial: this._componentsMaterial,
				endpointElement: this.endpointElement
			});
			n.lineElement.computeLineDistances(), this.projectionDimensions.add(n);
		}
	}
	set endpointElement(e) {
		for (let t of this.rectangleDimensions) t.endpointElement = e;
		for (let t of this.projectionDimensions) t.endpointElement = e;
		this._endpointElement = e, this.createEndpoints();
	}
	get endpointElement() {
		return this._endpointElement;
	}
	createEndpoints() {
		this._endpoints.clear();
		let e = new sf(this.world, this._endpointElement), t = new sf(this.world, this._endpointElement.cloneNode(!0));
		this._endpoints.add(e, t);
	}
	updateProjectionComponents() {
		if (!this.startNormal) return;
		let e = new ne().setFromNormalAndCoplanarPoint(this.startNormal, this.line.start), t = new G();
		e.projectPoint(this.line.end, t);
		let [n] = this.projectionComponentLines;
		n || (n = new wf(), this.projectionComponentLines.push(n)), n.set(this.line.end, t), n.distance() < .01 && this.projectionComponentLines.shift();
		for (let e of this.projectionDimensions) e && e.update();
	}
	updateRectangleComponents(e = !1) {
		let t = e ? this.line.end : this.line.start, n = e ? this.line.start : this.line.end, r = new G();
		r.subVectors(n, t), Math.abs(n.y - t.y) >= .1 ? r.y = 0 : r.x = 0;
		let i = t.clone().add(r), [a, o] = this.rectangleComponentLines;
		a.set(i, t), o.set(i, n);
		for (let e of this.rectangleDimensions) e.update();
	}
	updateLabel() {
		this.label.three.element.textContent = this.getTextContent();
		let e = new G();
		this.line.getCenter(e), this.label.three.position.copy(e);
	}
	updateGeometry() {
		this.updateRectangleComponents(), this.updateProjectionComponents(), [...this._endpoints][0].three.position.copy(this.line.start), [...this._endpoints][1].three.position.copy(this.line.end), this.lineElement.geometry.computeBoundingSphere();
	}
	update() {
		this.updateGeometry(), this.updateLabel();
	}
	set material(e) {
		this._material.dispose(), this._material = e, this.lineElement.material = e;
	}
	get material() {
		return this._material;
	}
	createLine(t) {
		let n = new r();
		n.setFromPoints([t.line.start, t.line.end]);
		let i = new e(n, t.lineMaterial);
		return this._root.add(i), i;
	}
	newText() {
		let e = Sf();
		e.textContent = this.getTextContent();
		let t = new sf(this.world, e), n = new G();
		return this.line.getCenter(n), t.three.position.copy(n), this._root.add(t.three), t;
	}
	getTextContent(e = this.line.distance()) {
		let t = qu.convertUnits(e, "m", this._units, this.rounding);
		return `${sp.valueFormatter ? sp.valueFormatter(t) : t.toFixed(this.rounding)} ${this._units}`;
	}
	set color(e) {
		let t = `#${e.getHexString()}`;
		this.label.three.element.style.backgroundColor = t;
		for (let e of this._endpoints) e.three.element.style.borderColor = t;
		this._material.color.set(e);
	}
}, Ef = class e {
	constructor(e, t, n) {
		K(this, "id", $t.create()), K(this, "start", new G()), K(this, "vertex", new G()), K(this, "end", new G()), K(this, "_units", "deg"), K(this, "_rounding", 2), e && this.start.copy(e), t && this.vertex.copy(t), n && this.end.copy(n);
	}
	set units(e) {
		this._units = e;
	}
	get units() {
		return this._units;
	}
	set rounding(e) {
		this._rounding = e;
	}
	get rounding() {
		return this._rounding;
	}
	get rawValue() {
		let e = new G().subVectors(this.start, this.vertex), t = new G().subVectors(this.end, this.vertex);
		return e.lengthSq() === 0 || t.lengthSq() === 0 ? 0 : e.angleTo(t);
	}
	get value() {
		let e = this.rawValue;
		return this._units === "deg" ? Number(Pe.radToDeg(e).toFixed(this._rounding)) : Number(e.toFixed(this._rounding));
	}
	clone() {
		let t = new e(this.start.clone(), this.vertex.clone(), this.end.clone());
		return t.units = this.units, t.rounding = this.rounding, t;
	}
}, Df = class e {
	constructor(e) {
		K(this, "id", $t.create()), K(this, "points", new Be()), K(this, "tolerance", .005), K(this, "_plane", null), K(this, "_rounding", 2), K(this, "_units", "m2"), this.points.guard = (e) => {
			let t = [...this.points].some((t) => t.equals(e)), n = this.isPointInPlane(e);
			return !t && n;
		}, this.points.onItemAdded.add((e) => {
			if (this.plane) {
				let t = new G();
				this.plane.projectPoint(e, t), e.copy(t);
			}
			this.points.size < 3 || this.points.size === 3 && this.computePlane();
		}), this.points.onItemDeleted.add(() => {
			this.points.size >= 3 || (this._plane = null);
		}), this.points.onCleared.add(() => {
			this._plane = null;
		}), e && this.points.add(...e);
	}
	get plane() {
		return this._plane;
	}
	get _coordinateSystem() {
		if (!this.plane) return null;
		let e = this.plane.normal, t = new G(), n = new G();
		return Math.abs(e.x) > Math.abs(e.z) ? t.set(-e.y, e.x, 0).normalize() : t.set(0, -e.z, e.y).normalize(), n.crossVectors(e, t).normalize(), {
			normal: e.clone(),
			x: t.clone(),
			y: n.clone()
		};
	}
	get points2D() {
		if (!this.plane) if (this.points.size >= 3) this.computePlane();
		else return null;
		return [...this.points].map((e) => this.convertPointTo2D(e)).filter((e) => e !== null);
	}
	get center() {
		if (!this.plane || this.points.size < 3) return null;
		let e = this.points2D;
		if (!e || e.length === 0) return null;
		let t = e.reduce((e, t) => e.add(t), new O()).divideScalar(e.length);
		return this.convertPointTo3D(t);
	}
	get value() {
		return qu.convertUnits(this.rawValue, "m2", this.units, this.rounding);
	}
	get rawValue() {
		let e = this.points2D;
		return e ? Math.abs(ye.area(e)) : 0;
	}
	get boundingBox() {
		if (this.points.size === 0) return null;
		let e = new _();
		for (let t of this.points) e.expandByPoint(t);
		return e;
	}
	get perimeter() {
		let e = this.points2D;
		if (!e || e.length < 2) return 0;
		let t = 0;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = e[(n + 1) % e.length];
			t += r.distanceTo(i);
		}
		return t;
	}
	set rounding(e) {
		this._rounding = e;
	}
	get rounding() {
		return this._rounding;
	}
	set units(e) {
		this._units = e;
	}
	get units() {
		return this._units;
	}
	isPointInPlane(e) {
		if (!this.plane) return !0;
		let t = this.plane.distanceToPoint(e);
		return Math.abs(t) < this.tolerance;
	}
	clone() {
		let t = new e([...this.points]);
		return t.units = this.units, t.rounding = this.rounding, t.tolerance = this.tolerance, t;
	}
	computePlane() {
		let [e, t, n] = this.points;
		if (!(e && t && n)) return null;
		let r = new G().subVectors(t, e), i = new G().subVectors(n, e), a = new G().crossVectors(r, i).normalize();
		return this._plane = new ne().setFromNormalAndCoplanarPoint(a, e), this.plane;
	}
	convertPointTo2D(e) {
		if (!this.isPointInPlane(e) || !this.plane) return null;
		let t = this._coordinateSystem;
		if (!t) return null;
		let n = new G();
		return this.plane.projectPoint(e, n), new O(n.dot(t.x), n.dot(t.y));
	}
	convertPointTo3D(e) {
		if (!this.plane) return null;
		let t = this._coordinateSystem;
		if (!t) return null;
		let { x: n, y: r, normal: i } = t;
		return new G().addScaledVector(n, e.x).addScaledVector(r, e.y).addScaledVector(i, -this.plane.constant);
	}
}, Of = class e {
	constructor(e) {
		K(this, "_components"), K(this, "id", $t.create()), K(this, "onItemsChanged", new Z()), K(this, "_items", {}), K(this, "_units", "m3"), K(this, "_rounding", 2), this._components = e;
	}
	set items(e) {
		this._items = e, this.onItemsChanged.trigger();
	}
	get items() {
		return this._items;
	}
	set units(e) {
		this._units = e;
	}
	get units() {
		return this._units;
	}
	set rounding(e) {
		this._rounding = e;
	}
	get rounding() {
		return this._rounding;
	}
	async getRawValue() {
		return await this._components.get(qu).getItemsVolume(this.items);
	}
	async getValue() {
		let e = await this.getRawValue();
		return qu.convertUnits(e, "m3", this.units, this.rounding);
	}
	async getCenter() {
		return await this._components.get(dl).getCenter(this.items);
	}
	async getBox() {
		let e = this._components.get(dl);
		e.list.clear(), await e.addFromModelIdMap(this.items);
		let t = e.get();
		return e.list.clear(), t;
	}
	clone() {
		let t = new e(this._components);
		return t.items = ei.clone(this.items), t;
	}
};
function kf(e, t, n = 2) {
	let r = e.length, i = Af(e, 0, r, n, !0), a = [];
	if (!i || i.next === i.prev) return a;
	let o, s, c;
	if (e.length > 80 * n) {
		o = e[0], s = e[1];
		let t = o, i = s;
		for (let a = n; a < r; a += n) {
			let n = e[a], r = e[a + 1];
			n < o && (o = n), r < s && (s = r), n > t && (t = n), r > i && (i = r);
		}
		c = Math.max(t - o, i - s), c = c === 0 ? 0 : 32767 / c;
	}
	return Mf(i, a, n, o, s, c, 0), a;
}
function Af(e, t, n, r, i) {
	let a;
	if (i === tp(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = Qf(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = Qf(i / r | 0, e[i], e[i + 1], a);
	return a && Wf(a, a.next) && ($f(a), a = a.next), a;
}
function jf(e, t) {
	if (!e) return e;
	t ||= e;
	let n = e, r;
	do
		if (r = !1, !n.steiner && (Wf(n, n.next) || Uf(n.prev, n, n.next) === 0)) {
			if ($f(n), n = t = n.prev, n === n.next) break;
			r = !0;
		} else n = n.next;
	while (r || n !== t);
	return t;
}
function Mf(e, t, n, r, i, a, o) {
	if (!e) return;
	!o && a && Lf(e, r, i, a);
	let s = e;
	for (; e.prev !== e.next;) {
		let c = e.prev, l = e.next;
		if (a ? Pf(e, r, i, a) : Nf(e)) {
			t.push(c.i, e.i, l.i), $f(e), e = l.next, s = l.next;
			continue;
		}
		if (e = l, e === s) {
			o ? o === 1 ? (e = Ff(jf(e), t), Mf(e, t, n, r, i, a, 2)) : o === 2 && If(e, t, n, r, i, a) : Mf(jf(e), t, n, r, i, a, 1);
			break;
		}
	}
}
function Nf(e) {
	let t = e.prev, n = e, r = e.next;
	if (Uf(t, n, r) >= 0) return !1;
	let i = t.x, a = n.x, o = r.x, s = t.y, c = n.y, l = r.y, u = Math.min(i, a, o), d = Math.min(s, c, l), f = Math.max(i, a, o), p = Math.max(s, c, l), m = r.next;
	for (; m !== t;) {
		if (m.x >= u && m.x <= f && m.y >= d && m.y <= p && Vf(i, s, a, c, o, l, m.x, m.y) && Uf(m.prev, m, m.next) >= 0) return !1;
		m = m.next;
	}
	return !0;
}
function Pf(e, t, n, r) {
	let i = e.prev, a = e, o = e.next;
	if (Uf(i, a, o) >= 0) return !1;
	let s = i.x, c = a.x, l = o.x, u = i.y, d = a.y, f = o.y, p = Math.min(s, c, l), m = Math.min(u, d, f), h = Math.max(s, c, l), g = Math.max(u, d, f), _ = zf(p, m, t, n, r), v = zf(h, g, t, n, r), y = e.prevZ, b = e.nextZ;
	for (; y && y.z >= _ && b && b.z <= v;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && Vf(s, u, c, d, l, f, y.x, y.y) && Uf(y.prev, y, y.next) >= 0 || (y = y.prevZ, b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && Vf(s, u, c, d, l, f, b.x, b.y) && Uf(b.prev, b, b.next) >= 0)) return !1;
		b = b.nextZ;
	}
	for (; y && y.z >= _;) {
		if (y.x >= p && y.x <= h && y.y >= m && y.y <= g && y !== i && y !== o && Vf(s, u, c, d, l, f, y.x, y.y) && Uf(y.prev, y, y.next) >= 0) return !1;
		y = y.prevZ;
	}
	for (; b && b.z <= v;) {
		if (b.x >= p && b.x <= h && b.y >= m && b.y <= g && b !== i && b !== o && Vf(s, u, c, d, l, f, b.x, b.y) && Uf(b.prev, b, b.next) >= 0) return !1;
		b = b.nextZ;
	}
	return !0;
}
function Ff(e, t) {
	let n = e;
	do {
		let r = n.prev, i = n.next.next;
		!Wf(r, i) && Gf(r, n, n.next, i) && Yf(r, i) && Yf(i, r) && (t.push(r.i, n.i, i.i), $f(n), $f(n.next), n = e = i), n = n.next;
	} while (n !== e);
	return jf(n);
}
function If(e, t, n, r, i, a) {
	let o = e;
	do {
		let e = o.next.next;
		for (; e !== o.prev;) {
			if (o.i !== e.i && Hf(o, e)) {
				let s = Zf(o, e);
				o = jf(o, o.next), s = jf(s, s.next), Mf(o, t, n, r, i, a, 0), Mf(s, t, n, r, i, a, 0);
				return;
			}
			e = e.next;
		}
		o = o.next;
	} while (o !== e);
}
function Lf(e, t, n, r) {
	let i = e;
	do
		i.z === 0 && (i.z = zf(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
	while (i !== e);
	i.prevZ.nextZ = null, i.prevZ = null, Rf(i);
}
function Rf(e) {
	let t, n = 1;
	do {
		let r = e, i;
		e = null;
		let a = null;
		for (t = 0; r;) {
			t++;
			let o = r, s = 0;
			for (let e = 0; e < n && (s++, o = o.nextZ, o); e++);
			let c = n;
			for (; s > 0 || c > 0 && o;) s !== 0 && (c === 0 || !o || r.z <= o.z) ? (i = r, r = r.nextZ, s--) : (i = o, o = o.nextZ, c--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
			r = o;
		}
		a.nextZ = null, n *= 2;
	} while (t > 1);
	return e;
}
function zf(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function Bf(e, t, n, r, i, a, o, s) {
	return (i - o) * (t - s) >= (e - o) * (a - s) && (e - o) * (r - s) >= (n - o) * (t - s) && (n - o) * (a - s) >= (i - o) * (r - s);
}
function Vf(e, t, n, r, i, a, o, s) {
	return !(e === o && t === s) && Bf(e, t, n, r, i, a, o, s);
}
function Hf(e, t) {
	return e.next.i !== t.i && e.prev.i !== t.i && !Jf(e, t) && (Yf(e, t) && Yf(t, e) && Xf(e, t) && (Uf(e.prev, e, t.prev) || Uf(e, t.prev, t)) || Wf(e, t) && Uf(e.prev, e, e.next) > 0 && Uf(t.prev, t, t.next) > 0);
}
function Uf(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function Wf(e, t) {
	return e.x === t.x && e.y === t.y;
}
function Gf(e, t, n, r) {
	let i = qf(Uf(e, t, n)), a = qf(Uf(e, t, r)), o = qf(Uf(n, r, e)), s = qf(Uf(n, r, t));
	return !!(i !== a && o !== s || i === 0 && Kf(e, n, t) || a === 0 && Kf(e, r, t) || o === 0 && Kf(n, e, r) || s === 0 && Kf(n, t, r));
}
function Kf(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function qf(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Jf(e, t) {
	let n = e;
	do {
		if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Gf(n, n.next, e, t)) return !0;
		n = n.next;
	} while (n !== e);
	return !1;
}
function Yf(e, t) {
	return Uf(e.prev, e, e.next) < 0 ? Uf(e, t, e.next) >= 0 && Uf(e, e.prev, t) >= 0 : Uf(e, t, e.prev) < 0 || Uf(e, e.next, t) < 0;
}
function Xf(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do
		n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
	while (n !== e);
	return r;
}
function Zf(e, t) {
	let n = ep(e.i, e.x, e.y), r = ep(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function Qf(e, t, n, r) {
	let i = ep(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function $f(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function ep(e, t, n) {
	return {
		i: e,
		x: t,
		y: n,
		prev: null,
		next: null,
		z: 0,
		prevZ: null,
		nextZ: null,
		steiner: !1
	};
}
function tp(e, t, n, r) {
	let i = 0;
	for (let a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
	return i;
}
var np = class extends sf {
	constructor(e) {
		let t = document.createElement("div");
		t.style.backgroundColor = "blue", t.style.color = "white", t.style.padding = "6px", t.style.borderRadius = "6px", t.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.6)", t.style.zIndex = "-10", super(e, t), K(this, "_value", 0), K(this, "_units", "m2"), K(this, "_worldUnits", "m2"), K(this, "_color", new N()), K(this, "_textColor", new N()), K(this, "_rounding", 2), this.three.renderOrder = 1, t.textContent = this.formattedValue;
	}
	set value(e) {
		this._value = e, this.three.element.textContent = this.formattedValue;
	}
	get value() {
		return this._value;
	}
	set units(e) {
		this._units = e, this.three.element.textContent = this.formattedValue;
	}
	get units() {
		return this._units;
	}
	set worldUnits(e) {
		this._worldUnits = e, this.three.element.textContent = this.formattedValue;
	}
	get worldUnits() {
		return this._worldUnits;
	}
	set color(e) {
		this._color = e;
		let t = `#${e.getHexString()}`;
		this.three.element.style.backgroundColor = t;
	}
	get color() {
		return this._color;
	}
	set textColor(e) {
		this._textColor = e;
		let t = `#${e.getHexString()}`;
		this.three.element.style.color = t;
	}
	get textColor() {
		return this._textColor;
	}
	set rounding(e) {
		this._rounding = e, this.three.element.textContent = this.formattedValue;
	}
	get rounding() {
		return this._rounding;
	}
	get formattedValue() {
		let e = qu.convertUnits(this.value, this.worldUnits, this.units, this.rounding);
		return `${sp.valueFormatter ? sp.valueFormatter(e) : e.toFixed(this.rounding)} ${this.units}`;
	}
}, rp = class {
	constructor(e, t, n = new Df()) {
		K(this, "_root", new R()), K(this, "_components"), K(this, "_material", new fe({
			color: "red",
			transparent: !0,
			opacity: .5,
			side: 2,
			depthTest: !1
		})), K(this, "_visible", !0), K(this, "_color", new N()), K(this, "label"), K(this, "three", new U()), K(this, "world"), K(this, "area"), K(this, "_triggerUpdate", () => this.update()), this._components = e, this.world = t, this.area = n, this.world.scene.three.add(this.three), this.label = new np(t), this._root.renderOrder = 2, this.visible = !0, this.update(), n.points.onItemAdded.add(this._triggerUpdate), n.points.onItemDeleted.add(this._triggerUpdate), n.points.onCleared.add(this._triggerUpdate);
	}
	set material(e) {
		this._material.dispose(), this._material = e, this.three.material = e;
	}
	get material() {
		return this._material;
	}
	set visible(e) {
		this._visible = e, this.label.visible = e;
		let t = this.label.three;
		e ? (this._root.add(t, this.three), this.world.scene.three.add(this._root)) : (t.removeFromParent(), this._root.removeFromParent());
	}
	get visible() {
		return this._visible;
	}
	set rounding(e) {
		this.label.rounding = e;
	}
	get rounding() {
		return this.label.rounding;
	}
	set units(e) {
		this.label.units = e;
	}
	get units() {
		return this.label.units;
	}
	set color(e) {
		this._color = e, this.label.color = e, this._material.color.set(e);
	}
	get color() {
		return this._color;
	}
	applyPlanesVisibility(e) {
		if (!this.label.wasVisible) return;
		let t = !1, n = this.area.center;
		if (n) {
			for (let r of e) if (r.distanceToPoint(n) < 0) {
				t = !0;
				break;
			}
		}
		this.label.three.visible = !t;
	}
	updateMesh() {
		if (this.area.points.size < 3) return;
		let e = this.area.points2D;
		if (!e || e.length < 3) return;
		let t = kf(e.flatMap((e) => [e.x, e.y])), n = [];
		for (let t of e) {
			let e = this.area.convertPointTo3D(t);
			e && n.push(e.x, e.y, e.z);
		}
		this.three.geometry && this.three.geometry.dispose();
		let i = new r();
		i.setAttribute("position", new h(n, 3)), i.setIndex(t), this.three.geometry = i, this.three.material = this.material;
	}
	update() {
		if (this.updateMesh(), this.area.rawValue === 0) this.label.visible = !1;
		else {
			this.label.value = this.area.rawValue, this.label.visible = !0;
			let e = this.area.center;
			e && this.label.three.position.copy(e);
		}
	}
	dispose() {
		this.label.dispose(), this._components.get(Zt).destroy(this._root, !0, !0), this.area.points.clear();
	}
}, ip = /* @__PURE__ */ ((e) => (e.MOUSE_MOVE = "mousemove", e.MOUSE_STOP = "mousestop", e))(ip || {}), ap = {
	length: "m",
	area: "m2",
	volume: "m3",
	angle: "deg"
}, op = class {
	constructor(e, t, n = new Of(e)) {
		K(this, "_components"), K(this, "_material", new fe({
			color: "red",
			transparent: !0,
			opacity: .75,
			side: 2,
			depthTest: !1
		})), K(this, "_visible", !0), K(this, "_color", new N()), K(this, "label"), K(this, "world"), K(this, "volume"), K(this, "meshes", []), this._components = e, this.world = t, this.volume = n, this.label = new np(t), this.visible = !0, this.update(), this.volume.onItemsChanged.add(() => this.update());
	}
	get materialArray() {
		return [this._material];
	}
	set material(e) {
		this._material.dispose(), this._material = e;
		for (let t of this.meshes) t.material = [e];
	}
	get material() {
		return this._material;
	}
	set visible(e) {
		this._visible = e, this.label.visible = e;
		for (let t of this.meshes) e ? this.world.scene.three.add(t) : t.removeFromParent();
	}
	get visible() {
		return this._visible;
	}
	set rounding(e) {
		this.label.rounding = e;
	}
	get rounding() {
		return this.label.rounding;
	}
	set units(e) {
		this.label.units = e;
	}
	get units() {
		return this.label.units;
	}
	set color(e) {
		this._color = e, this.label.color = e, this._material.color.set(e);
	}
	get color() {
		return this._color;
	}
	applyPlanesVisibility(e) {
		if (!this.label.wasVisible) return;
		let t = !1;
		for (let n of this.meshes) {
			for (let r of e) if (r.distanceToPoint(n.position) < 0) {
				t = !0;
				break;
			}
			this.label.three.visible = !t;
		}
	}
	async updateMesh() {
		this.cleanMeshes();
		let e = this._components.get(Q);
		if (e.initialized) for (let [t, n] of Object.entries(this.volume.items)) {
			let r = e.list.get(t);
			if (!r || !n || n.size === 0) continue;
			let i;
			try {
				i = await r.getItemDrawChunks(n);
			} catch {
				continue;
			}
			if (!(!i || i.length === 0)) for (let e of i) {
				let t = r.tiles.get(e.tileId);
				if (!t) continue;
				let n = this.buildProxy(t, e.position, e.size);
				this.world.scene.three.add(n), this.meshes.push(n);
			}
		}
	}
	buildProxy(e, t, n) {
		let i = e.geometry, a = new r();
		a.attributes = i.attributes, i.index && a.setIndex(i.index), a.boundingBox = i.boundingBox, a.boundingSphere = i.boundingSphere;
		let o = Math.min(t.length, n.length);
		for (let e = 0; e < o; e++) {
			let r = t[e], i = n[e], o = i === 4294967295 ? Infinity : i;
			a.addGroup(r, o, 0);
		}
		let s = new U(a, this.materialArray);
		return s.matrixAutoUpdate = !1, s.matrixWorldAutoUpdate = !1, s.frustumCulled = !1, s.matrixWorld.copy(e.matrixWorld), s.userData.__measureVolumeSource = e, s;
	}
	async update() {
		await this.updateMesh();
		let e = await this.volume.getRawValue();
		this.label.visible = e !== 0, this.label.value = e;
		let t = await this.volume.getCenter();
		t && this.label.three.position.copy(t);
	}
	cleanMeshes() {
		for (let e of this.meshes) e.removeFromParent();
		this.meshes = [];
	}
	dispose() {
		this.label.dispose(), this.cleanMeshes(), this._material.dispose(), this.volume.items = {};
	}
}, sp = class extends qt {
	constructor(e, t) {
		super(e), K(this, "list", new Be()), K(this, "onDisposed", new Z()), K(this, "snappings", [
			C.LINE,
			C.POINT,
			C.FACE
		]), K(this, "lines", new Be()), K(this, "fills", new Be()), K(this, "labels", new Be()), K(this, "volumes", new Be()), K(this, "delay", 300), K(this, "pickMode", ip.MOUSE_MOVE), K(this, "_world", null), K(this, "measureType"), K(this, "onPointerStop", new Z()), K(this, "onPointerMove", new Z()), K(this, "onStateChanged", new Z()), K(this, "lastPick", null), K(this, "pointerStopTimeout", null), K(this, "_markerRafScheduled", !1), K(this, "_cameraInteracting", !1), K(this, "cameraStopDelay", 80), K(this, "_onCtrlStart", null), K(this, "_onCtrlEnd", null), K(this, "_onWheel", null), K(this, "_wheelIdleTimer", null), K(this, "_pointerLeaveHandler", null), K(this, "onMove", () => {
			var e;
			this.enabled && (this.pointerStopTimeout !== null && clearTimeout(this.pointerStopTimeout), this.pointerStopTimeout = window.setTimeout(() => {
				this.onPointerStop.trigger(), this.pickMode === ip.MOUSE_STOP && this.scheduleMarkerUpdate();
			}, this.delay), this.pickMode === ip.MOUSE_MOVE ? this.scheduleMarkerUpdate() : this._vertexPicker.marker && (this._vertexPicker.marker.visible = !1, (e = this._world?.renderer) == null || e.update()));
		}), K(this, "onKeydown", (e) => {
			this.enabled && e.key === "Escape" && this.cancelCreation();
		}), K(this, "onEnabledChange", new Z()), K(this, "_enabled", !1), K(this, "onVisibilityChange", new Z()), K(this, "_visible", !0), K(this, "_units"), K(this, "_rounding", 2), K(this, "_linesEndpointElement", Sf()), K(this, "_linesMaterial", new Ie({
			color: "#0000FF",
			depthTest: !1
		})), K(this, "_fillsMaterial", new fe({
			color: 2392594,
			side: 2,
			transparent: !0,
			opacity: .3,
			depthTest: !1
		})), K(this, "_volumesMaterial", new fe({
			color: 2392594,
			side: 2,
			transparent: !0,
			opacity: .3,
			depthTest: !1
		})), K(this, "_color", new N()), K(this, "_vertexPicker", new xf(this.components)), K(this, "create", (e) => {}), K(this, "endCreation", (e) => {}), K(this, "cancelCreation", () => {}), K(this, "delete", (e) => {}), this.measureType = t, this._units = ap[this.measureType], this.lines.onBeforeDelete.add((e) => e.dispose()), this.fills.onBeforeDelete.add((e) => e.dispose()), this.labels.onBeforeDelete.add((e) => e.dispose()), this.volumes.onBeforeDelete.add((e) => e.dispose()), this.list.onCleared.add(() => {
			this.lines.clear(), this.fills.clear(), this.labels.clear(), this.volumes.clear();
		});
	}
	set world(e) {
		this._world = e, this._vertexPicker.world = e;
	}
	get world() {
		return this._world;
	}
	get unitsList() {
		let e = [];
		return e = this.measureType === "length" ? [
			"mm",
			"cm",
			"m",
			"km"
		] : this.measureType === "area" ? [
			"mm2",
			"cm2",
			"m2",
			"km2"
		] : this.measureType === "angle" ? ["deg", "rad"] : [
			"mm3",
			"cm3",
			"m3",
			"km3"
		], e;
	}
	scheduleMarkerUpdate() {
		this._markerRafScheduled || (this._markerRafScheduled = !0, requestAnimationFrame(async () => {
			var e;
			try {
				if (!this.enabled || this._cameraInteracting) return;
				try {
					this.lastPick = await this._vertexPicker.get({ snappingClasses: this.snappings });
				} catch {
					this.lastPick = null;
				}
				(e = this._world?.renderer) == null || e.update(), this.onPointerMove.trigger();
			} finally {
				this._markerRafScheduled = !1;
			}
		}));
	}
	setEvents(e) {
		if (!this.world) throw Error("Measurement: you must specify a world first!");
		if (this.world.isDisposing) return;
		if (!this.world.renderer) throw Error("Measurement: the world needs a renderer!");
		let t = this.world.renderer.three.domElement.parentElement;
		if (!t) return;
		t.removeEventListener("pointermove", this.onMove), window.removeEventListener("keydown", this.onKeydown), this._pointerLeaveHandler &&= (t.removeEventListener("pointerleave", this._pointerLeaveHandler), null);
		let n = this.world.camera?.controls;
		if (n && this._onCtrlStart && n.removeEventListener("controlstart", this._onCtrlStart), n && this._onCtrlEnd && n.removeEventListener("controlend", this._onCtrlEnd), this._onWheel && t.removeEventListener("wheel", this._onWheel), this._onCtrlStart = null, this._onCtrlEnd = null, this._onWheel = null, this._wheelIdleTimer !== null && (clearTimeout(this._wheelIdleTimer), this._wheelIdleTimer = null), this._cameraInteracting = !1, e) {
			t.addEventListener("pointermove", this.onMove), window.addEventListener("keydown", this.onKeydown), this._pointerLeaveHandler = () => {
				var e;
				this._vertexPicker.marker && (this._vertexPicker.marker.visible = !1), (e = this._world?.renderer) == null || e.update();
			}, t.addEventListener("pointerleave", this._pointerLeaveHandler);
			let e = () => {
				var e;
				(e = this._vertexPicker.marker) != null && e.visible && (this._vertexPicker.marker.visible = !1);
			};
			n && (this._onCtrlStart = () => {
				this._cameraInteracting = !0, e();
			}, this._onCtrlEnd = () => {
				this._cameraInteracting = !1;
			}, n.addEventListener("controlstart", this._onCtrlStart), n.addEventListener("controlend", this._onCtrlEnd)), this._onWheel = () => {
				if (this._cameraInteracting = !0, e(), this._wheelIdleTimer !== null && clearTimeout(this._wheelIdleTimer), this.cameraStopDelay <= 0) {
					this._wheelIdleTimer = null, this._cameraInteracting = !1;
					return;
				}
				this._wheelIdleTimer = window.setTimeout(() => {
					this._wheelIdleTimer = null, this._cameraInteracting = !1;
				}, this.cameraStopDelay);
			}, t.addEventListener("wheel", this._onWheel, { passive: !0 });
		}
	}
	set enabled(e) {
		this._enabled = e, this._vertexPicker.enabled = e, this.setEvents(e), this.cancelCreation(), this.onEnabledChange.trigger(e), this.onStateChanged.trigger(["enabled"]);
	}
	get enabled() {
		return this._enabled;
	}
	set visible(e) {
		this._visible = e;
		for (let t of this.lines) t.visible = e;
		for (let t of this.fills) t.visible = e;
		for (let t of this.volumes) t.visible = e;
		this.onVisibilityChange.trigger(e), this.onStateChanged.trigger(["visibility"]);
	}
	get visible() {
		return this._visible;
	}
	set units(e) {
		this._units = e;
		let t;
		t = e === "deg" || e === "rad" ? "angle" : e.endsWith("2") ? "area" : e.endsWith("3") ? "volume" : "length";
		for (let t of this.list) (t instanceof wf || t instanceof Df || t instanceof Of || t instanceof Ef) && (t.units = e);
		if (t === "length") for (let t of this.lines) t.units = e;
		else if (t === "area") for (let t of this.fills) t.units = e;
		else if (t === "volume") for (let t of this.volumes) t.units = e;
		this.onStateChanged.trigger(["units"]);
	}
	get units() {
		return this._units;
	}
	set rounding(e) {
		this._rounding = e;
		for (let t of this.list) "rounding" in t && typeof t.rounding == "number" && (t.rounding = e);
		for (let t of this.lines) t.rounding = e;
		for (let t of this.fills) t.rounding = e;
		for (let t of this.volumes) t.rounding = e;
		this.onStateChanged.trigger(["rounding"]);
	}
	get rounding() {
		return this._rounding;
	}
	set linesEndpointElement(e) {
		this._linesEndpointElement = e;
		for (let t of this.lines) t.endpointElement = e;
	}
	get linesEndpointElement() {
		return this._linesEndpointElement;
	}
	set linesMaterial(e) {
		this._linesMaterial.dispose(), this._linesMaterial = e;
		for (let t of this.lines) t.material = e;
	}
	get linesMaterial() {
		return this._linesMaterial;
	}
	set fillsMaterial(e) {
		this._fillsMaterial.dispose(), this._fillsMaterial = e;
		for (let t of this.fills) t.material = e;
	}
	get fillsMaterial() {
		return this._fillsMaterial;
	}
	set volumesMaterial(e) {
		this._volumesMaterial.dispose(), this._volumesMaterial = e;
		for (let t of this.volumes) t.material = e;
	}
	get volumesMaterial() {
		return this._volumesMaterial;
	}
	set color(e) {
		this._color = e, this._linesMaterial.color.set(e), this._fillsMaterial.color.set(e), this._volumesMaterial.color.set(e);
		for (let t of this.lines) t.color = e;
		for (let t of this.fills) t.color = e;
		for (let t of this.volumes) t.color = e;
		this.onStateChanged.trigger(["color"]);
	}
	get color() {
		return this._color;
	}
	get pickerMode() {
		return this._vertexPicker.mode;
	}
	set pickerMode(e) {
		this._vertexPicker.mode = e;
	}
	get snapDistance() {
		return this._vertexPicker.maxDistance;
	}
	set snapDistance(e) {
		this._vertexPicker.maxDistance = e;
	}
	get pickerSize() {
		return this._vertexPicker.pickerSize;
	}
	set pickerSize(e) {
		this._vertexPicker.pickerSize = e;
	}
	dispose() {
		this._vertexPicker.dispose(), this.list.clear(), this.linesMaterial.dispose(), this.fillsMaterial.dispose(), this.volumesMaterial.dispose(), this.onDisposed.trigger();
	}
	applyPlanesVisibility(e) {
		for (let t of this.lines) t.applyPlanesVisibility(e);
		for (let t of this.fills) t.applyPlanesVisibility(e);
		for (let t of this.volumes) t.applyPlanesVisibility(e);
	}
	createLineElement(e, t = null) {
		if (!this.world) throw Error("Measurement: world is need!");
		return new Tf(this.components, this.world, {
			line: e,
			startNormal: t ?? void 0,
			lineMaterial: this.linesMaterial,
			endpointElement: this.linesEndpointElement
		}, this.rounding, this.units);
	}
	createFillElement(e) {
		if (!this.world) throw Error("Measurement: world is need!");
		let t = new rp(this.components, this.world, e);
		return t.rounding = this.rounding, (this.units.endsWith("2") ? "area" : void 0) === "area" && (t.units = this.units), t;
	}
	createVolumeElement(e) {
		if (!this.world) throw Error("Measurement: world is need!");
		let t = new op(this.components, this.world, e);
		return t.rounding = this.rounding, (this.units.endsWith("3") ? "volume" : void 0) === "volume" && (t.units = this.units), t;
	}
	addLineElementsFromPoints(e) {
		for (let t = 0; t < e.length; t++) {
			let n = e[t], r = e[(t + 1) % e.length], i = new wf(n, r), a = this.createLineElement(i);
			a.label.visible = !1, this.lines.add(a);
		}
	}
	getLineBoxes() {
		let e = [];
		for (let t of this.lines) e.push(t.boundingBox);
		return e;
	}
	getFillBoxes() {
		let e = [];
		for (let t of this.fills) e.push(t.three);
		return e;
	}
	async getVolumeBoxes() {
		let e = [];
		for (let t of this.volumes) e.push(t.meshes);
		return e;
	}
};
K(sp, "valueFormatter", null);
var cp = 32, lp = .3, up = 1.4;
K(class t extends sp {
	constructor(e) {
		super(e, "angle"), K(this, "_visuals", /* @__PURE__ */ new Map()), K(this, "_temp", {
			clickCount: 0,
			angle: new Ef()
		}), K(this, "modes", ["free"]), K(this, "_mode", "free"), K(this, "create", async () => {
			if (!this.enabled) return;
			let e = await this._vertexPicker.get({ snappingClasses: this.snappings });
			if (!(e != null && e.point)) return;
			let t = e.point;
			this._temp.clickCount === 0 ? (this._temp.angle.start.copy(t), this._temp.clickCount = 1, this.initFirstPreview(t)) : this._temp.clickCount === 1 ? (this._temp.angle.vertex.copy(t), this._temp.clickCount = 2, this.upgradeToAnglePreview(t)) : this._temp.clickCount === 2 && (this._temp.angle.end.copy(t), this.endCreation());
		}), K(this, "endCreation", () => {
			this.enabled && this._temp.clickCount === 2 && (this.disposeAllPreview(), this.list.add(this._temp.angle.clone()), this._temp.clickCount = 0, this._temp.angle = new Ef());
		}), K(this, "cancelCreation", () => {
			this.disposeAllPreview(), this._temp.clickCount = 0, this._temp.angle = new Ef();
		}), K(this, "delete", () => {
			if (!this.enabled || this.list.size === 0 || !this.world) return;
			let e = [];
			for (let [, t] of this._visuals) e.push(t.boundingBox);
			let t = this.components.get(Wl).get(this.world).castRayToObjects(e);
			if (t) {
				for (let [e, n] of this._visuals) if (n.boundingBox === t.object) {
					this.list.delete(e);
					break;
				}
			}
		}), e.add(t.uuid, this), this.initHandlers();
	}
	get mode() {
		return this._mode;
	}
	set mode(e) {
		this._mode = e, this.cancelCreation(), this.onStateChanged.trigger(["mode"]);
	}
	initHandlers() {
		this.list.onItemAdded.add((e) => {
			let t = this.createAngleVisual(e);
			this._visuals.set(e, t);
		}), this.list.onBeforeDelete.add((e) => {
			let t = this._visuals.get(e);
			t && (this.disposeVisual(t), this._visuals.delete(e));
		}), this.list.onCleared.add(() => {
			for (let [, e] of this._visuals) this.disposeVisual(e);
			this._visuals.clear();
		}), this.onStateChanged.add((e) => {
			if (e.includes("color")) {
				let e = `#${this.linesMaterial.color.getHexString()}`;
				for (let [, t] of this._visuals) {
					t.label.three.element.style.backgroundColor = e;
					for (let n of t.endpoints) n.three.element.style.border = `2px solid ${e}`;
				}
			}
			if (e.includes("units") || e.includes("rounding")) for (let [e, t] of this._visuals) t.label.three.element.textContent = this.formatAngle(e);
		}), this.onPointerMove.add(() => this.updatePreview()), this.onVisibilityChange.add((e) => {
			for (let [, t] of this._visuals) {
				t.group.visible = e, t.label.visible = e;
				for (let n of t.endpoints) n.visible = e;
			}
		});
	}
	dispose() {
		for (let [, e] of this._visuals) this.disposeVisual(e);
		this._visuals.clear(), this.disposeAllPreview(), super.dispose();
	}
	initFirstPreview(t) {
		if (!this.world) return;
		let n = new R();
		n.renderOrder = 2;
		let i = new e(new r().setFromPoints([t, t]), this.linesMaterial);
		n.add(i);
		let a = this.createEndpointMark(n, t);
		this.world.scene.three.add(n), this._temp.previewGroup = n, this._temp.previewLine = i, this._temp.previewEndpoint = a;
	}
	upgradeToAnglePreview(e) {
		this.world && (this.disposeFirstPreview(), this._temp.visual = this.createAngleVisual(this._temp.angle));
	}
	updatePreview() {
		if (!this.world) return;
		let e = this.lastPick;
		if (!(e != null && e.point)) return;
		let t = e.point;
		if (this._temp.clickCount === 1 && this._temp.previewLine) {
			let e = this._temp.previewLine.geometry.attributes.position;
			e.setXYZ(1, t.x, t.y, t.z), e.needsUpdate = !0;
		} else this._temp.clickCount === 2 && this._temp.visual && (this._temp.angle.end.copy(t), this.updateAngleVisual(this._temp.visual, this._temp.angle));
	}
	disposeFirstPreview() {
		this._temp.previewEndpoint && (this._temp.previewEndpoint.dispose(), this._temp.previewEndpoint = void 0), this._temp.previewLine && (this._temp.previewLine.geometry.dispose(), this._temp.previewLine = void 0), this._temp.previewGroup && (this._temp.previewGroup.removeFromParent(), this._temp.previewGroup = void 0);
	}
	disposeAllPreview() {
		this.disposeFirstPreview(), this._temp.visual && (this.disposeVisual(this._temp.visual), this._temp.visual = void 0);
	}
	createAngleVisual(n) {
		if (!this.world) throw Error("AngleMeasurement: world is needed!");
		let i = new R();
		i.renderOrder = 2;
		let a = this.linesMaterial, o = `#${a.color.getHexString()}`, s = new e(new r().setFromPoints([n.vertex, n.start]), a), c = new e(new r().setFromPoints([n.vertex, n.end]), a), l = new e(t.createArcGeometry(n.vertex, n.start, n.end), a);
		i.add(s, c, l);
		let u = [
			this.createEndpointMark(i, n.start, o),
			this.createEndpointMark(i, n.vertex, o),
			this.createEndpointMark(i, n.end, o)
		], d = Sf();
		d.textContent = this.formatAngle(n), d.style.backgroundColor = o;
		let f = new sf(this.world, d, i);
		f.three.renderOrder = 1;
		let p = t.getArcMidpoint(n.vertex, n.start, n.end);
		f.three.position.copy(p);
		let m = this.createBoundingBox(n);
		return m.visible = !1, i.add(m), this.world.scene.three.add(i), {
			group: i,
			line1: s,
			line2: c,
			arc: l,
			label: f,
			endpoints: u,
			boundingBox: m
		};
	}
	updateAngleVisual(e, n) {
		let r = e.line1.geometry.attributes.position;
		r.setXYZ(0, n.vertex.x, n.vertex.y, n.vertex.z), r.setXYZ(1, n.start.x, n.start.y, n.start.z), r.needsUpdate = !0;
		let i = e.line2.geometry.attributes.position;
		i.setXYZ(0, n.vertex.x, n.vertex.y, n.vertex.z), i.setXYZ(1, n.end.x, n.end.y, n.end.z), i.needsUpdate = !0, e.arc.geometry.dispose(), e.arc.geometry = t.createArcGeometry(n.vertex, n.start, n.end), e.endpoints[0].three.position.copy(n.start), e.endpoints[1].three.position.copy(n.vertex), e.endpoints[2].three.position.copy(n.end), e.label.three.element.textContent = this.formatAngle(n);
		let a = t.getArcMidpoint(n.vertex, n.start, n.end);
		e.label.three.position.copy(a), this.updateBoundingBox(e.boundingBox, n);
	}
	disposeVisual(e) {
		e.label.dispose();
		for (let t of e.endpoints) t.dispose();
		e.line1.geometry.dispose(), e.line2.geometry.dispose(), e.arc.geometry.dispose(), e.boundingBox.geometry.dispose(), e.boundingBox.material.dispose(), e.group.removeFromParent();
	}
	createEndpointMark(e, t, n) {
		if (!this.world) throw Error("AngleMeasurement: world is needed!");
		let r = Cf({ border: `2px solid ${n ?? `#${this.linesMaterial.color.getHexString()}`}` }), i = new sf(this.world, r, e);
		return i.three.position.copy(t), i;
	}
	formatAngle(e) {
		let t = e.value;
		return `${sp.valueFormatter ? sp.valueFormatter(t) : t.toFixed(this.rounding)}${this.units === "deg" ? "°" : " rad"}`;
	}
	createBoundingBox(e) {
		let t = new G().add(e.start).add(e.vertex).add(e.end).divideScalar(3), n = new U(new S(Math.max(e.vertex.distanceTo(e.start), e.vertex.distanceTo(e.end), .5) * .5), new ue({ visible: !1 }));
		return n.position.copy(t), n;
	}
	updateBoundingBox(e, t) {
		let n = new G().add(t.start).add(t.vertex).add(t.end).divideScalar(3);
		e.position.copy(n);
	}
	static createArcGeometry(e, t, n) {
		let i = new G().subVectors(t, e), a = new G().subVectors(n, e), o = i.length(), s = a.length();
		if (o === 0 || s === 0) return new r();
		let c = i.clone().normalize(), l = a.clone().normalize(), u = Math.min(o, s) * lp, d = c.angleTo(l), f = new G().crossVectors(c, l);
		if (f.lengthSq() < 1e-10) return new r();
		f.normalize();
		let p = [];
		for (let t = 0; t <= cp; t++) {
			let n = t / cp, r = c.clone().applyAxisAngle(f, n * d);
			p.push(e.clone().add(r.multiplyScalar(u)));
		}
		return new r().setFromPoints(p);
	}
	static getArcMidpoint(e, t, n) {
		let r = new G().subVectors(t, e), i = new G().subVectors(n, e), a = r.length(), o = i.length();
		if (a === 0 || o === 0) return e.clone();
		let s = r.clone().normalize(), c = i.clone().normalize(), l = Math.min(a, o) * lp, u = s.angleTo(c), d = new G().crossVectors(s, c);
		if (d.lengthSq() < 1e-10) return e.clone();
		d.normalize();
		let f = s.clone().applyAxisAngle(d, u / 2);
		return e.clone().add(f.multiplyScalar(l * up));
	}
}, "uuid", "2c88a142-2378-422e-b26a-bb2710841813"), K(class e extends sp {
	constructor(t) {
		super(t, "area"), K(this, "pickTolerance", .1), K(this, "tolerance", .005), K(this, "modes", [
			"free",
			"square",
			"face"
		]), K(this, "_mode", "free"), K(this, "_temp", {
			isDragging: !1,
			area: new Df(),
			lines: new Be(),
			point: new G()
		}), K(this, "_lineToAreaMap", /* @__PURE__ */ new WeakMap()), K(this, "computeLineElements", () => {
			let e = [...this._temp.area.points];
			if (this._temp.area.isPointInPlane(this._temp.point) && e.push(this._temp.point), !this.world) {
				this._temp.lines.clear();
				return;
			}
			if (e.length < 2) {
				this._temp.lines.clear();
				return;
			}
			let t = e.length, n = [...this._temp.lines];
			if (n.length !== t) {
				this._temp.lines.clear();
				for (let n = 0; n < t; n++) {
					let r = e[n], i = e[(n + 1) % t], a = new wf(r, i), o = this.createLineElement(a);
					this._temp.lines.add(o);
				}
				return;
			}
			for (let r = 0; r < t; r++) {
				let i = e[r], a = e[(r + 1) % t], o = n[r];
				o.start = i, o.end = a;
			}
		}), K(this, "create", async () => {
			if (!this.enabled) return;
			if (!this.world) throw Error("Area Measurement: world is not defined!");
			let e = await this._vertexPicker.get({ snappingClasses: this.snappings });
			if (!(e && e.point)) return;
			if (this.mode === "face") {
				let t = e.facePoints;
				if (!t) return;
				let n = [];
				for (let e = 0; e < t.length - 2; e += 3) {
					let r = t[e], i = t[e + 1], a = t[e + 2];
					n.push(new G(r, i, a));
				}
				this._temp.area.points.add(...n), this.endCreation();
				return;
			}
			let { area: t, point: n } = this._temp;
			if (this._temp.isDragging || (t.tolerance = this.tolerance, t.points.clear(), this._temp.isDragging = !0), t.points.size === 0 && n.copy(e.point), t.points.add(n.clone()), this.mode === "square" && t.points.size === 2 && e.normal) {
				let [e, n] = t.points, r = new G().subVectors(n, e), i = r.clone(), a = r.clone().negate();
				Math.abs(r.y) >= .1 ? (i.y = 0, a.y = 0) : (i.x = 0, a.x = 0);
				let o = e.clone().add(i), s = n.clone().add(a);
				t.points.clear(), t.points.add(e, o, n, s), this.endCreation();
			}
		}), K(this, "endCreation", () => {
			this.enabled && (this._temp.isDragging = !1, this._temp.area.points.size >= 3 && this._temp.area.rawValue > 1e-6 && this.list.add(this._temp.area.clone()), this._temp.area.points.clear(), this._temp.lines.clear());
		}), K(this, "cancelCreation", () => {
			this.enabled && (this._temp.isDragging = !1, this._temp.area.points.clear(), this._temp.lines.clear());
		}), K(this, "delete", () => {
			if (!this.enabled || this.list.size === 0 || !this.world) return;
			let e = this.getFillBoxes(), t = this.components.get(Wl).get(this.world).castRayToObjects(e);
			if (!t) return;
			let n = [...this.fills].find((e) => e.three === t.object);
			if (!n) return;
			let r = n.area;
			this.fills.delete(n), this.list.delete(r), this.components.get(Zt).destroy(t.object);
		}), t.add(e.uuid, this), this.initHandlers(), this.color = new N("#6528d7");
	}
	get mode() {
		return this._mode;
	}
	set mode(e) {
		this._mode = e, this.cancelCreation(), this.onStateChanged.trigger(["mode"]);
	}
	initHandlers() {
		this.onVisibilityChange.add(() => {
			for (let e of this.lines) e.label.visible = !1;
		}), this.list.onItemAdded.add((e) => {
			if (!this.world) return;
			let t = this.createFillElement(e);
			t.color = this.color, this.fills.add(t), this.addLineElementsFromPointsForArea([...e.points], e);
		}), this.list.onBeforeDelete.add((e) => {
			let t = [...this.fills].find((t) => t.area === e);
			t && this.fills.delete(t);
			let n = [];
			for (let t of this.lines) this._lineToAreaMap.get(t) === e && n.push(t);
			for (let e of n) this.lines.delete(e), this._lineToAreaMap.delete(e);
		}), this.onPointerMove.add(() => this.updatePreview()), this._temp.lines.onItemAdded.add((e) => e.label.visible = !1), this._temp.lines.onBeforeDelete.add((e) => e.dispose()), this._temp.area.points.onItemAdded.add(() => {
			this.computeLineElements();
		}), this._temp.area.points.onItemDeleted.add(() => {
			this._temp.lines.clear();
		}), this.onStateChanged.add((e) => {
			e.includes("rounding") && (this._temp.area.rounding = this.rounding), e.includes("units") && (this._temp.area.units = this.units);
		});
	}
	updatePreview() {
		if (!this.enabled || !this.world) return;
		let e = this.lastPick;
		if (!(e && e.point && this._temp.isDragging)) return;
		let t = e.point.clone(), { plane: n } = this._temp.area;
		if (n) {
			let e = n.distanceToPoint(t);
			if (Math.abs(e) < .1) {
				let e = new G();
				n.projectPoint(t, e), t.copy(e);
			}
		}
		this._temp.point.copy(t), this.computeLineElements();
	}
	addLineElementsFromPointsForArea(e, t) {
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = e[(n + 1) % e.length], a = new wf(r, i), o = this.createLineElement(a);
			o.label.visible = !1, this.lines.add(o), this._lineToAreaMap.set(o, t);
		}
	}
}, "uuid", "09b78c1f-0ff1-4630-a818-ceda3d878c75");
var dp = class e extends sp {
	constructor(t) {
		super(t, "length"), K(this, "_temp", {
			isDragging: !1,
			line: new wf()
		}), K(this, "_lastEdgeKey", null), K(this, "_edgeMissStreak", 0), K(this, "modes", ["free", "edge"]), K(this, "_mode", "free"), K(this, "create", async () => {
			if (this.enabled) {
				if (!this._temp.isDragging) {
					await this.initPreview();
					return;
				}
				this.endCreation();
			}
		}), K(this, "endCreation", () => {
			this.enabled && this._temp.dimension && (this.list.add(this._temp.line.clone()), this.mode === "free" && (this._temp.dimension.dispose(), this._temp.dimension = void 0, this._temp.isDragging = !1, this._temp.startNormal = void 0));
		}), K(this, "cancelCreation", () => {
			var e;
			this.enabled && (this._temp.isDragging = !1, this._temp.dimension && ((e = this._temp.dimension) == null || e.dispose(), this._temp.dimension = void 0));
		}), K(this, "delete", () => {
			if (!this.enabled || this.list.size === 0 || !this.world) return;
			let e = this.getLineBoxes(), t = this.components.get(Wl).get(this.world).castRayToObjects(e);
			if (!t) return;
			let n = [...this.lines].find((e) => e.boundingBox === t.object);
			n && this.list.delete(n.line);
		}), t.add(e.uuid, this), this.initHandlers();
	}
	get mode() {
		return this._mode;
	}
	set mode(e) {
		this._mode = e, this.cancelCreation(), e === "edge" && this.initPreview(), this.onStateChanged.trigger(["mode"]);
	}
	get isDragging() {
		return this._temp.isDragging;
	}
	initHandlers() {
		this.list.onItemAdded.add((e) => {
			let t = this.createLineElement(e, this._temp.startNormal);
			t.createBoundingBox(), this.lines.add(t);
		}), this.list.onBeforeDelete.add((e) => {
			let t = [...this.lines].find((t) => t.line === e);
			t && this.lines.delete(t);
		}), this.onPointerMove.add(() => this.updatePreviewLine()), this.onEnabledChange.add((e) => {
			e && this.mode === "edge" && this.initPreview();
		});
	}
	async initPreview() {
		if (!this.world) throw Error("Measurement: world is need!");
		let e = this.lastPick ?? await this._vertexPicker.get({ snappingClasses: this.snappings });
		if (this.mode === "free") {
			if (!(e != null && e.point)) return;
			let t = e.point;
			this._temp.line.set(t, t.clone()), this._temp.isDragging = !0, this._temp.dimension = this.createLineElement(this._temp.line), this._temp.startNormal = e.normal ?? void 0;
		} else if (this.mode === "edge") {
			let t = e?.snappedEdgeP1, n = e?.snappedEdgeP2, r = t || new G(), i = r || n;
			this._temp.line.set(r, i), this._temp.isDragging = !0, this._temp.dimension = this.createLineElement(this._temp.line), this._temp.dimension.visible = !!(t && n);
		}
	}
	updatePreviewLine() {
		if (!this.world) throw Error("Measurement: world is need!");
		let t = this.lastPick;
		if (this.mode === "free") {
			if (!(t != null && t.point) || (this._temp.line.end.copy(t.point), !this._temp.dimension)) return;
			this._temp.dimension.end = this._temp.line.end;
		} else if (this.mode === "edge") {
			let n = t?.snappedEdgeP1, r = t?.snappedEdgeP2;
			if (!(n && r)) {
				this._edgeMissStreak += 1, this._edgeMissStreak > e.EDGE_MISS_TOLERANCE && this._temp.dimension && this._temp.dimension.visible && (this._temp.dimension.visible = !1, this._lastEdgeKey = null);
				return;
			}
			this._edgeMissStreak = 0;
			let i = fp(n, r);
			if (i === this._lastEdgeKey) {
				this._temp.dimension && !this._temp.dimension.visible && (this._temp.dimension.visible = !0);
				return;
			}
			if (this._lastEdgeKey = i, this._temp.line.start.copy(n), this._temp.line.end.copy(r), !this._temp.dimension) return;
			this._temp.dimension.visible || (this._temp.dimension.visible = !0), this._temp.dimension.start = this._temp.line.start, this._temp.dimension.end = this._temp.line.end;
		}
	}
};
K(dp, "uuid", "2f9bcacf-18a9-4be6-a293-e898eae64ea1"), K(dp, "EDGE_MISS_TOLERANCE", 3);
function fp(e, t) {
	let n = `${Math.round(e.x * 1e3)},${Math.round(e.y * 1e3)},${Math.round(e.z * 1e3)}`, r = `${Math.round(t.x * 1e3)},${Math.round(t.y * 1e3)},${Math.round(t.z * 1e3)}`;
	return n < r ? `${n}|${r}` : `${r}|${n}`;
}
K(class e extends sp {
	constructor(t) {
		super(t, "volume"), K(this, "_temp", {}), K(this, "onPreviewInitialized", new Z()), K(this, "modes", ["free"]), K(this, "snappings"), K(this, "_mode", "free"), K(this, "_previousHovererState", !1), K(this, "create", async () => {
			if (!this.enabled) return;
			let e = await this._vertexPicker.get();
			e && (this._temp.preview || await this.initPreview(), this._temp.preview.volume.items = ei.join([this._temp.preview.volume.items, { [e.fragments.modelId]: /* @__PURE__ */ new Set([e.localId]) }]));
		}), K(this, "endCreation", () => {
			if (!this._temp.preview || ei.isEmpty(this._temp.preview.volume.items)) return;
			let e = this._temp.preview.volume.clone();
			this.list.add(e), this._temp.preview.dispose(), delete this._temp.preview;
		}), K(this, "cancelCreation", () => {
			var e;
			(e = this._temp.preview) == null || e.dispose(), delete this._temp.preview;
		}), K(this, "delete", async () => {
			if (this.list.size === 0 || !this.world) return;
			let e = await this.getVolumeBoxes(), t = this.components.get(Wl).get(this.world);
			for (let n of e) {
				let e = t.castRayToObjects(n);
				if (!e) continue;
				let r = [...this.volumes].find((t) => t.meshes.some((t) => t === e.object));
				if (!r) return;
				this.list.delete(r.volume);
			}
		}), t.add(e.uuid, this), this.initHandlers();
	}
	get mode() {
		return this._mode;
	}
	set mode(e) {
		this._mode = e, this.cancelCreation(), this.onStateChanged.trigger(["mode"]);
	}
	initHandlers() {
		this.list.onItemAdded.add((e) => {
			let t = this.createVolumeElement(e);
			t.color = this.color, t.rounding = this.rounding, t.units = this.units, this.volumes.add(t);
		}), this.list.onBeforeDelete.add((e) => {
			let t = [...this.volumes].find((t) => t.volume === e);
			t && this.volumes.delete(t);
		}), this.onStateChanged.add((e) => {
			if (e.includes("color")) {
				if (!this._temp.preview) return;
				this._temp.preview.color = this.color;
			}
			if (e.includes("units")) {
				if (!this._temp.preview) return;
				this._temp.preview.units = this.units;
			}
			if (e.includes("rounding")) {
				if (!this._temp.preview) return;
				this._temp.preview.rounding = this.rounding;
			}
			if (e.includes("enabled")) {
				let e = this.components.get(gf);
				e.world = this.world, this.enabled ? (this._previousHovererState = e.enabled, e.enabled = !0) : (e.clear(), e.enabled = this._previousHovererState), e.hover();
			}
		});
	}
	async initPreview() {
		if (this.enabled) {
			if (!this.world) throw Error("Measurement: world is need!");
			this._temp.preview = new op(this.components, this.world), this._temp.preview.color = this.color, this._temp.preview.rounding = this.rounding, this._temp.preview.units = this.units, this.onPreviewInitialized.trigger(this._temp.preview);
		}
	}
}, "uuid", "01f885ab-ec4e-4e6c-a853-9dfc0d6766ed");
var pp = class e {
	constructor(e) {
		K(this, "_components"), K(this, "modes", new ti()), K(this, "activeMode", "default"), K(this, "_selectionLineMat", new Ie({
			color: 16755200,
			depthTest: !1
		})), K(this, "_selectionMeshMat", new ue({
			color: 16755200,
			depthTest: !1,
			side: 2
		})), K(this, "_selectedGroup", null), K(this, "_selectedUuid", null), K(this, "_handleMat", new ue({
			color: 39423,
			depthTest: !1,
			side: 2
		})), K(this, "_handleHoverMat", new ue({
			color: 16737792,
			depthTest: !1,
			side: 2
		})), K(this, "_handleObjects", []), K(this, "_hoveredHandleIdx", null), K(this, "_drawing", null), K(this, "_fonts", null), K(this, "_labelGroups", /* @__PURE__ */ new Map()), K(this, "translatable", !1), K(this, "_multiHighlightLineMat", new Ie({
			color: 4500223,
			depthTest: !1
		})), K(this, "_multiHighlightMeshMat", new ue({
			color: 4500223,
			depthTest: !1,
			side: 2
		})), K(this, "_multiHighlighted", /* @__PURE__ */ new Map()), this._components = e;
	}
	registerMode(e, t) {
		this.modes.set(e, t);
	}
	setMode(e) {
		this.modes.has(e) && (this.activeMode = e);
	}
	get selectedUuid() {
		return this._selectedUuid;
	}
	get isHandleHovered() {
		return this._hoveredHandleIdx !== null;
	}
	onDrawingChange(e, t) {}
	get isIdle() {
		return !0;
	}
	cancel() {
		this._onCancel(), this._deselect();
	}
	_onCancel() {}
	select(e) {
		this._select(e);
	}
	deselect() {
		this._deselect();
	}
	onPointerClick(e) {}
	delete() {
		!this._drawing || !this._selectedUuid || this._systemDelete(this._drawing, [this._selectedUuid]);
	}
	_applySelection(e) {
		this._selectedGroup = e, e.traverse((e) => {
			e.userData.isHitPlane || (e instanceof B || e instanceof U) && (e.userData._selOrigMat = e.material, e.userData._selOrigRenderOrder = e.renderOrder, e.material = e instanceof B ? this._selectionLineMat : this._selectionMeshMat, e.renderOrder = 500);
		});
	}
	_restoreSelection() {
		this._selectedGroup &&= (this._selectedGroup.traverse((e) => {
			e.userData._selOrigMat && (e.material = e.userData._selOrigMat, e.renderOrder = e.userData._selOrigRenderOrder ?? 0, delete e.userData._selOrigMat, delete e.userData._selOrigRenderOrder);
		}), null);
	}
	_clearSelectionState() {
		this._selectedGroup &&= (this._selectedGroup.traverse((e) => {
			delete e.userData._selOrigMat, delete e.userData._selOrigRenderOrder;
		}), null);
	}
	_disposeSelection() {
		this._selectionLineMat.dispose(), this._selectionMeshMat.dispose();
		for (let e of [...this._multiHighlighted.keys()]) this._restoreMultiHighlight(e);
		this._multiHighlightLineMat.dispose(), this._multiHighlightMeshMat.dispose();
	}
	_labelNeedsRecreation(e, t, n) {
		let r = this._labelGroups.get(e);
		return !r || r.userData.textString !== t || r.userData.color !== n.color || r.userData.fontSize !== n.fontSize;
	}
	_pickLabelUuid(e) {
		let t = new u();
		t.ray.copy(e);
		let n = null, r = Infinity;
		for (let [e, i] of this._labelGroups) i.updateWorldMatrix(!0, !0), i.traverse((i) => {
			if (!(i instanceof U) || !i.userData.isHitPlane) return;
			let a = [];
			i.raycast(t, a), a.length > 0 && a[0].distance < r && (r = a[0].distance, n = e);
		});
		return n;
	}
	_removeExistingLabel(e) {
		var t;
		for (let n = e.children.length - 1; n >= 0; n--) {
			let r = e.children[n];
			r instanceof R && r.userData.isDimension && (e.remove(r), (t = r.children[0]) == null || t.geometry.dispose());
		}
	}
	_getHandlePositions(e) {
		return [];
	}
	_buildHandle(t) {
		let n = new U(new f(e.HANDLE_RADIUS, e.HANDLE_SEGMENTS), this._handleMat);
		return n.rotation.x = -Math.PI / 2, n.layers.set(1), n.renderOrder = 1001, n.frustumCulled = !1, n;
	}
	_createHandles(e, t) {
		this._clearHandles();
		let n = this._getHandlePositions(e);
		for (let e = 0; e < n.length; e++) {
			let r = this._buildHandle(e);
			r.position.copy(n[e]), r.position.y = .01, this._handleObjects.push(r), t.add(r);
		}
	}
	_refreshHandles(e) {
		let t = this._getHandlePositions(e);
		for (let e = 0; e < Math.min(this._handleObjects.length, t.length); e++) this._handleObjects[e].position.copy(t[e]), this._handleObjects[e].position.y = .01;
	}
	_clearHandles() {
		this._hoveredHandleIdx = null;
		for (let e of this._handleObjects) e.removeFromParent(), e.geometry.dispose();
		this._handleObjects.length = 0;
	}
	_setHoveredHandle(e) {
		if (this._hoveredHandleIdx !== e) {
			if (this._hoveredHandleIdx !== null) {
				let e = this._handleObjects[this._hoveredHandleIdx];
				e && (e.material = this._handleMat);
			}
			if (this._hoveredHandleIdx = e, e !== null) {
				let t = this._handleObjects[e];
				t && (t.material = this._handleHoverMat);
			}
		}
	}
	_disposeHandles() {
		this._clearHandles(), this._handleMat.dispose(), this._handleHoverMat.dispose();
	}
	_select(e) {
		this.cancel(), this._selectedUuid = e, this._applySelectionMaterial(e), this._drawing && this._createHandles(e, this._drawing.three), this._onSelect(e);
	}
	_onSelect(e) {}
	_applySelectionMaterial(e) {
		if (!this._drawing) return;
		let t = this._drawing.annotations.get(e)?.three;
		t && this._applySelection(t);
	}
	_deselect() {
		this._selectedUuid = null, this._restoreSelection(), this._hoveredHandleIdx = null, this._clearHandles(), this._onDeselect();
	}
	_onDeselect() {}
	_handleDelete(e) {
		var t;
		for (let n of e) {
			let e = this._labelGroups.get(n);
			e && (e.removeFromParent(), (t = e.children[0]) == null || t.geometry.dispose(), this._labelGroups.delete(n)), this._selectedUuid === n && this._deselect();
		}
	}
	pick(e) {
		return this._systemPick(e) ?? this._pickLabelUuid(e);
	}
	highlightItems(e) {
		if (this._drawing) for (let t of e) {
			let e = this._drawing.annotations.get(t)?.three;
			e && this._applyMultiHighlight(t, e);
		}
	}
	unhighlightItems(e) {
		for (let t of e) this._restoreMultiHighlight(t);
	}
	deleteItems(e) {
		this._drawing && this._systemDelete(this._drawing, e);
	}
	translateStart(e, t) {}
	translateUpdate(e) {}
	translateEnd() {}
	translateCancel() {}
	_applyMultiHighlight(e, t) {
		this._multiHighlighted.has(e) && this._restoreMultiHighlight(e), t.traverse((e) => {
			e.userData.isHitPlane || (e instanceof B || e instanceof U) && (e.userData._mhOrigMat = e.material, e.userData._mhOrigRenderOrder = e.renderOrder, e.material = e instanceof B ? this._multiHighlightLineMat : this._multiHighlightMeshMat, e.renderOrder = 500);
		}), this._multiHighlighted.set(e, t);
	}
	_restoreMultiHighlight(e) {
		let t = this._multiHighlighted.get(e);
		t && (t.traverse((e) => {
			e.userData._mhOrigMat && (e.material = e.userData._mhOrigMat, e.renderOrder = e.userData._mhOrigRenderOrder ?? 0, delete e.userData._mhOrigMat, delete e.userData._mhOrigRenderOrder);
		}), this._multiHighlighted.delete(e));
	}
	_reapplyMultiHighlight(e, t) {
		this._multiHighlighted.has(e) && (this._restoreMultiHighlight(e), this._applyMultiHighlight(e, t));
	}
};
K(pp, "HANDLE_RADIUS", .055), K(pp, "HANDLE_SEGMENTS", 16);
var mp = class {
	constructor() {
		K(this, "font", null);
	}
	load(e) {
		return new Promise((t) => {
			new Je().load(e, (e) => {
				this.font = new Ye(e), t();
			});
		});
	}
	createTextMesh(e, t, n, r = 1) {
		if (!this.font) return null;
		let i = new U(new xe(this.font.generateShapes(e, t)), new ue({
			color: n,
			side: 2,
			transparent: r < 1,
			opacity: r
		}));
		return i.layers.set(1), i.rotation.x = -Math.PI / 2, i;
	}
	getBBox(e) {
		return new _().setFromObject(e);
	}
}, hp = 15;
K(class t extends qt {
	constructor(e) {
		super(e), K(this, "enabled", !0), K(this, "fonts", new mp()), K(this, "cursor", {
			point: new G(),
			snap: null,
			ray: new M()
		}), K(this, "onDrawingMouseMove", new Z()), K(this, "onActiveDrawingChange", new Z()), K(this, "onMultiSelectionChange", new Z()), K(this, "onStateChanged", new Z()), K(this, "_drawing", null), K(this, "_activeTool", null), K(this, "_activeToolClass", null), K(this, "_toolInstances", /* @__PURE__ */ new Map()), K(this, "_activeSource", null), K(this, "_nullModeTool", null), K(this, "_multiSel", /* @__PURE__ */ new Map()), K(this, "_multiDragOrigin", null), K(this, "_raycaster", new u()), K(this, "_drawingPlane", new ne()), K(this, "_snapMarker", null), K(this, "_snapMarkerMat", null), K(this, "_hoverHighlight", null), K(this, "_hoverHighlightMat", null), K(this, "_onMouseMove", (e) => {
			var t;
			if (!this._drawing || !this._activeSource) return;
			let n = this._computePointerEvent(e, this._activeSource, this._activeSource.canvas);
			n && (this.cursor = n, this._activeTool ? (this._updateSnapMarker(n.snap), this._activeTool.onPointerMove(n)) : (this._snapMarker && (this._snapMarker.visible = !1), this._hoverHighlight && (this._hoverHighlight.visible = !1), (t = this._nullModeTool) == null || t.onPointerMove(n)), this.onDrawingMouseMove.trigger(n));
		}), K(this, "_onMouseLeave", () => {
			this.clearHover();
		}), e.add(t.uuid, this);
	}
	get activeDrawing() {
		return this._drawing;
	}
	set activeDrawing(e) {
		var t;
		this._multiSel.clear(), this._multiDragOrigin = null, (t = this._activeTool) == null || t.onDeactivate(), this._activeTool = null, this._removeVisuals(), this._nullModeTool = null, this._drawing = e, e && this._createVisuals();
		for (let t of this._toolInstances.values()) t.onDrawingChange(e, e ? this.fonts : null);
		if (e && this._activeToolClass) {
			let e = this._createOrGetTool(this._activeToolClass);
			e.onActivate(), this._activeTool = e;
		}
		this.onActiveDrawingChange.trigger(e), this.onStateChanged.trigger(["activeDrawing"]);
	}
	setSource(e, t) {
		this._activeSource && this.clearSource(this._activeSource.canvas);
		let n;
		e instanceof HTMLElement ? (n = e, this._activeSource = {
			canvas: n,
			camera: t.camera,
			viewport: t ?? null
		}) : (n = e.renderer.three.domElement, this._activeSource = {
			canvas: n,
			camera: e.camera.three,
			viewport: null
		}), n.addEventListener("mousemove", this._onMouseMove), n.addEventListener("mouseleave", this._onMouseLeave);
	}
	clearSource(e) {
		this._activeSource?.canvas === e && (e.removeEventListener("mousemove", this._onMouseMove), e.removeEventListener("mouseleave", this._onMouseLeave), this._activeSource = null);
	}
	set activeTool(e) {
		var t;
		if ((t = this._activeTool) == null || t.onDeactivate(), this._activeTool = null, this._activeToolClass = e, this.onStateChanged.trigger(["activeTool"]), !e || !this._drawing) return;
		let n = this._createOrGetTool(e);
		n.onActivate(), this._activeTool = n;
	}
	use(e) {
		return this._createOrGetTool(e);
	}
	system(e) {
		return this.components.get(ef).use(e);
	}
	step() {
		this._activeTool ? this._activeTool.onPointerClick(this.cursor) : this._nullModeClick();
	}
	cancel() {
		var e, t;
		this._activeTool ? (t = (e = this._activeTool).cancel) == null || t.call(e) : this._nullModeTool && (this._nullModeTool.cancel(), this._nullModeTool.selectedUuid === null && (this._nullModeTool = null));
	}
	delete() {
		this._activeTool ? this._activeTool.delete() : this._nullModeTool &&= (this._nullModeTool.delete(), null);
	}
	clearHover() {
		this._snapMarker && (this._snapMarker.visible = !1), this._hoverHighlight && (this._hoverHighlight.visible = !1);
	}
	get multiSelCount() {
		let e = 0;
		for (let t of this._multiSel.values()) e += t.size;
		return e;
	}
	get isMultiTranslatable() {
		if (this._multiSel.size === 0) return !1;
		for (let e of this._multiSel.keys()) if (!e.translatable) return !1;
		return !0;
	}
	get isMultiDragging() {
		return this._multiDragOrigin !== null;
	}
	pickAny(e) {
		for (let t of this._toolInstances.values()) {
			let n = t.pick(e);
			if (n) return {
				tool: t,
				uuid: n
			};
		}
		return null;
	}
	toggleMultiSelect(e, t) {
		let n = this._multiSel.get(e);
		if (n != null && n.has(t)) n.delete(t), e.unhighlightItems([t]), n.size === 0 && this._multiSel.delete(e), this.onMultiSelectionChange.trigger();
		else if (e.translatable) {
			let r = n ?? /* @__PURE__ */ new Set();
			n || this._multiSel.set(e, r), r.add(t), e.highlightItems([t]), this.onMultiSelectionChange.trigger();
		}
	}
	clearMultiSelect() {
		for (let [e, t] of this._multiSel) e.unhighlightItems([...t]);
		this._multiSel.clear(), this._multiDragOrigin = null, this.onMultiSelectionChange.trigger();
	}
	deleteMultiSelected() {
		for (let [e, t] of this._multiSel) e.deleteItems([...t]);
		this._multiSel.clear(), this._multiDragOrigin = null, this.onMultiSelectionChange.trigger();
	}
	beginMultiDrag(e) {
		if (this.isMultiTranslatable) {
			this._multiDragOrigin = e.clone();
			for (let [t, n] of this._multiSel) t.translateStart([...n], e);
		}
	}
	updateMultiDrag(e) {
		if (this._multiDragOrigin) for (let t of this._multiSel.keys()) t.translateUpdate(e);
	}
	endMultiDrag() {
		if (this._multiDragOrigin) {
			this._multiDragOrigin = null;
			for (let e of this._multiSel.keys()) e.translateEnd();
		}
	}
	cancelMultiDrag() {
		if (this._multiDragOrigin) {
			this._multiDragOrigin = null;
			for (let e of this._multiSel.keys()) e.translateCancel();
		}
	}
	_nullModeClick() {
		let e = this.pickAny(this.cursor.ray);
		if (this._nullModeTool) {
			if (e && e.tool !== this._nullModeTool) {
				this._nullModeTool.deselect(), this._nullModeTool = e.tool, e.tool.select(e.uuid);
				return;
			}
			this._nullModeTool.onPointerClick(this.cursor), this._nullModeTool.selectedUuid === null && (this._nullModeTool = null);
			return;
		}
		e && (this._nullModeTool = e.tool, e.tool.select(e.uuid));
	}
	_createOrGetTool(e) {
		let t = this._toolInstances.get(e);
		if (t) return t;
		let n = new e(this.components);
		return this._drawing && n.onDrawingChange(this._drawing, this.fonts), this._toolInstances.set(e, n), n;
	}
	_computePointerEvent(e, t, n) {
		let r = n.getBoundingClientRect();
		if (r.width === 0 || r.height === 0) return null;
		let i = e.clientX - r.left, a = e.clientY - r.top, o = new O(i / r.width * 2 - 1, -(a / r.height) * 2 + 1);
		this._raycaster.setFromCamera(o, t.camera);
		let s = this._raycaster.ray.clone(), c = this._drawing.raycast(s, t.viewport ?? void 0);
		if (this._hoverHighlight) if (c != null && c.line) {
			let e = this._hoverHighlight.geometry.attributes.position;
			e.setXYZ(0, c.line.start.x, c.line.start.y + .01, c.line.start.z), e.setXYZ(1, c.line.end.x, c.line.end.y + .01, c.line.end.z), e.needsUpdate = !0, this._hoverHighlight.visible = !0;
		} else this._hoverHighlight.visible = !1;
		let l = null;
		return c != null && c.line && (l = this._resolveSnap(c.point, c.line, t.camera, r.width, r.height, i, a)), {
			point: l && l.kind !== "none" ? l.point : this._getDrawingLocalPoint(s),
			snap: l,
			ray: s
		};
	}
	_getDrawingLocalPoint(e) {
		let t = new G(0, 1, 0).transformDirection(this._drawing.three.matrixWorld), n = new G().setFromMatrixPosition(this._drawing.three.matrixWorld);
		this._drawingPlane.setFromNormalAndCoplanarPoint(t, n);
		let r = new G();
		return e.intersectPlane(this._drawingPlane, r), this._drawing.three.worldToLocal(r);
	}
	_resolveSnap(e, t, n, r, i, a, o) {
		let s = [
			{
				point: t.start.clone(),
				kind: "start"
			},
			{
				point: t.end.clone(),
				kind: "end"
			},
			{
				point: t.getCenter(new G()),
				kind: "center"
			}
		], c = {
			point: e.clone(),
			kind: "none",
			line: t
		}, l = hp;
		for (let e of s) {
			let s = this._drawing.three.localToWorld(e.point.clone()).project(n), u = (s.x + 1) / 2 * r, d = (1 - s.y) / 2 * i, f = Math.hypot(u - a, d - o);
			f < l && (l = f, c = {
				point: e.point,
				kind: e.kind,
				line: t
			});
		}
		return c;
	}
	_createVisuals() {
		if (!this._drawing) return;
		let t = .04;
		this._snapMarkerMat = new Ie({
			color: 16776960,
			depthTest: !1
		});
		let n = new r().setFromPoints([
			new G(-.04, .01, -.04),
			new G(t, .01, -.04),
			new G(t, .01, t),
			new G(-.04, .01, t)
		]);
		this._snapMarker = new Me(n, this._snapMarkerMat), this._snapMarker.layers.set(1), this._snapMarker.renderOrder = 1e3, this._snapMarker.frustumCulled = !1, this._snapMarker.visible = !1, this._drawing.three.add(this._snapMarker), this._hoverHighlightMat = new Ie({
			color: 30719,
			depthTest: !1
		});
		let i = new r().setFromPoints([new G(), new G()]);
		this._hoverHighlight = new e(i, this._hoverHighlightMat), this._hoverHighlight.layers.set(1), this._hoverHighlight.renderOrder = 999, this._hoverHighlight.frustumCulled = !1, this._hoverHighlight.visible = !1, this._drawing.three.add(this._hoverHighlight);
	}
	_removeVisuals() {
		var e, t;
		this._snapMarker && (this._snapMarker.removeFromParent(), this._snapMarker.geometry.dispose(), (e = this._snapMarkerMat) == null || e.dispose(), this._snapMarker = null, this._snapMarkerMat = null), this._hoverHighlight && (this._hoverHighlight.removeFromParent(), this._hoverHighlight.geometry.dispose(), (t = this._hoverHighlightMat) == null || t.dispose(), this._hoverHighlight = null, this._hoverHighlightMat = null);
	}
	_updateSnapMarker(e) {
		if (!(!this._snapMarker || !this._snapMarkerMat)) {
			if (!e || e.kind === "none") {
				this._snapMarker.visible = !1;
				return;
			}
			this._snapMarkerMat.color.setHex(e.kind === "center" ? 65535 : 16776960), this._snapMarker.position.copy(e.point), this._snapMarker.visible = !0;
		}
	}
}, "uuid", "b3e5c7a9-1f2d-4e8b-9c0a-5d7f3b1e2c4a");
//#endregion
export { pf as Highlighter, gf as Hoverer };
