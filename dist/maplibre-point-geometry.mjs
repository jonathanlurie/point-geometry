class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  _matMult(m) {
    const x = m[0] * this.x + m[1] * this.y;
    const y = m[2] * this.x + m[3] * this.y;
    this.x = x;
    this.y = y;
    return this;
  }
  _add(p) {
    this.x += p.x;
    this.y += p.y;
    return this;
  }
  _sub(p) {
    this.x -= p.x;
    this.y -= p.y;
    return this;
  }
  _mult(k) {
    this.x *= k;
    this.y *= k;
    return this;
  }
  _div(k) {
    this.x /= k;
    this.y /= k;
    return this;
  }
  _multByPoint(p) {
    this.x *= p.x;
    this.y *= p.y;
    return this;
  }
  _divByPoint(p) {
    this.x /= p.x;
    this.y /= p.y;
    return this;
  }
  _unit() {
    this._div(this.mag());
    return this;
  }
  _perp() {
    const y = this.y;
    this.y = this.x;
    this.x = -y;
    return this;
  }
  _rotate(angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const x = cos * this.x - sin * this.y;
    const y = sin * this.x + cos * this.y;
    this.x = x;
    this.y = y;
    return this;
  }
  _rotateAround(angle, p) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y);
    const y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
    this.x = x;
    this.y = y;
    return this;
  }
  _round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  add(p) {
    return this.clone()._add(p);
  }
  sub(p) {
    return this.clone()._sub(p);
  }
  multByPoint(p) {
    return this.clone()._multByPoint(p);
  }
  divByPoint(p) {
    return this.clone()._divByPoint(p);
  }
  mult(k) {
    return this.clone()._mult(k);
  }
  div(k) {
    return this.clone()._div(k);
  }
  rotate(a) {
    return this.clone()._rotate(a);
  }
  rotateAround(a, p) {
    return this.clone()._rotateAround(a, p);
  }
  matMult(m) {
    return this.clone()._matMult(m);
  }
  unit() {
    return this.clone()._unit();
  }
  perp() {
    return this.clone()._perp();
  }
  round() {
    return this.clone()._round();
  }
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  equals(other) {
    return this.x === other.x && this.y === other.y;
  }
  dist(p) {
    return Math.sqrt(this.distSqr(p));
  }
  distSqr(p) {
    const dx = p.x - this.x;
    const dy = p.y - this.y;
    return dx * dx + dy * dy;
  }
  angle() {
    return Math.atan2(this.y, this.x);
  }
  angleTo(b) {
    return Math.atan2(this.y - b.y, this.x - b.x);
  }
  angleWith(b) {
    return this.angleWithSep(b.x, b.y);
  }
  angleWithSep(x, y) {
    return Math.atan2(this.x * y - this.y * x, this.x * x + this.y * y);
  }
  toString() {
    return `{x: ${this.x}, y: ${this.y}}`;
  }
  static convert(a) {
    if (a instanceof Point) {
      return a;
    }
    if (Array.isArray(a)) {
      return new Point(a[0], a[1]);
    }
    return a;
  }
}

export { Point };
//# sourceMappingURL=maplibre-point-geometry.mjs.map
