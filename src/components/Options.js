import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminContext } from '../context/AdminState';

function Options() {
  const { isAdminLoggedIn, isCallCenterLoggedIn } = useContext(adminContext);
  const navigate = useNavigate();
  const { users } = useContext(adminContext);
  const [showUsers, setShowUsers] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/user');
  };

  const handleAllUsers = (e) => {
    e.preventDefault();
    navigate('/users');
  };
  
  const handleUsers = (e) => {
    e.preventDefault();
    setShowUsers(!showUsers);
  };

  const handleDelUser = (e) => {
    e.preventDefault();
    navigate('/deleteuser');
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    navigate('/update');
  };

  return (
    <div className='mt-4'>
      <h1 className='pb-4'>Please Select</h1>
      <button onClick={handleAllUsers} className='btn btn-primary mx-2 '>See All Users</button>
      <button onClick={handleSubmit} className='btn btn-primary mx-2'>Fetch By Id</button>
      <button onClick={handleUsers} className='btn btn-primary mx-2'>Num of Users</button>
     {isAdminLoggedIn && <button onClick={handleDelUser} className='btn btn-danger mx-2'>Delete User</button>}
     {isAdminLoggedIn && <button onClick={handleUpdateUser} className='btn btn-warning mx-2'>Update User</button>}
      {showUsers && <p className='pt-4'>Total number of users: {users.length}</p>}
    </div>
  )
}

export default Options;
