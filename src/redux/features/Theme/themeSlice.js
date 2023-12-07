import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    background: 'black',
    color: 'white',
}

const themeSlice = createSlice({
    name: 'themeColor',
    initialState,
    reducers: {
        dark: (state) => {
            state.background = 'black'
            state.color = 'white'
        },

        light: state => {
            state.background = 'white'
            state.color = 'black'
        }
    }
})

export const {dark, light} = themeSlice.actions
export default themeSlice.reducer

