import { RECEIVE_ACCOUNTS, SET_SELECTED_ACCOUNT, SET_SHOW_VALUES } from '../../constants/ActionsTypes'
import { AccountState } from '../stateModels'

const initialState: AccountState = {
    accounts: [],
    showValues: false,
    selectedAccount: {
        id: '',
        description: '',
        balanceDescription: '',
        totalRevenuesDescription: '',
        totalExpensesDescription: '',
        balance: 0,
        totalRevenues: 0,
        totalExpenses: 0,
        selectedPeriod: {
            description: '',
            startDate: '',
            endDate: ''
        },
        nextMonth: {
            description: '',
            startDate: '',
            endDate: ''
        },
        previousMonth: {
            description: '',
            startDate: '',
            endDate: ''
        },
        transactions: []
    }
}

const account = (state: AccountState = initialState, action: any) => {
    switch (action.type) {
        case RECEIVE_ACCOUNTS:
            return {
                ...state,
                accounts: action.accounts.items
            }
        case SET_SHOW_VALUES:
            return {
                ...state,
                showValues: action.showValues
            }
        case SET_SELECTED_ACCOUNT:
            return {
                ...state,
                selectedAccount: action.selectedAccount
            }
        default:
            return state;
    }
}

export default account;
