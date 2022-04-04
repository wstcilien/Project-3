import React from "react";
import { Link } from "react-router-dom";
function SideNav(props) {

    return (
        <div id="mySidenav" className="sidenav">
			<Link to="/profile/signin"
    			className="navigation-link"
				
				id="sign-in"
			
			>
				Sign-In
			</Link>
		
        	<Link to="/profile/address"
    			className="navigation-link"
				
				id="sign-in"
			
			>
				Address
			</Link>
		
        	<Link to="/profile/phone"
    			className="navigation-link"
				
				id="sign-in"
			
			>
				Phone
			</Link>
			
        	<Link to="/profile/email"
    			className="navigation-link"
				
				id="sign-in"
			
			>
				Email
			</Link>
				
	    </div>
    );
}

export default SideNav;