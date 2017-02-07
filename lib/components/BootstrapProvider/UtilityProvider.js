var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import { conditionalMixins } from '../../mixins';
import { alignUtils, aUtils, backgroundUtils, bordersUtils, clearfixUtils, displayUtils, flexUtils, floatUtils, screenreadersUtils, spacingUtils, textUtils, visibilityUtils } from '../../utilities';
import theme from '../../config';

var defaultProps = {
  theme: theme,
  utils: {
    align: false,
    background: false,
    a: false,
    border: false,
    clearfix: false,
    display: false,
    flex: false,
    float: false,
    screenreaders: false,
    spacing: false,
    text: false,
    visibility: false
  }
};

var ifThen = conditionalMixins.ifThen;

// eslint-disable-next-line no-class-assign
var UtilityProvider = styled.div(_templateObject, function (props) {
  return '\n    ' + ifThen(props.utils.align, alignUtils.getAlignUtilities()) + '\n    ' + ifThen(props.utils.background, backgroundUtils.getBackgroundUtilities(props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest'])) + '\n    ' + ifThen(props.utils.a, aUtils.a(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query'])) + '\n    ' + ifThen(props.utils.border, bordersUtils.getBordersUtilities(props.theme['$enable-rounded'], props.theme['$border-radius'])) + '\n    ' + ifThen(props.utils.clearfix, clearfixUtils.getClearfixUtilities()) + '\n    ' + ifThen(props.utils.display, displayUtils.getDisplayUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.flex, flexUtils.getFlexUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.float, floatUtils.getFloatUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.screenreaders, screenreadersUtils.getScreenReadersUtilities()) + '\n    ' + ifThen(props.utils.spacing, spacingUtils.getSpacingUtilities(props.theme['$grid-breakpoints'], props.theme['$zindex-navbar-fixed'], props.theme['$spacers'])) + '\n    ' + ifThen(props.utils.text, textUtils.getTextUtilities(props.theme['$enable-hover-media-query'], props.theme['$grid-breakpoints'], props.theme['$font-weight-normal'], props.theme['$font-weight-bold'], props.theme['$text-muted'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$gray-dark'])) + '\n    ' + ifThen(props.utils.visibility, visibilityUtils.getVisibilityUtilities(props.theme['$grid-breakpoints'])) + '    \n  ';
});

UtilityProvider.defaultProps = defaultProps;

export default UtilityProvider;