import "./navbar.scss";
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom'
import ThemeChanger from "../../redux/features/Theme/ThemeChanger";
import { IoSearchOutline, IoSettingsOutline, IoNotificationsOutline, IoPersonCircleOutline } from "react-icons/io5";




function Navbar() {


  const navigate = useNavigate();
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0()
  console.log('user : ', user?.nickname)
  const [isOpenToolbar, setisOpenToolbar] = useState(false)



  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleClick = (path) => {
    setisOpenToolbar((prev) => !prev)
    navigate(path)
  }

  return (
    <div className="navbar">

      <div className="logo">
        <div>
          {isAuthenticated ?
            <img src={user?.picture} alt='profile-dp' className="profile-dimension"/> :
            <IoPersonCircleOutline className="profile-dimension"/>
          }
        </div>
        <span style={{ fontSize: '1.2rem' }}>
          {isAuthenticated ? user.nickname  : 'Welcome'}
        </span>
      </div>

      <div className="featureSection">
        <ThemeChanger />
        
        {isAuthenticated ?
          <div className="icons">
            <IoSearchOutline className="icon"/> 
            <div className="notification">
              <IoNotificationsOutline className="icon"/>
              <span>1</span>
            </div>

            <IoSettingsOutline onClick={() => setisOpenToolbar(val => !val)} style={{ cursor: 'pointer' }} className="icon"/>

          </div>
          :
          <Button onClick={handleLogin}>Login</Button>
        }
      </div>

      {isOpenToolbar &&
        <div className="toolbar" >
          <span><h4>{user.name}</h4></span>
          <div className="links">
            <ul className="upper-links">
              
              <li className='mobile' onClick={() => handleClick('/')}>Home </li>
              <li className='mobile' onClick={() => handleClick('/file')}>Upload </li>
              <li className='mobile' onClick={() => handleClick('/users/1')}>User </li>
              <li className='mobile' onClick={() => handleClick('/users')}>Users </li>
            </ul>

            <span style={{cursor: "pointer", color: 'blue', fontWeight: 500, }} onClick={handleLogout}>Logout </span>
          </div>
        </div>
      }
    </div>
  );
}

export default Navbar;
