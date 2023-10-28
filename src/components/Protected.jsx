// import React from "react";
// import { Outlet, Navigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// function Protected({ component: Component }) {
//     const { isAuthenticated } = useAuth0();
//     console.log('keys : ' , sessionStorage.getItem('id'))
//     console.log(isAuthenticated , 'isAuthen')
//     console.log('came at protected for checking')

//     if (isAuthenticated === false) return <Navigate to="/" replace />;

//     return (
//         <Component />
//     );
// }

// export default Protected;

import React from 'react'
import Loader from './Loader'
import { withAuthenticationRequired } from '@auth0/auth0-react'

export default function Protected({ component }) {

    const Component = withAuthenticationRequired(component, { // this will run till react becomes confirm that user is authenticated, if not then universal login page of auth0 will be called
        onRedirecting: () => (
            <div className="page-layout">
                <Loader />
            </div>
        )
    })

    return (
        <Component />
    )
}

