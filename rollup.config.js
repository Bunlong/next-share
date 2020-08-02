import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

// import external from 'rollup-plugin-peer-deps-external';
// import builtins from 'builtin-modules'

export default {
  input: 'src/library-name.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
    },
  ],
  // external: builtins,
  external: [
    'react',
    'react-dom',
    'fs',
    'util',
    'stream',
    'buffer',
    'zlib',
    'assert'
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      clean: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      preferBuiltins: true
    }),
    commonjs({
      extensions: ['.js', '.ts', '.tsx'],
    }),
    terser()
  ],
};
