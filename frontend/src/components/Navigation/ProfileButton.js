import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink, useHistory } from "react-router-dom";
import "./Navigation.css";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push("/");
    };

    return (
        <>
            <button className="profile-button" onClick={openMenu}>
                <i className="fas fa-user-circle" />
            </button>
            <div className="dropdown">
                {showMenu && (
                    <ul className="profile-dropdown">
                        <li>
                            <NavLink className="user-page-button" to={`/${user.id}`}>
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <button
                                className="dropdown-logout"
                                onClick={logout}
                            >
                                Log Out
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
}

export default ProfileButton;
