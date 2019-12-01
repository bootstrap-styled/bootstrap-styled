
```js static

    // Control the default spacing of most Bootstrap elements by modifying these variables.
    v['$spacer'] = '1rem';
  
    detectedUnit = detectUnit(v['$spacer']);
    v['$spacer-halved'] = `calc(${v['$spacer']} / 2)`;
  
    v['$spacer-x'] = v['$spacer'];
    v['$spacer-y'] = v['$spacer'];
    v['$spacers'] = {
      0: {
        x: 0,
        y: 0,
      },
      1: {
        x: `calc(${v['$spacer-x']}) * 0.25`,
        y: `calc(${v['$spacer-y']}) * 0.25`,
      },
      2: {
        x: `calc(${v['$spacer-x']}) * 0.5`,
        y: `calc(${v['$spacer-y']}) * 0.5`,
      },
      3: {
        x: v['$spacer-x'],
        y: v['$spacer-y'],
      },
      4: {
        x: `calc(${v['$spacer-x']}) * 1.5`,
        y: `calc(${v['$spacer-y']}) * 1.5`,
      },
      5: {
        x: `calc(${v['$spacer-x']}) * 3`,
        y: `calc(${v['$spacer-y']}) * 3`,
      },
    };
    
    v['$negative-spacers'] = negativifyMap(v['$spacers']);
    
    v['$border-width'] = '1px';
  
    // This variable affects the `.h-*` and `.w-*` global classes.
    v['$sizes'] = {
      25: '25%',
      50: '50%',
      75: '75%',
      100: '100%',
    };

```
