// const Point = require("../dist/maplibre-point-geometry.cjs").Point;

import { Point } from "../dist/maplibre-point-geometry";



const pointA = new Point(1, 1);
const pointB = new Point(2, 2);

const pointC = pointA.add(pointB);
console.log(pointC);
console.log(`pointA + pointB = ${pointC}`);

console.log("distance:", pointA.dist(pointB));