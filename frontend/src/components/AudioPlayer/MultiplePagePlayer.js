function PagePlayer() {
    return (
        <div className="buttons-div">
            <div key={props.song.id}>
                <audio ref={audioEl} onEnded={songEnd}>
                    <source src={`./music/${props.song.url}`}></source>
                </audio>
                <button
                    className="pause-play"
                    onClick={() => playSongHandler(props.song)}
                >
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
            </div>
        </div>
    );
}
