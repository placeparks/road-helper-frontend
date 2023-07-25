import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminContext } from '../context/AdminState';

function Options() {
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

  return (
    <div className='mt-4'>
      <h1 className='pb-4'>Please Select</h1>
      <button onClick={handleAllUsers} className='btn btn-primary mx-2 '>See All Users</button>
      <button onClick={handleSubmit} className='btn btn-primary mx-2'>Fetch By Id</button>
      <button onClick={handleUsers} className='btn btn-primary mx-2'>Num of Users</button>
      {showUsers && <p className='pt-4'>Total number of users: {users.length}</p>}
    </div>
  )
}

export default Options;
