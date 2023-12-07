import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Switch from '@mui/material/Switch'
import { dark, light } from './themeSlice'
import Tooltip from '@mui/material/Tooltip';


function ThemeChanger() {
    const state = useSelector(state => state.themeColor)
    let themeMode = 'dark'
    if(state.background === 'black'){
      themeMode = 'Light' 
    } else {
      themeMode = 'Dark'
    }

    const dispatch = useDispatch()

  return (
      <Tooltip title={themeMode + ' mode'} disableInteractive>
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
      </Tooltip>
  )
}

export default ThemeChanger