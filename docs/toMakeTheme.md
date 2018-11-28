After personalizing your new theme you can make it customizable in just one line with the `toMakeTheme` function.

```js static
import { toMakeTheme } from '@bootstrap-styled/bootstrap-styled/lib/utils';

const darkTheme = makeTheme({
  '$body-bg': 'darkslategrey'.
  '$body-color': 'lightgrey'.
});

const darkMakeTheme = toMakeTheme(darkTheme);
```

This allows others to use your theme as a starting block for further personalization.

```js static
import makeDarkTheme from 'coolProject/lib/theme';

const myBetterDarkTheme = makeDarkTheme({
  '$body-color': 'grey'.
  '$brand-primary': 'darkblue',
  '$brand-success': 'darkgreen'
})

```

In turn, they can do the same and make their own theme a new starting block for further personalization.

```js static
import { toMakeTheme } from '@bootstrap-styled/bootstrap-styled/lib/utils';

const myBetterDarkMakeTheme = toMakeTheme(myBetterDarkTheme);
```

And finally, dark themes will come to rule the world!
