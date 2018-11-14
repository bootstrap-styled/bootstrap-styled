If you want to create more complex components and extend the same modularity, the chances are that you will need to add
 new variables. This is easily done as long as the new variables are scoped.

For example if you were creating a `LoginForm`.

```js static
import React from 'react';
import styled from 'styled-components';

class LoginForm extends React.Component {
...
}

const LoginFormStyled = styled(LoginForm)`
  ${(props) => `
    background-color: ${props.theme.loginForm['$login-form-bg-color']};
    color: ${props.theme.loginForm['$login-form-color']};
 `} 
`;

export default LoginForm;
```
