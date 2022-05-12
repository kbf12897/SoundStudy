import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSongs } from '../../store/songs';
import './UserPage.css';


const UserPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const songsObj = useSelector(state => state.songState.songs);
    const songs = Object.values(songsObj);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    return (
        <div>
            <div className='content-container'>
                <div className='header-img'>
                    HEADER IMG
                </div>
                <div className='page-navigation'>
                    PAGE NAVIGATION
                </div>
                <div className='user-uploaded-songs'>
                    USER UPLOADED SONGS
                </div>
            </div>
        </div>
    )
}

export default UserPage;
