import { AccountFullResponseBody, SimpleAccountResponseBody } from "../types";

export interface AccountState {
    accounts: Array<SimpleAccountResponseBody>,
    showValues: boolean,
    selectedAccount: AccountFullResponseBody
}

export interface CommonState {
    loading: boolean;
    error: string;
}