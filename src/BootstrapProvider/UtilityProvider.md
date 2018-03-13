`<UtilityProvider />` component example:

Utils are all activated by default. They inject some CSS utilities classes in the scope of the `<UtilityProvider />`. They will be available in all your components using the className attributes.

Adding the `<UtilityProvider />` to your project and disabling all the utilities like this:

```js static
import { UtilityProvider, theme } from 'bootstrap-styled';

ReactDOM.render(
    <UtilityProvider theme={theme} utils={{
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
    </UtilityProvider>
  document.getElementById('app')
);
```

___Note that these utils are also available with `<BootstrapProvider />`.___
