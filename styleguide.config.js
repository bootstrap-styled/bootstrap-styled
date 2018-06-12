const path = require('path');
const { config } = require('rollup-documentation/lib/styleguide.config.js');
module.exports = {
  ...config,
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  components: 'src/**/*.js',
  styles: {
    Markdown: {
      pre: {
        border: 1,
        background: '#363438',
      },
      code: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#a280ed',
      },
    },
  },
  theme: {
    color: {
      link: '#4c279e',
      linkHover: '#a280ed',
    },
  },
  verbose: false,
};
