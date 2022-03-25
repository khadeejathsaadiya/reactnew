import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/register" activeStyle>
			Register
		</NavLink>
		<NavLink to="/" activeStyle>
			Login
		</NavLink>
		<NavLink to="/verifyOTP" activeStyle>
			VerifyOTP 
		</NavLink>
		<NavLink to="/forgotPass" activeStyle>
			ForgotPassword 
		</NavLink>
		<NavLink to="/resetpassword" activeStyle>
			ResetPassword
		</NavLink>
		<NavLink to="/myprofile" activeStyle>
			MyProfile
		</NavLink>

		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
