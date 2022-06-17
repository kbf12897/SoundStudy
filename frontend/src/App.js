import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import SplashPage from "./components/SplashPage";
import SongPage from "./components/SongPage";
import MainPage from "./components/MainPage";
import ProfilePage from './components/ProfilePage';
import * as sessionActions from "./store/session";
import ProgressBar from '../src/components/ProgressBar';
import Navigation from "./components/Navigation";



function App() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session.user);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Switch>
                    <Route exact path="/">
                        <SplashPage />
                    </Route>
                    <Route path="/login">
                        <LoginFormPage />
                    </Route>
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                    <Route path="/user-main">
                        <MainPage />
                    </Route>
                    <Route path="/songs/:songId">
                        <SongPage />
                    </Route>
                    <Route path='/:userId'>
                        <ProfilePage/>
                    </Route>
                </Switch>
            )}
            {sessionUser && <ProgressBar />}
        </>
    );
}

export default App;
