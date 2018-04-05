`<Alert />` component example:

```js
initialState = {
  alertIsOpen: true,
};
 <Alert color="info" isOpen={state.alertIsOpen} onClick={() => setState({ alertIsOpen: !state.alertIsOpen })}>
   I am a controlled alert
 </Alert>
```

Uncontrolled `<Alert />` component example:

```js
<Alert color="danger" uncontrolled>Uncontrolled alert</Alert>
```
