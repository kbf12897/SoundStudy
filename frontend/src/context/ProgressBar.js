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

    useEffect(() => {
        setCurrentSong(song);
    }, [song])

    const [currentSong, setCurrentSong] = useState(song);

    if (!progressBarNode) return null;
    return ReactDOM.createPortal(
        <div>
            <AudioPlayer
            autoPlay={true}
            src={currentSong?.url}
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={() => setCurrentSong(songsObj[currentSong.id + 1] ? songsObj[currentSong.id + 1] : songsObj[songs[0].id])}
            onClickPrevious={() => setCurrentSong(songsObj[currentSong.id - 1] ? songsObj[currentSong.id - 1] : songsObj[songs[songs.length - 1].id])}
            />
        </div>,
        progressBarNode
    );
}
