The `<BootstrapProvider />` component allows you to configure the styling of all your components and to toggle global options. You are not required to use it, but we strongly suggest applying it so that you benefit of the full extent of our application.

#### **Overriding Variables**

The theme allows you to very quickly change the value of variables associated with the CSS that builds our components.

```js static
<BootstrapProvider
  theme={{
    '$brand-primary': 'red',
  }}
 >
  <App />
</BootstrapProvider>
```

___This will override the original color of $brand-primary and set it's value to red for all Components that make use of this variable.___

#### **Global options**

```js static
<BootstrapProvider
  theme={{
    '$spacer': '.5rem',
    '$enable-dynamic-links': false,
    '$enable-rounded': true,
  }}
 >
  <App />
</BootstrapProvider>
```

#### **Creating your own theme**

If you want to do more than just overriding variables, you can also create your own and design a logic amongst them. To do so, you must first create a function that will build the theme for you:

```js static
import { unit } from 'bootstrap-styled-mixins';

function makeTheme(u = {}) {
  const v = {};
  // do all the logic to calculate your theme values
  v['$my-var'] = u['$my-var'] || '10px';
  v['$my-other-var'] = u['$my-other-var'] || unit.math.divide(v['$my-var'], 2);
  return v;
}
```

You can also combine your other themes together to create your application theme.

```js static
import { BootstrapProvider, makeTheme as makeThemeBoostrap } from 'bootstrap-styled';
import { makeTheme as makeThemeMotion } from 'bootstrap-styled-motion';
import { makeTheme as makeThemeFoobar } from 'bootstrap-styled-foobar-components';

const theme = {
  ...makeThemeBootstrap({ '$enable-rounded': false }),
  ...makeThemeMotion(),
  ...makeThemeFoobar({ '$my-var': '5px' })
};

<BootstrapProvider theme={theme}>
  <App />
</BootstrapProvider>
```

#### **Utils**

Utils are all activated by default. They inject some CSS utilities classes in the scope of the BootstrapProvider. They will be available in all your components using the className attributes.

Adding the BootstrapProvider to your and disabling all the utilities like this:

```js static
import { BootstrapProvider, theme } from 'bootstrap-styled';

ReactDOM.render(
    <BootstrapProvider theme={theme} utils={{
      align: false,
      background: false,
      border: false,
      clearfix: false,
      cursor: false,
      display: false,
      flex: false,
      float: false,
      position: false,
      screenreaders: false,
      sizing: false,
      spacing: false,
      text: false,
      transition: false,
      visibility: false,
    }}>
      <App />
    </BootstrapProvider>
  document.getElementById('app')
);
```

In addition to the BootstrapProvider, you will want to have our global-styles for <html /> injected in your app.

```js static
import { getGlobalStyles } from 'bootstrap-styled';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${getGlobalStyles()}
`;
```

> > **Heads up!** The `BootstrapProvider` is an extended version of the `ThemeProvider` and contains bootstrap additional fixes to give you a better experience and higher adaptability to browsers and devices. It also include lots of css utilities.
