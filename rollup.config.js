import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';

const fileName = 'maplibre-point-geometry';
const namespace = 'maplibrePointGeometry';

const bundles = [
  // ES module, not minified + sourcemap
  {
    plugins: [
      json(),
      esbuild(),
    ],
    output: [
      {
        file: `dist/${fileName}.mjs`,
        format: "es",
        sourcemap: true
      }
    ],
    input: "src/index.ts",
    watch: {
      include: 'src/**'
    },
    external: []
  },

  // CJS module, not minified + sourcemap
  {
    plugins: [
      nodeResolve(),
      commonjs({ include: 'node_modules/**' }),
      globals(),
      json(),
      esbuild()
    ],
    output: [
      {
        file: `dist/${fileName}.cjs`,
        format: "cjs",
        sourcemap: true
      }
    ],
    input: "src/index.ts",
    watch: {
      include: 'src/**'
    },
    external: []
  },

  // UMD module, not minified
  {
    plugins: [
      nodeResolve(), // for the standalone UMD, we want to resolve so that the bundle contains all the dep.
      commonjs({ include: 'node_modules/**' }),
      globals(),
      json(),
      esbuild()
    ],
    output: [
      {
        name: namespace,
        file: `dist/${fileName}.umd.js`, 
        format: "umd",
        sourcemap: true
      }
    ],
    input: "src/index.ts",
    watch: {
      include: 'src/**'
    },
    external: []
  },

  // types
  {
    "plugins": [
      dts()
    ],
    output: {
      file: `dist/${fileName}.d.ts`,
      format: "es"
    },
    input: "src/index.ts"
  }
]

if (process.env.NODE_ENV === 'production') {
  bundles.push(
  // ES module, minified
  {
    plugins: [
      json(),
      esbuild({
        sourceMap: false,
        minify: true,
      })
    ],
    output: [
      {
        file: `dist/${fileName}.min.mjs`,
        format: "es",
      }
    ],
    input: "src/index.ts",
    external: [],
  },
  {
    plugins: [
      nodeResolve(), // for the standalone UMD, we want to resolve so that the bundle contains all the dep.
      commonjs({ include: 'node_modules/**' }),
      globals(),
      json(),
      esbuild({
        sourceMap: false,
        minify: true,
      })
    ],
    output: [
      {
        name: namespace,
        file: `dist/${fileName}.umd.min.js`, 
        format: "umd",
        sourcemap: true
      }
    ],
    input: "src/index.ts",
    watch: {
      include: 'src/**'
    },
    external: []
  })

}

export default bundles


 