import React, { createContext, useState, useEffect } from 'react';

export const adminContext = createContext();

const AdminState = (props) => {
  const [users, setUsers] = useState([]);
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
  const [isCallCenterLoggedIn, setCallCenterLoggedIn] = useState(false);
  const host = "http://localhost:5000";

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(`${host}/users`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, []);

  const getUserById = async (id) => {
    try {
      const response = await fetch(`${host}/api/users/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${host}/delete/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        // Remove the user from the users state
        setUsers(users.filter(user => user.id !== id));
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  

  const updateUser = async (userId, updateData) => {
    try {
      const response = await fetch(`${host}/updateprofile/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      });
      const data = await response.json();
      if (data.success) {
        setUsers(users.map(user => user._id === userId ? {...user, ...updateData} : user));
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  
  const logout = () => {
    setAdminLoggedIn(false);
    setCallCenterLoggedIn(false);
  };

  return (
    <adminContext.Provider value={{ users, isAdminLoggedIn, setAdminLoggedIn,updateUser, getUserById, logout,deleteUser, isCallCenterLoggedIn, setCallCenterLoggedIn}}>
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminState;
