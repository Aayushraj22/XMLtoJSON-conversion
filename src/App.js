import "./App.scss";
// import "./styles/global.scss";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/home/Home";
import Error from "./components/Error";
import File from "./pages/file/File";
import Files from "./pages/Files/Files";
import Personal from "./pages/personalDetails/Personal";
import { useAuth0 } from "@auth0/auth0-react";
import Protected from "./components/Protected";

import {
  Route,
  Routes,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import IsAuth from "./components/IsAuth";
// import Footer from "./components/footer/Footer";
// import Menus from "./components/menus/Menus";

import Auth0ProviderWithNavigate from "./components/Auth0ProviderWithNavigate";

function App() {
  // app basically mera layout hai
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <IsAuth />,
  //   },
  //   {
  //     path: "/dash",
  //     element: <Protected component={Home} />,
  //   },
  //   {
  //     path: "/file",
  //     element: <Protected component={File} />,
  //   },
  //   {
  //     path: "/files",
  //     element: <Protected component={Files} />,
  //   },
  //   {
  //     path: "/files/:id",
  //     element: <Protected component={Personal} />,
  //   },

  //   {
  //     path: "/*",
  //     element: <Error />,
  //   },
  // ]);

  return (
    <div className="App">
      <div className="NavigationHeader">
        <Navbar />
      </div>
      <div className="AppRoutesPage">
        <Routes>
          <Route path="/" element={<IsAuth />} />

          <Route path="/dash" element={<Protected component={Home} />} />
          <Route path="/file" element={<Protected component={File} />} />
          <Route path="/files" element={<Protected component={Files} />} />
          <Route
            path="files/:id"
            element={<Protected component={Personal} />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
    

    // <RouterProvider router={router}>
    //   <Auth0ProviderWithNavigate>
    //     <Layout />
    //   </Auth0ProviderWithNavigate>
    // </RouterProvider>
  );
}

export default App;

// function Layout() {
//   return (
//     <div className="main">
//       <Navbar />

//       <div className="container">
//         <div className="menusContainer">
//           <Menus />
//         </div>

//         <div className="contentContainer">
//           <Outlet />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
