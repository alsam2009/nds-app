import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as favouriteReducer } from './slices/favouriteSlice'

const reducers = combineReducers({
  favourites: favouriteReducer
})

const store = configureStore({
  reducer: reducers,
  devTools: true
})

export default store