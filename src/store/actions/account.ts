import api from "../../services/api";
import * as types from "../../constants/ActionsTypes";
import { AccountFullResponseBody, SimpleAccountResponseBody } from "../../types";
import useUser from "../../hooks/useUser";
import moment from "moment";

const endPoint = '/api/v1/accounts';


const receiveAccounts = (accounts: Array<any>) => ({
    type: types.RECEIVE_ACCOUNTS,
    accounts
})


export const getAllAccounts: any = () => {
    return async (dispatch: any) => {
        try {
            dispatch({ type: types.CLEAR_ERROR })
            const config = {
                headers: {
                    'locale': 'pt-BR',
                }
            }
            const url = `${endPoint}/findAll/${useUser().id}`;

            const response = await api.get(url, config);
            dispatch(receiveAccounts(response.data))
            if (response.data.items.length > 0) {
                await dispatch(setSelectedAccount(response.data.items[0]));
            }

        } catch (error: any) {

            const message = error ? error.message + ' - ' + error.code : 'Erro desconhecido';
            dispatch({ type: types.SET_ERROR, error: message })
            dispatch({ type: types.SET_LOADING_OFF })

        }
    }
}

export const setShowValues: any = (show: boolean) => {
    return async (dispatch: any) => {
        dispatch({
            type: types.SET_SHOW_VALUES,
            showValues: show
        })
    }
}

export const setSelectedAccount: any = (selectedAccount: SimpleAccountResponseBody) => {
    return async (dispatch: any) => {
        try {
            const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
            const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
            const config = {
                headers: {
                    'locale': 'pt-BR',
                    'startDate': startOfMonth,
                    'endDate': endOfMonth
                }
            }
            const url = `${endPoint}/${selectedAccount.id}`;
            const response = await api.get(url, config);
            dispatch({
                type: types.SET_SELECTED_ACCOUNT,
                selectedAccount: response.data
            })

        } catch (error: any) {
            const message = error ? error.message + ' - ' + error.code : 'Erro desconhecido';
            dispatch({ type: types.SET_ERROR, error: message })
            dispatch({ type: types.SET_LOADING_OFF })
        }
    }
}

export const getAccountDetailsByPeriod: any = (id: number, startDate: string, endDate: string) => {
    return async (dispatch: any) => {
        try {
            const config = {
                headers: {
                    'locale': 'pt-BR',
                    'startDate': startDate,
                    'endDate': endDate
                }
            }
            const url = `${endPoint}/${id}`;
            const response = await api.get(url, config);
            dispatch({
                type: types.SET_SELECTED_ACCOUNT,
                selectedAccount: response.data
            })

        } catch (error: any) {
            const message = error ? error.message + ' - ' + error.code : 'Erro desconhecido';
            dispatch({ type: types.SET_ERROR, error: message })
            dispatch({ type: types.SET_LOADING_OFF })
        }
    }
}
