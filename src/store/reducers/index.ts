import { combineReducers } from 'redux'
import account from './account'



export const rootReducer = combineReducers({
    accountReducer: account
})

export type RootState = ReturnType<typeof rootReducer>;

