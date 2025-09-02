"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figure = void 0;
class Figure {
    constructor(_x = 0, _y = 0) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(v) {
        this._x = v;
    }
    get y() {
        return this._y;
    }
    set y(v) {
        this._y = v;
    }
}
exports.Figure = Figure;
//# sourceMappingURL=figure.js.map