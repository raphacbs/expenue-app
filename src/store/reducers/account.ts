import { RECEIVE_ACCOUNTS, SET_LOADING_DETAILS_OFF, SET_LOADING_DETAILS_ON, SET_SELECTED_ACCOUNT, SET_SHOW_VALUES } from '../../constants/ActionsTypes'
import { AccountState } from '../stateModels'

const initialState: AccountState = {
    accounts: [],
    showValues: false,
    selectedAccount: {
        id: 0,
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
    },
    loadingDetails: false

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
        case SET_LOADING_DETAILS_OFF:
            return {
                ...state,
                loadingDetails: false
            }
        case SET_LOADING_DETAILS_ON:
            return {
                ...state,
                loadingDetails: true
            }
        default:
            return state;
    }
}

export default account;
