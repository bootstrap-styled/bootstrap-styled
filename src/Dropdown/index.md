`<Dropdown />` component example:

```js
initialState = {
  isOpen: false,
};
<div>
 <Dropdown isOpen={state.isOpen} toggle={() => setState({ isOpen: !state.isOpen })}>
   <DropdownToggle caret>
     Dropdown
   </DropdownToggle>
   <DropdownMenu>
     <DropdownItem header>Header</DropdownItem>
     <DropdownItem disabled>Disabled</DropdownItem>
     <DropdownItem>Default item</DropdownItem>
     <DropdownItem divider />
     <DropdownItem>Another default item</DropdownItem>
   </DropdownMenu>
 </Dropdown>
</div>
```
