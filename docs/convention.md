## Variables

### Syntax

We always begin our variables with `$`.

```js static
const v = {
 '$margin-top': '5px',
};
```

### Naming

We use american grammar not british. For no particular reason. So it is `gray` not `grey` and `customize` we do not `customise`.

We also believe that bootstrap variable naming convention is quite handy so we encourage others to follow it as well.

Be brief and accurate when writing a variable name.

```js static
const v = {
  // GOOD
  '$btn-padding-y': '5px',
  // BAD
  '$button-padding-top-and-bot': '5px',
};
```

## Exporting

### Themes

We always export themes twice, the object `theme` and the function `makeTheme`.
This will allow others to either use your theme or build on top of it.


Use the `toMakeTheme()` to make your theme a makeTheme.

```js static
import { toMakeTheme } from 'bootstrap-styled/lib/utils';
import { makeTheme as originalMakeTheme } from 'bootstrap-styled/lib/theme';

import makeTheme from '';
const myTheme = originalMakeTheme({
  '$bg-color': teal
});

const makeTheme = toMakeTheme(myTheme);
```

Always export your `theme` as `default` and your `makeTheme` as named.

```js static
export default myTheme;
export const makeTheme = toMakeTheme(myTheme);
```
