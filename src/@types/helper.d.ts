import { STORE_LANGUAGE_KEY } from '../utils/constant'

export interface UserState {
  user: {
    token: string
    [STORE_LANGUAGE_KEY]: string
  }
}
