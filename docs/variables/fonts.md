```js static
  // Font, line-height, and color for body text, headings, and more.
  v['$font-family-sans-serif'] = '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  v['$font-family-monospace'] = 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  v['$font-family-base'] = v['$font-family-sans-serif'];

  v['$font-size-base'] = '1rem'; // Assumes the browser default, typically `16px`
  v['$font-size-lg'] = '1.25rem';
  v['$font-size-sm'] = '.875rem';
  v['$font-size-xs'] = '.75rem';

  v['$font-weight-normal'] = 'normal';
  v['$font-weight-bold'] = 'bold';

  v['$font-weight-base'] = v['$font-weight-normal'];
  v['$line-height-base'] = '1.5';

  v['$font-size-h1'] = '2.5rem';
  v['$font-size-h2'] = '2rem';
  v['$font-size-h3'] = '1.75rem';
  v['$font-size-h4'] = '1.5rem';
  v['$font-size-h5'] = '1.25rem';
  v['$font-size-h6'] = '1rem';

  detectedUnit = detectUnit(v['$spacer']);
  v['$headings-margin-bottom'] = (rmUnit(v['$spacer'], detectedUnit) / 2) + detectedUnit;
  v['$headings-font-family'] = 'inherit';
  v['$headings-font-weight'] = '500';
  v['$headings-line-height'] = '1.1';
  v['$headings-color'] = 'inherit';

  v['$display1-size'] = '6rem';
  v['$display2-size'] = '5.5rem';
  v['$display3-size'] = '4.5rem';
  v['$display4-size'] = '3.5rem';

  v['$display1-weight'] = '300';
  v['$display2-weight'] = '300';
  v['$display3-weight'] = '300';
  v['$display4-weight'] = '300';

  v['$display-line-height'] = v['$headings-line-height'];

  v['$lead-font-size'] = '1.25rem';
  v['$lead-font-weight'] = '300';

  v['$small-font-size'] = '80%';

  v['$text-muted'] = v['$gray-light'];
  
  v['$mark-padding'] = '.2em';
  v['$mark-bg'] = v['$state-warning-bg'];

  v['$dt-font-weight'] = v['$font-weight-bold'];
  
  v['$list-inline-padding'] = '5px';

```
