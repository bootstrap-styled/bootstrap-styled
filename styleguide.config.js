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
  }, {
    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC\n' +
    'HUlEQVQ4jXWRP0jVcRTFP/f+vu+9fNrDpEjBqCVoEGsocWmJ/iKZEDWEU38QEocwWsSWmmpyrIjG\n' +
    'sL9QgxThUA0O1aKDJIWYmv/ylT7z/ft9b4OK+nrvwF3uOZx7LkcogcFjJxSRFhP5VP+mb6yUTksR\n' +
    'mO0BekSkY7DpdEldUWLwyFGHWSdmtcBF4EApA3m+tzm6u/J3RSziPSKgCs7Vo/oa1QTOgeoznGvH\n' +
    'uSzOgXP8nI34mV9BymXzGp9Y2Pp017bF7ZHAdDV+FZBYPyMtQB2QDz1+ZlL96Ljciye474amdy6E\n' +
    'xsuR5N+euuo5X51YdsH/SZ0h+5YW1H8fjfgfU24s6+XFzZEHPviQ+2yNkYbhZCZ2fHi+qnY+U5ZP\n' +
    'lOV8PBqqqGCi5LKBnxyLhd++RiW5EIg3uWbIQH/ui8naiY5Y+8mMad+yBYiD/TVJf6gm6UkJs1Mx\n' +
    'XUw7TVtA2oL3eZOm66lHKQAH0Fl2VbOe6JrZUs7xbrRaJ6bLORyb1ZzfVJYrUqPFVay78PF0XpX1\n' +
    'kCtKaAyRltvllxVAu+JtGmAXBA4WGhhSuAJQb9LtV1tSsLhil4CZDZMCWPKb0s6v8QaV3jjfFW9T\n' +
    'B5IGzmxUhiYNQK+HLQCCvRW4AmQ3pEuvcEXQHNyIZkwf7ggyrWcrxlN59NS5ZO/Hov8UW74K72RD\n' +
    '5K5icwpPBAaK6aCgkgIMRcXfWvSuv/XP43wp0T84kNcr9/KNuQAAAABJRU5ErkJggg==',
  }),
  webpackConfig: originalWebpack,
};
