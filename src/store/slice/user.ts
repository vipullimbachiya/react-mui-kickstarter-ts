import { createSlice } from '@reduxjs/toolkit'
import { STORE_LANGUAGE_KEY } from '../../utils/constant'

export type UserState = { token: string; [STORE_LANGUAGE_KEY]: string }

const initialState: UserState = {
  token: '',
  [STORE_LANGUAGE_KEY]: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, actions) => {
      return {
        ...state,
        token: actions.payload,
      }
    },

    setLanguage: (state, actions) => {
      return {
        ...state,
        [STORE_LANGUAGE_KEY]: actions.payload,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken, setLanguage } = userSlice.actions

export default userSlice.reducer
