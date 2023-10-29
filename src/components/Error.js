import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'

const Box = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  flex-direction: column;
  gap: 1rem;

  h2{
    max-width: 576px;
  }

  div{
    border: 1px solid blue;
    color: blue;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;

    &:hover{
      cursor: pointer;
      background: blue;
      color: white;
    }
  }
  
`

const Error = () => {
//   const {isAuthenticated} = useAuth0() ;
  const navigate = useNavigate()

// useEffect(() => {
//   if(isAuthenticated == false)
//     navigate('/', {replace: true})

// }, [])



  return (
    <Box>
      <h2>Oops! <span>page not found</span></h2>
      <div onClick={() =>navigate(-1)}>click me!</div>
    </Box>
  )
}

export default Error