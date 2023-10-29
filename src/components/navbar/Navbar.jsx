import "./navbar.scss";
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '../Button';
import { useNavigate } from 'react-router-dom'



function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0()
  const [isOpen, setIsOpen] = useState(false)



  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleClick = (path) => {
    setIsOpen((prev) => !prev)
    navigate(path)
  }



  return (
    <div className="navbar">

      <div className="logo">
        <img src={isAuthenticated ? user.picture : 'profile.png'} alt="" />
        <span>{isAuthenticated ? user.given_name : <span style={{ fontSize: '1.2rem' }}>Hey User 👋</span>}</span>
      </div>

      {isAuthenticated ?
        <div className="icons">
          {/* <div className="btn not-mobile">
            <Button onClick={() => navigate('/')}>Home </Button>
          </div> */}
          {/* <div className="btn not-mobile">
            <Button onClick={() => navigate('/file')}>Upload </Button>
          </div> */}
          <img src="search.svg" alt="icon" />
          <div className="notification">
            <img src="notifications.svg" alt="icon" />
            <span>1</span>
          </div>

          <img src="setting.svg" alt="icon" onClick={() => setIsOpen(val => !val)} style={{ cursor: 'pointer' }} />

        </div>
        :
        <Button onClick={handleLogin}>Login</Button>
      }

      {isOpen &&
        <div className="toolbar">
          <span><h4>{user.name}</h4></span>
          <div className="links">
            <span className='mobile' onClick={() => handleClick('/')}>Home </span>
            <span className='mobile' onClick={() => handleClick('/file')}>upload </span>
            <span style={{cursor: "pointer", color: 'dodgerblue'}} onClick={handleLogout}>Logout </span>

          </div>
        </div>}
    </div>
  );
}

export default Navbar;
