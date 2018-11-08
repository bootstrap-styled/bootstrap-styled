```js static
  v['$popover-inner-padding'] = '1px';
  v['$popover-bg'] = v['$white'];
  v['$popover-max-width'] = '276px';
  v['$popover-border-width'] = v['$border-width'];

  v['$popover-border-color'] = Color(v['$black']).alpha(0.2).toString();
  v['$popover-box-shadow'] = `0 5px 10px ${Color(v['$black']).alpha(0.2).toString()}`;

  v['$popover-title-bg'] = Color(v['$popover-bg']).darken(0.03).toString();
  v['$popover-title-padding-x'] = '14px';
  v['$popover-title-padding-y'] = '8px';

  v['$popover-content-padding-x'] = '14px';
  v['$popover-content-padding-y'] = '9px';

  v['$popover-arrow-width'] = '10px';
  v['$popover-arrow-color'] = v['$popover-bg'];

  detectedUnit = detectUnit(v['$popover-arrow-width']);
  v['$popover-arrow-outer-width'] = ((rmUnit(v['$popover-arrow-width'], detectedUnit) + 1) + detectedUnit);
  v['$popover-arrow-outer-color'] = Color(v['$popover-border-color']).fade(0.5).toString();
```
