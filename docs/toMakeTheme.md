After creating a new theme you can make it customizable with the `toMakeTheme` function.

```js static
import { toMakeTheme } from '@bootstrap-styled/bootstrap-styled/lib/utils';

const darkMakeTheme = toMakeTheme(darkTheme);
```

This creates a new starting point for someone that wishes to create another theme building from this one.

```js static
import makeDarkTheme from 'coolProject/lib/theme';

const myBetterDarkTheme = makeDarkTheme({
  '$brand-primary': 'darkblue',
  '$brand-success': 'darkgreen'
})

const myBetterDarkMakeTheme = toMakeTheme(myBetterDarkTheme);

```

And again, this new default theme can be used as a new starting point for more dark themes.
