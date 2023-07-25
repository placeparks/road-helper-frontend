import React, { useContext } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { adminContext } from '../context/AdminState';

const PrivateRoute = ({ children }) => {
  const { isAdminLoggedIn } = useContext(adminContext);
  let navigate = useNavigate();

  if (!isAdminLoggedIn) {
    navigate("/");
    return null;
  }

  return children;
};

export default PrivateRoute;
