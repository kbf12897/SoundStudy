import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
    const sessionUser = useSelector((state) => state.session.user);

    if (!sessionUser) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <img
                className="top-img"
                alt="lofi-pic"
                src="https://f4.bcbits.com/img/0024563747_100.png"
            />
            <div className="add-song">
                <input className="add-song-input" type="text"></input>
                <button className="add-song-button">Upload your own</button>
            </div>
            <div className="song-container"></div>
        </div>
    );
}

export default MainPage;
