import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import style from "../../styles/Navbar.module.css";
import DropdownButton from "../dropdown/Dropdown";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from 'next/image';

function HomeNav() {
  const { username } = useSelector((state) => state.auth);

  useEffect(() => {
    const user = document.getElementById("user");
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    const loginUser = document.getElementById("loginUser");
    if (username !== true) {
      loginUser.innerHTML = `Welcome, ${username}`;
      user.hidden = false;
      register.hidden = true;
      login.hidden = true;
    } else {
      register.hidden = false;
      login.hidden = false;
      user.hidden = true;
    }
  });

  return (
    <>
      {/* Navbar */}
      <Navbar className={style.navbar} color="dark" dark>
        {/* NavBrand */}
        <NavbarBrand href="/">
          <Image
            alt="logo"
            src="/img/gaming.jpg"
            height={50}
            width={50}
          />
        </NavbarBrand>
        {/* Nav */}
        <Nav>
          <NavItem>
            <NavLink
              className={style.link}
              href="/home"
              activeStyle
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={style.link}
              href="/game-list"
              activeStyle
            >
              Game List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={style.link}
              href="/players"
              activeStyle
            >
              Players
            </NavLink>
          </NavItem>
        </Nav>

        <Nav>
          <NavItem hidden id="login">
            <NavLink
              className={style.link}
              href="/login"
              activeStyle
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem hidden id="register">
            <NavLink
              className={(style.link, style.signup)}
              href="/register"
              activeStyle
            >
              Sign Up
            </NavLink>
          </NavItem>

          <NavItem hidden id="user" className="navbar navbar-expand-sm">
            <NavLink
              className={(style.link, style.signup)}
              id="loginUser"
              href="/profile"
              activeStyle
            ></NavLink>
            <DropdownButton />
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default HomeNav;
