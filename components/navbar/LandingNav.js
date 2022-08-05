import { useEffect } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import { useRouter } from 'next/router';
import style from "../../styles/Navbar.module.css";


function LandingNav() {

	useEffect(() => {
		const emailKey = localStorage.getItem("email");
		const user = document.getElementById("user");
		const register = document.getElementById("register");
		const login = document.getElementById("login");
		const loginUser = document.getElementById("loginUser");
		if (emailKey) {
			loginUser.innerHTML = `${emailKey}`
			user.hidden = false;
			register.hidden = true;
			login.hidden = true;
		} else {
			register.hidden = false;
			login.hidden = false;
			user.hidden = true;
		}

	})

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
					<NavItem hidden id="register">
						<NavLink
							className={style.link}
							href="#"
							onClick={() => {
								router.push("/register");
							}}
							activeStyle
						>
							Register
						</NavLink>
					</NavItem>
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
					<NavItem hidden id="user">
						<NavLink
							className={style.link}
							id="loginUser"
							href="#"
							onClick={() => {
								router.push("/profile");
							}}
							activeStyle
						>
						</NavLink>
					</NavItem>
				</Nav>

			</Navbar>
		</>
	);
}

export default LandingNav;
