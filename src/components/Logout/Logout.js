import { Navigate } from 'react-router-dom';
const Logout = ({ logOut }) => {
  localStorage.removeItem('auth');
  logOut();
  return <Navigate to='/' />;
};

export default Logout;
