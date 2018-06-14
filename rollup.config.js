import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import sourceMaps from "rollup-plugin-sourcemaps"
import globals from "rollup-plugin-node-globals"
const pkg = require("./package.json")
const camelCase = require("lodash.camelcase")
import json from 'rollup-plugin-json'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
import alias from 'rollup-plugin-alias'

const path = require('path')
const libraryName = "heat-libs"
export default [
  { // heat-libs.js | NodeJS CommonJS module
    input: `src/index.js`,
    plugins: [
      json(),
      resolve({
        preferBuiltins: true
      }),
      commonjs({
        ignore: [ 'memcpy' ]
      }),
      sourceMaps()
    ],
    sourcemap: true,
    external: 'buffer,memcpy,url,http,https,zlib,stream,util'.split(','),
    output: [
			{ file: 'dist/heat-libs.js', format: 'cjs' }
    ]
  },
  { // heat-libs.umd.js | Browser UMD module
    input: `src/index.js`,
    plugins: [
      alias({
        'ws': path.resolve(__dirname, 'src/ws.browser.js'),
        'bytebuffer': path.resolve(__dirname, 'node_modules/bytebuffer/dist/bytebuffer.js'),
        'node-fetch': path.resolve(__dirname, 'src/node-fetch.browser.js'),
        './random-bytes': path.resolve(__dirname, 'src/random-bytes.browser.js'),
        'crypto': path.resolve(__dirname, 'node_modules/crypto-browserify/index.js'),
        'inherits': path.resolve(__dirname, 'src/node-inherits-browser.js'),
        'util': path.resolve(__dirname, 'src/node-util.browser.js'),
        'buffer': path.resolve(__dirname, 'node_modules/buffer/index.js'),
      }),
      json(),
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        ignoreGlobal: true
      }),
      globals(),
      sourceMaps()      
    ],
    output: [
			{ file: 'dist/heat-libs.umd.js', format: 'umd', name: 'heatlibs' }
    ],
    external: ['utf-8-validate','bufferutil']
  },
  { // heat-libs.umd.min.js | Minified Browser UMD module
    input: `src/index.js`,
    plugins: [
      alias({
        'ws': path.resolve(__dirname, 'src/ws.browser.js'),
        'bytebuffer': path.resolve(__dirname, 'node_modules/bytebuffer/dist/bytebuffer.js'),
        'node-fetch': path.resolve(__dirname, 'src/node-fetch.browser.js'),
        './random-bytes': path.resolve(__dirname, 'src/random-bytes.browser.js'),
        'crypto': path.resolve(__dirname, 'node_modules/crypto-browserify/index.js'),
        'inherits': path.resolve(__dirname, 'src/node-inherits-browser.js'),
        'util': path.resolve(__dirname, 'src/node-util.browser.js'),
        'buffer': path.resolve(__dirname, 'node_modules/buffer/index.js'),
      }),
      json(),
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs({
        ignoreGlobal: true
      }),
      globals(),
      sourceMaps(),
      uglify({}, minify)
    ],
    sourcemap: true,
    output: [
			{ file: 'dist/heat-libs.umd.min.js', format: 'umd', name: 'heatlibs' }
    ]
  }  
]