`<Tooltip />` component example:

```js
initialState = {
  isOpen: false,
};
<div>
  <p>Somewhere in here is a <A href="#" id="TooltipExample">tooltip</A>.</p>
  <Tooltip placement="right" isOpen={state.isOpen} target="TooltipExample" toggle={() => setState({ isOpen: !state.isOpen })}>
    Hello world!
  </Tooltip>
</div>
```
