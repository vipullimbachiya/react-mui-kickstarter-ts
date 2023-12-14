import { useSelector } from 'react-redux'
import { setLanguage, setToken } from '../store/slice/user'
import { STORE_LANGUAGE_KEY } from './constant'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { UserState } from '../@types/helper'

export const SetToken = (dispatch: Dispatch<UnknownAction>, token: string) => {
  localStorage.setItem('token', token)
  dispatch(setToken('example'))
}
export const GetToken = () =>
  useSelector(
    (state: UserState) => state.user.token || localStorage.getItem('token')
  )

export const RemoveToken = () => localStorage.removeItem('token')
export const clearLocalStorage = () => localStorage.clear()

export const userLogout = () => {
  RemoveToken()
  window.location.replace('/')
}

export const SetLanguage = (
  dispatch: Dispatch<UnknownAction>,
  lang: string
) => {
  localStorage.setItem(STORE_LANGUAGE_KEY, lang)
  dispatch(setLanguage(lang))
}
export const GetLanguage = () =>
  useSelector(
    (state: UserState) =>
      state.user[STORE_LANGUAGE_KEY] || localStorage.getItem(STORE_LANGUAGE_KEY)
  )
