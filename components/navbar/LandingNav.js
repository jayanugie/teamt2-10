import { useEffect } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Button } from "reactstrap";
import { useRouter } from "next/router";
import style from "../../styles/Navbar.module.css";

function logout() {
  const removeEmail = "email";
  const removeAuth = "isAuthenticated";
  const score = "SCORE";
  window.confirm("Are you sure want to logout?");
  localStorage.removeItem(removeEmail);
  localStorage.removeItem(removeAuth);
  localStorage.removeItem(score);
  window.location.reload();
  router.push("/home");
}

function LandingNav() {
  useEffect(() => {
    const emailKey = localStorage.getItem("email");
    const user = document.getElementById("user");
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    const loginUser = document.getElementById("loginUser");
    const logoutButton = document.getElementById("logout");
    if (emailKey) {
      loginUser.innerHTML = `Welcome, ${emailKey}`;
      user.hidden = false;
      register.hidden = true;
      login.hidden = true;
    } else {
      register.hidden = false;
      login.hidden = false;
      user.hidden = true;
      logoutButton.hidden = true;
    }
  });

  const router = useRouter();

  return (
    <>
      {/* Navbar */}
      <Navbar className={style.navbar}>
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
        {/* Nav */}
        <Nav>
          <NavItem>
            <NavLink
              className={style.link}
              href="#"
              onClick={() => {
                router.push("/home");
              }}
              activeStyle
            >
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={style.link}
              href="#"
              onClick={() => {
                router.push("/about");
              }}
              activeStyle
            >
              About
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={style.link}
              href="#"
              onClick={() => {
                router.push("/about");
              }}
              activeStyle
            >
              Contact
            </NavLink>
          </NavItem>
        </Nav>

        <Nav>
          <NavItem hidden id="login">
            <NavLink
              className={style.link}
              href="#"
              onClick={() => {
                router.push("/login");
              }}
              activeStyle
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem hidden id="register">
            <NavLink
              className={(style.link, style.signup)}
              href="#"
              onClick={() => {
                router.push("/register");
              }}
              activeStyle
            >
              Sign Up
            </NavLink>
          </NavItem>

          <NavItem hidden id="user" className="navbar navbar-expand-sm">
            <NavLink
              className={style.link}
              id="loginUser"
              href="#"
              onClick={() => {
                router.push("/profile");
              }}
              activeStyle
            ></NavLink>
            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbar-list-4">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle" />
                  </NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <NavLink className="dropdown-item" href="/profile">
                      Edit Profile
                    </NavLink>
                    <NavLink onClick={logout} id="logout" className="dropdown-item">
                      Log Out
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default LandingNav;
