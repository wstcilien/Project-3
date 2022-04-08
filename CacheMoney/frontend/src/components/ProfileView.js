import React, { useState } from "react";
import Footer from "./Footer.js";
import userStore from "../store/Store.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDarkMode } from "./style/useDarkMode";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/GlobalStyles";
import { lightTheme, darkTheme } from "./style/Themes";
import SideNav from "./SideNav.js";
import DefaultDisplay from "./DefaultDisplay.js";
import EmailDisplay from "./EmailDisplay.js";
import PhoneDisplay from "./PhoneDisplay.js";
import AddressDisplay from "./AddressDisplay.js";
import UsernameDisplay from "./UsernameDisplay.js";
import PasswordDisplay from "./PasswordDisplay.js";
import Toggle from "./style/Toggle";




function ProfileView(){
	const navigate = useNavigate();

	let userData = userStore.getState().userReducer;

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

	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;
	if (!mountedComponent) return <div />;

    return (
		<ThemeProvider theme={themeMode}>
			
			<div className="container-view">
				<div className="header">
					<GlobalStyles />
			
					<button id="main-page-button" onClick={toMain}>
						{" "}
						Home
					</button>
					<div className="header-welcome-box">
						Profile
					</div>
					<div className="main-upper-buttons">
						<button id="logout-button" >
							{" "}
							Log Out
						</button>				
					</div>
				</div>
				
				
				<div className="profile-page-container">
					<div className="container-child">
						<SideNav  />
					</div>
					<div className="container-child"> 
						<Routes>
							<Route path="username" element={<UsernameDisplay />}> </Route>
							<Route path="password" element={<PasswordDisplay />}> </Route>
							<Route path="address" element={<AddressDisplay />}> </Route>
							<Route path="phone" element={<PhoneDisplay />}> </Route>
							<Route path="email" element={<EmailDisplay />}> </Route>
						</Routes>
					</div>
				</div>
				
			</div>
		</ThemeProvider>
	);
}

export default ProfileView;