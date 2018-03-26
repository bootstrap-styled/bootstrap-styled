`<NavDropdown />` component example:

```js
initialState = {
  showNavbar: false,
  dropdownOpen: false,
};
<Navbar color="faded" light toggleable="sm">
  <Container>
    <NavbarToggler onClick={() => setState({ showNavbar: !state.showNavbar})} />
    <Collapse navbar isOpen={state.showNavbar}>
      <Nav navbar>
        <NavDropdown isOpen={state.dropdownOpen} toggle={() => setState({ dropdownOpen: !state.dropdownOpen})}>
          <DropdownToggle nav caret>
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
      </Nav>
    </Collapse>
  </Container>
</Navbar>
```
