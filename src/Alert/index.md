Uncontrolled `<Alert />` component example using `uncontrolled` props:

```js
<Alert color="danger" uncontrolled>Uncontrolled alert</Alert>
```

`<Alert />` component example:
```js
initialState = {
  alertIsOpen: false,
};
<div>
   <Button onClick={() => setState({ alertIsOpen: !state.alertIsOpen })}>Activate Alert</Button>
   <Alert color="info" isOpen={state.alertIsOpen} onClick={() => setState({ alertIsOpen: !state.alertIsOpen })}>
     I am a controlled alert
   </Alert>
</div>
```

Timed `<Alert />` component example using `autoHideDuration` and `uncontrolled` props:
```js
initialState = {
  alertIsOpen: false,
}
;
<div>
   <Button onClick={() => setState({ alertIsOpen: !state.alertIsOpen })}>Activate Alert</Button>
   <Alert color="info" isOpen={state.alertIsOpen} uncontrolled autoHideDuration={3000}>
      I am a timed alert with a delay of 3000 milliseconds
   </Alert>
</div>
```
