import { NavLink } from "react-router-dom";
import "./SplashPage.css";

function SplashPage() {
    return (
        <div className="spash-main">
            <img
                className="background-img"
                src="https://i.pinimg.com/originals/e0/30/cc/e030cc9cb5bea72381b9d1c2db813723.png"
                alt="lofi girl"
            ></img>
            <div className="right-side-splash">
                <div className="right-side-content">
                    <h2>Discover and share your favorite study toons</h2>
                    <NavLink className={"splash-signup"} to="/signup">
                        Signup for free
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default SplashPage;
