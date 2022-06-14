import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-plyaer/lib/styles.css';


const ProgressBar = ({ song }) => {
    return (
        <div>
            <AudioPlayer
            src={song.url}
            showSkipControls={true}
            showJumpControls={false}

            />
        </div>
    );
}

export default ProgressBar;
