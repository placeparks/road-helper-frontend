import React, { createContext, useState, useEffect } from 'react';

export const adminContext = createContext();

const AdminState = (props) => {
  const [users, setUsers] = useState([]);
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
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
  
  const logout = () => {
    setAdminLoggedIn(false);
  };

  return (
    <adminContext.Provider value={{ users, isAdminLoggedIn, setAdminLoggedIn, getUserById, logout}}>
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminState;
