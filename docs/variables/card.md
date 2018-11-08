```js static
  v['$card-spacer-x'] = '1.25rem';
  v['$card-spacer-y'] = '.75rem';
  v['$card-border-width'] = '1px';
  v['$card-border-radius'] = v['$border-radius'];
  v['$card-border-color'] = Color(v['$black']).alpha(0.125).toString();
  v['$card-border-radius-inner'] = `calc(${v['$card-border-radius']} - ${v['$card-border-width']})`;
  v['$card-cap-bg'] = v['$gray-lightest'];
  v['$card-bg'] = v['$white'];

  v['$card-link-hover-color'] = v['$white'];

  v['$card-img-overlay-padding'] = '1.25rem';

  detectedUnit = detectUnit(v['$grid-gutter-width-base']);
  v['$card-deck-margin'] = (rmUnit(v['$grid-gutter-width-base'], detectedUnit) / 2) + detectedUnit;

  v['$card-columns-count-md'] = '2';
  v['$card-columns-gap-md'] = '1rem';
  v['$card-columns-margin-md'] = v['$card-spacer-y'];
  v['$card-columns-count-lg'] = '2';
  v['$card-columns-gap-lg'] = '1.15rem';
  v['$card-columns-margin-lg'] = v['$card-spacer-y'];
  v['$card-columns-count-xl'] = '3';
  v['$card-columns-gap-xl'] = '1.25rem';
  v['$card-columns-margin-xl'] = v['$card-spacer-y'];
  v['$card-columns-count-xxl'] = '4';
  v['$card-columns-gap-xxl'] = '1.25rem';
  v['$card-columns-margin-xxl'] = v['$card-spacer-y'];
```
