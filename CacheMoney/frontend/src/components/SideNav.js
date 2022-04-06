import React from "react";
import { Link } from "react-router-dom";
function SideNav(props) {

    return (
        <div id="mySidenav" className="sidenav">
			<span className="sidenav-button">
				<Link to="/profile/signin"
					className="navigation-link"
					
					id="sign-in"
				>
			
					Sign-In
				</Link>
			</span>
			
			<span className="sidenav-button">
				<Link to="/profile/address"
					className="navigation-link"
					
					id="sign-in"
				
				>
					Address
				</Link>
			</span>

			<span className="sidenav-button">
				<Link to="/profile/phone"
					className="navigation-link"
					
					id="sign-in"
				
				>
					Phone
				</Link>
			</span>
			
			<span className="sidenav-button">
				<Link to="/profile/email"
					className="navigation-link"
					
					id="sign-in"
				
				>
					Email
				</Link>
			</span>
				
	    </div>
    );
}

export default SideNav;