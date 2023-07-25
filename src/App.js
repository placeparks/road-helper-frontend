import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import './App.css';
import AdminState from './context/AdminState';
import UsersList from './components/UserList';
import AdminLogin from './components/AdminLogin';
import PrivateRoute from './components/PrivateRoute';
import UserById from './components/UserById'; // Import the new component
import Options from './components/Options';
import Logout from './components/Logout'; 


function App() {

  return (
    <Router>
      <AdminState>
        <div className="App">
          <h2 className='pt-4'>QR Track App Back Office</h2>
         <Logout />
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/options" element={<PrivateRoute><Options/></PrivateRoute>} />
            <Route path="/users" element={<PrivateRoute><UsersList /></PrivateRoute>} />
            <Route path="/user" element={<PrivateRoute><UserById /></PrivateRoute>} />
            <Route path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
          </Routes>
        </div>
      </AdminState>
    </Router>
  );
}

export default App;
