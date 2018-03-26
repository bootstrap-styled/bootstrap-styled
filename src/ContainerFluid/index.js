import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import omit from 'lodash.omit';
import { makeContainer } from 'bootstrap-styled-mixins/lib/grid';

export const defaultProps = {
  theme: {
    '$grid-gutter-width-base': '30px',
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px',
    },
    '$enable-grid-classes': true,
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$grid-gutter-width-base': PropTypes.string,
    '$grid-gutter-widths': PropTypes.object,
    '$enable-grid-classes': PropTypes.bool,
  }),
};
class ContainerFluidUnstyled extends React.Component {    // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <div className={cn(className, 'container-fluid')} {...attributes} />
    );
  }
}
/**
 * Use our `<ContainerFluid />` component, to affect common layout to your components.
 */
const ContainerFluid = styled(ContainerFluidUnstyled)`
  ${(props) => `
    ${makeContainer(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-gutter-widths']
    )}
  `}
`;

ContainerFluid.defaultProps = defaultProps;
ContainerFluid.propTypes = propTypes;

/** @component */
export default ContainerFluid;

