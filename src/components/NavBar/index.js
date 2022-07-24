import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

const Navbar = () => {
  return (
    <div>
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">LOGO</NavLogo>
          </NavbarContainer>
        </Nav>
      </>
    </div>
  );
};

export default Navbar;