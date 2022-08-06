import { useRouter } from "next/router";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import style from "../../styles/Navbar.module.css";

function HomeNav() {

    const router = useRouter();

    return (
        <>
            {/* Navbar */}
            <Navbar className="" color="dark" dark>
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
                                router.push("/GameList");
                            }}
                            activeStyle
                        >
                            Game List
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={style.link}
                            href="#"
                            onClick={() => {
                                router.push("/players");
                            }}
                            activeStyle
                        >
                            Players
                        </NavLink>
                    </NavItem>

                </Nav>
            </Navbar>

        </>
    );
}

export default HomeNav;