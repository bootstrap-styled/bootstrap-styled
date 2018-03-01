`<Media />` component example:

```js
initialState = {
  isOpen: false,
};
<Nav tabs>
  <NavItem>
    <NavLink active href="#">Active</NavLink>
  </NavItem>
  <NavDropdown isOpen={state.isOpen} toggle={() => setState({ isOpen: !state.isOpen })}>
    <DropdownToggle caret nav>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Another Action</DropdownItem>
    </DropdownMenu>
  </NavDropdown>
  <NavItem>
    <NavLink href="#">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="#">Disabled</NavLink>
  </NavItem>
</Nav>
```
