import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userSlice from './slice/user'
// ...
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
