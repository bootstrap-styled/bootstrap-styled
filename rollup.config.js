const { createConfig } = require('@rollup-umd/rollup');
module.exports = createConfig({
  commonjsOptions: {
    namedExports: {
      '@bootstrap-styled/utils': ['parseTransition'],
      immutable: ['fromJS'],
    },
  },
});
