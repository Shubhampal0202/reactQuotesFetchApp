import {
    FETCH_QUOTE_REQUEST,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAILURE
} from './quoteTypes'

const initialState = {
    loading: false,
    quotes: [],
    error: '',
    number: ""
}
export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_REQUEST:
            return { ...state, loading: true, number: "" }
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state, quotes: action.payload,
                loading: false
            }
        case FETCH_QUOTE_FAILURE:
            return {
                ...state, loading: false, error: action.payload
            }
        case "set_Value":
            return { ...state, number: action.payload }
        default:
            return state;
    }

}