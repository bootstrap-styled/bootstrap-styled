const pkg = require('./package.json');
const path = require('path');
const { default: createConfig, config } = require('@yeutech-lab/rollup-umd-documentation/lib/styleguide.config.js');

/**
 * We generally make the modules aliased for having nice example, but in this case
 * we use the module itself for the documentation and to prevent multiple version of
 * styled-components, we must disable the alias
 */
const originalWebpack = config.webpackConfig;
delete originalWebpack.resolve.alias[pkg.name];

module.exports = {
  ...createConfig({
    require: [path.resolve(__dirname, 'styleguide/setup.js')],
    verbose: false,
  }),
  webpackConfig: originalWebpack,
};
