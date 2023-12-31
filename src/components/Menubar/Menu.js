import React from "react";
import { NavDropdown } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import ChapterComponent from "../ChapterComponent";


const Menu = () => {
  return (
    <div>
      <NavDropdown title={<GiHamburgerMenu />} id="menu-dropdown">
        <ChapterComponent />
      </NavDropdown>
    </div>
  );
};

export default Menu;
