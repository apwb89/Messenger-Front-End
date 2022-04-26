import UsersButton from './UsersButton';
import Profile from './Profile';
import Messages from './Messages';

const HomePage = ({userProfile, socket}) => {
    return (
        <>
        <h1>Chat App</h1>
        <Profile userProfile={userProfile}/>
        <UsersButton />
        <Messages socket={socket}/>
    </>
    )
}

export default HomePage;