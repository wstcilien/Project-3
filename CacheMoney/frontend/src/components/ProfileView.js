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
import SignInDisplay from "./SignInDisplay.js";
import Toggle from "./style/Toggle";




function ProfileView(){
	const navigate = useNavigate();

	const [page, setPage] = useState("sign-in");

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


/*	const updateProfilePageContent = (event) => {
		setPage(event.target.id);
		profilePageContentComponent(event.target.id);
	};*/
	

	/*const profilePageContentComponent = () => {
		switch (page) {
			case "sign-in":
				return <SignInDisplay handleClick={updateProfilePageContent} />;
			case "address":
				return <AddressDisplay handleClick={updateProfilePageContent} />;
			case "phone":
				return <PhoneDisplay handleClick={updateProfilePageContent} />;
			case "email":
				return <EmailDisplay handleClick={updateProfilePageContent} />;
			default:
				return <DefaultDisplay handleClick={updateProfilePageContent} />;
		}
	};*/
	
//<SideNav handleClick={updateProfilePageContent} />

	/*<Toggle
		id="main-theme-button"
		theme={theme}
		toggleTheme={themeToggler}
	/>*/

	/*<div className="profile-page-content">			
		{profilePageContentComponent()}
	</div>*/
				
	//<SideNav handleClick={updateProfilePageContent} />

    return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<div className="container-view">
				<div className="header">
			
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
							<Route path="signin" element={<SignInDisplay />}> </Route>
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