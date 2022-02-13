// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import AudioPlayer from "./AudioPlayer";
// import "./AudioPlayer.css";

// function Audio() {
//     const songsObj = useSelector((state) => state.songState.songs);
//     const songs = Object.values(songsObj);

//     const [playingSongIndex, setPlayingSongIndex] = useState(0);
//     const [nextSongIndex, setNextSongIndex] = useState(playingSongIndex + 1);

//     const currentSong = songs[playingSongIndex];

//     useEffect(() => {
//         setNextSongIndex(() => {
//             if (playingSongIndex + 1 > songs.length - 1) {
//                 return 0;
//             } else {
//                 return playingSongIndex + 1;
//             }
//         });
//     }, [playingSongIndex, songs.length]);

//     if (!currentSong) {
//         return null;
//     } else {
//         return (
//             <div className="player-container">
//                 <div className="current-song">{currentSong.title}</div>
//                 <AudioPlayer
//                     playingSongIndex={playingSongIndex}
//                     setPlayingSongIndex={setPlayingSongIndex}
//                     nextSongIndex={nextSongIndex}
//                 />
//             </div>
//         );
//     }
// }

// export default Audio;
