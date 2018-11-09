```js static
  v['$blockquote-small-color'] = v['$gray-light'];
  detectedUnit = detectUnit(v['$font-size-base']);
  v['$blockquote-font-size'] = (rmUnit(v['$font-size-base'], detectedUnit) * 1.25) + detectedUnit;
  v['$blockquote-border-color'] = v['$gray-lighter'];
  v['$blockquote-border-width'] = '.25rem';
```
