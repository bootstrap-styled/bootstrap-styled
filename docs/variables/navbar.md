```js static
  v['$navbar-padding-x'] = v['$spacer'];
  v['$navbar-padding-y'] = v['$spacer-halved'];

  v['$navbar-toggler-padding-x'] = '.75rem';
  v['$navbar-toggler-padding-y'] = '.25rem';
  v['$navbar-toggler-font-size'] = v['$font-size-lg'];
  v['$navbar-toggler-border-radius'] = v['$btn-border-radius'];

  v['$navbar-inverse-color'] = Color(v['$white']).alpha(0.5).toString();
  v['$navbar-inverse-hover-color'] = Color(v['$white']).alpha(0.75).toString();
  v['$navbar-inverse-active-color'] = Color(v['$white']).alpha(1).toString();
  v['$navbar-inverse-disabled-color'] = Color(v['$white']).alpha(0.25).toString();
  v['$navbar-inverse-toggler-bg'] = `url('data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="${v['$navbar-inverse-color']}" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E')`;
  v['$navbar-inverse-toggler-border'] = Color(v['$white']).alpha(0.1).toString();

  v['$navbar-light-color'] = Color(v['$black']).alpha(0.5).toString();
  v['$navbar-light-hover-color'] = Color(v['$black']).alpha(0.7).toString();
  v['$navbar-light-active-color'] = Color(v['$black']).alpha(0.9).toString();
  v['$navbar-light-disabled-color'] = Color(v['$black']).alpha(0.3).toString();
  v['$navbar-light-toggler-bg'] = `url('data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="${v['$navbar-light-color']}" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E')`;
  v['$navbar-light-toggler-border'] = Color(v['$black']).alpha(0.1).toString();

```
