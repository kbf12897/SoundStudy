import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSongs } from '../../store/songs';
import AudioPlayer from '../AudioPlayer';
import './UserPage.css';
import { NavLink } from 'react-router-dom';


const UserPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const songsObj = useSelector(state => state.songState.songs);
    const songs = Object.values(songsObj);
    const dispatch = useDispatch();

    const userSongs = songs.filter(song => song?.userId === sessionUser.id)

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    return (
        <div className='top-level'>
            <div className='content-container'>
                <div className='header-img'>
                    HEADER IMG
                </div>
                <div className='page-navigation'>
                    PAGE NAVIGATION
                </div>
                <div className='user-uploaded-songs'>
                    {userSongs.map((song) => {
                        return (
                            <div key={song.id} className='songs'>
                                <NavLink to={`/songs/${song.id}`}>
                                    <img
                                        className='user-page-song-img'
                                        src={song.songImg}
                                        alt='song-img'
                                    />
                                </NavLink>
                                <div>{song.title}</div>
                                <AudioPlayer song={song}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserPage;
