```js static
  // Customizes the `.table` component with basic values, each used across all table variations.
  v['$table-cell-padding'] = '.75rem';
  v['$table-sm-cell-padding'] = '.3rem';

  v['$table-bg'] = 'transparent';

  v['$table-inverse-bg'] = v['$gray-dark'];
  v['$table-inverse-bg-accent'] = Color(v['$white']).alpha(0.05).toString();
  v['$table-inverse-bg-hover'] = Color(v['$white']).alpha(0.075).toString();
  v['$table-inverse-color'] = v['$body-bg'];
  v['$table-inverse-border'] = Color(v['$gray-dark']).lighten(0.075).toString();

  v['$table-bg-accent'] = Color(v['$black']).alpha(0.05).toString();
  v['$table-bg-hover'] = Color(v['$black']).alpha(0.075).toString();
  v['$table-bg-active'] = v['$table-bg-hover'];

  v['$table-head-bg'] = v['$gray-lighter'];
  v['$table-head-color'] = v['$gray'];

  v['$table-border-width'] = v['$border-width'];
  v['$table-border-color'] = v['$gray-lighter'];
```
