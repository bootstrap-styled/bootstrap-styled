import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import omit from 'lodash.omit';
import { makeContainer, makeContainerMaxWidths } from 'bootstrap-styled-mixins/lib/grid';

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
    '$container-max-widths': {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
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
    '$container-max-widths': PropTypes.object,
    '$enable-grid-classes': PropTypes.bool,
  }),
};
class ContainerUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
      <div className={cn(className, 'container')} {...attributes} />
    );
  }
}
/**
 * Use our `<Container />` component, to affect common layout to your components.
 */
const Container = styled(ContainerUnstyled)`
  ${(props) => `
    ${makeContainer(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-gutter-widths']
    )}
    
    ${makeContainerMaxWidths(
      props.theme['$enable-grid-classes'],
      props.theme['$container-max-widths'],
      props.theme['$grid-breakpoints']
    )}
  `}
`;

Container.defaultProps = defaultProps;
Container.propTypes = propTypes;

/** @component */
export default Container;

