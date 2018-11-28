The `makeTheme()` method allows you to create your own theme by easily overriding the values of the bootstrap theme. 


```jsx static
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import makeTheme from 'bootstrap-styled/lib/theme/makeTheme';

const darkTheme = makeTheme({
  '$body-bg': 'darkslategrey'.
  '$body-color': 'lightgrey'.
});

const App = (
  <BootstrapProvider theme={darkTheme}>
    // The rest of your application
  </BootstrapProvider>
);

```

All the available variables are listed in the ['Variable lists'](#/Variable%20lists) part of this documentation or within their [own components](https://github.com/bootstrap-styled/v4).
