The variable values are distributed to children components via the `theme` props. Simply use the
[BootstrapProvider](https://github.com/bootstrap-styled/provider) and your theme can be loaded in seconds.

```jsx static
import React from 'react';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

const myTheme = {
  '$btn-primary-bg': 'blue',
  '$btn-primary-color': 'white',
};

const App = (
  <BootstrapProvider theme={myTheme}>
    <Button />
  </BootstrapProvider>
);

```

>>>You can also connect multiple themes at the same time using our
[ConnectedBootstrapProvider](https://github.com/bootstrap-styled/redux).

>>>Toggle between different themes via your interface even quicker.
