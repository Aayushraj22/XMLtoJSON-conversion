import "./menus.scss";
import { Link } from "react-router-dom";
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
      {menu.map((item => (
        <div className="item" key={item.id}>
          <span className="title">{item.title.toUpperCase()} </span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} key={listItem.id}>
              <img src={listItem.icon} alt={listItem.title} />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))

          }
        </div>

      )))
      }
      <div className="item">
        {isAuthenticated ?
          <Link onClick={handleLogout}> Logout </Link>
          : <Link onClick={handleLogin}> Login </Link>
        }
      </div>
    </div>
  );
}

export default Menus;
