/**
 * This is TypeScript rewrite of https://github.com/mapbox/point-geometry
 */
/**
 * Flattened row major 2x2 matrix
 */
declare type Matrix = [number, number, number, number];
/**
 * a point
 * @param x
 * @param y
 */
declare class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    /**
     * In place. Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @return {Point} _this_ point
     */
    _matMult(m: Matrix): Point;
    /**
     * In place. Add another point to this point's x & y coordinates,
     * @param {Point} p the other point
     * @return {Point} _this_ point
     */
    _add(p: Point): Point;
    /**
     * In place. Subtract another point's x & y coordinates from _this_ point
     * @param {Point} p the other point
     * @return {Point}  _this_ point
     */
    _sub(p: Point): Point;
    /**
     * In place. Multiply this point's x & y coordinates by a factor.
     * @param {Number} k factor
     * @return {Point} _this_ point
     */
    _mult(k: number): Point;
    /**
     * In place. Divide this point's x & y coordinates by a factor.
     * @param {Point} k factor
     * @return {Point} output point
     */
    _div(k: number): Point;
    /**
     * In place. Multiply this point's x & y coordinates by another point.
     * @param {Point} p the other point
     * @return {Point} _this_
     */
    _multByPoint(p: Point): Point;
    /**
     * In place. Divide this point's x & y coordinates by another point
     * @param {Point} p the other point
     * @return {Point} output point
     */
    _divByPoint(p: Point): Point;
    /**
     * In place. Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} _this_ point
     */
    _unit(): Point;
    /**
     * In place. Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} _this_ point
     */
    _perp(): Point;
    /**
     * In place. Rotate this point around the 0, 0 origin by a given angle,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @return {Point} _this_ point
     */
    _rotate(angle: number): Point;
    /**
     * In place. Rotate this point around p point by a given angle,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} _this_ point
     */
    _rotateAround(angle: number, p: Point): Point;
    /**
     * In place. Rounds the x and y coordinates to the nearest integer.
     * @return {Point} _this_ point
     */
    _round(): Point;
    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @return {Point} the clone
     */
    clone(): Point;
    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    add(p: Point): Point;
    /**
     * Subtract another point's x & y coordinates from _this_ point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    sub(p: Point): Point;
    /**
     * Multiply this point's x & y coordinates by another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    multByPoint(p: Point): Point;
    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    divByPoint(p: Point): Point;
    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Number} k factor
     * @return {Point} output point
     */
    mult(k: number): Point;
    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    div(k: number): Point;
    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @return {Point} output point
     */
    rotate(a: number): Point;
    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} output point
     */
    rotateAround(a: number, p: Point): Point;
    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @return {Point} output point
     */
    matMult(m: Matrix): Point;
    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} unit vector point
     */
    unit(): Point;
    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} perpendicular point
     */
    perp(): Point;
    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @return {Point} rounded point
     */
    round(): Point;
    /**
     * Return the magnitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return {Number} magnitude
     */
    mag(): number;
    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @return {boolean} whether the points are equal
     */
    equals(other: any): boolean;
    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @return {Number} distance
     */
    dist(p: any): number;
    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @return {Number} distance
     */
    distSqr(p: any): number;
    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @return {Number} angle
     */
    angle(): number;
    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleTo(b: Point): number;
    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleWith(b: Point): number;
    angleWithSep(x: number, y: number): number;
    /**
     * Get a string-concatenation-friendly representation of this point
     * @returns {string} a human friendly string representation of this point
     */
    toString(): string;
    /**
     * Construct a point from an array if necessary, otherwise if the input
     * is already a Point, or an unknown type, return it unchanged
     * @param {Array<number> | Point} a any kind of input value
     * @return {Point} constructed point, or passed-through value.
     * @example
     * // this
     * var point = Point.convert([0, 1]);
     * // is equivalent to
     * var point = new Point(0, 1);
     */
    static convert(a: Point | Array<number>): Point;
}

export { Matrix, Point };
