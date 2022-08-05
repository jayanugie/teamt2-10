import { Navbar, NavbarBrand } from "reactstrap";

function RegistLoginNav() {

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
			</Navbar>
		</>
	);
}

export default RegistLoginNav;
