const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

module.exports = {
  styleguideDir: 'public',
  components: 'src/**/*.js',
  ignore: [
    '**/src/index.js',
    '**/src/Accordions/index.js',
    '**/src/Accordions/Accordion.js',
    '**/src/Accordions/AccordionGroup.js',
    '**/src/Article/index.js',
    '**/src/BootstrapProvider/index.js',
    '**/src/UtilityProvider/index.js',
    '**/src/Breadcrumb/BreadcrumbItem/index.js',
    '**/src/Button/ButtonDropdown/index.js',
    '**/src/ButtonGroup/ButtonToolbar/index.js',
    '**/src/Cards/CardBlock.js',
    '**/src/Cards/CardBlockquote.js',
    '**/src/Cards/CardColumns.js',
    '**/src/Cards/CardDeck.js',
    '**/src/Cards/CardGroup.js',
    '**/src/Cards/CardFooter.js',
    '**/src/Cards/CardHeader.js',
    '**/src/Cards/CardImg.js',
    '**/src/Cards/CardImgOverlay.js',
    '**/src/Cards/CardLink.js',
    '**/src/Cards/CardSubtitle.js',
    '**/src/Cards/CardText.js',
    '**/src/Cards/CardTitle.js',
    '**/src/Col/index.js',
    '**/src/Dropdown/DropdownItem/index.js',
    '**/src/Dropdown/DropdownMenu/index.js',
    '**/src/Dropdown/DropdownToggle/index.js',
    '**/src/Fa/FaStacked.js',
    '**/src/Footer/index.js',
    '**/src/Form/FormText.js',
    '**/src/H1/index.js',
    '**/src/H2/index.js',
    '**/src/H3/index.js',
    '**/src/H4/index.js',
    '**/src/H5/index.js',
    '**/src/H6/index.js',
    '**/src/Img/FigCaption.js',
    '**/src/Img/Figure.js',
    '**/src/Input/InputGroupAddon.js',
    '**/src/Input/InputGroupButton.js',
    '**/src/Label/index.js',
    '**/src/ListGroup/ListGroupItem.js',
    '**/src/ListGroup/ListGroupItemHeading.js',
    '**/src/ListGroup/ListGroupItemText.js',
    '**/src/Fade/index.js',
    '**/src/Modal/index.js',
    '**/src/Modal/ModalBody.js',
    '**/src/Modal/ModalFooter.js',
    '**/src/Modal/ModalHeader.js',
    '**/src/Nav/NavItem.js',
    '**/src/Nav/NavLink.js',
    '**/src/Navbar/NavbarBrand.js',
    '**/src/Navbar/NavbarToggler.js',
    '**/src/Navbar/NavDropdown.js',
    '**/src/Option/index.js',
    '**/src/Output/index.js',
    '**/src/Pagination/PaginationItem/index.js',
    '**/src/Pagination/PaginationLink/index.js',
    '**/src/Progress/ProgressBar/index.js',
    '**/src/Section/index.js',
    '**/src/Table/Tbody/index.js',
    '**/src/Table/Td/index.js',
    '**/src/Table/Tfoot/index.js',
    '**/src/Table/Thead/index.js',
    '**/src/Table/Tr/index.js',
    '**/src/TetherContent/index.js',
    '**/A/composeLink.js',
    '**/makeTheme/**',
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
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
        },
      ],
    },
    {
      name: 'UI Components',
      content: 'docs/ui.md',
      components: 'src/**/*.js',
    },
  ],
  previewDelay: 500,
  skipComponentsWithoutExample: false,
  showCode: false,
  showUsage: true,
  showSidebar: true,
  styles: {

  },
  template: path.join(__dirname, 'styleguide/template.html'),
  theme: {

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
