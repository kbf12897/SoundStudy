import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import setSongReducer, { setSong } from "../../store/setSong";
import './ProgressBar.css';


const ProgressBar = () => {
    const dispatch = useDispatch();
    const sesssionUser = useSelector(state => state?.session);
    const setSong = useSelector(state => state?.setSongReducer);
    const songsObj = useSelector((state) => state.songState);
    const songs = Object.values(songsObj);

    const [currentSong, setCurrentSong] = useState(setSong.currentSong);

    let songUrl;
    if (setSong.currentSong) songUrl = setSong?.currentSong?.url;


    const handleSkip = (song) => {

    }



    return (
        <div>
            <AudioPlayer
            autoPlay={true}
            src={songUrl}
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={() => setCurrentSong(songsObj[currentSong?.id + 1] ? songsObj[currentSong?.id + 1] : songsObj[songs[0].id])}
            onClickPrevious={() => setCurrentSong(songsObj[currentSong?.id - 1] ? songsObj[currentSong?.id - 1] : songsObj[songs[songs.length - 1].id])}
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
