import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import UsersPage from './Components/UsersPage';
import HomePage from './Components/HomePage';
import ProfilePage from './Components/Profile';
import io from 'socket.io-client';

function App() {
  const [ socket, setSocket ] = useState(null);
  const [ userProfile, setUserProfile ] = useState({
    username: 'Al',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
  })

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:8080`);
    setSocket(newSocket);
    return () => newSocket.close()
  }, [setSocket])

  return (
    <div className="App">
     <Routes>
       <Route path='/profile' element={<ProfilePage  />} />
       <Route path='/users'element={<UsersPage />}/>
       <Route path='/' element={<HomePage socket={socket} userProfile={userProfile}/>} />
     </Routes>
    </div>
  );
}

export default App;
