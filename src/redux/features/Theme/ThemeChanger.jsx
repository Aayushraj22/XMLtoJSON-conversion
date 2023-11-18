import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Switch from '@mui/material/Switch'
import { dark, light } from './themeSlice'


function ThemeChanger() {
    const state = useSelector(state => state.themeColor)
    const dispatch = useDispatch()

  return (
        <Switch defaultChecked 
            onChange={() => {
            if( state.background === 'black'){
                dispatch(light())
            }else {
                dispatch(dark())
            }
            }}
            inputProps={{ 'aria-label': 'controlled' }}
          />
  )
}

export default ThemeChanger