import axios from 'axios';
import {
    FETCH_QUOTE_REQUEST,
    FETCH_QUOTE_SUCCESS,
    FETCH_QUOTE_FAILURE
} from './quoteTypes'

export const setValue = (number) => {
    return {
        type: "set_Value",
        payload: number
    }
}
export const fetchQuoteRequest = () => {
    return {
        type: FETCH_QUOTE_REQUEST
    }
}

export const fetchQuoteSuccess = (quotes) => {
    return {
        type: FETCH_QUOTE_SUCCESS,
        payload: quotes
    }
}

export const fetchQuoteFailure = (error) => {
    return {
        type: FETCH_QUOTE_SUCCESS,
        paload: error
    }
}
export const fetchQuotes = (number) => {
    const options = {
        method: 'GET',
        url: 'https://famous-quotes4.p.rapidapi.com/random',
        params: { category: 'all', count: `${number}` },
        headers: {
            'X-RapidAPI-Key': 'd2fc17f472msh4c90723ed46589bp1405d5jsn63f6b09b3aa7',
            'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
        }
    };
    return (dispatch) => {
        dispatch(fetchQuoteRequest());
        axios.request(options).then(function (response) {
            const quotes = response.data
            console.log(quotes);
            dispatch(fetchQuoteSuccess(quotes))
        }).catch(function (error) {
            console.log(error);
            dispatch(fetchQuoteFailure(error.message))
        });
    }


}