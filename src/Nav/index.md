`<Media />` component example:

```js
initialState = {
  isOpen: false,
};
<Nav tabs>
  <NavItem>
    <NavLink active href="javascript:;">Active</NavLink>
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
    <NavLink href="javascript:;">Link</NavLink>
  </NavItem>
  <NavItem>
    <NavLink disabled href="javascript:;">Disabled</NavLink>
  </NavItem>
</Nav>
```
