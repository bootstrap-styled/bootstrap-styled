[![build status]($CI_PROJECT_URL/badges/v$PACKAGE_VERSION/build.svg)]($CI_PROJECT_URL/commits/v$PACKAGE_VERSION)
[![coverage report]($CI_PROJECT_URL/badges/v$PACKAGE_VERSION/coverage.svg)]($CI_PROJECT_URL/commits/v$PACKAGE_VERSION)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

![image](https://img.shields.io/badge/version-$PACKAGE_VERSION-green.svg)
![image](https://img.shields.io/badge/node-$NODE_VERSION-brightgreen.svg)
![image](https://img.shields.io/badge/npm-$NPM_VERSION-red.svg)
![image](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![image]($IMG_SHIELD_PUBLISHING)


Bootstrap-styled is NOT another framework, it is a mindset towards re-usable components and a set of tools that simplify the creation of sharable themes. 

## Why bootstrap-styled?

Following the philosophies that animate the open-source trend, we thought that the re-usability offered by React was not emphasized enough in the
 front-end-sphere.

By combining the ability of styled-components - to attach the css within your React components - to the widely known variables used in 
 Bootstrap framework we have a very easy way to design components that contain their own css and can very easily be customized.
  More than that, these basic components are a perfect starting point to create modules, which will be themselves highly customizable 
  and desgined very quickly.

Let us demonstrate.

## BootstrapProvider

The `BootstrapProvider` is the component that is in charge of distributing the theme and the global utilities to the other components. It sits at the very top of your application:

```js
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import theme from 'path/to/your/theme';

const App = ({ children }) => (
  <BootstrapProvider theme={theme}>
    {children}
  </BootstrapProvider>
)
```

Check out the full documentation of the [BootstrapProvider](https://module.kopaxgroup.com/bootstrap-styled/provider) and its [global utilities](https://module.kopaxgroup.com/bootstrap-styled/css-utils).

## Styled-components

Styled-components is a great library that directly attaches the css to our components.

```js
import styled from 'styled-components';

class ButtonUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
     className: PropTypes.string.isRequired,
     theme: PropTypes.object,
  };

  render() {
    const { className } = omit(this.props, ['theme']);

    return (
      <button className={className}>My styled button</button>
    );
  }
}

const Button = styled(ButtonUnstyled)`
  ${(props) => `
    background-color: ${props.theme['$brand-primary']};
    color: ${props.theme['$white']}; 
  `}
`;
```

If you want to know more about styling components, you can either check their official [documentation](https://www.styled-components.com/) or for numerous examples you can directly look at its application in [@bootstrap-styled/v4](https://module.kopaxgroup.com/bootstrap-styled/v4). The v4 version is the styling, using the original bootstrap variables provided here, into React components.


## Creating your own theme

Using your own components or those already provided in [@bootstrap-styled/v4](https://module.kopaxgroup.com/bootstrap-styled/v4), you will want to create your own theme. The `makeTheme` function will directly modify the variables in the theme.


```js
import { makeTheme } from 'bootstrap-styled/lib/theme/makeTheme';

const theme = makeTheme({ 
  '$brand-primary': 'pink',
  $white: '#EEE',
})

export default theme;
```


## Designing modules

The most interesting part of the library actually starts here. It is when creating modules that the process described above becomes powerful.

When designing your own modules you may want to create your own variables so that you can change its theme very quickly.

```js
import styled from 'styled-components';

class ModuleUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
     className: PropTypes.string.isRequired,
     theme: PropTypes.object,
  };

  render() {
    const { className } = omit(this.props, ['theme']);

    return (
      <button className={className}>My styled button</button>
    );
  }
}

const Module = styled(ModuleUnstyled)`
  ${(props) => `
    background-color: ${props.theme.module['$brand-primary']};
    color: ${props.theme.module['$white']}; 
  `}
`;
```


## Combining modules


The `makeTheme` provided in this package also allows you to pass a list of makeThemes:


```js
import { makeTheme } from 'bootstrap-styled/lib/theme/makeTheme';
import { makeTheme as makeThemeModule1 } from 'myModule/lib/makeTheme'
import { makeTheme as makeThemeModule2 } from 'myModule/lib/makeTheme'

import personalizedTheme from 'path/to/your/theme';

const makeThemeList = [makeThemeModule1, makeThemeModule2];
const appTheme = makeTheme(makeThemeList, personalizedTheme);

export default appTheme;
```

This will aggregate all the makeThemes provided by each module and apply the theme you can designed.


```js
import { makeTheme } from 'bootstrap-styled/lib/theme/makeTheme';

const theme = makeTheme({ 
  '$brand-primary': 'pink',
  $white: '#EEE',
})

export default theme;
```


If you wish to only use bootstrap like components you can use our library [@bootstrap-styled/v4](https://module.kopaxgroup.com/bootstrap-styled/v4).

To modify the theme it is as simple as this:



To create a styled-component is as easy as this: ...

Now, we simply replace the css values with the popular bootstrap values. This enables us to very quickly customize our components.

Here you can see how we integrated the css thanks to styled-component in all of bootstrap.

This is not much different then what others have already done. However, it is here that we saw the community power that could stem from such a process. Now, you can create modules that will, follow the styled-component process, attach its css within it The real difference lies in what follows:

We 

example bootstrap:
We have used styled-components to Here you can see how we applied 

