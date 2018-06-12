`<Drawer />` component example:

```js
initialState = {
  isOpen: false,
};
<div>
  <Button onClick={() => setState({ isOpen: !state.isOpen })}>Open Drawer</Button>
  <Drawer active={state.isOpen} left="260px" className="d-flex flex-column">
    <H1>Clean your desk!</H1>
    <P>Puts every thing in the draw</P>
  </Drawer>
</div>
```
