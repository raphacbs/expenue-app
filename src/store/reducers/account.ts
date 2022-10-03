import { RECEIVE_ACCOUNTS } from '../../constants/ActionsTypes'
import { AccountState } from '../stateModels'

const initialState: AccountState = {
    accounts: []
}

const account = (state: AccountState = initialState, action: any) => {
    switch (action.type) {
        case RECEIVE_ACCOUNTS:
            return {
                ...state,
                accounts: action.accounts.items
            }
        default:
            return state;
    }
}

export default account;
