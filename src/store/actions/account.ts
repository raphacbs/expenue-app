import api from "../../services/api";
import * as types from "../../constants/ActionsTypes";

const endPoint = '/api/v1/accounts';

const receiveAccounts = (accounts: Array<any>) => ({
    type: types.RECEIVE_ACCOUNTS,
    accounts
})

export const getAllAccounts: any = () => {
    return async (dispatch: any) => {
        try {
            const response = await api.get(`${endPoint}`);
            dispatch(receiveAccounts(response.data))
        } catch (error: any) {
            const message = error ? error.message + ' - ' + error.code : 'Erro desconhecido';
        }
    }
}