`<Header />` component example:

```js
initialState = {
  isOpen: false,
};
<Header className="d-flex justify-content-between pb-2">
  <H3 color="muted">Project name</H3>
  <Nav pills>
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
      <NavLink href="javascript:;">Contact</NavLink>
    </NavItem>
  </Nav>
</Header>
```
