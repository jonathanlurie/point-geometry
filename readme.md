This project is a fork of [Mapbox's point-geometry](https://github.com/mapbox/point-geometry). It adds a few things:
- TypeScript
- modern bundling to ES module, CommonJS and UMD
- named export/import
- add a `toString()` method for better logs
- otherwise fully backward compatible with @mapbox/point-geometry

## JS to TS process
In the original implementation, many Point methods are starting with `_` (underscore), which generally means "those are private and not supposed to be accessed from the outside". Yet, MapLibre GL is/was calling those underscored methods extensively just like if they were public ones. In the process of converting this codebase to TS, those underscored methods should have became `private` but using them as if they were public also means many math operations are done "in place" rather than creating new instances, which is much more performant

Important note: the original [Mapbox repository](https://github.com/mapbox/point-geometry) contains a **3D** branch to manipulate points in 3D space. This as not added here because only the *master* branch (2D logic only) is pushed to NPM and imported into Maplibre GL JS. For 3D logic, Maplibre GL JS uses the more advanced [gl-matrix](https://github.com/toji/gl-matrix).