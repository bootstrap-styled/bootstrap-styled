
```js static

    // Control the default spacing of most Bootstrap elements by modifying these variables.
    v['$spacer'] = '1rem';
  
    detectedUnit = detectUnit(v['$spacer']);
    v['$spacer-halved'] = ((rmUnit(v['$spacer'], detectedUnit) / 2) + detectedUnit);
  
    v['$spacer-x'] = v['$spacer'];
    v['$spacer-y'] = v['$spacer'];
    v['$spacers'] = {
      0: 0,
      1: (rmUnit(v['$spacer-x']) * 0.25) + detectedUnit,
      2: (rmUnit(v['$spacer-x']) * 0.5) + detectedUnit,
      3: v['$spacer'],
      4: (rmUnit(v['$spacer-x']) * 1.5) + detectedUnit,
      5: (rmUnit(v['$spacer-x']) * 3) + detectedUnit,
    };
    
    v['$border-width'] = '1px';
  
    // This variable affects the `.h-*` and `.w-*` global classes.
    v['$sizes'] = {
      25: '25%',
      50: '50%',
      75: '75%',
      100: '100%',
    };

```
