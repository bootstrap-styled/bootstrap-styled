/* eslint-disable flowtype-errors/show-errors, no-console, import/extensions */
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import inject from 'rollup-plugin-inject';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';
// import cleanup from 'rollup-plugin-cleanup';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';
const processShim = '\0process-shim';
const prod = process.env.PRODUCTION;
const mode = prod ? 'production' : 'development';

console.log(`Creating ${mode} bundle...`);

const output = prod ? [
  { file: `dist/${pkg.name}.min.js`, format: 'umd' },
] : [
  { file: `dist/${pkg.name}.js`, format: 'umd' },
  { file: `dist/${pkg.name}.es.js`, format: 'es' },
];


const plugins = [
  // Unlike Webpack and Browserify, Rollup doesn't automatically shim Node
  // builtins like `process`. This ad-hoc plugin creates a 'virtual module'
  // which includes a shim containing just the parts the bundle needs.
  {
    resolveId(importee) {
      if (importee === processShim) return importee;
      return null;
    },
    load(id) {
      if (id === processShim) return 'export default { argv: [], env: {} }';
      return null;
    },
  },
  nodeResolve(),
  commonjs({
    include: 'node_modules/**',
    namedExports: {
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
      // of a module in node_modules
      'bootstrap-styled-utils': ['named'],
      immutable: ['fromJS'],
    },
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
  }),
  inject({
    process: processShim,
  }),
  json(),
  babel({
    plugins: ['external-helpers'],
    exclude: 'node_modules/**',
  }),
  // cleanup(),
];

if (prod) plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }));

export default {
  input: 'src/index.js',
  sourcemap: true,
  name: pkg.name,
  external: ['react', 'react-dom', 'prop-types', 'styled-components', 'react-transition-group', 'react-portal'],
  exports: 'named',
  output,
  plugins,
  globals: { react: 'React', 'react-dom': 'ReactDom', 'prop-types': 'PropTypes', 'styled-components': 'styled', 'react-transition-group': 'ReactTransitionGroup', color: 'Color', 'react-portal': 'ReactPortal' },
};
