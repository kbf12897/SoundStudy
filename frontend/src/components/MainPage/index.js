import "./MainPage.css";

function MainPage() {
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
        </div>
    );
}

export default MainPage;
