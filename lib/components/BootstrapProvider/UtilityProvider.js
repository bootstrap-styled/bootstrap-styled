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
    align: false,
    background: false,
    border: false,
    clearfix: false,
    display: false,
    flex: false,
    float: false,
    position: false,
    screenreaders: false,
    sizing: false,
    spacing: false,
    text: false,
    transition: false,
    visibility: false
  }
};

var ifThen = _mixins.conditionalMixins.ifThen;

// eslint-disable-next-line no-class-assign
var UtilityProvider = _styledComponents2.default.div.withConfig({
  displayName: 'UtilityProvider__UtilityProvider',
  componentId: 'UtilityProvider__UtilityProvider-1qpbmnh'
})(['', ''], function (props) {
  return '\n    ' + ifThen(props.utils.align, _utilities.alignUtils.getAlignUtilities()) + '\n    ' + ifThen(props.utils.background, _utilities.backgroundUtils.getBackgroundUtilities(props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest'])) + '\n    ' + ifThen(props.utils.border, _utilities.bordersUtils.getBordersUtilities(props.theme['$enable-rounded'], props.theme['$border-radius'])) + '\n    ' + ifThen(props.utils.clearfix, _utilities.clearfixUtils.getClearfixUtilities()) + '\n    ' + ifThen(props.utils.display, _utilities.displayUtils.getDisplayUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.flex, _utilities.flexUtils.getFlexUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.float, _utilities.floatUtils.getFloatUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.screenreaders, _utilities.screenreadersUtils.getScreenReadersUtilities()) + '\n    ' + ifThen(props.utils.spacing, _utilities.spacingUtils.getSpacingUtilities(props.theme['$grid-breakpoints'], props.theme['$zindex-navbar-fixed'], props.theme['$spacers'])) + '\n    ' + ifThen(props.utils.text, _utilities.textUtils.getTextUtilities(props.theme['$enable-hover-media-query'], props.theme['$grid-breakpoints'], props.theme['$font-weight-normal'], props.theme['$font-weight-bold'], props.theme['$text-muted'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$gray-dark'])) + '\n    ' + ifThen(props.utils.transition, _utilities.transitionUtils.getTransitionUtilities(props.theme['$enable-transitions'], props.theme['$transition-fade'], props.theme['$transition-collapse'])) + '\n    ' + ifThen(props.utils.visibility, _utilities.visibilityUtils.getVisibilityUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.position, _utilities.positionUtils.getPositionUtilities(props.theme['$zindex-fixed'], props.theme['$zindex-sticky'])) + '\n    ' + ifThen(props.utils.sizing, _utilities.sizingUtils.getSizingUtilities(props.theme['$sizes'])) + '\n  ';
});

UtilityProvider.defaultProps = defaultProps;

exports.default = UtilityProvider;