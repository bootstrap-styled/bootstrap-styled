/* A Caption (Box) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import theme from 'config';

const defaultProps = { theme };

class Caption extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.string,
  }

  render() {
    return (
      <caption
        style={this.props.style}
        className={cn(this.props.className, 'caption')}
      >
        {this.props.children}
      </caption>
    );
  }
}

// eslint-disable-next-line no-class-assign
Caption = styled(Caption)`
  ${(props) => `
    &.caption {
      padding-top: ${props.theme['$table-cell-padding']};
      padding-bottom: ${props.theme['$table-cell-padding']};
      color: ${props.theme['$text-muted']};
      text-align: left;
      caption-side: top;
    }
  `}
`;

Caption.defaultProps = defaultProps;

export default Caption;
