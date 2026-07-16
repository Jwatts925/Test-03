import { $ as e, B as t, Bt as n, C as r, Ct as i, D as a, Dt as o, E as s, Et as c, F as l, Ft as u, G as d, I as f, It as p, J as m, L as h, Lt as g, M as _, Mt as v, N as y, Nt as b, Ot as x, P as S, Pt as C, Q as w, Rt as T, S as E, St as D, T as O, Tt as k, U as A, V as j, Vt as M, W as N, X as ee, Z as P, _ as F, _t as I, a as L, b as R, bt as te, c as ne, ct as re, d as ie, dt as ae, et as z, f as oe, g as se, gt as ce, h as le, ht as ue, i as de, it as fe, l as B, lt as V, m as pe, mt as me, n as he, nt as ge, o as _e, ot as ve, p as ye, pt as be, r as xe, rt as Se, s as Ce, st as we, t as Te, tt as Ee, u as De, ut as Oe, v as ke, vt as Ae, w as je, wt as Me, x as Ne, y as Pe, yt as Fe, z as H, zt as U } from "./TransformControls-DZtwFk1y.js";
//#region node_modules/.pnpm/camera-controls@3.1.2_three@0.185.1/node_modules/camera-controls/dist/camera-controls.module.js
var W = {
	LEFT: 1,
	RIGHT: 2,
	MIDDLE: 4
}, G = Object.freeze({
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
}), Ie = {
	NONE: 0,
	IN: 1,
	OUT: -1
};
function Le(e) {
	return e.isPerspectiveCamera;
}
function Re(e) {
	return e.isOrthographicCamera;
}
var ze = Math.PI * 2, Be = Math.PI / 2, Ve = 1e-5, He = Math.PI / 180;
function Ue(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function We(e, t = Ve) {
	return Math.abs(e) < t;
}
function K(e, t, n = Ve) {
	return We(e - t, n);
}
function Ge(e, t) {
	return Math.round(e / t) * t;
}
function Ke(e) {
	return isFinite(e) ? e : e < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function qe(e) {
	return Math.abs(e) < Number.MAX_VALUE ? e : e * Infinity;
}
function Je(e, t, n, r, i = Infinity, a) {
	r = Math.max(1e-4, r);
	let o = 2 / r, s = o * a, c = 1 / (1 + s + .48 * s * s + .235 * s * s * s), l = e - t, u = t, d = i * r;
	l = Ue(l, -d, d), t = e - l;
	let f = (n.value + o * l) * a;
	n.value = (n.value - o * f) * c;
	let p = t + (l + f) * c;
	return u - e > 0 == p > u && (p = u, n.value = (p - u) / a), p;
}
function Ye(e, t, n, r, i = Infinity, a, o) {
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
function Xe(e, t) {
	t.set(0, 0), e.forEach((e) => {
		t.x += e.clientX, t.y += e.clientY;
	}), t.x /= e.length, t.y /= e.length;
}
function Ze(e, t) {
	return Re(e) ? (console.warn(`${t} is not supported in OrthographicCamera`), !0) : !1;
}
var Qe = class {
	_listeners = {};
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
}, $e = "3.1.2", et = 1 / 8, tt = /Mac/.test(globalThis?.navigator?.platform), q, nt, rt, it, at, J, Y, ot, st, ct, lt, ut, dt, ft, pt, mt, ht, gt, _t, vt, yt, bt, xt, St = class e extends Qe {
	static install(e) {
		q = e.THREE, nt = Object.freeze(new q.Vector3(0, 0, 0)), rt = Object.freeze(new q.Vector3(0, 1, 0)), it = Object.freeze(new q.Vector3(0, 0, 1)), at = new q.Vector2(), J = new q.Vector3(), Y = new q.Vector3(), ot = new q.Vector3(), st = new q.Vector3(), ct = new q.Vector3(), lt = new q.Vector3(), ut = new q.Vector3(), dt = new q.Vector3(), ft = new q.Vector3(), pt = new q.Spherical(), mt = new q.Spherical(), ht = new q.Box3(), gt = new q.Box3(), _t = new q.Sphere(), vt = new q.Quaternion(), yt = new q.Quaternion(), bt = new q.Matrix4(), xt = new q.Raycaster();
	}
	static get ACTION() {
		return G;
	}
	minPolarAngle = 0;
	maxPolarAngle = Math.PI;
	minAzimuthAngle = -Infinity;
	maxAzimuthAngle = Infinity;
	minDistance = 2 ** -52;
	maxDistance = Infinity;
	infinityDolly = !1;
	minZoom = .01;
	maxZoom = Infinity;
	smoothTime = .25;
	draggingSmoothTime = .125;
	maxSpeed = Infinity;
	azimuthRotateSpeed = 1;
	polarRotateSpeed = 1;
	dollySpeed = 1;
	dollyDragInverted = !1;
	truckSpeed = 2;
	dollyToCursor = !1;
	dragToOffset = !1;
	boundaryFriction = 0;
	restThreshold = .01;
	colliderMeshes = [];
	mouseButtons;
	touches;
	cancel = () => {};
	lockPointer;
	unlockPointer;
	_enabled = !0;
	_camera;
	_yAxisUpSpace;
	_yAxisUpSpaceInverse;
	_state = G.NONE;
	_domElement;
	_viewport = null;
	_target;
	_targetEnd;
	_focalOffset;
	_focalOffsetEnd;
	_spherical;
	_sphericalEnd;
	_lastDistance;
	_zoom;
	_zoomEnd;
	_lastZoom;
	_cameraUp0;
	_target0;
	_position0;
	_zoom0;
	_focalOffset0;
	_dollyControlCoord;
	_changedDolly = 0;
	_changedZoom = 0;
	_nearPlaneCorners;
	_hasRested = !0;
	_boundary;
	_boundaryEnclosesCamera = !1;
	_needsUpdate = !0;
	_updatedLastTime = !1;
	_elementRect = new DOMRect();
	_isDragging = !1;
	_dragNeedsUpdate = !0;
	_activePointers = [];
	_lockedPointer = null;
	_interactiveArea = new DOMRect(0, 0, 1, 1);
	_isUserControllingRotate = !1;
	_isUserControllingDolly = !1;
	_isUserControllingTruck = !1;
	_isUserControllingOffset = !1;
	_isUserControllingZoom = !1;
	_lastDollyDirection = Ie.NONE;
	_thetaVelocity = { value: 0 };
	_phiVelocity = { value: 0 };
	_radiusVelocity = { value: 0 };
	_targetVelocity = new q.Vector3();
	_focalOffsetVelocity = new q.Vector3();
	_zoomVelocity = { value: 0 };
	set verticalDragToForward(e) {
		console.warn("camera-controls: `verticalDragToForward` was removed. Use `mouseButtons.left = CameraControls.ACTION.SCREEN_PAN` instead.");
	}
	constructor(t, n) {
		super(), q === void 0 && console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."), this._camera = t, this._yAxisUpSpace = new q.Quaternion().setFromUnitVectors(this._camera.up, rt), this._yAxisUpSpaceInverse = this._yAxisUpSpace.clone().invert(), this._state = G.NONE, this._target = new q.Vector3(), this._targetEnd = this._target.clone(), this._focalOffset = new q.Vector3(), this._focalOffsetEnd = this._focalOffset.clone(), this._spherical = new q.Spherical().setFromVector3(J.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)), this._sphericalEnd = this._spherical.clone(), this._lastDistance = this._spherical.radius, this._zoom = this._camera.zoom, this._zoomEnd = this._zoom, this._lastZoom = this._zoom, this._nearPlaneCorners = [
			new q.Vector3(),
			new q.Vector3(),
			new q.Vector3(),
			new q.Vector3()
		], this._updateNearPlaneCorners(), this._boundary = new q.Box3(new q.Vector3(-Infinity, -Infinity, -Infinity), new q.Vector3(Infinity, Infinity, Infinity)), this._cameraUp0 = this._camera.up.clone(), this._target0 = this._target.clone(), this._position0 = this._camera.position.clone(), this._zoom0 = this._zoom, this._focalOffset0 = this._focalOffset.clone(), this._dollyControlCoord = new q.Vector2(), this.mouseButtons = {
			left: G.ROTATE,
			middle: G.DOLLY,
			right: G.TRUCK,
			wheel: Le(this._camera) ? G.DOLLY : Re(this._camera) ? G.ZOOM : G.NONE
		}, this.touches = {
			one: G.TOUCH_ROTATE,
			two: Le(this._camera) ? G.TOUCH_DOLLY_TRUCK : Re(this._camera) ? G.TOUCH_ZOOM_TRUCK : G.NONE,
			three: G.TOUCH_TRUCK
		};
		let r = new q.Vector2(), i = new q.Vector2(), a = new q.Vector2(), o = (e) => {
			if (!this._enabled || !this._domElement) return;
			if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
				let t = this._domElement.getBoundingClientRect(), n = e.clientX / t.width, r = e.clientY / t.height;
				if (n < this._interactiveArea.left || n > this._interactiveArea.right || r < this._interactiveArea.top || r > this._interactiveArea.bottom) return;
			}
			let t = e.pointerType === "mouse" ? (e.buttons & W.LEFT) === W.LEFT ? W.LEFT : (e.buttons & W.MIDDLE) === W.MIDDLE ? W.MIDDLE : (e.buttons & W.RIGHT) === W.RIGHT ? W.RIGHT : null : null;
			if (t !== null) {
				let e = this._findPointerByMouseButton(t);
				e && this._disposePointer(e);
			}
			if ((e.buttons & W.LEFT) === W.LEFT && this._lockedPointer) return;
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
				else (!this._isDragging && this._lockedPointer || this._isDragging && (e.buttons & W.LEFT) === W.LEFT) && (this._state |= this.mouseButtons.left), this._isDragging && (e.buttons & W.MIDDLE) === W.MIDDLE && (this._state |= this.mouseButtons.middle), this._isDragging && (e.buttons & W.RIGHT) === W.RIGHT && (this._state |= this.mouseButtons.right);
				p();
			}
		}, c = (e) => {
			let t = this._findPointerById(e.pointerId);
			if (!(t && t === this._lockedPointer)) {
				if (t && this._disposePointer(t), e.pointerType === "touch") switch (this._activePointers.length) {
					case 0:
						this._state = G.NONE;
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
				else this._state = G.NONE;
				m();
			}
		}, l = -1, u = (e) => {
			if (!this._domElement || !this._enabled || this.mouseButtons.wheel === G.NONE) return;
			if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
				let t = this._domElement.getBoundingClientRect(), n = e.clientX / t.width, r = e.clientY / t.height;
				if (n < this._interactiveArea.left || n > this._interactiveArea.right || r < this._interactiveArea.top || r > this._interactiveArea.bottom) return;
			}
			if (e.preventDefault(), this.dollyToCursor || this.mouseButtons.wheel === G.ROTATE || this.mouseButtons.wheel === G.TRUCK) {
				let e = performance.now();
				l - e < 1e3 && this._getClientRect(this._elementRect), l = e;
			}
			let t = tt ? -1 : -3, n = e.deltaMode === 1 && !e.ctrlKey ? e.deltaY / t : e.deltaY / (t * 10), r = this.dollyToCursor ? (e.clientX - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, i = this.dollyToCursor ? (e.clientY - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
			switch (e.ctrlKey ? G.ZOOM : this.mouseButtons.wheel) {
				case G.ROTATE:
					this._rotateInternal(e.deltaX, e.deltaY), this._isUserControllingRotate = !0;
					break;
				case G.TRUCK:
					this._truckInternal(e.deltaX, e.deltaY, !1, !1), this._isUserControllingTruck = !0;
					break;
				case G.SCREEN_PAN:
					this._truckInternal(e.deltaX, e.deltaY, !1, !0), this._isUserControllingTruck = !0;
					break;
				case G.OFFSET:
					this._truckInternal(e.deltaX, e.deltaY, !0, !1), this._isUserControllingOffset = !0;
					break;
				case G.DOLLY:
					this._dollyInternal(-n, r, i), this._isUserControllingDolly = !0;
					break;
				case G.ZOOM:
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
				if (Xe(this._activePointers, at), this._getClientRect(this._elementRect), r.copy(at), i.copy(at), this._activePointers.length >= 2) {
					let e = at.x - this._activePointers[1].clientX, t = at.y - this._activePointers[1].clientY, n = Math.sqrt(e * e + t * t);
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
				else !this._lockedPointer && (e.buttons & W.LEFT) === W.LEFT && (this._state |= this.mouseButtons.left), (e.buttons & W.MIDDLE) === W.MIDDLE && (this._state |= this.mouseButtons.middle), (e.buttons & W.RIGHT) === W.RIGHT && (this._state |= this.mouseButtons.right);
				((this._state & G.ROTATE) === G.ROTATE || (this._state & G.TOUCH_ROTATE) === G.TOUCH_ROTATE || (this._state & G.TOUCH_DOLLY_ROTATE) === G.TOUCH_DOLLY_ROTATE || (this._state & G.TOUCH_ZOOM_ROTATE) === G.TOUCH_ZOOM_ROTATE) && (this._sphericalEnd.theta = this._spherical.theta, this._sphericalEnd.phi = this._spherical.phi, this._thetaVelocity.value = 0, this._phiVelocity.value = 0), ((this._state & G.TRUCK) === G.TRUCK || (this._state & G.SCREEN_PAN) === G.SCREEN_PAN || (this._state & G.TOUCH_TRUCK) === G.TOUCH_TRUCK || (this._state & G.TOUCH_SCREEN_PAN) === G.TOUCH_SCREEN_PAN || (this._state & G.TOUCH_DOLLY_TRUCK) === G.TOUCH_DOLLY_TRUCK || (this._state & G.TOUCH_DOLLY_SCREEN_PAN) === G.TOUCH_DOLLY_SCREEN_PAN || (this._state & G.TOUCH_ZOOM_TRUCK) === G.TOUCH_ZOOM_TRUCK || (this._state & G.TOUCH_ZOOM_SCREEN_PAN) === G.TOUCH_DOLLY_SCREEN_PAN) && (this._targetEnd.copy(this._target), this._targetVelocity.set(0, 0, 0)), ((this._state & G.DOLLY) === G.DOLLY || (this._state & G.TOUCH_DOLLY) === G.TOUCH_DOLLY || (this._state & G.TOUCH_DOLLY_TRUCK) === G.TOUCH_DOLLY_TRUCK || (this._state & G.TOUCH_DOLLY_SCREEN_PAN) === G.TOUCH_DOLLY_SCREEN_PAN || (this._state & G.TOUCH_DOLLY_OFFSET) === G.TOUCH_DOLLY_OFFSET || (this._state & G.TOUCH_DOLLY_ROTATE) === G.TOUCH_DOLLY_ROTATE) && (this._sphericalEnd.radius = this._spherical.radius, this._radiusVelocity.value = 0), ((this._state & G.ZOOM) === G.ZOOM || (this._state & G.TOUCH_ZOOM) === G.TOUCH_ZOOM || (this._state & G.TOUCH_ZOOM_TRUCK) === G.TOUCH_ZOOM_TRUCK || (this._state & G.TOUCH_ZOOM_SCREEN_PAN) === G.TOUCH_ZOOM_SCREEN_PAN || (this._state & G.TOUCH_ZOOM_OFFSET) === G.TOUCH_ZOOM_OFFSET || (this._state & G.TOUCH_ZOOM_ROTATE) === G.TOUCH_ZOOM_ROTATE) && (this._zoomEnd = this._zoom, this._zoomVelocity.value = 0), ((this._state & G.OFFSET) === G.OFFSET || (this._state & G.TOUCH_OFFSET) === G.TOUCH_OFFSET || (this._state & G.TOUCH_DOLLY_OFFSET) === G.TOUCH_DOLLY_OFFSET || (this._state & G.TOUCH_ZOOM_OFFSET) === G.TOUCH_ZOOM_OFFSET) && (this._focalOffsetEnd.copy(this._focalOffset), this._focalOffsetVelocity.set(0, 0, 0)), this.dispatchEvent({ type: "controlstart" });
			}
		}, p = () => {
			if (!this._enabled || !this._dragNeedsUpdate) return;
			this._dragNeedsUpdate = !1, Xe(this._activePointers, at);
			let e = this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement ? this._lockedPointer || this._activePointers[0] : null, t = e ? -e.deltaX : i.x - at.x, n = e ? -e.deltaY : i.y - at.y;
			if (i.copy(at), ((this._state & G.ROTATE) === G.ROTATE || (this._state & G.TOUCH_ROTATE) === G.TOUCH_ROTATE || (this._state & G.TOUCH_DOLLY_ROTATE) === G.TOUCH_DOLLY_ROTATE || (this._state & G.TOUCH_ZOOM_ROTATE) === G.TOUCH_ZOOM_ROTATE) && (this._rotateInternal(t, n), this._isUserControllingRotate = !0), (this._state & G.DOLLY) === G.DOLLY || (this._state & G.ZOOM) === G.ZOOM) {
				let e = this.dollyToCursor ? (r.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, t = this.dollyToCursor ? (r.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0, i = this.dollyDragInverted ? -1 : 1;
				(this._state & G.DOLLY) === G.DOLLY ? (this._dollyInternal(i * n * et, e, t), this._isUserControllingDolly = !0) : (this._zoomInternal(i * n * et, e, t), this._isUserControllingZoom = !0);
			}
			if ((this._state & G.TOUCH_DOLLY) === G.TOUCH_DOLLY || (this._state & G.TOUCH_ZOOM) === G.TOUCH_ZOOM || (this._state & G.TOUCH_DOLLY_TRUCK) === G.TOUCH_DOLLY_TRUCK || (this._state & G.TOUCH_ZOOM_TRUCK) === G.TOUCH_ZOOM_TRUCK || (this._state & G.TOUCH_DOLLY_SCREEN_PAN) === G.TOUCH_DOLLY_SCREEN_PAN || (this._state & G.TOUCH_ZOOM_SCREEN_PAN) === G.TOUCH_ZOOM_SCREEN_PAN || (this._state & G.TOUCH_DOLLY_OFFSET) === G.TOUCH_DOLLY_OFFSET || (this._state & G.TOUCH_ZOOM_OFFSET) === G.TOUCH_ZOOM_OFFSET || (this._state & G.TOUCH_DOLLY_ROTATE) === G.TOUCH_DOLLY_ROTATE || (this._state & G.TOUCH_ZOOM_ROTATE) === G.TOUCH_ZOOM_ROTATE) {
				let e = at.x - this._activePointers[1].clientX, t = at.y - this._activePointers[1].clientY, n = Math.sqrt(e * e + t * t), r = a.y - n;
				a.set(0, n);
				let o = this.dollyToCursor ? (i.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, s = this.dollyToCursor ? (i.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
				(this._state & G.TOUCH_DOLLY) === G.TOUCH_DOLLY || (this._state & G.TOUCH_DOLLY_ROTATE) === G.TOUCH_DOLLY_ROTATE || (this._state & G.TOUCH_DOLLY_TRUCK) === G.TOUCH_DOLLY_TRUCK || (this._state & G.TOUCH_DOLLY_SCREEN_PAN) === G.TOUCH_DOLLY_SCREEN_PAN || (this._state & G.TOUCH_DOLLY_OFFSET) === G.TOUCH_DOLLY_OFFSET ? (this._dollyInternal(r * et, o, s), this._isUserControllingDolly = !0) : (this._zoomInternal(r * et, o, s), this._isUserControllingZoom = !0);
			}
			((this._state & G.TRUCK) === G.TRUCK || (this._state & G.TOUCH_TRUCK) === G.TOUCH_TRUCK || (this._state & G.TOUCH_DOLLY_TRUCK) === G.TOUCH_DOLLY_TRUCK || (this._state & G.TOUCH_ZOOM_TRUCK) === G.TOUCH_ZOOM_TRUCK) && (this._truckInternal(t, n, !1, !1), this._isUserControllingTruck = !0), ((this._state & G.SCREEN_PAN) === G.SCREEN_PAN || (this._state & G.TOUCH_SCREEN_PAN) === G.TOUCH_SCREEN_PAN || (this._state & G.TOUCH_DOLLY_SCREEN_PAN) === G.TOUCH_DOLLY_SCREEN_PAN || (this._state & G.TOUCH_ZOOM_SCREEN_PAN) === G.TOUCH_ZOOM_SCREEN_PAN) && (this._truckInternal(t, n, !1, !0), this._isUserControllingTruck = !0), ((this._state & G.OFFSET) === G.OFFSET || (this._state & G.TOUCH_OFFSET) === G.TOUCH_OFFSET || (this._state & G.TOUCH_DOLLY_OFFSET) === G.TOUCH_DOLLY_OFFSET || (this._state & G.TOUCH_ZOOM_OFFSET) === G.TOUCH_ZOOM_OFFSET) && (this._truckInternal(t, n, !0, !1), this._isUserControllingOffset = !0), this.dispatchEvent({ type: "control" });
		}, m = () => {
			Xe(this._activePointers, at), i.copy(at), this._dragNeedsUpdate = !1, (this._activePointers.length === 0 || this._activePointers.length === 1 && this._activePointers[0] === this._lockedPointer) && (this._isDragging = !1), this._activePointers.length === 0 && this._domElement && (this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c), this.dispatchEvent({ type: "controlend" }));
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
			this._lockedPointer !== null && (this._disposePointer(this._lockedPointer), this._lockedPointer = null), this._domElement?.ownerDocument.exitPointerLock(), this._domElement?.ownerDocument.removeEventListener("pointerlockchange", h), this._domElement?.ownerDocument.removeEventListener("pointerlockerror", g), this.cancel();
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
			this._state !== G.NONE && (this._state = G.NONE, this._activePointers.length = 0, m());
		}, n && this.connect(n), this.update(0);
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
		this._interactiveArea.width = Ue(e.width, 0, 1), this._interactiveArea.height = Ue(e.height, 0, 1), this._interactiveArea.x = Ue(e.x, 0, 1 - this._interactiveArea.width), this._interactiveArea.y = Ue(e.y, 0, 1 - this._interactiveArea.height);
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
		let r = Ue(e, this.minAzimuthAngle, this.maxAzimuthAngle), i = Ue(t, this.minPolarAngle, this.maxPolarAngle);
		this._sphericalEnd.theta = r, this._sphericalEnd.phi = i, this._sphericalEnd.makeSafe(), this._needsUpdate = !0, n || (this._spherical.theta = this._sphericalEnd.theta, this._spherical.phi = this._sphericalEnd.phi);
		let a = !n || K(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && K(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold);
		return this._createOnRestPromise(a);
	}
	dolly(e, t = !1) {
		return this.dollyTo(this._sphericalEnd.radius - e, t);
	}
	dollyTo(e, t = !1) {
		return this._isUserControllingDolly = !1, this._lastDollyDirection = Ie.NONE, this._changedDolly = 0, this._dollyToNoClamp(Ue(e, this.minDistance, this.maxDistance), t);
	}
	_dollyToNoClamp(e, t = !1) {
		let n = this._sphericalEnd.radius;
		if (this.colliderMeshes.length >= 1) {
			let t = this._collisionTest(), r = K(t, this._spherical.radius);
			if (!(n > e) && r) return Promise.resolve();
			this._sphericalEnd.radius = Math.min(e, t);
		} else this._sphericalEnd.radius = e;
		this._needsUpdate = !0, t || (this._spherical.radius = this._sphericalEnd.radius);
		let r = !t || K(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
		return this._createOnRestPromise(r);
	}
	dollyInFixed(e, t = !1) {
		this._targetEnd.add(this._getCameraDirection(st).multiplyScalar(e)), t || this._target.copy(this._targetEnd);
		let n = !t || K(this._target.x, this._targetEnd.x, this.restThreshold) && K(this._target.y, this._targetEnd.y, this.restThreshold) && K(this._target.z, this._targetEnd.z, this.restThreshold);
		return this._createOnRestPromise(n);
	}
	zoom(e, t = !1) {
		return this.zoomTo(this._zoomEnd + e, t);
	}
	zoomTo(e, t = !1) {
		this._isUserControllingZoom = !1, this._zoomEnd = Ue(e, this.minZoom, this.maxZoom), this._needsUpdate = !0, t || (this._zoom = this._zoomEnd);
		let n = !t || K(this._zoom, this._zoomEnd, this.restThreshold);
		return this._changedZoom = 0, this._createOnRestPromise(n);
	}
	pan(e, t, n = !1) {
		return console.warn("`pan` has been renamed to `truck`"), this.truck(e, t, n);
	}
	truck(e, t, n = !1) {
		this._camera.updateMatrix(), ct.setFromMatrixColumn(this._camera.matrix, 0), lt.setFromMatrixColumn(this._camera.matrix, 1), ct.multiplyScalar(e), lt.multiplyScalar(-t);
		let r = J.copy(ct).add(lt), i = Y.copy(this._targetEnd).add(r);
		return this.moveTo(i.x, i.y, i.z, n);
	}
	forward(e, t = !1) {
		J.setFromMatrixColumn(this._camera.matrix, 0), J.crossVectors(this._camera.up, J), J.multiplyScalar(e);
		let n = Y.copy(this._targetEnd).add(J);
		return this.moveTo(n.x, n.y, n.z, t);
	}
	elevate(e, t = !1) {
		return J.copy(this._camera.up).multiplyScalar(e), this.moveTo(this._targetEnd.x + J.x, this._targetEnd.y + J.y, this._targetEnd.z + J.z, t);
	}
	moveTo(e, t, n, r = !1) {
		this._isUserControllingTruck = !1;
		let i = J.set(e, t, n).sub(this._targetEnd);
		this._encloseToBoundary(this._targetEnd, i, this.boundaryFriction), this._needsUpdate = !0, r || this._target.copy(this._targetEnd);
		let a = !r || K(this._target.x, this._targetEnd.x, this.restThreshold) && K(this._target.y, this._targetEnd.y, this.restThreshold) && K(this._target.z, this._targetEnd.z, this.restThreshold);
		return this._createOnRestPromise(a);
	}
	lookInDirectionOf(e, t, n, r = !1) {
		let i = J.set(e, t, n).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);
		return this.setPosition(i.x, i.y, i.z, r);
	}
	fitToBox(e, t, { cover: n = !1, paddingLeft: r = 0, paddingRight: i = 0, paddingBottom: a = 0, paddingTop: o = 0 } = {}) {
		let s = [], c = e.isBox3 ? ht.copy(e) : ht.setFromObject(e);
		c.isEmpty() && (console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"), Promise.resolve());
		let l = Ge(this._sphericalEnd.theta, Be), u = Ge(this._sphericalEnd.phi, Be);
		s.push(this.rotateTo(l, u, t));
		let d = J.setFromSpherical(this._sphericalEnd).normalize(), f = vt.setFromUnitVectors(d, it), p = K(Math.abs(d.y), 1);
		p && f.multiply(yt.setFromAxisAngle(rt, l)), f.multiply(this._yAxisUpSpaceInverse);
		let m = gt.makeEmpty();
		Y.copy(c.min).applyQuaternion(f), m.expandByPoint(Y), Y.copy(c.min).setX(c.max.x).applyQuaternion(f), m.expandByPoint(Y), Y.copy(c.min).setY(c.max.y).applyQuaternion(f), m.expandByPoint(Y), Y.copy(c.max).setZ(c.min.z).applyQuaternion(f), m.expandByPoint(Y), Y.copy(c.min).setZ(c.max.z).applyQuaternion(f), m.expandByPoint(Y), Y.copy(c.max).setY(c.min.y).applyQuaternion(f), m.expandByPoint(Y), Y.copy(c.max).setX(c.min.x).applyQuaternion(f), m.expandByPoint(Y), Y.copy(c.max).applyQuaternion(f), m.expandByPoint(Y), m.min.x -= r, m.min.y -= a, m.max.x += i, m.max.y += o, f.setFromUnitVectors(it, d), p && f.premultiply(yt.invert()), f.premultiply(this._yAxisUpSpace);
		let h = m.getSize(J), g = m.getCenter(Y).applyQuaternion(f);
		if (Le(this._camera)) {
			let e = this.getDistanceToFitBox(h.x, h.y, h.z, n);
			s.push(this.moveTo(g.x, g.y, g.z, t)), s.push(this.dollyTo(e, t)), s.push(this.setFocalOffset(0, 0, 0, t));
		} else if (Re(this._camera)) {
			let e = this._camera, r = e.right - e.left, i = e.top - e.bottom, a = n ? Math.max(r / h.x, i / h.y) : Math.min(r / h.x, i / h.y);
			s.push(this.moveTo(g.x, g.y, g.z, t)), s.push(this.zoomTo(a, t)), s.push(this.setFocalOffset(0, 0, 0, t));
		}
		return Promise.all(s);
	}
	fitToSphere(t, n) {
		let r = [], i = "isObject3D" in t ? e.createBoundingSphere(t, _t) : _t.copy(t);
		if (r.push(this.moveTo(i.center.x, i.center.y, i.center.z, n)), Le(this._camera)) {
			let e = this.getDistanceToFitSphere(i.radius);
			r.push(this.dollyTo(e, n));
		} else if (Re(this._camera)) {
			let e = this._camera.right - this._camera.left, t = this._camera.top - this._camera.bottom, a = 2 * i.radius, o = Math.min(e / a, t / a);
			r.push(this.zoomTo(o, n));
		}
		return r.push(this.setFocalOffset(0, 0, 0, n)), Promise.all(r);
	}
	setLookAt(e, t, n, r, i, a, o = !1) {
		this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._lastDollyDirection = Ie.NONE, this._changedDolly = 0;
		let s = Y.set(r, i, a), c = J.set(e, t, n);
		this._targetEnd.copy(s), this._sphericalEnd.setFromVector3(c.sub(s).applyQuaternion(this._yAxisUpSpace)), this._needsUpdate = !0, o || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
		let l = !o || K(this._target.x, this._targetEnd.x, this.restThreshold) && K(this._target.y, this._targetEnd.y, this.restThreshold) && K(this._target.z, this._targetEnd.z, this.restThreshold) && K(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && K(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && K(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
		return this._createOnRestPromise(l);
	}
	lerp(e, t, n, r = !1) {
		this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._lastDollyDirection = Ie.NONE, this._changedDolly = 0;
		let i = J.set(...e.target);
		if ("spherical" in e) pt.set(...e.spherical);
		else {
			let t = Y.set(...e.position);
			pt.setFromVector3(t.sub(i).applyQuaternion(this._yAxisUpSpace));
		}
		let a = ot.set(...t.target);
		if ("spherical" in t) mt.set(...t.spherical);
		else {
			let e = Y.set(...t.position);
			mt.setFromVector3(e.sub(a).applyQuaternion(this._yAxisUpSpace));
		}
		this._targetEnd.copy(i.lerp(a, n));
		let o = mt.theta - pt.theta, s = mt.phi - pt.phi, c = mt.radius - pt.radius;
		this._sphericalEnd.set(pt.radius + c * n, pt.phi + s * n, pt.theta + o * n), this._needsUpdate = !0, r || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
		let l = !r || K(this._target.x, this._targetEnd.x, this.restThreshold) && K(this._target.y, this._targetEnd.y, this.restThreshold) && K(this._target.z, this._targetEnd.z, this.restThreshold) && K(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && K(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && K(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
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
		let i = this.getPosition(J), a = this.setLookAt(i.x, i.y, i.z, e, t, n, r);
		return this._sphericalEnd.phi = Ue(this._sphericalEnd.phi, this.minPolarAngle, this.maxPolarAngle), a;
	}
	setFocalOffset(e, t, n, r = !1) {
		this._isUserControllingOffset = !1, this._focalOffsetEnd.set(e, t, n), this._needsUpdate = !0, r || this._focalOffset.copy(this._focalOffsetEnd);
		let i = !r || K(this._focalOffset.x, this._focalOffsetEnd.x, this.restThreshold) && K(this._focalOffset.y, this._focalOffsetEnd.y, this.restThreshold) && K(this._focalOffset.z, this._focalOffsetEnd.z, this.restThreshold);
		return this._createOnRestPromise(i);
	}
	setOrbitPoint(e, t, n) {
		this._camera.updateMatrixWorld(), ct.setFromMatrixColumn(this._camera.matrixWorldInverse, 0), lt.setFromMatrixColumn(this._camera.matrixWorldInverse, 1), ut.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
		let r = J.set(e, t, n), i = r.distanceTo(this._camera.position), a = r.sub(this._camera.position);
		ct.multiplyScalar(a.x), lt.multiplyScalar(a.y), ut.multiplyScalar(a.z), J.copy(ct).add(lt).add(ut), J.z += i, this.dollyTo(i, !1), this.setFocalOffset(-J.x, J.y, -J.z, !1), this.moveTo(e, t, n, !1);
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
		this._viewport = this._viewport || new q.Vector4(), typeof e == "number" ? this._viewport.set(e, t, n, r) : this._viewport.copy(e);
	}
	getDistanceToFitBox(e, t, n, r = !1) {
		if (Ze(this._camera, "getDistanceToFitBox")) return this._spherical.radius;
		let i = e / t, a = this._camera.getEffectiveFOV() * He, o = this._camera.aspect;
		return ((r ? i > o : i < o) ? t : e / o) * .5 / Math.tan(a * .5) + n * .5;
	}
	getDistanceToFitSphere(e) {
		if (Ze(this._camera, "getDistanceToFitSphere")) return this._spherical.radius;
		let t = this._camera.getEffectiveFOV() * He, n = Math.atan(Math.tan(t * .5) * this._camera.aspect) * 2, r = 1 < this._camera.aspect ? t : n;
		return e / Math.sin(r * .5);
	}
	getTarget(e, t = !0) {
		return (e && e.isVector3 ? e : new q.Vector3()).copy(t ? this._targetEnd : this._target);
	}
	getPosition(e, t = !0) {
		return (e && e.isVector3 ? e : new q.Vector3()).setFromSpherical(t ? this._sphericalEnd : this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(t ? this._targetEnd : this._target);
	}
	getSpherical(e, t = !0) {
		return (e || new q.Spherical()).copy(t ? this._sphericalEnd : this._spherical);
	}
	getFocalOffset(e, t = !0) {
		return (e && e.isVector3 ? e : new q.Vector3()).copy(t ? this._focalOffsetEnd : this._focalOffset);
	}
	normalizeRotations() {
		return this._sphericalEnd.theta = (this._sphericalEnd.theta % ze + ze) % ze, this._sphericalEnd.theta > Math.PI && (this._sphericalEnd.theta -= ze), this._spherical.theta += ze * Math.round((this._sphericalEnd.theta - this._spherical.theta) / ze), this;
	}
	stop() {
		this._focalOffset.copy(this._focalOffsetEnd), this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd), this._zoom = this._zoomEnd;
	}
	reset(e = !1) {
		if (!K(this._camera.up.x, this._cameraUp0.x) || !K(this._camera.up.y, this._cameraUp0.y) || !K(this._camera.up.z, this._cameraUp0.z)) {
			this._camera.up.copy(this._cameraUp0);
			let e = this.getPosition(J);
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
		this._yAxisUpSpace.setFromUnitVectors(this._camera.up, rt), this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert();
	}
	applyCameraUp() {
		let e = J.subVectors(this._target, this._camera.position).normalize(), t = Y.crossVectors(e, this._camera.up);
		this._camera.up.crossVectors(t, e).normalize(), this._camera.updateMatrixWorld();
		let n = this.getPosition(J);
		this.updateCameraUp(), this.setPosition(n.x, n.y, n.z);
	}
	update(e) {
		let t = this._sphericalEnd.theta - this._spherical.theta, n = this._sphericalEnd.phi - this._spherical.phi, r = this._sphericalEnd.radius - this._spherical.radius, i = dt.subVectors(this._targetEnd, this._target), a = ft.subVectors(this._focalOffsetEnd, this._focalOffset), o = this._zoomEnd - this._zoom;
		if (We(t)) this._thetaVelocity.value = 0, this._spherical.theta = this._sphericalEnd.theta;
		else {
			let t = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
			this._spherical.theta = Je(this._spherical.theta, this._sphericalEnd.theta, this._thetaVelocity, t, Infinity, e), this._needsUpdate = !0;
		}
		if (We(n)) this._phiVelocity.value = 0, this._spherical.phi = this._sphericalEnd.phi;
		else {
			let t = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
			this._spherical.phi = Je(this._spherical.phi, this._sphericalEnd.phi, this._phiVelocity, t, Infinity, e), this._needsUpdate = !0;
		}
		if (We(r)) this._radiusVelocity.value = 0, this._spherical.radius = this._sphericalEnd.radius;
		else {
			let t = this._isUserControllingDolly ? this.draggingSmoothTime : this.smoothTime;
			this._spherical.radius = Je(this._spherical.radius, this._sphericalEnd.radius, this._radiusVelocity, t, this.maxSpeed, e), this._needsUpdate = !0;
		}
		if (We(i.x) && We(i.y) && We(i.z)) this._targetVelocity.set(0, 0, 0), this._target.copy(this._targetEnd);
		else {
			let t = this._isUserControllingTruck ? this.draggingSmoothTime : this.smoothTime;
			Ye(this._target, this._targetEnd, this._targetVelocity, t, this.maxSpeed, e, this._target), this._needsUpdate = !0;
		}
		if (We(a.x) && We(a.y) && We(a.z)) this._focalOffsetVelocity.set(0, 0, 0), this._focalOffset.copy(this._focalOffsetEnd);
		else {
			let t = this._isUserControllingOffset ? this.draggingSmoothTime : this.smoothTime;
			Ye(this._focalOffset, this._focalOffsetEnd, this._focalOffsetVelocity, t, this.maxSpeed, e, this._focalOffset), this._needsUpdate = !0;
		}
		if (We(o)) this._zoomVelocity.value = 0, this._zoom = this._zoomEnd;
		else {
			let t = this._isUserControllingZoom ? this.draggingSmoothTime : this.smoothTime;
			this._zoom = Je(this._zoom, this._zoomEnd, this._zoomVelocity, t, Infinity, e);
		}
		if (this.dollyToCursor) {
			if (Le(this._camera) && this._changedDolly !== 0) {
				let e = this._spherical.radius - this._lastDistance, t = this._camera, n = this._getCameraDirection(st), r = J.copy(n).cross(t.up).normalize();
				r.lengthSq() === 0 && (r.x = 1);
				let i = Y.crossVectors(r, n), a = this._sphericalEnd.radius * Math.tan(t.getEffectiveFOV() * He * .5), o = (this._sphericalEnd.radius - e - this._sphericalEnd.radius) / this._sphericalEnd.radius, s = ot.copy(this._targetEnd).add(r.multiplyScalar(this._dollyControlCoord.x * a * t.aspect)).add(i.multiplyScalar(this._dollyControlCoord.y * a)), c = J.copy(this._targetEnd).lerp(s, o), l = this._lastDollyDirection === Ie.IN && this._spherical.radius <= this.minDistance, u = this._lastDollyDirection === Ie.OUT && this.maxDistance <= this._spherical.radius;
				if (this.infinityDolly && (l || u)) {
					this._sphericalEnd.radius -= e, this._spherical.radius -= e;
					let t = Y.copy(n).multiplyScalar(-e);
					c.add(t);
				}
				this._boundary.clampPoint(c, c);
				let d = Y.subVectors(c, this._targetEnd);
				this._targetEnd.copy(c), this._target.add(d), this._changedDolly -= e, We(this._changedDolly) && (this._changedDolly = 0);
			} else if (Re(this._camera) && this._changedZoom !== 0) {
				let e = this._zoom - this._lastZoom, t = this._camera, n = J.set(this._dollyControlCoord.x, this._dollyControlCoord.y, (t.near + t.far) / (t.near - t.far)).unproject(t), r = Y.set(0, 0, -1).applyQuaternion(t.quaternion), i = ot.copy(n).add(r.multiplyScalar(-n.dot(t.up))), a = -(this._zoom - e - this._zoom) / this._zoom, o = this._getCameraDirection(st), s = this._targetEnd.dot(o), c = J.copy(this._targetEnd).lerp(i, a), l = c.dot(o), u = o.multiplyScalar(l - s);
				c.sub(u), this._boundary.clampPoint(c, c);
				let d = Y.subVectors(c, this._targetEnd);
				this._targetEnd.copy(c), this._target.add(d), this._changedZoom -= e, We(this._changedZoom) && (this._changedZoom = 0);
			}
		}
		this._camera.zoom !== this._zoom && (this._camera.zoom = this._zoom, this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = !0), this._dragNeedsUpdate = !0;
		let s = this._collisionTest();
		this._spherical.radius = Math.min(this._spherical.radius, s), this._spherical.makeSafe(), this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target), this._camera.lookAt(this._target), (!We(this._focalOffset.x) || !We(this._focalOffset.y) || !We(this._focalOffset.z)) && (this._camera.matrix.compose(this._camera.position, this._camera.quaternion, this._camera.scale), ct.setFromMatrixColumn(this._camera.matrix, 0), lt.setFromMatrixColumn(this._camera.matrix, 1), ut.setFromMatrixColumn(this._camera.matrix, 2), ct.multiplyScalar(this._focalOffset.x), lt.multiplyScalar(-this._focalOffset.y), ut.multiplyScalar(this._focalOffset.z), J.copy(ct).add(lt).add(ut), this._camera.position.add(J), this._camera.updateMatrixWorld()), this._boundaryEnclosesCamera && this._encloseToBoundary(this._camera.position.copy(this._target), J.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse), 1);
		let c = this._needsUpdate;
		return c && !this._updatedLastTime ? (this._hasRested = !1, this.dispatchEvent({ type: "wake" }), this.dispatchEvent({ type: "update" })) : c ? (this.dispatchEvent({ type: "update" }), We(t, this.restThreshold) && We(n, this.restThreshold) && We(r, this.restThreshold) && We(i.x, this.restThreshold) && We(i.y, this.restThreshold) && We(i.z, this.restThreshold) && We(a.x, this.restThreshold) && We(a.y, this.restThreshold) && We(a.z, this.restThreshold) && We(o, this.restThreshold) && !this._hasRested && (this._hasRested = !0, this.dispatchEvent({ type: "rest" }))) : !c && this._updatedLastTime && this.dispatchEvent({ type: "sleep" }), this._lastDistance = this._spherical.radius, this._lastZoom = this._zoom, this._updatedLastTime = c, this._needsUpdate = !1, c;
	}
	toJSON() {
		return JSON.stringify({
			enabled: this._enabled,
			minDistance: this.minDistance,
			maxDistance: Ke(this.maxDistance),
			minZoom: this.minZoom,
			maxZoom: Ke(this.maxZoom),
			minPolarAngle: this.minPolarAngle,
			maxPolarAngle: Ke(this.maxPolarAngle),
			minAzimuthAngle: Ke(this.minAzimuthAngle),
			maxAzimuthAngle: Ke(this.maxAzimuthAngle),
			smoothTime: this.smoothTime,
			draggingSmoothTime: this.draggingSmoothTime,
			dollySpeed: this.dollySpeed,
			truckSpeed: this.truckSpeed,
			dollyToCursor: this.dollyToCursor,
			target: this._targetEnd.toArray(),
			position: J.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),
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
		this.enabled = n.enabled, this.minDistance = n.minDistance, this.maxDistance = qe(n.maxDistance), this.minZoom = n.minZoom, this.maxZoom = qe(n.maxZoom), this.minPolarAngle = n.minPolarAngle, this.maxPolarAngle = qe(n.maxPolarAngle), this.minAzimuthAngle = qe(n.minAzimuthAngle), this.maxAzimuthAngle = qe(n.maxAzimuthAngle), this.smoothTime = n.smoothTime, this.draggingSmoothTime = n.draggingSmoothTime, this.dollySpeed = n.dollySpeed, this.truckSpeed = n.truckSpeed, this.dollyToCursor = n.dollyToCursor, this._target0.fromArray(n.target0), this._position0.fromArray(n.position0), this._zoom0 = n.zoom0, this._focalOffset0.fromArray(n.focalOffset0), this.moveTo(n.target[0], n.target[1], n.target[2], t), pt.setFromVector3(J.fromArray(n.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)), this.rotateTo(pt.theta, pt.phi, t), this.dollyTo(pt.radius, t), this.zoomTo(n.zoom, t), this.setFocalOffset(n.focalOffset[0], n.focalOffset[1], n.focalOffset[2], t), this._needsUpdate = !0;
	}
	connect(e) {
		if (this._domElement) {
			console.warn("camera-controls is already connected.");
			return;
		}
		e.setAttribute("data-camera-controls-version", $e), this._addAllEventListeners(e), this._getClientRect(this._elementRect);
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
		let i = Y.copy(t).add(e), a = this._boundary.clampPoint(i, ot).sub(i), o = a.lengthSq();
		if (o === 0) return e.add(t);
		if (o === r) return e;
		if (n === 0) return e.add(t).add(a);
		{
			let r = 1 + n * o / t.dot(a);
			return e.add(Y.copy(t).multiplyScalar(r)).add(a.multiplyScalar(1 - n));
		}
	}
	_updateNearPlaneCorners() {
		if (Le(this._camera)) {
			let e = this._camera, t = e.near, n = e.getEffectiveFOV() * He, r = Math.tan(n * .5) * t, i = r * e.aspect;
			this._nearPlaneCorners[0].set(-i, -r, 0), this._nearPlaneCorners[1].set(i, -r, 0), this._nearPlaneCorners[2].set(i, r, 0), this._nearPlaneCorners[3].set(-i, r, 0);
		} else if (Re(this._camera)) {
			let e = this._camera, t = 1 / e.zoom, n = e.left * t, r = e.right * t, i = e.top * t, a = e.bottom * t;
			this._nearPlaneCorners[0].set(n, i, 0), this._nearPlaneCorners[1].set(r, i, 0), this._nearPlaneCorners[2].set(r, a, 0), this._nearPlaneCorners[3].set(n, a, 0);
		}
	}
	_truckInternal = (e, t, n, r) => {
		let i, a;
		if (Le(this._camera)) {
			let n = J.copy(this._camera.position).sub(this._target), r = this._camera.getEffectiveFOV() * He, o = n.length() * Math.tan(r * .5);
			i = this.truckSpeed * e * o / this._elementRect.height, a = this.truckSpeed * t * o / this._elementRect.height;
		} else if (Re(this._camera)) {
			let n = this._camera;
			i = this.truckSpeed * e * (n.right - n.left) / n.zoom / this._elementRect.width, a = this.truckSpeed * t * (n.top - n.bottom) / n.zoom / this._elementRect.height;
		} else return;
		r ? (n ? this.setFocalOffset(this._focalOffsetEnd.x + i, this._focalOffsetEnd.y, this._focalOffsetEnd.z, !0) : this.truck(i, 0, !0), this.forward(-a, !0)) : n ? this.setFocalOffset(this._focalOffsetEnd.x + i, this._focalOffsetEnd.y + a, this._focalOffsetEnd.z, !0) : this.truck(i, a, !0);
	};
	_rotateInternal = (e, t) => {
		let n = ze * this.azimuthRotateSpeed * e / this._elementRect.height, r = ze * this.polarRotateSpeed * t / this._elementRect.height;
		this.rotate(n, r, !0);
	};
	_dollyInternal = (e, t, n) => {
		let r = .95 ** (-e * this.dollySpeed), i = this._sphericalEnd.radius, a = this._sphericalEnd.radius * r, o = Ue(a, this.minDistance, this.maxDistance), s = o - a;
		this.infinityDolly && this.dollyToCursor ? this._dollyToNoClamp(a, !0) : (this.infinityDolly && !this.dollyToCursor && this.dollyInFixed(s, !0), this._dollyToNoClamp(o, !0)), this.dollyToCursor && (this._changedDolly += (this.infinityDolly ? a : o) - i, this._dollyControlCoord.set(t, n)), this._lastDollyDirection = Math.sign(-e);
	};
	_zoomInternal = (e, t, n) => {
		let r = .95 ** (e * this.dollySpeed), i = this._zoom, a = this._zoom * r;
		this.zoomTo(a, !0), this.dollyToCursor && (this._changedZoom += a - i, this._dollyControlCoord.set(t, n));
	};
	_collisionTest() {
		let e = Infinity;
		if (!(this.colliderMeshes.length >= 1) || Ze(this._camera, "_collisionTest")) return e;
		let t = this._getTargetDirection(st);
		bt.lookAt(nt, t, this._camera.up);
		for (let n = 0; n < 4; n++) {
			let r = Y.copy(this._nearPlaneCorners[n]);
			r.applyMatrix4(bt);
			let i = ot.addVectors(this._target, r);
			xt.set(i, t), xt.far = this._spherical.radius + 1;
			let a = xt.intersectObjects(this.colliderMeshes);
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
	static createBoundingSphere(e, t = new q.Sphere()) {
		let n = t, r = n.center;
		ht.makeEmpty(), e.traverseVisible((e) => {
			e.isMesh && ht.expandByObject(e);
		}), ht.getCenter(r);
		let i = 0;
		return e.traverseVisible((e) => {
			if (!e.isMesh) return;
			let t = e;
			if (!t.geometry) return;
			let n = t.geometry.clone();
			n.applyMatrix4(t.matrixWorld);
			let a = n.attributes.position;
			for (let e = 0, t = a.count; e < t; e++) J.fromBufferAttribute(a, e), i = Math.max(i, r.distanceToSquared(J));
		}), n.radius = Math.sqrt(i), n;
	}
}, Ct = Object.defineProperty, wt = (e, t, n) => t in e ? Ct(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, X = (e, t, n) => (wt(e, typeof t == "symbol" ? t : t + "", n), n), Z = class {
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
}, Tt = class {
	constructor(e) {
		X(this, "isDisposeable", () => "dispose" in this && "onDisposed" in this), X(this, "isResizeable", () => "resize" in this && "getSize" in this), X(this, "isUpdateable", () => "onAfterUpdate" in this && "onBeforeUpdate" in this && "update" in this), X(this, "isHideable", () => "visible" in this), X(this, "isConfigurable", () => "setup" in this && "config" in this && "onSetup" in this), X(this, "isSerializable", () => "import" in this && "export" in this), this.components = e;
	}
}, Et = class extends Tt {}, Dt = class extends Tt {
	constructor(e) {
		super(e), X(this, "worlds", new r()), X(this, "onWorldChanged", new Z()), X(this, "_currentWorld", null), this.onWorldChanged.add(({ world: e, action: t }) => {
			t === "removed" && this.worlds.delete(e.uuid);
		});
	}
	set currentWorld(e) {
		this._currentWorld = e;
	}
	get currentWorld() {
		return this._currentWorld;
	}
}, Ot = class extends Dt {
	constructor() {
		super(...arguments), X(this, "hasCameraControls", () => "controls" in this);
	}
}, kt = class extends Dt {
	constructor() {
		super(...arguments), X(this, "onAfterUpdate", new Z()), X(this, "onBeforeUpdate", new Z()), X(this, "onDisposed", new Z()), X(this, "onResize", new Z()), X(this, "onClippingPlanesUpdated", new Z()), X(this, "clippingPlanes", []);
	}
	updateClippingPlanes() {
		this.onClippingPlanesUpdated.trigger();
	}
	setPlane(e, t, n) {
		t.isLocal = n;
		let r = this.clippingPlanes.indexOf(t);
		e && r === -1 ? this.clippingPlanes.push(t) : !e && r > -1 && this.clippingPlanes.splice(r, 1), this.three.clippingPlanes = this.clippingPlanes.filter((e) => !e.isLocal);
	}
}, At = class e extends Et {
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
X(At, "uuid", "76e9cd8e-ad8f-4753-9ef6-cbc60f7247fe");
var jt = At, Mt = class extends Dt {
	constructor(e) {
		super(e), X(this, "onDisposed", new Z()), X(this, "directionalLights", /* @__PURE__ */ new Map()), X(this, "ambientLights", /* @__PURE__ */ new Map());
	}
	dispose() {
		let e = this.components.get(jt);
		for (let t of this.three.children) {
			let n = t;
			n.geometry && e.destroy(n);
		}
		this.deleteAllLights(), this.three.children = [], this.onDisposed.trigger(), this.onDisposed.reset();
	}
	deleteAllLights() {
		for (let [, e] of this.directionalLights) e.removeFromParent(), e.target.removeFromParent(), e.dispose();
		this.directionalLights.clear();
		for (let [, e] of this.ambientLights) e.removeFromParent(), e.dispose();
		this.ambientLights.clear();
	}
}, Nt = class e {
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
X(Nt, "_pattern", /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/), X(Nt, "_lut", /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."));
var Pt = Nt, Ft = /* @__PURE__ */ RegExp("^[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
function It(e, t) {
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
var Lt = function(e) {
	return Ft.exec(e) != null;
};
function Rt(e) {
	return e !== void 0;
}
var zt = [
	"hasOwnProperty",
	"toString",
	"valueOf",
	"__defineGetter__",
	"__defineSetter__",
	"__lookupGetter__",
	"__lookupSetter__"
], Bt = [
	"__proto__",
	"constructor",
	"prototype"
], Vt = {
	allowBooleanAttributes: !1,
	unpairedTags: []
};
function Ht(e, t) {
	t = Object.assign({}, Vt, t);
	let n = [], r = !1, i = !1;
	e[0] === "﻿" && (e = e.substr(1));
	for (let a = 0; a < e.length; a++) if (e[a] === "<" && e[a + 1] === "?") {
		if (a += 2, a = Wt(e, a), a.err) return a;
	} else if (e[a] === "<") {
		let o = a;
		if (a++, e[a] === "!") {
			a = Gt(e, a);
			continue;
		} else {
			let s = !1;
			e[a] === "/" && (s = !0, a++);
			let c = "";
			for (; a < e.length && e[a] !== ">" && e[a] !== " " && e[a] !== "	" && e[a] !== "\n" && e[a] !== "\r"; a++) c += e[a];
			if (c = c.trim(), c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1), a--), !tn(c)) {
				let t;
				return t = c.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + c + "' is an invalid name.", $t("InvalidTag", t, nn(e, a));
			}
			let l = Jt(e, a);
			if (l === !1) return $t("InvalidAttr", "Attributes for '" + c + "' have open quote.", nn(e, a));
			let u = l.value;
			if (a = l.index, u[u.length - 1] === "/") {
				let n = a - u.length;
				u = u.substring(0, u.length - 1);
				let i = Xt(u, t);
				if (i === !0) r = !0;
				else return $t(i.err.code, i.err.msg, nn(e, n + i.err.line));
			} else if (s) {
				if (!l.tagClosed) return $t("InvalidTag", "Closing tag '" + c + "' doesn't have proper closing.", nn(e, a));
				if (u.trim().length > 0) return $t("InvalidTag", "Closing tag '" + c + "' can't have attributes or invalid starting.", nn(e, o));
				if (n.length === 0) return $t("InvalidTag", "Closing tag '" + c + "' has not been opened.", nn(e, o));
				{
					let t = n.pop();
					if (c !== t.tagName) {
						let n = nn(e, t.tagStartPos);
						return $t("InvalidTag", "Expected closing tag '" + t.tagName + "' (opened in line " + n.line + ", col " + n.col + ") instead of closing tag '" + c + "'.", nn(e, o));
					}
					n.length == 0 && (i = !0);
				}
			} else {
				let s = Xt(u, t);
				if (s !== !0) return $t(s.err.code, s.err.msg, nn(e, a - u.length + s.err.line));
				if (i === !0) return $t("InvalidXml", "Multiple possible root nodes found.", nn(e, a));
				t.unpairedTags.indexOf(c) !== -1 || n.push({
					tagName: c,
					tagStartPos: o
				}), r = !0;
			}
			for (a++; a < e.length; a++) if (e[a] === "<") if (e[a + 1] === "!") {
				a++, a = Gt(e, a);
				continue;
			} else if (e[a + 1] === "?") {
				if (a = Wt(e, ++a), a.err) return a;
			} else break;
			else if (e[a] === "&") {
				let t = Qt(e, a);
				if (t == -1) return $t("InvalidChar", "char '&' is not expected.", nn(e, a));
				a = t;
			} else if (i === !0 && !Ut(e[a])) return $t("InvalidXml", "Extra text at the end", nn(e, a));
			e[a] === "<" && a--;
		}
	} else {
		if (Ut(e[a])) continue;
		return $t("InvalidChar", "char '" + e[a] + "' is not expected.", nn(e, a));
	}
	return r ? n.length == 1 ? $t("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", nn(e, n[0].tagStartPos)) : n.length > 0 ? $t("InvalidXml", "Invalid '" + JSON.stringify(n.map((e) => e.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
		line: 1,
		col: 1
	}) : !0 : $t("InvalidXml", "Start tag expected.", 1);
}
function Ut(e) {
	return e === " " || e === "	" || e === "\n" || e === "\r";
}
function Wt(e, t) {
	let n = t;
	for (; t < e.length; t++) if (e[t] == "?" || e[t] == " ") {
		let r = e.substr(n, t - n);
		if (t > 5 && r === "xml") return $t("InvalidXml", "XML declaration allowed only at the start of the document.", nn(e, t));
		if (e[t] == "?" && e[t + 1] == ">") {
			t++;
			break;
		} else continue;
	}
	return t;
}
function Gt(e, t) {
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
var Kt = "\"", qt = "'";
function Jt(e, t) {
	let n = "", r = "", i = !1;
	for (; t < e.length; t++) {
		if (e[t] === Kt || e[t] === qt) r === "" ? r = e[t] : r !== e[t] || (r = "");
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
var Yt = /* @__PURE__ */ RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
function Xt(e, t) {
	let n = It(e, Yt), r = {};
	for (let e = 0; e < n.length; e++) {
		if (n[e][1].length === 0) return $t("InvalidAttr", "Attribute '" + n[e][2] + "' has no space in starting.", rn(n[e]));
		if (n[e][3] !== void 0 && n[e][4] === void 0) return $t("InvalidAttr", "Attribute '" + n[e][2] + "' is without value.", rn(n[e]));
		if (n[e][3] === void 0 && !t.allowBooleanAttributes) return $t("InvalidAttr", "boolean attribute '" + n[e][2] + "' is not allowed.", rn(n[e]));
		let i = n[e][2];
		if (!en(i)) return $t("InvalidAttr", "Attribute '" + i + "' is an invalid name.", rn(n[e]));
		if (!Object.prototype.hasOwnProperty.call(r, i)) r[i] = 1;
		else return $t("InvalidAttr", "Attribute '" + i + "' is repeated.", rn(n[e]));
	}
	return !0;
}
function Zt(e, t) {
	let n = /\d/;
	for (e[t] === "x" && (t++, n = /[\da-fA-F]/); t < e.length; t++) {
		if (e[t] === ";") return t;
		if (!e[t].match(n)) break;
	}
	return -1;
}
function Qt(e, t) {
	if (t++, e[t] === ";") return -1;
	if (e[t] === "#") return t++, Zt(e, t);
	let n = 0;
	for (; t < e.length; t++, n++) if (!(e[t].match(/\w/) && n < 20)) {
		if (e[t] === ";") break;
		return -1;
	}
	return t;
}
function $t(e, t, n) {
	return { err: {
		code: e,
		msg: t,
		line: n.line || n,
		col: n.col
	} };
}
function en(e) {
	return Lt(e);
}
function tn(e) {
	return Lt(e);
}
function nn(e, t) {
	let n = e.substring(0, t).split(/\r?\n/);
	return {
		line: n.length,
		col: n[n.length - 1].length + 1
	};
}
function rn(e) {
	return e.startIndex + e[1].length;
}
var an = {
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
}, on = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	quot: "\""
}, sn = {
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
}, cn = /* @__PURE__ */ new Set("!?\\\\/[]$%{}^&*()<>|+");
function ln(e) {
	if (e[0] === "#") throw Error(`[EntityReplacer] Invalid character '#' in entity name: "${e}"`);
	for (let t of e) if (cn.has(t)) throw Error(`[EntityReplacer] Invalid character '${t}' in entity name: "${e}"`);
	return e;
}
function un(...e) {
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
var dn = "external", fn = "base", pn = "all";
function mn(e) {
	return !e || e === dn ? /* @__PURE__ */ new Set([dn]) : e === pn ? /* @__PURE__ */ new Set([pn]) : e === fn ? /* @__PURE__ */ new Set([fn]) : Array.isArray(e) ? new Set(e) : /* @__PURE__ */ new Set([dn]);
}
var hn = Object.freeze({
	allow: 0,
	leave: 1,
	remove: 2,
	throw: 3
}), gn = /* @__PURE__ */ new Set([
	9,
	10,
	13
]);
function _n(e) {
	if (!e) return {
		xmlVersion: 1,
		onLevel: hn.allow,
		nullLevel: hn.remove
	};
	let t = e.xmlVersion === 1.1 ? 1.1 : 1, n = hn[e.onNCR] ?? hn.allow, r = hn[e.nullNCR] ?? hn.remove;
	return {
		xmlVersion: t,
		onLevel: n,
		nullLevel: Math.max(r, hn.remove)
	};
}
var vn = class {
	constructor(e = {}) {
		this._limit = e.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = typeof e.postCheck == "function" ? e.postCheck : (e) => e, this._limitTiers = mn(this._limit.applyLimitsTo ?? dn), this._numericAllowed = e.numericAllowed ?? !0, this._baseMap = un(on, e.namedEntities || null), this._externalMap = /* @__PURE__ */ Object.create(null), this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(e.remove && Array.isArray(e.remove) ? e.remove : []), this._leaveSet = new Set(e.leave && Array.isArray(e.leave) ? e.leave : []);
		let t = _n(e.ncr);
		this._ncrXmlVersion = t.xmlVersion, this._ncrOnLevel = t.onLevel, this._ncrNullLevel = t.nullLevel;
	}
	setExternalEntities(e) {
		if (e) for (let t of Object.keys(e)) ln(t);
		this._externalMap = un(e);
	}
	addExternalEntity(e, t) {
		ln(e), typeof t == "string" && t.indexOf("&") === -1 && (this._externalMap[e] = t);
	}
	addInputEntities(e) {
		this._totalExpansions = 0, this._expandedLength = 0, this._inputMap = un(e);
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
			if (this._removeSet.has(l)) u = "", d === void 0 && (d = dn);
			else if (this._leaveSet.has(l)) {
				a++;
				continue;
			} else if (l.charCodeAt(0) === 35) {
				let e = this._resolveNCR(l);
				if (e === void 0) {
					a++;
					continue;
				}
				u = e, d = fn;
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
		return this._limitTiers.has(pn) ? !0 : this._limitTiers.has(e);
	}
	_resolveName(e) {
		if (e in this._inputMap) return {
			value: this._inputMap[e],
			tier: dn
		};
		if (e in this._externalMap) return {
			value: this._externalMap[e],
			tier: dn
		};
		if (e in this._baseMap) return {
			value: this._baseMap[e],
			tier: fn
		};
	}
	_classifyNCR(e) {
		return e === 0 ? this._ncrNullLevel : e >= 55296 && e <= 57343 || this._ncrXmlVersion === 1 && e >= 1 && e <= 31 && !gn.has(e) ? hn.remove : -1;
	}
	_applyNCRAction(e, t, n) {
		switch (e) {
			case hn.allow: return String.fromCodePoint(n);
			case hn.remove: return "";
			case hn.leave: return;
			case hn.throw: throw Error(`[EntityDecoder] Prohibited numeric character reference &${t}; (U+${n.toString(16).toUpperCase().padStart(4, "0")})`);
			default: return String.fromCodePoint(n);
		}
	}
	_resolveNCR(e) {
		let t = e.charCodeAt(1), n;
		if (n = t === 120 || t === 88 ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), Number.isNaN(n) || n < 0 || n > 1114111) return;
		let r = this._classifyNCR(n);
		if (!this._numericAllowed && r < hn.remove) return;
		let i = r === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, r);
		return this._applyNCRAction(i, e, n);
	}
}, yn = (e) => zt.includes(e) ? "__" + e : e, bn = {
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
	onDangerousProperty: yn
};
function xn(e, t) {
	if (typeof e != "string") return;
	let n = e.toLowerCase();
	if (zt.some((e) => n === e.toLowerCase()) || Bt.some((e) => n === e.toLowerCase())) throw Error(`[SECURITY] Invalid ${t}: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
}
function Sn(e, t) {
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
	} : Sn(!0);
}
var Cn = function(e) {
	let t = Object.assign({}, bn, e), n = [
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
	for (let { value: e, name: t } of n) e && xn(e, t);
	return t.onDangerousProperty === null && (t.onDangerousProperty = yn), t.processEntities = Sn(t.processEntities, t.htmlEntities), t.unpairedTagsSet = new Set(t.unpairedTags), t.stopNodes && Array.isArray(t.stopNodes) && (t.stopNodes = t.stopNodes.map((e) => typeof e == "string" && e.startsWith("*.") ? ".." + e.substring(2) : e)), t;
}, wn = typeof Symbol == "function" ? Symbol("XML Node Metadata") : "@@xmlMetadata", Tn = class {
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
		}) : this.child.push({ [e.tagname]: e.child }), t !== void 0 && (this.child[this.child.length - 1][wn] = { startIndex: t });
	}
	static getMetaDataSymbol() {
		return wn;
	}
}, En = class {
	constructor(e) {
		this.suppressValidationErr = !e, this.options = e;
	}
	readDocType(e, t) {
		let n = /* @__PURE__ */ Object.create(null), r = 0;
		if (e[t + 3] === "O" && e[t + 4] === "C" && e[t + 5] === "T" && e[t + 6] === "Y" && e[t + 7] === "P" && e[t + 8] === "E") {
			t += 9;
			let i = 1, a = !1, o = !1, s = "";
			for (; t < e.length; t++) if (e[t] === "<" && !o) {
				if (a && On(e, "!ENTITY", t)) {
					t += 7;
					let i, a;
					if ([i, a, t] = this.readEntityExp(e, t + 1, this.suppressValidationErr), a.indexOf("&") === -1) {
						if (this.options.enabled !== !1 && this.options.maxEntityCount != null && r >= this.options.maxEntityCount) throw Error(`Entity count (${r + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
						n[i] = a, r++;
					}
				} else if (a && On(e, "!ELEMENT", t)) {
					t += 8;
					let { index: n } = this.readElementExp(e, t + 1);
					t = n;
				} else if (a && On(e, "!ATTLIST", t)) t += 8;
				else if (a && On(e, "!NOTATION", t)) {
					t += 9;
					let { index: n } = this.readNotationExp(e, t + 1, this.suppressValidationErr);
					t = n;
				} else if (On(e, "!--", t)) o = !0;
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
		t = Dn(e, t);
		let n = t;
		for (; t < e.length && !/\s/.test(e[t]) && e[t] !== "\"" && e[t] !== "'";) t++;
		let r = e.substring(n, t);
		if (kn(r), t = Dn(e, t), !this.suppressValidationErr) {
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
		t = Dn(e, t);
		let n = t;
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		!this.suppressValidationErr && kn(r), t = Dn(e, t);
		let i = e.substring(t, t + 6).toUpperCase();
		if (!this.suppressValidationErr && i !== "SYSTEM" && i !== "PUBLIC") throw Error(`Expected SYSTEM or PUBLIC, found "${i}"`);
		t += i.length, t = Dn(e, t);
		let a = null, o = null;
		if (i === "PUBLIC") [t, a] = this.readIdentifierVal(e, t, "publicIdentifier"), t = Dn(e, t), (e[t] === "\"" || e[t] === "'") && ([t, o] = this.readIdentifierVal(e, t, "systemIdentifier"));
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
		t = Dn(e, t);
		let n = t;
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		if (!this.suppressValidationErr && !Lt(r)) throw Error(`Invalid element name: "${r}"`);
		t = Dn(e, t);
		let i = "";
		if (e[t] === "E" && On(e, "MPTY", t)) t += 4;
		else if (e[t] === "A" && On(e, "NY", t)) t += 2;
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
		t = Dn(e, t);
		let n = t;
		for (; t < e.length && !/\s/.test(e[t]);) t++;
		let r = e.substring(n, t);
		for (kn(r), t = Dn(e, t), n = t; t < e.length && !/\s/.test(e[t]);) t++;
		let i = e.substring(n, t);
		if (!kn(i)) throw Error(`Invalid attribute name: "${i}"`);
		t = Dn(e, t);
		let a = "";
		if (e.substring(t, t + 8).toUpperCase() === "NOTATION") {
			if (a = "NOTATION", t += 8, t = Dn(e, t), e[t] !== "(") throw Error(`Expected '(', found "${e[t]}"`);
			t++;
			let n = [];
			for (; t < e.length && e[t] !== ")";) {
				let r = t;
				for (; t < e.length && e[t] !== "|" && e[t] !== ")";) t++;
				let i = e.substring(r, t);
				if (i = i.trim(), !kn(i)) throw Error(`Invalid notation name: "${i}"`);
				n.push(i), e[t] === "|" && (t++, t = Dn(e, t));
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
		t = Dn(e, t);
		let o = "";
		return e.substring(t, t + 8).toUpperCase() === "#REQUIRED" ? (o = "#REQUIRED", t += 8) : e.substring(t, t + 7).toUpperCase() === "#IMPLIED" ? (o = "#IMPLIED", t += 7) : [t, o] = this.readIdentifierVal(e, t, "ATTLIST"), {
			elementName: r,
			attributeName: i,
			attributeType: a,
			defaultValue: o,
			index: t
		};
	}
}, Dn = (e, t) => {
	for (; t < e.length && /\s/.test(e[t]);) t++;
	return t;
};
function On(e, t, n) {
	for (let r = 0; r < t.length; r++) if (t[r] !== e[n + r + 1]) return !1;
	return !0;
}
function kn(e) {
	if (Lt(e)) return e;
	throw Error(`Invalid entity name ${e}`);
}
var An = /^[-+]?0x[a-fA-F0-9]+$/, jn = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Mn = {
	hex: !0,
	leadingZeros: !0,
	decimalPoint: ".",
	eNotation: !0,
	infinity: "original"
};
function Nn(e, t = {}) {
	if (t = Object.assign({}, Mn, t), !e || typeof e != "string") return e;
	let n = e.trim();
	if (n.length === 0 || t.skipLike !== void 0 && t.skipLike.test(n)) return e;
	if (n === "0") return 0;
	if (t.hex && An.test(n)) return Ln(n, 16);
	if (!isFinite(n)) return Rn(e, Number(n), t);
	if (n.includes("e") || n.includes("E")) return Fn(e, n, t);
	{
		let r = jn.exec(n);
		if (r) {
			let i = r[1] || "", a = r[2], o = In(r[3]), s = i ? e[a.length + 1] === "." : e[a.length] === ".";
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
}
var Pn = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function Fn(e, t, n) {
	if (!n.eNotation) return e;
	let r = t.match(Pn);
	if (r) {
		let i = r[1] || "", a = r[3].indexOf("e") === -1 ? "E" : "e", o = r[2], s = i ? e[o.length + 1] === a : e[o.length] === a;
		return o.length > 1 && s ? e : o.length === 1 && (r[3].startsWith(`.${a}`) || r[3][0] === a) ? Number(t) : o.length > 0 ? n.leadingZeros && !s ? (t = (r[1] || "") + r[3], Number(t)) : e : Number(t);
	} else return e;
}
function In(e) {
	return e && e.indexOf(".") !== -1 ? (e = e.replace(/0+$/, ""), e === "." ? e = "0" : e[0] === "." ? e = "0" + e : e[e.length - 1] === "." && (e = e.substring(0, e.length - 1)), e) : e;
}
function Ln(e, t) {
	if (parseInt) return parseInt(e, t);
	if (Number.parseInt) return Number.parseInt(e, t);
	if (window && window.parseInt) return window.parseInt(e, t);
	throw Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function Rn(e, t, n) {
	let r = t === Infinity;
	switch (n.infinity.toLowerCase()) {
		case "null": return null;
		case "infinity": return t;
		case "string": return r ? "Infinity" : "-Infinity";
		default: return e;
	}
}
function zn(e) {
	return typeof e == "function" ? e : Array.isArray(e) ? (t) => {
		for (let n of e) if (typeof n == "string" && t === n || n instanceof RegExp && n.test(t)) return !0;
	} : () => !1;
}
var Bn = class {
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
}, Vn = class {
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
}, Hn = class {
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
}, Un = class {
	constructor(e = {}) {
		this.separator = e.separator || ".", this.path = [], this.siblingStacks = [], this._pathStringCache = null, this._view = new Hn(this);
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
function Wn(e, t) {
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
function Gn(e) {
	if (!e || typeof e != "string") return;
	let t = e.indexOf(":");
	if (t !== -1 && t > 0) {
		let n = e.substring(0, t);
		if (n !== "xmlns") return n;
	}
}
var Kn = class {
	constructor(e, t) {
		this.options = e, this.currentNode = null, this.tagsNodeStack = [], this.parseXml = Zn, this.parseTextData = qn, this.resolveNameSpace = Jn, this.buildAttributesMap = Xn, this.isItStopNode = tr, this.replaceEntitiesValue = $n, this.readStopNodeData = or, this.saveTextToParentTag = er, this.addChild = Qn, this.ignoreAttributesFn = zn(this.options.ignoreAttributes), this.entityExpansionCount = 0, this.currentExpandedLength = 0;
		let n = { ...on };
		this.options.entityDecoder ? this.entityDecoder = this.options.entityDecoder : (typeof this.options.htmlEntities == "object" ? n = this.options.htmlEntities : this.options.htmlEntities === !0 && (n = {
			...sn,
			...an
		}), this.entityDecoder = new vn({
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
		})), this.matcher = new Un(), this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = !1, this.stopNodeExpressionsSet = new Vn();
		let r = this.options.stopNodes;
		if (r && r.length > 0) {
			for (let e = 0; e < r.length; e++) {
				let t = r[e];
				typeof t == "string" ? this.stopNodeExpressionsSet.add(new Bn(t)) : t instanceof Bn && this.stopNodeExpressionsSet.add(t);
			}
			this.stopNodeExpressionsSet.seal();
		}
	}
};
function qn(e, t, n, r, i, a, o) {
	let s = this.options;
	if (e !== void 0 && (s.trimValues && !r && (e = e.trim()), e.length > 0)) {
		o || (e = this.replaceEntitiesValue(e, t, n));
		let r = s.jPath ? n.toString() : n, c = s.tagValueProcessor(t, e, r, i, a);
		return c == null ? e : typeof c != typeof e || c !== e ? c : s.trimValues || e.trim() === e ? sr(e, s.parseTagValue, s.numberParseOptions) : e;
	}
}
function Jn(e) {
	if (this.options.removeNSPrefix) {
		let t = e.split(":"), n = e.charAt(0) === "/" ? "/" : "";
		if (t[0] === "xmlns") return "";
		t.length === 2 && (e = n + t[1]);
	}
	return e;
}
var Yn = /* @__PURE__ */ RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
function Xn(e, t, n, r = !1) {
	let i = this.options;
	if (r === !0 || i.ignoreAttributes !== !0 && typeof e == "string") {
		let r = It(e, Yn), a = r.length, o = {}, s = Array(a), c = !1, l = {};
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
			if (t.length) if (i.transformAttributeName && (n = i.transformAttributeName(n)), n = lr(n, i), r[e][4] !== void 0) {
				let r = s[e], a = i.attributeValueProcessor(t, r, u);
				a == null ? o[n] = r : typeof a != typeof r || a !== r ? o[n] = a : o[n] = sr(r, i.parseAttributeValue, i.numberParseOptions), d = !0;
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
var Zn = function(e) {
	e = e.replace(/\r\n?/g, "\n");
	let t = new Tn("!xml"), n = t, r = "";
	this.matcher.reset(), this.entityDecoder.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0;
	let i = this.options, a = new En(i.processEntities), o = e.length;
	for (let s = 0; s < o; s++) if (e[s] === "<") {
		let c = e.charCodeAt(s + 1);
		if (c === 47) {
			let t = rr(e, ">", s, "Closing Tag is not closed."), a = e.substring(s + 2, t).trim();
			if (i.removeNSPrefix) {
				let e = a.indexOf(":");
				e !== -1 && (a = a.substr(e + 1));
			}
			a = cr(i.transformTagName, a, "", i).tagName, n && (r = this.saveTextToParentTag(r, n, this.readonlyMatcher));
			let o = this.matcher.getCurrentTag();
			if (a && i.unpairedTagsSet.has(a)) throw Error(`Unpaired tag can not be used as closing tag: </${a}>`);
			o && i.unpairedTagsSet.has(o) && (this.matcher.pop(), this.tagsNodeStack.pop()), this.matcher.pop(), this.isCurrentNodeStopNode = !1, n = this.tagsNodeStack.pop(), r = "", s = t;
		} else if (c === 63) {
			let t = ar(e, s, !1, "?>");
			if (!t) throw Error("Pi Tag is not closed.");
			r = this.saveTextToParentTag(r, n, this.readonlyMatcher);
			let a = this.buildAttributesMap(t.tagExp, this.matcher, t.tagName, !0);
			if (a) {
				let e = a[this.options.attributeNamePrefix + "version"];
				this.entityDecoder.setXmlVersion(Number(e) || 1);
			}
			if (!(i.ignoreDeclaration && t.tagName === "?xml" || i.ignorePiTags)) {
				let e = new Tn(t.tagName);
				e.add(i.textNodeName, ""), t.tagName !== t.tagExp && t.attrExpPresent && i.ignoreAttributes !== !0 && (e[":@"] = a), this.addChild(n, e, this.readonlyMatcher, s);
			}
			s = t.closeIndex + 1;
		} else if (c === 33 && e.charCodeAt(s + 2) === 45 && e.charCodeAt(s + 3) === 45) {
			let t = rr(e, "-->", s + 4, "Comment is not closed.");
			if (i.commentPropName) {
				let a = e.substring(s + 4, t - 2);
				r = this.saveTextToParentTag(r, n, this.readonlyMatcher), n.add(i.commentPropName, [{ [i.textNodeName]: a }]);
			}
			s = t;
		} else if (c === 33 && e.charCodeAt(s + 2) === 68) {
			let t = a.readDocType(e, s);
			this.entityDecoder.addInputEntities(t.entities), s = t.i;
		} else if (c === 33 && e.charCodeAt(s + 2) === 91) {
			let t = rr(e, "]]>", s, "CDATA is not closed.") - 2, a = e.substring(s + 9, t);
			r = this.saveTextToParentTag(r, n, this.readonlyMatcher);
			let o = this.parseTextData(a, n.tagname, this.readonlyMatcher, !0, !1, !0, !0);
			o ??= "", i.cdataPropName ? n.add(i.cdataPropName, [{ [i.textNodeName]: a }]) : n.add(i.textNodeName, o), s = t + 2;
		} else {
			let a = ar(e, s, i.removeNSPrefix);
			if (!a) {
				let t = e.substring(Math.max(0, s - 50), Math.min(o, s + 50));
				throw Error(`readTagExp returned undefined at position ${s}. Context: "${t}"`);
			}
			let c = a.tagName, l = a.rawTagName, u = a.tagExp, d = a.attrExpPresent, f = a.closeIndex;
			if ({tagName: c, tagExp: u} = cr(i.transformTagName, c, u, i), i.strictReservedNames && (c === i.commentPropName || c === i.cdataPropName || c === i.textNodeName || c === i.attributesGroupName)) throw Error(`Invalid tag name: ${c}`);
			n && r && n.tagname !== "!xml" && (r = this.saveTextToParentTag(r, n, this.readonlyMatcher, !1));
			let p = n;
			p && i.unpairedTagsSet.has(p.tagname) && (n = this.tagsNodeStack.pop(), this.matcher.pop());
			let m = !1;
			u.length > 0 && u.lastIndexOf("/") === u.length - 1 && (m = !0, c[c.length - 1] === "/" ? (c = c.substr(0, c.length - 1), u = c) : u = u.substr(0, u.length - 1), d = c !== u);
			let h = null, g;
			g = Gn(l), c !== t.tagname && this.matcher.push(c, {}, g), c !== u && d && (h = this.buildAttributesMap(u, this.matcher, c), h && Wn(h, i)), c !== t.tagname && (this.isCurrentNodeStopNode = this.isItStopNode());
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
				let r = new Tn(c);
				h && (r[":@"] = h), r.add(i.textNodeName, t), this.matcher.pop(), this.isCurrentNodeStopNode = !1, this.addChild(n, r, this.readonlyMatcher, _);
			} else {
				if (m) {
					({tagName: c, tagExp: u} = cr(i.transformTagName, c, u, i));
					let e = new Tn(c);
					h && (e[":@"] = h), this.addChild(n, e, this.readonlyMatcher, _), this.matcher.pop(), this.isCurrentNodeStopNode = !1;
				} else if (i.unpairedTagsSet.has(c)) {
					let e = new Tn(c);
					h && (e[":@"] = h), this.addChild(n, e, this.readonlyMatcher, _), this.matcher.pop(), this.isCurrentNodeStopNode = !1, s = a.closeIndex;
					continue;
				} else {
					let e = new Tn(c);
					if (this.tagsNodeStack.length > i.maxNestedTags) throw Error("Maximum nested tags exceeded");
					this.tagsNodeStack.push(n), h && (e[":@"] = h), this.addChild(n, e, this.readonlyMatcher, _), n = e;
				}
				r = "", s = f;
			}
		}
	} else r += e[s];
	return t.child;
};
function Qn(e, t, n, r) {
	this.options.captureMetaData || (r = void 0);
	let i = this.options.jPath ? n.toString() : n, a = this.options.updateTag(t.tagname, i, t[":@"]);
	a === !1 || (typeof a == "string" && (t.tagname = a), e.addChild(t, r));
}
function $n(e, t, n) {
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
function er(e, t, n, r) {
	return e &&= (r === void 0 && (r = t.child.length === 0), e = this.parseTextData(e, t.tagname, n, !1, t[":@"] ? Object.keys(t[":@"]).length !== 0 : !1, r), e !== void 0 && e !== "" && t.add(this.options.textNodeName, e), ""), e;
}
function tr() {
	return this.stopNodeExpressionsSet.size !== 0 && this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
function nr(e, t, n = ">") {
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
function rr(e, t, n, r) {
	let i = e.indexOf(t, n);
	if (i === -1) throw Error(r);
	return i + t.length - 1;
}
function ir(e, t, n, r) {
	let i = e.indexOf(t, n);
	if (i === -1) throw Error(r);
	return i;
}
function ar(e, t, n, r = ">") {
	let i = nr(e, t + 1, r);
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
function or(e, t, n) {
	let r = n, i = 1, a = e.length;
	for (; n < a; n++) if (e[n] === "<") {
		let a = e.charCodeAt(n + 1);
		if (a === 47) {
			let a = ir(e, ">", n, `${t} is not closed`);
			if (e.substring(n + 2, a).trim() === t && (i--, i === 0)) return {
				tagContent: e.substring(r, n),
				i: a
			};
			n = a;
		} else if (a === 63) n = rr(e, "?>", n + 1, "StopNode is not closed.");
		else if (a === 33 && e.charCodeAt(n + 2) === 45 && e.charCodeAt(n + 3) === 45) n = rr(e, "-->", n + 3, "StopNode is not closed.");
		else if (a === 33 && e.charCodeAt(n + 2) === 91) n = rr(e, "]]>", n, "StopNode is not closed.") - 2;
		else {
			let r = ar(e, n, ">");
			r && ((r && r.tagName) === t && r.tagExp[r.tagExp.length - 1] !== "/" && i++, n = r.closeIndex);
		}
	}
}
function sr(e, t, n) {
	if (t && typeof e == "string") {
		let t = e.trim();
		return t === "true" || t !== "false" && Nn(e, n);
	} else if (Rt(e)) return e;
	else return "";
}
function cr(e, t, n, r) {
	if (e) {
		let r = e(t);
		n === t && (n = r), t = r;
	}
	return t = lr(t, r), {
		tagName: t,
		tagExp: n
	};
}
function lr(e, t) {
	if (Bt.includes(e)) throw Error(`[SECURITY] Invalid name: "${e}" is a reserved JavaScript keyword that could cause prototype pollution`);
	return zt.includes(e) ? t.onDangerousProperty(e) : e;
}
var ur = Tn.getMetaDataSymbol();
function dr(e, t) {
	if (!e || typeof e != "object") return {};
	if (!t) return e;
	let n = {};
	for (let r in e) if (r.startsWith(t)) {
		let i = r.substring(t.length);
		n[i] = e[r];
	} else n[r] = e[r];
	return n;
}
function fr(e, t, n, r) {
	return pr(e, t, n, r);
}
function pr(e, t, n, r) {
	let i, a = {};
	for (let o = 0; o < e.length; o++) {
		let s = e[o], c = mr(s);
		if (c !== void 0 && c !== t.textNodeName) {
			let e = dr(s[":@"] || {}, t.attributeNamePrefix);
			n.push(c, e);
		}
		if (c === t.textNodeName) i === void 0 ? i = s[c] : i += "" + s[c];
		else if (c === void 0) continue;
		else if (s[c]) {
			let e = pr(s[c], t, n, r), i = gr(e, t);
			if (s[":@"] ? hr(e, s[":@"], r, t) : Object.keys(e).length === 1 && e[t.textNodeName] !== void 0 && !t.alwaysCreateTextNode ? e = e[t.textNodeName] : Object.keys(e).length === 0 && (t.alwaysCreateTextNode ? e[t.textNodeName] = "" : e = ""), s[ur] !== void 0 && typeof e == "object" && e && (e[ur] = s[ur]), a[c] !== void 0 && Object.prototype.hasOwnProperty.call(a, c)) Array.isArray(a[c]) || (a[c] = [a[c]]), a[c].push(e);
			else {
				let n = t.jPath ? r.toString() : r;
				t.isArray(c, n, i) ? a[c] = [e] : a[c] = e;
			}
			c !== void 0 && c !== t.textNodeName && n.pop();
		}
	}
	return typeof i == "string" ? i.length > 0 && (a[t.textNodeName] = i) : i !== void 0 && (a[t.textNodeName] = i), a;
}
function mr(e) {
	let t = Object.keys(e);
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (n !== ":@") return n;
	}
}
function hr(e, t, n, r) {
	if (t) {
		let i = Object.keys(t), a = i.length;
		for (let o = 0; o < a; o++) {
			let a = i[o], s = a.startsWith(r.attributeNamePrefix) ? a.substring(r.attributeNamePrefix.length) : a, c = r.jPath ? n.toString() + "." + s : n;
			r.isArray(a, c, !0, !0) ? e[a] = [t[a]] : e[a] = t[a];
		}
	}
}
function gr(e, t) {
	let { textNodeName: n } = t, r = Object.keys(e).length;
	return !!(r === 0 || r === 1 && (e[n] || typeof e[n] == "boolean" || e[n] === 0));
}
var _r = class {
	constructor(e) {
		this.externalEntities = {}, this.options = Cn(e);
	}
	parse(e, t) {
		if (typeof e != "string" && e.toString) e = e.toString();
		else if (typeof e != "string") throw Error("XML data is accepted in String or Bytes[] form.");
		if (t) {
			t === !0 && (t = {});
			let n = Ht(e, t);
			if (n !== !0) throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`);
		}
		let n = new Kn(this.options, this.externalEntities), r = n.parseXml(e);
		return this.options.preserveOrder || r === void 0 ? r : fr(r, this.options, n.matcher, n.readonlyMatcher);
	}
	addEntity(e, t) {
		if (t.indexOf("&") !== -1) throw Error("Entity value can't have '&'");
		if (e.indexOf("&") !== -1 || e.indexOf(";") !== -1) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
		if (t === "&") throw Error("An entity with value '&' is not permitted");
		this.externalEntities[e] = t;
	}
	static getMetaDataSymbol() {
		return Tn.getMetaDataSymbol();
	}
}, vr = "\n";
function yr(e, t) {
	let n = "";
	t.format && t.indentBy.length > 0 && (n = vr);
	let r = [];
	if (t.stopNodes && Array.isArray(t.stopNodes)) for (let e = 0; e < t.stopNodes.length; e++) {
		let n = t.stopNodes[e];
		typeof n == "string" ? r.push(new Bn(n)) : n instanceof Bn && r.push(n);
	}
	let i = new Un();
	return br(e, t, n, i, r);
}
function br(e, t, n, r, i) {
	let a = "", o = !1;
	if (t.maxNestedTags && r.getDepth() > t.maxNestedTags) throw Error("Maximum nested tags exceeded");
	if (!Array.isArray(e)) {
		if (e != null) {
			let n = e.toString();
			return n = Dr(n, t), n;
		}
		return "";
	}
	for (let s = 0; s < e.length; s++) {
		let c = e[s], l = wr(c);
		if (l === void 0) continue;
		let u = xr(c[":@"], t);
		r.push(l, u);
		let d = Er(r, i);
		if (l === t.textNodeName) {
			let e = c[l];
			d || (e = t.tagValueProcessor(l, e), e = Dr(e, t)), o && (a += n), a += e, o = !1, r.pop();
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
			let e = Tr(c[":@"], t, d), i = l === "?xml" ? "" : n, s = c[l][0][t.textNodeName];
			s = s.length === 0 ? "" : " " + s, a += i + `<${l}${s}${e}?>`, o = !0, r.pop();
			continue;
		}
		let f = n;
		f !== "" && (f += t.indentBy);
		let p = n + `<${l}${Tr(c[":@"], t, d)}`, m;
		m = d ? Sr(c[l], t) : br(c[l], t, f, r, i), t.unpairedTags.indexOf(l) === -1 ? (!m || m.length === 0) && t.suppressEmptyNode ? a += p + "/>" : m && m.endsWith(">") ? a += p + `>${m}${n}</${l}>` : (a += p + ">", m && n !== "" && (m.includes("/>") || m.includes("</")) ? a += n + t.indentBy + m + n : a += m, a += `</${l}>`) : t.suppressUnpairedNode ? a += p + ">" : a += p + "/>", o = !0, r.pop();
	}
	return a;
}
function xr(e, t) {
	if (!e || t.ignoreAttributes) return null;
	let n = {}, r = !1;
	for (let i in e) {
		if (!Object.prototype.hasOwnProperty.call(e, i)) continue;
		let a = i.startsWith(t.attributeNamePrefix) ? i.substr(t.attributeNamePrefix.length) : i;
		n[a] = e[i], r = !0;
	}
	return r ? n : null;
}
function Sr(e, t) {
	if (!Array.isArray(e)) return e == null ? "" : e.toString();
	let n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e[r], a = wr(i);
		if (a === t.textNodeName) n += i[a];
		else if (a === t.cdataPropName) n += i[a][0][t.textNodeName];
		else if (a === t.commentPropName) n += i[a][0][t.textNodeName];
		else if (a && a[0] === "?") continue;
		else if (a) {
			let e = Cr(i[":@"], t), r = Sr(i[a], t);
			!r || r.length === 0 ? n += `<${a}${e}/>` : n += `<${a}${e}>${r}</${a}>`;
		}
	}
	return n;
}
function Cr(e, t) {
	let n = "";
	if (e && !t.ignoreAttributes) for (let r in e) {
		if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
		let i = e[r];
		i === !0 && t.suppressBooleanAttributes ? n += ` ${r.substr(t.attributeNamePrefix.length)}` : n += ` ${r.substr(t.attributeNamePrefix.length)}="${i}"`;
	}
	return n;
}
function wr(e) {
	let t = Object.keys(e);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (Object.prototype.hasOwnProperty.call(e, r) && r !== ":@") return r;
	}
}
function Tr(e, t, n) {
	let r = "";
	if (e && !t.ignoreAttributes) for (let i in e) {
		if (!Object.prototype.hasOwnProperty.call(e, i)) continue;
		let a;
		n ? a = e[i] : (a = t.attributeValueProcessor(i, e[i]), a = Dr(a, t)), a === !0 && t.suppressBooleanAttributes ? r += ` ${i.substr(t.attributeNamePrefix.length)}` : r += ` ${i.substr(t.attributeNamePrefix.length)}="${a}"`;
	}
	return r;
}
function Er(e, t) {
	if (!t || t.length === 0) return !1;
	for (let n = 0; n < t.length; n++) if (e.matches(t[n])) return !0;
	return !1;
}
function Dr(e, t) {
	if (e && e.length > 0 && t.processEntities) for (let n = 0; n < t.entities.length; n++) {
		let r = t.entities[n];
		e = e.replace(r.regex, r.val);
	}
	return e;
}
function Or(e) {
	return typeof e == "function" ? e : Array.isArray(e) ? (t) => {
		for (let n of e) if (typeof n == "string" && t === n || n instanceof RegExp && n.test(t)) return !0;
	} : () => !1;
}
var kr = {
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
function Ar(e) {
	if (this.options = Object.assign({}, kr, e), this.options.stopNodes && Array.isArray(this.options.stopNodes) && (this.options.stopNodes = this.options.stopNodes.map((e) => typeof e == "string" && e.startsWith("*.") ? ".." + e.substring(2) : e)), this.stopNodeExpressions = [], this.options.stopNodes && Array.isArray(this.options.stopNodes)) for (let e = 0; e < this.options.stopNodes.length; e++) {
		let t = this.options.stopNodes[e];
		typeof t == "string" ? this.stopNodeExpressions.push(new Bn(t)) : t instanceof Bn && this.stopNodeExpressions.push(t);
	}
	this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
		return !1;
	} : (this.ignoreAttributesFn = Or(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = Nr), this.processTextOrObjNode = jr, this.options.format ? (this.indentate = Mr, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
		return "";
	}, this.tagEndChar = ">", this.newLine = "");
}
Ar.prototype.build = function(e) {
	if (this.options.preserveOrder) return yr(e, this.options);
	{
		Array.isArray(e) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (e = { [this.options.arrayNodeName]: e });
		let t = new Un();
		return this.j2x(e, 0, t).val;
	}
}, Ar.prototype.j2x = function(e, t, n) {
	let r = "", i = "";
	if (this.options.maxNestedTags && n.getDepth() >= this.options.maxNestedTags) throw Error("Maximum nested tags exceeded");
	let a = this.options.jPath ? n.toString() : n, o = this.checkStopNode(n);
	for (let s in e) if (Object.prototype.hasOwnProperty.call(e, s)) if (e[s] === void 0) this.isAttribute(s) && (i += "");
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
			if (r !== void 0) if (r === null) s[0] === "?" ? i += this.indentate(t) + "<" + s + "?" + this.tagEndChar : i += this.indentate(t) + "<" + s + "/" + this.tagEndChar;
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
}, Ar.prototype.buildAttrPairStr = function(e, t, n) {
	return n || (t = this.options.attributeValueProcessor(e, "" + t), t = this.replaceEntitiesValue(t)), this.options.suppressBooleanAttributes && t === "true" ? " " + e : " " + e + "=\"" + t + "\"";
};
function jr(e, t, n, r) {
	let i = this.extractAttributes(e);
	if (r.push(t, i), this.checkStopNode(r)) {
		let i = this.buildRawContent(e), a = this.buildAttributesForStopNode(e);
		return r.pop(), this.buildObjectNode(i, t, a, n);
	}
	let a = this.j2x(e, n + 1, r);
	return r.pop(), e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1 ? this.buildTextValNode(e[this.options.textNodeName], t, a.attrStr, n, r) : this.buildObjectNode(a.val, t, a.attrStr, n);
}
Ar.prototype.extractAttributes = function(e) {
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
}, Ar.prototype.buildRawContent = function(e) {
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
}, Ar.prototype.buildAttributesForStopNode = function(e) {
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
}, Ar.prototype.buildObjectNode = function(e, t, n, r) {
	if (e === "") return t[0] === "?" ? this.indentate(r) + "<" + t + n + "?" + this.tagEndChar : this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar;
	{
		let i = "</" + t + this.tagEndChar, a = "";
		return t[0] === "?" && (a = "?", i = ""), (n || n === "") && e.indexOf("<") === -1 ? this.indentate(r) + "<" + t + n + a + ">" + e + i : this.options.commentPropName !== !1 && t === this.options.commentPropName && a.length === 0 ? this.indentate(r) + `<!--${e}-->` + this.newLine : this.indentate(r) + "<" + t + n + a + this.tagEndChar + e + this.indentate(r) + i;
	}
}, Ar.prototype.closeTag = function(e) {
	let t = "";
	return this.options.unpairedTags.indexOf(e) === -1 ? t = this.options.suppressEmptyNode ? "/" : `></${e}` : this.options.suppressUnpairedNode || (t = "/"), t;
}, Ar.prototype.checkStopNode = function(e) {
	if (!this.stopNodeExpressions || this.stopNodeExpressions.length === 0) return !1;
	for (let t = 0; t < this.stopNodeExpressions.length; t++) if (e.matches(this.stopNodeExpressions[t])) return !0;
	return !1;
}, Ar.prototype.buildTextValNode = function(e, t, n, r, i) {
	if (this.options.cdataPropName !== !1 && t === this.options.cdataPropName) {
		let t = String(e).replace(/\]\]>/g, "]]]]><![CDATA[>");
		return this.indentate(r) + `<![CDATA[${t}]]>` + this.newLine;
	} else if (this.options.commentPropName !== !1 && t === this.options.commentPropName) {
		let t = String(e).replace(/--/g, "- -").replace(/-$/, "- ");
		return this.indentate(r) + `<!--${t}-->` + this.newLine;
	} else if (t[0] === "?") return this.indentate(r) + "<" + t + n + "?" + this.tagEndChar;
	else {
		let i = this.options.tagValueProcessor(t, e);
		return i = this.replaceEntitiesValue(i), i === "" ? this.indentate(r) + "<" + t + n + this.closeTag(t) + this.tagEndChar : this.indentate(r) + "<" + t + n + ">" + i + "</" + t + this.tagEndChar;
	}
}, Ar.prototype.replaceEntitiesValue = function(e) {
	if (e && e.length > 0 && this.options.processEntities) for (let t = 0; t < this.options.entities.length; t++) {
		let n = this.options.entities[t];
		e = e.replace(n.regex, n.val);
	}
	return e;
};
function Mr(e) {
	return this.options.indentBy.repeat(e);
}
function Nr(e) {
	return e.startsWith(this.options.attributeNamePrefix) && e !== this.options.textNodeName ? e.substr(this.attrPrefixLen) : !1;
}
var Pr = class {};
X(Pr, "parser", new _r({
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
})), X(Pr, "builder", new Ar({
	attributeNamePrefix: "$",
	ignoreAttributes: !1,
	suppressBooleanAttributes: !1
}));
var Fr = class e {
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
}, Ir = class {
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
}, Lr = class {
	constructor(e, t, n, r) {
		X(this, "_component"), X(this, "name"), X(this, "uuid"), this._component = e, this.name = n, this.uuid = r ?? Pt.create(), t.get(zr).list.set(this.uuid, this);
	}
	get controls() {
		return Ir.copySchema(this._config);
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
			if (Ir.isEntry(r)) if (r.type === "Color") {
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
			if (Ir.isEntry(r)) if (r.type === "Color") {
				let { r: e, g: i, b: a } = r.value;
				t[n] = {
					...r,
					value: new A(e, i, a)
				};
			} else if (r.type === "Vector3") {
				let { x: e, y: i, z: a } = r.value;
				t[n] = {
					...r,
					value: new U(e, i, a)
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
}, Rr = class e extends Et {
	constructor(t) {
		super(t), X(this, "list", new r()), X(this, "enabled", !0), t.add(e.uuid, this);
	}
};
X(Rr, "uuid", "b8c764e0-6b24-4e77-9a32-35fa728ee5b4");
var zr = Rr, Br = class {
	constructor(e) {
		X(this, "_event"), X(this, "_position", new T()), X(this, "onDisposed", new Z()), X(this, "updateMouseInfo", (e) => {
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
}, Vr = 0, Hr = 1, Ur = 2, Wr = 0, Gr = 1, Kr = 2, qr = 1.25, Jr = 1, Yr = 32, Xr = Yr / 4, Zr = 65535, Qr = 2 ** -24, $r = Symbol("SKIP_GENERATION"), ei = {
	strategy: Vr,
	maxDepth: 40,
	maxLeafSize: 10,
	useSharedArrayBuffer: !1,
	setBoundingBox: !0,
	onProgress: null,
	indirect: !1,
	verbose: !0,
	range: null,
	[$r]: !1
};
function ti(e, t, n) {
	return n.min.x = t[e], n.min.y = t[e + 1], n.min.z = t[e + 2], n.max.x = t[e + 3], n.max.y = t[e + 4], n.max.z = t[e + 5], n;
}
function ni(e) {
	let t = -1, n = -Infinity;
	for (let r = 0; r < 3; r++) {
		let i = e[r + 3] - e[r];
		i > n && (n = i, t = r);
	}
	return t;
}
function ri(e, t) {
	t.set(e);
}
function ii(e, t, n) {
	let r, i;
	for (let a = 0; a < 3; a++) {
		let o = a + 3;
		r = e[a], i = t[a], n[a] = r < i ? r : i, r = e[o], i = t[o], n[o] = r > i ? r : i;
	}
}
function ai(e, t, n) {
	for (let r = 0; r < 3; r++) {
		let i = t[e + 2 * r], a = t[e + 2 * r + 1], o = i - a, s = i + a;
		o < n[r] && (n[r] = o), s > n[r + 3] && (n[r + 3] = s);
	}
}
function oi(e) {
	let t = e[3] - e[0], n = e[4] - e[1], r = e[5] - e[2];
	return 2 * (t * n + n * r + r * t);
}
function si(e, t) {
	return t[e + 15] === Zr;
}
function ci(e, t) {
	return t[e + 6];
}
function li(e, t) {
	return t[e + 14];
}
function ui(e) {
	return e + Xr;
}
function di(e, t) {
	return e + t[e + 6] * Xr;
}
function fi(e, t) {
	return t[e + 7];
}
function pi(e) {
	return e;
}
function mi(e, t, n, r, i) {
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
var hi = 32, gi = (e, t) => e.candidate - t.candidate, _i = /* @__PURE__ */ Array(hi).fill().map(() => ({
	count: 0,
	bounds: /* @__PURE__ */ new Float32Array(6),
	rightCacheBounds: /* @__PURE__ */ new Float32Array(6),
	leftCacheBounds: /* @__PURE__ */ new Float32Array(6),
	candidate: 0
})), vi = /* @__PURE__ */ new Float32Array(6);
function yi(e, t, n, r, i, a) {
	let o = -1, s = 0;
	if (a === Vr) o = ni(t), o !== -1 && (s = (t[o] + t[o + 3]) / 2);
	else if (a === Hr) o = ni(e), o !== -1 && (s = bi(n, r, i, o));
	else if (a === Ur) {
		let a = oi(e), c = qr * i, l = n.offset || 0, u = (r - l) * 6, d = (r + i - l) * 6;
		for (let e = 0; e < 3; e++) {
			let r = t[e], l = (t[e + 3] - r) / hi;
			if (i < hi / 4) {
				let t = [..._i];
				t.length = i;
				let r = 0;
				for (let i = u; i < d; i += 6, r++) {
					let a = t[r];
					a.candidate = n[i + 2 * e], a.count = 0;
					let { bounds: o, leftCacheBounds: s, rightCacheBounds: c } = a;
					for (let e = 0; e < 3; e++) c[e] = Infinity, c[e + 3] = -Infinity, s[e] = Infinity, s[e + 3] = -Infinity, o[e] = Infinity, o[e + 3] = -Infinity;
					ai(i, n, o);
				}
				t.sort(gi);
				let l = i;
				for (let e = 0; e < l; e++) {
					let n = t[e];
					for (; e + 1 < l && t[e + 1].candidate === n.candidate;) t.splice(e + 1, 1), l--;
				}
				for (let r = u; r < d; r += 6) {
					let i = n[r + 2 * e];
					for (let e = 0; e < l; e++) {
						let a = t[e];
						i >= a.candidate ? ai(r, n, a.rightCacheBounds) : (ai(r, n, a.leftCacheBounds), a.count++);
					}
				}
				for (let n = 0; n < l; n++) {
					let r = t[n], l = r.count, u = i - r.count, d = r.leftCacheBounds, f = r.rightCacheBounds, p = 0;
					l !== 0 && (p = oi(d) / a);
					let m = 0;
					u !== 0 && (m = oi(f) / a);
					let h = Jr + qr * (p * l + m * u);
					h < c && (o = e, c = h, s = r.candidate);
				}
			} else {
				for (let e = 0; e < hi; e++) {
					let t = _i[e];
					t.count = 0, t.candidate = r + l + e * l;
					let n = t.bounds;
					for (let e = 0; e < 3; e++) n[e] = Infinity, n[e + 3] = -Infinity;
				}
				for (let t = u; t < d; t += 6) {
					let i = ~~((n[t + 2 * e] - r) / l);
					i >= hi && (i = hi - 1);
					let a = _i[i];
					a.count++, ai(t, n, a.bounds);
				}
				let t = _i[hi - 1];
				ri(t.bounds, t.rightCacheBounds);
				for (let e = hi - 2; e >= 0; e--) {
					let t = _i[e], n = _i[e + 1];
					ii(t.bounds, n.rightCacheBounds, t.rightCacheBounds);
				}
				let f = 0;
				for (let t = 0; t < hi - 1; t++) {
					let n = _i[t], r = n.count, l = n.bounds, u = _i[t + 1].rightCacheBounds;
					r !== 0 && (f === 0 ? ri(l, vi) : ii(l, vi, vi)), f += r;
					let d = 0, p = 0;
					f !== 0 && (d = oi(vi) / a);
					let m = i - f;
					m !== 0 && (p = oi(u) / a);
					let h = Jr + qr * (d * f + p * m);
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
function bi(e, t, n, r) {
	let i = 0, a = e.offset;
	for (let o = t, s = t + n; o < s; o++) i += e[(o - a) * 6 + r * 2];
	return i / n;
}
var xi = class {
	constructor() {
		this.boundingData = /* @__PURE__ */ new Float32Array(6);
	}
};
function Si(e, t, n, r, i, a) {
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
var Ci, wi, Ti, Ei, Di = 2 ** 32;
function Oi(e) {
	return "count" in e ? 1 : 1 + Oi(e.left) + Oi(e.right);
}
function ki(e, t, n) {
	return Ci = new Float32Array(n), wi = new Uint32Array(n), Ti = new Uint16Array(n), Ei = new Uint8Array(n), Ai(e, t);
}
function Ai(e, t) {
	let n = e / 4, r = e / 2, i = "count" in t, a = t.boundingData;
	for (let e = 0; e < 6; e++) Ci[n + e] = a[e];
	if (i) return t.buffer ? (Ei.set(new Uint8Array(t.buffer), e), e + t.buffer.byteLength) : (wi[n + 6] = t.offset, Ti[r + 14] = t.count, Ti[r + 15] = Zr, e + Yr);
	{
		let { left: r, right: i, splitAxis: a } = t, o = Ai(e + Yr, r), s = e / Yr, c = o / Yr - s;
		if (c > Di) throw Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");
		return wi[n + 6] = c, wi[n + 7] = a, Ai(o, i);
	}
}
function ji(e, t, n, r, i, a) {
	let { maxDepth: o, verbose: s, maxLeafSize: c, strategy: l, onProgress: u } = i, d = e.primitiveBuffer, f = e.primitiveBufferStride, p = /* @__PURE__ */ new Float32Array(6), m = !1, h = new xi();
	return mi(t, n, r, h.boundingData, p), _(h, n, r, p), h;
	function g(e) {
		u && u((e - a.offset) / a.count);
	}
	function _(e, n, r, i = null, a = 0) {
		if (!m && a >= o && (m = !0, s && console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)), r <= c || a >= o) return g(n + r), e.offset = n, e.count = r, e;
		let u = yi(e.boundingData, i, t, n, r, l);
		if (u.axis === -1) return g(n + r), e.offset = n, e.count = r, e;
		let h = Si(d, f, t, n, r, u);
		if (h === n || h === n + r) g(n + r), e.offset = n, e.count = r;
		else {
			e.splitAxis = u.axis;
			let i = new xi(), o = n, s = h - n;
			e.left = i, mi(t, o, s, i.boundingData, p), _(i, o, s, p, a + 1);
			let c = new xi(), l = h, d = r - s;
			e.right = c, mi(t, l, d, c.boundingData, p), _(c, l, d, p, a + 1);
		}
		return e;
	}
}
function Mi(e, t) {
	let n = t.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, r = e.getRootRanges(t.range), i = r[0], a = r[r.length - 1], o = {
		offset: i.offset,
		count: a.offset + a.count - i.offset
	}, s = new Float32Array(6 * o.count);
	s.offset = o.offset, e.computePrimitiveBounds(o.offset, o.count, s), e._roots = r.map((r) => {
		let i = ji(e, s, r.offset, r.count, t, o), a = Oi(i), c = new n(Yr * a);
		return ki(0, i, c), c;
	});
}
var Ni = class {
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
}, Pi = /* @__PURE__ */ new class {
	constructor() {
		this.float32Array = null, this.uint16Array = null, this.uint32Array = null;
		let e = [], t = null;
		this.setBuffer = (n) => {
			t && e.push(t), t = n, this.float32Array = new Float32Array(n), this.uint16Array = new Uint16Array(n), this.uint32Array = new Uint32Array(n);
		}, this.clearBuffer = () => {
			t = null, this.float32Array = null, this.uint16Array = null, this.uint32Array = null, e.length !== 0 && this.setBuffer(e.pop());
		};
	}
}(), Fi, Ii, Li = [], Ri = /* @__PURE__ */ new Ni(() => new h());
function zi(e, t, n, r, i, a) {
	Fi = Ri.getPrimitive(), Ii = Ri.getPrimitive(), Li.push(Fi, Ii), Pi.setBuffer(e._roots[t]);
	let o = Bi(0, e.geometry, n, r, i, a);
	Pi.clearBuffer(), Ri.releasePrimitive(Fi), Ri.releasePrimitive(Ii), Li.pop(), Li.pop();
	let s = Li.length;
	return s > 0 && (Ii = Li[s - 1], Fi = Li[s - 2]), o;
}
function Bi(e, t, n, r, i = null, a = 0, o = 0) {
	let { float32Array: s, uint16Array: c, uint32Array: l } = Pi, u = e * 2;
	if (si(u, c)) {
		let t = ci(e, l), n = li(u, c);
		return ti(pi(e), s, Fi), r(t, n, !1, o, a + e / Xr, Fi);
	} else {
		let u = function(e) {
			let { uint16Array: t, uint32Array: n } = Pi, r = e * 2;
			for (; !si(r, t);) e = ui(e), r = e * 2;
			return ci(e, n);
		}, d = function(e) {
			let { uint16Array: t, uint32Array: n } = Pi, r = e * 2;
			for (; !si(r, t);) e = di(e, n), r = e * 2;
			return ci(e, n) + li(r, t);
		}, f = ui(e), p = di(e, l), m = f, h = p, g, _, v, y;
		if (i && (v = Fi, y = Ii, ti(pi(m), s, v), ti(pi(h), s, y), g = i(v), _ = i(y), _ < g)) {
			m = p, h = f;
			let e = g;
			g = _, _ = e, v = y;
		}
		v || (v = Fi, ti(pi(m), s, v));
		let b = si(m * 2, c), x = n(v, b, g, o + 1, a + m / Xr), S;
		if (x === Kr) {
			let e = u(m);
			S = r(e, d(m) - e, !0, o + 1, a + m / Xr, v);
		} else S = x && Bi(m, t, n, r, i, a, o + 1);
		if (S) return !0;
		y = Ii, ti(pi(h), s, y);
		let C = si(h * 2, c), w = n(y, C, _, o + 1, a + h / Xr), T;
		if (w === Kr) {
			let e = u(h);
			T = r(e, d(h) - e, !0, o + 1, a + h / Xr, y);
		} else T = w && Bi(h, t, n, r, i, a, o + 1);
		return !!T;
	}
}
var Vi = /* @__PURE__ */ new Pi.constructor(), Hi = /* @__PURE__ */ new Pi.constructor(), Ui = /* @__PURE__ */ new Ni(() => new h()), Wi = /* @__PURE__ */ new h(), Gi = /* @__PURE__ */ new h(), Ki = /* @__PURE__ */ new h(), qi = /* @__PURE__ */ new h(), Ji = !1;
function Yi(e, t, n, r) {
	if (Ji) throw Error("MeshBVH: Recursive calls to bvhcast not supported.");
	Ji = !0;
	let i = e._roots, a = t._roots, o, s = 0, c = 0, l = new V().copy(n).invert();
	for (let e = 0, t = i.length; e < t; e++) {
		Vi.setBuffer(i[e]), c = 0;
		let t = Ui.getPrimitive();
		ti(pi(0), Vi.float32Array, t), t.applyMatrix4(l);
		for (let e = 0, i = a.length; e < i && (Hi.setBuffer(a[e]), o = Xi(0, 0, n, l, r, s, c, 0, 0, t), Hi.clearBuffer(), c += a[e].byteLength / Yr, !o); e++);
		if (Ui.releasePrimitive(t), Vi.clearBuffer(), s += i[e].byteLength / Yr, o) break;
	}
	return Ji = !1, o;
}
function Xi(e, t, n, r, i, a = 0, o = 0, s = 0, c = 0, l = null, u = !1) {
	let d, f;
	u ? (d = Hi, f = Vi) : (d = Vi, f = Hi);
	let p = d.float32Array, m = d.uint32Array, h = d.uint16Array, g = f.float32Array, _ = f.uint32Array, v = f.uint16Array, y = e * 2, b = t * 2, x = si(y, h), S = si(b, v), C = !1;
	if (S && x) C = u ? i(ci(t, _), li(t * 2, v), ci(e, m), li(e * 2, h), c, o + t / Xr, s, a + e / Xr) : i(ci(e, m), li(e * 2, h), ci(t, _), li(t * 2, v), s, a + e / Xr, c, o + t / Xr);
	else if (S) {
		let l = Ui.getPrimitive();
		ti(pi(t), g, l), l.applyMatrix4(n);
		let d = ui(e), f = di(e, m);
		ti(pi(d), p, Wi), ti(pi(f), p, Gi);
		let h = l.intersectsBox(Wi), _ = l.intersectsBox(Gi);
		C = h && Xi(t, d, r, n, i, o, a, c, s + 1, l, !u) || _ && Xi(t, f, r, n, i, o, a, c, s + 1, l, !u), Ui.releasePrimitive(l);
	} else {
		let d = ui(t), f = di(t, _);
		ti(pi(d), g, Ki), ti(pi(f), g, qi);
		let h = l.intersectsBox(Ki), v = l.intersectsBox(qi);
		if (h && v) C = Xi(e, d, n, r, i, a, o, s, c + 1, l, u) || Xi(e, f, n, r, i, a, o, s, c + 1, l, u);
		else if (h) if (x) C = Xi(e, d, n, r, i, a, o, s, c + 1, l, u);
		else {
			let t = Ui.getPrimitive();
			t.copy(Ki).applyMatrix4(n);
			let l = ui(e), f = di(e, m);
			ti(pi(l), p, Wi), ti(pi(f), p, Gi);
			let h = t.intersectsBox(Wi), g = t.intersectsBox(Gi);
			C = h && Xi(d, l, r, n, i, o, a, c, s + 1, t, !u) || g && Xi(d, f, r, n, i, o, a, c, s + 1, t, !u), Ui.releasePrimitive(t);
		}
		else if (v) if (x) C = Xi(e, f, n, r, i, a, o, s, c + 1, l, u);
		else {
			let t = Ui.getPrimitive();
			t.copy(qi).applyMatrix4(n);
			let l = ui(e), d = di(e, m);
			ti(pi(l), p, Wi), ti(pi(d), p, Gi);
			let h = t.intersectsBox(Wi), g = t.intersectsBox(Gi);
			C = h && Xi(f, l, r, n, i, o, a, c, s + 1, t, !u) || g && Xi(f, d, r, n, i, o, a, c, s + 1, t, !u), Ui.releasePrimitive(t);
		}
	}
	return C;
}
var Zi = /* @__PURE__ */ new h(), Qi = /* @__PURE__ */ new Float32Array(6), $i = class {
	constructor() {
		this._roots = null, this.primitiveBuffer = null, this.primitiveBufferStride = null;
	}
	init(e) {
		e = {
			...ei,
			...e
		}, Mi(this, e);
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
			this.writePrimitiveBounds(n, Qi, 0);
			let [e, t, r, u, d, f] = Qi;
			e < i && (i = e), u > s && (s = u), t < a && (a = t), d > c && (c = d), r < o && (o = r), f > l && (l = f);
		}
		return n[r + 0] = i, n[r + 1] = a, n[r + 2] = o, n[r + 3] = s, n[r + 4] = c, n[r + 5] = l, n;
	}
	computePrimitiveBounds(e, t, n) {
		let r = n.offset || 0;
		for (let i = e, a = e + t; i < a; i++) {
			this.writePrimitiveBounds(i, Qi, 0);
			let [e, t, a, o, s, c] = Qi, l = (e + o) / 2, u = (t + s) / 2, d = (a + c) / 2, f = (o - e) / 2, p = (s - t) / 2, m = (c - a) / 2, h = (i - r) * 6;
			n[h + 0] = l, n[h + 1] = f + (Math.abs(l) + f) * Qr, n[h + 2] = u, n[h + 3] = p + (Math.abs(u) + p) * Qr, n[h + 4] = d, n[h + 5] = m + (Math.abs(d) + m) * Qr;
		}
		return n;
	}
	shiftPrimitiveOffsets(e) {
		let t = this._indirectBuffer;
		if (t) for (let n = 0, r = t.length; n < r; n++) t[n] += e;
		else {
			let t = this._roots;
			for (let n = 0; n < t.length; n++) {
				let r = t[n], i = new Uint32Array(r), a = new Uint16Array(r), o = r.byteLength / Yr;
				for (let t = 0; t < o; t++) {
					let n = Xr * t;
					si(2 * n, a) && (i[n + 6] += e);
				}
			}
		}
	}
	traverse(e, t = 0) {
		let n = this._roots[t], r = new Uint32Array(n), i = new Uint16Array(n);
		a(0);
		function a(t, o = 0) {
			let s = t * 2, c = si(s, i);
			if (c) {
				let a = r[t + 6], l = i[s + 14];
				e(o, c, new Float32Array(n, t * 4, 6), a, l);
			} else {
				let i = ui(t), s = di(t, r), l = fi(t, r);
				e(o, c, new Float32Array(n, t * 4, 6), l) || (a(i, o + 1), a(s, o + 1));
			}
		}
	}
	refit() {
		let e = this._roots;
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t], r = new Uint32Array(n), i = new Uint16Array(n), a = new Float32Array(n), o = n.byteLength / Yr;
			for (let e = o - 1; e >= 0; e--) {
				let t = e * Xr, n = t * 2;
				if (si(n, i)) {
					let e = ci(t, r), o = li(n, i);
					this.writePrimitiveRangeBounds(e, o, Qi, 0), a.set(Qi, t);
				} else {
					let e = ui(t), n = di(t, r);
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
			ti(0, new Float32Array(t), Zi), e.union(Zi);
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
			if (s = zi(this, e, n, r, t, c), s) break;
			c += i.byteLength / Yr;
		}
		return s;
	}
	bvhcast(e, t, n) {
		let { intersectsRanges: r } = n;
		return Yi(this, e, t, r);
	}
};
function ea() {
	return typeof SharedArrayBuffer < "u";
}
function ta(e) {
	return e.index ? e.index.count : e.attributes.position.count;
}
function na(e) {
	return ta(e) / 3;
}
function ra(e, t = ArrayBuffer) {
	return e > 65535 ? new Uint32Array(new t(4 * e)) : new Uint16Array(new t(2 * e));
}
function ia(e, t) {
	if (!e.index) {
		let n = e.attributes.position.count, r = ra(n, t.useSharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer);
		e.setIndex(new H(r, 1));
		for (let e = 0; e < n; e++) r[e] = e;
	}
}
function aa(e, t, n) {
	let r = ta(e) / n, i = t || e.drawRange, a = i.start / n, o = (i.start + i.count) / n, s = Math.max(0, a), c = Math.min(r, o) - s;
	return {
		offset: Math.floor(s),
		count: Math.floor(c)
	};
}
function oa(e, t) {
	return e.groups.map((e) => ({
		offset: e.start / t,
		count: e.count / t
	}));
}
function sa(e, t, n) {
	let r = aa(e, t, n), i = oa(e, n);
	if (!i.length) return [r];
	let a = [], o = r.offset, s = r.offset + r.count, c = ta(e) / n, l = [];
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
function ca(e, t) {
	let n = e[e.length - 1], r = n.offset + n.count > 2 ** 16, i = e.reduce((e, t) => e + t.count, 0), a = r ? 4 : 2, o = t ? new SharedArrayBuffer(i * a) : new ArrayBuffer(i * a), s = r ? new Uint32Array(o) : new Uint16Array(o), c = 0;
	for (let t = 0; t < e.length; t++) {
		let { offset: n, count: r } = e[t];
		for (let e = 0; e < r; e++) s[c + e] = n + e;
		c += r;
	}
	return s;
}
var la = class extends $i {
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
		if (!e.isBufferGeometry) throw Error("BVH: Only BufferGeometries are supported.");
		if (e.index && e.index.isInterleavedBufferAttribute) throw Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.");
		if (t.useSharedArrayBuffer && !ea()) throw Error("BVH: SharedArrayBuffer is not available.");
		super(), this.geometry = e, this.resolvePrimitiveIndex = t.indirect ? (e) => this._indirectBuffer[e] : (e) => e, this.primitiveBuffer = null, this.primitiveBufferStride = null, this._indirectBuffer = null, t = {
			...ei,
			...t
		}, t[$r] || this.init(t);
	}
	init(e) {
		let { geometry: t, primitiveStride: n } = this;
		if (e.indirect) {
			let r = ca(sa(t, e.range, n), e.useSharedArrayBuffer);
			this._indirectBuffer = r;
		} else ia(t, e);
		super.init(e), !t.boundingBox && e.setBoundingBox && (t.boundingBox = this.getBoundingBox(new h()));
	}
	getRootRanges(e) {
		return this.indirect ? [{
			offset: 0,
			count: this._indirectBuffer.length
		}] : sa(this.geometry, e, this.primitiveStride);
	}
	raycastObject3D() {
		throw Error("BVH: raycastObject3D() not implemented");
	}
}, ua = class {
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
ua.prototype.setFromBox = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new U();
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
var da = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new U();
	return function(r, i, a) {
		let o = r.start, s = e, c = i.start, l = t;
		n.subVectors(o, c), e.subVectors(r.end, r.start), t.subVectors(i.end, i.start);
		let u = n.dot(l), d = l.dot(s), f = l.dot(l), p = n.dot(s), m = s.dot(s) * f - d * d, h, g;
		h = m === 0 ? 0 : (u * d - p * f) / m, g = (u + h * d) / f, a.x = h, a.y = g;
	};
}(), fa = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new T(), t = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new U();
	return function(r, i, a, o) {
		da(r, i, e);
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
}(), pa = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new I(), r = /* @__PURE__ */ new z();
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
}(), ma = [
	"x",
	"y",
	"z"
], ha = 1e-15, ga = ha * ha;
function _a(e) {
	return Math.abs(e) < ha;
}
var va = class extends p {
	constructor(...e) {
		super(...e), this.isExtendedTriangle = !0, this.satAxes = [
			,
			,
			,
			,
		].fill().map(() => new U()), this.satBounds = [
			,
			,
			,
			,
		].fill().map(() => new ua()), this.points = [
			this.a,
			this.b,
			this.c
		], this.plane = new I(), this.isDegenerateIntoSegment = !1, this.isDegenerateIntoPoint = !1, this.degenerateSegment = new z(), this.needsUpdate = !0;
	}
	intersectsSphere(e) {
		return pa(e, this);
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
		this.isDegenerateIntoPoint = !1, this.isDegenerateIntoSegment = !1, m < ha ? h < ha || g < ha ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(e), this.degenerateSegment.end.copy(n)) : h < ha ? g < ha ? this.isDegenerateIntoPoint = !0 : (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(t), this.degenerateSegment.end.copy(e)) : g < ha && (this.isDegenerateIntoSegment = !0, this.degenerateSegment.start.copy(n), this.degenerateSegment.end.copy(t)), this.plane.setFromNormalAndCoplanarPoint(o, e), this.needsUpdate = !1;
	}
};
va.prototype.closestPointToSegment = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U(), n = /* @__PURE__ */ new z();
	return function(r, i = null, a = null) {
		let { start: o, end: s } = r, c = this.points, l, u = Infinity;
		for (let o = 0; o < 3; o++) {
			let s = (o + 1) % 3;
			n.start.copy(c[o]), n.end.copy(c[s]), fa(n, r, e, t), l = e.distanceToSquared(t), l < u && (u = l, i && i.copy(e), a && a.copy(t));
		}
		return this.closestPointToPoint(o, e), l = o.distanceToSquared(e), l < u && (u = l, i && i.copy(e), a && a.copy(o)), this.closestPointToPoint(s, e), l = s.distanceToSquared(e), l < u && (u = l, i && i.copy(e), a && a.copy(s)), Math.sqrt(u);
	};
}(), va.prototype.intersectsTriangle = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new va(), t = /* @__PURE__ */ new ua(), n = /* @__PURE__ */ new ua(), r = /* @__PURE__ */ new U(), i = /* @__PURE__ */ new U(), a = /* @__PURE__ */ new U(), o = /* @__PURE__ */ new U(), s = /* @__PURE__ */ new z(), c = /* @__PURE__ */ new z(), l = /* @__PURE__ */ new U(), u = /* @__PURE__ */ new T(), d = /* @__PURE__ */ new T();
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
		return _a(o) ? _a(s) ? f(e, t, n, i) : (n && (n.start.copy(a.start), n.end.copy(a.start)), e.containsPoint(a.start)) : _a(s) ? (n && (n.start.copy(a.end), n.end.copy(a.end)), e.containsPoint(a.end)) : e.plane.intersectLine(a, r) == null ? !1 : (n && (n.start.copy(r), n.end.copy(r)), e.containsPoint(r));
	}
	function g(e, t, n) {
		let r = t.a;
		return _a(e.plane.distanceToPoint(r)) && e.containsPoint(r) ? (n && (n.start.copy(r), n.end.copy(r)), !0) : !1;
	}
	function _(e, t, n) {
		let i = e.degenerateSegment, a = t.a;
		return i.closestPointToPoint(a, !0, r), a.distanceToSquared(r) < ga ? (n && (n.start.copy(a), n.end.copy(a)), !0) : !1;
	}
	function v(e, t, n, o) {
		if (e.isDegenerateIntoSegment) if (t.isDegenerateIntoSegment) {
			let o = e.degenerateSegment, s = t.degenerateSegment, c = i, l = a;
			o.delta(c), s.delta(l);
			let u = r.subVectors(s.start, o.start), d = c.x * l.y - c.y * l.x;
			if (_a(d)) return !1;
			let f = (u.x * l.y - u.y * l.x) / d, p = -(c.x * u.y - c.y * u.x) / d;
			return f < 0 || f > 1 || p < 0 || p > 1 ? !1 : _a(o.start.z + c.z * f - (s.start.z + l.z * p)) ? (n && (n.start.copy(o.start).addScaledVector(c, f), n.end.copy(o.start).addScaledVector(c, f)), !0) : !1;
		} else if (t.isDegenerateIntoPoint) return _(e, t, n);
		else return h(t, e, n, o);
		else if (e.isDegenerateIntoPoint) return t.isDegenerateIntoPoint ? t.a.distanceToSquared(e.a) < ga ? (n && (n.start.copy(e.a), n.end.copy(e.a)), !0) : !1 : t.isDegenerateIntoSegment ? _(t, e, n) : g(t, e, n);
		else if (t.isDegenerateIntoPoint) return g(e, t, n);
		else if (t.isDegenerateIntoSegment) return h(e, t, n, o);
	}
	return function(t, n = null, r = !1) {
		this.needsUpdate && this.update(), t.isExtendedTriangle ? t.needsUpdate && t.update() : (e.copy(t), e.update(), t = e);
		let o = v(this, t, n, r);
		if (o !== void 0) return o;
		let p = this.plane, h = t.plane, g = h.distanceToPoint(this.a), _ = h.distanceToPoint(this.b), y = h.distanceToPoint(this.c);
		_a(g) && (g = 0), _a(_) && (_ = 0), _a(y) && (y = 0);
		let b = g * _, x = g * y;
		if (b > 0 && x > 0) return !1;
		let S = p.distanceToPoint(t.a), C = p.distanceToPoint(t.b), w = p.distanceToPoint(t.c);
		_a(S) && (S = 0), _a(C) && (C = 0), _a(w) && (w = 0);
		let T = S * C, E = S * w;
		if (T > 0 && E > 0) return !1;
		i.copy(p.normal), a.copy(h.normal);
		let D = i.cross(a), O = 0, k = Math.abs(D.x), A = Math.abs(D.y);
		A > k && (k = A, O = 1), Math.abs(D.z) > k && (O = 2);
		let j = ma[O], M = this.a[j], N = this.b[j], ee = this.c[j], P = t.a[j], F = t.b[j], I = t.c[j];
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
}(), va.prototype.distanceToPoint = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new U();
	return function(t) {
		return this.closestPointToPoint(t, e), t.distanceTo(e);
	};
}(), va.prototype.distanceToTriangle = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new U(), t = /* @__PURE__ */ new U(), n = [
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
				i.set(a[u], a[d]), fa(r, i, e, t);
				let f = e.distanceToSquared(t);
				f < l && (l = f, o && o.copy(e), s && s.copy(t));
			}
		}
		return Math.sqrt(l);
	};
}();
var ya = class {
	constructor(e, t, n) {
		this.isOrientedBox = !0, this.min = new U(), this.max = new U(), this.matrix = new V(), this.invMatrix = new V(), this.points = Array(8).fill().map(() => new U()), this.satAxes = [
			,
			,
			,
		].fill().map(() => new U()), this.satBounds = [
			,
			,
			,
		].fill().map(() => new ua()), this.alignedSatBounds = [
			,
			,
			,
		].fill().map(() => new ua()), this.needsUpdate = !1, e && this.min.copy(e), t && this.max.copy(t), n && this.matrix.copy(n);
	}
	set(e, t, n) {
		this.min.copy(e), this.max.copy(t), this.matrix.copy(n), this.needsUpdate = !0;
	}
	copy(e) {
		this.min.copy(e.min), this.max.copy(e.max), this.matrix.copy(e.matrix), this.needsUpdate = !0;
	}
};
ya.prototype.update = /* @__PURE__ */ function() {
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
}(), ya.prototype.intersectsBox = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new ua();
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
}(), ya.prototype.intersectsTriangle = /* @__PURE__ */ function() {
	let e = /* @__PURE__ */ new va(), t = [
		,
		,
		,
	], n = /* @__PURE__ */ new ua(), r = /* @__PURE__ */ new ua(), i = /* @__PURE__ */ new U();
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
}(), ya.prototype.closestPointToPoint = /* @__PURE__ */ function() {
	return function(e, t) {
		return this.needsUpdate && this.update(), t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min, this.max).applyMatrix4(this.matrix), t;
	};
}(), ya.prototype.distanceToPoint = function() {
	let e = new U();
	return function(t) {
		return this.closestPointToPoint(t, e), t.distanceTo(e);
	};
}(), ya.prototype.distanceToBox = /* @__PURE__ */ function() {
	let e = [
		"x",
		"y",
		"z"
	], t = /* @__PURE__ */ Array(12).fill().map(() => new z()), n = /* @__PURE__ */ Array(12).fill().map(() => new z()), r = /* @__PURE__ */ new U(), i = /* @__PURE__ */ new U();
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
				fa(a, t, r, i);
				let o = r.distanceToSquared(i);
				if (o < p && (p = o, s && s.copy(r), c && c.copy(i), o < l)) return Math.sqrt(o);
			}
		}
		return Math.sqrt(p);
	};
}();
var ba = /* @__PURE__ */ new class extends Ni {
	constructor() {
		super(() => new va());
	}
}(), xa = /* @__PURE__ */ new U(), Sa = /* @__PURE__ */ new U();
function Ca(e, t, n = {}, r = 0, i = Infinity) {
	let a = r * r, o = i * i, s = Infinity, c = null;
	if (e.shapecast({
		boundsTraverseOrder: (e) => (xa.copy(t).clamp(e.min, e.max), xa.distanceToSquared(t)),
		intersectsBounds: (e, t, n) => n < s && n < o,
		intersectsTriangle: (e, n) => {
			e.closestPointToPoint(t, xa);
			let r = t.distanceToSquared(xa);
			return r < s && (Sa.copy(xa), s = r, c = n), r < a;
		}
	}), s === Infinity) return null;
	let l = Math.sqrt(s);
	return n.point ? n.point.copy(Sa) : n.point = Sa.clone(), n.distance = l, n.faceIndex = c, n;
}
var wa = !0, Ta = /* @__PURE__ */ new U(), Ea = /* @__PURE__ */ new U(), Da = /* @__PURE__ */ new U(), Oa = /* @__PURE__ */ new T(), ka = /* @__PURE__ */ new T(), Aa = /* @__PURE__ */ new T(), ja = /* @__PURE__ */ new U(), Ma = /* @__PURE__ */ new U(), Na = /* @__PURE__ */ new U(), Pa = /* @__PURE__ */ new U();
function Fa(e, t, n, r, i, a, o, s) {
	let c;
	if (c = a === 1 ? e.intersectTriangle(r, n, t, !0, i) : e.intersectTriangle(t, n, r, a !== 2, i), c === null) return null;
	let l = e.origin.distanceTo(i);
	return l < o || l > s ? null : {
		distance: l,
		point: i.clone()
	};
}
function Ia(e, t, n, r, i, a, o, s, c, l, u) {
	Ta.fromBufferAttribute(t, a), Ea.fromBufferAttribute(t, o), Da.fromBufferAttribute(t, s);
	let d = Fa(e, Ta, Ea, Da, Pa, c, l, u);
	if (d) {
		if (r) {
			Oa.fromBufferAttribute(r, a), ka.fromBufferAttribute(r, o), Aa.fromBufferAttribute(r, s), d.uv = new T();
			let e = p.getInterpolation(Pa, Ta, Ea, Da, Oa, ka, Aa, d.uv);
			wa || (d.uv = e);
		}
		if (i) {
			Oa.fromBufferAttribute(i, a), ka.fromBufferAttribute(i, o), Aa.fromBufferAttribute(i, s), d.uv1 = new T();
			let e = p.getInterpolation(Pa, Ta, Ea, Da, Oa, ka, Aa, d.uv1);
			wa || (d.uv1 = e);
		}
		if (n) {
			ja.fromBufferAttribute(n, a), Ma.fromBufferAttribute(n, o), Na.fromBufferAttribute(n, s), d.normal = new U();
			let t = p.getInterpolation(Pa, Ta, Ea, Da, ja, Ma, Na, d.normal);
			d.normal.dot(e.direction) > 0 && d.normal.multiplyScalar(-1), wa || (d.normal = t);
		}
		let t = {
			a,
			b: o,
			c: s,
			normal: new U(),
			materialIndex: 0
		};
		if (p.getNormal(Ta, Ea, Da, t.normal), d.face = t, d.faceIndex = a, wa) {
			let e = new U();
			p.getBarycoord(Pa, Ta, Ea, Da, e), d.barycoord = e;
		}
	}
	return d;
}
function La(e) {
	return e && e.isMaterial ? e.side : e;
}
function Ra(e, t, n, r, i, a, o) {
	let s = r * 3, c = s + 0, l = s + 1, u = s + 2, { index: d, groups: f } = e;
	e.index && (c = d.getX(c), l = d.getX(l), u = d.getX(u));
	let { position: p, normal: m, uv: h, uv1: g } = e.attributes;
	if (Array.isArray(t)) {
		let e = r * 3;
		for (let s = 0, d = f.length; s < d; s++) {
			let { start: d, count: _, materialIndex: v } = f[s];
			if (e >= d && e < d + _) {
				let e = La(t[v]), s = Ia(n, p, m, h, g, c, l, u, e, a, o);
				if (s) if (s.faceIndex = r, s.face.materialIndex = v, i) i.push(s);
				else return s;
			}
		}
	} else {
		let e = La(t), s = Ia(n, p, m, h, g, c, l, u, e, a, o);
		if (s) if (s.faceIndex = r, s.face.materialIndex = 0, i) i.push(s);
		else return s;
	}
	return null;
}
function za(e, t, n, r) {
	let i = e.a, a = e.b, o = e.c, s = t, c = t + 1, l = t + 2;
	n && (s = n.getX(s), c = n.getX(c), l = n.getX(l)), i.x = r.getX(s), i.y = r.getY(s), i.z = r.getZ(s), a.x = r.getX(c), a.y = r.getY(c), a.z = r.getZ(c), o.x = r.getX(l), o.y = r.getY(l), o.z = r.getZ(l);
}
function Ba(e, t, n, r, i, a, o, s) {
	let { geometry: c, _indirectBuffer: l } = e;
	for (let e = r, l = r + i; e < l; e++) Ra(c, t, n, e, a, o, s);
}
function Va(e, t, n, r, i, a, o) {
	let { geometry: s, _indirectBuffer: c } = e, l = Infinity, u = null;
	for (let e = r, c = r + i; e < c; e++) {
		let r;
		r = Ra(s, t, n, e, null, a, o), r && r.distance < l && (u = r, l = r.distance);
	}
	return u;
}
function Ha(e, t, n, r, i, a, o) {
	let { geometry: s } = n, { index: c } = s, l = s.attributes.position;
	for (let n = e, s = t + e; n < s; n++) {
		let e;
		if (e = n, za(o, e * 3, c, l), o.needsUpdate = !0, r(o, e, i, a)) return !0;
	}
	return !1;
}
function Ua(e, t = null) {
	t && Array.isArray(t) && (t = new Set(t));
	let n = e.geometry, r = n.index ? n.index.array : null, i = n.attributes.position, a, o, s, c, l = 0, u = e._roots;
	for (let e = 0, t = u.length; e < t; e++) a = u[e], o = new Uint32Array(a), s = new Uint16Array(a), c = new Float32Array(a), d(0, l), l += a.byteLength;
	function d(e, n, a = !1) {
		let l = e * 2;
		if (si(l, s)) {
			let t = ci(e, o), n = li(l, s), a = Infinity, u = Infinity, d = Infinity, f = -Infinity, p = -Infinity, m = -Infinity;
			for (let e = 3 * t, o = 3 * (t + n); e < o; e++) {
				let t = r[e], n = i.getX(t), o = i.getY(t), s = i.getZ(t);
				n < a && (a = n), n > f && (f = n), o < u && (u = o), o > p && (p = o), s < d && (d = s), s > m && (m = s);
			}
			return c[e + 0] !== a || c[e + 1] !== u || c[e + 2] !== d || c[e + 3] !== f || c[e + 4] !== p || c[e + 5] !== m ? (c[e + 0] = a, c[e + 1] = u, c[e + 2] = d, c[e + 3] = f, c[e + 4] = p, c[e + 5] = m, !0) : !1;
		} else {
			let r = ui(e), i = di(e, o), s = a, l = !1, u = !1;
			if (t) {
				if (!s) {
					let e = r / Xr + n / Yr, a = i / Xr + n / Yr;
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
function Wa(e, t, n, r, i) {
	let a, o, s, c, l, u, d = 1 / n.direction.x, f = 1 / n.direction.y, p = 1 / n.direction.z, m = n.origin.x, h = n.origin.y, g = n.origin.z, _ = t[e], v = t[e + 3], y = t[e + 1], b = t[e + 3 + 1], x = t[e + 2], S = t[e + 3 + 2];
	return d >= 0 ? (a = (_ - m) * d, o = (v - m) * d) : (a = (v - m) * d, o = (_ - m) * d), f >= 0 ? (s = (y - h) * f, c = (b - h) * f) : (s = (b - h) * f, c = (y - h) * f), a > c || s > o || ((s > a || isNaN(a)) && (a = s), (c < o || isNaN(o)) && (o = c), p >= 0 ? (l = (x - g) * p, u = (S - g) * p) : (l = (S - g) * p, u = (x - g) * p), a > u || l > o) ? !1 : ((l > a || a !== a) && (a = l), (u < o || o !== o) && (o = u), a <= i && o >= r);
}
function Ga(e, t, n, r, i, a, o, s) {
	let { geometry: c, _indirectBuffer: l } = e;
	for (let e = r, u = r + i; e < u; e++) Ra(c, t, n, l ? l[e] : e, a, o, s);
}
function Ka(e, t, n, r, i, a, o) {
	let { geometry: s, _indirectBuffer: c } = e, l = Infinity, u = null;
	for (let e = r, d = r + i; e < d; e++) {
		let r;
		r = Ra(s, t, n, c ? c[e] : e, null, a, o), r && r.distance < l && (u = r, l = r.distance);
	}
	return u;
}
function qa(e, t, n, r, i, a, o) {
	let { geometry: s } = n, { index: c } = s, l = s.attributes.position;
	for (let s = e, u = t + e; s < u; s++) {
		let e;
		if (e = n.resolveTriangleIndex(s), za(o, e * 3, c, l), o.needsUpdate = !0, r(o, e, i, a)) return !0;
	}
	return !1;
}
function Ja(e, t, n, r, i, a, o) {
	Pi.setBuffer(e._roots[t]), Ya(0, e, n, r, i, a, o), Pi.clearBuffer();
}
function Ya(e, t, n, r, i, a, o) {
	let { float32Array: s, uint16Array: c, uint32Array: l } = Pi, u = e * 2;
	if (si(u, c)) Ba(t, n, r, ci(e, l), li(u, c), i, a, o);
	else {
		let c = ui(e);
		Wa(c, s, r, a, o) && Ya(c, t, n, r, i, a, o);
		let u = di(e, l);
		Wa(u, s, r, a, o) && Ya(u, t, n, r, i, a, o);
	}
}
var Xa = [
	"x",
	"y",
	"z"
];
function Za(e, t, n, r, i, a) {
	Pi.setBuffer(e._roots[t]);
	let o = Qa(0, e, n, r, i, a);
	return Pi.clearBuffer(), o;
}
function Qa(e, t, n, r, i, a) {
	let { float32Array: o, uint16Array: s, uint32Array: c } = Pi, l = e * 2;
	if (si(l, s)) return Va(t, n, r, ci(e, c), li(l, s), i, a);
	{
		let s = fi(e, c), l = Xa[s], u = r.direction[l] >= 0, d, f;
		u ? (d = ui(e), f = di(e, c)) : (d = di(e, c), f = ui(e));
		let p = Wa(d, o, r, i, a) ? Qa(d, t, n, r, i, a) : null;
		if (p) {
			let e = p.point[l];
			if (u ? e <= o[f + s] : e >= o[f + s + 3]) return p;
		}
		let m = Wa(f, o, r, i, a) ? Qa(f, t, n, r, i, a) : null;
		return p && m ? p.distance <= m.distance ? p : m : p || m || null;
	}
}
var $a = /* @__PURE__ */ new h(), eo = /* @__PURE__ */ new va(), to = /* @__PURE__ */ new va(), no = /* @__PURE__ */ new V(), ro = /* @__PURE__ */ new ya(), io = /* @__PURE__ */ new ya();
function ao(e, t, n, r) {
	Pi.setBuffer(e._roots[t]);
	let i = oo(0, e, n, r);
	return Pi.clearBuffer(), i;
}
function oo(e, t, n, r, i = null) {
	let { float32Array: a, uint16Array: o, uint32Array: s } = Pi, c = e * 2;
	if (i === null && (n.boundingBox || n.computeBoundingBox(), ro.set(n.boundingBox.min, n.boundingBox.max, r), i = ro), si(c, o)) {
		let i = t.geometry, l = i.index, u = i.attributes.position, d = n.index, f = n.attributes.position, p = ci(e, s), m = li(c, o);
		if (no.copy(r).invert(), n.boundsTree) return ti(pi(e), a, io), io.matrix.copy(no), io.needsUpdate = !0, n.boundsTree.shapecast({
			intersectsBounds: (e) => io.intersectsBox(e),
			intersectsTriangle: (e) => {
				e.a.applyMatrix4(r), e.b.applyMatrix4(r), e.c.applyMatrix4(r), e.needsUpdate = !0;
				for (let t = p * 3, n = (m + p) * 3; t < n; t += 3) if (za(to, t, l, u), to.needsUpdate = !0, e.intersectsTriangle(to)) return !0;
				return !1;
			}
		});
		{
			let e = na(n);
			for (let t = p * 3, n = (m + p) * 3; t < n; t += 3) {
				za(eo, t, l, u), eo.a.applyMatrix4(no), eo.b.applyMatrix4(no), eo.c.applyMatrix4(no), eo.needsUpdate = !0;
				for (let t = 0, n = e * 3; t < n; t += 3) if (za(to, t, d, f), to.needsUpdate = !0, eo.intersectsTriangle(to)) return !0;
			}
		}
	} else {
		let o = ui(e), c = di(e, s);
		return ti(pi(o), a, $a), !!(i.intersectsBox($a) && oo(o, t, n, r, i) || (ti(pi(c), a, $a), i.intersectsBox($a) && oo(c, t, n, r, i)));
	}
}
var so = /* @__PURE__ */ new V(), co = /* @__PURE__ */ new ya(), lo = /* @__PURE__ */ new ya(), uo = /* @__PURE__ */ new U(), fo = /* @__PURE__ */ new U(), po = /* @__PURE__ */ new U(), mo = /* @__PURE__ */ new U();
function ho(e, t, n, r = {}, i = {}, a = 0, o = Infinity) {
	t.boundingBox || t.computeBoundingBox(), co.set(t.boundingBox.min, t.boundingBox.max, n), co.needsUpdate = !0;
	let s = e.geometry, c = s.attributes.position, l = s.index, u = t.attributes.position, d = t.index, f = ba.getPrimitive(), p = ba.getPrimitive(), m = uo, h = fo, g = null, _ = null;
	i && (g = po, _ = mo);
	let v = Infinity, y = null, b = null;
	return so.copy(n).invert(), lo.matrix.copy(so), e.shapecast({
		boundsTraverseOrder: (e) => co.distanceToBox(e),
		intersectsBounds: (e, t, n) => n < v && n < o ? (t && (lo.min.copy(e.min), lo.max.copy(e.max), lo.needsUpdate = !0), !0) : !1,
		intersectsRange: (e, r) => {
			if (t.boundsTree) return t.boundsTree.shapecast({
				boundsTraverseOrder: (e) => lo.distanceToBox(e),
				intersectsBounds: (e, t, n) => n < v && n < o,
				intersectsRange: (t, i) => {
					for (let o = t, s = t + i; o < s; o++) {
						za(p, 3 * o, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
						for (let t = e, n = e + r; t < n; t++) {
							za(f, 3 * t, l, c), f.needsUpdate = !0;
							let e = f.distanceToTriangle(p, m, g);
							if (e < v && (h.copy(m), _ && _.copy(g), v = e, y = t, b = o), e < a) return !0;
						}
					}
				}
			});
			{
				let i = na(t);
				for (let t = 0, o = i; t < o; t++) {
					za(p, 3 * t, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
					for (let n = e, i = e + r; n < i; n++) {
						za(f, 3 * n, l, c), f.needsUpdate = !0;
						let e = f.distanceToTriangle(p, m, g);
						if (e < v && (h.copy(m), _ && _.copy(g), v = e, y = n, b = t), e < a) return !0;
					}
				}
			}
		}
	}), ba.releasePrimitive(f), ba.releasePrimitive(p), v === Infinity ? null : (r.point ? r.point.copy(h) : r.point = h.clone(), r.distance = v, r.faceIndex = y, i && (i.point ? i.point.copy(_) : i.point = _.clone(), i.point.applyMatrix4(so), h.applyMatrix4(so), i.distance = h.sub(i.point).length(), i.faceIndex = b), r);
}
function go(e, t = null) {
	t && Array.isArray(t) && (t = new Set(t));
	let n = e.geometry, r = n.index ? n.index.array : null, i = n.attributes.position, a, o, s, c, l = 0, u = e._roots;
	for (let e = 0, t = u.length; e < t; e++) a = u[e], o = new Uint32Array(a), s = new Uint16Array(a), c = new Float32Array(a), d(0, l), l += a.byteLength;
	function d(n, a, l = !1) {
		let u = n * 2;
		if (si(u, s)) {
			let t = ci(n, o), a = li(u, s), l = Infinity, d = Infinity, f = Infinity, p = -Infinity, m = -Infinity, h = -Infinity;
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
			let e = ui(n), r = di(n, o), i = l, s = !1, u = !1;
			if (t) {
				if (!i) {
					let n = e / Xr + a / Yr, o = r / Xr + a / Yr;
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
function _o(e, t, n, r, i, a, o) {
	Pi.setBuffer(e._roots[t]), vo(0, e, n, r, i, a, o), Pi.clearBuffer();
}
function vo(e, t, n, r, i, a, o) {
	let { float32Array: s, uint16Array: c, uint32Array: l } = Pi, u = e * 2;
	if (si(u, c)) Ga(t, n, r, ci(e, l), li(u, c), i, a, o);
	else {
		let c = ui(e);
		Wa(c, s, r, a, o) && vo(c, t, n, r, i, a, o);
		let u = di(e, l);
		Wa(u, s, r, a, o) && vo(u, t, n, r, i, a, o);
	}
}
var yo = [
	"x",
	"y",
	"z"
];
function bo(e, t, n, r, i, a) {
	Pi.setBuffer(e._roots[t]);
	let o = xo(0, e, n, r, i, a);
	return Pi.clearBuffer(), o;
}
function xo(e, t, n, r, i, a) {
	let { float32Array: o, uint16Array: s, uint32Array: c } = Pi, l = e * 2;
	if (si(l, s)) return Ka(t, n, r, ci(e, c), li(l, s), i, a);
	{
		let s = fi(e, c), l = yo[s], u = r.direction[l] >= 0, d, f;
		u ? (d = ui(e), f = di(e, c)) : (d = di(e, c), f = ui(e));
		let p = Wa(d, o, r, i, a) ? xo(d, t, n, r, i, a) : null;
		if (p) {
			let e = p.point[l];
			if (u ? e <= o[f + s] : e >= o[f + s + 3]) return p;
		}
		let m = Wa(f, o, r, i, a) ? xo(f, t, n, r, i, a) : null;
		return p && m ? p.distance <= m.distance ? p : m : p || m || null;
	}
}
var So = /* @__PURE__ */ new h(), Co = /* @__PURE__ */ new va(), wo = /* @__PURE__ */ new va(), To = /* @__PURE__ */ new V(), Eo = /* @__PURE__ */ new ya(), Do = /* @__PURE__ */ new ya();
function Oo(e, t, n, r) {
	Pi.setBuffer(e._roots[t]);
	let i = ko(0, e, n, r);
	return Pi.clearBuffer(), i;
}
function ko(e, t, n, r, i = null) {
	let { float32Array: a, uint16Array: o, uint32Array: s } = Pi, c = e * 2;
	if (i === null && (n.boundingBox || n.computeBoundingBox(), Eo.set(n.boundingBox.min, n.boundingBox.max, r), i = Eo), si(c, o)) {
		let i = t.geometry, l = i.index, u = i.attributes.position, d = n.index, f = n.attributes.position, p = ci(e, s), m = li(c, o);
		if (To.copy(r).invert(), n.boundsTree) return ti(pi(e), a, Do), Do.matrix.copy(To), Do.needsUpdate = !0, n.boundsTree.shapecast({
			intersectsBounds: (e) => Do.intersectsBox(e),
			intersectsTriangle: (e) => {
				e.a.applyMatrix4(r), e.b.applyMatrix4(r), e.c.applyMatrix4(r), e.needsUpdate = !0;
				for (let n = p, r = m + p; n < r; n++) if (za(wo, 3 * t.resolveTriangleIndex(n), l, u), wo.needsUpdate = !0, e.intersectsTriangle(wo)) return !0;
				return !1;
			}
		});
		{
			let e = na(n);
			for (let n = p, r = m + p; n < r; n++) {
				za(Co, 3 * t.resolveTriangleIndex(n), l, u), Co.a.applyMatrix4(To), Co.b.applyMatrix4(To), Co.c.applyMatrix4(To), Co.needsUpdate = !0;
				for (let t = 0, n = e * 3; t < n; t += 3) if (za(wo, t, d, f), wo.needsUpdate = !0, Co.intersectsTriangle(wo)) return !0;
			}
		}
	} else {
		let o = ui(e), c = di(e, s);
		return ti(pi(o), a, So), !!(i.intersectsBox(So) && ko(o, t, n, r, i) || (ti(pi(c), a, So), i.intersectsBox(So) && ko(c, t, n, r, i)));
	}
}
var Ao = /* @__PURE__ */ new V(), jo = /* @__PURE__ */ new ya(), Mo = /* @__PURE__ */ new ya(), No = /* @__PURE__ */ new U(), Po = /* @__PURE__ */ new U(), Fo = /* @__PURE__ */ new U(), Io = /* @__PURE__ */ new U();
function Lo(e, t, n, r = {}, i = {}, a = 0, o = Infinity) {
	t.boundingBox || t.computeBoundingBox(), jo.set(t.boundingBox.min, t.boundingBox.max, n), jo.needsUpdate = !0;
	let s = e.geometry, c = s.attributes.position, l = s.index, u = t.attributes.position, d = t.index, f = ba.getPrimitive(), p = ba.getPrimitive(), m = No, h = Po, g = null, _ = null;
	i && (g = Fo, _ = Io);
	let v = Infinity, y = null, b = null;
	return Ao.copy(n).invert(), Mo.matrix.copy(Ao), e.shapecast({
		boundsTraverseOrder: (e) => jo.distanceToBox(e),
		intersectsBounds: (e, t, n) => n < v && n < o ? (t && (Mo.min.copy(e.min), Mo.max.copy(e.max), Mo.needsUpdate = !0), !0) : !1,
		intersectsRange: (r, i) => {
			if (t.boundsTree) {
				let s = t.boundsTree;
				return s.shapecast({
					boundsTraverseOrder: (e) => Mo.distanceToBox(e),
					intersectsBounds: (e, t, n) => n < v && n < o,
					intersectsRange: (t, o) => {
						for (let x = t, S = t + o; x < S; x++) {
							let t = s.resolveTriangleIndex(x);
							za(p, 3 * t, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
							for (let t = r, n = r + i; t < n; t++) {
								let n = e.resolveTriangleIndex(t);
								za(f, 3 * n, l, c), f.needsUpdate = !0;
								let r = f.distanceToTriangle(p, m, g);
								if (r < v && (h.copy(m), _ && _.copy(g), v = r, y = t, b = x), r < a) return !0;
							}
						}
					}
				});
			} else {
				let o = na(t);
				for (let t = 0, s = o; t < s; t++) {
					za(p, 3 * t, d, u), p.a.applyMatrix4(n), p.b.applyMatrix4(n), p.c.applyMatrix4(n), p.needsUpdate = !0;
					for (let n = r, o = r + i; n < o; n++) {
						let r = e.resolveTriangleIndex(n);
						za(f, 3 * r, l, c), f.needsUpdate = !0;
						let i = f.distanceToTriangle(p, m, g);
						if (i < v && (h.copy(m), _ && _.copy(g), v = i, y = n, b = t), i < a) return !0;
					}
				}
			}
		}
	}), ba.releasePrimitive(f), ba.releasePrimitive(p), v === Infinity ? null : (r.point ? r.point.copy(h) : r.point = h.clone(), r.distance = v, r.faceIndex = y, i && (i.point ? i.point.copy(_) : i.point = _.clone(), i.point.applyMatrix4(Ao), h.applyMatrix4(Ao), i.distance = h.sub(i.point).length(), i.faceIndex = b), r);
}
function Ro(e, t, n) {
	return e === null ? null : (e.point.applyMatrix4(t.matrixWorld), e.distance = e.point.distanceTo(n.ray.origin), e.object = t, e);
}
var zo = /* @__PURE__ */ new ya(), Bo = /* @__PURE__ */ new k(), Vo = /* @__PURE__ */ new U(), Ho = /* @__PURE__ */ new V(), Uo = /* @__PURE__ */ new U(), Wo = [
	"getX",
	"getY",
	"getZ"
], Go = class e extends la {
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
			[$r]: !0
		});
		if (s._roots = a, s._indirectBuffer = o || null, r.setIndex) {
			let e = n.getIndex();
			if (e === null) {
				let e = new H(t.index, 1, !1);
				n.setIndex(e);
			} else e.array !== i && (e.array.set(i), e.needsUpdate = !0);
		}
		return s;
		function c(e) {
			for (let t = 0; t < e.length; t++) {
				let n = e[t], r = new Uint32Array(n), i = new Uint16Array(n);
				for (let e = 0, t = n.byteLength / Yr; e < t; e++) {
					let t = Xr * e;
					si(2 * t, i) || (r[t + 6] = r[t + 6] / Xr - e);
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
			let r = a[Wo[e]](c), i = a[Wo[e]](l), o = a[Wo[e]](u), s = r;
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
				n[t + g + 0] = l + f, n[t + g + 1] = f + (Math.abs(l) + f) * Qr;
			}
		}
		return n;
	}
	raycastObject3D(e, t, n = []) {
		let { material: r } = e;
		if (r === void 0) return;
		Ho.copy(e.matrixWorld).invert(), Bo.copy(t.ray).applyMatrix4(Ho), Uo.setFromMatrixScale(e.matrixWorld), Vo.copy(Bo.direction).multiply(Uo);
		let i = Vo.length(), a = t.near / i, o = t.far / i;
		if (t.firstHitOnly === !0) {
			let i = this.raycastFirst(Bo, r, a, o);
			i = Ro(i, e, t), i && n.push(i);
		} else {
			let i = this.raycast(Bo, r, a, o);
			for (let r = 0, a = i.length; r < a; r++) {
				let a = Ro(i[r], e, t);
				a && n.push(a);
			}
		}
		return n;
	}
	refit(e = null) {
		return (this.indirect ? go : Ua)(this, e);
	}
	raycast(e, t = 0, n = 0, r = Infinity) {
		let i = this._roots, a = [], o = this.indirect ? _o : Ja;
		for (let s = 0, c = i.length; s < c; s++) o(this, s, t, e, a, n, r);
		return a;
	}
	raycastFirst(e, t = 0, n = 0, r = Infinity) {
		let i = this._roots, a = null, o = this.indirect ? bo : Za;
		for (let s = 0, c = i.length; s < c; s++) {
			let i = o(this, s, t, e, n, r);
			i != null && (a == null || i.distance < a.distance) && (a = i);
		}
		return a;
	}
	intersectsGeometry(e, t) {
		let n = !1, r = this._roots, i = this.indirect ? Oo : ao;
		for (let a = 0, o = r.length; a < o && (n = i(this, a, e, t), !n); a++);
		return n;
	}
	shapecast(e) {
		let t = ba.getPrimitive(), n = super.shapecast({
			...e,
			intersectsPrimitive: e.intersectsTriangle,
			scratchPrimitive: t,
			iterate: this.indirect ? qa : Ha
		});
		return ba.releasePrimitive(t), n;
	}
	bvhcast(t, n, r) {
		let { intersectsRanges: i, intersectsTriangles: a } = r, o = ba.getPrimitive(), s = this.geometry.index, c = this.geometry.attributes.position, l = this.indirect ? (e) => {
			let t = this.resolveTriangleIndex(e);
			za(o, t * 3, s, c);
		} : (e) => {
			za(o, e * 3, s, c);
		}, u = ba.getPrimitive(), d = t.geometry.index, f = t.geometry.attributes.position, p = t.indirect ? (e) => {
			let n = t.resolveTriangleIndex(e);
			za(u, n * 3, d, f);
		} : (e) => {
			za(u, e * 3, d, f);
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
		return zo.set(e.min, e.max, t), zo.needsUpdate = !0, this.shapecast({
			intersectsBounds: (e) => zo.intersectsBox(e),
			intersectsTriangle: (e) => zo.intersectsTriangle(e)
		});
	}
	intersectsSphere(e) {
		return this.shapecast({
			intersectsBounds: (t) => e.intersectsBox(t),
			intersectsTriangle: (t) => t.intersectsSphere(e)
		});
	}
	closestPointToGeometry(e, t, n = {}, r = {}, i = 0, a = Infinity) {
		return (this.indirect ? Lo : ho)(this, e, t, n, r, i, a);
	}
	closestPointToPoint(e, t = {}, n = 0, r = Infinity) {
		return Ca(this, e, t, n, r);
	}
}, Ko = /* @__PURE__ */ new V(), qo = /* @__PURE__ */ new k(), Jo = /* @__PURE__ */ new Ni(() => new z()), Yo = /* @__PURE__ */ new U(), Xo = /* @__PURE__ */ new U(), Zo = /* @__PURE__ */ new h(), Qo = [
	"getX",
	"getY",
	"getZ"
], $o = class extends la {
	get primitiveStride() {
		return 2;
	}
	writePrimitiveBounds(e, t, n) {
		let r = this._indirectBuffer, { geometry: i, primitiveStride: a } = this, o = i.attributes.position, s = i.index, c = s ? s.count : o.count, l = (r ? r[e] : e) * a, u = (l + 1) % c;
		s && (l = s.getX(l), u = s.getX(u));
		for (let e = 0; e < 3; e++) {
			let r = o[Qo[e]](l), i = o[Qo[e]](u), a = r < i ? r : i, s = r > i ? r : i;
			t[n + e] = a, t[n + e + 3] = s;
		}
		return t;
	}
	shapecast(e) {
		let t = Jo.getPrimitive(), n = super.shapecast({
			...e,
			intersectsPrimitive: e.intersectsLine,
			scratchPrimitive: t,
			iterate: es
		});
		return Jo.releasePrimitive(t), n;
	}
	raycastObject3D(e, t, n = []) {
		let { matrixWorld: r } = e, { firstHitOnly: i } = t;
		Ko.copy(r).invert(), qo.copy(t.ray).applyMatrix4(Ko);
		let a = t.params.Line.threshold / ((e.scale.x + e.scale.y + e.scale.z) / 3), o = a * a, s = null, c = Infinity;
		return this.shapecast({
			boundsTraverseOrder: (e) => e.distanceToPoint(qo.origin),
			intersectsBounds: (e) => (Zo.copy(e).expandByScalar(Math.abs(a)), qo.intersectsBox(Zo) ? Gr : Wr),
			intersectsLine: (a, l) => {
				if (qo.distanceSqToSegment(a.start, a.end, Yo, Xo) > o) return;
				Yo.applyMatrix4(e.matrixWorld);
				let u = t.ray.origin.distanceTo(Yo);
				u < t.near || u > t.far || i && u >= c || (c = u, l = this.resolvePrimitiveIndex(l), s = {
					distance: u,
					point: Xo.clone().applyMatrix4(r),
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
function es(e, t, n, r, i, a, o) {
	let { geometry: s, primitiveStride: c } = n, { index: l } = s, u = s.attributes.position, d = l ? l.count : u.count;
	for (let s = e, f = t + e; s < f; s++) {
		let e = n.resolvePrimitiveIndex(s) * c, t = (e + 1) % d;
		if (l && (e = l.getX(e), t = l.getX(t)), o.start.fromBufferAttribute(u, e), o.end.fromBufferAttribute(u, t), r(o, s, i, a)) return !0;
	}
	return !1;
}
var ts = {
	Mesh: Oe.prototype.raycast,
	Line: e.prototype.raycast,
	LineSegments: fe.prototype.raycast,
	LineLoop: Se.prototype.raycast,
	Points: te.prototype.raycast,
	BatchedMesh: f.prototype.raycast
}, ns = /* @__PURE__ */ new Oe(), rs = [];
function is(t, n) {
	if (this.isBatchedMesh) as.call(this, t, n);
	else {
		let { geometry: r } = this;
		if (r.boundsTree) r.boundsTree.raycastObject3D(this, t, n);
		else {
			let r;
			if (this instanceof Oe) r = ts.Mesh;
			else if (this instanceof fe) r = ts.LineSegments;
			else if (this instanceof Se) r = ts.LineLoop;
			else if (this instanceof e) r = ts.Line;
			else if (this instanceof te) r = ts.Points;
			else throw Error("BVH: Fallback raycast function not found.");
			r.call(this, t, n);
		}
	}
}
function as(e, t) {
	if (this.boundsTrees) {
		let n = this.boundsTrees, r = this._drawInfo || this._instanceInfo, i = this._drawRanges || this._geometryInfo, a = this.matrixWorld;
		ns.material = this.material, ns.geometry = this.geometry;
		let o = ns.geometry.boundsTree, s = ns.geometry.drawRange;
		ns.geometry.boundingSphere === null && (ns.geometry.boundingSphere = new v());
		for (let o = 0, s = r.length; o < s; o++) {
			if (!this.getVisibleAt(o)) continue;
			let s = r[o].geometryIndex;
			if (ns.geometry.boundsTree = n[s], this.getMatrixAt(o, ns.matrixWorld).premultiply(a), !ns.geometry.boundsTree) {
				this.getBoundingBoxAt(s, ns.geometry.boundingBox), this.getBoundingSphereAt(s, ns.geometry.boundingSphere);
				let e = i[s];
				ns.geometry.setDrawRange(e.start, e.count);
			}
			ns.raycast(e, rs);
			for (let e = 0, n = rs.length; e < n; e++) {
				let n = rs[e];
				n.object = this, n.batchId = o, t.push(n);
			}
			rs.length = 0;
		}
		ns.geometry.boundsTree = o, ns.geometry.drawRange = s, ns.material = null, ns.geometry = null;
	} else ts.BatchedMesh.call(this, e, t);
}
function os(e = {}) {
	let { type: t = Go } = e;
	return this.boundsTree = new t(this, e), this.boundsTree;
}
function ss() {
	this.boundsTree = null;
}
var cs = class e extends Et {
	constructor(t) {
		super(t), X(this, "onDisposed", new Z()), X(this, "onBeforeDispose", new Z()), X(this, "onFragmentsLoaded", new Z()), X(this, "baseCoordinationModel", ""), X(this, "baseCoordinationMatrix", new V()), X(this, "enabled", !0), X(this, "_core"), this.components.add(e.uuid, this);
	}
	static getWorker() {
		return O.getWorker();
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
		this._core = new O(e, t), this.core.onModelLoaded.add(async () => {
			if (this._hasCoordinationModel) return;
			let e = [...this.list.values()][0];
			e && (this.baseCoordinationModel = e.modelId, this.baseCoordinationMatrix = await e.getCoordinationMatrix());
		}), this.list.onItemDeleted.add(() => {
			this.list.size > 0 || (this.baseCoordinationModel = "", this.baseCoordinationMatrix = new V());
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
		let n = new V();
		return t && n.copy(t.clone()).invert(), n.multiply(this.baseCoordinationMatrix), e.applyMatrix4(n), n;
	}
};
X(cs, "uuid", "fef46874-46a3-461b-8c44-2922ab77c806");
var Q = cs;
function ls(e, t) {
	t.x = (e & 255) / 255, t.y = (e >> 8 & 255) / 255, t.z = (e >> 16 & 255) / 255, t.w = 1;
}
function us(e, t) {
	return e[t] | e[t + 1] << 8 | e[t + 2] << 16;
}
function ds(e) {
	let t = /* @__PURE__ */ new Set();
	return e.traverse((e) => {
		e.isMesh && t.add(e);
	}), Array.from(t);
}
var fs = class {
	constructor(e, t = {}) {
		let { pixelsPerMeter: n = .1 } = t;
		this.pixelsPerMeter = n, this.renderer = e;
	}
	async cull(e) {
		e = ds(e);
		let { renderer: t, pixelsPerMeter: n } = this, r = new U(), i = new ue(), a = new h(), s = new M(1, 1);
		a.makeEmpty(), e.forEach((e) => {
			a.expandByObject(e);
		}), a.getSize(r);
		let c = Math.min(t.capabilities.maxTextureSize, 2 ** 13), l = Math.ceil(r.x / n), u = Math.ceil(r.z / n), d = Math.ceil(l / c), f = Math.ceil(u / c);
		s.setSize(Math.ceil(l / d), Math.ceil(u / f)), i.rotation.x = -Math.PI / 2, i.far = a.max.y - a.min.y + i.near, i.position.y = a.max.y + i.near;
		let p = new o(), m = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), _ = [];
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			m.set(n, n.material), g.set(n, n.parent);
			let r = new ps();
			r.objectId = t, _.push(r), n.material = r, p.add(n);
		}
		let v = t.getClearColor(new A()), y = t.getClearAlpha(), b = t.getRenderTarget(), x = t.autoClear;
		t.autoClear = !0, t.setClearColor(0, 0), t.setRenderTarget(s);
		let S = new Uint8Array(s.width * s.height * 4), C = /* @__PURE__ */ new Set(), w = r.x / d, T = r.z / f;
		for (let n = 0; n < d; n++) for (let r = 0; r < f; r++) {
			let o = a.min.x + w * n, c = o + w, l = a.min.z + T * r, u = l + T, d = (o + c) / 2, f = (l + u) / 2;
			i.position.set(d, a.max.y, f);
			let m = w / 2, h = T / 2;
			i.left = -m, i.right = m, i.top = h, i.bottom = -h, i.updateProjectionMatrix(), t.render(p, i);
			let g = await t.readRenderTargetPixelsAsync(s, 0, 0, s.width, s.height, S);
			for (let t = 0, n = g.length; t < n; t += 4) {
				if (g[t + 3] === 0) continue;
				let n = us(g, t);
				C.add(e[n]);
			}
		}
		for (let t of e) {
			t.material = m.get(t);
			let e = g.get(t);
			e ? e.add(t) : p.remove(t);
		}
		t.setClearColor(v, y), t.setRenderTarget(b), t.autoClear = x;
		for (let e of _) e.dispose();
		return s.dispose(), Array.from(C);
	}
}, ps = class extends x {
	get objectId() {
		return this._objectId;
	}
	set objectId(e) {
		this._objectId = e, ls(e, this.uniforms.objectId.value);
	}
	constructor(e) {
		super({
			glslVersion: ee,
			blending: 0,
			uniforms: { objectId: { value: new n() } },
			vertexShader: "\n				void main() {\n\n					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n				}\n			",
			fragmentShader: "\n				layout(location = 0) out vec4 out_id;\n				uniform vec4 objectId;\n\n				void main() {\n\n					out_id = objectId;\n\n				}\n			"
		}), this._objectId = 0, this.setValues(e);
	}
}, ms = 1e-16, hs = /* @__PURE__ */ new U(0, 1, 0), gs = new U();
function _s(e) {
	return e.delta(gs).normalize(), Math.abs(gs.dot(hs)) >= 1 - ms;
}
function vs(e, t) {
	let { start: n, end: r } = t, i = e.points, a = !1, o = !1;
	for (let e = 0; e < 3; e++) {
		let t = i[e];
		if (!a && n.distanceToSquared(t) <= ms && (a = !0), !o && r.distanceToSquared(t) <= ms && (o = !0), a && o) return !0;
	}
	return a && o;
}
var ys = /* @__PURE__ */ new z();
function bs(e, t, n = !1, r = []) {
	let i = [[0, 1]];
	for (let e = 0, n = t.length; e < n; e++) {
		let n = i[e], r = t[e];
		n[1] = r[0], i.push([r[1], 1]);
	}
	n && ([t, i] = [i, t]);
	for (let t = 0, n = i.length; t < n; t++) {
		let { start: n, end: a } = e;
		ys.start.lerpVectors(n, a, i[t][0]), ys.end.lerpVectors(n, a, i[t][1]), r.push(new Float32Array([
			ys.start.x,
			ys.start.y,
			ys.start.z,
			ys.end.x,
			ys.end.y,
			ys.end.z
		]));
	}
	return r;
}
var xs = 1e-10, Ss = /* @__PURE__ */ new U(0, 1, 0), Cs = /* @__PURE__ */ new U(), ws = /* @__PURE__ */ new U(), Ts = /* @__PURE__ */ new U(), Es = /* @__PURE__ */ new p();
function* Ds(e, t = [], n = {}) {
	let { projectionDirection: r = Ss, thresholdAngle: i = 1, iterationTime: a = 30 } = n, o = 10 ** 4, s = Math.cos(we.DEG2RAD * i), c = e.getIndex(), l = e.getAttribute("position"), u = c ? c.count : l.count, d = [
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
		let { a: n, b: i, c: u } = Es;
		if (n.fromBufferAttribute(l, d[0]), i.fromBufferAttribute(l, d[1]), u.fromBufferAttribute(l, d[2]), Es.getNormal(Ts), p[0] = `${Math.round(n.x * o)},${Math.round(n.y * o)},${Math.round(n.z * o)}`, p[1] = `${Math.round(i.x * o)},${Math.round(i.y * o)},${Math.round(i.z * o)}`, p[2] = `${Math.round(u.x * o)},${Math.round(u.y * o)},${Math.round(u.z * o)}`, !(p[0] === p[1] || p[1] === p[2] || p[2] === p[0])) for (let e = 0; e < 3; e++) {
			let n = (e + 1) % 3, i = p[e], a = p[n], o = Es[f[e]], c = Es[f[n]], l = `${i}_${a}`, u = `${a}_${i}`;
			if (u in m && m[u]) {
				let e = m[u].normal, n = Ts.dot(e) <= s, i = !1;
				if (r !== null) {
					let t = r.dot(Ts);
					t = Math.abs(t) < xs ? 0 : t;
					let n = r.dot(e);
					n = Math.abs(n) < xs ? 0 : n, i = Math.sign(t) !== Math.sign(n);
				}
				if (n || i) {
					let e = new z();
					e.start.copy(o), e.end.copy(c), t.push(e);
				}
				m[u] = null;
			} else l in m || (m[l] = {
				index0: d[e],
				index1: d[n],
				normal: Ts.clone()
			});
		}
	}
	for (let e in m) if (m[e]) {
		let { index0: n, index1: r } = m[e];
		Cs.fromBufferAttribute(l, n), ws.fromBufferAttribute(l, r);
		let i = new z();
		i.start.copy(Cs), i.end.copy(ws), t.push(i);
	}
	return t;
}
var Os = /* @__PURE__ */ new z();
function ks(e, t, n, r = []) {
	return e.bvhcast(t, n, { intersectsTriangles: (e, t) => {
		if (js(e, t) || (e.needsUpdate && e.update(), t.needsUpdate && t.update(), Math.abs(e.plane.normal.dot(t.plane.normal)) > .999999)) return !1;
		e.intersectsTriangle(t, Os, !0) && !vs(e, Os) && !vs(t, Os) && r.push(Os.clone());
	} }), r;
}
function As(e, t) {
	return e.distanceTo(t) < 1e-10;
}
function js(e, t) {
	let n = [
		"a",
		"b",
		"c"
	], r = 0;
	for (let i = 0; i < 3; i++) for (let a = 0; a < 3; a++) {
		let o = e[n[i]], s = t[n[a]];
		As(o, s) && r++;
	}
	return r >= 2;
}
function Ms(e) {
	Ns(e);
	let t = [];
	return e.traverse((e) => {
		e.geometry && e.visible && t.push(e);
	}), t;
}
var Ns = (e) => {
	if (e === void 0) return;
	let t = [...e.children];
	for (let n of t) n === void 0 ? e.children.splice(e.children.indexOf(n), 1) : Ns(n);
}, Ps = /* @__PURE__ */ new V(), Fs = /* @__PURE__ */ new V(), Is = class {
	constructor() {
		this.projectionDirection = new U(0, 1, 0), this.thresholdAngle = 50, this.iterationTime = 30;
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
			let o = Ms(e), s = null;
			r && (s = new U());
			let c = performance.now();
			for (let e = 0; e < o.length; e++) {
				c - performance.now() > a && (yield);
				let l = o[e];
				s && (Fs.copy(l.matrixWorld).invert(), s.copy(r).transformDirection(Fs).normalize());
				let u = yield* Ds(l.geometry, [], {
					projectionDirection: s,
					thresholdAngle: i,
					iterationTime: a
				});
				Ls(u, l.matrixWorld);
				for (let e = 0; e < u.length; e++) t.push(u[e]);
				if (n !== null) for (let e = 0; e < u.length; e++) n.push(l);
			}
			return t;
		} else return yield* Ds(e, t, {
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
			let i = Ms(e), a = /* @__PURE__ */ new Map(), o = performance.now();
			for (let e = 0; e < i.length; e++) {
				performance.now() - o > r && (yield, o = performance.now());
				let t = i[e].geometry;
				if (!a.has(t)) {
					let e = t.boundsTree || new Go(t, { maxLeafSize: 1 });
					a.set(t, e);
				}
			}
			o = performance.now();
			for (let e = 0; e < i.length; e++) for (let s = e; s < i.length; s++) {
				performance.now() - o > r && (yield, o = performance.now());
				let c = i[e], l = i[s], u = a.get(c.geometry), d = a.get(l.geometry);
				Ps.copy(c.matrixWorld).invert().multiply(l.matrixWorld);
				let f = ks(u, d, Ps, []);
				Ls(f, c.matrixWorld);
				for (let e = 0; e < f.length; e++) t.push(f[e]);
				if (n !== null) for (let e = 0; e < f.length; e++) n.push(c);
			}
			return t;
		} else {
			let n;
			return e.isBufferGeometry ? n = e.boundsTree || new Go(e, { maxLeafSize: 1 }) : (n = e, e = n.geometry), Ps.identity(), ks(n, n, Ps, t);
		}
	}
};
function Ls(e, t, n = 1e-6) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		i.applyMatrix4(t), i.start.y += n, i.end.y += n;
	}
}
var Rs = class extends $i {
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
}, zs = 1e-16, Bs = /* @__PURE__ */ new U(0, 1, 0), Vs = /* @__PURE__ */ new I(), Hs = /* @__PURE__ */ new U(), Us = /* @__PURE__ */ new U();
function Ws(e, t, n) {
	e.needsUpdate && e.update(), Vs.copy(e.plane), Vs.normal.dot(Bs) < 0 && (Vs.normal.multiplyScalar(-1), Vs.constant *= -1);
	let r = Vs.distanceToPoint(t.start), i = Vs.distanceToPoint(t.end), a = Math.abs(r) < zs, o = r < 0, s = i < 0;
	if (t.delta(Us).normalize(), Math.abs(Vs.normal.dot(Us)) < zs) return a || !o ? !1 : (n.copy(t), !0);
	if (o && s) return n.copy(t), !0;
	if (!o && !s) return !1;
	{
		let e = we.mapLinear(0, r, i, 0, 1);
		if (t.at(e, Hs), o) return n.start.copy(t.start), n.end.copy(Hs), !0;
		if (s) return n.end.copy(t.end), n.start.copy(Hs), !0;
	}
	return !1;
}
var Gs = 1e-16, Ks = 1e-16, qs = /* @__PURE__ */ new I(), Js = /* @__PURE__ */ new U(), Ys = /* @__PURE__ */ new U(), Xs = /* @__PURE__ */ new va(), Zs = /* @__PURE__ */ new z(), Qs = /* @__PURE__ */ new z(), $s = /* @__PURE__ */ new U(), ec = /* @__PURE__ */ new U(), tc = /* @__PURE__ */ new U();
function nc(e, t, n = new z()) {
	if (Xs.copy(t), Xs.a.y = 0, Xs.b.y = 0, Xs.c.y = 0, Xs.update(), Zs.copy(e), Zs.start.y = 0, Zs.end.y = 0, Xs.getArea() <= Gs) return null;
	let r = Zs.distance();
	Zs.delta($s).divideScalar(r), ec.copy($s).cross(Xs.plane.normal).normalize(), qs.setFromNormalAndCoplanarPoint(ec, Zs.start);
	let i = 0, { points: a } = Xs;
	for (let e = 0; e < 3; e++) {
		let t = a[e], n = a[(e + 1) % 3], r = qs.distanceToPoint(t), o = qs.distanceToPoint(n), s = Math.abs(r) < Ks, c = Math.abs(o) < Ks, l = !1;
		if (!s && !c && r * o < 0) {
			let e = r / (r - o);
			Js.lerpVectors(t, n, e), l = !0;
		}
		if ((l && !c || s) && (s && !l && Js.copy(t), i === 0 ? Qs.start.copy(Js) : Qs.end.copy(Js), i++, i === 2)) break;
	}
	if (i === 2) {
		if (Qs.delta(tc).normalize(), $s.dot(tc) < 0) {
			let e = Qs.start;
			Qs.start = Qs.end, Qs.end = e;
		}
		let t = Ys.subVectors(Zs.end, Zs.start).dot($s), i = Ys.subVectors(Qs.start, Zs.start).dot($s), a = Ys.subVectors(Qs.end, Zs.start).dot($s);
		return t <= i || a <= 0 ? null : (e.at(Math.max(0, i) / r, n.start), e.at(Math.min(t, a) / r, n.end), n);
	}
	return null;
}
var rc = 1e-16, ic = /* @__PURE__ */ new U(), ac = /* @__PURE__ */ new U(), oc = /* @__PURE__ */ new U();
function sc(e, t, n) {
	let r = cc(e, t);
	return r ? (lc(r, n), !0) : !1;
}
function cc(e, t) {
	e.delta(ic), ac.subVectors(t.start, e.start), oc.subVectors(t.end, e.start);
	let n = ic.length(), r = ac.length() / n, i = oc.length() / n;
	return r = Math.min(Math.max(r, 0), 1), i = Math.min(Math.max(i, 0), 1), Math.abs(r - i) <= rc ? null : [r, i];
}
function lc(e, t) {
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
var uc = new U(0, 1, 0), dc = 1e-10, fc = /* @__PURE__ */ new z(), pc = /* @__PURE__ */ new z(), mc = /* @__PURE__ */ new va();
mc.update = () => {
	mc.plane.setFromCoplanarPoints(...mc.points);
};
function hc(e, t, n, r, i = null) {
	let { geometry: a, matrixWorld: o, material: s } = n, c = s.side, l = o.determinant() < 0, u = e.lines;
	e.bvhcast(t, o, { intersectsRanges: (e, t, n, s) => {
		i && (i.candidates += t * s);
		for (let d = n, f = s + n; d < f; d++) {
			let n = 3 * d + 0, s = 3 * d + 1, f = 3 * d + 2;
			a.index && (n = a.index.getX(n), s = a.index.getX(s), f = a.index.getX(f));
			let { a: p, b: m, c: h } = mc;
			if (p.fromBufferAttribute(a.attributes.position, n).applyMatrix4(o), m.fromBufferAttribute(a.attributes.position, s).applyMatrix4(o), h.fromBufferAttribute(a.attributes.position, f).applyMatrix4(o), mc.needsUpdate = !0, mc.update(), c !== 2 && mc.plane.normal.dot(uc) !== l == (c === 1)) {
				i && (i.backFaceCulled += t);
				continue;
			}
			let g = Math.max(p.y, m.y, h.y), _ = Math.min(p.y, m.y, h.y), v = mc.plane.normal, y = v.x, b = v.y, x = v.z, S = mc.plane.constant;
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
				if (vs(mc, e)) {
					i && i.triangleEdgeCulled++;
					continue;
				}
				if (a < _) fc.copy(e);
				else if (!Ws(mc, e, fc)) {
					i && i.planeTrimCulled++;
					continue;
				}
				if (fc.distance() < dc) {
					i && i.distThresholdCulled++;
					continue;
				}
				nc(fc, mc, pc) ? (i && i.used++, sc(e, pc, r[n])) : i && i.noOverlapCulled++;
			}
		}
	} });
}
var gc = !1, _c = {}, vc = {}, yc = null, bc = 0, xc = 0, $ = {
	get enabled() {
		return gc;
	},
	set enabled(e) {
		gc = e;
	},
	reset() {
		for (let e in _c) delete _c[e];
		for (let e in vc) delete vc[e];
		yc = null, bc = 0, xc = 0;
	},
	setStat(e, t) {
		vc[e] = t;
	},
	startTotal() {
		gc && (xc = performance.now());
	},
	startStep(e) {
		gc && (yc !== null && this.endStep(), yc = e, bc = performance.now());
	},
	endStep() {
		!gc || yc === null || (_c[yc] = performance.now() - bc, yc = null);
	},
	printSummary() {
		if (!gc) return;
		yc !== null && this.endStep();
		let e = performance.now() - xc;
		console.log("\n=== Projection Summary ==="), console.log(`Total time: ${e.toFixed(1)}ms
`);
		for (let [t, n] of Object.entries(_c)) {
			let r = (n / e * 100).toFixed(1);
			console.log(`  ${t}: ${n.toFixed(1)}ms (${r}%)`);
		}
		if (Object.keys(vc).length > 0) {
			console.log("\n--- Stats ---");
			for (let [e, t] of Object.entries(vc)) console.log(`  ${e}: ${t}`);
		}
		console.log("");
	}
}, Sc = 1e-5, Cc = 1e-16, wc = 1e-16;
function Tc(e) {
	let t = new Float32Array(e.length * 6);
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		t[n * 6 + 0] = r.start.x, t[n * 6 + 1] = r.start.y, t[n * 6 + 2] = r.start.z, t[n * 6 + 3] = r.end.x, t[n * 6 + 4] = r.end.y, t[n * 6 + 5] = r.end.z;
	}
	return t;
}
function Ec(e, t, n, r, i) {
	e.bvhcast(t, n.matrixWorld, { intersectsRanges: (e, t, n, a) => {
		r._edgeOffsets.push(e), r._edgeCounts.push(t), r._meshOffsets.push(n), r._meshCounts.push(a), r._meshIndex.push(i), r.groupCount++;
	} });
}
var Dc = 1e3, Oc = 1e5, kc = 5, Ac = 3, jc = 2e6, Mc = null;
async function Nc() {
	return Mc === null && (Mc = new E(), await Mc.init()), Mc;
}
async function Pc(e, t, n, r, i = null) {
	let a = await Nc();
	e._edgeOffsets && (e.edgeOffsets = new Uint32Array(e._edgeOffsets), e.edgeCounts = new Uint32Array(e._edgeCounts), e.meshOffsets = new Uint32Array(e._meshOffsets), e.meshCounts = new Uint32Array(e._meshCounts), e.meshIndex = new Uint32Array(e._meshIndex), e._edgeOffsets = null, e._edgeCounts = null, e._meshOffsets = null, e._meshCounts = null, e._meshIndex = null);
	let o = ie(Tc(n.lines), "float");
	$.enabled && console.log("Number of meshes:", t.length), $.enabled && console.log("Group count:", e.groupCount);
	let s = [];
	{
		let e = 0;
		for (; e < t.length;) {
			let n = e, r = 0;
			for (; n < t.length;) {
				let i = t[n].geometry, a = i.index ? i.index.count / 3 : i.attributes.position.count / 3;
				if (n > e && (n - e >= Dc || r + a > Oc)) break;
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
		let E = new Uint32Array(T.length * kc);
		for (let e = 0; e < T.length; e++) {
			let t = T[e], n = e * kc;
			E[n + 0] = t.edgeOffset, E[n + 1] = t.edgeCount, E[n + 2] = t.triOffset, E[n + 3] = t.triCount, E[n + 4] = t.meshIdx;
		}
		let D = 0;
		for (let e = 0; e < T.length; e++) D += T[e].edgeCount * T[e].triCount;
		i && (i.candidates += D);
		let O = Math.min(Math.ceil(D * .1), jc), k = Math.max(O, 1e4);
		$.enabled && console.log(`  Batch ${n + 1}: ${T.length} groups, ${g / 3} vertices, ${_ / 3} triangles, ${D} pairs, buffer for ${k} overlaps`);
		let A = performance.now(), j = ie(y, "float"), M = ie(b, "uint"), N = ie(w, "float"), ee = ie(E, "uint"), P = ie(new Uint32Array([0]), "uint").toAtomic(), I = ie(new Float32Array(k * Ac), "float");
		d += performance.now() - A;
		let te = performance.now(), re = xe(() => {
			let e = De.mul(kc), t = ee.element(e), n = ee.element(e.add(1)), r = ee.element(e.add(2)), i = ee.element(e.add(3)), a = ee.element(e.add(4)).mul(16), s = ye(N.element(a), N.element(a.add(1)), N.element(a.add(2)), N.element(a.add(3)), N.element(a.add(4)), N.element(a.add(5)), N.element(a.add(6)), N.element(a.add(7)), N.element(a.add(8)), N.element(a.add(9)), N.element(a.add(10)), N.element(a.add(11)), N.element(a.add(12)), N.element(a.add(13)), N.element(a.add(14)), N.element(a.add(15)));
			L({
				start: oe(0),
				end: i.toInt(),
				type: "int",
				condition: "<",
				name: "triIdx"
			}, ({ triIdx: e }) => {
				let i = r.add(e.toUint()).mul(3), a = M.element(i), c = M.element(i.add(1)), l = M.element(i.add(2)), u = R(j.element(a.mul(3)), j.element(a.mul(3).add(1)), j.element(a.mul(3).add(2))), d = R(j.element(c.mul(3)), j.element(c.mul(3).add(1)), j.element(c.mul(3).add(2))), f = R(j.element(l.mul(3)), j.element(l.mul(3).add(1)), j.element(l.mul(3).add(2))), p = s.mul(Ne(u, B(1))).xyz, m = s.mul(Ne(d, B(1))).xyz, h = s.mul(Ne(f, B(1))).xyz, g = ne(m.sub(p), h.sub(p));
				de(g.dot(g).lessThan(B(4 * Cc * Cc)), () => {
					he();
				}), de(g.y.lessThan(0), () => {
					he();
				});
				let _ = pe(p.y, pe(m.y, h.y));
				L({
					start: oe(0),
					end: n.toInt(),
					type: "int",
					condition: "<",
					name: "edgeIdx"
				}, ({ edgeIdx: e }) => {
					let n = t.add(e.toUint()), r = n.mul(6), i = R(o.element(r), o.element(r.add(1)), o.element(r.add(2))), a = R(o.element(r.add(3)), o.element(r.add(4)), o.element(r.add(5))), s = le(i.y, a.y);
					de(_.lessThanEqual(s), () => {
						he();
					});
					let c = F(g), l = c.dot(p).negate(), u = c.y.lessThan(0), d = ke(u, c.negate(), c), f = ke(u, l.negate(), l), v = d.dot(i).add(f), y = d.dot(a).add(f), b = v.lessThan(0), x = y.lessThan(0), S = _e(v).lessThan(B(Sc)), C = b.not().and(x.not()), w = y.sub(v), T = _e(w).lessThan(B(Sc));
					de(T.and(S.or(b.not())), () => {
						he();
					}), de(C.and(T.not()), () => {
						he();
					});
					let E = se(i, a, v.negate().div(w)), D = R(ke(T.or(b), i.x, E.x), ke(T.or(b), i.y, E.y), ke(T.or(b), i.z, E.z)), O = R(ke(T.or(x), a.x, E.x), ke(T.or(x), a.y, E.y), ke(T.or(x), a.z, E.z)), A = O.sub(D);
					de(A.dot(A).lessThan(B(Sc)), () => {
						he();
					});
					let j = i.sub(p), M = i.sub(m), N = i.sub(h), ee = a.sub(p), L = a.sub(m), te = a.sub(h), re = j.dot(j).lessThanEqual(B(Sc)), ie = M.dot(M).lessThanEqual(B(Sc)), ae = N.dot(N).lessThanEqual(B(Sc)), z = ee.dot(ee).lessThanEqual(B(Sc)), oe = L.dot(L).lessThanEqual(B(Sc)), ce = te.dot(te).lessThanEqual(B(Sc)), ue = re.or(ie).or(ae), fe = z.or(oe).or(ce);
					de(ue.and(fe), () => {
						he();
					});
					let V = R(p.x, B(0), p.z), me = R(m.x, B(0), m.z), ge = R(h.x, B(0), h.z), ve = R(D.x, B(0), D.z), ye = R(O.x, B(0), O.z), be = R(i.x, B(0), i.z), xe = R(a.x, B(0), a.z).sub(be), Se = xe.dot(xe);
					de(Se.lessThan(B(Sc)), () => {
						he();
					});
					let we = Se.sqrt(), Te = ne(me.sub(V), ge.sub(V));
					de(Te.dot(Te).lessThanEqual(B(4 * Cc * Cc)), () => {
						he();
					});
					let Ee = ye.sub(ve), De = Ee.dot(Ee);
					de(De.lessThan(B(Sc)), () => {
						he();
					});
					let Oe = De.sqrt(), Ae = Ee.div(Oe), je = xe.div(we), Me = ne(Ae, F(Te)), Ne = B(0).toVar(), Fe = B(0).toVar(), H = B(0).toVar(), U = B(0).toVar(), W = Pe(0).toVar(), G = Me.dot(V.sub(ve)), Ie = Me.dot(me.sub(ve)), Le = _e(G).lessThan(B(wc)), Re = _e(Ie).lessThan(B(wc)), ze = Le.not().and(Re.not()).and(G.mul(Ie).lessThan(0));
					de(ze, () => {
						let e = G.div(G.sub(Ie)), t = se(V.x, me.x, e), n = se(V.z, me.z, e);
						de(W.equal(0), () => {
							Ne.assign(t), Fe.assign(n);
						}).Else(() => {
							H.assign(t), U.assign(n);
						}), W.addAssign(1);
					}).ElseIf(Le, () => {
						de(W.equal(0), () => {
							Ne.assign(V.x), Fe.assign(V.z);
						}).Else(() => {
							H.assign(V.x), U.assign(V.z);
						}), W.addAssign(1);
					});
					let Be = Ie, Ve = Me.dot(ge.sub(ve)), He = Re, Ue = _e(Ve).lessThan(B(wc)), We = He.not().and(Ue.not()).and(Be.mul(Ve).lessThan(0));
					de(W.lessThan(2), () => {
						de(We, () => {
							let e = Be.div(Be.sub(Ve)), t = se(me.x, ge.x, e), n = se(me.z, ge.z, e);
							de(W.equal(0), () => {
								Ne.assign(t), Fe.assign(n);
							}).Else(() => {
								H.assign(t), U.assign(n);
							}), W.addAssign(1);
						}).ElseIf(He.and(ze.not()).and(Le.not()), () => {
							de(W.equal(0), () => {
								Ne.assign(me.x), Fe.assign(me.z);
							}).Else(() => {
								H.assign(me.x), U.assign(me.z);
							}), W.addAssign(1);
						});
					});
					let K = Ve, Ge = G, Ke = Ue, qe = Le, Je = Ke.not().and(qe.not()).and(K.mul(Ge).lessThan(0));
					de(W.lessThan(2), () => {
						de(Je, () => {
							let e = K.div(K.sub(Ge)), t = se(ge.x, V.x, e), n = se(ge.z, V.z, e);
							de(W.equal(0), () => {
								Ne.assign(t), Fe.assign(n);
							}).Else(() => {
								H.assign(t), U.assign(n);
							}), W.addAssign(1);
						}).ElseIf(Ke.and(We.not()).and(He.not()), () => {
							de(W.equal(0), () => {
								Ne.assign(ge.x), Fe.assign(ge.z);
							}).Else(() => {
								H.assign(ge.x), U.assign(ge.z);
							}), W.addAssign(1);
						});
					}), de(W.notEqual(2), () => {
						he();
					});
					let Ye = R(Ne, B(0), Fe), Xe = R(H, B(0), U).sub(Ye).dot(Ae), Ze = R(Ne, B(0), Fe).toVar(), Qe = R(H, B(0), U).toVar();
					de(Xe.lessThan(0), () => {
						let e = Ne, t = Fe;
						Ze.x.assign(H), Ze.z.assign(U), Qe.x.assign(e), Qe.z.assign(t);
					});
					let $e = B(0), et = Oe, tt = Ze.sub(ve).dot(Ae), q = Qe.sub(ve).dot(Ae);
					de(et.lessThanEqual(tt).or(q.lessThanEqual($e)), () => {
						he();
					});
					let nt = pe($e, tt), rt = le(et, q), it = ve.add(Ae.mul(nt)), at = ve.add(Ae.mul(rt)), J = it.sub(be).dot(je).div(we), Y = at.sub(be).dot(je).div(we), ot = pe(B(0), le(B(1), J)), st = pe(B(0), le(B(1), Y));
					de(_e(st.sub(ot)).lessThanEqual(B(wc)), () => {
						he();
					});
					let ct = Ce(P.element(0), 1);
					de(ct.lessThan(Pe(k)), () => {
						let e = ct.mul(Ac);
						I.element(e).assign(n.toFloat()), I.element(e.add(1)).assign(ot), I.element(e.add(2)).assign(st);
					});
				});
			});
		})().compute(T.length);
		f += performance.now() - te;
		let ae = performance.now();
		await a.computeAsync(re), c += performance.now() - ae;
		let z = performance.now(), ce = await a.getArrayBufferAsync(P.value), ue = new Uint32Array(ce)[0];
		if (i && (i.used += Math.min(ue, k)), $.enabled && console.log(`  Batch ${n + 1}: ${ue} overlaps found (capacity: ${k})`), ue > k && $.enabled && console.warn(`  WARNING: Overlap buffer overflow! ${ue} > ${k}. Some occlusion data lost.`), ue > 0) {
			let e = await a.getArrayBufferAsync(I.value), t = new Float32Array(e);
			l += performance.now() - z;
			let n = performance.now(), i = Math.min(ue, k);
			for (let e = 0; e < i; e++) {
				let n = e * Ac, i = Math.round(t[n]), a = t[n + 1], o = t[n + 2];
				lc([a, o], r[i]);
			}
			u += performance.now() - n, $.enabled && console.log(`  Processed ${i} overlaps into hiddenOverlapMap`);
		} else l += performance.now() - z;
	}
	a.dispose(), Mc = null;
	let p = d + f + c + l + u;
	$.enabled && (console.log(`WebGPU timing breakdown (total: ${p.toFixed(1)}ms):`), console.log(`  Buffer creation: ${d.toFixed(1)}ms`), console.log(`  Shader build: ${f.toFixed(1)}ms`), console.log(`  GPU compute: ${c.toFixed(1)}ms`), console.log(`  Readback: ${l.toFixed(1)}ms`), console.log(`  CPU merge: ${u.toFixed(1)}ms`));
}
var Fc = /* @__PURE__ */ new U(0, 1, 0);
function Ic(e, n = null) {
	let r = new Float32Array(e.length * 6), i = 0;
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		r[i++] = n[0], r[i++] = 0, r[i++] = n[2], r[i++] = n[3], r[i++] = 0, r[i++] = n[5];
	}
	let a = new t(), o = new H(r, 3, !0);
	if (a.setAttribute("position", o), n) {
		let t = new Float32Array(e.length * 2);
		for (let e = 0, r = n.length; e < r; e++) t[e * 2] = n[e], t[e * 2 + 1] = n[e];
		a.setAttribute("group", new H(t, 1));
	}
	return a;
}
var Lc = class {
	constructor(e, t = !0) {
		this.meshes = Ms(e), this.bvhs = /* @__PURE__ */ new Map(), this.visibleEdges = [], this.hiddenEdges = [], this.visibleGroupIndices = [], this.hiddenGroupIndices = [], this.groupKeyToIndex = null, this.hasGroups = !1, this.iterationTime = 30, this.useWebGPU = t;
	}
	reset() {
		this.visibleEdges.length = 0, this.hiddenEdges.length = 0, this.visibleGroupIndices.length = 0, this.hiddenGroupIndices.length = 0, this.groupKeyToIndex = null, this.hasGroups = !1;
	}
	getVisibleLineGeometry() {
		return Ic(this.visibleEdges, this.groupKeyToIndex ? this.visibleGroupIndices : null);
	}
	getHiddenLineGeometry() {
		return Ic(this.hiddenEdges, this.groupKeyToIndex ? this.hiddenGroupIndices : null);
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
				let e = t.boundsTree || new Go(t);
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
		let u = new Rs(e, {
			maxLeafSize: 2,
			strategy: Ur
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
			f ? Ec(u, r.get(i.geometry), i, p, e) : hc(u, r.get(i.geometry), i, l, d);
		}
		if (f) {
			let e = !1;
			for (Pc(p, n, u, l, d).then(() => {
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
			if (bs(n, r, !1, i), bs(n, r, !0, a), h) {
				let e = n.groupIndex;
				for (let t = c; t < i.length; t++) this.visibleGroupIndices.push(e);
				for (let t = u; t < a.length; t++) this.hiddenGroupIndices.push(e);
			}
		}
	}
}, Rc = class {
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
		let { iterationTime: n, angleThreshold: r, includeIntersectionEdges: i } = this, { onProgress: a = () => {}, visibilityCuller: s = null, groupFn: c = null } = t;
		if ($.reset(), $.startTotal(), e.isBufferGeometry && (e = new Oe(e)), s) {
			$.startStep("Visibility culling");
			let t = !1;
			for (s.cull(e).then((n) => {
				e = new o(), e.children = n, t = !0;
			}); !t;) yield;
		}
		let l = new Is();
		l.iterationTime = n, l.thresholdAngle = r, l.projectionDirection.copy(Fc), $.startStep("Generating candidate edges"), a("Generating candidate edges");
		let u = [], d = c ? [] : null;
		if (yield* l.getEdgesGenerator(e, u, d), i && ($.startStep("Generating intersection edges"), a("Generating intersection edges"), yield* l.getIntersectionEdgesGenerator(e, u, d)), $.startStep("Pre-filtering edges"), a("Pre-filtering edges"), d) {
			let e = [], t = [];
			for (let n = 0; n < u.length; n++) _s(u[n]) || (e.push(u[n]), t.push(d[n]));
			u = e, d = t;
		} else u = u.filter((e) => !_s(e));
		yield;
		let f = new Lc(e, this.useWebGPU);
		if (f.iterationTime = n, c && d) {
			let e = /* @__PURE__ */ new Map();
			for (let t = 0; t < u.length; t++) {
				let n = c(d[t]);
				e.has(n) || e.set(n, e.size), u[t].groupIndex = e.get(n);
			}
			f.groupKeyToIndex = e, f.hasGroups = !0;
		}
		return a("Building BVH & computing overlaps"), yield* f.addEdgesGenerator(u, { onProgress: a ? (e, t) => {
			a("Building BVH & computing overlaps", e / t, f);
		} : null }), $.printSummary(), f;
	}
};
new z(), new z(), new U();
var zc = class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "onDisposed", new Z()), X(this, "generator", new Rc()), X(this, "cullerPixelsPerMeter", .05), X(this, "projectionDirection", new U(0, -1, 0)), X(this, "nearPlane", -Infinity), X(this, "farPlane", Infinity), this.components.add(e.uuid, this), this.generator.includeIntersectionEdges = !1;
	}
	async get(e, n, r) {
		let a = this.components.get(Q), o = new P(), s = /* @__PURE__ */ new Map();
		for (let [n, r] of Object.entries(e)) {
			let e = a.list.get(n);
			if (!e) continue;
			let i = (await e.getItemsIdsWithGeometry()).filter((e) => r.has(e));
			if (i.length === 0) continue;
			let c = await e.getItemsGeometry(i);
			for (let r in c) {
				let i = c[r];
				for (let r of i) {
					if (!r.positions || !r.indices || !r.transform || !r.representationId) continue;
					let i = r.representationId;
					if (!s.has(i)) {
						let e = new t();
						e.setAttribute("position", new m(r.positions, 3)), r.normals && e.setAttribute("normal", new m(r.normals, 3)), e.setIndex(Array.from(r.indices)), s.set(i, e);
					}
					let a = new Oe(s.get(i));
					a.applyMatrix4(r.transform), a.applyMatrix4(e.object.matrixWorld), a.updateWorldMatrix(!0, !0), a.userData._edgeProjectorModelId = n, a.userData._edgeProjectorLocalId = r.localId, o.add(a);
				}
			}
		}
		let c = this.projectionDirection.clone().normalize(), l = new U(0, -1, 0), u = new i().setFromUnitVectors(c, l), d = new V().makeRotationFromQuaternion(u), f = d.clone().invert();
		for (let e of o.children) e.applyMatrix4(d), e.updateWorldMatrix(!1, !1);
		if (o.traverse((e) => {
			let t = e;
			if (t.geometry && !t.geometry.boundsTree) {
				let e = t.geometry.index ? t.geometry.index.count : t.geometry.attributes.position.count;
				t.geometry.groups.forEach((t) => {
					t.count === Infinity && (t.count = e - t.start);
				}), t.geometry.boundsTree = new Go(t.geometry, {
					maxLeafSize: 1,
					strategy: Ur
				});
			}
		}), this.nearPlane !== -Infinity || this.farPlane !== Infinity) {
			let e = new h(), t = [];
			for (let n of o.children) {
				let r = n;
				r.geometry && (e.setFromObject(r), (e.max.y < this.nearPlane || e.min.y > this.farPlane) && t.push(r));
			}
			for (let e of t) o.remove(e);
		}
		let p = n.renderer.three, g = new fs(p, { pixelsPerMeter: this.cullerPixelsPerMeter }), _ = await this.generator.generateAsync(o, {
			visibilityCuller: g,
			groupFn: (e) => `${e.userData._edgeProjectorModelId ?? "unknown"}:${e.userData._edgeProjectorLocalId ?? 0}`,
			onProgress: r?.onProgress
		}), v = _.getVisibleLineGeometry(), y = _.getHiddenLineGeometry();
		v.applyMatrix4(f), y.applyMatrix4(f);
		let b = _.getGroupKeys(), x = {};
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
X(zc, "uuid", "f2e76c3a-8b1d-4d5e-9a3f-7c6b2d4e8f1a");
var Bc = zc, Vc = class {
	constructor() {
		X(this, "wasm", {
			path: "",
			absolute: !1,
			logLevel: y.LOG_LEVEL_OFF
		}), X(this, "webIfc", { COORDINATE_TO_ORIGIN: !0 }), X(this, "autoSetWasm", !0), X(this, "customLocateFileHandler", null);
	}
};
X(class e extends Et {
	constructor(t) {
		super(t), X(this, "onDisposed", new Z()), X(this, "onIfcStartedLoading", new Z()), X(this, "onIfcImporterInitialized", new Z()), X(this, "onSetup", new Z()), X(this, "settings", new Vc()), X(this, "webIfc", new _()), X(this, "enabled", !0), this.components.add(e.uuid, this);
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
		let a = new s();
		a.wasm.path = this.settings.wasm.path, a.wasm.absolute = this.settings.wasm.absolute, a.webIfcSettings = this.settings.webIfc, this.onIfcImporterInitialized.trigger(a), r?.instanceCallback && r.instanceCallback(a);
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
		this.webIfc = null, this.webIfc = new _();
	}
	async autoSetWasm() {
		let e = await fetch(`https://unpkg.com/@thatopen/components@${zl.release}/package.json`);
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
var Hc = class e extends Et {
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
X(Hc, "uuid", "dd9ccf2d-8a21-4821-b7f6-2949add16a29");
var Uc = Hc, Wc = class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "onDisposed", new Z()), X(this, "list", new je()), this.components.add(e.uuid, this);
	}
	dispose(t = !0) {
		this.list.clear(), this.onDisposed.trigger(e.uuid), t && (this.onDisposed.reset(), this.list.eventsEnabled = !1, this.list.dispose());
	}
	get() {
		let e = new h();
		for (let t of this.list) e.union(t);
		return e;
	}
	async addFromModelIdMap(e) {
		let t = this.components.get(Q), n = new h();
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
		let n = new U();
		return t.getCenter(n), n;
	}
	async getCameraOrientation(e, t = 1) {
		let n = this.components.get(Q);
		this.list.clear();
		for (let [e, t] of n.list) this.list.add(t.box);
		let r = this.get();
		this.list.clear();
		let i = new U();
		r.getCenter(i);
		let a = new U();
		r.getSize(a);
		let o = Math.max(a.x, a.y, a.z) * t, s = new U();
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
X(Wc, "uuid", "d1444724-dba6-4cdd-a0c7-68ee1450d166");
var Gc = Wc, Kc = class {
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
		let r = await this._components.get(Jc).getItems(this.queries, {
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
			guid: this._components.get(Jc).list.getKey(this) ?? Pt.create(),
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
}, qc = class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "list", new r()), t.add(e.uuid, this);
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
		return r === "inclusive" ? Fr.join(a) : Fr.intersect(a);
	}
	create(e, t) {
		let n = new Kc(this.components, t);
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
X(qc, "uuid", "0da7ad77-f734-42ca-942f-a074adfd1e3a");
var Jc = qc;
X(class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "onDisposed", new Z()), X(this, "list", new r()), X(this, "defaultSaveFunction", (e) => "value" in e.Name ? e.Name.value : null), X(this, "onBeforeFragmentsDispose", async (e) => {
			let { key: t, value: n } = e, r = await n.getLocalIds(), i = { [t]: new Set(r) };
			this.removeItems(i);
		}), t.add(e.uuid, this), this.setupEvents(), t.get(Q).list.onBeforeDelete.add(this.onBeforeFragmentsDispose);
	}
	setupEvents() {
		this.list.onBeforeDelete.add(({ value: e }) => e.dispose());
	}
	getClassificationGroups(e) {
		let t = this.list.get(e);
		return t || (t = new r(), this.list.set(e, t)), t;
	}
	getModelItems(e, t, n) {
		let { map: r } = this.getGroupData(e, t), i = r[n];
		return i || (i = /* @__PURE__ */ new Set(), r[n] = i), i;
	}
	getGroupData(e, t) {
		let n = this.components.get(Jc), r = this.getClassificationGroups(e), i = r.get(t);
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
							e(Fr.join([t, i.map]));
						});
					} else e(i.map);
				});
			}
		}, r.set(t, i)), i;
	}
	async aggregateItems(e, t, n) {
		let r = n?.data ?? void 0, i = n?.aggregationCallback ?? this.defaultSaveFunction, a = this.components.get(Q), o = await this.components.get(Jc).getItems([t], { modelIds: n?.modelIds });
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
		Fr.add(r, n);
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
			let a = Fr.join(e);
			t.push(a);
		}
		return Fr.intersect(t);
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
				if (!e?.[i]) return;
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
		let t = await this.components.get(Jc).addFromCategories(e?.modelIds);
		for (let n of t) this.setGroupQuery(e?.classificationName ?? "Categories", n, { name: n });
	}
	dispose() {
		this.list.clear(), this.components.get(Q).list.onBeforeDelete.remove(this.onBeforeFragmentsDispose), this.onDisposed.trigger();
	}
	removeItems(e, t) {
		if (t && t.classificationName) {
			let n = this.list.get(t.classificationName);
			if (!n || t.groupName && !n.get(t.groupName)) return;
			for (let [, t] of n) Fr.remove(t.map, e);
			return;
		}
		for (let [, t] of this.list.entries()) for (let [, n] of t) Fr.remove(n.map, e);
	}
	async byModel(e) {
		let t = this.components.get(Q), n = e?.classificationName ?? "Models";
		for (let [r, i] of t.list) {
			if (e && e.modelIds && !e.modelIds.some((e) => e.test(r))) continue;
			let t = await i.getItemsIdsWithGeometry(), a = { [r]: new Set(t) };
			this.getGroupData(n, r), this.addGroupItems(n, r, a);
		}
	}
}, "uuid", "e25a7f3c-46c4-4a14-9d3d-5115f24ebeb7");
var Yc = class e {
	constructor(e, t) {
		if (X(this, "enabled", !0), X(this, "components"), X(this, "onDisposed", new Z()), X(this, "mouse"), X(this, "world"), X(this, "debugMode", !1), X(this, "_renderTarget"), X(this, "_renderTargetSize", new T()), X(this, "_debugCanvas"), X(this, "_debugContainer"), X(this, "_idMaterial"), X(this, "_depthMaterial"), X(this, "_normalMaterial"), X(this, "_originalMaterials", /* @__PURE__ */ new Map()), X(this, "_hiddenLods", []), !t.renderer) throw Error("A renderer is needed for the FastModelPicker to work!");
		this.world = t, this.mouse = new Br(t.renderer.three.domElement), this.components = e, this._idMaterial = this.buildIdMaterial(), this._depthMaterial = this.buildDepthMaterial(), this._normalMaterial = this.buildNormalMaterial(), this.setupRenderTarget();
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
		let i = Zc(r);
		return i >= .999999 ? null : Qc(n, i, this.world.camera.three);
	}
	async getNormalAt(e) {
		if (!this.enabled || !this._renderTarget || !this.world.renderer) return null;
		let t = this.components.get(Q);
		if (!t.initialized || t.list.size === 0) return null;
		this.renderNormalPass();
		let n = e ?? this.mouse.position, r = this.readPixelAt(n);
		if (!r || r[3] === 0) return null;
		let i = new U(r[0] / 255 * 2 - 1, r[1] / 255 * 2 - 1, r[2] / 255 * 2 - 1);
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
				if (!(e instanceof Oe)) return;
				let t = e.geometry;
				if (!t) return;
				if (!t.attributes || !t.attributes.id) {
					e.visible &&= (this._hiddenLods.push(e), !1);
					return;
				}
				this._originalMaterials.set(e, e.material);
				let n = e.material, r = Array.isArray(n) ? n.length : 1;
				e.material = Array(r).fill(this._idMaterial), o = !0;
			}), o && n.set(t, i);
		}
		return n;
	}
	renderIdPass(e, t) {
		this.renderPickPass(e, this._renderTarget, this._idMaterial, t);
	}
	renderPickPass(e, t, r, i) {
		let a = this.world.renderer.three, o = this.world.scene.three, s = this.world.camera.three, c = this.components.get(Q), l = a.clippingPlanes ?? [];
		r.clippingPlanes = l, r.clipping = l.length > 0;
		let u = a.getRenderTarget(), d = a.autoClear, f = a.getClearColor(new A()), p = a.getClearAlpha(), m = a.getScissorTest(), h = a.getScissor(new n());
		a.setRenderTarget(t), a.setClearColor(0, 0), a.autoClear = !1, a.setScissorTest(!1), a.clear(!0, !0, !1);
		let g = t.width, _ = t.height, v = Math.floor((i.x + 1) * .5 * g), y = Math.floor((i.y + 1) * .5 * (_ - 1)), b = Math.max(0, Math.min(g - 4, v - 2)), x = Math.max(0, Math.min(_ - 4, y - 2)), S = a.getPixelRatio();
		a.setScissor(b / S, x / S, 4 / S, 4 / S), a.setScissorTest(!0);
		let C = /* @__PURE__ */ new Map();
		for (let [e, t] of c.list) C.set(e, t.object);
		let w = new Set(C.values()), T = /* @__PURE__ */ new Map(), E = (e) => {
			let t = e;
			for (; t;) {
				if (w.has(t)) return !0;
				t = t.parent;
			}
			return !1;
		};
		o.traverse((e) => {
			e !== o && e.isMesh && (E(e) || (T.set(e, e.visible), e.visible = !1));
		});
		let D = /* @__PURE__ */ new Map();
		for (let e of C.values()) D.set(e, e.visible), e.visible = !1;
		for (let [t, n] of e) {
			let e = C.get(n);
			e && (e.visible = !0, r.uniforms.modelByte.value = t, a.render(o, s), e.visible = !1);
		}
		for (let [e, t] of D) e.visible = t;
		for (let [e, t] of T) e.visible = t;
		a.setScissorTest(m), a.setScissor(h), a.setRenderTarget(u), a.autoClear = d, a.setClearColor(f, p);
	}
	renderWithTileMaterial(e) {
		let t = this.world.renderer.three, n = this.world.scene.three, r = this.world.camera.three, i = this.components.get(Q), a = t.clippingPlanes ?? [];
		e.clippingPlanes = a, e.clipping = a.length > 0;
		let o = t.getRenderTarget(), s = t.autoClear, c = t.getClearColor(new A()), l = t.getClearAlpha(), u = /* @__PURE__ */ new Map(), d = [];
		for (let [, t] of i.list) t.object.traverse((t) => {
			if (!(t instanceof Oe)) return;
			let n = t.geometry;
			if (!n) return;
			if (!n.attributes || !n.attributes.id) {
				t.visible &&= (d.push(t), !1);
				return;
			}
			if (!t.visible) return;
			u.set(t, t.material);
			let r = t.material, i = Array.isArray(r) ? r.length : 1;
			t.material = Array(i).fill(e);
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
		e instanceof M ? (n = e, r = t) : (n = this._renderTarget, r = e);
		let i = this.world.renderer.three, a = this._renderTargetSize, o = Math.floor((r.x + 1) * .5 * a.x), s = Math.floor((r.y + 1) * .5 * (a.y - 1)), c = Math.max(0, Math.min(a.x - 1, o)), l = Math.max(0, Math.min(a.y - 1, s)), u = /* @__PURE__ */ new Uint8Array(4);
		return i.readRenderTargetPixels(n, c, l, 1, 1, u), u;
	}
	buildIdMaterial() {
		return new x({
			uniforms: { modelByte: { value: 1 } },
			vertexShader: "\n        attribute vec4 id;\n        varying vec4 vId;\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n        #endif\n        void main() {\n          vId = id;\n          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n          #if NUM_CLIPPING_PLANES > 0\n            vClipPosition = -mvPosition.xyz;\n          #endif\n          gl_Position = projectionMatrix * mvPosition;\n        }\n      ",
			fragmentShader: "\n        precision highp float;\n        uniform float modelByte;\n        varying vec4 vId;\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n          uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n        #endif\n        void main() {\n          #if NUM_CLIPPING_PLANES > 0\n            for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {\n              vec4 plane = clippingPlanes[i];\n              if (dot(vClipPosition, plane.xyz) > plane.w) discard;\n            }\n          #endif\n          gl_FragColor = vec4(modelByte / 255.0, vId.y / 255.0, vId.z / 255.0, vId.w / 255.0);\n        }\n      ",
			side: 2
		});
	}
	buildDepthMaterial() {
		return new x({
			uniforms: {},
			vertexShader: "\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n        #endif\n        void main() {\n          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n          #if NUM_CLIPPING_PLANES > 0\n            vClipPosition = -mvPosition.xyz;\n          #endif\n          gl_Position = projectionMatrix * mvPosition;\n        }\n      ",
			fragmentShader: "\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n          uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n        #endif\n        void main() {\n          #if NUM_CLIPPING_PLANES > 0\n            for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {\n              vec4 plane = clippingPlanes[i];\n              if (dot(vClipPosition, plane.xyz) > plane.w) discard;\n            }\n          #endif\n          float v = gl_FragCoord.z;\n          vec4 r = vec4(\n            fract(v * 16777216.0),\n            fract(v * 65536.0),\n            fract(v * 256.0),\n            v\n          );\n          r.yzw -= r.xyz * (1.0 / 256.0);\n          gl_FragColor = r * (256.0 / 255.0);\n        }\n      ",
			side: 2
		});
	}
	buildNormalMaterial() {
		return new x({
			uniforms: {},
			vertexShader: "\n        varying vec3 vWorldNormal;\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n        #endif\n        void main() {\n          vWorldNormal = normalize(\n            (modelMatrix * vec4(normal, 0.0)).xyz\n          );\n          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n          #if NUM_CLIPPING_PLANES > 0\n            vClipPosition = -mvPosition.xyz;\n          #endif\n          gl_Position = projectionMatrix * mvPosition;\n        }\n      ",
			fragmentShader: "\n        varying vec3 vWorldNormal;\n        #if NUM_CLIPPING_PLANES > 0\n          varying vec3 vClipPosition;\n          uniform vec4 clippingPlanes[NUM_CLIPPING_PLANES];\n        #endif\n        void main() {\n          #if NUM_CLIPPING_PLANES > 0\n            for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {\n              vec4 plane = clippingPlanes[i];\n              if (dot(vClipPosition, plane.xyz) > plane.w) discard;\n            }\n          #endif\n          vec3 n = normalize(vWorldNormal);\n          if (!gl_FrontFacing) n = -n;\n          gl_FragColor = vec4(n * 0.5 + 0.5, 1.0);\n        }\n      ",
			side: 2
		});
	}
	setupRenderTarget() {
		let e = this.world.renderer.three.getSize(new T());
		this._renderTargetSize.copy(e);
		let t = {
			format: Me,
			type: g,
			minFilter: be,
			magFilter: be,
			depthBuffer: !0
		};
		this._renderTarget = new M(e.x, e.y, t), this.debugMode && this.setupDebugCanvas(), this.world.renderer.onResize.add((e) => {
			this._renderTargetSize.copy(e), this._renderTarget.setSize(e.x, e.y), this._debugCanvas && (this._debugCanvas.width = e.x, this._debugCanvas.height = e.y);
		});
	}
	setupDebugCanvas() {
		if (this._debugCanvas) return;
		let e = this.world.renderer.three.getSize(new T());
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
X(Yc, "MAX_MODELS", 254);
var Xc = Yc;
function Zc(e) {
	let t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = e[3] / 255;
	return 255 / 256 * (t / (256 * 256 * 256) + n / (256 * 256) + r / 256 + i);
}
function Qc(e, t, n) {
	let r = new U(e.x, e.y, t * 2 - 1);
	return r.unproject(n), r;
}
var $c = class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "list", /* @__PURE__ */ new Map()), X(this, "onDisposed", new Z()), t.add(e.uuid, this);
	}
	get(e) {
		if (this.list.has(e.uuid)) return this.list.get(e.uuid);
		let t = new Xc(this.components, e);
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
X($c, "uuid", "4a82430c-7ff2-49ea-9401-60807502dad6");
var el = $c, tl = 1e3, nl = class e {
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
			let s = r.localTransforms[t.localTransform], c = r.globalTransforms[t.item], l = ul(i, c, s);
			this.collectPolygonsFromShell(o, l, a);
		}
		return a.length === 0 ? null : {
			faces: a,
			edges: pl(a),
			vertices: ml(a)
		};
	}
	collectPolygonsFromShell(e, t, n) {
		let r = e.points, i = e.profiles ?? /* @__PURE__ */ new Map(), a = e.bigProfiles ?? /* @__PURE__ */ new Map(), o = new U(), s = (e) => {
			if (e.length < 3) return;
			let i = new Float32Array(e.length * 3);
			for (let n = 0; n < e.length; n++) {
				let a = r[e[n]];
				o.set(a[0], a[1], a[2]).applyMatrix4(t), i[n * 3] = o.x, i[n * 3 + 1] = o.y, i[n * 3 + 2] = o.z;
			}
			let a = dl(i);
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
			point: new U(n[i], n[i + 1], n[i + 2]),
			snappingClass: 0
		} };
	}
	snapToLine(e, t) {
		let n = t.edges;
		if (n.length === 0) return null;
		let r = this.maxDistance * this.maxDistance, i = new U(), a = new U(), o = Infinity, s = -1;
		for (let t = 0; t < n.length; t += 6) {
			let c = _l(e, n[t], n[t + 1], n[t + 2], n[t + 3], n[t + 4], n[t + 5], a);
			c <= r && c < o && (o = c, s = t, i.copy(a));
		}
		return s < 0 ? null : { result: {
			point: i.clone(),
			snappingClass: 1,
			snappedEdgeP1: new U(n[s], n[s + 1], n[s + 2]),
			snappedEdgeP2: new U(n[s + 3], n[s + 4], n[s + 5])
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
			faceIndices: fl(r.points.length / 3)
		} } : null;
	}
}, rl = new V(), il = new U(), al = new U(), ol = new U();
function sl(e, t) {
	if (!e) return t.identity();
	let n = e.position[0], r = e.position[1], i = e.position[2];
	return il.set(e.xDirection[0], e.xDirection[1], e.xDirection[2]), al.set(e.yDirection[0], e.yDirection[1], e.yDirection[2]), ol.crossVectors(il, al), t.set(il.x, al.x, ol.x, n, il.y, al.y, ol.y, r, il.z, al.z, ol.z, i, 0, 0, 0, 1), t;
}
var cl = new V(), ll = new V();
function ul(e, t, n) {
	return sl(t, cl), sl(n, ll), rl.copy(e).multiply(cl).multiply(ll).clone();
}
function dl(e) {
	let t = new U(), n = e.length / 3;
	for (let r = 0; r < n; r++) {
		let i = (r + 1) % n, a = e[r * 3], o = e[r * 3 + 1], s = e[r * 3 + 2], c = e[i * 3], l = e[i * 3 + 1], u = e[i * 3 + 2];
		t.x += (o - l) * (s + u), t.y += (s - u) * (a + c), t.z += (a - c) * (o + l);
	}
	let r = t.length();
	return r < 1e-10 ? null : t.divideScalar(r);
}
function fl(e) {
	if (e < 3) return /* @__PURE__ */ new Uint32Array();
	let t = e - 2, n = new Uint32Array(t * 3);
	for (let e = 0; e < t; e++) n[e * 3] = 0, n[e * 3 + 1] = e + 1, n[e * 3 + 2] = e + 2;
	return n;
}
function pl(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.points, i = e.length / 3;
		for (let r = 0; r < i; r++) {
			let a = (r + 1) % i, o = e[r * 3], s = e[r * 3 + 1], c = e[r * 3 + 2], l = e[a * 3], u = e[a * 3 + 1], d = e[a * 3 + 2], f = gl(o, s, c, l, u, d);
			t.has(f) || (t.add(f), n.push(o, s, c, l, u, d));
		}
	}
	return new Float32Array(n);
}
function ml(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.points, i = e.length / 3;
		for (let r = 0; r < i; r++) {
			let i = e[r * 3], a = e[r * 3 + 1], o = e[r * 3 + 2], s = hl(i, a, o);
			t.has(s) || (t.add(s), n.push(i, a, o));
		}
	}
	return new Float32Array(n);
}
function hl(e, t, n) {
	return `${Math.round(e * tl)},${Math.round(t * tl)},${Math.round(n * tl)}`;
}
function gl(e, t, n, r, i, a) {
	let o = hl(e, t, n), s = hl(r, i, a);
	return o < s ? `${o}|${s}` : `${s}|${o}`;
}
function _l(e, t, n, r, i, a, o, s) {
	let c = i - t, l = a - n, u = o - r, d = c * c + l * l + u * u, f = 0;
	d > 0 && (f = ((e.x - t) * c + (e.y - n) * l + (e.z - r) * u) / d, f < 0 ? f = 0 : f > 1 && (f = 1));
	let p = t + f * c, m = n + f * l, h = r + f * u;
	s.set(p, m, h);
	let g = e.x - p, _ = e.y - m, v = e.z - h;
	return g * g + _ * _ + v * v;
}
var vl = class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "onDisposed", new Z()), X(this, "_resolver"), t.add(e.uuid, this), this._resolver = new nl(t);
	}
	get() {
		return this._resolver;
	}
	dispose() {
		this._resolver.dispose(), this.onDisposed.trigger();
	}
};
X(vl, "uuid", "be9b8e6c-7f5b-4a36-8e7e-3a1f5e2a6c9d");
var yl = vl, bl = class {
	constructor(e, t) {
		X(this, "enabled", !0), X(this, "components"), X(this, "onDisposed", new Z()), X(this, "mouse"), X(this, "three", new c()), X(this, "world");
		let n = t.renderer;
		if (!n) throw Error("A renderer is needed for the raycaster to work!");
		this.world = t, this.mouse = new Br(n.three.domElement), this.components = e;
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
			let e = await this.components.get(el).get(this.world).getFullPick(r);
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
					let n = await this.components.get(yl).get().resolve(e.point, e.modelId, e.itemId, t);
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
}, xl = class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "list", /* @__PURE__ */ new Map()), X(this, "onDisposed", new Z()), t.add(e.uuid, this);
	}
	get(e) {
		if (this.list.has(e.uuid)) return this.list.get(e.uuid);
		let t = new bl(this.components, e);
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
X(xl, "uuid", "d5d8bdf0-db25-4952-b951-b643af207ace");
var Sl = xl, Cl = class extends Tt {
	constructor() {
		super(...arguments), X(this, "onCameraChanged", new Z()), X(this, "meshes", /* @__PURE__ */ new Set()), X(this, "onAfterUpdate", new Z()), X(this, "onBeforeUpdate", new Z()), X(this, "onDisposed", new Z()), X(this, "isDisposing", !1), X(this, "enabled", !0), X(this, "_dynamicAnchor", !1), X(this, "uuid", Pt.create()), X(this, "name"), X(this, "_scene"), X(this, "_camera"), X(this, "_renderer", null), X(this, "onPointerDown", async (e) => {
			if (!this.camera.hasCameraControls()) throw Error("World: can't set dynamic anchor if the camera doesn't have controls.");
			let t = await this.components.get(Sl).get(this).castRay();
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
			let e = this.components.get(jt);
			this.scene.dispose(), this.camera.isDisposeable() && this.camera.dispose(), this.renderer && this.renderer.dispose();
			for (let t of this.meshes) e.destroy(t);
			this.meshes.clear();
		}
		this._scene = null, this._camera = null, this._renderer = null, this.components.get(Nl).list.delete(this.uuid), this.onDisposed.trigger(), this.onDisposed.reset();
	}
}, wl = class {
	constructor(e, t) {
		X(this, "_list"), X(this, "_scene"), this._list = e, this._scene = t;
	}
	get color() {
		return this._list.directionalLight.color.value;
	}
	set color(e) {
		this._list.directionalLight.color.value = e;
		for (let [, t] of this._scene.directionalLights) t.color.copy(e);
	}
	get intensity() {
		return this._list.directionalLight.intensity.value;
	}
	set intensity(e) {
		this._list.directionalLight.intensity.value = e;
		for (let [, t] of this._scene.directionalLights) t.intensity = e;
	}
	get position() {
		return this._list.directionalLight.position.value.clone();
	}
	set position(e) {
		this._list.directionalLight.position.value = e;
		for (let [, t] of this._scene.directionalLights) t.position.copy(e);
	}
}, Tl = class {
	constructor(e, t) {
		X(this, "_list"), X(this, "_scene"), this._list = e, this._scene = t;
	}
	get color() {
		return this._list.ambientLight.color.value;
	}
	set color(e) {
		this._list.ambientLight.color.value = e;
		for (let [, t] of this._scene.ambientLights) t.color.copy(e);
	}
	get intensity() {
		return this._list.ambientLight.intensity.value;
	}
	set intensity(e) {
		this._list.ambientLight.intensity.value = e;
		for (let [, t] of this._scene.ambientLights) t.intensity = e;
	}
}, El = class extends Lr {
	constructor() {
		super(...arguments), X(this, "_config", {
			backgroundColor: {
				value: new A(),
				type: "Color"
			},
			ambientLight: {
				color: {
					type: "Color",
					value: new A()
				},
				intensity: {
					type: "Number",
					interpolable: !0,
					min: 0,
					max: 10,
					value: 2
				}
			},
			directionalLight: {
				color: {
					type: "Color",
					value: new A()
				},
				intensity: {
					type: "Number",
					interpolable: !0,
					min: 0,
					max: 10,
					value: 2
				},
				position: {
					type: "Vector3",
					value: new U()
				}
			}
		}), X(this, "ambientLight", new Tl(this._config, this._component)), X(this, "directionalLight", new wl(this._config, this._component));
	}
	get backgroundColor() {
		return this._config.backgroundColor.value;
	}
	set backgroundColor(e) {
		this._config.backgroundColor.value = e, this._component.three.background = e;
	}
}, Dl = class extends Mt {
	constructor(e) {
		super(e), X(this, "onSetup", new Z()), X(this, "isSetup", !1), X(this, "three"), X(this, "config", new El(this, this.components, "Scene")), X(this, "_defaultConfig", {
			backgroundColor: new A(2107698),
			directionalLight: {
				color: new A("white"),
				intensity: 1.5,
				position: new U(5, 10, 3)
			},
			ambientLight: {
				color: new A("white"),
				intensity: 1
			}
		}), this.three = new o(), this.three.background = new A(2107698);
	}
	setup(e) {
		let t = {
			...this._defaultConfig,
			...e
		};
		this.config.backgroundColor = t.backgroundColor;
		let n = t.ambientLight;
		this.config.ambientLight.color = n.color, this.config.ambientLight.intensity = n.intensity;
		let r = t.directionalLight;
		this.config.directionalLight.color = r.color, this.config.directionalLight.intensity = r.intensity, this.config.directionalLight.position = r.position, this.deleteAllLights();
		let { color: i, intensity: a } = this.config.directionalLight, o = new d(i, a);
		o.position.copy(r.position);
		let { color: s, intensity: c } = this.config.directionalLight, u = new l(s, c);
		this.three.add(o, u), this.directionalLights.set(o.uuid, o), this.ambientLights.set(u.uuid, u), this.isSetup = !0, this.onSetup.trigger();
	}
	dispose() {
		super.dispose(), this.components.get(zr).list.delete(this.config.uuid);
	}
}, Ol = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 40\" fill=\"none\" aria-label=\"That Open Company\">\n<path d=\"M42.2856 19.6517V8.4048H38.8676V7.14978H46.998V8.40976H43.6131V19.6566L42.2856 19.6517Z\" fill=\"#BCF124\"/>\n<path d=\"M48.459 19.6516V7.14978H49.7032V12.404L49.4204 12.3371C49.6285 11.7727 50.0095 11.2904 50.5078 10.9607C51.0285 10.6201 51.638 10.4449 52.2578 10.4577C52.853 10.4483 53.44 10.5988 53.9589 10.8938C54.456 11.1789 54.8687 11.5934 55.1541 12.0943C55.449 12.6164 55.6 13.2089 55.5913 13.8102V19.6516H54.3495V14.2958C54.3637 13.8139 54.2611 13.3359 54.0507 12.9033C53.8646 12.537 53.5797 12.2315 53.229 12.0224C52.8685 11.8121 52.4584 11.7046 52.0423 11.7115C51.624 11.7054 51.2117 11.8128 50.8483 12.0224C50.4912 12.2324 50.2006 12.541 50.0106 12.912C49.7956 13.3401 49.6899 13.8158 49.7032 14.2958V19.6516H48.459Z\" fill=\"#BCF124\"/>\n<path d=\"M60.5388 19.8524C60.0174 19.8619 59.5007 19.75 59.0289 19.5253C58.6071 19.3259 58.2459 19.0157 57.983 18.6271C57.7263 18.2403 57.593 17.7833 57.6009 17.3175C57.5959 16.8715 57.6984 16.4309 57.8997 16.034C58.1173 15.6285 58.4383 15.2892 58.8292 15.0516C59.3232 14.7561 59.8701 14.5624 60.4384 14.4817L63.9188 13.8932V15.0355L60.7348 15.5744C60.0931 15.6867 59.6314 15.8932 59.3497 16.1938C59.0735 16.4811 58.9212 16.8673 58.926 17.268C58.9244 17.4635 58.9661 17.657 59.0481 17.8341C59.1301 18.0112 59.2503 18.1674 59.3999 18.2913C59.7416 18.5818 60.1787 18.7318 60.6246 18.7113C61.1803 18.7244 61.7296 18.5884 62.2166 18.3173C62.6597 18.066 63.0268 17.6972 63.2784 17.2506C63.535 16.7959 63.6669 16.2801 63.6604 15.7565V13.4744C63.6679 13.2259 63.6196 12.979 63.519 12.7521C63.4185 12.5253 63.2684 12.3245 63.08 12.1649C62.693 11.8287 62.1897 11.6607 61.57 11.6607C61.0801 11.6502 60.5978 11.7845 60.1822 12.047C59.7665 12.3095 59.4355 12.6888 59.2297 13.1387L58.1018 12.5192C58.2839 12.117 58.553 11.7614 58.8892 11.4785C59.2572 11.162 59.6754 10.9107 60.1261 10.7352C60.5858 10.5517 61.0758 10.4579 61.57 10.4589C62.1703 10.4448 62.7654 10.5748 63.3065 10.838C63.7888 11.077 64.1965 11.4462 64.4846 11.9047C64.7683 12.3771 64.912 12.9219 64.8986 13.4744V19.6517H63.658V17.8552L63.8405 18.0398C63.6702 18.3954 63.4238 18.7081 63.1191 18.9554C62.7772 19.238 62.3899 19.4593 61.9741 19.6095C61.5136 19.7756 61.0277 19.8578 60.5388 19.8524Z\" fill=\"#BCF124\"/>\n<path d=\"M70.6935 19.752C69.8975 19.752 69.2852 19.517 68.8566 19.0471C68.428 18.5771 68.2108 17.9056 68.2051 17.0326V11.9122H66.5616V10.6534H66.9804C67.1477 10.662 67.3148 10.6332 67.4697 10.5689C67.6247 10.5047 67.7637 10.4066 67.8769 10.2818C68.1017 10.0195 68.2202 9.68094 68.2088 9.33398V8.57825H69.453V10.6596H71.4124V11.9184H69.453V17.0388C69.4478 17.3107 69.4926 17.5813 69.5853 17.8366C69.6729 18.065 69.8337 18.2569 70.042 18.3818C70.3083 18.5292 70.6096 18.5991 70.9128 18.5837C71.0009 18.5837 71.1063 18.5775 71.2287 18.5664C71.3512 18.5552 71.4553 18.5441 71.5434 18.5329V19.6578C71.396 19.6937 71.2462 19.7189 71.0952 19.7334C70.9262 19.7433 70.7927 19.752 70.6935 19.752Z\" fill=\"#BCF124\"/>\n<path d=\"M82.2003 19.8523C81.3145 19.8603 80.4355 19.6954 79.6114 19.3666C78.4307 18.8928 77.4197 18.068 76.7118 17.001C76.0038 15.9341 75.6323 14.6751 75.646 13.3901C75.6376 12.5147 75.8043 11.6466 76.1359 10.838C76.453 10.0681 76.9213 9.37141 77.5123 8.79004C78.1118 8.20273 78.819 7.73977 79.5942 7.42723C81.2715 6.778 83.1266 6.778 84.8039 7.42723C85.5794 7.73911 86.2867 8.20215 86.8857 8.79004C87.4768 9.3717 87.9454 10.0683 88.2635 10.838C88.5945 11.6468 88.7611 12.5148 88.7533 13.3901C88.7674 14.6752 88.396 15.9343 87.688 17.0013C86.98 18.0683 85.9688 18.8931 84.7879 19.3666C83.9642 19.6952 83.0857 19.8601 82.2003 19.8523ZM82.2003 17.4984C82.7378 17.5032 83.2709 17.4005 83.769 17.1961C84.2425 16.9994 84.6735 16.7111 85.0378 16.3474C85.4069 15.9786 85.6952 15.5354 85.884 15.0465C86.0882 14.5173 86.1896 13.9532 86.1828 13.3852C86.1898 12.8203 86.0883 12.2594 85.884 11.7337C85.6922 11.2464 85.4043 10.8038 85.0378 10.4328C84.6764 10.0659 84.2446 9.77748 83.769 9.58542C82.7594 9.19396 81.6424 9.19396 80.6327 9.58542C80.1568 9.77745 79.7246 10.0658 79.3628 10.4328C78.9967 10.8041 78.7088 11.2467 78.5166 11.7337C78.3119 12.2602 78.2104 12.8219 78.2177 13.3876C78.2109 13.9557 78.3123 14.5198 78.5166 15.049C78.7058 15.5377 78.994 15.9808 79.3628 16.3499C79.7275 16.7136 80.1589 17.0019 80.6327 17.1985C81.1302 17.4038 81.663 17.5074 82.2003 17.5033V17.4984Z\" fill=\"#BCF124\"/>\n<path d=\"M90.398 23.2209V10.4861H92.7248V12.2293L92.5081 11.7251C92.8117 11.2627 93.2354 10.8941 93.7327 10.6596C94.2857 10.3994 94.8901 10.2702 95.4999 10.2817C96.3233 10.271 97.1335 10.4919 97.8401 10.9198C98.5312 11.3384 99.1029 11.9314 99.4995 12.6406C99.9126 13.38 100.124 14.2172 100.112 15.0664C100.122 15.9116 99.913 16.7448 99.5069 17.4835C99.1168 18.1988 98.5469 18.7971 97.8548 19.218C97.1376 19.6483 96.3164 19.8688 95.4827 19.8548C94.894 19.8605 94.3104 19.7437 93.7682 19.5116C93.2614 19.2967 92.8226 18.9454 92.4995 18.4957L92.8975 17.9754V23.2234L90.398 23.2209ZM95.1741 17.5863C95.6033 17.5949 96.0268 17.4848 96.3987 17.268C96.7521 17.0559 97.0394 16.7477 97.2278 16.3784C97.4328 15.9736 97.5355 15.5237 97.5266 15.0689C97.5364 14.6168 97.4337 14.1694 97.2278 13.768C97.0366 13.4007 96.7499 13.0932 96.3987 12.8785C96.0288 12.6556 95.6046 12.5419 95.1741 12.5502C94.7569 12.5434 94.3461 12.6541 93.9874 12.8698C93.6387 13.0826 93.3568 13.391 93.1743 13.7593C92.9832 14.1688 92.8841 14.6161 92.8841 15.0689C92.8841 15.5217 92.9832 15.9689 93.1743 16.3784C93.3571 16.7465 93.639 17.0548 93.9874 17.268C94.3469 17.4837 94.7586 17.594 95.1766 17.5863H95.1741Z\" fill=\"#BCF124\"/>\n<path d=\"M105.924 19.8524C104.961 19.8524 104.126 19.6372 103.418 19.2069C102.724 18.7915 102.156 18.1916 101.776 17.4724C101.384 16.7291 101.184 15.8977 101.194 15.0553C101.179 14.1986 101.388 13.3532 101.801 12.6047C102.189 11.9046 102.753 11.3198 103.434 10.9087C104.139 10.4899 104.944 10.2756 105.761 10.2892C106.414 10.277 107.062 10.394 107.67 10.6336C108.202 10.8483 108.68 11.1777 109.073 11.5987C109.454 12.0141 109.75 12.5023 109.943 13.0346C110.147 13.6019 110.248 14.2016 110.242 14.805C110.242 14.9847 110.234 15.1606 110.218 15.334C110.205 15.4855 110.174 15.6349 110.126 15.7788H103.34V13.9266H108.716L107.538 14.8001C107.65 14.3786 107.645 13.9339 107.522 13.5153C107.411 13.1561 107.186 12.8437 106.883 12.6258C106.553 12.4 106.161 12.2855 105.762 12.2987C105.368 12.2877 104.981 12.3993 104.652 12.6184C104.327 12.8492 104.083 13.1779 103.955 13.5574C103.79 14.0428 103.728 14.5577 103.772 15.0689C103.719 15.5315 103.782 16.0001 103.955 16.4317C104.108 16.81 104.375 17.1302 104.718 17.3473C105.08 17.5514 105.486 17.6634 105.901 17.6736C106.316 17.6837 106.727 17.5917 107.098 17.4055C107.407 17.2317 107.661 16.9743 107.833 16.6622L109.824 17.6186C109.643 18.0737 109.355 18.4776 108.986 18.7956C108.59 19.1398 108.132 19.4046 107.638 19.5761C107.087 19.766 106.507 19.8594 105.924 19.8524Z\" fill=\"#BCF124\"/>\n<path d=\"M111.703 19.6516V10.4837H114.03V12.2962L113.898 11.8935C114.081 11.3764 114.443 10.944 114.918 10.6769C115.425 10.404 115.994 10.2679 116.569 10.2817C117.196 10.2676 117.816 10.4179 118.369 10.7178C118.875 11.0011 119.293 11.4232 119.573 11.9357C119.87 12.4948 120.018 13.1223 120.004 13.7569V19.6491H117.515V14.2958C117.524 13.9753 117.452 13.6579 117.307 13.3728C117.173 13.1206 116.972 12.9112 116.727 12.7682C116.459 12.625 116.162 12.5502 115.859 12.5502C115.557 12.5502 115.26 12.625 114.992 12.7682C114.743 12.9091 114.539 13.1188 114.403 13.3728C114.259 13.658 114.188 13.9754 114.196 14.2958V19.6516H111.703Z\" fill=\"#BCF124\"/>\n<path d=\"M45.7329 35.9372C44.8875 35.9451 44.0493 35.7794 43.269 35.4503C42.525 35.134 41.851 34.6707 41.2863 34.0875C40.7178 33.4992 40.2696 32.8033 39.9673 32.0396C39.6453 31.2229 39.4843 30.3504 39.4934 29.4713C39.4848 28.5902 39.6427 27.7155 39.9588 26.8943C40.2511 26.1324 40.6939 25.4388 41.2601 24.8558C41.8262 24.2727 42.504 23.8126 43.2518 23.5034C44.039 23.178 44.8826 23.015 45.7329 23.024C46.5598 23.0107 47.3809 23.1649 48.1479 23.4774C48.8259 23.756 49.443 24.1669 49.9641 24.6866C50.4412 25.1559 50.8045 25.7304 51.0258 26.3653L48.7529 27.4729C48.5362 26.8433 48.1263 26.3001 47.5831 25.9226C47.0399 25.5451 46.3917 25.3529 45.7329 25.3742C45.0556 25.3604 44.3882 25.5408 43.8078 25.8945C43.2553 26.2426 42.8099 26.74 42.5219 27.3304C42.2056 27.9978 42.0495 28.7313 42.0664 29.4713C42.0503 30.2135 42.2063 30.9493 42.5219 31.6196C42.8077 32.2136 43.2534 32.7139 43.8078 33.0629C44.3879 33.4172 45.0555 33.5976 45.7329 33.5832C46.3917 33.6045 47.0399 33.4124 47.5831 33.0348C48.1263 32.6573 48.5362 32.1142 48.7529 31.4845L51.0258 32.5933C50.8056 33.2316 50.4422 33.8096 49.9641 34.282C49.4426 34.8009 48.8256 35.2113 48.1479 35.4899C47.3805 35.8004 46.5594 35.9524 45.7329 35.9372Z\" fill=\"#BCF124\"/>\n<path d=\"M56.8159 35.9372C55.9603 35.9485 55.1164 35.735 54.3667 35.3177C53.6426 34.9153 53.0357 34.3274 52.6069 33.613C52.1777 32.8648 51.9517 32.0151 51.9517 31.15C51.9517 30.285 52.1777 29.4353 52.6069 28.6871C53.0376 27.9762 53.6442 27.3911 54.3667 26.9898C55.118 26.5823 55.9573 26.3691 56.8098 26.3691C57.6623 26.3691 58.5016 26.5823 59.253 26.9898C59.9716 27.3928 60.5749 27.9771 61.0042 28.6858C61.4334 29.4341 61.6594 30.2837 61.6594 31.1488C61.6594 32.0139 61.4334 32.8635 61.0042 33.6118C60.577 34.3244 59.9733 34.912 59.253 35.3165C58.5078 35.7343 57.6678 35.9482 56.8159 35.9372ZM56.8159 33.6712C57.2335 33.681 57.6451 33.5701 58.0026 33.3516C58.3443 33.1354 58.6199 32.8274 58.7986 32.462C58.9985 32.0556 59.0985 31.6064 59.0901 31.1525C59.099 30.7014 58.9989 30.2548 58.7986 29.8517C58.6161 29.4889 58.3414 29.1818 58.0026 28.9621C57.6468 28.739 57.2345 28.6254 56.8159 28.635C56.3952 28.6261 55.9807 28.7396 55.6219 28.9621C55.2792 29.18 55.0008 29.4873 54.8161 29.8517C54.6162 30.2549 54.5166 30.7015 54.5259 31.1525C54.517 31.6063 54.6166 32.0555 54.8161 32.462C54.997 32.8291 55.2762 33.1373 55.6219 33.3516C55.9824 33.5695 56.3962 33.6803 56.8159 33.6712Z\" fill=\"#BCF124\"/>\n<path d=\"M63.1228 35.7364V26.5685H65.4496V28.7985L65.2047 28.4269C65.337 27.7223 65.6574 27.202 66.1661 26.8658C66.7124 26.5198 67.3477 26.3448 67.992 26.3628C68.6955 26.3487 69.3867 26.5504 69.9747 26.9414C70.2455 27.1163 70.4794 27.3435 70.6631 27.6102C70.8468 27.8768 70.9766 28.1775 71.045 28.495L70.3311 28.5619C70.6299 27.8128 71.056 27.2586 71.6096 26.8993C72.1912 26.5332 72.8658 26.3468 73.5506 26.3628C74.1566 26.3506 74.755 26.5011 75.2847 26.7989C75.7839 27.0856 76.1947 27.5068 76.4714 28.0155C76.7686 28.5772 76.9163 29.2073 76.9 29.8442V35.7364H74.4067V30.3806C74.4151 30.0621 74.3496 29.746 74.2156 29.4576C74.0956 29.2086 73.9084 28.999 73.6756 28.853C73.4175 28.71 73.1279 28.635 72.8336 28.635C72.5393 28.635 72.2498 28.71 71.9917 28.853C71.7556 28.9972 71.5655 29.2071 71.4443 29.4576C71.3103 29.746 71.2448 30.0621 71.2532 30.3806V35.7364H68.7648V30.3806C68.7731 30.0621 68.7077 29.746 68.5737 29.4576C68.4538 29.2089 68.267 28.9994 68.0349 28.853C67.7765 28.71 67.4868 28.635 67.1923 28.635C66.8978 28.635 66.6081 28.71 66.3498 28.853C66.1137 28.9972 65.9236 29.2071 65.8023 29.4576C65.6683 29.746 65.6029 30.0621 65.6113 30.3806V35.7364H63.1228Z\" fill=\"#BCF124\"/>\n<path d=\"M78.5374 39.3107V26.5697H80.8642V28.3166L80.6486 27.8123C80.9522 27.35 81.376 26.9813 81.8733 26.7469C82.4266 26.4883 83.0311 26.3611 83.6404 26.3752C84.464 26.3639 85.2743 26.5848 85.9807 27.0132C86.6715 27.4323 87.2431 28.0251 87.6401 28.7341C88.0532 29.473 88.2645 30.3098 88.2524 31.1586C88.2623 32.0044 88.0533 32.8381 87.6462 33.577C87.2571 34.2926 86.6875 34.8911 85.9954 35.3115C85.2785 35.7427 84.4572 35.9636 83.6233 35.9495C83.0345 35.9548 82.4509 35.8376 81.9088 35.6051C81.4019 35.391 80.963 35.04 80.6401 34.5904L81.0381 34.0701V39.3231L78.5374 39.3107ZM83.3134 33.6712C83.7428 33.6796 84.1663 33.5691 84.5381 33.3515C84.892 33.1399 85.1798 32.8316 85.3684 32.462C85.573 32.057 85.6757 31.6072 85.6672 31.1524C85.6761 30.7004 85.5734 30.2533 85.3684 29.8516C85.176 29.4847 84.8891 29.1774 84.5381 28.962C84.1679 28.7398 83.7438 28.6266 83.3134 28.635C82.8964 28.6281 82.4856 28.7383 82.1268 28.9534C81.778 29.1666 81.496 29.4755 81.3136 29.8442C81.1225 30.2534 81.0233 30.7004 81.0233 31.1531C81.0233 31.6057 81.1225 32.0527 81.3136 32.462C81.4954 32.8308 81.7775 33.1394 82.1268 33.3515C82.4863 33.5682 82.8986 33.679 83.3171 33.6712H83.3134Z\" fill=\"#BCF124\"/>\n<path d=\"M92.5093 35.9371C91.9294 35.9511 91.353 35.8427 90.8168 35.6187C90.3699 35.4306 89.9887 35.1118 89.722 34.7032C89.4607 34.2804 89.3278 33.7893 89.3399 33.2908C89.3319 32.8129 89.4525 32.3418 89.689 31.928C89.9498 31.5033 90.3197 31.1581 90.7593 30.9295C91.3217 30.6339 91.931 30.4406 92.5595 30.3583L95.3296 29.9049V31.7521L93.0028 32.1708C92.7069 32.2127 92.4268 32.3314 92.1897 32.5153C92.0938 32.6024 92.0186 32.7102 91.9696 32.8307C91.9207 32.9513 91.8992 33.0814 91.9068 33.2115C91.9015 33.3387 91.9277 33.4652 91.9828 33.5796C92.038 33.6941 92.1204 33.7928 92.2227 33.8669C92.4503 34.0296 92.7243 34.1123 93.0028 34.1023C93.3792 34.1101 93.7509 34.0174 94.0805 33.8335C94.3832 33.6617 94.6332 33.4087 94.803 33.1025C94.9751 32.7929 95.0638 32.443 95.0602 32.0878V29.698C95.062 29.5308 95.0264 29.3654 94.956 29.2141C94.8855 29.0628 94.7822 28.9296 94.6536 28.8245C94.3818 28.5891 94.0144 28.4714 93.5515 28.4714C93.1318 28.4645 92.7212 28.5949 92.3807 28.8431C92.0467 29.0873 91.7912 29.4256 91.6459 29.8157L89.6547 28.8592C89.826 28.354 90.1169 27.8989 90.5021 27.5336C90.9038 27.1547 91.3782 26.8634 91.8958 26.6775C92.4648 26.471 93.0657 26.3686 93.6702 26.3752C94.3679 26.3612 95.0599 26.5046 95.6958 26.7952C96.2502 27.0473 96.724 27.4511 97.0637 27.961C97.3951 28.4765 97.5658 29.0807 97.5536 29.6955V35.7389H95.2268V34.2584L95.7913 34.1581C95.5497 34.5339 95.2533 34.8706 94.912 35.1566C94.5921 35.4193 94.2261 35.6185 93.8331 35.7439C93.4044 35.877 92.9578 35.9422 92.5093 35.9371Z\" fill=\"#BCF124\"/>\n<path d=\"M99.3795 35.7365V26.5685H101.706V28.3823L101.573 27.9796C101.757 27.4626 102.119 27.0301 102.593 26.7618C103.101 26.4898 103.67 26.3542 104.245 26.3678C104.872 26.3532 105.493 26.5034 106.045 26.8039C106.551 27.0867 106.968 27.5085 107.248 28.0205C107.545 28.5801 107.693 29.208 107.679 29.8429V35.7352H105.189V30.3806C105.197 30.0603 105.126 29.743 104.982 29.4576C104.848 29.2051 104.646 28.9957 104.401 28.8531C104.135 28.7035 103.834 28.6282 103.53 28.635C103.23 28.6314 102.935 28.7065 102.673 28.8531C102.423 28.9936 102.219 29.2034 102.084 29.4576C101.939 29.7428 101.868 30.0603 101.877 30.3806V35.7365H99.3795Z\" fill=\"#BCF124\"/>\n<path d=\"M110.563 39.4631C110.304 39.4633 110.046 39.4405 109.791 39.3949C109.563 39.3571 109.342 39.2835 109.136 39.1769V37.1128C109.316 37.1628 109.499 37.2017 109.684 37.2293C109.875 37.2621 110.07 37.2791 110.264 37.2801C110.754 37.2801 111.099 37.1562 111.31 36.9282C111.522 36.6884 111.696 36.4162 111.824 36.1217L112.437 34.6945L112.404 36.7932L108.421 26.5697H111.093L113.731 33.8384H112.735L115.373 26.5697H118.048L114.165 36.5925C113.955 37.1702 113.652 37.7089 113.269 38.187C112.942 38.5905 112.531 38.9169 112.066 39.1434C111.594 39.3617 111.081 39.4709 110.563 39.4631Z\" fill=\"#BCF124\"/>\n<path d=\"M7.00861 16.1097H0C0.00583172 11.8399 1.68502 7.74676 4.66939 4.7276C7.65377 1.70844 11.6998 0.00968387 15.9203 0.00378418V7.09408C13.558 7.09801 11.2935 8.04913 9.62308 9.73902C7.95266 11.4289 7.0125 13.7198 7.00861 16.1097Z\" fill=\"#BCF124\"/>\n<path d=\"M15.9243 39.3094C11.7037 39.3035 7.65771 37.6047 4.67333 34.5856C1.68896 31.5664 0.00976849 27.4732 0.00393677 23.2035H7.01255C7.01255 24.9874 7.53543 26.7311 8.51506 28.2144C9.4947 29.6976 10.8871 30.8536 12.5162 31.5362C14.1452 32.2189 15.9378 32.3975 17.6672 32.0495C19.3966 31.7015 20.9852 30.8425 22.2321 29.5811C23.4789 28.3197 24.328 26.7127 24.672 24.9631C25.016 23.2135 24.8394 21.4 24.1647 19.752C23.4899 18.1039 22.3472 16.6953 20.881 15.7042C19.4149 14.7132 17.6912 14.1842 15.9279 14.1842V7.09021C20.1512 7.09021 24.2016 8.78747 27.1879 11.8086C30.1742 14.8297 31.8519 18.9273 31.8519 23.1998C31.8519 27.4723 30.1742 31.5699 27.1879 34.591C24.2016 37.6121 20.1512 39.3094 15.9279 39.3094H15.9243Z\" fill=\"#BCF124\"/>\n</svg>";
function kl() {
	let e = document.createElement("div");
	e.setAttribute("data-thatopen-logo", ""), e.innerHTML = Ol, e.style.cssText = [
		"position: absolute",
		"left: 0.75rem",
		"bottom: 0.75rem",
		"width: 6rem",
		"height: auto",
		"pointer-events: none",
		"user-select: none",
		"opacity: 0.85",
		"z-index: 1"
	].join("; ");
	let t = e.firstElementChild;
	return t && (t.setAttribute("width", "100%"), t.setAttribute("height", "100%")), e;
}
var Al = class extends kt {
	constructor(e, t, n) {
		super(e), X(this, "enabled", !0), X(this, "container"), X(this, "three"), X(this, "mode", 1), X(this, "needsUpdate", !1), X(this, "_canvas"), X(this, "_parameters"), X(this, "_resizeObserver", null), X(this, "onContainerUpdated", new Z()), X(this, "_resizing", !1), X(this, "_logo", null), X(this, "_showLogo", !0), X(this, "resize", (e) => {
			if (this._resizing) return;
			this._resizing = !0, this.onContainerUpdated.trigger();
			let t = e ? e.x : this.container.clientWidth, n = e ? e.y : this.container.clientHeight;
			this.three.setSize(t, n), this.onResize.trigger(new T(t, n)), this._resizing = !1;
		}), X(this, "resizeEvent", () => {
			this.resize();
		}), X(this, "onContextLost", (e) => {
			e.preventDefault(), this.enabled = !1;
		}), X(this, "onContextBack", () => {
			this.three.setRenderTarget(null), this.three.dispose(), this.three = new S({
				canvas: this._canvas,
				antialias: !0,
				alpha: !0,
				...this._parameters
			}), this.enabled = !0;
		}), this.container = t, this._parameters = n, this.three = new S({
			antialias: !0,
			alpha: !0,
			...n
		}), this.three.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.setupRenderer(), this.setupEvents(!0), this.resize(), this._canvas = this.three.domElement;
		let { canvas: r } = this.three.getContext();
		r.addEventListener("webglcontextlost", this.onContextLost, !1), r.addEventListener("webglcontextrestored", this.onContextBack, !1);
	}
	get showLogo() {
		return this._showLogo;
	}
	set showLogo(e) {
		this._showLogo = e, this._logo && (this._logo.style.display = e ? "" : "none");
	}
	get logo() {
		return this._logo;
	}
	update() {
		if (!this.enabled || !this.currentWorld || this.mode === 0 && !this.needsUpdate) return;
		this.needsUpdate = !1, this.onBeforeUpdate.trigger(this);
		let e = this.currentWorld.scene.three, t = this.currentWorld.camera.three;
		this.three.render(e, t), this.onAfterUpdate.trigger(this);
	}
	dispose() {
		this.enabled = !1, this.setupEvents(!1), this.three.domElement.remove(), this._logo &&= (this._logo.remove(), null), this.three.forceContextLoss(), this.three.dispose(), this.onResize.reset(), this.onAfterUpdate.reset(), this.onBeforeUpdate.reset(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	getSize() {
		return new T(this.three.domElement.clientWidth, this.three.domElement.clientHeight);
	}
	setupEvents(e) {
		let t = this.three.domElement.parentElement;
		if (!t) throw Error("This renderer needs to have an HTML container!");
		this._resizeObserver &&= (this._resizeObserver.disconnect(), null), window.removeEventListener("resize", this.resizeEvent), e && (this._resizeObserver = new ResizeObserver(this.resizeEvent), this._resizeObserver.observe(t), window.addEventListener("resize", this.resizeEvent));
	}
	setupRenderer() {
		this.three.localClippingEnabled = !0, this.container && (this.container.appendChild(this.three.domElement), this.setupLogo()), this.onContainerUpdated.trigger();
	}
	setupLogo() {
		this._logo || !this.container || (window.getComputedStyle(this.container).position === "static" && (this.container.style.position = "relative"), this._logo = kl(), this._logo.style.display = this._showLogo ? "" : "none", this.container.appendChild(this._logo));
	}
}, jl = class e extends Ot {
	constructor(e) {
		super(e), X(this, "onBeforeUpdate", new Z()), X(this, "onAfterUpdate", new Z()), X(this, "onAspectUpdated", new Z()), X(this, "onDisposed", new Z()), X(this, "three"), X(this, "_resizeObserver", null), X(this, "_allControls", /* @__PURE__ */ new Map()), X(this, "updateAspect", () => {
			if (!(!this.currentWorld || !this.currentWorld.renderer)) {
				if (this.three instanceof ue) {
					this.onAspectUpdated.trigger();
					return;
				}
				if (this.currentWorld.renderer?.isResizeable()) {
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
		let t = this.components.get(Q), n = this.components.get(Gc);
		n.list.clear();
		let r = new v();
		if (e) await n.addFromModelIdMap(e);
		else for (let [, e] of t.list) n.list.add(e.box);
		return n.get().getBoundingSphere(r), n.list.clear(), r;
	}
	setupCamera() {
		let e = new ce(60, window.innerWidth / window.innerHeight, 1, 1e3);
		return e.position.set(50, 50, 50), e.lookAt(new U(0, 0, 0)), e;
	}
	newCameraControls() {
		if (!this.currentWorld) throw Error("This camera needs a world to work!");
		if (!this.currentWorld.renderer) throw Error("This camera needs a renderer to work!");
		St.install({ THREE: e.getSubsetOfThree() });
		let { domElement: t } = this.currentWorld.renderer.three, n = new St(this.three, t);
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
			MOUSE: ve,
			Vector2: T,
			Vector3: U,
			Vector4: n,
			Quaternion: i,
			Matrix4: V,
			Spherical: C,
			Box3: h,
			Sphere: v,
			Raycaster: c,
			MathUtils: we
		};
	}
}, Ml = class e extends Et {
	constructor(t) {
		super(t), X(this, "onAfterUpdate", new Z()), X(this, "onBeforeUpdate", new Z()), X(this, "onDisposed", new Z()), X(this, "list", new r()), X(this, "enabled", !0), t.add(e.uuid, this);
	}
	create() {
		let e = new Cl(this.components), t = e.uuid;
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
X(Ml, "uuid", "fdb61dc4-2ec1-4966-b83d-54ea795fad4a");
var Nl = Ml, Pl = class extends Lr {
	constructor() {
		super(...arguments), X(this, "_config", {
			visible: {
				value: !0,
				type: "Boolean"
			},
			color: {
				value: new A(),
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
}, Fl = class {
	constructor(e, t) {
		X(this, "onDisposed", new Z()), X(this, "onSetup", new Z()), X(this, "isSetup", !1), X(this, "world"), X(this, "components"), X(this, "config"), X(this, "_defaultConfig", {
			visible: !0,
			color: new A(12303291),
			primarySize: 1,
			secondarySize: 10,
			distance: 500
		}), X(this, "three"), X(this, "_fade", 3), X(this, "updateZoom", () => {
			this.world.camera instanceof jl && (this.material.uniforms.uZoom.value = this.world.camera.three.zoom);
		}), this.world = t;
		let { color: n, primarySize: r, secondarySize: i, distance: a } = this._defaultConfig;
		this.components = e, this.config = new Pl(this, this.components, "Grid");
		let o = new Ae(2, 2, 1, 1), s = new x({
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
		this.three = new Oe(o, s), this.three.frustumCulled = !1, t.scene.three.add(this.three), this.setupEvents(!0);
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
		this.setupEvents(!1), this.components.get(zr).list.delete(this.config.uuid), this.components.get(jt).destroy(this.three), this.onDisposed.trigger(), this.onDisposed.reset(), this.world = null, this.components = null;
	}
	setupEvents(e) {
		if (this.world.isDisposing || !(this.world.camera instanceof jl)) return;
		let t = this.world.camera.controls;
		e ? t.addEventListener("update", this.updateZoom) : t.removeEventListener("update", this.updateZoom);
	}
}, Il = class e extends Et {
	constructor(t) {
		super(t), X(this, "list", /* @__PURE__ */ new Map()), X(this, "onDisposed", new Z()), X(this, "enabled", !0), t.add(e.uuid, this);
	}
	create(e) {
		if (this.list.has(e.uuid)) throw Error("This world already has a grid!");
		let t = new Fl(this.components, e);
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
};
X(Il, "uuid", "d1e814d5-b81c-4452-87a2-f039375e0489");
var Ll = Il, Rl = class e {
	constructor() {
		X(this, "onDisposed", new Z()), X(this, "list", new r()), X(this, "enabled", !1), X(this, "_timer"), X(this, "onInit", new Z()), X(this, "update", () => {
			if (!this.enabled) return;
			this._timer.update();
			let e = this._timer.getDelta();
			for (let [t, n] of this.list) n.enabled && n.isUpdateable() && n.update(e);
			requestAnimationFrame(this.update);
		}), this._timer = new u(), e.setupBVH();
	}
	add(e, t) {
		if (this.list.has(e)) throw Error("You're trying to add a component that already exists in the components instance. Use Components.get() instead.");
		Pt.validate(e), this.list.set(e, t);
	}
	get(e) {
		let t = e.uuid;
		if (!this.list.has(t)) {
			let n = new e(this);
			return n.isDisposeable?.call(n) && n.onDisposed.add(() => this.list.delete(t)), this.list.has(t) || this.add(t, n), n;
		}
		return this.list.get(t);
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
		t.prototype.computeBoundsTree = os, t.prototype.disposeBoundsTree = ss, Oe.prototype.raycast = is, fe.prototype.raycast = is;
	}
};
X(Rl, "release", "2.4.3");
var zl = Rl, Bl = class {
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
		let e = this.camera.controls, t = new U();
		e.distance--, e.getPosition(t), e.minDistance = 1, e.maxDistance = 1, e.distance = 1, e.moveTo(t.x, t.y, t.z), e.truckSpeed = 50, e.mouseButtons.wheel = St.ACTION.DOLLY, e.touches.two = St.ACTION.TOUCH_ZOOM_TRUCK;
	}
}, Vl = class {
	constructor(e) {
		X(this, "enabled", !0), X(this, "id", "Orbit"), this.camera = e, this.activateOrbitControls();
	}
	set(e) {
		this.enabled = e, e && this.activateOrbitControls();
	}
	activateOrbitControls() {
		let e = this.camera.controls;
		e.minDistance = 1, e.maxDistance = 300;
		let t = new U();
		e.getPosition(t);
		let n = t.length();
		e.distance = n, e.truckSpeed = 2;
		let { rotation: r } = this.camera.three, i = new U(0, 0, -1).applyEuler(r), a = t.addScaledVector(i, n);
		e.moveTo(a.x, a.y, a.z);
	}
}, Hl = class {
	constructor(e) {
		X(this, "enabled", !1), X(this, "id", "Plan"), X(this, "mouseAction1"), X(this, "mouseAction2"), X(this, "mouseInitialized", !1), X(this, "defaultAzimuthSpeed"), X(this, "defaultPolarSpeed"), this.camera = e, this.defaultAzimuthSpeed = e.controls.azimuthRotateSpeed, this.defaultPolarSpeed = e.controls.polarRotateSpeed;
	}
	set(e) {
		this.enabled = e;
		let t = this.camera.controls;
		t.azimuthRotateSpeed = e ? 0 : this.defaultAzimuthSpeed, t.polarRotateSpeed = e ? 0 : this.defaultPolarSpeed, this.mouseInitialized ||= (this.mouseAction1 = t.touches.one, this.mouseAction2 = t.touches.two, !0), e ? (t.mouseButtons.left = St.ACTION.TRUCK, t.touches.one = St.ACTION.TOUCH_TRUCK, t.touches.two = St.ACTION.TOUCH_ZOOM) : (t.mouseButtons.left = St.ACTION.ROTATE, t.touches.one = this.mouseAction1, t.touches.two = this.mouseAction2);
	}
}, Ul = class {
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
		let t = new U();
		this._component.threePersp.getWorldDirection(t);
		let n = new U();
		this._component.controls.getTarget(n);
		let r = n.clone().sub(this._component.threePersp.position).dot(t), i = e.renderer.getSize(), a = i.x / i.y, o = this._component.threePersp, s = r * 2 * Math.atan(o.fov * (Math.PI / 180) / 2);
		return {
			width: s * a,
			height: s
		};
	}
	setupOrthoCamera(e, t) {
		this._component.controls.mouseButtons.wheel = St.ACTION.ZOOM, this._component.controls.mouseButtons.middle = St.ACTION.ZOOM;
		let n = this._component.threePersp, r = this._component.threeOrtho;
		r.zoom = 1, r.left = t / -2, r.right = t / 2, r.top = e / 2, r.bottom = e / -2, r.updateProjectionMatrix(), r.position.copy(n.position), r.quaternion.copy(n.quaternion), this._component.controls.camera = r;
	}
	getDistance() {
		let e = this._component.threePersp, t = this._component.threeOrtho;
		return (t.top - t.bottom) / t.zoom / (2 * Math.atan(e.fov * (Math.PI / 180) / 2));
	}
	async setPerspectiveCamera() {
		this._component.controls.mouseButtons.wheel = St.ACTION.DOLLY, this._component.controls.mouseButtons.middle = St.ACTION.DOLLY;
		let e = this._component.threePersp, t = this._component.threeOrtho;
		e.position.copy(t.position), e.quaternion.copy(t.quaternion), this._component.controls.mouseButtons.wheel = St.ACTION.DOLLY, this.matchOrthoDistanceEnabled ? this._component.controls.distance = this.getDistance() : this._component.controls.distance = this._previousDistance, await this._component.controls.zoomTo(1), e.updateProjectionMatrix(), this._component.controls.camera = e, this.camera = e, this.current = "Perspective";
	}
}, Wl = class extends jl {
	constructor(e) {
		super(e), X(this, "projection"), X(this, "threeOrtho"), X(this, "threePersp"), X(this, "_userInputButtons", {}), X(this, "_frustumSize", 50), X(this, "_navigationModes", /* @__PURE__ */ new Map()), X(this, "_mode", null), X(this, "previousSize", null), this.threePersp = this.three, this.threeOrtho = this.newOrthoCamera(), this.projection = new Ul(this), this.onAspectUpdated.add(() => {
			this.setOrthoPerspCameraAspect();
		}), this.projection.onChanged.add((e) => {
			this.three = e, this.updateAspect();
		}), this.worlds.onItemSet.add(() => {
			this._navigationModes.clear(), this._navigationModes.set("Orbit", new Vl(this)), this._navigationModes.set("FirstPerson", new Bl(this)), this._navigationModes.set("Plan", new Hl(this)), this._mode = this._navigationModes.get("Orbit"), this.mode.set(!0, { preventTargetAdjustment: !0 }), this.currentWorld && this.currentWorld.renderer && (this.previousSize = this.currentWorld.renderer.getSize().clone());
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
		let n = Number.MAX_VALUE, r = Number.MIN_VALUE, i = new U(n, n, n), a = new U(r, r, r);
		for (let t of e) {
			let e = new h().setFromObject(t);
			e.min.x < i.x && (i.x = e.min.x), e.min.y < i.y && (i.y = e.min.y), e.min.z < i.z && (i.z = e.min.z), e.max.x > a.x && (a.x = e.max.x), e.max.y > a.y && (a.y = e.max.y), e.max.z > a.z && (a.z = e.max.z);
		}
		let o = new h(i, a), s = this.components.get(Q);
		if (s.initialized) for (let [, e] of s.list) {
			let t = e.box;
			t.min.x < i.x && (i.x = t.min.x), t.min.y < i.y && (i.y = t.min.y), t.min.z < i.z && (i.z = t.min.z), t.max.x > a.x && (a.x = t.max.x), t.max.y > a.y && (a.y = t.max.y), t.max.z > a.z && (a.z = t.max.z);
		}
		let c = new U();
		o.getSize(c);
		let l = new U();
		o.getCenter(l);
		let u = new v(l, Math.max(c.x, c.y, c.z) * t);
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
		return new ue(this._frustumSize * e / -2, this._frustumSize * e / 2, this._frustumSize / 2, this._frustumSize / -2, .1, 1e3);
	}
	setOrthoPerspCameraAspect() {
		if (!this.currentWorld || !this.currentWorld.renderer || !this.previousSize) return;
		let e = this.currentWorld.renderer.getSize(), t = this.threeOrtho.top, n = this.threeOrtho.right, r = e.y / this.previousSize.y, i = e.x / this.previousSize.x, a = t * r, o = n * i;
		this.threeOrtho.left = -o, this.threeOrtho.right = o, this.threeOrtho.top = a, this.threeOrtho.bottom = -a, this.threeOrtho.updateProjectionMatrix(), this.previousSize.copy(e);
	}
}, Gl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kl(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ql(e) {
	throw Error("Could not dynamically require \"" + e + "\". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.");
}
var Jl = { exports: {} };
(function(e, t) {
	(function(t) {
		e.exports = t();
	})(function() {
		return function e(t, n, r) {
			function i(o, s) {
				if (!n[o]) {
					if (!t[o]) {
						var c = typeof ql == "function" && ql;
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
			for (var a = typeof ql == "function" && ql, o = 0; o < r.length; o++) i(r[o]);
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
					var d = i === "string" && !1 === s.binary && !1 === s.base64;
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
						return u ? (u === "arraybuffer" ? t = n.transformTo("uint8array", t) : u === "string" && (l ? t = i.decode(t) : a && !0 !== s && (t = function(e) {
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
							return t.readInt(1) === 1 && o(this.fileName) === t.readInt(4) ? s.utf8decode(t.readData(e.length - 5)) : null;
						}
						return null;
					},
					findExtraFieldUnicodeComment: function() {
						var e = this.extraFields[25461];
						if (e) {
							var t = r(e.value);
							return t.readInt(1) === 1 && o(this.fileComment) === t.readInt(4) ? s.utf8decode(t.readData(e.length - 5)) : null;
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
				}).call(this, Gl === void 0 ? typeof self < "u" ? self : typeof window < "u" ? window : {} : Gl);
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
					o = t === ~~t ? t : !0 === t ? 4 : 0, typeof e == "string" ? s.input = a.string2buf(e) : c.call(e) === "[object ArrayBuffer]" ? s.input = new Uint8Array(e) : s.input = e, s.next_in = 0, s.avail_in = s.input.length;
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
					s = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH, typeof e == "string" ? p.input = a.binstring2buf(e) : u.call(e) === "[object ArrayBuffer]" ? p.input = new Uint8Array(e) : p.input = e, p.next_in = 0, p.avail_in = p.input.length;
					do {
						if (p.avail_out === 0 && (p.output = new i.Buf8(m), p.next_out = 0, p.avail_out = m), (n = r.inflate(p, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && h && (f = typeof h == "string" ? a.string2buf(h) : u.call(h) === "[object ArrayBuffer]" ? new Uint8Array(h) : h, n = r.inflateSetDictionary(this.strm, f)), n === o.Z_BUF_ERROR && !0 === g && (n = o.Z_OK, g = !1), n !== o.Z_STREAM_END && n !== o.Z_OK) return this.onEnd(n), !(this.ended = !0);
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
				function z(e) {
					var t;
					return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = h, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? E : D, e.adler = t.wrap === 2 ? 0 : 1, t.last_flush = l, a._tr_init(t), d) : M(e, f);
				}
				function oe(e) {
					var t = z(e);
					return t === d && function(e) {
						e.window_size = 2 * e.w_size, ee(e.head), e.max_lazy_match = r[e.level].max_lazy, e.good_match = r[e.level].good_length, e.nice_match = r[e.level].nice_length, e.max_chain_length = r[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = C - 1, e.match_available = 0, e.ins_h = 0;
					}(e.state), t;
				}
				function se(e, t, n, r, a, o) {
					if (!e) return f;
					var s = 1;
					if (t === p && (t = 6), r < 0 ? (s = 0, r = -r) : 15 < r && (s = 2, r -= 16), a < 1 || _ < a || n !== g || r < 8 || 15 < r || t < 0 || 9 < t || o < 0 || m < o) return M(e, f);
					r === 8 && (r = 9);
					var c = new ae();
					return (e.state = c).strm = e, c.wrap = s, c.gzhead = null, c.w_bits = r, c.w_size = 1 << c.w_bits, c.w_mask = c.w_size - 1, c.hash_bits = a + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, c.hash_shift = ~~((c.hash_bits + C - 1) / C), c.window = new i.Buf8(2 * c.w_size), c.head = new i.Buf16(c.hash_size), c.prev = new i.Buf16(c.w_size), c.lit_bufsize = 1 << a + 6, c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new i.Buf8(c.pending_buf_size), c.d_buf = 1 * c.lit_bufsize, c.l_buf = 3 * c.lit_bufsize, c.level = t, c.strategy = o, c.method = n, oe(e);
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
					return se(e, t, g, 15, 8, 0);
				}, n.deflateInit2 = se, n.deflateReset = oe, n.deflateResetKeep = z, n.deflateSetHeader = function(e, t) {
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
					e: do {
						m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = h[p & _];
						t: for (;;) {
							if (p >>>= b = y >>> 24, m -= b, (b = y >>> 16 & 255) == 0) E[a++] = 65535 & y;
							else {
								if (!(16 & b)) {
									if (!(64 & b)) {
										y = h[(65535 & y) + (p & (1 << b) - 1)];
										continue t;
									}
									if (32 & b) {
										n.mode = 12;
										break e;
									}
									e.msg = "invalid literal/length code", n.mode = 30;
									break e;
								}
								x = 65535 & y, (b &= 15) && (m < b && (p += T[r++] << m, m += 8), x += p & (1 << b) - 1, p >>>= b, m -= b), m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = g[p & v];
								r: for (;;) {
									if (p >>>= b = y >>> 24, m -= b, !(16 & (b = y >>> 16 & 255))) {
										if (!(64 & b)) {
											y = g[(65535 & y) + (p & (1 << b) - 1)];
											continue r;
										}
										e.msg = "invalid distance code", n.mode = 30;
										break e;
									}
									if (S = 65535 & y, m < (b &= 15) && (p += T[r++] << m, (m += 8) < b && (p += T[r++] << m, m += 8)), c < (S += p & (1 << b) - 1)) {
										e.msg = "invalid distance too far back", n.mode = 30;
										break e;
									}
									if (p >>>= b, m -= b, (b = a - o) < S) {
										if (u < (b = S - b) && n.sane) {
											e.msg = "invalid distance too far back", n.mode = 30;
											break e;
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
					e: for (;;) switch (n.mode) {
						case f:
							if (n.wrap === 0) {
								n.mode = 13;
								break;
							}
							for (; x < 16;) {
								if (v === 0) break e;
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
								if (v === 0) break e;
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
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							n.head && (n.head.time = b), 512 & n.flags && (te[0] = 255 & b, te[1] = b >>> 8 & 255, te[2] = b >>> 16 & 255, te[3] = b >>> 24 & 255, n.check = a(n.check, te, 4, 0)), x = b = 0, n.mode = 4;
						case 4:
							for (; x < 16;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							n.head && (n.head.xflags = 255 & b, n.head.os = b >> 8), 512 & n.flags && (te[0] = 255 & b, te[1] = b >>> 8 & 255, n.check = a(n.check, te, 2, 0)), x = b = 0, n.mode = 5;
						case 5:
							if (1024 & n.flags) {
								for (; x < 16;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.length = b, n.head && (n.head.extra_len = b), 512 & n.flags && (te[0] = 255 & b, te[1] = b >>> 8 & 255, n.check = a(n.check, te, 2, 0)), x = b = 0;
							} else n.head && (n.head.extra = null);
							n.mode = 6;
						case 6:
							if (1024 & n.flags && (v < (E = n.length) && (E = v), E && (n.head && (P = n.head.extra_len - n.length, n.head.extra || (n.head.extra = Array(n.head.extra_len)), r.arraySet(n.head.extra, p, g, E, P)), 512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, n.length -= E), n.length)) break e;
							n.length = 0, n.mode = 7;
						case 7:
							if (2048 & n.flags) {
								if (v === 0) break e;
								for (E = 0; P = p[g + E++], n.head && P && n.length < 65536 && (n.head.name += String.fromCharCode(P)), P && E < v;);
								if (512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, P) break e;
							} else n.head && (n.head.name = null);
							n.length = 0, n.mode = 8;
						case 8:
							if (4096 & n.flags) {
								if (v === 0) break e;
								for (E = 0; P = p[g + E++], n.head && P && n.length < 65536 && (n.head.comment += String.fromCharCode(P)), P && E < v;);
								if (512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, P) break e;
							} else n.head && (n.head.comment = null);
							n.mode = 9;
						case 9:
							if (512 & n.flags) {
								for (; x < 16;) {
									if (v === 0) break e;
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
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							e.adler = n.check = h(b), x = b = 0, n.mode = 11;
						case 11:
							if (n.havedict === 0) return e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, 2;
							e.adler = n.check = 1, n.mode = 12;
						case 12: if (t === 5 || t === 6) break e;
						case 13:
							if (n.last) {
								b >>>= 7 & x, x -= 7 & x, n.mode = 27;
								break;
							}
							for (; x < 3;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							switch (n.last = 1 & b, --x, 3 & (b >>>= 1)) {
								case 0:
									n.mode = 14;
									break;
								case 1:
									if (w(n), n.mode = 20, t !== 6) break;
									b >>>= 2, x -= 2;
									break e;
								case 2:
									n.mode = 17;
									break;
								case 3: e.msg = "invalid block type", n.mode = 30;
							}
							b >>>= 2, x -= 2;
							break;
						case 14:
							for (b >>>= 7 & x, x -= 7 & x; x < 32;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if ((65535 & b) != (b >>> 16 ^ 65535)) {
								e.msg = "invalid stored block lengths", n.mode = 30;
								break;
							}
							if (n.length = 65535 & b, x = b = 0, n.mode = 15, t === 6) break e;
						case 15: n.mode = 16;
						case 16:
							if (E = n.length) {
								if (v < E && (E = v), y < E && (E = y), E === 0) break e;
								r.arraySet(m, p, g, E, _), v -= E, g += E, y -= E, _ += E, n.length -= E;
								break;
							}
							n.mode = 12;
							break;
						case 17:
							for (; x < 14;) {
								if (v === 0) break e;
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
									if (v === 0) break e;
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
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								if (j < 16) b >>>= k, x -= k, n.lens[n.have++] = j;
								else {
									if (j === 16) {
										for (L = k + 2; x < L;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										if (b >>>= k, x -= k, n.have === 0) {
											e.msg = "invalid bit length repeat", n.mode = 30;
											break;
										}
										P = n.lens[n.have - 1], E = 3 + (3 & b), b >>>= 2, x -= 2;
									} else if (j === 17) {
										for (L = k + 3; x < L;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										x -= k, P = 0, E = 3 + (7 & (b >>>= k)), b >>>= 3, x -= 3;
									} else {
										for (L = k + 7; x < L;) {
											if (v === 0) break e;
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
							if (n.mode = 20, t === 6) break e;
						case 20: n.mode = 21;
						case 21:
							if (6 <= v && 258 <= y) {
								e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, o(e, C), _ = e.next_out, m = e.output, y = e.avail_out, g = e.next_in, p = e.input, v = e.avail_in, b = n.hold, x = n.bits, n.mode === 12 && (n.back = -1);
								break;
							}
							for (n.back = 0; A = (R = n.lencode[b & (1 << n.lenbits) - 1]) >>> 16 & 255, j = 65535 & R, !((k = R >>> 24) <= x);) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (A && !(240 & A)) {
								for (M = k, N = A, ee = j; A = (R = n.lencode[ee + ((b & (1 << M + N) - 1) >> M)]) >>> 16 & 255, j = 65535 & R, !(M + (k = R >>> 24) <= x);) {
									if (v === 0) break e;
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
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.length += b & (1 << n.extra) - 1, b >>>= n.extra, x -= n.extra, n.back += n.extra;
							}
							n.was = n.length, n.mode = 23;
						case 23:
							for (; A = (R = n.distcode[b & (1 << n.distbits) - 1]) >>> 16 & 255, j = 65535 & R, !((k = R >>> 24) <= x);) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (!(240 & A)) {
								for (M = k, N = A, ee = j; A = (R = n.distcode[ee + ((b & (1 << M + N) - 1) >> M)]) >>> 16 & 255, j = 65535 & R, !(M + (k = R >>> 24) <= x);) {
									if (v === 0) break e;
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
									if (v === 0) break e;
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
							if (y === 0) break e;
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
							if (y === 0) break e;
							m[_++] = n.length, y--, n.mode = 21;
							break;
						case 27:
							if (n.wrap) {
								for (; x < 32;) {
									if (v === 0) break e;
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
									if (v === 0) break e;
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
							break e;
						case 30:
							F = -3;
							break e;
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
				function z(e, t, n) {
					for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && ae(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !ae(t, r, e.heap[i], e.depth));) e.heap[n] = e.heap[i], n = i, i <<= 1;
					e.heap[n] = r;
				}
				function oe(e, t, n) {
					var r, i, a, o, s = 0;
					if (e.last_lit !== 0) for (; r = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, r === 0 ? R(e, i, t) : (R(e, (a = O[i]) + l + 1, t), (o = x[a]) !== 0 && L(e, i -= k[a], o), R(e, a = F(--r), n), (o = S[a]) !== 0 && L(e, r -= N[a], o)), s < e.last_lit;);
					R(e, _, t);
				}
				function se(e, t) {
					var n, r, i, a = t.dyn_tree, o = t.stat_desc.static_tree, s = t.stat_desc.has_stree, c = t.stat_desc.elems, l = -1;
					for (e.heap_len = 0, e.heap_max = p, n = 0; n < c; n++) a[2 * n] === 0 ? a[2 * n + 1] = 0 : (e.heap[++e.heap_len] = l = n, e.depth[n] = 0);
					for (; e.heap_len < 2;) a[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= o[2 * i + 1]);
					for (t.max_code = l, n = e.heap_len >> 1; 1 <= n; n--) z(e, a, n);
					for (i = c; n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], z(e, a, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, a[2 * i] = a[2 * n] + a[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, a[2 * n + 1] = a[2 * r + 1] = i, e.heap[1] = i++, z(e, a, 1), 2 <= e.heap_len;);
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
				function ce(e, t, n) {
					var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
					for (o === 0 && (c = 138, l = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = o, o = t[2 * (r + 1) + 1], ++s < c && i === o || (s < l ? e.bl_tree[2 * i] += s : i === 0 ? s <= 10 ? e.bl_tree[2 * y]++ : e.bl_tree[2 * b]++ : (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * v]++), a = i, l = (s = 0) === o ? (c = 138, 3) : i === o ? (c = 6, 3) : (c = 7, 4));
				}
				function le(e, t, n) {
					var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
					for (o === 0 && (c = 138, l = 3), r = 0; r <= n; r++) if (i = o, o = t[2 * (r + 1) + 1], !(++s < c && i === o)) {
						if (s < l) for (; R(e, i, e.bl_tree), --s != 0;);
						else i === 0 ? s <= 10 ? (R(e, y, e.bl_tree), L(e, s - 3, 3)) : (R(e, b, e.bl_tree), L(e, s - 11, 7)) : (i !== a && (R(e, i, e.bl_tree), s--), R(e, v, e.bl_tree), L(e, s - 3, 2));
						a = i, l = (s = 0) === o ? (c = 138, 3) : i === o ? (c = 6, 3) : (c = 7, 4);
					}
				}
				o(N);
				var ue = !1;
				function de(e, t, n, i) {
					L(e, (s << 1) + +!!i, 3), function(e, t, n, i) {
						ie(e), I(e, n), I(e, ~n), r.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n;
					}(e, t, n);
				}
				n._tr_init = function(e) {
					ue ||= (function() {
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
					}(e)), se(e, e.l_desc), se(e, e.d_desc), c = function(e) {
						var t;
						for (ce(e, e.dyn_ltree, e.l_desc.max_code), ce(e, e.dyn_dtree, e.d_desc.max_code), se(e, e.bl_desc), t = f - 1; 3 <= t && e.bl_tree[2 * w[t] + 1] === 0; t--);
						return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
					}(e), o = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= o && (o = s)) : o = s = n + 5, n + 4 <= o && t !== -1 ? de(e, t, n, r) : e.strategy === 4 || s === o ? (L(e, 2 + +!!r, 3), oe(e, T, E)) : (L(e, 4 + +!!r, 3), function(e, t, n, r) {
						var i;
						for (L(e, t - 257, 5), L(e, n - 1, 5), L(e, r - 4, 4), i = 0; i < r; i++) L(e, e.bl_tree[2 * w[i] + 1], 3);
						le(e, e.dyn_ltree, t - 1), le(e, e.dyn_dtree, n - 1);
					}(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1), oe(e, e.dyn_ltree, e.dyn_dtree)), re(e), r && ie(e);
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
				}).call(this, Gl === void 0 ? typeof self < "u" ? self : typeof window < "u" ? window : {} : Gl);
			}, {}]
		}, {}, [10])(10);
	});
})(Jl);
var Yl = Jl.exports, Xl = /* @__PURE__ */ Kl(Yl), Zl = class {
	constructor(e, t) {
		X(this, "date", /* @__PURE__ */ new Date()), X(this, "author"), X(this, "guid", Pt.create()), X(this, "viewpoint"), X(this, "modifiedAuthor"), X(this, "modifiedDate"), X(this, "topic"), X(this, "_components"), X(this, "_comment", ""), this._components = e, this._comment = t;
		let n = this._components.get(ru);
		this.author = n.config.author;
	}
	set comment(e) {
		var t;
		let n = this._components.get(ru);
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
}, Ql = class e {
	constructor(t) {
		X(this, "guid", Pt.create()), X(this, "title", e.default.title), X(this, "creationDate", /* @__PURE__ */ new Date()), X(this, "creationAuthor", ""), X(this, "viewpoints", new je()), X(this, "relatedTopics", new je()), X(this, "comments", new r()), X(this, "documentReferences", new je()), X(this, "customData", {}), X(this, "description"), X(this, "serverAssignedId"), X(this, "dueDate"), X(this, "modifiedAuthor"), X(this, "modifiedDate"), X(this, "index"), X(this, "_type", e.default.type), X(this, "_status", e.default.status), X(this, "_priority", e.default.priority), X(this, "_stage", e.default.stage), X(this, "_assignedTo", e.default.assignedTo), X(this, "_labels", e.default.labels ?? /* @__PURE__ */ new Set()), X(this, "_components"), this._components = t;
		let n = t.get(ru);
		this.creationAuthor = n.config.author, this.relatedTopics.guard = (e) => e !== this.guid;
	}
	set type(e) {
		let { strict: t, types: n } = this._components.get(ru).config;
		(!t || n.has(e)) && (this._type = e);
	}
	get type() {
		return this._type;
	}
	set status(e) {
		let { strict: t, statuses: n } = this._components.get(ru).config;
		(!t || n.has(e)) && (this._status = e);
	}
	get status() {
		return this._status;
	}
	set priority(e) {
		let t = this._components.get(ru);
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
		let t = this._components.get(ru);
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
		let t = this._components.get(ru);
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
		let { strict: t, labels: n } = this._components.get(ru).config;
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
		return this._components.get(ru).config.version;
	}
	set(e) {
		let t = e, n = this;
		for (let r in e) {
			if (r === "guid") continue;
			let e = t[r];
			r in this && (n[r] = e);
		}
		return this._components.get(ru).list.set(this.guid, this), this;
	}
	createComment(e, t) {
		let n = new Zl(this._components, e);
		return n.viewpoint = t, n.topic = this, this.comments.set(n.guid, n), n;
	}
	createLabelTags() {
		let e = [...this.labels];
		if (this._components.get(ru).config.exportCustomDataAsLabels) for (let t in this.customData) {
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
		let e = this._components.get(du);
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
		let n = this._components.get(ru);
		for (let r of this.documentReferences) {
			let i = n.documents.get(r);
			if (!i) continue;
			let a = {
				$Guid: Pt.create(),
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
		}, t = this._components.get(du);
		for (let n of this.viewpoints) {
			let r = t.list.get(n);
			r && (e.viewpoints ||= [], e.viewpoints.push(r.toJSON()));
		}
		let n = this._components.get(ru);
		for (let t of this.documentReferences) {
			let r = n.documents.get(t);
			r && (e.document_references ||= [], r.type === "external" ? e.document_references.push({
				guid: Pt.create(),
				description: r.description,
				url: r.url
			}) : e.document_references.push({
				guid: Pt.create(),
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
    ${Pr.builder.build(n)}`;
	}
};
X(Ql, "default", {
	title: "BCF Topic",
	type: "Issue",
	status: "Active"
});
var $l = Ql, eu = (e, t) => {
	if (t.trim() === "") return;
	let n = ru.xmlParser.parse(t).Extensions;
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
}, tu = class extends Lr {
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
}, nu = class e extends Et {
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
		}), X(this, "config", new tu(this, this.components, "BCF Topics", e.uuid)), X(this, "list", new r()), X(this, "documents", new r()), X(this, "onSetup", new Z()), X(this, "isSetup", !1), X(this, "onBCFImported", new Z()), X(this, "onDisposed", new Z());
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
		let t = new $l(this.components);
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
		let e = this.components.get(du);
		for (let [t, n] of this.list) for (let t of n.viewpoints) e.list.has(t) || n.viewpoints.delete(t);
	}
	async export(e = this.list.values()) {
		let t = new Xl();
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
		let n = this.components.get(du);
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
		if (!(t && n && r && Zl)) return null;
		let o = new Zl(this.components, i ?? "");
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
		let { fallbackVersionOnImport: n, ignoreIncompleteTopicsOnImport: r, updateExtensionsOnImport: i } = this.config, a = new Xl();
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
			eu(this, e);
		}
		let u = [], d = this.components.get(du), f = o.filter((e) => e.name.endsWith(".bcfv"));
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
				let e = r.PerspectiveCamera ?? r.OrthogonalCamera, { CameraViewPoint: t, CameraDirection: n } = e, a = new U(Number(t.X), Number(t.Z), Number(-t.Y)), o = new U(Number(n.X), Number(n.Z), Number(-n.Y)), s = {
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
			let f = new cu(this.components, i);
			u.push(f);
		}
		let p = {}, m = [], h = o.filter((e) => e.name.endsWith(".bcf"));
		for (let t of h) {
			let n = await t.async("string"), i = e.xmlParser.parse(n).Markup, a = i.Topic, { Guid: c, TopicType: l, TopicStatus: u, Title: f, CreationDate: h, CreationAuthor: g } = a;
			if (r && !(c && l && u && f && h && g)) continue;
			let _ = new $l(this.components);
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
				let e = Pr.parser.parse(T).DocumentInfo?.Documents?.Document;
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
X(nu, "uuid", "de977976-e4f6-4e4f-a01a-204727839802"), X(nu, "xmlParser", new _r({
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
var ru = nu, iu = class e {
	constructor(t, n, r, i, a, o = 5, s = !0) {
		if (X(this, "onDraggingStarted", new Z()), X(this, "onDraggingEnded", new Z()), X(this, "onDisposed", new Z()), X(this, "normal"), X(this, "origin"), X(this, "three", new I()), X(this, "components"), X(this, "world"), X(this, "type", "default"), X(this, "_title", "Clipping Plane"), X(this, "_helper"), X(this, "_visible", !0), X(this, "_enabled", !0), X(this, "_controlsActive", !1), X(this, "_arrowBoundBox", new Oe()), X(this, "_planeMesh"), X(this, "_controls"), X(this, "_hiddenMaterial", new ae({ visible: !1 })), X(this, "_sizeMultiplier", 5), X(this, "_autoScale", !0), X(this, "_visibilityBeforeDisabled", !0), X(this, "notifyManager", () => {
			let e = this.components.get(su), t = e.list.getKey(this);
			t && e.list.set(t, this);
		}), X(this, "update", () => {
			this._enabled && (this.three.setFromNormalAndCoplanarPoint(this.normal, this._helper.position), this.updateScale());
		}), X(this, "updateScale", () => {
			if (!this.autoScale) return;
			let e = this.world.camera?.three;
			if (!e || !(e instanceof ce)) return;
			let t = new U();
			e.getWorldPosition(t);
			let n = t.distanceTo(this._helper.position) / 7 * this._sizeMultiplier;
			this._planeMesh.scale.set(n, n, n);
		}), X(this, "changeDrag", (e) => {
			this._visible = !e.value, this.preventCameraMovement(), this.notifyDraggingChanged(e);
		}), this.components = t, this.world = n, !n.renderer) throw Error("The given world must have a renderer!");
		this.normal = i, this.origin = r, this._sizeMultiplier = o;
		let c = t.get(su);
		n.renderer.setPlane(!0, this.three, c.localClippingPlanes), this._planeMesh = e.newPlaneMesh(o, a), this._helper = this.newHelper(), this._controls = this.newTransformControls(), this.three.setFromNormalAndCoplanarPoint(i, r), s && this.toggleControls(!0), this.updateScale(), n.camera?.controls && n.camera.controls.addEventListener("update", this.updateScale);
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
		let t = this.components.get(su);
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
		this._enabled = !1, this.world.camera?.controls && this.world.camera.controls.removeEventListener("update", this.updateScale), this.onDraggingStarted.reset(), this.onDraggingEnded.reset(), this._helper.removeFromParent(), this.world.renderer && this.world.renderer.setPlane(!1, this.three), this._arrowBoundBox.removeFromParent(), this._arrowBoundBox.geometry.dispose(), this._planeMesh.geometry.dispose(), this._controls.getHelper().removeFromParent(), this._controls.dispose(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
	reset() {
		let e = new U(1, 0, 0), t = new U();
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
		let e = this.world.camera.three, t = this.world.renderer.three.domElement, n = new Te(e, t);
		return this.initializeControls(n), this.world.scene.three.add(n.getHelper()), n;
	}
	initializeControls(e) {
		e.attach(this._helper), e.showX = !1, e.showY = !1, e.setSpace("local"), this.createArrowBoundingBox(), e.getHelper().children[0].children[0].add(this._arrowBoundBox);
	}
	createArrowBoundingBox() {
		this._arrowBoundBox.geometry = new N(.18, .18, 1.2), this._arrowBoundBox.material = this._hiddenMaterial, this._arrowBoundBox.rotateX(Math.PI / 2), this._arrowBoundBox.updateMatrix(), this._arrowBoundBox.geometry.applyMatrix4(this._arrowBoundBox.matrix);
	}
	notifyDraggingChanged(e) {
		e.value ? this.onDraggingStarted.trigger() : this.onDraggingEnded.trigger();
	}
	preventCameraMovement() {
		this.world.camera.enabled = this._visible;
	}
	newHelper() {
		let e = new me();
		return e.lookAt(this.normal), e.position.copy(this.origin), this._planeMesh.position.z += .01, e.add(this._planeMesh), this.world.scene.three.add(e), e;
	}
	static newPlaneMesh(e, t) {
		let n = new Oe(new Ae(1), t);
		return n.scale.set(e, e, e), n;
	}
}, au = class extends Lr {
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
				value: new A(),
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
}, ou = class e extends Et {
	constructor(t) {
		super(t), X(this, "onSetup", new Z()), X(this, "onBeforeDrag", new Z()), X(this, "onAfterDrag", new Z()), X(this, "onBeforeCreate", new Z()), X(this, "onBeforeCancel", new Z()), X(this, "onAfterCancel", new Z()), X(this, "onBeforeDelete", new Z()), X(this, "onAfterCreate", new Z()), X(this, "onAfterDelete", new Z()), X(this, "onDisposed", new Z()), X(this, "isSetup", !1), X(this, "orthogonalY", !1), X(this, "toleranceOrthogonalY", .7), X(this, "autoScalePlanes", !0), X(this, "localClippingPlanes", !1), X(this, "Type", iu), X(this, "list", new r()), X(this, "config", new au(this, this.components, "Clipper", e.uuid)), X(this, "_defaultConfig", {
			color: new A(12255487),
			opacity: .2,
			size: 2
		}), X(this, "_material", new ae({
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
		let t = this.components.get(Nl);
		for (let [, n] of t.list) if (n.renderer) {
			e.clippingPlanes = n.renderer.clippingPlanes;
			return;
		}
	}
	dispose() {
		this._enabled = !1, this.components.get(zr).list.delete(this.config.uuid), this.list.clear(), this._material.dispose(), this.onBeforeCreate.reset(), this.onBeforeCancel.reset(), this.onBeforeDelete.reset(), this.onBeforeDrag.reset(), this.onAfterCreate.reset(), this.onAfterCancel.reset(), this.onAfterDelete.reset(), this.onAfterDrag.reset(), this.onDisposed.trigger(e.uuid), this.onDisposed.reset();
	}
	async create(e) {
		let t = await this.components.get(Sl).get(e).castRay();
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
		let t = this.components.get(Sl).get(e), n = this.getAllPlaneMeshes(), r = t.castRayToObjects(n);
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
		let n = t.point.distanceTo(new U(0, 0, 0)), r = t.normal || t.face?.normal;
		if (!n || !r) return null;
		let i = this.getWorldNormal(t, r), a = this.newPlane(e, t.point, i.negate()), o = this.list.get(a);
		return o.visible = this._visible, o.size = this._size, e.renderer.setPlane(!0, o.three, this.localClippingPlanes), this.updateMaterialsAndPlanes(), o;
	}
	getWorldNormal(e, t) {
		let n = e.object, r = e.object.matrixWorld.clone();
		if (n instanceof w && e.instanceId !== void 0) {
			let t = new V();
			n.getMatrixAt(e.instanceId, t), r = t.multiply(r);
		}
		let i = new re().getNormalMatrix(r), a = t.clone().applyMatrix3(i).normalize();
		return this.normalizePlaneDirectionY(a), a;
	}
	normalizePlaneDirectionY(e) {
		this.orthogonalY && (e.y > this.toleranceOrthogonalY && (e.x = 0, e.y = 1, e.z = 0), e.y < -this.toleranceOrthogonalY && (e.x = 0, e.y = -1, e.z = 0));
	}
	newPlane(e, t, n) {
		let r = new this.Type(this.components, e, t, n, this._material);
		r.autoScale = this.autoScalePlanes, r.onDraggingStarted.add(() => this.onBeforeDrag.trigger(r)), r.onDraggingEnded.add(() => this.onAfterDrag.trigger(r));
		let i = Pt.create();
		return this.list.set(i, r), this.onAfterCreate.trigger(r), i;
	}
	updateMaterialsAndPlanes() {
		let e = this.components.get(Nl);
		for (let [t, n] of e.list) {
			if (!n.renderer) continue;
			n.renderer.updateClippingPlanes();
			let { clippingPlanes: e } = n.renderer;
			for (let t of n.meshes) if (t.material) if (Array.isArray(t.material)) for (let n of t.material) n.clippingPlanes = e;
			else t.material.clippingPlanes = e;
		}
	}
};
X(ou, "uuid", "66290bc5-18c4-4cd1-9379-2e17a0617611");
var su = ou, cu = class {
	constructor(e, t) {
		X(this, "title"), X(this, "guid", Pt.create()), X(this, "clippingPlanes", new je()), X(this, "camera", {
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
		}), X(this, "customData", {}), X(this, "exceptionComponents", new je()), X(this, "selectionComponents", new je()), X(this, "componentColors", new r()), X(this, "spacesVisible", !1), X(this, "spaceBoundariesVisible", !1), X(this, "openingsVisible", !1), X(this, "defaultVisibility", !0), X(this, "snapshot", this.guid), X(this, "_components"), X(this, "_world", null), X(this, "notifyUpdate", () => {
			this._components.get(du).list.set(this.guid, this);
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
		let e = this._components.get(Q), { camera_view_point: t } = this.camera, { x: n, y: r, z: i } = t, a = new U(n, r, i);
		return e.applyBaseCoordinateSystem(a, new V()), a;
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
		return new U(t, n, r);
	}
	set world(e) {
		this._world = e;
	}
	get world() {
		return this._world;
	}
	get _managerVersion() {
		return this._components.get(ru).config.version;
	}
	get topics() {
		return [...this._components.get(ru).list.values()].filter((e) => e.viewpoints.has(this.guid));
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
			let e = this._components.get(su);
			for (let t of i) {
				let { location: n, direction: r } = t, i = new U(n.x, n.z, -n.y), a = new U(r.x, r.z, -r.y), o = e.createFromNormalAndCoplanarPoint(this.world, a, i);
				this.clippingPlanes.add(o), e.list.get(o).enabled = !1, e.list.get(o).visible = !1;
			}
		}
		this.notifyUpdate();
	}
	async go(e) {
		if (!this.world) return;
		let { camera: t } = this.world;
		if (!(t instanceof Wl)) throw Error("Viewpoint: the world's camera component must be of type OrthoPerspectiveCamera to switch between perspective and orthographic projections.");
		let { transition: n, applyClippings: r, applyVisibility: i, clippingsVisibility: a } = {
			transition: !0,
			applyClippings: !0,
			applyVisibility: !0,
			clippingsVisibility: !0,
			...e
		};
		t.projection.set(this.projection);
		let o = new U(this.camera.camera_view_point.x, this.camera.camera_view_point.y, this.camera.camera_view_point.z), s = new U(this.camera.camera_direction.x, this.camera.camera_direction.y, this.camera.camera_direction.z);
		if (o.equals(new U()) && s.equals(new U())) return;
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
			let i = n.three, a = i.getWorldPosition(new U()), o = i.getWorldDirection(new U()), { width: s, height: c } = r.getSize(), l = s / c;
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
			if (i instanceof ce ? this.camera = {
				...d,
				field_of_view: i.fov
			} : i instanceof ue && (this.camera = {
				...d,
				view_to_world_scale: i.top - i.bottom
			}), e) {
				let e = this._components.get(du), i = r.three.domElement;
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
			let r = this._components.get(du), i = n.three.domElement;
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
		let e = this._components.get(su);
		for (let [t, n] of e.list) n.enabled && this.clippingPlanes.add(t);
	}
	async applyVisibility() {
		let e = this._components.get(Uc);
		e.set(this.defaultVisibility);
		let t = await this.getExceptionMap();
		e.set(!this.defaultVisibility, t);
		let n = await this.getSelectionMap();
		e.set(!0, n);
	}
	async setColorizationState(e) {
		let t = this._components.get(Q), n = [];
		if (e) for (let [e, r] of this.componentColors) {
			let i = `#${e}`, o = await t.guidsToModelIdMap(r);
			for (let [e, r] of Object.entries(o)) {
				let o = t.list.get(e);
				o && n.push(o.highlight([...r], {
					customId: i,
					color: new A(i),
					renderedFaces: a.ONE,
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
		let t = this._components.get(su);
		for (let [n, r] of t.list) r.enabled = e && this.clippingPlanes.has(n);
	}
	setClippingVisibility(e) {
		let t = this._components.get(su);
		for (let n of this.clippingPlanes) {
			let r = t.list.get(n);
			r && (r.visible = e);
		}
	}
	async createComponentTags(e) {
		let t = this._components.get(Q), n = this._components.get(ru), r = "";
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
		let e = this._components.get(su), t = {
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
		let n = this._components.get(du), r = n.snapshots.get(this.snapshot);
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
		let i = new V().makeRotationX(Math.PI / 2), a = r.clone().applyMatrix4(i);
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
}, lu = class extends Lr {
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
}, uu = class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "world", null), X(this, "list", new r()), X(this, "snapshots", new r()), X(this, "isSetup", !1), X(this, "onSetup", new Z()), X(this, "config", new lu(this, this.components, "Viewpoints", e.uuid)), X(this, "onDisposed", new Z()), t.add(e.uuid, this);
	}
	create(e) {
		let t = new cu(this.components, e);
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
X(uu, "uuid", "ee867824-a796-408d-8aa0-4e5962a83c66");
var du = uu, fu = class {
	constructor(e, t) {
		X(this, "_components"), X(this, "_cameraOffset", 10), X(this, "_planeHelper"), X(this, "_farPlaneHelper"), X(this, "_cameraHelper"), X(this, "onStateChanged", new Z()), X(this, "onUpdated", new Z()), X(this, "onDisposed", new Z()), X(this, "camera"), X(this, "plane", new I()), X(this, "farPlane", new I()), X(this, "id", Pt.create()), X(this, "_open", !1), X(this, "_range", mu.defaultRange), X(this, "_world", null), X(this, "_helpersVisible", !1), X(this, "_planesEnabled", !1), this._components = e, this.camera = new Wl(this._components);
		let { threeOrtho: n } = this.camera;
		if (t?.id && (this.id = t.id), t?.normal && t?.point) {
			let { normal: e, point: n } = t;
			this.plane.setFromNormalAndCoplanarPoint(e, n);
		}
		this._cameraHelper = new j(n), this._planeHelper = new Fe(this.plane, 50), this._farPlaneHelper = new Fe(this.farPlane, 50), this.farPlaneHelperColor = new A("blue"), this.update();
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
		!Array.isArray(this._planeHelper.material) && "color" in this._planeHelper.material && this._planeHelper.material.color instanceof A && (this._planeHelper.material.color = e);
	}
	set farPlaneHelperColor(e) {
		!Array.isArray(this._farPlaneHelper.material) && "color" in this._farPlaneHelper.material && this._farPlaneHelper.material.color instanceof A && (this._farPlaneHelper.material.color = e);
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
		let e = this._components.get(jt);
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
}, pu = class e extends Et {
	constructor(t) {
		super(t), X(this, "list", new r()), X(this, "enabled", !0), X(this, "world", null), X(this, "_fragmentsUpdateEvent", () => {
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
		let r = new fu(this.components, {
			id: n?.id,
			normal: e,
			point: t
		});
		return r.world = n?.world ?? this.world, this.list.set(r.id, r), r;
	}
	createFromPlane(e, t) {
		let n = new fu(this.components, { id: t?.id });
		return n.plane.copy(e), n.update(), n.world = t?.world ?? this.world, this.list.set(n.id, n), n;
	}
	async createFromIfcStoreys(e) {
		let t = [], n = this.components.get(Q), r = e?.offset === void 0 ? .25 : e.offset;
		for (let [i, a] of n.list) {
			if (e && e.modelIds && !e.modelIds.some((e) => e.test(i))) continue;
			let n = Object.values(await a.getItemsOfCategories([/BUILDINGSTOREY/])).flat();
			if (n.length === 0) continue;
			let o = await a.getItemsData(n), [, s] = await a.getCoordinates(), c = new U(0, -1, 0);
			for (let n of o) {
				if (!("value" in n.Name && "value" in n.Elevation)) continue;
				let { value: i } = n.Name;
				if (e?.storeyNames && !e.storeyNames.some((e) => e.test(i))) continue;
				let a = new I(c, n.Elevation.value + s + r), o = this.createFromPlane(a, {
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
			let e = this.components.get(Gc);
			e.list.clear(), e.list.add(...a.map((e) => e.box)), a = [{
				id: "combined",
				box: e.get()
			}];
		}
		for (let { id: n, box: r } of a) {
			let { min: a, max: o } = r, s = Math.abs(o.x - a.x), c = Math.abs(o.z - a.z), l = new U();
			r.getCenter(l);
			let u = new I(new U(0, 0, -1), o.z), d = new I(new U(0, 0, 1), -a.z), f = new I(new U(-1, 0, 0), o.x), p = new I(new U(1, 0, 0), -a.x), { front: m, back: h, left: g, right: _ } = i(n), v = this.createFromPlane(u, {
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
X(pu, "uuid", "fb22f1f5-6598-4664-a11d-de8963ae420f"), X(pu, "defaultRange", 15);
var mu = pu, hu = class {
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
	getItemChecks(e, t, n, i) {
		if (!("value" in n._localId && typeof n._localId.value == "number")) return null;
		let a = e.get(t);
		a || (a = new r(), e.set(t, a));
		let o = a.get(n._localId.value);
		if (o && i && !o.pass) return null;
		if (!o) {
			let e = [];
			o = {
				guid: Array.isArray(n._guid) ? void 0 : n._guid.value,
				pass: !1,
				checks: e
			}, Object.defineProperty(o, "pass", { get: () => e.every(({ pass: e }) => e) }), a.set(n._localId.value, o);
		}
		let s = [], c = {
			facetType: this.facetType,
			cardinality: this.cardinality,
			checks: s,
			pass: !1
		};
		return Object.defineProperty(c, "pass", { get: () => s.every(({ pass: e }) => e) }), o.checks.push(c), c.checks;
	}
}, gu = (e, t) => {
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
}, _u = class extends hu {
	constructor(e, t) {
		super(e), X(this, "facetType", "Attribute"), X(this, "name"), X(this, "value"), this.name = t;
	}
	serialize(e) {
		let t = gu("Name", this.name), n = gu("Value", this.value), r = "";
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
}, vu = class extends hu {
	constructor(e, t) {
		super(e), X(this, "facetType", "Classification"), X(this, "system"), X(this, "value"), X(this, "uri"), this.system = t;
	}
	serialize(e) {
		let t = gu("System", this.system), n = gu("Value", this.value), r = "";
		return e === "requirement" && (r += `cardinality="${this.cardinality}"`, r += this.uri ? `uri=${this.uri}` : "", r += this.instructions ? `instructions="${this.instructions}"` : ""), `<classification ${r}>
  ${t}
  ${n}
</classification>`;
	}
	async getEntities(e, t) {}
	async test(e, t) {}
}, yu = class extends hu {
	constructor(e, t) {
		super(e), X(this, "facetType", "Entity"), X(this, "name"), X(this, "predefinedType"), this.name = t;
	}
	serialize(e) {
		let t = gu("Name", this.name), n = gu("Name", this.predefinedType), r = "";
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
			Fr.add(t, i);
			return;
		}
		for (let [e, r] of Object.entries(i)) {
			let i = n.list.get(e);
			if (!i) continue;
			let a = await i.getItemsData([...r]);
			for (let n of a) "value" in n._localId && await this.evalPredefinedType(e, n) && Fr.append(t, e, n._localId.value);
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
}, bu = class extends hu {
	constructor(e, t, n) {
		super(e), X(this, "facetType", "Property"), X(this, "propertySet"), X(this, "baseName"), X(this, "value"), X(this, "dataType"), X(this, "uri"), X(this, "_unsupportedTypes", ["IFCCOMPLEXPROPERTY", "IFCPHYSICALCOMPLEXQUANTITY"]), this.propertySet = t, this.baseName = n;
	}
	serialize(e) {
		let t = gu("PropertySet", this.propertySet), n = gu("BaseName", this.baseName), r = gu("Value", this.value), i = this.dataType ? `dataType=${this.dataType}` : "", a = "";
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
					Fr.append(t, r, ...s);
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
		return "value" in e._category ? (e._category.value === "IFCPROPERTYSET" && (t = "HasProperties"), e._category.value === "IFCELEMENTQUANTITY" && (t = "Quantities"), t) : t;
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
}, xu = class extends hu {
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
		let t = gu("Value", this.value), n = "";
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
				Fr.append(t, r, ...n);
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
}, Su = class extends hu {
	constructor(e, t) {
		super(e), X(this, "facetType", "PartOf"), X(this, "_entityFacet"), X(this, "_entity"), X(this, "relation"), X(this, "cardinality", "required"), this._entity = t, this._entityFacet = new yu(e, t.name), this._entityFacet.predefinedType = t.predefinedType;
	}
	set entity(e) {
		this._entity = e;
		let { name: t, predefinedType: n } = e;
		this._entityFacet = new yu(this._components, t), this._entityFacet.predefinedType = n;
	}
	get entity() {
		return this._entity;
	}
	serialize() {
		return "";
	}
	async getEntities(e, t) {}
	async test(e) {}
}, Cu = class {
	constructor(e, t, n) {
		X(this, "name"), X(this, "ifcVersion", /* @__PURE__ */ new Set()), X(this, "identifier", Pt.create()), X(this, "description"), X(this, "instructions"), X(this, "requirementsDescription"), X(this, "applicability", new je()), X(this, "requirements", new je()), X(this, "components"), this.components = e, this.name = t;
		for (let e of n) this.ifcVersion.add(e);
	}
	set(e) {
		let t = e, n = this;
		for (let r in e) {
			if (r === "identifier") continue;
			let e = t[r];
			r in this && (n[r] = e);
		}
		return this.components.get(Mu).list.set(this.identifier, this), this;
	}
	async test(e, t = { skipIfFails: !0 }) {
		let n = new r();
		if (this.requirements.size === 0) return n;
		let i = {}, a = [];
		for (let t of this.applicability) a.push(t.getEntities(e, i));
		await Promise.all(a);
		let o = [];
		for (let e of this.requirements) o.push(e.test(i, n, t));
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
}, wu = (e) => {
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
}, Tu = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = r.name, i = wu(t);
		if (!i) continue;
		let a = new yu(e, i);
		r.cardinality && (a.cardinality = r.cardinality), a.predefinedType = wu(r.predefinedType), a.instructions = r.instructions, n.push(a);
	}
	return n;
}, Eu = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = r.name, i = wu(t);
		if (!i) continue;
		let a = new _u(e, i);
		r.cardinality && (a.cardinality = r.cardinality), a.value = wu(r.value), a.instructions = r.instructions, n.push(a);
	}
	return n;
}, Du = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = new xu(e);
		r.cardinality && (t.cardinality = r.cardinality);
		let i = wu(r.value);
		i?.type === "enumeration" && Array.isArray(i.parameter) && (i.parameter = i.parameter.map(String)), t.value = i, t.uri = r.uri, t.instructions = r.instructions, n.push(t);
	}
	return n;
}, Ou = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = r.propertySet, i = r.baseName, a = wu(t), o = wu(i);
		if (!(o && a)) continue;
		let s = new bu(e, a, o);
		r.cardinality && (s.cardinality = r.cardinality), s.value = wu(r.value), s.dataType = r.dataType, s.uri = r.uri, s.instructions = r.instructions, n.push(s);
	}
	return n;
}, ku = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = r.system, i = wu(t);
		if (!i) continue;
		let a = new vu(e, i);
		r.cardinality && (a.cardinality = r.cardinality);
		let o = wu(r.value);
		o?.type === "simple" && (o.parameter = String(o.parameter)), o?.type === "enumeration" && Array.isArray(o.parameter) && (o.parameter = o.parameter.map(String)), a.value = o, a.uri = r.uri, a.instructions = r.instructions, n.push(a);
	}
	return n;
}, Au = (e, t) => {
	let n = [];
	for (let r of t) {
		let t = wu(r.entity.name);
		if (!t) continue;
		let i = new Su(e, {
			name: t,
			predefinedType: wu(r.entity.predefinedType)
		});
		i.relation = r.relation, r.cardinality && (i.cardinality = r.cardinality), i.instructions = r.instructions, n.push(i);
	}
	return n;
}, ju = class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "IDSInfo"), X(this, "list", new r()), t.add(e.uuid, this);
	}
	getModelIdMap(e) {
		let t = {}, n = {};
		for (let [r, i] of e) {
			let e = [...i].filter(([, e]) => e.pass).map(([e]) => e);
			Fr.append(t, r, ...e);
			let a = [...i].filter(([, e]) => !e.pass).map(([e]) => e);
			Fr.append(n, r, ...a);
		}
		return {
			pass: t,
			fail: n
		};
	}
	create(e, t, n) {
		let r = new Cu(this.components, e, t);
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
							let e = Tu(this.components, n);
							s.push(...e);
						}
						if (t === "attribute") {
							let e = Eu(this.components, n);
							s.push(...e);
						}
						if (t === "material") {
							let e = Du(this.components, n);
							s.push(...e);
						}
						if (t === "classification") {
							let e = ku(this.components, n);
							s.push(...e);
						}
						if (t === "property") {
							let e = Ou(this.components, n);
							s.push(...e);
						}
						if (t === "partOf") {
							let e = Au(this.components, n);
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
							let e = Tu(this.components, n);
							c.push(...e);
						}
						if (t === "attribute") {
							let e = Eu(this.components, n);
							c.push(...e);
						}
						if (t === "material") {
							let e = Du(this.components, n);
							c.push(...e);
						}
						if (t === "classification") {
							let e = ku(this.components, n);
							c.push(...e);
						}
						if (t === "property") {
							let e = Ou(this.components, n);
							c.push(...e);
						}
						if (t === "partOf") {
							let e = Au(this.components, n);
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
  <!-- Made with That Open Engine ${zl.release} (https://github.com/thatopen/engine_components) -->
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
X(ju, "uuid", "9f0b9f78-9b2e-481a-b766-2fbfd01f342c"), X(ju, "xmlParser", new _r({
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
var Mu = ju;
X(class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), t.add(e.uuid, this);
	}
	static distanceFromPointToLine(e, t, n, r = !1) {
		let i = new z(), a = new U();
		return i.set(t, n), i.closestPointToPoint(e, r, a), a.distanceTo(e);
	}
	round(e) {
		let t = 1e3;
		e.x = Math.trunc(e.x * t) / t, e.y = Math.trunc(e.y * t) / t, e.z = Math.trunc(e.z * t) / t;
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
}, "uuid", "267ca032-672f-4cb0-afa9-d24e904f39d6");
var Nu = (e, t, n) => {
	let r = new U(-t.z, 0, t.x), i = new U(t.x + r.x, 0, t.z + r.z).normalize().multiplyScalar(n / 2);
	return [
		e.x + i.x,
		e.y,
		e.z + i.z,
		e.x - i.x,
		e.y,
		e.z - i.z
	];
}, Pu = (e, t, n) => {
	let r = new U(-t.z, 0, t.x), i = e.x - t.x * n + r.x * n * .4, a = e.z - t.z * n + r.z * n * .4, o = e.x - t.x * n - r.x * n * .4, s = e.z - t.z * n - r.z * n * .4;
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
}, Fu = () => [], Iu = (e, t, n) => {
	let r = new U(-t.z, 0, t.x), i = e.clone().addScaledVector(t, -n), a = i.clone().addScaledVector(r, n * .4), o = i.clone().addScaledVector(r, -n * .4);
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
}, Lu = class extends r {
	constructor() {
		super();
	}
	getBySystem(e) {
		let t = /* @__PURE__ */ new Map();
		for (let [n, r] of this) r.system === e && t.set(n, r.data);
		return t;
	}
}, Ru = class extends r {
	constructor(e) {
		super(), X(this, "_container"), this._container = e, this.deleteGuard = (e) => e !== "0", this.set("0", {
			name: "0",
			visible: !0,
			material: new Ee({ color: 0 })
		});
	}
	create(e, t) {
		if (!this.has(e)) {
			let n = {
				name: e,
				visible: t?.visible ?? !0,
				material: t?.material ?? new Ee({ color: 0 })
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
}, zu = class e extends P {
	constructor(n) {
		super(), X(this, "_viewport"), X(this, "_border"), X(this, "_handles", []), X(this, "_raycaster", new c()), X(this, "_resizable", !1), X(this, "_movable", !1), X(this, "_dragHandle", null), X(this, "_dragConstraints", []), X(this, "_hoveredHandle", null), X(this, "_moveDrag", null), X(this, "_hoveringBorder", !1), X(this, "_normalMat"), X(this, "_hoverMat"), X(this, "_borderMat"), this._viewport = n, this._borderMat = new Ee({
			color: e._BORDER_COLOR,
			depthTest: !1
		});
		let r = new t();
		r.setAttribute("position", new H(/* @__PURE__ */ new Float32Array(24), 3)), this._border = new fe(r, this._borderMat), this._border.renderOrder = 999, this._border.frustumCulled = !1, this._border.userData.isDimension = !0, this.add(this._border), this._normalMat = new ae({ color: e._BORDER_COLOR }), this._hoverMat = new ae({ color: e._BORDER_HOVER_COLOR });
		let i = new b(.05, 8, 6);
		for (let t of e._HANDLE_DEFS) {
			let e = new Oe(i, this._normalMat);
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
		let t = new U(0, 1, 0).transformDirection(this.matrixWorld), n = new U().setFromMatrixPosition(this.matrixWorld), r = new I().setFromNormalAndCoplanarPoint(t, n), i = new U();
		return e.intersectPlane(r, i) ? this.worldToLocal(i) : null;
	}
	_setBorderHover(t) {
		t !== this._hoveringBorder && (this._hoveringBorder = t, this._borderMat.color.setHex(t ? e._BORDER_HOVER_COLOR : e._BORDER_COLOR));
	}
};
X(zu, "_BORDER_COLOR", 22015), X(zu, "_BORDER_HOVER_COLOR", 16746496), X(zu, "_LINE_THRESHOLD", .06), X(zu, "_HANDLE_DEFS", [
	{ constraints: ["left", "top"] },
	{ constraints: ["right", "top"] },
	{ constraints: ["right", "bottom"] },
	{ constraints: ["left", "bottom"] },
	{ constraints: ["top"] },
	{ constraints: ["right"] },
	{ constraints: ["bottom"] },
	{ constraints: ["left"] }
]);
var Bu = zu, Vu = class {
	constructor(e) {
		X(this, "uuid", we.generateUUID()), X(this, "name"), X(this, "camera"), X(this, "onDisposed", new Z()), X(this, "_left"), X(this, "_right"), X(this, "_top"), X(this, "_bottom"), X(this, "_drawingScale"), X(this, "_container", null), X(this, "_helper", null), X(this, "_helperVisible", !1), this._left = e.left, this._right = e.right, this._top = e.top, this._bottom = e.bottom, this._drawingScale = e.scale ?? 100, this.name = e.name ?? "Drawing Viewport", this.camera = new ue(this._left, this._right, this._top, this._bottom, .1, 30), this.camera.up.set(0, 0, -1), this.camera.position.set(0, 10, 0), this.camera.lookAt(0, 0, 0), this.camera.layers.set(1);
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
		return this._helper ||= new Bu(this), this._helper;
	}
	get helperVisible() {
		return this._helperVisible;
	}
	set helperVisible(e) {
		var t, n;
		this._helperVisible = e, e ? (t = this._container) == null || t.add(this.helper) : (n = this._helper) == null || n.removeFromParent();
	}
	get bbox() {
		return new h(new U(this._left, 0, -this._top), new U(this._right, 0, -this._bottom));
	}
	get size() {
		let e = new U();
		return this.bbox.getSize(e), new T(e.x * 1e3, e.z * 1e3);
	}
	get localXAxis() {
		return new U(1, 0, 0);
	}
	get localYAxis() {
		return new U(0, 0, -1);
	}
	get normal() {
		return new U(0, 1, 0);
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
			new I(new U(1, 0, 0), -e.min.x),
			new I(new U(-1, 0, 0), e.max.x),
			new I(new U(0, 0, 1), -e.min.z),
			new I(new U(0, 0, -1), e.max.z)
		];
	}
	getPlaneIntersections(e) {
		let t = [];
		for (let n of this.bboxPlanes) {
			let r = new U();
			n.intersectLine(e, r) && this.bbox.containsPoint(r) && t.push(r);
		}
		return t;
	}
}, Hu = class extends r {
	constructor(e) {
		super(), X(this, "_container"), this._container = e, this.onBeforeDelete.add(({ value: e }) => {
			this._container.remove(e.camera), e.dispose();
		});
	}
	create(e) {
		let t = new Vu(e);
		return this._container.add(t.camera), t.setContainer(this._container), this.set(t.uuid, t), t;
	}
}, Uu = class e extends P {
	constructor(n) {
		super(), X(this, "_drawing"), X(this, "_topFrame"), X(this, "_pillars"), X(this, "_bottomFrame"), X(this, "_topPlane"), X(this, "_bottomPlane"), X(this, "_frameMat"), X(this, "_depthMat"), X(this, "_planeMat"), X(this, "width", 10), X(this, "height", 10), X(this, "farHandle", new me()), X(this, "widthHandle", new me()), X(this, "heightHandle", new me()), this._drawing = n, this._frameMat = new Ee({
			color: e._FRAME_COLOR,
			depthTest: !1
		}), this._depthMat = new Ee({
			color: e._DEPTH_COLOR,
			depthTest: !1,
			transparent: !0,
			opacity: .4
		}), this._planeMat = new ae({
			color: e._FRAME_COLOR,
			transparent: !0,
			opacity: .07,
			side: 2,
			depthTest: !1
		});
		let r = () => {
			let e = new t();
			return e.setAttribute("position", new H(/* @__PURE__ */ new Float32Array(12), 3)), e.setIndex([
				0,
				1,
				2,
				0,
				2,
				3
			]), e;
		};
		this._topPlane = new Oe(r(), this._planeMat), this._topPlane.renderOrder = 998, this._topPlane.frustumCulled = !1, this._topPlane.userData.isDimension = !0, this._bottomPlane = new Oe(r(), this._planeMat), this._bottomPlane.renderOrder = 998, this._bottomPlane.frustumCulled = !1, this._bottomPlane.userData.isDimension = !0;
		let i = new t();
		i.setAttribute("position", new H(/* @__PURE__ */ new Float32Array(24), 3)), this._topFrame = new fe(i, this._frameMat), this._topFrame.renderOrder = 999, this._topFrame.frustumCulled = !1, this._topFrame.userData.isDimension = !0;
		let a = new t();
		a.setAttribute("position", new H(/* @__PURE__ */ new Float32Array(24), 3)), this._pillars = new fe(a, this._depthMat), this._pillars.renderOrder = 999, this._pillars.frustumCulled = !1, this._pillars.userData.isDimension = !0;
		let o = new t();
		o.setAttribute("position", new H(/* @__PURE__ */ new Float32Array(24), 3)), this._bottomFrame = new fe(o, this._depthMat), this._bottomFrame.renderOrder = 999, this._bottomFrame.frustumCulled = !1, this._bottomFrame.userData.isDimension = !0, this.add(this._topPlane, this._bottomPlane), this.add(this._topFrame, this._pillars, this._bottomFrame), this.add(this.farHandle, this.widthHandle, this.heightHandle), this.farHandle.rotation.x = Math.PI, this.update();
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
X(Uu, "_FRAME_COLOR", 22015), X(Uu, "_DEPTH_COLOR", 22015);
function Wu(e, t) {
	if (e.length !== 3 || t.length !== 3) throw Error("computeAlignmentMatrix requires exactly 3 point pairs.");
	let n = (e, t) => {
		let n = new U().subVectors(e[1], e[0]), r = new U().subVectors(e[2], e[0]);
		if (new U().crossVectors(n, r).length() < 1e-6) throw Error(`${t} points are collinear — three non-collinear points are required to define a plane.`);
	};
	n(e, "Drawing"), n(t, "World");
	let r = (e, t, n) => {
		let r = new U().subVectors(t, e), i = new U().subVectors(n, e), a = r.clone().normalize(), o = new U().crossVectors(r, i).normalize(), s = new U().crossVectors(a, o).normalize();
		return new V().makeBasis(a, o, s);
	}, a = r(e[0], e[1], e[2]), o = r(t[0], t[1], t[2]).clone().multiply(a.clone().invert()), s = e[0].distanceTo(e[1]);
	if (s < 1e-10) throw Error("The first two drawing points are coincident — cannot compute scale.");
	let c = t[0].distanceTo(t[1]) / s, l = e[0].clone().multiplyScalar(c).applyMatrix4(o), u = new U().subVectors(t[0], l), d = new i().setFromRotationMatrix(o), f = new V();
	return f.compose(u, d, new U(c, c, c)), f;
}
var Gu = class e {
	constructor(e) {
		X(this, "uuid", we.generateUUID()), X(this, "_raycaster", new c()), X(this, "_components"), X(this, "world", null), X(this, "three", new P()), X(this, "annotations", new Lu()), X(this, "layers", new Ru(this.three)), X(this, "activeLayer", "0"), X(this, "far", 10), X(this, "viewports", new Hu(this.three)), X(this, "onDisposed", new Z()), this._components = e;
	}
	raycast(e, t = null) {
		this._raycaster.set(e.origin, e.direction), this._raycaster.layers.set(1), this._raycaster.params.Line && (this._raycaster.params.Line.threshold = .1);
		let n = [];
		this.three.traverse((e) => {
			e instanceof fe && !e.userData.isDimension && n.push(e);
		});
		let r = this._raycaster.intersectObjects(n, !1);
		if (r.length === 0) return null;
		let i = r[0], a = this.three.worldToLocal(i.point.clone()), o = null;
		if (i.object instanceof fe && i.index !== void 0) {
			let e = i.object.geometry.attributes.position, t = i.index, n = new U(e.getX(t), e.getY(t), e.getZ(t)), r = new U(e.getX(t + 1), e.getY(t + 1), e.getZ(t + 1));
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
		Wu(e, t).decompose(this.three.position, this.three.quaternion, this.three.scale);
	}
	static toDrawingSpace(e, n) {
		e.updateWorldMatrix(!0, !1), n.three.updateWorldMatrix(!0, !1);
		let r = new V().copy(n.three.matrixWorld).invert().multiply(e.matrixWorld), i = e.geometry.attributes.position, a = i.count, o = new Float32Array(a * 3), s = new U();
		for (let e = 0; e < a; e++) s.fromBufferAttribute(i, e).applyMatrix4(r), o[e * 3] = s.x, o[e * 3 + 1] = 0, o[e * 3 + 2] = s.z;
		let c = new t();
		return c.setAttribute("position", new H(o, 3)), new fe(c);
	}
	addProjectionLines(e, t = "0") {
		return this.layers.has(t) || (console.warn(`[TechnicalDrawing] Layer "${t}" does not exist. Falling back to "0".`), t = "0"), this.layers.assign(e, t), e.layers.set(1), e.material instanceof ge && e.computeLineDistances(), e.geometry.computeBoundsTree({
			strategy: 0,
			indirect: !0,
			type: $o
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
		let r = this._components.get(Bc), a = r.projectionDirection.clone(), o = r.nearPlane, s = r.farPlane;
		try {
			this.three.updateWorldMatrix(!0, !1);
			let a = new U(0, -1, 0).transformDirection(this.three.matrixWorld).normalize();
			r.projectionDirection.copy(a);
			let o = new V().makeRotationFromQuaternion(new i().setFromUnitVectors(a, new U(0, -1, 0))), s = new U().setFromMatrixPosition(this.three.matrixWorld).applyMatrix4(o).y;
			r.farPlane = s, r.nearPlane = s - this.far;
			let c = await r.get(t, this.world, { onProgress: n.onProgress }), l = (t) => e.toDrawingSpace(new fe(t), this);
			this.addProjectionLines(l(c.visible), n.layers.visible), this.addProjectionLines(l(c.hidden), n.layers.hidden);
		} finally {
			r.projectionDirection.copy(a), r.nearPlane = o, r.farPlane = s;
		}
	}
	orientTo(e) {
		let t = e.clone().normalize(), n = Math.SQRT1_2;
		t.x > .999 ? this.three.quaternion.set(.5, -.5, .5, .5) : t.x < -.999 ? this.three.quaternion.set(.5, .5, -.5, .5) : t.y > .999 ? this.three.quaternion.set(0, 0, 1, 0) : t.y < -.999 ? this.three.quaternion.set(0, 0, 0, 1) : t.z > .999 ? this.three.quaternion.set(0, n, -n, 0) : t.z < -.999 ? this.three.quaternion.set(n, 0, 0, n) : console.warn("[TechnicalDrawing] orientTo: direction does not match any of the 6 standard axes.");
	}
	dispose() {
		this.viewports.clear(), this.layers.clear(), this.annotations.clear(), this._components.get(jt).destroy(this.three), this.onDisposed.trigger(), this.onDisposed.reset();
	}
}, Ku = class {
	constructor(e) {
		X(this, "styles", new r()), X(this, "activeStyle", "default"), X(this, "onCommit", new Z()), X(this, "onUpdate", new Z()), X(this, "onDelete", new Z()), X(this, "onDisposed", new Z()), X(this, "_knownDrawings", /* @__PURE__ */ new Set()), X(this, "_previewMaterial", new Ee({
			color: 16737894,
			depthTest: !1
		})), X(this, "_previewObject", null), X(this, "_previewDrawing", null), X(this, "_materialCache", new r()), X(this, "_meshMaterialCache", new r()), X(this, "_ownsChildGeometry", !0), this._components = e, this.styles.onItemUpdated.add(({ key: e }) => {
			let t = this._materialCache.get(e);
			t && t.color.setHex(this._resolveStyle(e).color);
			let n = this._meshMaterialCache.get(e);
			n && n.color.setHex(this._resolveStyle(e).color);
			let r = this._components.get(zd), i = r ? [...r.list.values()] : [...this._knownDrawings];
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
		let t = new r();
		for (let n of e) for (let [e, r] of n.annotations.getBySystem(this)) t.set(e, {
			drawingUuid: n.uuid,
			item: r
		});
		return t;
	}
	add(e, t) {
		let n = {
			uuid: we.generateUUID(),
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
		let r = new c();
		r.ray.copy(t), r.params.Line = { threshold: n }, r.params.LineSegments = { threshold: n };
		let i = e.prototype.raycast, a = null, o = Infinity;
		for (let e of this._knownDrawings) for (let [t, n] of e.annotations) {
			if (n.system !== this) continue;
			let e = n.three;
			e.updateWorldMatrix(!0, !0), e.traverse((n) => {
				if (n === e) return;
				let s = [];
				if (n instanceof fe && n.userData.isDimension) i.call(n, r, s), s.length > 0 && s[0].distance < o && (o = s[0].distance, a = t);
				else if (n instanceof Oe) {
					let e = new h().setFromObject(n), i = new U();
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
		let n = new Ee({ color: this._resolveStyle(e).color });
		return this._materialCache.set(e, n), n;
	}
	_getMeshMaterial(e) {
		let t = this._meshMaterialCache.get(e);
		if (t) return t;
		let n = new ae({
			color: this._resolveStyle(e).color,
			side: 2
		});
		return this._meshMaterialCache.set(e, n), n;
	}
	_disposeGroup(e) {
		if (e.removeFromParent(), this._ownsChildGeometry) e.traverse((e) => {
			e.geometry instanceof t && e.geometry.dispose();
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
	_redraw(e, n) {
		for (; n.children.length > 0;) {
			let e = n.children[0];
			this._ownsChildGeometry && e.geometry instanceof t && e.geometry.dispose(), n.remove(e);
		}
		let r = this._resolveStyle(e.style), i = this._buildGroup(e, r);
		for (; i.children.length > 0;) n.add(i.children[0]);
		this._onAfterPersist(e, n);
	}
};
function qu(e, t, n) {
	let r = e.clone().sub(t.start).dot(n);
	return t.start.clone().addScaledVector(n, r);
}
function Ju(e, t) {
	return Math.abs(e.dot(t)) > .999;
}
function Yu(e, t) {
	let n = 1e-6;
	return e.start.distanceTo(t.start) < n && e.end.distanceTo(t.end) < n || e.start.distanceTo(t.end) < n && e.end.distanceTo(t.start) < n;
}
function Xu(e, t) {
	let n = e[0], r = e[e.length - 1], i = new U().subVectors(r, n);
	if (i.lengthSq() < 1e-10) return 0;
	i.normalize();
	let a = new U(-i.z, 0, i.x);
	return t.clone().sub(n).dot(a);
}
function Zu(e, t) {
	let n = [];
	for (let r = 0; r < e.length - 1; r++) n.push({
		uuid: we.generateUUID(),
		pointA: e[r].clone(),
		pointB: e[r + 1].clone(),
		offset: t,
		style: ""
	});
	return n;
}
function Qu(e, t) {
	switch (e.kind) {
		case "awaitingFirstPoint":
			if (t.type === "CLICK") {
				if (!t.line) return e;
				let n = new U().subVectors(t.line.end, t.line.start).normalize();
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
				let n = new U(-e.lineDir.z, 0, e.lineDir.x), r = e.points[e.points.length - 1], i = t.point.clone().sub(r).dot(n), a = r.clone().addScaledVector(n, i);
				return {
					...e,
					cursor: a
				};
			}
			if (t.type === "CLICK") {
				if (!t.line || Yu(t.line, e.firstLine) || !Ju(new U().subVectors(t.line.end, t.line.start).normalize(), e.lineDir)) return e;
				let n = qu(e.points[0], t.line, e.lineDir), r = [...e.points, n];
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
				let n = Xu(e.points, t.point);
				return {
					kind: "committed",
					dimensions: Zu(e.points, n)
				};
			}
			return t.type === "ESCAPE" ? { kind: "awaitingFirstPoint" } : e;
		case "committed": return t.type === "ESCAPE" ? { kind: "awaitingFirstPoint" } : e;
	}
}
function $u(e) {
	let { pointA: t, pointB: n, offset: r } = e, i = new U().subVectors(n, t), a = new U(-i.z, 0, i.x).normalize(), o = t.clone().addScaledVector(a, r), s = n.clone().addScaledVector(a, r), c = new U().subVectors(s, o).normalize();
	return [{
		tip: o,
		dir: c
	}, {
		tip: s,
		dir: c.clone().negate()
	}];
}
function ed(e, t) {
	let { pointA: n, pointB: r, offset: i } = e, a = new U().subVectors(r, n), o = new U(-a.z, 0, a.x).normalize(), s = i >= 0 ? 1 : -1, c = Math.abs(i), l = n.clone().addScaledVector(o, t.extensionGap * s), u = n.clone().addScaledVector(o, (c + t.extensionOvershoot) * s), d = r.clone().addScaledVector(o, t.extensionGap * s), f = r.clone().addScaledVector(o, (c + t.extensionOvershoot) * s), p = n.clone().addScaledVector(o, i), m = r.clone().addScaledVector(o, i), h = new U().subVectors(m, p).normalize(), g = t.lineTick(p, h, t.tickSize), _ = t.lineTick(m, h.clone().negate(), t.tickSize);
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
function td(e, t, n, r) {
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
	let i = Xu(t, n), a = [];
	for (let e = 0; e < t.length - 1; e++) a.push(...ed({
		uuid: "",
		pointA: t[e],
		pointB: t[e + 1],
		offset: i,
		style: ""
	}, r));
	return a;
}
var nd = class extends Ku {
	constructor(e) {
		super(e), X(this, "enabled", !0), X(this, "machineState", { kind: "awaitingFirstPoint" }), X(this, "onMachineStateChanged", new Z()), this.styles.set("default", {
			lineTick: Nu,
			tickSize: .4,
			extensionGap: .05,
			extensionOvershoot: .2,
			color: 0,
			textOffset: .4,
			fontSize: .45
		});
	}
	pickHandle(e, t, n = .1) {
		let r = new V().copy(e.three.matrixWorld).invert(), i = new k(t.origin.clone().applyMatrix4(r), t.direction.clone().transformDirection(r).normalize()), a = new I(new U(0, 1, 0), 0), o = i.intersectPlane(a, new U());
		if (!o) return null;
		let s = null, c = n;
		for (let [t, n] of e.annotations.getBySystem(this)) {
			let e = new U().subVectors(n.pointB, n.pointA), r = new U(-e.z, 0, e.x).normalize(), i = new U().addVectors(n.pointA, n.pointB).multiplyScalar(.5).addScaledVector(r, n.offset);
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
		let n = Qu(this.machineState, e);
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
	_buildGroup(e, n) {
		let r = new P(), i = ed(e, n), a = new t();
		a.setAttribute("position", new H(new Float32Array(i), 3));
		let o = new fe(a, this._getMaterial(e.style));
		if (o.layers.set(1), o.userData.isDimension = !0, r.add(o), n.meshTick) for (let { tip: i, dir: a } of $u(e)) {
			let o = n.meshTick(i, a, n.tickSize), s = new t();
			s.setAttribute("position", new H(new Float32Array(o), 3));
			let c = new Oe(s, this._getMeshMaterial(e.style));
			c.layers.set(1), c.userData.isMeshTick = !0, r.add(c);
		}
		return r;
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
		let n = this._resolveStyle(this.activeStyle);
		this._previewMaterial.color.setHex(n.color);
		let r = td(e.kind, e.points, e.cursor, n);
		if (r.length === 0) {
			this._clearPreview();
			return;
		}
		let i = r.length / 3;
		if (!this._previewObject || this._previewObject.geometry.attributes.position.count !== i) {
			this._clearPreview();
			let e = new t();
			e.setAttribute("position", new H(new Float32Array(r), 3)), this._previewObject = new fe(e, this._previewMaterial), this._previewObject.layers.set(1), this._previewObject.renderOrder = 1, this._previewObject.userData.isDimension = !0, this._previewDrawing.three.add(this._previewObject);
		} else {
			let e = this._previewObject.geometry.attributes.position;
			e.set(r), e.needsUpdate = !0;
		}
	}
	_resetMachine() {
		this.machineState = { kind: "awaitingFirstPoint" }, this._previewDrawing = null, this._updatePreview(), this.onMachineStateChanged.trigger(this.machineState);
	}
}, rd = Math.PI / 180;
function id(e, t, n, r) {
	let i = t.x * r.z - t.z * r.x;
	if (Math.abs(i) < 1e-10) return null;
	let a = new U().subVectors(n, e), o = (a.x * r.z - a.z * r.x) / i;
	return new U(e.x + t.x * o, 0, e.z + t.z * o);
}
function ad(e, t, n) {
	let r = new U().subVectors(e, t).normalize(), i = new U().subVectors(n, t).normalize();
	return new U().addVectors(r, i).normalize();
}
function od(e, t, n, r) {
	let i = ad(e, t, n);
	return new U().subVectors(r, t).setY(0).dot(i);
}
function sd(e, t, n, r) {
	return od(e, t, n, r) < 0;
}
function cd(e, t) {
	switch (e.kind) {
		case "awaitingFirstLine": return t.type === "CLICK" && t.line ? {
			kind: "awaitingSecondLine",
			line1: t.line.clone(),
			pointA: t.point.clone()
		} : e;
		case "awaitingSecondLine":
			if (t.type === "CLICK" && t.line) {
				let n = new U().subVectors(e.line1.end, e.line1.start).normalize(), r = new U().subVectors(t.line.end, t.line.start).normalize();
				if (Math.abs(n.dot(r)) > Math.cos(rd)) return e;
				let i = id(e.line1.start, n, t.line.start, r);
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
				let n = sd(e.pointA, e.vertex, e.pointB, t.point);
				return {
					...e,
					cursor: t.point.clone(),
					flipped: n
				};
			}
			if (t.type === "CLICK") {
				let n = sd(e.pointA, e.vertex, e.pointB, t.point), r = Math.max(.05, Math.abs(od(e.pointA, e.vertex, e.pointB, t.point)));
				return {
					kind: "committed",
					dimension: {
						uuid: we.generateUUID(),
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
function ld(e) {
	let t = new U().subVectors(e.pointA, e.vertex).normalize(), n = new U().subVectors(e.pointB, e.vertex).normalize(), r = Math.atan2(t.z, t.x), i = Math.atan2(n.z, n.x) - r;
	for (; i > Math.PI;) i -= 2 * Math.PI;
	for (; i < -Math.PI;) i += 2 * Math.PI;
	e.flipped && (i -= Math.sign(i) * 2 * Math.PI);
	let a = new U(e.vertex.x + Math.cos(r) * e.arcRadius, 0, e.vertex.z + Math.sin(r) * e.arcRadius), o = r + i, s = new U(e.vertex.x + Math.cos(o) * e.arcRadius, 0, e.vertex.z + Math.sin(o) * e.arcRadius), c = Math.sign(i);
	return [{
		tip: a,
		dir: new U(-Math.sin(r) * c, 0, Math.cos(r) * c)
	}, {
		tip: s,
		dir: new U(Math.sin(o) * c, 0, -Math.cos(o) * c)
	}];
}
function ud(e) {
	let t = new U().subVectors(e.pointA, e.vertex).normalize(), n = new U().subVectors(e.pointB, e.vertex).normalize(), r = Math.acos(we.clamp(t.dot(n), -1, 1));
	return e.flipped ? 2 * Math.PI - r : r;
}
function dd(e) {
	let t = new U().subVectors(e.pointA, e.vertex).normalize(), n = new U().subVectors(e.pointB, e.vertex).normalize(), r = Math.atan2(t.z, t.x), i = Math.atan2(n.z, n.x) - r;
	for (; i > Math.PI;) i -= 2 * Math.PI;
	for (; i < -Math.PI;) i += 2 * Math.PI;
	let a = r + i / 2;
	return e.flipped ? a + Math.PI : a;
}
function fd(e, t, n, r, i, a = !1) {
	let o = Math.atan2(t.z, t.x), s = Math.atan2(n.z, n.x) - o;
	for (; s > Math.PI;) s -= 2 * Math.PI;
	for (; s < -Math.PI;) s += 2 * Math.PI;
	a && (s -= Math.sign(s) * 2 * Math.PI);
	let c = [];
	for (let t = 0; t < 8; t++) {
		let n = o + t / 8 * s, i = o + s * ((t + 1) / 8);
		c.push(e.x + Math.cos(n) * r, 0, e.z + Math.sin(n) * r, e.x + Math.cos(i) * r, 0, e.z + Math.sin(i) * r);
	}
	let l = new U(e.x + Math.cos(o) * r, 0, e.z + Math.sin(o) * r), u = new U(e.x + Math.cos(o + s) * r, 0, e.z + Math.sin(o + s) * r), d = e.clone().addScaledVector(t, i.extensionGap), f = e.clone().addScaledVector(n, i.extensionGap);
	c.push(d.x, d.y, d.z, l.x, l.y, l.z, f.x, f.y, f.z, u.x, u.y, u.z);
	let p = Math.sign(s), m = new U(-Math.sin(o) * p, 0, Math.cos(o) * p), h = o + s, g = new U(Math.sin(h) * p, 0, -Math.cos(h) * p);
	return c.push(...i.lineTick(l, m, i.tickSize), ...i.lineTick(u, g, i.tickSize)), c;
}
function pd(e, t) {
	let n = new U().subVectors(e.pointA, e.vertex).normalize(), r = new U().subVectors(e.pointB, e.vertex).normalize();
	return fd(e.vertex, n, r, e.arcRadius, t, e.flipped ?? !1);
}
function md(e, t, n, r, i, a = !1) {
	if (!r) return [];
	let o = Math.max(.05, new U().subVectors(r, t).setY(0).length());
	return fd(t, new U().subVectors(e, t).normalize(), new U().subVectors(n, t).normalize(), o, i, a);
}
var hd = class extends Ku {
	constructor(e) {
		super(e), X(this, "enabled", !0), X(this, "machineState", { kind: "awaitingFirstLine" }), X(this, "onMachineStateChanged", new Z()), X(this, "_secondLinePreviewObject", null), this.styles.set("default", {
			lineTick: Nu,
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
		let n = cd(this.machineState, e);
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
	_buildGroup(e, n) {
		let r = new P(), i = pd(e, n), a = new t();
		a.setAttribute("position", new H(new Float32Array(i), 3));
		let o = new fe(a, this._getMaterial(e.style));
		if (o.layers.set(1), o.userData.isDimension = !0, r.add(o), n.meshTick) for (let { tip: i, dir: a } of ld(e)) {
			let o = n.meshTick(i, a, n.tickSize), s = new t();
			s.setAttribute("position", new H(new Float32Array(o), 3));
			let c = new Oe(s, this._getMeshMaterial(e.style));
			c.layers.set(1), c.userData.isMeshTick = !0, r.add(c);
		}
		return r;
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
		let n = this._resolveStyle(this.activeStyle), r = md(e.pointA, e.vertex, e.pointB, e.cursor, n, e.flipped);
		if (r.length === 0) {
			this._clearPreview();
			return;
		}
		let i = r.length / 3;
		if (!this._previewObject || this._previewObject.geometry.attributes.position.count !== i) {
			this._clearPreview();
			let e = new t();
			e.setAttribute("position", new H(new Float32Array(r), 3)), this._previewObject = new fe(e, this._previewMaterial), this._previewObject.layers.set(1), this._previewObject.renderOrder = 1, this._previewObject.userData.isDimension = !0, this._previewDrawing.three.add(this._previewObject);
		} else {
			let e = this._previewObject.geometry.attributes.position;
			e.set(r), e.needsUpdate = !0;
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
	_updateSecondLinePreview(e, n) {
		if (this.machineState.kind !== "awaitingSecondLine") {
			this._clearSecondLinePreview();
			return;
		}
		if (!this._previewDrawing) {
			this._clearSecondLinePreview();
			return;
		}
		let r = this.machineState, i = new U().subVectors(r.line1.end, r.line1.start).normalize();
		if (!n) {
			this._clearSecondLinePreview();
			return;
		}
		let a = new U().subVectors(n.end, n.start).normalize(), o = gd(r.line1.start, i, n.start, a);
		if (!o) {
			this._clearSecondLinePreview();
			return;
		}
		let s = e.clone(), c = new U().subVectors(s, o).setY(0);
		if (c.length() < .01) {
			this._clearSecondLinePreview();
			return;
		}
		let l = new U().subVectors(r.pointA, o).normalize(), u = c.normalize(), d = Math.atan2(l.z, l.x), f = Math.atan2(u.z, u.x) - d;
		for (; f > Math.PI;) f -= 2 * Math.PI;
		for (; f < -Math.PI;) f += 2 * Math.PI;
		let p = d + f / 2, m = Math.max(.1, Math.min(r.pointA.distanceTo(o), s.distanceTo(o)) * .4), h = new U(o.x + Math.cos(p) * m, 0, o.z + Math.sin(p) * m), g = this._resolveStyle(this.activeStyle), _ = md(r.pointA, o, s, h, g);
		if (_.length === 0) {
			this._clearSecondLinePreview();
			return;
		}
		let v = _.length / 3;
		if (!this._secondLinePreviewObject || this._secondLinePreviewObject.geometry.attributes.position.count !== v) {
			this._clearSecondLinePreview();
			let e = new t();
			e.setAttribute("position", new H(new Float32Array(_), 3)), this._secondLinePreviewObject = new fe(e, this._previewMaterial), this._secondLinePreviewObject.layers.set(1), this._secondLinePreviewObject.renderOrder = 1, this._secondLinePreviewObject.userData.isDimension = !0, this._previewDrawing.three.add(this._secondLinePreviewObject);
		} else {
			let e = this._secondLinePreviewObject.geometry.attributes.position;
			e.set(_), e.needsUpdate = !0;
		}
	}
};
function gd(e, t, n, r) {
	let i = t.x * r.z - t.z * r.x;
	if (Math.abs(i) < 1e-6) return null;
	let a = n.x - e.x, o = n.z - e.z, s = (a * r.z - o * r.x) / i;
	return new U(e.x + s * t.x, 0, e.z + s * t.z);
}
function _d(e, t) {
	let n = t.x - e.x, r = t.z - e.z, i = Math.sqrt(n * n + r * r);
	if (i === 0) return e.clone();
	let a = Math.round(Math.atan2(r, n) / (Math.PI / 4)) * (Math.PI / 4);
	return new U(e.x + Math.cos(a) * i, 0, e.z + Math.sin(a) * i);
}
function vd(e, t) {
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
			cursor: _d(e.elbow, t.point)
		} : t.type === "CLICK" ? {
			kind: "enteringText",
			arrowTip: e.arrowTip,
			elbow: e.elbow,
			extensionEnd: _d(e.elbow, t.point)
		} : t.type === "ESCAPE" ? { kind: "awaitingArrowTip" } : e;
		case "enteringText": return t.type === "SUBMIT_TEXT" && t.text.trim().length > 0 ? {
			kind: "committed",
			annotation: {
				uuid: we.generateUUID(),
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
var yd = 24;
function bd(e, t, n, r) {
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
		let n = new U().subVectors(e, t);
		n.lengthSq() > 1e-10 && i.push(...r.lineTick(e, n.normalize(), r.tickSize));
	}
	return i;
}
function xd(e, t, n, r) {
	let i = new D(e, t, n).getPoints(yd), a = [];
	for (let e = 0; e < i.length - 1; e++) {
		let t = i[e], n = i[e + 1];
		a.push(t.x, t.y, t.z, n.x, n.y, n.z);
	}
	if (r.lineTick) {
		let n = new U().subVectors(e, t);
		n.lengthSq() > 1e-10 && a.push(...r.lineTick(e, n.normalize(), r.tickSize));
	}
	return a;
}
function Sd(e, t, n, r) {
	return r.leaderShape === "curved" ? xd(e, t, n, r) : bd(e, t, n, r);
}
function Cd(e, t) {
	return Sd(e.arrowTip, e.elbow, e.extensionEnd, t);
}
function wd(e, t, n, r, i) {
	return r ? e === "placingElbow" ? Sd(t, r, r, i) : Sd(t, n, r, i) : [];
}
var Td = class extends Ku {
	constructor(e) {
		super(e), X(this, "enabled", !0), X(this, "machineState", { kind: "awaitingArrowTip" }), X(this, "onMachineStateChanged", new Z()), X(this, "_previewMeshMaterial", new ae({
			color: 16737894,
			side: 2,
			depthTest: !1
		})), X(this, "_previewMeshObject", null), this.styles.set("default", {
			tickSize: .4,
			color: 0,
			textOffset: .1,
			fontSize: .45,
			lineTick: Pu
		});
	}
	pickHandle(e, t, n = .1) {
		let r = new V().copy(e.three.matrixWorld).invert(), i = new k(t.origin.clone().applyMatrix4(r), t.direction.clone().transformDirection(r).normalize()), a = new I(new U(0, 1, 0), 0), o = i.intersectPlane(a, new U());
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
		let n = vd(this.machineState, e);
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
	_buildGroup(e, n) {
		let r = new P(), i = Cd(e, n), a = new t();
		a.setAttribute("position", new H(new Float32Array(i), 3));
		let o = new fe(a, this._getMaterial(e.style));
		if (o.layers.set(1), o.userData.isDimension = !0, r.add(o), n.meshTick) {
			let i = new U().subVectors(e.arrowTip, e.elbow);
			if (i.lengthSq() > 1e-10) {
				i.normalize();
				let a = n.meshTick(e.arrowTip, i, n.tickSize), o = new t();
				o.setAttribute("position", new H(new Float32Array(a), 3));
				let s = new Oe(o, this._getMeshMaterial(e.style));
				s.layers.set(1), s.userData.isMeshArrow = !0, r.add(s);
			}
		}
		return r;
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
		let n = this._resolveStyle(this.activeStyle), r = e.kind === "placingElbow" ? wd("placingElbow", e.arrowTip, null, e.cursor, n) : wd("placingExtension", e.arrowTip, e.elbow, e.cursor, n);
		if (r.length === 0) {
			this._clearPreview();
			return;
		}
		let i = r.length / 3;
		if (!this._previewObject || this._previewObject.geometry.attributes.position.count !== i) {
			this._clearPreview();
			let e = new t();
			e.setAttribute("position", new H(new Float32Array(r), 3)), this._previewObject = new fe(e, this._previewMaterial), this._previewObject.layers.set(1), this._previewObject.renderOrder = 1, this._previewObject.frustumCulled = !1, this._previewObject.userData.isDimension = !0, this._previewDrawing.three.add(this._previewObject);
		} else {
			let e = this._previewObject.geometry.attributes.position;
			e.set(r), e.needsUpdate = !0;
		}
		if (n.meshTick) {
			let r = e.kind === "placingElbow" ? e.cursor : e.elbow, i = r ? new U().subVectors(e.arrowTip, r) : null;
			if (i && i.lengthSq() > 1e-10) {
				i.normalize();
				let r = n.meshTick(e.arrowTip, i, n.tickSize);
				if (this._previewMeshObject) {
					let e = this._previewMeshObject.geometry.attributes.position;
					e.set(r), e.needsUpdate = !0;
				} else {
					let e = new t();
					e.setAttribute("position", new H(new Float32Array(r), 3)), this._previewMeshObject = new Oe(e, this._previewMeshMaterial), this._previewMeshObject.layers.set(1), this._previewMeshObject.renderOrder = 1, this._previewMeshObject.frustumCulled = !1, this._previewDrawing.three.add(this._previewMeshObject);
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
}, Ed = class extends Ku {
	constructor(e) {
		super(e), X(this, "enabled", !0), X(this, "_ownsChildGeometry", !1), X(this, "definitions", new r()), this.styles.set("default", {
			color: 0,
			textOffset: 0,
			fontSize: 0
		});
	}
	pickHandle(e, t, n) {
		return null;
	}
	pick(e, t = .05) {
		let n = new c();
		n.ray.copy(e), n.params.Line = { threshold: t }, n.params.LineSegments = { threshold: t };
		let r = null, i = Infinity;
		for (let e of this._knownDrawings) for (let [t, a] of e.annotations) {
			if (a.system !== this) continue;
			let e = a.three;
			e.updateWorldMatrix(!0, !0), e.traverse((a) => {
				if (a === e || !(a instanceof fe)) return;
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
		let r = new P();
		if (n.lines) {
			let t = new fe(n.lines, this._getMaterial(e.style));
			t.layers.set(1), t.userData.isDimension = !0, r.add(t);
		}
		if (n.mesh) {
			let t = new Oe(n.mesh, this._getMeshMaterial(e.style));
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
function Dd(e, t) {
	let { position: n, direction: r } = e, { length: i } = t, a = new U(n.x + r.x * i, 0, n.z + r.z * i), o = new U(r.x, 0, r.z), s = t.lineTick(a, o, t.tickSize), c = [
		n.x,
		0,
		n.z,
		a.x,
		0,
		a.z
	];
	return new Float32Array([...c, ...s]);
}
function Od(e, t) {
	return new U(e.position.x + e.direction.x * t, 0, e.position.z + e.direction.z * t);
}
function kd(e, t) {
	switch (t) {
		case "percentage": return `${(e * 100).toFixed(2)} %`;
		case "ratio": return e === 0 ? "1:∞" : `1:${(1 / e).toFixed(2)}`;
		case "degrees": return `${(Math.atan(e) * 180 / Math.PI).toFixed(2)}°`;
	}
}
var Ad = class extends Ku {
	constructor(e) {
		super(e), X(this, "enabled", !0), this.styles.set("default", {
			lineTick: Fu,
			meshTick: Iu,
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
	_buildGroup(e, n) {
		let r = new P(), i = Dd(e, n), a = new t();
		a.setAttribute("position", new H(i, 3));
		let o = new fe(a, this._getMaterial(e.style));
		if (o.layers.set(1), o.userData.isDimension = !0, r.add(o), n.meshTick) {
			let i = Od(e, n.length), a = n.meshTick(i, e.direction, n.tickSize), o = new t();
			o.setAttribute("position", new H(new Float32Array(a), 3));
			let s = new Oe(o, this._getMeshMaterial(e.style));
			s.layers.set(1), s.userData.isDimension = !0, r.add(s);
		}
		return r;
	}
};
function jd(e, t) {
	let n = t.x - e.x, r = t.z - e.z, i = Math.sqrt(n * n + r * r);
	if (i === 0) return e.clone();
	let a = Math.round(Math.atan2(r, n) / (Math.PI / 4)) * (Math.PI / 4);
	return new U(e.x + Math.cos(a) * i, 0, e.z + Math.sin(a) * i);
}
function Md(e, t) {
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
			cursor: jd(e.elbow, t.point)
		} : t.type === "CLICK" ? {
			kind: "enteringText",
			center: e.center,
			halfW: e.halfW,
			halfH: e.halfH,
			elbow: e.elbow,
			extensionEnd: jd(e.elbow, t.point)
		} : t.type === "ESCAPE" ? { kind: "awaitingCenter" } : e;
		case "enteringText": return t.type === "SUBMIT_TEXT" && t.text.trim().length > 0 ? {
			kind: "committed",
			annotation: {
				uuid: we.generateUUID(),
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
function Nd(e, t) {
	let n = [];
	n.push(...t.enclosure.buildGeometry(e.center, e.halfW, e.halfH));
	let r = new U().subVectors(e.elbow, e.center), i = r.lengthSq() > 1e-10 ? r.clone().normalize() : new U(1, 0, 0), a = t.enclosure.getAttachmentPoint(e.center, e.halfW, e.halfH, i);
	if (n.push(a.x, a.y, a.z, e.elbow.x, e.elbow.y, e.elbow.z, e.elbow.x, e.elbow.y, e.elbow.z, e.extensionEnd.x, e.extensionEnd.y, e.extensionEnd.z), t.lineTick) {
		let r = new U().subVectors(e.extensionEnd, e.elbow);
		r.lengthSq() > 1e-10 && n.push(...t.lineTick(e.extensionEnd, r.normalize(), t.tickSize));
	}
	return n;
}
function Pd(e, t, n, r, i, a, o) {
	let s = e === "awaitingRadius" ? a ? Math.max(.05, Math.abs(a.x - t.x)) : 0 : n, c = e === "awaitingRadius" ? a ? Math.max(.05, Math.abs(a.z - t.z)) : 0 : r;
	if (s < 1e-10 || c < 1e-10) return [];
	let l = [];
	if (l.push(...o.enclosure.buildGeometry(t, s, c)), e === "awaitingRadius") return l;
	let u = e === "awaitingElbow" ? a : i;
	if (!u) return l;
	let d = new U().subVectors(u, t), f = d.lengthSq() > 1e-10 ? d.clone().normalize() : new U(1, 0, 0), p = o.enclosure.getAttachmentPoint(t, s, c, f);
	return e === "awaitingElbow" ? (l.push(p.x, 0, p.z, u.x, 0, u.z), l) : (a && l.push(p.x, 0, p.z, i.x, 0, i.z, i.x, 0, i.z, a.x, 0, a.z), l);
}
var Fd = 8, Id = {
	buildGeometry(e, t, n) {
		let r = Math.min(t, n) * .25, i = new U(e.x - t, 0, e.z - n), a = new U(e.x + t, 0, e.z - n), o = new U(e.x + t, 0, e.z + n), s = new U(e.x - t, 0, e.z + n), c = [
			[
				i,
				a,
				new U(0, 0, -1)
			],
			[
				a,
				o,
				new U(1, 0, 0)
			],
			[
				o,
				s,
				new U(0, 0, 1)
			],
			[
				s,
				i,
				new U(-1, 0, 0)
			]
		], l = [];
		for (let [e, t, n] of c) {
			let i = e.distanceTo(t), a = Math.max(1, Math.round(i / (2 * r))), o = i / a, s = o / 2, c = new U().subVectors(t, e).normalize();
			for (let t = 0; t < a; t++) {
				let r = e.clone().addScaledVector(c, (t + .5) * o), i = e.clone().addScaledVector(c, t * o), a = new U().subVectors(i, r), u = i.clone();
				for (let e = 1; e <= Fd; e++) {
					let t = e / Fd * Math.PI, i = new U(r.x + a.x * Math.cos(t) + n.x * s * Math.sin(t), 0, r.z + a.z * Math.cos(t) + n.z * s * Math.sin(t));
					l.push(u.x, 0, u.z, i.x, 0, i.z), u = i;
				}
			}
		}
		return l;
	},
	getAttachmentPoint(e, t, n, r) {
		let i = Math.abs(r.x) > 1e-10 ? t / Math.abs(r.x) : Infinity, a = Math.abs(r.z) > 1e-10 ? n / Math.abs(r.z) : Infinity, o = Math.min(i, a);
		return new U(e.x + r.x * o, 0, e.z + r.z * o);
	}
}, Ld = class extends Ku {
	constructor(e) {
		super(e), X(this, "enabled", !0), X(this, "machineState", { kind: "awaitingCenter" }), X(this, "onMachineStateChanged", new Z()), this.styles.set("default", {
			enclosure: Id,
			lineTick: Pu,
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
		let n = Md(this.machineState, e);
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
	_buildGroup(e, n) {
		let r = new P(), i = Nd(e, n), a = new t();
		a.setAttribute("position", new H(new Float32Array(i), 3));
		let o = new fe(a, this._getMaterial(e.style));
		if (o.layers.set(1), o.userData.isDimension = !0, r.add(o), n.meshTick) {
			let i = new U().subVectors(e.extensionEnd, e.elbow);
			if (i.lengthSq() > 1e-10) {
				i.normalize();
				let a = n.meshTick(e.extensionEnd, i, n.tickSize), o = new t();
				o.setAttribute("position", new H(new Float32Array(a), 3));
				let s = new Oe(o, this._getMeshMaterial(e.style));
				s.layers.set(1), s.userData.isMeshArrow = !0, r.add(s);
			}
		}
		return r;
	}
	_updatePreview() {
		let e = this.machineState;
		if (e.kind !== "awaitingRadius" && e.kind !== "awaitingElbow" && e.kind !== "awaitingExtension") {
			this._clearPreview();
			return;
		}
		if (!this._previewDrawing) return;
		let n = this._resolveStyle(this.activeStyle), r = (() => {
			switch (e.kind) {
				case "awaitingRadius": return Pd("awaitingRadius", e.center, 0, 0, null, e.cursor, n);
				case "awaitingElbow": return Pd("awaitingElbow", e.center, e.halfW, e.halfH, null, e.cursor, n);
				case "awaitingExtension": return Pd("awaitingExtension", e.center, e.halfW, e.halfH, e.elbow, e.cursor, n);
			}
		})();
		if (r.length === 0) {
			this._clearPreview();
			return;
		}
		let i = r.length / 3;
		if (!this._previewObject || this._previewObject.geometry.attributes.position.count !== i) {
			this._clearPreview();
			let e = new t();
			e.setAttribute("position", new H(new Float32Array(r), 3)), this._previewObject = new fe(e, this._previewMaterial), this._previewObject.layers.set(1), this._previewObject.renderOrder = 1, this._previewObject.frustumCulled = !1, this._previewObject.userData.isDimension = !0, this._previewDrawing.three.add(this._previewObject);
		} else {
			let e = this._previewObject.geometry.attributes.position;
			e.set(r), e.needsUpdate = !0;
		}
	}
	_resetMachine() {
		this.machineState = { kind: "awaitingCenter" }, this._clearPreview(), this._previewDrawing = null, this.onMachineStateChanged.trigger(this.machineState);
	}
}, Rd = class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "list", new r()), X(this, "systems", new r()), X(this, "onDisposed", new Z()), t.add(e.uuid, this), this.list.onBeforeDelete.add(({ value: e }) => e.dispose()), this.systems.onBeforeDelete.add(({ value: e }) => e.dispose());
	}
	use(e) {
		if (this.systems.has(e)) return this.systems.get(e);
		let t = new e(this.components);
		return this.systems.set(e, t), t;
	}
	create(e) {
		let t = new Gu(this.components);
		t.world = e, e.scene.three.add(t.three), e.onDisposed.add(() => this.list.delete(t.uuid));
		let n = e.camera;
		return n.three.layers.enable(1), n instanceof Wl && (n.threePersp.layers.enable(1), n.threeOrtho.layers.enable(1)), this.list.set(t.uuid, t), t;
	}
	dispose() {
		this.list.clear(), this.systems.clear(), this.onDisposed.trigger(), this.onDisposed.reset();
	}
};
X(Rd, "uuid", "5c7d3b9a-4e8f-4a2b-9c1d-0e3f2a5b7c8d");
var zd = Rd, Bd = [
	[16711680, 1],
	[16776960, 2],
	[65280, 3],
	[65535, 4],
	[255, 5],
	[16711935, 6],
	[16777215, 7],
	[0, 7]
];
function Vd(e) {
	let t = e >> 16 & 255, n = e >> 8 & 255, r = e & 255, i = 7, a = Infinity;
	for (let [e, o] of Bd) {
		let s = (t - (e >> 16 & 255)) ** 2 + (n - (e >> 8 & 255)) ** 2 + (r - (e & 255)) ** 2;
		s < a && (a = s, i = o);
	}
	return i;
}
var Hd = "\0HANDSEED\0", Ud = class {
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
		return this._lines.push("9", "$HANDSEED", "5", Hd), this;
	}
	build() {
		return (this._lines.join("\n") + "\n").replace(Hd, this._handleCounter.toString(16).toUpperCase());
	}
}, Wd = class {
	constructor(e) {
		X(this, "precision", 2), X(this, "config", { trueColor: !1 }), X(this, "_viewport", null), X(this, "_paperSlot", null), X(this, "_annotationLayers", /* @__PURE__ */ new Map()), X(this, "_systemExporters", /* @__PURE__ */ new Map()), this._components = e;
	}
	registerSystemExporter(e, t) {
		this._systemExporters.set(e, t);
	}
	export(e, t) {
		let n = !!t, r = new Ud(), i = /* @__PURE__ */ new Map();
		for (let t of e) for (let e of t.drawing.layers.values()) i.has(e.name) || i.set(e.name, e);
		let a = [...i.values()], o = this._components.get(zd).systems.get(Ed), s = o ? [...o.definitions.keys()] : [];
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
			let t = Vd(n.material.color.getHex());
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
			if (!(t instanceof fe) || t.userData.isDimension || t.parent?.userData.blockUuid || !t.visible) return;
			let n = t.userData.layer ?? "0", r = t.material.color.getHex();
			this._writeGeoAsLines(e, t.geometry, n, Vd(r), r);
		});
	}
	_writeLinearAnnotations(e, t) {
		let n = this._components.get(zd).systems.get(nd);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			let i = n.styles.get(r.style) ?? n.styles.get("default"), a = Vd(i.color), o = this._annotationLayers.get(r.uuid) ?? "0";
			if (t.layers.get(o)?.visible === !1) continue;
			let s = ed(r, i);
			if (!this._fullyInViewport(this._bboxFromPositions(s))) continue;
			if (this._writePairsAsLines(e, s, o, a, i.color), i.meshTick) for (let { tip: t, dir: n } of $u(r)) this._writeMeshTriangles(e, i.meshTick(t, n, i.tickSize), o, a, i.color);
			let c = new U().subVectors(r.pointB, r.pointA), l = new U(-c.z, 0, c.x).normalize(), u = r.offset >= 0 ? 1 : -1, d = r.pointA.clone().addScaledVector(l, r.offset), f = r.pointB.clone().addScaledVector(l, r.offset), p = d.clone().add(f).multiplyScalar(.5).addScaledVector(l, (i.textOffset + i.fontSize * .5) * u), m = i.unit ?? {
				factor: 1,
				suffix: "m"
			}, h = `${(r.pointA.distanceTo(r.pointB) * m.factor).toFixed(this.precision)} ${m.suffix}`;
			this._writeText(e, h, p.x, p.z, i.fontSize, o, a, this._textAngle(c.x, c.z), 1, 2, i.color);
		}
	}
	_writeAngleAnnotations(e, t) {
		let n = this._components.get(zd).systems.get(hd);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			let i = n.styles.get(r.style) ?? n.styles.get("default"), a = Vd(i.color), o = this._annotationLayers.get(r.uuid) ?? "0";
			if (t.layers.get(o)?.visible === !1) continue;
			let s = pd(r, i);
			if (!this._fullyInViewport(this._bboxFromPositions(s))) continue;
			if (this._writePairsAsLines(e, s, o, a, i.color), i.meshTick) for (let { tip: t, dir: n } of ld(r)) this._writeMeshTriangles(e, i.meshTick(t, n, i.tickSize), o, a, i.color);
			let c = dd(r), l = r.arcRadius + i.textOffset, u = r.vertex.x + Math.cos(c) * l, d = r.vertex.z + Math.sin(c) * l, f = we.radToDeg(ud(r));
			this._writeText(e, `${f.toFixed(this.precision)}°`, u, d, i.fontSize, o, a, 0, 1, 0, i.color);
		}
	}
	_writeLeaderAnnotations(e, t) {
		let n = this._components.get(zd).systems.get(Td);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			let i = n.styles.get(r.style) ?? n.styles.get("default"), a = Vd(i.color), o = this._annotationLayers.get(r.uuid) ?? "0";
			if (t.layers.get(o)?.visible === !1) continue;
			let s = Cd(r, i);
			if (!this._fullyInViewport(this._bboxFromPositions(s))) continue;
			if (this._writePairsAsLines(e, s, o, a, i.color), i.meshTick) {
				let t = new U().subVectors(r.arrowTip, r.elbow);
				t.lengthSq() > 1e-10 && this._writeMeshTriangles(e, i.meshTick(r.arrowTip, t.normalize(), i.tickSize), o, a, i.color);
			}
			let c = new U().subVectors(r.extensionEnd, r.elbow).setY(0).normalize(), l = c.x < -.1 ? 2 : c.x > .1 ? 0 : 1, u = l === 1 ? i.fontSize * .5 : 0, d = r.extensionEnd.clone().addScaledVector(c, i.textOffset + u);
			this._writeText(e, r.text, d.x, d.z, i.fontSize, o, a, 0, l, 2, i.color);
		}
	}
	_writeSlopeAnnotations(e, t) {
		let n = this._components.get(zd).systems.get(Ad);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			let i = n.styles.get(r.style) ?? n.styles.get("default"), a = Vd(i.color), o = this._annotationLayers.get(r.uuid) ?? "0";
			if (t.layers.get(o)?.visible === !1) continue;
			let s = Dd(r, i);
			if (!this._fullyInViewport(this._bboxFromPositions(s))) continue;
			if (this._writePairsAsLines(e, s, o, a, i.color), i.meshTick) {
				let t = Od(r, i.length);
				this._writeMeshTriangles(e, i.meshTick(t, r.direction, i.tickSize), o, a, i.color);
			}
			let c = new U(r.position.x + r.direction.x * i.length, 0, r.position.z + r.direction.z * i.length), l = r.position.clone().add(c).multiplyScalar(.5).addScaledVector(new U(-r.direction.z, 0, r.direction.x), i.textOffset + i.fontSize);
			this._writeText(e, kd(r.slope, i.format), l.x, l.z, i.fontSize, o, a, this._textAngle(r.direction.x, r.direction.z), 1, 0, i.color);
		}
	}
	_writeCalloutAnnotations(e, t) {
		let n = this._components.get(zd).systems.get(Ld);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			let i = n.styles.get(r.style) ?? n.styles.get("default"), a = Vd(i.color), o = this._annotationLayers.get(r.uuid) ?? "0";
			if (t.layers.get(o)?.visible === !1) continue;
			let s = Nd(r, i);
			if (!this._fullyInViewport(this._bboxFromPositions(s))) continue;
			if (this._writePairsAsLines(e, s, o, a, i.color), i.meshTick) {
				let t = new U().subVectors(r.extensionEnd, r.elbow);
				t.lengthSq() > 1e-10 && this._writeMeshTriangles(e, i.meshTick(r.extensionEnd, t.normalize(), i.tickSize), o, a, i.color);
			}
			let c = new U().subVectors(r.extensionEnd, r.elbow).setY(0).normalize(), l = c.x < -.1 ? 2 : c.x > .1 ? 0 : 1, u = l === 1 ? i.fontSize * .5 : 0, d = r.extensionEnd.clone().addScaledVector(c, i.textOffset + u);
			this._writeText(e, r.text, d.x, d.z, i.fontSize, o, a, 0, l, 2, i.color);
		}
	}
	_writeBlockInsertions(e, t) {
		let n = this._components.get(zd).systems.get(Ed);
		if (n) for (let [, r] of t.annotations.getBySystem(n)) {
			if (!this._inViewport(r.position.x, r.position.z)) continue;
			let t = n.styles.get(r.style) ?? n.styles.get("default"), i = Vd(t.color), a = -we.radToDeg(r.rotation), o = r.scale * this._scale();
			e.entityHeader("INSERT", "0", i), this._emitTrueColor(e, t.color), e.p(100, "AcDbBlockReference").p(2, r.blockName).n(10, this._tx(r.position.x)).n(20, this._ty(r.position.z)).n(30, 0).n(41, o).n(42, o).n(43, o).n(50, a);
		}
	}
	_writeGeoAsLines(e, t, n, r = 7, i) {
		let a = t.attributes.position;
		if (a) for (let t = 0; t + 1 < a.count; t += 2) {
			let o = this._clipSegment(new U(a.getX(t), 0, a.getZ(t)), new U(a.getX(t + 1), 0, a.getZ(t + 1)));
			o && this._writeLine(e, o.start.x, o.start.z, o.end.x, o.end.z, n, r, i);
		}
	}
	_writePairsAsLines(e, t, n, r = 7, i) {
		for (let a = 0; a + 5 < t.length; a += 6) {
			let o = this._clipSegment(new U(t[a], 0, t[a + 2]), new U(t[a + 3], 0, t[a + 5]));
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
		return !this._viewport || this._viewport.bbox.containsPoint(new U(e, 0, t));
	}
	_bboxFromPositions(e) {
		let t = new h();
		for (let n = 0; n + 2 < e.length; n += 3) t.expandByPoint(new U(e[n], 0, e[n + 2]));
		return t;
	}
	_fullyInViewport(e) {
		return !this._viewport || this._viewport.bbox.containsBox(e);
	}
	_textAngle(e, t) {
		let n = Math.atan2(-t, e);
		return (n > Math.PI / 2 || n <= -Math.PI / 2) && (n += Math.PI), we.radToDeg(n);
	}
	_writeCustomSystems(e, t) {
		if (this._systemExporters.size === 0) return;
		let n = this._makeContext(e);
		for (let [e, t] of this._systemExporters) {
			let r = this._components.get(zd).systems.get(e);
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
			hexToAci: Vd,
			textAngle: (e, t) => this._textAngle(e, t)
		};
	}
};
X(class e extends Et {
	constructor(t) {
		super(t), X(this, "enabled", !0), X(this, "exporter", new Wd(this.components)), t.add(e.uuid, this);
	}
}, "uuid", "e9a2c3d4-5f67-4b89-a012-1c3d5e7f9b2a");
//#endregion
//#region src/ifc-viewer.js
var Gd = document.querySelector("#viewer-container"), Kd = document.querySelector("#viewer-loading"), qd = document.querySelector("#loading-progress"), Jd = document.querySelector("#viewer-error"), Yd = document.querySelector("#viewer-error-message"), Xd = document.querySelector("#fit-model"), Zd = document.querySelector("#reset-view"), Qd = document.querySelector("#fullscreen-view"), $d = document.querySelector("#hide-selected"), ef = document.querySelector("#isolate-selected"), tf = document.querySelector("#show-all"), nf = document.querySelector("#place-section"), rf = document.querySelector("#clear-section"), af = document.querySelector("#properties-panel"), of = document.querySelector("#properties-title"), sf = document.querySelector("#properties-content"), cf = document.querySelector("#close-properties");
if (!(Gd instanceof HTMLElement)) throw Error("Viewer container was not found.");
var lf = document.body.dataset.modelId, uf = document.body.dataset.fragmentsSrc;
if (!lf || !uf) throw Error("The prepared model source was not configured.");
var df = window.matchMedia("(max-width: 680px), (pointer: coarse)").matches, ff = new A("#ff8a5b"), pf, mf, hf, gf = null, _f = null, vf = null, yf = null, bf = {}, xf = !1, Sf = 0, Cf = null, wf = !1;
function Tf(e) {
	if (!(qd instanceof HTMLElement)) return;
	let t = Number.isFinite(e) ? Math.max(0, Math.min(1, e > 1 ? e / 100 : e)) : .08;
	qd.style.width = `${Math.max(8, t * 100)}%`;
}
function Ef(e) {
	console.error(e), Kd?.classList.add("is-hidden"), Jd instanceof HTMLElement && (Jd.hidden = !1), Yd instanceof HTMLElement && (Yd.textContent = e instanceof Error ? e.message : "An unknown viewer error occurred.");
}
function Df(e) {
	return Object.fromEntries(Object.entries(e || {}).map(([e, t]) => [e, new Set(t)]));
}
function Of(e = bf) {
	return Object.values(e).reduce((e, t) => e + t.size, 0);
}
function kf(e) {
	$d instanceof HTMLButtonElement && ($d.disabled = !e), ef instanceof HTMLButtonElement && (ef.disabled = !e);
}
function Af() {
	bf = {}, kf(!1), af?.classList.add("is-collapsed");
}
function jf(e) {
	return e && typeof e == "object" && "value" in e ? e.value : e;
}
function Mf(e, t) {
	if (!(sf instanceof HTMLElement) || t == null || t === "") return;
	let n = document.createElement("div");
	n.className = "property-row";
	let r = document.createElement("span");
	r.textContent = e;
	let i = document.createElement("strong");
	i.textContent = String(t), n.append(r, i), sf.append(n);
}
async function Nf(e) {
	if (df || !(sf instanceof HTMLElement)) return;
	let t = ++Sf, n = Object.entries(e);
	if (!n.length) return;
	let [r, i] = n[0], a = [...i][0], o = mf?.list?.get(r);
	if (!(!o || a === void 0)) {
		af?.classList.remove("is-collapsed"), sf.replaceChildren(), of instanceof HTMLElement && (of.textContent = Of(e) > 1 ? `${Of(e)} Elements` : "Selected Element"), Mf("Model", r), Mf("Local ID", a);
		try {
			let [e] = await o.getItemsData([a], { attributesDefault: !0 });
			if (t !== Sf || !e) return;
			for (let [t, n] of [
				["Name", "Name"],
				["Object Type", "ObjectType"],
				["Predefined Type", "PredefinedType"],
				["Tag", "Tag"],
				["Global ID", "GlobalId"],
				["Description", "Description"]
			]) Mf(t, jf(e[n]));
		} catch (e) {
			console.warn("Selected element properties were unavailable.", e);
		}
	}
}
function Pf() {
	hf.list.clear(), hf.addFromModels();
	let e = hf.get();
	if (hf.list.clear(), e.isEmpty()) return null;
	let t = new v();
	return e.getBoundingSphere(t), t.radius *= .84, t;
}
async function Ff(e = !0) {
	if (!pf?.camera?.controls) return;
	let t = Pf();
	t && (await pf.camera.controls.fitToSphere(t, e), await mf.core.update(!0));
}
async function If() {
	!pf?.camera?.controls || !gf || (await pf.camera.controls.fitToSphere(gf, !0), await mf.core.update(!0));
}
async function Lf(e) {
	let t = await fetch(e);
	if (!t.ok) throw Error(`Prepared model request failed (${t.status}).`);
	let n = Number(t.headers.get("content-length"));
	if (!t.body || !Number.isFinite(n) || n <= 0) return new Uint8Array(await t.arrayBuffer());
	let r = t.body.getReader(), i = [], a = 0;
	for (;;) {
		let { done: e, value: t } = await r.read();
		if (e) break;
		i.push(t), a += t.byteLength, Tf(.18 + a / n * .58);
	}
	let o = new Uint8Array(a), s = 0;
	for (let e of i) o.set(e, s), s += e.byteLength;
	return o;
}
function Rf(e) {
	xf = e, Gd.classList.toggle("is-placing-section", e), nf?.classList.toggle("is-active", e), nf instanceof HTMLButtonElement && (nf.textContent = e ? "Click Model" : "Section"), _f && (e && _f.clear("hover").catch(() => {}), _f.enabled = !e);
}
function zf(e) {
	!_f || xf || e.buttons !== 0 || (Cf !== null && window.clearTimeout(Cf), Cf = window.setTimeout(async () => {
		if (Cf = null, !(wf || !_f?.enabled)) {
			wf = !0;
			try {
				await _f.highlight("hover", !0, !1);
			} catch (e) {
				console.warn("Hover preview was unavailable.", e);
			} finally {
				wf = !1;
			}
		}
	}, 70));
}
async function Bf(e) {
	let t = await import("./dist-O1W19x2T.js");
	e.get(Sl).get(pf), _f = e.get(t.Highlighter), _f.setup({
		world: pf,
		selectMaterialDefinition: {
			color: ff,
			opacity: 1,
			transparent: !1,
			renderedFaces: 0
		}
	}), _f.multiple = "none", _f.styles.set("hover", {
		color: ff,
		opacity: .42,
		transparent: !0,
		renderedFaces: 0
	}), _f.events.select.onHighlight.add((e) => {
		bf = Df(e), kf(Of() > 0), Nf(bf);
	}), _f.events.select.onClear.add(Af), vf = e.get(Uc), yf = e.get(su), yf.setup({
		color: ff,
		opacity: .24,
		size: 1.5
	});
}
Xd?.addEventListener("click", () => Ff(!0).catch(Ef)), Zd?.addEventListener("click", () => If().catch(Ef)), Qd?.addEventListener("click", async () => {
	try {
		document.fullscreenElement ? (await document.exitFullscreen(), Qd.textContent = "Full Screen") : (await document.documentElement.requestFullscreen(), Qd.textContent = "Exit Full Screen");
	} catch (e) {
		Ef(e);
	}
}), $d?.addEventListener("click", async () => {
	!vf || !Of() || (await vf.set(!1, bf), await _f?.clear("select"));
}), ef?.addEventListener("click", async () => {
	vf && Of() && await vf.isolate(bf);
}), tf?.addEventListener("click", async () => {
	vf && (await vf.set(!0), await mf?.core?.update(!0));
}), nf?.addEventListener("click", () => {
	yf && Rf(!xf);
}), rf?.addEventListener("click", () => {
	yf && (yf.deleteAll(), Rf(!1), rf instanceof HTMLButtonElement && (rf.disabled = !0));
}), Gd.addEventListener("pointerup", (e) => {
	!xf || e.button !== 0 || !yf || window.setTimeout(async () => {
		try {
			yf.deleteAll(), await yf.create(pf) && rf instanceof HTMLButtonElement && (rf.disabled = !1);
		} catch (e) {
			console.warn("A section plane could not be placed at that point.", e);
		} finally {
			Rf(!1);
		}
	}, 0);
}), Gd.addEventListener("pointermove", zf), Gd.addEventListener("pointerleave", () => {
	Cf !== null && window.clearTimeout(Cf), Cf = null, _f?.clear("hover").catch(() => {});
}), cf?.addEventListener("click", () => af?.classList.add("is-collapsed")), document.addEventListener("fullscreenchange", () => {
	!document.fullscreenElement && Qd instanceof HTMLButtonElement && (Qd.textContent = "Full Screen");
}), (async () => {
	Tf(.08);
	let e = new zl();
	pf = e.get(Nl).create(), pf.scene = new Dl(e), pf.scene.setup(), pf.scene.three.background = new A("#ffffff"), pf.renderer = new Al(e, Gd), pf.renderer.showLogo = !1, pf.renderer.three.setPixelRatio(Math.min(window.devicePixelRatio || 1, df ? 1.25 : 2)), pf.camera = new Wl(e), await pf.camera.controls.setLookAt(12, 10, 12, 0, 0, 0), e.init();
	let t = e.get(Ll).create(pf);
	t?.three && (t.three.visible = !1);
	let n = () => {
		pf.renderer?.resize(), pf.camera?.updateAspect();
	};
	new ResizeObserver(n).observe(Gd), window.addEventListener("resize", n, { passive: !0 }), Tf(.14), mf = e.get(Q);
	let r = new URL(
		/* @vite-ignore */
		"./ifc/fragments-worker.mjs",
		import.meta.url
	).href;
	mf.init(r, df ? { maxWorkers: 2 } : void 0), mf.core.settings.graphicsQuality = +!df, pf.camera.controls.addEventListener("update", () => mf.core.update()), mf.list.onItemSet.add(async ({ value: e }) => {
		e.useCamera(pf.camera.three), pf.scene.three.add(e.object), await mf.core.update(!0);
	}), mf.core.models.materials.list.onItemSet.add(({ value: e }) => {
		(!("isLodMaterial" in e) || !e.isLodMaterial) && (e.polygonOffset = !0, e.polygonOffsetUnits = 1, e.polygonOffsetFactor = Math.random());
	}), hf = e.get(Gc), df || await Bf(e), Tf(.18);
	let i = await Lf(uf);
	Tf(.78), await mf.core.load(i, {
		modelId: lf,
		camera: pf.camera.three,
		onProgress(e) {
			let t = Number(e?.progress ?? e);
			if (!Number.isFinite(t)) return;
			let n = t > 1 ? t / 100 : t;
			Tf(.78 + Math.min(1, n) * .16);
		}
	}), Tf(.95), await mf.core.update(!0), gf = Pf(), gf && (await pf.camera.controls.fitToSphere(gf, !1), await mf.core.update(!0)), Tf(1), window.setTimeout(() => Kd?.classList.add("is-hidden"), 220);
})().catch(Ef);
//#endregion
