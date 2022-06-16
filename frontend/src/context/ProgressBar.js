import React, { useContext, useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import AudioPlayer from 'react-h5-audio-player';
import './ProgressBar.css';

const ProgressBarContext = React.createContext();

export function ProgressBarProvider({ children }) {
    const progressBarRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(progressBarRef.current);
    }, []);

    return (
        <>
            <ProgressBarContext.Provider value={value}>
                {children}
            </ProgressBarContext.Provider>
            <div ref={progressBarRef} />
        </>
    )
}

export function ProgressBar({ song }) {
    const progressBarNode = useContext(ProgressBarContext);
    const songsObj = useSelector((state) => state.songState);
    const songs = Object.values(songsObj);

    const [currentSong, setCurrentSong] = useState(song);
    const [nextSong, setNextSong] = useState(songsObj[song.id + 1]);
    const [prevSong, setPrevSong] = useState();

    const player = useRef(currentSong);

    console.log(songs)

    if (!progressBarNode) return null;
    return ReactDOM.createPortal(
        <div>
            <AudioPlayer
            ref={player}
            autoPlay={true}
            src={currentSong.url}
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={() => setCurrentSong(songsObj[currentSong.id + 1] ? songsObj[currentSong.id + 1] : songsObj[songs[0].id])}
            onClickPrevious={() => setCurrentSong(songsObj[currentSong.id - 1] ? songsObj[currentSong.id - 1] : songsObj[songs[songs.length - 1].id])}
            />
        </div>,
        progressBarNode
    );
}
