/* A Caption (Box) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import bsTheme from 'theme';

const defaultProps = { theme: bsTheme };

class Caption extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars

    return (
      <caption
        className={cn(className, 'caption')}
        {...rest}
      >
        {children}
      </caption>
    );
  }
}

// eslint-disable-next-line no-class-assign
Caption = styled(Caption)`
  ${(props) => `
    padding-top: ${props.theme['$table-cell-padding']};
    padding-bottom: ${props.theme['$table-cell-padding']};
    color: ${props.theme['$text-muted']};
    text-align: left;
    caption-side: top;
  `}
`;

Caption.defaultProps = defaultProps;

export default Caption;
