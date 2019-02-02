We use variables to ensure that all our components are customizable. The props `theme` contains all our variables.

```js static
import styled from 'styled-components'

const Button = styled.button`
  ${(props) => `
     background-color: ${props.theme['$btn-primary-bg']};
     color: ${props.theme['$btn-primary-color']};
  `};
`;

export default Button;
```

> You probably recognized the variables used in the `Button` component's css.

> By styling the bootstrap CSS framework as above and integrating its widely known variables, we produced a front-end
library [@bootstrap-styled/v4](https://github.com/bootstrap-styled/v4) that is highly and easily customizable. It is also
a great place if you are looking for more complex examples.
