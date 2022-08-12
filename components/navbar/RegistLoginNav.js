// import { useEffect } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import style from "../../styles/Navbar.module.css";

function RegistLoginNav() {

  return (
    <>
      {/* Navbar */}
      <Navbar className={style.navbar} color="dark" dark="true">
        {/* NavBrand */}
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/img/gaming.jpg"
            style={{
              height: 50,
              width: 50,
              padding: 6,
              marginRight: 6,
            }}
          />
          Team T2
        </NavbarBrand>
      </Navbar>
    </>
  );
}

export default RegistLoginNav;
