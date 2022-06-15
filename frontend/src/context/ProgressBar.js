import React, { useContext, useRef, useState, useEffect } from 'react';
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
    if (!progressBarNode) return null;

    return ReactDOM.createPortal(
        <div>
            <AudioPlayer
            src={song.url}
            showSkipControls={true}
            showJumpControls={false}

            />
        </div>,
        progressBarNode
    );
}
