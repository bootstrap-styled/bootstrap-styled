'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _conditional = require('bootstrap-styled-mixins/lib/conditional');

var _align = require('bootstrap-styled-mixins/lib/utilities/align');

var _align2 = _interopRequireDefault(_align);

var _background = require('bootstrap-styled-mixins/lib/utilities/background');

var _background2 = _interopRequireDefault(_background);

var _borders = require('bootstrap-styled-mixins/lib/utilities/borders');

var _borders2 = _interopRequireDefault(_borders);

var _clearfix = require('bootstrap-styled-mixins/lib/utilities/clearfix');

var _clearfix2 = _interopRequireDefault(_clearfix);

var _cursor = require('bootstrap-styled-mixins/lib/utilities/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _display = require('bootstrap-styled-mixins/lib/utilities/display');

var _display2 = _interopRequireDefault(_display);

var _flex = require('bootstrap-styled-mixins/lib/utilities/flex');

var _flex2 = _interopRequireDefault(_flex);

var _float = require('bootstrap-styled-mixins/lib/utilities/float');

var _float2 = _interopRequireDefault(_float);

var _position = require('bootstrap-styled-mixins/lib/utilities/position');

var _position2 = _interopRequireDefault(_position);

var _reboot = require('bootstrap-styled-mixins/lib/utilities/reboot');

var _reboot2 = _interopRequireDefault(_reboot);

var _screenreaders = require('bootstrap-styled-mixins/lib/utilities/screenreaders');

var _screenreaders2 = _interopRequireDefault(_screenreaders);

var _sizing = require('bootstrap-styled-mixins/lib/utilities/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _spacing = require('bootstrap-styled-mixins/lib/utilities/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

var _text = require('bootstrap-styled-mixins/lib/utilities/text');

var _text2 = _interopRequireDefault(_text);

var _transition = require('bootstrap-styled-mixins/lib/utilities/transition');

var _transition2 = _interopRequireDefault(_transition);

var _visibility = require('bootstrap-styled-mixins/lib/utilities/visibility');

var _visibility2 = _interopRequireDefault(_visibility);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = {
  theme: _theme2.default,
  utils: {
    align: true,
    background: true,
    border: true,
    clearfix: true,
    cursor: true,
    display: true,
    flex: true,
    float: true,
    position: true,
    screenreaders: true,
    sizing: true,
    spacing: true,
    text: true,
    transition: true,
    visibility: true
  }
};
var propTypes = exports.propTypes = {
  /** Specified node element will be passed as children of `<UtilityProvider />` component. */
  children: _propTypes2.default.node,
  /** Theme variables. */
  theme: _propTypes2.default.object,
  /** Utilities variables. */
  utils: _propTypes2.default.shape({
    /** Toggles align theme variables. */
    align: _propTypes2.default.bool,
    /** Toggles background theme variables. */
    background: _propTypes2.default.bool,
    /** Toggles `<A />` link theme variables. */
    a: _propTypes2.default.bool,
    /** Toggles border theme variables. */
    border: _propTypes2.default.bool,
    /** Toggles clearfix theme variables. */
    clearfix: _propTypes2.default.bool,
    /** Toggles display theme variables. */
    display: _propTypes2.default.bool,
    /** Toggles flex theme variables. */
    flex: _propTypes2.default.bool,
    /** Toggles float theme variables. */
    float: _propTypes2.default.bool,
    /** Toggles position theme variables. */
    position: _propTypes2.default.bool,
    /** Toggles screenreaders theme variables. */
    screenreaders: _propTypes2.default.bool,
    /** Toggles sizing theme variables. */
    sizing: _propTypes2.default.bool,
    /** Toggles spacing theme variables. */
    spacing: _propTypes2.default.bool,
    /** Toggles text theme variables. */
    text: _propTypes2.default.bool,
    /** Toggles transition theme variables. */
    transition: _propTypes2.default.bool,
    /** Toggles visibility theme variables. */
    visibility: _propTypes2.default.bool
  })
};

var UtilityProvider = _styledComponents2.default.div.withConfig({
  displayName: 'UtilityProvider'
})(['', ''], function (props) {
  return '\n    ' + _reboot2.default.body(props.theme['$font-family-base'], props.theme['$font-size-base'], props.theme['$font-weight-base'], props.theme['$line-height-base'], props.theme['$body-color'], props.theme['$body-bg']) + '\n    ' + (0, _conditional.ifThen)(props.utils.align, _align2.default.getAlignUtilities()) + '\n    ' + (0, _conditional.ifThen)(props.utils.background, _background2.default.getBackgroundUtilities(props.theme['$enable-hover-media-query'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest'])) + '\n    ' + (0, _conditional.ifThen)(props.utils.border, _borders2.default.getBordersUtilities(props.theme['$enable-rounded'], props.theme['$border-radius'])) + '\n    ' + (0, _conditional.ifThen)(props.utils.clearfix, _clearfix2.default.getClearfixUtilities()) + '\n    ' + (0, _conditional.ifThen)(props.utils.cursor, _cursor2.default.getCursorUtilities()) + '\n    ' + (0, _conditional.ifThen)(props.utils.display, _display2.default.getDisplayUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + (0, _conditional.ifThen)(props.utils.flex, _flex2.default.getFlexUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + (0, _conditional.ifThen)(props.utils.float, _float2.default.getFloatUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + (0, _conditional.ifThen)(props.utils.screenreaders, _screenreaders2.default.getScreenReadersUtilities()) + '\n    ' + (0, _conditional.ifThen)(props.utils.spacing, _spacing2.default.getSpacingUtilities(props.theme['$grid-breakpoints'], props.theme['$spacers'] // eslint-disable-line dot-notation
  )) + '\n    ' + (0, _conditional.ifThen)(props.utils.text, _text2.default.getTextUtilities(props.theme['$enable-hover-media-query'], props.theme['$grid-breakpoints'], props.theme['$font-weight-normal'], props.theme['$font-weight-bold'], props.theme['$text-muted'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$gray-dark'])) + '\n    ' + (0, _conditional.ifThen)(props.utils.transition, _transition2.default.getTransitionUtilities(props.theme['$enable-transitions'], props.theme['$transition-fade'], props.theme['$transition-collapse'])) + '\n    ' + (0, _conditional.ifThen)(props.utils.visibility, _visibility2.default.getVisibilityUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + (0, _conditional.ifThen)(props.utils.position, _position2.default.getPositionUtilities(props.theme['$zindex-fixed'], props.theme['$zindex-sticky'])) + '\n    ' + (0, _conditional.ifThen)(props.utils.sizing, _sizing2.default.getSizingUtilities(props.theme['$sizes'] // eslint-disable-line dot-notation
  )) + '\n  ';
});

UtilityProvider.defaultProps = defaultProps;
UtilityProvider.propTypes = propTypes;

/** @component */
exports.default = UtilityProvider;