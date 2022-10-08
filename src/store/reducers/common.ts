import { CLEAR_ERROR, SET_ERROR, SET_LOADING_OFF, SET_LOADING_ON } from "../../constants/ActionsTypes";
import { CommonState } from "../stateModels";


const initialState: CommonState = {
    loading: false,
    error: ""
}

const Common = (state: CommonState = initialState, action: any) => {
    switch (action.type) {
        case SET_LOADING_ON:
            return {
                ...state,
                loading: true
            }
        case SET_LOADING_OFF:
            return {
                ...state,
                loading: false
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: ""
            }
        default:
            return state;
    }
}

export default Common;