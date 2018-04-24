const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');
const { generateCSSReferences, generateJSReferences } = MiniHtmlWebpackPlugin;

module.exports = {
  styleguideDir: 'public',
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  components: 'src/**/*.js',
  ignore: [
    '**/src/index.js',
    '**/src/Article/index.js',
    '**/src/Fa/FaStacked.js',
    '**/src/Footer/index.js',
    '**/src/Label/index.js',
    '**/src/Modal/Fade.js',
    '**/src/Option/index.js',
    '**/src/Output/index.js',
    '**/src/Section/index.js',
    '**/src/TetherContent/index.js',
    '**/A/composeLink.js',
    '**/theme/**',
    '**/theme.js',
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
  ],
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Prerequisite',
          content: 'docs/prerequisite.md',
        },
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'Discover how to install `bootstrap-styled`',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
          components: 'src/BootstrapProvider/*.js',
        },
      ],
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      // sections: [
      //   {
      //     name: 'Basic Components',
      //     ignore: [
      //       '**/src/Accordions/*.js',
      //       '**/src/BootstrapProvider/index.js',
      //       '**/src/BootstrapProvider/UtilityProvider.js',
      //       '**/src/Button/*.js',
      //       '**/src/ButtonGroup/*.js',
      //       '**/src/Breadcrumb/*.js',
      //       '**/src/Cards/*.js',
      //       '**/src/Container/index.js',
      //       '**/src/ContainerFluid/index.js',
      //       '**/src/Dropdown/*.js',
      //       '**/src/Form/*.js',
      //       '**/src/H1/index.js',
      //       '**/src/H2/index.js',
      //       '**/src/H3/index.js',
      //       '**/src/H4/index.js',
      //       '**/src/H5/index.js',
      //       '**/src/H6/index.js',
      //       '**/src/Img/*.js',
      //       '**/src/InputGroup/*.js',
      //       '**/src/ListGroup/*.js',
      //       '**/src/Modal/*.js',
      //       '**/src/Nav/*.js',
      //       '**/src/Navbar/*.js',
      //       '**/src/Pagination/*.js',
      //       '**/src/Progress/*.js',
      //       '**/src/Table/*.js',
      //     ],
      //     components: 'src/**/*.js',
      //   },
      //   {
      //     name: 'Accordions',
      //     ignore: [
      //       '**/src/Accordions/index.js',
      //     ],
      //     components: 'src/Accordions/*.js',
      //   },
      //   {
      //     name: 'Button',
      //     components: 'src/Button/*.js',
      //   },
      //   {
      //     name: 'ButtonGroup',
      //     components: 'src/ButtonGroup/*.js',
      //   },
      //   {
      //     name: 'Breadcrumb',
      //     components: 'src/Breadcrumb/*.js',
      //   },
      //   {
      //     name: 'Cards',
      //     ignore: [
      //       '**/src/Cards/index.js',
      //     ],
      //     components: 'src/Cards/*.js',
      //   },
      //   {
      //     name: 'Containers',
      //     sections: [
      //       {
      //         components: 'src/Container/index.js',
      //       },
      //       {
      //         components: 'src/ContainerFluid/index.js',
      //       },
      //     ],
      //   },
      //   {
      //     name: 'Dropdown',
      //     components: 'src/Dropdown/*.js',
      //   },
      //   {
      //     name: 'Form',
      //     components: 'src/Form/*.js',
      //   },
      //   {
      //     name: 'Headings',
      //     sections: [
      //       {
      //         components: 'src/H1/index.js',
      //       },
      //       {
      //         components: 'src/H2/index.js',
      //       },
      //       {
      //         components: 'src/H3/index.js',
      //       },
      //       {
      //         components: 'src/H4/index.js',
      //       },
      //       {
      //         components: 'src/H5/index.js',
      //       },
      //       {
      //         components: 'src/H6/index.js',
      //       },
      //     ],
      //   },
      //   {
      //     name: 'Img',
      //     components: 'src/Img/*.js',
      //   },
      //   {
      //     name: 'InputGroup',
      //     components: 'src/InputGroup/*.js',
      //   },
      //   {
      //     name: 'ListGroup',
      //     components: 'src/ListGroup/*.js',
      //   },
      //   {
      //     name: 'Modal',
      //     components: 'src/Modal/*.js',
      //   },
      //   {
      //     name: 'Nav',
      //     components: 'src/Nav/*.js',
      //   },
      //   {
      //     name: 'Navbar',
      //     components: 'src/Navbar/*.js',
      //   },
      //   {
      //     name: 'Pagination',
      //     components: 'src/Pagination/*.js',
      //   },
      //   {
      //     name: 'Progress',
      //     components: 'src/Progress/*.js',
      //   },
      //   {
      //     name: 'Table',
      //     components: 'src/Table/*.js',
      //   },
      // ],
    },
    {
      name: 'Developers',
      content: 'docs/commands.md',
    },
  ],
  previewDelay: 500,
  skipComponentsWithoutExample: false,
  showCode: false,
  showUsage: true,
  showSidebar: true,
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
  template: ({
     css,
     js,
     title,
     publicPath,
  }) => `<!DOCTYPE html>
  <html>
    <head>
     <meta charset="UTF-8">
     <title>${title}</title>
     ${generateCSSReferences(css, publicPath)}
     <style>
        .loader {
          position: absolute;
          top: 50%;
          left: 48%;
        }
    
        .line {
          animation: expand 1.5s ease-in-out infinite;
          border-radius: 10px;
          display: inline-block;
          transform-origin: center center;
          margin: 0 3px;
          width: 1px;
          height: 25px;
        }
    
        .line:nth-child(1) {
          background: #22d4e8;
        }
    
        .line:nth-child(2) {
          animation-delay: 180ms;
          background: #4922e8;
        }
    
        .line:nth-child(3) {
          animation-delay: 360ms;
          background: #bd22e8;
        }
    
        .line:nth-child(4) {
          animation-delay: 540ms;
          background: #e8226a;
        }
    
        .line:nth-child(5) {
          animation-delay: 540ms;
          background: #e86a22;
        }
    
        .line:nth-child(6) {
          animation-delay: 360ms;
          background: #e8de22;
        }
    
        .line:nth-child(7) {
          animation-delay: 180ms;
          background: #8ee822;
        }
    
        .line:nth-child(8) {
          background: #22e853;
        }
    
        @keyframes expand {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(2);
          }
        }
     </style>
     </head>
     <body>
       <div id="rsg-root">
          <div class="loader">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
       </div>
       ${generateJSReferences(js, publicPath)}
     </body>
  </html>`,
  theme: {
    color: {
      link: '#4c279e',
      linkHover: '#a280ed',
    },
  },
  title: `${pkg.description || pkg.name} documentation`,
  verbose: false,
  getComponentPathLine(componentPath) {
    let name = path.basename(componentPath, '.js');
    name = name === 'index' ? path.basename(componentPath.replace('/index.js', '')) : name;
    let dir = path.dirname(componentPath).replace('src', `${pkg.name}/lib`);
    dir = dir.indexOf(name) === -1 ? `${dir}/${name}` : dir;
    return `import ${name} from '${dir}';`;
  },
  webpackConfig: {
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        exclude: [
          'node_modules/**/*.js',
        ],
      }),
    ],
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'styleguide'),
          ],
          loader: 'babel-loader',
        },
      ],
    },
  },
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'styleguide/components/LayoutRenderer'),
    Wrapper: path.join(__dirname, 'styleguide/components/Wrapper'),
  },
};
