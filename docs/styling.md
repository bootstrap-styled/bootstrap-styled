We use the amazing library [styled-components](https://www.styled-components.com/) to encapsulate the css in our React components.

Styling a component is as easy as this:

```js static
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class ButtonUnstyled extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object
  };

  render() {
    return (
      <Button className={this.props.className} {...props} />
    )
  }
}

const Button = styled(ButtonUnstyled)`
  ${(props) => `
    background-color: ${props.theme['$btn-primary-bg']};
    color: ${props.theme['$btn-primary-color']};
 `} 
`;

```

You probably recognized the variables used in the `Button` component's css.

By styling the bootstrap CSS framework as above and integrating its widely known variables, we produced a front-end library [@bootstrap-styled/v4](https://github.com/bootstrap-styled/v4)
that is easily customizable.
