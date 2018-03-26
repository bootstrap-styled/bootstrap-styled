`<Button />` component example:

```js
<div>
  <Button color="primary">primary</Button>
  <Button color="secondary">secondary</Button>
  <Button color="success">success</Button>
  <Button color="info">info</Button>
  <Button color="warning">warning</Button>
  <Button color="danger">danger</Button>
  <Button color="link">link</Button>
</div>
```

`<Button />` component example with specific tags:

```js
<div>
  <Button tag={A} color="primary" href="javascript:;">Link</Button>
  <Button color="primary" type="submit">Button</Button>
  <Button tag={Input} color="primary" type="button" value="Input" />
  <Button tag={Input} color="primary" type="submit" value="Submit" />
  <Button tag={Input} color="primary" type="reset" value="Reset" />
</div>
```

Outline `<Button />` component example with specific tags:

```js
<div>
  <Button outline color="primary">primary</Button>
  <Button outline color="secondary">secondary</Button>
  <Button outline color="success">success</Button>
  <Button outline color="info">info</Button>
  <Button outline color="warning">warning</Button>
  <Button outline color="danger">danger</Button>
</div>
```

`<Button />` component example with specific sizes and display:

```js
<div>
  <Button color="primary" size="sm">Small Button</Button>
  <Button color="secondary" size="sm">Small Button</Button>
  <div>
    <Button color="primary" size="lg">Large Button</Button>
    <Button color="secondary" size="lg">Large Button</Button>
  </div>
  <Button color="primary" size="lg" block>Block level button</Button>
  <Button color="secondary" size="lg" block>Block level button</Button>
</div>
```

`<Button />` component example with states:

```js
<div>
  <div>
    <Button tag={A} color="primary" size="lg" active>Active primary link</Button>
    <Button tag={A} color="secondary" size="lg" active>Active link</Button>
  </div>
  <div>
    <Button color="primary" size="lg" disabled>Disabled primary button</Button>
    <Button color="secondary" size="lg" disabled>Disabled button</Button>
  </div>
</div>
```

Radio `<Button />` component example:

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

Checkbox `<Button />` component example with:

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
