import React from "react";
function SideNav(props) {

    return (
        <div id="mySidenav" className="sidenav">
			<span 
    			className="navigation-link"
				//onClick={}
				id="sign-in"
			>
				Sign-In
			</span>
		
        	<span 
				className="navigation-link"
				//onClick={}
				id="address"
			>
				Address
			</span>
		
        	<span 
		    	className="navigation-link"
				//onClick={}
				id="phone"
			>
				Phone
			</span>
			
        	<span 
				className="navigation-link"
				//onClick={}
				id="email"
			>
				Email
			</span>
				
	    </div>
    );
}

export default SideNav;