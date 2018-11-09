
```js static

    // Control the default spacing of most Bootstrap elements by modifying these variables.
    v['$spacer'] = '1rem';
  
    detectedUnit = detectUnit(v['$spacer']);
    v['$spacer-halved'] = ((rmUnit(v['$spacer'], detectedUnit) / 2) + detectedUnit);
  
    v['$spacer-x'] = v['$spacer'];
    v['$spacer-y'] = v['$spacer'];
    v['$spacers'] = {
      0: {
        x: 0,
        y: 0,
      },
      1: {
        x: (rmUnit(v['$spacer-x']) * 0.25) + detectedUnit,
        y: (rmUnit(v['$spacer-y']) * 0.25) + detectedUnit,
      },
      2: {
        x: (rmUnit(v['$spacer-x']) * 0.5) + detectedUnit,
        y: (rmUnit(v['$spacer-y']) * 0.5) + detectedUnit,
      },
      3: {
        x: v['$spacer-x'],
        y: v['$spacer-y'],
      },
      4: {
        x: (rmUnit(v['$spacer-x']) * 1.5) + detectedUnit,
        y: (rmUnit(v['$spacer-y']) * 1.5) + detectedUnit,
      },
      5: {
        x: (rmUnit(v['$spacer-x']) * 3) + detectedUnit,
        y: (rmUnit(v['$spacer-y']) * 3) + detectedUnit,
      },
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
