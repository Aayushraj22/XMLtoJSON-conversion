import { configureStore } from '@reduxjs/toolkit'

import reducer from './fileUpload'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer
})

export default store;