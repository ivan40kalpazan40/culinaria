import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Create from './components/Create';
import './App.css';
import Register from './components/Register';

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    setAuth(Boolean(localStorage.getItem('auth')));
  }, []);
  const logUser = () => {
    setAuth(true);
  };
  const logOut = () => {
    setAuth(false);
  };
  return (
    <>
      <Navbar auth={auth} />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/login' element={<Login logUser={logUser} />} />
          <Route path='/user/register' element={<Register />} />
          <Route path='/info/create' element={<Create />} />
          <Route path='/user/logout' element={<Logout logOut={logOut} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
