'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _mixins = require('../../mixins');

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
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

// eslint-disable-next-line no-class-assign
var UtilityProvider = _styledComponents2.default.div.withConfig({
  displayName: 'UtilityProvider__UtilityProvider'
})(['', ''], function (props) {
  return '\n    ' + _utilities.rebootUtils.body(props.theme['$font-family-base'], props.theme['$font-size-base'], props.theme['$font-weight-base'], props.theme['$line-height-base'], props.theme['$body-color'], props.theme['$body-bg']) + '\n    ' + (0, _mixins.ifThen)(props.utils.align, _utilities.alignUtils.getAlignUtilities()) + '\n    ' + (0, _mixins.ifThen)(props.utils.background, _utilities.backgroundUtils.getBackgroundUtilities(props.theme['$enable-hover-media-query'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest'])) + '\n    ' + (0, _mixins.ifThen)(props.utils.border, _utilities.bordersUtils.getBordersUtilities(props.theme['$enable-rounded'], props.theme['$border-radius'])) + '\n    ' + (0, _mixins.ifThen)(props.utils.clearfix, _utilities.clearfixUtils.getClearfixUtilities()) + '\n    ' + (0, _mixins.ifThen)(props.utils.cursor, _utilities.cursorUtils.getCursorUtilities()) + '\n    ' + (0, _mixins.ifThen)(props.utils.display, _utilities.displayUtils.getDisplayUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + (0, _mixins.ifThen)(props.utils.flex, _utilities.flexUtils.getFlexUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + (0, _mixins.ifThen)(props.utils.float, _utilities.floatUtils.getFloatUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + (0, _mixins.ifThen)(props.utils.screenreaders, _utilities.screenreadersUtils.getScreenReadersUtilities()) + '\n    ' + (0, _mixins.ifThen)(props.utils.spacing, _utilities.spacingUtils.getSpacingUtilities(props.theme['$grid-breakpoints'], props.theme['$zindex-navbar-fixed'], props.theme['$spacers'])) + '\n    ' + (0, _mixins.ifThen)(props.utils.text, _utilities.textUtils.getTextUtilities(props.theme['$enable-hover-media-query'], props.theme['$grid-breakpoints'], props.theme['$font-weight-normal'], props.theme['$font-weight-bold'], props.theme['$text-muted'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$gray-dark'])) + '\n    ' + (0, _mixins.ifThen)(props.utils.transition, _utilities.transitionUtils.getTransitionUtilities(props.theme['$enable-transitions'], props.theme['$transition-fade'], props.theme['$transition-collapse'])) + '\n    ' + (0, _mixins.ifThen)(props.utils.visibility, _utilities.visibilityUtils.getVisibilityUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + (0, _mixins.ifThen)(props.utils.position, _utilities.positionUtils.getPositionUtilities(props.theme['$zindex-fixed'], props.theme['$zindex-sticky'])) + '\n    ' + (0, _mixins.ifThen)(props.utils.sizing, _utilities.sizingUtils.getSizingUtilities(props.theme['$sizes'])) + '\n  ';
});

UtilityProvider.defaultProps = defaultProps;

exports.default = UtilityProvider;