`<Drawer />` component example:

```js static
initialState = {
  isOpen: false,
};
<div>
  <Button onClick={() => setState({ isOpen: !state.isOpen })}>Open Drawer</Button>
  <Drawer active={state.isOpen} left="260px">
    <H1>Clean your desk!</H1>
    <P>Puts every thing in this draw!</P>
  </Drawer>
</div>
```

You can also `dock` your component so that, when activated, it pushes the content of your main layout:

```js
initialState = {
  isOpen: false,
};
// The height style added to the root component is ONLY to correct conflict with the example environment.
<div className="d-flex" style={{ height: '250px' }}>
  <Drawer docked active={state.isOpen} left="260px" className="p-3">
    <P>1. First</P>
    <P>2. Second</P>
    <P>3. Third</P>
  </Drawer>
  <div className="d-flex flex-column p-4">
    <H1>Main Layout</H1>
    <P>All the stuff in the room!</P>
    <Button onClick={() => setState({ isOpen: !state.isOpen })}>Open Drawer</Button>
  </div>
</div>
```
