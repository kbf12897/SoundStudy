import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import setSongReducer, { setSong } from "../../store/setSong";
import './ProgressBar.css';


const ProgressBar = () => {
    const dispatch = useDispatch();
    const sesssionUser = useSelector(state => state?.session);
    const song = useSelector(state => state?.setSongReducer);
    const queue = song.queue;
    const songsObj = useSelector((state) => state.songState);
    const songs = Object.values(songsObj);

    let songUrl;
    if (song.currentSong) songUrl = song?.currentSong?.url;

    const handleSkip = (currentSong) => {
        dispatch(setSong(currentSong.next));
        song.prev = currentSong;
        song.next = songsObj[song.id + 1] ? songsObj[song.id + 1] : songsObj[songs[0].id];
    };

    const handleSkipBack = (currentSong) => {
        dispatch(setSong(currentSong.prev));
        song.next = currentSong;
        song.prev = songsObj[song?.id - 1] ? songsObj[song?.id - 1] : songsObj[songs[songs.length - 1].id];
    };

    const handleQueue = () => {
        if (queue.length) {
            const song = queue.pop();
            dispatch(setSong(song));
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
            onClickNext={() => handleSkip(song.currentSong)}
            onClickPrevious={() => handleSkipBack(song.currentSong)}
            />
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
