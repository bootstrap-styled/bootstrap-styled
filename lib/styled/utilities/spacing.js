import { breakpointMin, mediaBreakpointUp } from '../mixins/breakpoints';

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
  var zindexNavbarFixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$zindex-navbar-fixed'];
  var spacers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$spacers'];

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
        var min = breakpointMin(breakpoint, gridBreakpoints);
        if (min) {
          spacingUtilityList.push(mediaBreakpointUp(breakpoint, gridBreakpoints, '\n            @media (min-width: ' + min + ') {\n              .' + abbrev + '-' + breakpoint + '-' + size + ' { ' + prop + ':        ' + lengths.y + ' ' + lengths.x + ' !important; } /* a = All sides */\n              .' + abbrev + 't-' + breakpoint + '-' + size + ' { ' + prop + '-top:    ' + lengths.y + ' !important; }\n              .' + abbrev + 'r-' + breakpoint + '-' + size + ' { ' + prop + '-right:  ' + lengths.x + ' !important; }\n              .' + abbrev + 'b-' + breakpoint + '-' + size + ' { ' + prop + '-bottom: ' + lengths.y + ' !important; }\n              .' + abbrev + 'l-' + breakpoint + '-' + size + ' { ' + prop + '-left:   ' + lengths.x + ' !important; }\n              .' + abbrev + 'a-' + breakpoint + '-' + size + ' {\n                ' + prop + '-top:    ' + lengths.y + ' !important;\n                ' + prop + '-bottom: ' + lengths.y + ' !important;\n                ' + prop + '-right:  ' + lengths.x + ' !important;\n                ' + prop + '-left:   ' + lengths.x + ' !important;\n              }\n              .' + abbrev + 'x-' + breakpoint + '-' + size + ' {\n                ' + prop + '-right:  ' + lengths.x + ' !important;\n                ' + prop + '-left:   ' + lengths.x + ' !important;\n              }\n              .' + abbrev + 'y-' + breakpoint + '-' + size + ' {\n                ' + prop + '-top:    ' + lengths.y + ' !important;\n                ' + prop + '-bottom: ' + lengths.y + ' !important;\n              }\n            }\n          '));
        } else {
          spacingUtilityList.push('\n            /* xs */\n            .' + abbrev + '-' + size + ' { ' + prop + ':        ' + lengths.y + ' ' + lengths.x + ' !important; } /* a = All sides */\n            .' + abbrev + 't-' + size + ' { ' + prop + '-top:    ' + lengths.y + ' !important; }\n            .' + abbrev + 'r-' + size + ' { ' + prop + '-right:  ' + lengths.x + ' !important; }\n            .' + abbrev + 'b-' + size + ' { ' + prop + '-bottom: ' + lengths.y + ' !important; }\n            .' + abbrev + 'l-' + size + ' { ' + prop + '-left:   ' + lengths.x + ' !important; }\n            .' + abbrev + 'a-' + size + ' {\n              ' + prop + '-top:    ' + lengths.y + ' !important;\n              ' + prop + '-bottom: ' + lengths.y + ' !important;\n              ' + prop + '-right:  ' + lengths.x + ' !important;\n              ' + prop + '-left:   ' + lengths.x + ' !important;\n            }\n            .' + abbrev + 'x-' + size + ' {\n              ' + prop + '-right:  ' + lengths.x + ' !important;\n              ' + prop + '-left:   ' + lengths.x + ' !important;\n            }\n            .' + abbrev + 'y-' + size + ' {\n              ' + prop + '-top:    ' + lengths.y + ' !important;\n              ' + prop + '-bottom: ' + lengths.y + ' !important;\n            }\n          ');
        }
      });
    });
  });

  return '\n    /* Width and height */\n    \n    .w-100 { width: 100% !important; }\n    .h-100 { height: 100% !important; }\n    \n    /* Margin and Padding */\n    \n    .mx-auto {\n      margin-right: auto !important;\n      margin-left:  auto !important;\n    }\n    \n    ' + spacingUtilityList.join('\n') + '\n    \n    /* Positioning */\n    \n    .pos-f-t {\n      position: fixed;\n      top: 0;\n      right: 0;\n      left: 0;\n      z-index: ' + zindexNavbarFixed + ';\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  getSpacingUtilities: getSpacingUtilities
};