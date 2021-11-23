import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
const Navbar = ({ auth }) => {
  return (
    <Menu>
      <Menu.Item name='home'>
        <Link to='/'>Home</Link>
      </Menu.Item>
      {auth ? (
        <>
          <Menu.Item name='create'>
            <Link to='/info/create'>Create</Link>
          </Menu.Item>
          <Menu.Item name='about'>
            <Link to='/about'>About</Link>
          </Menu.Item>
          <Menu.Item name='about'>
            <Link to='/user/logout'>Logout</Link>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item name='login'>
            <Link to='/user/login'>Login</Link>
          </Menu.Item>
          <Menu.Item name='register'>
            <Link to='/user/register'>Register</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default Navbar;
