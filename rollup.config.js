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
//import builtins from 'rollup-plugin-node-builtins'

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
    input: `compiled/bundle.js`,
    plugins: [
      json(),            
      resolve({
        browser: true,
        preferBuiltins: false
      }),      
      commonjs({
        ignoreGlobal: false,
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
    input: `compiled/bundle.js`,
    plugins: [
      json(),            
      resolve({
        browser: true,
        preferBuiltins: false
      }),      
      commonjs({
        ignoreGlobal: false,
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