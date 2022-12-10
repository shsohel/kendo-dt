import React, { useState } from 'react';
import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';

function Navigation( args ) {
  const [isOpen, setIsOpen] = useState( false );

  const toggle = () => setIsOpen( !isOpen );

  return (
    <div>
      <Navbar color="light" expand="md" fixed='top'  {...args}>
        <NavbarBrand href="/">LOGO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dt">DT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>User</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
