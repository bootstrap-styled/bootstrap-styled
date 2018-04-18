`<Navbar />` component example:

```js
initialState = {
  isOpen: false,
};
<Navbar color="faded" light toggleable="lg">
  <Container>
    <div className="d-flex justify-content-between">
      <NavbarBrand tag={A} to="javascript:;">Brand</NavbarBrand>
      <NavbarToggler onClick={() => setState({ isOpen: !state.isOpen })} />
    </div>
    <Collapse navbar isOpen={state.isOpen}>
      <Nav navbar className="mr-auto">
        <NavItem>
          <NavLink>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Friends</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled>Disabled</NavLink>
        </NavItem>
      </Nav>
      <Form inline className="my-2 my-lg-0">
        <Input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <Button href="javascript:;" color="success">Search</Button>
      </Form>
    </Collapse>
  </Container>
</Navbar>
```
