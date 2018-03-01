Manage easily dismissing content like modals and alerts or any other components with our `<Collapse />` component.

Add react `state` and `handleClick` function or use directly our example below.

`<Collapse />` component example:

```js
initialState = {
  isOpen: false,
};
<div>
 <Button color="primary" className="mb-2" onClick={() => setState({ isOpen: !state.isOpen })}>Toggle</Button>
 <Collapse isOpen={state.isOpen}>
   <P>
     Any content will be automatically hided and will appear after button click.
   </P>
 </Collapse>
</div>
```
