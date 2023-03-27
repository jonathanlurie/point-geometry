- modern bundling to ES module, CommonJS and UMD
- TypeScript
- named export/import
- add a `toString()` method for better logs
- otherwise fully backward compatible with @mapbox/point-geometry

Important note: the original [Mapbox repository](https://github.com/mapbox/point-geometry) contains a **3D** branch to manipulate points in 3D space. This as not added here because only the *master* branch (2D logic only) is pushed to NPM and imported into Maplibre GL JS. For 3D logic, Maplibre GL JS uses the more advanced [gl-matrix](https://github.com/toji/gl-matrix).