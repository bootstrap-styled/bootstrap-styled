kopaxgroup/bootstrap-styled
===========================

HeaderNavBar
============

Structure
---------

- Index -> Contains main structure of component.
- composeXXXXXX -> HoC that wraps HeaderNavBar/index.js
- shapeMenuXXXX -> Object used to improve readability of the above components.

Create new component with Hoc & HeaderNavBar
--------------------------------------------

1. Import HeaderNavBarCollapse || HeaderNavBarPush || HeaderNavBarSlide from bootstrap-styled.
1. Use Props from HeaderNavBar && complete by refering to props of composeXXXXX
1. Add Component content via the prop `menu`.
    1. Prop `menu` is located in a different location depending on what HeaderNavBar you choose.
    
Example Usage HeaderNavBarCollapse
----------------------------------

1. Different structure than the other `HeaderNavBars`.


    <HeaderNavBarCollapse
      navbar-light
      navbar-fixed-top
      btnText="Kopax Ltd."
      onClick={(e) => console.log('yoyo')}
      sendingLogoutRequest={this.props.sendingLogoutRequest}
      logout={this.props.logout}
      menuCollapsed={{
        menu: (
          <Ul className="nav navbar-nav">
            <Li className="nav-item">
              <Link className="nav-link active" to={pages.pageDashboard.path}>Kopax Ltd</Link>
            </Li>
            {serviceList.map((service, index) => (
              <Li className="nav-item" key={index}>
                <A className="nav-link " href="#" onClick={this.handleClick}><FormattedMessage {...service.translateMessage} /></A>
                <Ul className={cn("sub-list collapse", this.state.isActive && 'active')} isActive={this.state.isActive}>
                  <Li className="nav-item-sub">
                    <Link className="nav-link" to="#">Add</Link>
                  </Li>
                  <Li className="nav-item">
                    <Link className="nav-link" to="#">Manage</Link>
                  </Li>
                </Ul>
              </Li>
            ))}
            <Li className="nav-item">
              <Link className="nav-link" to={pages.pageTesting.path}>Testing</Link>
            </Li>
            <Li className="nav-item">
              <Link className="nav-link" to="/documentation">Documentation</Link>
            </Li>
            <Li className="nav-item white">
              <LocaleToggle />
            </Li>
          </Ul>
        ),
        isCollapsed: false,
      }}
    />

Example Usage HeaderNavBarSlide/HeaderNavBarPush
------------------------------------------------
    
1. These have the same Structure.
1. In addition to the previous example, these `HeaderNavbars` have two different Menus, one `menuTop` that is located 
in the Header and a second `menuOffset` that is located to the side and will be toggled with an animation.
1. Also `menuOffset` can be placed on either side left or right by adding `isLeft: true` or `isRight: true`.


    <HeaderNavBarPush
        navbar-light
        navbar-fixed-top
        onClick={(e) => console.log('yoyo')}
        sendingLogoutRequest={this.props.sendingLogoutRequest}
        logout={this.props.logout}
        menuTop={{
        menu: (
          <Ul className={cn(this.props.className, "nav display-table")}>
            <Li  className="nav-item">
              <div><h1>hello</h1></div>
            </Li>
            <Li  className="nav-item">
              <div><h1>hello</h1></div>
            </Li>
            <Li  className="nav-item">
              <div><h1>hello</h1></div>
            </Li>
            <Li className="nav-item">
              {this.props.sendingLogoutRequest ? (
                <LoadingButton className="btn btn-danger" disabled>
                  {/* TODO, don't store the message here, use a styled LogoutButton and hold the logic here */}
                  {/* <FormattedMessage {...messages.buttonLogout} /> */}
                </LoadingButton>
              ) : (
                <Link className="btn btn-sm btn-danger logout" onClick={this.props.logout}>Logout</Link>
              )}
            </Li>
          </Ul>
        ),
        }}
        menuOffset={{
        menu: (
          <Nav className="nav nav-pills nav-stacked">
            <Li className="nav-item">
              <Link className="nav-link active" to={pages.pageDashboard.path}>Kopax Ltd</Link>
            </Li>
            {serviceList.map((service, index) => (
              <Li className="nav-item" key={index}>
                <A className="nav-link " href="#" onClick={this.handleClick}><FormattedMessage {...service.translateMessage} /></A>
                <Ul className={cn("sub-list collapse", this.state.isActive && 'active')} isActive={this.state.isActive}>
                  <Li className="nav-item-sub">
                    <Link className="nav-link" to="#">Add</Link>
                  </Li>
                  <Li className="nav-item">
                    <Link className="nav-link" to="#">Manage</Link>
                  </Li>
                </Ul>
              </Li>
            ))}
            <Li className="nav-item">
              <Link className="nav-link" to={pages.pageTesting.path}>Testing</Link>
            </Li>
            <Li className="nav-item">
              <Link className="nav-link" to="/documentation">Documentation</Link>
            </Li>
            <Li className="nav-item white">
              <LocaleToggle />
            </Li>
          </Nav>
        ),
        isLeft: true,
        }}
    />
    
    
Additional Information
----------------------

1. The `onClick` prop giver to the HeaderNavBarXXXX allows to add a new function that will be called in the composeXXXX.
1. To note, in the Hoc composeXXX, HeaderNavBar has properties that refer to an object. You can write them without repeating the name, or else it will make eslint object-shorthand error.