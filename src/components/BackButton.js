import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState('/');

  // When location changes, update previousLocation
  useEffect(() => {
    setPreviousLocation(location.pathname);
  }, [location]);

  return (
    <button onClick={() => navigate(previousLocation)}>Back</button>
  );
}

export default BackButton;
