import { Link } from 'react-router-dom';

const Profile = ({userProfile}) => {
    return (
        <div>
            <Link to='/profile'>
            <img src={userProfile.image_url}></img>
            <p>{userProfile.username}</p>
            </Link>
        </div>
    )
}

export default Profile;