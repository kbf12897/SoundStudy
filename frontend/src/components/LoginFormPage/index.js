import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <div>
            <img
                className="background-img"
                src="https://i.pinimg.com/originals/e0/30/cc/e030cc9cb5bea72381b9d1c2db813723.png"
                alt="lofi girl"
            ></img>
            <div className="right-side-login">
                <form className="login-form" onSubmit={handleSubmit}>
                    <ul>
                        {errors.map((error, idx) => (
                            <li className="errors" key={idx}>
                                {error}
                            </li>
                        ))}
                    </ul>
                    <label for="username">Username or Email</label>
                    <input
                        className="username"
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />

                    <label for="password">Password</label>
                    <input
                        className="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default LoginFormPage;
