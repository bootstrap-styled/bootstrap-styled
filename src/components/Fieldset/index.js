/* A Fieldset (Box) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class Fieldset extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    form: PropTypes.string,
    name: PropTypes.string,
  }

  render() {
    const classList = ['fieldset'];
    return (
      <fieldset
        disabled={this.props.disabled}
        form={this.props.form}
        name={this.props.name}
        className={cn(this.props.className, classList)}
      >
        {this.props.children}
      </fieldset>
    );
  }
}

// eslint-disable-next-line no-class-assign
Fieldset = styled(Fieldset)`
    &.fieldset {
      /* Chrome and Firefox set a 'min-width: min-content;' on fieldsets, */
      /* so we reset that to ensure it behaves more like a standard block element. */
      /* See https://github.com/twbs/bootstrap/issues/12359. */
      min-width: 0;
      /* Reset the default outline behavior of fieldsets so they don't affect page layout. */
      padding: 0;
      margin: 0;
      border: 0;
    }
`;

export default Fieldset;
