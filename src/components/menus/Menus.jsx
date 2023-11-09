import "./menus.scss";
import { NavLink, Link } from "react-router-dom";
import { menu } from "../../data";
import { useAuth0 } from '@auth0/auth0-react';

function Menus() {

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
            <img src={item.icon} alt={item.title} />
            <span>{item.title}</span>
          </NavLink>
        ))}

        {isAuthenticated ?
          <Link onClick={handleLogout}>
            <img src='logout.png' alt='logout' /> <span>Logout</span> </Link>
          : <Link onClick={handleLogin}>
              <img src='login.png' alt='login' /> 
              <span>Login</span> 
            </Link>
        }

      </div>

      
    </div>
  );
}

export default Menus;
