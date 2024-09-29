import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: 'node_modules/**',
      extensions: ['.js', '.jsx']
    }),
    json(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    terser(),
  ],
};