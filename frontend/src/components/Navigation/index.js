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

    return (
        <div className="nav-bar">
            <ul>
                <li className="nav-links">
                    <NavLink className={"home"} exact to="/">
                        Home
                    </NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
