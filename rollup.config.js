import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from "postcss-preset-env";
import commonjs from "@rollup/plugin-commonjs";
import autoprefixer from "autoprefixer";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      globals: { react: 'React' },
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      globals: { react: 'React' },
    }
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      plugins: [
        postcssPresetEnv(),
        autoprefixer(),
      ],
      modules: true, 
      extract: false, 
      autoModules: true,
      sourceMap: false,
      minimize: true,
      extensions: ['.scss'], 
      inject: true,
      sass: {
        includePaths: ['node_modules'],
      },
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    commonjs(),
    external(),
    resolve(),
    terser(),
  ],
  external: ["react", "react-dom"],
};
