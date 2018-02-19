React component example:

```js
<div>
  <Alert color="success">
    <Strong>Well done!</Strong> You successfully read this important alert message.
  </Alert>
  <Alert color="info">
    <Strong>Heads up!</Strong> This <A href="#" className="alert-link">alert needs your attention</A>, but it’s not super important.
  </Alert>
  <Alert color="warning">
    <Strong>Warning!</Strong> Better check yourself, you’re <A href="#" className="alert-link">not looking too good</A>.
  </Alert>
  <Alert color="danger" className="text-center">
    <H4>Oh snap!</H4>
    <P>Change a few things up and try submitting again. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</P>
    <P>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</P>
  </Alert>
</div>
```

Or as a Button:


```jsx
import React from 'react';

import {
  Alert,
  Button,
} from 'bootstrap-styled';

export default class AlertDismissExample extends React.Component {
  state = {
    visible: true,
  };

  onDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
          I am an alert and I can be dismissed!
        </Alert>
      </div>
    );
  }
}
```


```js { "props": { "active": "true" } }
<A color="info" active href="https://bootstrap-styled.yeutech.com">Visit Bootstrap Styled !</A>
```
