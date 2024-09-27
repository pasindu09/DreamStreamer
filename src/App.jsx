import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import SignIn from './SignIn';
import AdminAlbum from './Admin/AdminAlbum';
import AdminDashboard from './Admin/AdminDashboard';
import MusicPlayer from './components/Volumebar/MusicPlayer';
import SideBar from './components/Sidebar/SideBar';
import AuthUser from './AuthUser';

// import Login from './Login';
import Home from './Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={      <Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/admin/album" element={<AdminAlbum />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
      </Routes>
    </Router> 
    
  );
}

export default App
