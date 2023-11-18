import { configureStore } from '@reduxjs/toolkit'

import graphReducer from './graphSpreading/graphSlice'
import themeReducer from './Theme/themeSlice'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    graph: graphReducer,
    themeColor: themeReducer,
  }
})

export default store;