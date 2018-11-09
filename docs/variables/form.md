```js static
  v['$input-padding-x'] = '.75rem';
  v['$input-padding-y'] = '.5rem';
  v['$input-line-height'] = '1.25';

  v['$input-bg'] = v['$white'];
  v['$input-bg-disabled'] = v['$gray-lighter'];

  v['$input-color'] = v['$gray'];
  v['$input-border-color'] = Color(v['$black']).alpha(0.15).toString();
  v['$input-btn-border-width'] = v['$border-width']; // For form controls and buttons
  v['$input-box-shadow'] = `inset 0 1px 1px ${Color(v['$black']).alpha(0.075).toString()}`;

  v['$input-border-radius'] = v['$border-radius'];
  v['$input-border-radius-lg'] = v['$border-radius-lg'];
  v['$input-border-radius-sm'] = v['$border-radius-sm'];

  v['$input-bg-focus'] = v['$input-bg'];
  v['$input-border-focus'] = Color(v['$brand-primary']).lighten(0.25).toString();
  v['$input-box-shadow-focus'] = `${v['$input-box-shadow']}, 0 0 8px rgba(${v['$input-border-focus']},.6)`;
  v['$input-color-focus'] = v['$input-color'];

  v['$input-color-placeholder'] = v['$gray-light'];

  v['$input-padding-x-sm'] = '.5rem';
  v['$input-padding-y-sm'] = '.25rem';

  v['$input-padding-x-lg'] = '1.5rem';
  v['$input-padding-y-lg'] = '.75rem';

  detectedUnit = detectUnit(v['$font-size-base']);
  v['$input-height'] = ((rmUnit(v['$font-size-base'], detectedUnit) * v['$line-height-base']) + (rmUnit(v['$input-padding-y'], detectedUnit) * 2) + detectedUnit);
  v['$input-height-sm'] = ((rmUnit(v['$font-size-sm'], detectedUnit) * v['$line-height-sm']) + (rmUnit(v['$input-padding-y-sm'], detectedUnit) * 2) + detectedUnit);
  v['$input-height-lg'] = ((rmUnit(v['$font-size-lg'], detectedUnit) * v['$line-height-lg']) + (rmUnit(v['$input-padding-y-lg'], detectedUnit) * 2) + detectedUnit);

  v['$input-transition'] = 'border-color ease-in-out .15s, box-shadow ease-in-out .15s';

  v['$label-margin-bottom'] = '.5rem';

  v['$form-text-margin-top'] = '.25rem';
  v['$form-feedback-margin-top'] = v['$form-text-margin-top'];

  v['$form-check-margin-bottom'] = '.5rem';
  v['$form-check-input-gutter'] = '1.25rem';
  v['$form-check-input-margin-y'] = '.25rem';
  v['$form-check-input-margin-x'] = '.25rem';

  v['$form-check-inline-margin-x'] = '.75rem';

  v['$form-group-margin-bottom'] = v['$spacer-y'];

  v['$input-group-addon-bg'] = v['$gray-lighter'];
  v['$input-group-addon-border-color'] = v['$input-border-color'];

  v['$cursor-disabled'] = 'not-allowed';

  v['$custom-control-gutter'] = '1.5rem';
  v['$custom-control-spacer-x'] = '1rem';
  v['$custom-control-spacer-y'] = '.25rem';

  v['$custom-control-indicator-size'] = '1rem';
  v['$custom-control-indicator-bg'] = '#ddd';
  v['$custom-control-indicator-bg-size'] = '50% 50%';
  v['$custom-control-indicator-box-shadow'] = `inset 0 .25rem .25rem ${Color(v['$black']).alpha(0.1).toString()}`;

  v['$custom-control-disabled-cursor'] = v['$cursor-disabled'];
  v['$custom-control-disabled-indicator-bg'] = v['$gray-lighter'];
  v['$custom-control-disabled-description-color'] = v['$gray-light'];

  v['$custom-control-checked-indicator-color'] = v['$white'];
  v['$custom-control-checked-indicator-bg'] = v['$brand-primary'];
  v['$custom-control-checked-indicator-box-shadow'] = 'none';

  v['$custom-control-focus-indicator-box-shadow'] = `0 0 0 1px ${v['$body-bg']}, 0 0 0 3px ${v['$brand-primary']}`;

  v['$custom-control-active-indicator-color'] = v['$white'];
  v['$custom-control-active-indicator-bg'] = Color(v['$brand-primary']).lighten(0.35).toString();
  v['$custom-control-active-indicator-box-shadow'] = 'none';

  v['$custom-checkbox-radius'] = v['$border-radius'];
  v['$custom-checkbox-checked-icon'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="${v['$custom-control-checked-indicator-color']}" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/%3E%3C/svg%3E')`;

  v['$custom-checkbox-indeterminate-bg'] = v['$brand-primary'];
  v['$custom-checkbox-indeterminate-indicator-color'] = v['$custom-control-checked-indicator-color'];
  v['$custom-checkbox-indeterminate-icon'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"%3E%3Cpath stroke="${v['$custom-checkbox-indeterminate-indicator-color']}" d="M0 2h4"/%3E%3C/svg%3E')`;
  v['$custom-checkbox-indeterminate-box-shadow'] = 'none';

  v['$custom-radio-radius'] = '50%';
  v['$custom-radio-checked-icon'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 8 8"%3E%3Ccircle r="3" fill="${v['$custom-control-checked-indicator-color']}"/%3E%3C/svg%3E')`;

  v['$custom-select-padding-x'] = '.75rem ';
  v['$custom-select-padding-y'] = '.375rem';
  v['$custom-select-indicator-padding'] = '1rem'; // Extra padding to account for the presence of the background-image based indicator
  v['$custom-select-line-height'] = v['$input-line-height'];
  v['$custom-select-color'] = v['$input-color'];
  v['$custom-select-disabled-color'] = v['$gray-light'];
  v['$custom-select-bg'] = v['$white'];
  v['$custom-select-disabled-bg'] = v['$gray-lighter'];
  v['$custom-select-bg-size'] = '8px 10px'; // In pixels because image dimensions
  v['$custom-select-indicator-color'] = '#333';
  v['$custom-select-indicator'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="${v['$custom-select-indicator-color']}" d="M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E')`;
  v['$custom-select-border-width'] = v['$input-btn-border-width'];
  v['$custom-select-border-color'] = v['$input-border-color'];
  v['$custom-select-border-radius'] = v['$border-radius'];

  v['$custom-select-focus-border-color'] = Color(v['$brand-primary']).lighten(0.25).toString();
  v['$custom-select-focus-box-shadow'] = `inset 0 1px 2px ${Color(v['$black']).alpha(0.75).toString()}, 0 0 5px rgba(${v['$custom-select-focus-border-color']}, .5)`;

  v['$custom-select-sm-font-size'] = '75%';

  v['$custom-file-height'] = '2.5rem';
  v['$custom-file-width'] = '14rem';
  v['$custom-file-focus-box-shadow'] = `0 0 0 .075rem ${v['$white']}, 0 0 0 .2rem ${v['$brand-primary']}`;

  v['$custom-file-padding-x'] = '.5rem';
  v['$custom-file-padding-y'] = '1rem';
  v['$custom-file-line-height'] = '1.5';
  v['$custom-file-color'] = v['$gray'];
  v['$custom-file-bg'] = v['$white'];
  v['$custom-file-border-width'] = v['$border-width'];
  v['$custom-file-border-color'] = v['$input-border-color'];
  v['$custom-file-border-radius'] = v['$border-radius'];
  v['$custom-file-box-shadow'] = `inset 0 .2rem .4rem ${Color(v['$black']).alpha(0.05).toString()}`;
  v['$custom-file-button-color'] = v['$custom-file-color'];
  v['$custom-file-button-bg'] = v['$gray-lighter'];
  v['$custom-file-text'] = {
    placeholder: {
      en: 'Choose file...',
    },
    'button-label': {
      en: 'Browse',
    },
  };


  // Form validation icons
  v['$form-icon-success-color'] = v['$brand-success'];
  v['$form-icon-success'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="${v['$form-icon-success-color']}" d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/%3E%3C/svg%3E')`;

  v['$form-icon-warning-color'] = v['$brand-warning'];
  v['$form-icon-warning'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="${v['$form-icon-warning-color']}" d="M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z"/%3E%3C/svg%3E')`;

  v['$form-icon-danger-color'] = v['$brand-danger'];
  v['$form-icon-danger'] = `url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="${v['$form-icon-danger-color']}" viewBox="-2 -2 7 7"%3E%3Cpath stroke="%23d9534f" d="M0 0l3 3m0-3L0 3"/%3E%3Ccircle r=".5"/%3E%3Ccircle cx="3" r=".5"/%3E%3Ccircle cy="3" r=".5"/%3E%3Ccircle cx="3" cy="3" r=".5"/%3E%3C/svg%3E')`;


```
