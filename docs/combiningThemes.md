So what happens if your application consists of multiple bootstrap-styled modules?

The `createMakeTheme()` method is here to save you. It takes a list of makeThemes and combines them into one unique
makeTheme.


```js static
import createMakeTheme, { toMakeTheme } from 'bootstrap-styled/lib/utils';
import { makeTheme as makeDarkTheme } from 'coolProject/lib/theme';
import { makeTheme as makeLoginFormTheme } from 'coolLoginForm/lib/theme';

const myBetterLoginFormTheme = makeLoginFormTheme({
  '$bg-color': 'darkgreen',
  '$color': 'white'
});

const myApplicationTheme = createMakeTheme([
  // if you decide NOT to customize the darkTheme pass the makeTheme directly
  makeDarkTheme,
  // or use the toMakeTheme to make your personalized theme a makeTheme.
  toMakeTheme(myBetterLoginFormTheme)
]);

// As per the convention, always share your personalized theme as default and the customizable theme right after.
export default myApplicationTheme;
export const makeTheme = toMakeTheme(myApplicationTheme);
```
