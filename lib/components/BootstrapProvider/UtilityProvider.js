import styled from 'styled-components';
import theme from 'theme';
import { conditionalMixins } from '../../mixins';
import { alignUtils, backgroundUtils, bordersUtils, clearfixUtils, displayUtils, flexUtils, floatUtils, positionUtils, screenreadersUtils, sizingUtils, spacingUtils, textUtils, visibilityUtils } from '../../utilities';

var defaultProps = {
  theme: theme,
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
    visibility: false
  }
};

var ifThen = conditionalMixins.ifThen;

// eslint-disable-next-line no-class-assign
var UtilityProvider = styled.div.withConfig({
  displayName: 'UtilityProvider__UtilityProvider',
  componentId: 'UtilityProvider__UtilityProvider-1qpbmnh'
})(['', ''], function (props) {
  return '\n    ' + ifThen(props.utils.align, alignUtils.getAlignUtilities()) + '\n    ' + ifThen(props.utils.background, backgroundUtils.getBackgroundUtilities(props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest'])) + '\n    ' + ifThen(props.utils.border, bordersUtils.getBordersUtilities(props.theme['$enable-rounded'], props.theme['$border-radius'])) + '\n    ' + ifThen(props.utils.clearfix, clearfixUtils.getClearfixUtilities()) + '\n    ' + ifThen(props.utils.display, displayUtils.getDisplayUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.flex, flexUtils.getFlexUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.float, floatUtils.getFloatUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.screenreaders, screenreadersUtils.getScreenReadersUtilities()) + '\n    ' + ifThen(props.utils.spacing, spacingUtils.getSpacingUtilities(props.theme['$grid-breakpoints'], props.theme['$zindex-navbar-fixed'], props.theme['$spacers'])) + '\n    ' + ifThen(props.utils.text, textUtils.getTextUtilities(props.theme['$enable-hover-media-query'], props.theme['$grid-breakpoints'], props.theme['$font-weight-normal'], props.theme['$font-weight-bold'], props.theme['$text-muted'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$gray-dark'])) + '\n    ' + ifThen(props.utils.visibility, visibilityUtils.getVisibilityUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.position, positionUtils.getPositionUtilities(props.theme['$zindex-fixed'], props.theme['$zindex-sticky'])) + '\n    ' + ifThen(props.utils.sizing, sizingUtils.getSizingUtilities(props.theme['$sizes'])) + '\n  ';
});

UtilityProvider.defaultProps = defaultProps;

export default UtilityProvider;