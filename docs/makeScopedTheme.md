When creating new components that require new variables, we ***always*** create a scope for the theme of that component. 


To create the theme you simply use the provided function `makeScopedTheme`:

```jsx static
import { makeScopedTheme } from 'bootstrap-styled/lib/utils';

const loginFormTheme = makeScopedTheme('loginForm', {
  '$bg-color': 'teal',
  '$color': 'blue'
});
```

And as with the original theme, you can make your theme customizable with the `toMakeTheme` function.

```js static
import { toMakeTheme } from 'bootstrap-styled/lib/utils';

const loginFormMakeTheme = toMakeTheme(loginFormTheme);
```

This will allow people to customize and share their own themes of your component, and make them customizable again!
