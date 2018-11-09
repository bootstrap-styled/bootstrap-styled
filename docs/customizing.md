With the [BootstrapProvider](https://github.com/bootstrap-styled/provider), you can directly customize the default theme in the provider before it is applied to your components.

```jsx static
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

const customTheme = { '$btn-primary-bg': 'purple' };

const App = (
  <BootstrapProvider theme={customTheme}>
    <Button />
  </BootstrapProvider>
);

```
