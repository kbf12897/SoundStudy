import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-plyaer/lib/styles.css';


const ProgressBar = ({ song }) => {
    return (
        <div>
            <AudioPlayer
            src={song.url}
            />
        </div>
    );
}

export default ProgressBar;
