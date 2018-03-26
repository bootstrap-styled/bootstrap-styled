import styled from 'styled-components';
import PropTypes from 'prop-types';


export const defaultProps = {
  theme: {
    '$hr-border-width': '1px',
    '$hr-border-color': 'rgba(0, 0, 0, 0.1)',
  },
};
export const propTypes = {
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$hr-border-width': PropTypes.string,
    '$hr-border-color': PropTypes.string,
  }),
};

const Hr = styled.hr`
  ${(props) => `
    margin-top: ${props.theme['$spacer-y']};
    margin-bottom: ${props.theme['$spacer-y']};
    border: 0;
    border-top: ${props.theme['$hr-border-width']} solid ${props.theme['$hr-border-color']};
  `}
`;

Hr.defaultProps = defaultProps;
Hr.propTypes = propTypes;

/** @component */
export default Hr;
