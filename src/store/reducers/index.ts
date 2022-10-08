import { combineReducers } from 'redux'
import account from './account'
import Common from './common';



export const rootReducer = combineReducers({
    accountReducer: account,
    commonReducer: Common
})

export type RootState = ReturnType<typeof rootReducer>;

