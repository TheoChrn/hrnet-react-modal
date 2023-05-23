import babel from "@rollup/plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import sass from 'rollup-plugin-sass';
import postcssPresetEnv from "postcss-preset-env"
import commonjs from "@rollup/plugin-commonjs"
import autoprefixer from "autoprefixer"

export default [{
  input: './src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    }
  ],
  plugins: [
    postcss({
      plugins: [
        postcssPresetEnv(),
        autoprefixer()
      ],
      autoModules: false,
      onlyModules: false,
      extract: true,
      extensions: ['.scss'],
      use: ['sass'],
      minimize: true,
      sourceMap: false,
      modules: true,
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    commonjs(),
    external(),
    resolve(),
    terser(),
    sass({
      insert: true,
      output: true
    })
  ],
  external: ["react", "react-dom"],
}]