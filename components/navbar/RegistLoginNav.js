// import { useEffect } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import style from "../../styles/Navbar.module.css";
import Image from 'next/image'

function RegistLoginNav() {

  return (
    <>
      {/* Navbar */}
      <Navbar className={style.navbar} color="dark" dark="true">
        {/* NavBrand */}
        <NavbarBrand href="/">
          <Image
            alt="logo"
            src="/img/gaming.jpg"
            height={50}
            width={50}
          />
        </NavbarBrand>
      </Navbar>
    </>
  );
}

export default RegistLoginNav;
