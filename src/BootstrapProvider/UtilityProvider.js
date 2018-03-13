import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifThen } from 'bootstrap-styled-mixins/lib/conditional';
import alignUtils from 'bootstrap-styled-mixins/lib/utilities/align';
import backgroundUtils from 'bootstrap-styled-mixins/lib/utilities/background';
import bordersUtils from 'bootstrap-styled-mixins/lib/utilities/borders';
import clearfixUtils from 'bootstrap-styled-mixins/lib/utilities/clearfix';
import cursorUtils from 'bootstrap-styled-mixins/lib/utilities/cursor';
import displayUtils from 'bootstrap-styled-mixins/lib/utilities/display';
import flexUtils from 'bootstrap-styled-mixins/lib/utilities/flex';
import floatUtils from 'bootstrap-styled-mixins/lib/utilities/float';
import positionUtils from 'bootstrap-styled-mixins/lib/utilities/position';
import rebootUtils from 'bootstrap-styled-mixins/lib/utilities/reboot';
import screenreadersUtils from 'bootstrap-styled-mixins/lib/utilities/screenreaders';
import sizingUtils from 'bootstrap-styled-mixins/lib/utilities/sizing';
import spacingUtils from 'bootstrap-styled-mixins/lib/utilities/spacing';
import textUtils from 'bootstrap-styled-mixins/lib/utilities/text';
import transitionUtils from 'bootstrap-styled-mixins/lib/utilities/transition';
import visibilityUtils from 'bootstrap-styled-mixins/lib/utilities/visibility';
import theme from '../theme';


export const defaultProps = {
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
export const propTypes = {
  /** Specified node element will be passed as children of `<UtilityProvider />` component. */
  children: PropTypes.node,
  /** Theme variables. */
  theme: PropTypes.object,
  /** Utilities variables. */
  utils: PropTypes.shape({
    /** Toggles align theme variables. */
    align: PropTypes.bool,
    /** Toggles background theme variables. */
    background: PropTypes.bool,
    /** Toggles `<A />` link theme variables. */
    a: PropTypes.bool,
    /** Toggles border theme variables. */
    border: PropTypes.bool,
    /** Toggles clearfix theme variables. */
    clearfix: PropTypes.bool,
    /** Toggles display theme variables. */
    display: PropTypes.bool,
    /** Toggles flex theme variables. */
    flex: PropTypes.bool,
    /** Toggles float theme variables. */
    float: PropTypes.bool,
    /** Toggles position theme variables. */
    position: PropTypes.bool,
    /** Toggles screenreaders theme variables. */
    screenreaders: PropTypes.bool,
    /** Toggles sizing theme variables. */
    sizing: PropTypes.bool,
    /** Toggles spacing theme variables. */
    spacing: PropTypes.bool,
    /** Toggles text theme variables. */
    text: PropTypes.bool,
    /** Toggles transition theme variables. */
    transition: PropTypes.bool,
    /** Toggles visibility theme variables. */
    visibility: PropTypes.bool,
  }),
};

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
UtilityProvider.propTypes = propTypes;

/** @component */
export default UtilityProvider;
