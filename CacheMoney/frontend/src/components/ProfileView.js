import React, { useState } from "react";
import Footer from "./Footer.js";
import userStore from "../store/Store.js";
import InfoTable from "./InfoTable";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "./style/useDarkMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/GlobalStyles";
import Toggle from "./style/Toggle";
import { lightTheme, darkTheme } from "./style/Themes";



function ProfileView(){
	const navigate = useNavigate();
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;

	const handleLogout = (event) => {
		userStore.dispatch({
			type: "LOGOUT_USER",
			payload: "",
		});

		navigate("/");
	};
	const toMain = (event) => {

		navigate("/main");
	};

    return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<div className="profile-page-container container-view">
				<div className="header">
				<button id="main-page-button" onClick={toMain}>
							{" "}
							Home
						</button>
					<div className="header-welcome-box">
						Profile
					</div>
					<div className="main-upper-buttons">
						<button id="logout-button" onClick={handleLogout}>
							{" "}
							Log Out
						</button>				
					</div>
				</div>
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
						id="sign-in"
						>
							Address
					</span>
					<span 
						className="navigation-link"
						//onClick={}
						id="sign-in"
						>
							Phone
					</span>
					<span 
						className="navigation-link"
						//onClick={}
						id="sign-in"
						>
							Email
					</span>
				
				</div>
				<div className="footer-container"> 	
					<Footer />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default ProfileView;