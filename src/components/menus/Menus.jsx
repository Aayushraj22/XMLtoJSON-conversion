import "./menus.scss";
import { NavLink, Link } from "react-router-dom";
import { menu } from "../../data";
import { useAuth0 } from '@auth0/auth0-react';
import { IoLogOutOutline, IoLogInOutline } from "react-icons/io5";

function Menus() {
  // const Icon = example.icon

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (

    <div className="menu" >

      <div className="item">
        {menu.map(item => (
          <NavLink to={item.url} key={item.id} end>
            {item.icon}
            <span>{item.title.toUpperCase()}</span>
          </NavLink>
        ))}

        {isAuthenticated ?
          <Link onClick={handleLogout}>
            <IoLogOutOutline style={{height: '20px', width: '20px'}}/> <span>LOGOUT</span> </Link>
          : <Link onClick={handleLogin}>
              <IoLogInOutline style={{height: '20px', width: '20px'}}/> 
              <span>LOGIN</span> 
            </Link>
        }

      </div>

    </div>
  );
}

export default Menus;
