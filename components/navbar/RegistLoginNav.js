// import { useEffect } from "react";
import { useRouter } from "next/router";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function RegistLoginNav() {
  const router = useRouter();

  return (
    <>
      {/* Navbar */}
      <Navbar className="" color="dark" dark="true">
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
        <Nav>
          <NavItem>
            <NavLink
              // className={style.link}
              href="#"
              onClick={() => {
                router.push("/register");
              }}
              activeStyle
            >
              Sign Up
            </NavLink>
            <NavLink
              // className={style.link}
              href="#"
              onClick={() => {
                router.push("/login");
              }}
              activeStyle
            >
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default RegistLoginNav;
