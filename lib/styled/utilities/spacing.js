import { breakpointInfix, mediaBreakpointUp } from '../mixins/breakpoints';

export var defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$zindex-navbar-fixed': '1030',
  '$spacers': { // eslint-disable-line quote-props
    0: {
      x: 0,
      y: 0
    },
    1: {
      x: '0.25rem',
      y: '0.25rem'
    },
    2: {
      x: '0.5rem',
      y: '0.5rem'
    },
    3: {
      x: '1rem',
      y: '1rem'
    },
    4: {
      x: '1.5rem',
      y: '1.5rem'
    },
    5: {
      x: '3rem',
      y: '3rem'
    }
  }
};

export function getSpacingUtilities() // eslint-disable-line dot-notation
{
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];
  var spacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$spacers'];

  var abbrevs = {
    margin: 'm',
    padding: 'p'
  };

  var spacingUtilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    Object.keys(abbrevs).forEach(function (prop) {
      var abbrev = abbrevs[prop];
      Object.keys(spacers).forEach(function (size) {
        var lengths = spacers[size];
        var infix = breakpointInfix(breakpoint, gridBreakpoints);
        spacingUtilityList.push(mediaBreakpointUp(breakpoint, gridBreakpoints, '\n\n        .' + abbrev + infix + '-' + size + ' { ' + prop + ':        ' + lengths.y + ' ' + lengths.x + ' !important; } /* a = All sides */\n        .' + abbrev + 't' + infix + '-' + size + ' { ' + prop + '-top:    ' + lengths.y + ' !important; }\n        .' + abbrev + 'r' + infix + '-' + size + ' { ' + prop + '-right:  ' + lengths.x + ' !important; }\n        .' + abbrev + 'b' + infix + '-' + size + ' { ' + prop + '-bottom: ' + lengths.y + ' !important; }\n        .' + abbrev + 'l' + infix + '-' + size + ' { ' + prop + '-left:   ' + lengths.x + ' !important; }\n        .' + abbrev + 'x' + infix + '-' + size + ' {\n          ' + prop + '-right:  ' + lengths.x + ' !important;\n          ' + prop + '-left:   ' + lengths.x + ' !important;\n        }\n        .' + abbrev + 'y' + infix + '-' + size + ' {\n          ' + prop + '-top:    ' + lengths.y + ' !important;\n          ' + prop + '-bottom: ' + lengths.y + ' !important;\n        }\n        \n        .m' + infix + '-auto  { margin:        auto !important; }\n        .mt' + infix + '-auto { margin-top:    auto !important; }\n        .mr' + infix + '-auto { margin-right:  auto !important; }\n        .mb' + infix + '-auto { margin-bottom: auto !important; }\n        .ml' + infix + '-auto { margin-left:   auto !important; }\n        .mx' + infix + '-auto {\n          margin-right: auto !important;\n          margin-left:  auto !important;\n        }\n        .my' + infix + '-auto {\n          margin-top:    auto !important;\n          margin-bottom: auto !important;\n        }\n        '));
      });
    });
  });
  return spacingUtilityList.join('\n');
}

export default {
  defaultProps: defaultProps,
  getSpacingUtilities: getSpacingUtilities
};