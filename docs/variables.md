List of available variables based on bootstrap v4.

Certain utilities are used to calculate variables dynamically so that you don't loose your time.

We use [Colors](https://github.com/Qix-/color) to dynamically assign shades of color to connected variables.

```jsx static
  v['$state-success-bg'] = '#dff0d8';

  v['$state-success-border'] = Color(v['$state-success-bg']).darken(0.05).toString();
```


Also check out our [utils repos](https://github.com/bootstrap-styled/utils) which gives tools to calculate `detectUnit`
 and `rmUnit`.

```jsx static
  v['$spacer'] = '1rem';

  detectedUnit = detectUnit(v['$spacer']);
  v['$spacer-halved'] = ((rmUnit(v['$spacer'], detectedUnit) / 2) + detectedUnit);
```

You can also find the component variables own [components](https://github.com/bootstrap-styled/v4).

