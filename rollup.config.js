import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

// ======= FOR BUILDING NODE.JS PACKAGE =======
// import builtins from 'builtin-modules'
// import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
// ============================================

export default {
  input: 'src/next-share.ts',
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
  external: ['react', 'react-dom'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      clean: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    // resolve({
    //   preferBuiltins: true
    // }),
    // nodeResolve(),
    commonjs({
      extensions: ['.js', '.ts', '.tsx'],
    }),
    terser(),
  ],
};
