import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import setSongReducer, { setSong, setPlayedSongs } from "../../store/setSong";
import './ProgressBar.css';


const ProgressBar = () => {
    const dispatch = useDispatch();
    const sesssionUser = useSelector(state => state?.session);
    const song = useSelector(state => state?.setSongReducer);
    const queue = song.queue;
    const playedSongs = song.playedSongs;
    const songsObj = useSelector((state) => state.songState);
    const songs = Object.values(songsObj);


    let songUrl;
    if (song.currentSong) songUrl = song?.currentSong?.url;

    const handleSkipBack = (song) => {
        dispatch(setSong(song));
    };

    const handleQueue = () => {
        if (queue.length) {
            dispatch(setPlayedSongs(song.currentSong))
            const queueSong = queue.pop();
            dispatch(setSong(queueSong));
        }
    };



    return (
        <div>
            <AudioPlayer
            autoPlay={true}
            src={songUrl}
            showSkipControls={true}
            showJumpControls={false}
            onEnded={() => handleQueue()}
            onClickNext={() => handleQueue()}
            onClickPrevious={() => handleSkipBack(playedSongs)}
            />
            {song?.currentSong && <div className="progress-bar-song-and-img">
                <img className="progress-bar-song-img" src={song?.currentSong?.songImg} alt='progress-bar-img'></img>
                <div className="progress-bar-song-title">{song?.currentSong?.title}</div>
            </div>}
        </div>
    );
}

export default ProgressBar;




// export function ProgressBar({ song }) {
//     const progressBarNode = useContext(ProgressBarContext);
//     const songsObj = useSelector((state) => state.songState);
//     const songs = Object.values(songsObj);

//     useEffect(() => {
//         setCurrentSong(song);
//     }, [song])

//     const [currentSong, setCurrentSong] = useState(song);

//     if (!progressBarNode) return null;
//     return ReactDOM.createPortal(
//         <div>
//             <AudioPlayer
//             autoPlay={true}
//             src={currentSong?.url}
//             showSkipControls={true}
//             showJumpControls={false}
//             onClickNext={() => setCurrentSong(songsObj[currentSong.id + 1] ? songsObj[currentSong.id + 1] : songsObj[songs[0].id])}
//             onClickPrevious={() => setCurrentSong(songsObj[currentSong.id - 1] ? songsObj[currentSong.id - 1] : songsObj[songs[songs.length - 1].id])}
//             />
//         </div>,
//         progressBarNode
//     );
// }
