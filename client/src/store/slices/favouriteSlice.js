import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favourites: []
}

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addNewsToFavoutites: (state, action) => {
      state.favourites.push(action.payload)
    },
    removeNewsFromFavoutites: (state, action) => {
      const index = state.favourites.findIndex(item => item.id === action.payload)
      if (index !== -1) {
        state.favourites.splice(index, 1)
      }
    }
  }
})

export const { actions, reducer } = favouriteSlice
