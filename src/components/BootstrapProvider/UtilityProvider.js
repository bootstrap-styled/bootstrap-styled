import styled from 'styled-components';
import theme from '../../theme';
import { ifThen } from '../../mixins';
import {
  alignUtils,
  backgroundUtils,
  bordersUtils,
  clearfixUtils,
  cursorUtils,
  displayUtils,
  flexUtils,
  floatUtils,
  positionUtils,
  screenreadersUtils,
  sizingUtils,
  spacingUtils,
  textUtils,
  transitionUtils,
  visibilityUtils,
  rebootUtils,
} from '../../utilities';

const defaultProps = {
  theme,
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
    visibility: true,
  },
};

// eslint-disable-next-line no-class-assign
const UtilityProvider = styled.div`
  ${(props) => `
    ${rebootUtils.body(
      props.theme['$font-family-base'],
      props.theme['$font-size-base'],
      props.theme['$font-weight-base'],
      props.theme['$line-height-base'],
      props.theme['$body-color'],
      props.theme['$body-bg'],
    )}
    ${ifThen(props.utils.align, alignUtils.getAlignUtilities())}
    ${ifThen(props.utils.background, backgroundUtils.getBackgroundUtilities(
      props.theme['$enable-hover-media-query'],
      props.theme['$brand-primary'],
      props.theme['$brand-success'],
      props.theme['$brand-info'],
      props.theme['$brand-warning'],
      props.theme['$brand-danger'],
      props.theme['$brand-inverse'],
      props.theme['$gray-lightest'],
    ))}
    ${ifThen(props.utils.border, bordersUtils.getBordersUtilities(
      props.theme['$enable-rounded'],
      props.theme['$border-radius']
    ))}
    ${ifThen(props.utils.clearfix, clearfixUtils.getClearfixUtilities())}
    ${ifThen(props.utils.cursor, cursorUtils.getCursorUtilities())}
    ${ifThen(props.utils.display, displayUtils.getDisplayUtilities(
      props.theme['$grid-breakpoints'],
    ))}
    ${ifThen(props.utils.flex, flexUtils.getFlexUtilities(
      props.theme['$grid-breakpoints'],
    ))}
    ${ifThen(props.utils.float, floatUtils.getFloatUtilities(
      props.theme['$grid-breakpoints'],
    ))}
    ${ifThen(props.utils.screenreaders, screenreadersUtils.getScreenReadersUtilities())}
    ${ifThen(props.utils.spacing, spacingUtils.getSpacingUtilities(
      props.theme['$grid-breakpoints'],
      props.theme['$zindex-navbar-fixed'],
      props.theme['$spacers'], // eslint-disable-line dot-notation
    ))}
    ${ifThen(props.utils.text, textUtils.getTextUtilities(
      props.theme['$enable-hover-media-query'],
      props.theme['$grid-breakpoints'],
      props.theme['$font-weight-normal'],
      props.theme['$font-weight-bold'],
      props.theme['$text-muted'],
      props.theme['$brand-primary'],
      props.theme['$brand-success'],
      props.theme['$brand-info'],
      props.theme['$brand-warning'],
      props.theme['$brand-danger'],
      props.theme['$gray-dark'],
    ))}
    ${ifThen(props.utils.transition, transitionUtils.getTransitionUtilities(
      props.theme['$enable-transitions'],
      props.theme['$transition-fade'],
      props.theme['$transition-collapse'],
    ))}
    ${ifThen(props.utils.visibility, visibilityUtils.getVisibilityUtilities(
      props.theme['$grid-breakpoints'],
    ))}
    ${ifThen(props.utils.position, positionUtils.getPositionUtilities(
      props.theme['$zindex-fixed'],
      props.theme['$zindex-sticky'],
    ))}
    ${ifThen(props.utils.sizing, sizingUtils.getSizingUtilities(
      props.theme['$sizes'], // eslint-disable-line dot-notation
    ))}
  `}
`;

UtilityProvider.defaultProps = defaultProps;

export default UtilityProvider;
