// import "./App.scss";
import "./styles/global.scss";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/Loader";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./components/footer/Footer";
import Menus from "./components/menus/Menus";
import Home from "./pages/home/Home";
import Error from "./components/Error";
import File from "./pages/file/File";
import Protected from "./components/Protected";
// import IsAuth from "./components/IsAuth";
import {Routes,Route} from 'react-router-dom'
import Users from './pages/users/Users'
import User from './pages/user/User'


// import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";

function App() {
  // app basically mera layout hai
  const {isLoading,isAuthenticated} = useAuth0()

  console.log('isloading ffrom app : ', isLoading)
  console.log('auth : ',isAuthenticated)
  if(isLoading)
    return <Loader />

  return (

    <div className="main">
      <div className="Navbar">
      <Navbar />
  
      </div>

      <div className="container">
        <div className="menusContainer">
          <Menus />
        </div>

        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<Home />} />
{/* 
            <Route path="/dash" element={<Protected component={Home} />} /> */}
            <Route path="/users" element={<Protected component={Users} />} />
            <Route path="/users/:id" element={<Protected component={User} />} />
            
            <Route path="/file" element={<Protected component={File} />} />
            
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>

      <div>
      <Footer />

      </div>
    </div>
  );
}

export default App;

