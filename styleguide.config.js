const { createConfig } = require('@rollup-umd/documentation');
const options = { layout: '@bootstrap-styled/documentation' };

const config = createConfig({
  pagePerSection: true,
}, options);

module.exports = config;
