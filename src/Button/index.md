`<Button />` component example:

```js
<div>
  <Button color="link">link</Button>
  <Button color="primary">primary</Button>
  <Button tag={A} color="secondary" href="#">secondary</Button>
  <Button outline color="success">success</Button>
  <Button color="info" size="sm">info</Button>
  <Button color="warning" size="lg">warning</Button>
  <Button color="danger" size="lg" block>danger</Button>
  <Button tag={A} color="primary" size="lg" active>active</Button>
  <Button color="secondary" size="lg" disabled>disabled</Button>
</div>
```

Radio `<Button />` component example with:

```js
initialState = {
  cSelected: [],
};
const onRadioBtnClick = function(rSelected) {
  setState({ rSelected });
};
<div>
  <div className="my-3">
    <ButtonGroup>
      <Button color="primary" onClick={() => onRadioBtnClick(1)} active={state.rSelected === 1}>One</Button>
      <Button color="primary" onClick={() => onRadioBtnClick(2)} active={state.rSelected === 2}>Two</Button>
      <Button color="primary" onClick={() => onRadioBtnClick(3)} active={state.rSelected === 3}>Three</Button>
    </ButtonGroup>
    <P>Selected: {state.rSelected}</P>
  </div>
</div>
```

Checkbox and radio `<Button />` component example with:

```js
initialState = {
  cSelected: [],
};
const onCheckboxBtnClick = function(selected) {
  const index = state.cSelected.indexOf(selected);
  if (index < 0) {
    state.cSelected.push(selected);
  } else {
    state.cSelected.splice(index, 1);
  }
  setState({ cSelected: [...state.cSelected] });
};
<div>
  <div className="my-3">
    <ButtonGroup>
      <Button color="primary" onClick={() => onCheckboxBtnClick(1)} active={state.cSelected.includes(1)}>One</Button>
      <Button color="primary" onClick={() => onCheckboxBtnClick(2)} active={state.cSelected.includes(2)}>Two</Button>
      <Button color="primary" onClick={() => onCheckboxBtnClick(3)} active={state.cSelected.includes(3)}>Three</Button>
    </ButtonGroup>
    <P>Selected: {JSON.stringify(state.cSelected)}</P>
  </div>
</div>
```
