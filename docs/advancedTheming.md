If you wish to create a dynamic theme, you must create your theme object manually. That is because the object evaluates all
its values before being instantiated, thing that we cannot do via the functions.

Lucky enough, here is a template for you so that you can start quickly.

```js static
// My customizable theme
export function makeTheme(userTheme = { myScopedThemeName: {} }) {
  const newTheme = { myScopedThemeName: {} };
  const v = newTheme.myScopedThemeName;
  const u = userTheme.myScopedThemeName || {};

  v["$red"] = u["$red"] || "red";
  v["$something-red"] = u["$something-red"] || v["$red"];

  newTheme.myScopedThemeName = v;
  return { ...userTheme, ...newTheme };
}

// My default theme
export default makeTheme();
```

We have a series of [utilities](https://github.com/bootstrap-styled/utils) that can help you with calculating numerical
values directly in the theme.

Other libraries such as [Color](https://github.com/Qix-/color) are very useful for similar operations.
