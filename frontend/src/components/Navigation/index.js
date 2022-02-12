import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <NavLink className={"login"} to="/login">
                    Log In
                </NavLink>
                <NavLink className={"signup"} to="/signup">
                    Sign Up
                </NavLink>
            </>
        );
    }

    let homeButton;
    if (sessionUser) {
        homeButton = (
            <NavLink className={"home"} exact to="/user-main">
                <img
                    className="home-button"
                    src="https://upload.wikimedia.org/wikipedia/en/2/23/Lofi_girl_logo.jpg"
                />
                <span>Sound Study</span>
            </NavLink>
        );
    } else {
        homeButton = (
            <NavLink className={"home"} exact to="/">
                <img
                    className="home-button"
                    src="https://upload.wikimedia.org/wikipedia/en/2/23/Lofi_girl_logo.jpg"
                />
                <span>Sound Study</span>
            </NavLink>
        );
    }

    return (
        <div className="nav-bar">
            <ul>
                <li className="nav-links">
                    {homeButton}
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
