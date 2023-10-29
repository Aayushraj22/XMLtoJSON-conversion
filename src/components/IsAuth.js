import React from 'react'
import Description from './Description'
import Home from '../pages/home/Home'

import {useAuth0} from '@auth0/auth0-react'
import Loader from './Loader'

const IsAuth = () => {
    const {isAuthenticated,isLoading} = useAuth0();
    if(isLoading) 
        return <Loader />
        
    if(isAuthenticated)
        return <Home />

  return (
    <Description />
  )
}

export default IsAuth