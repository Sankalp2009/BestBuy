import axios from "axios";
import { GET_ERROR, GET_REQUEST, GET_SUCCESS,GET_REQUEST_FILTER, GET_SUCCESS_FILTER, SORT_RATING, SORT_LTH, SORT_HTL } from "./Product.types";

export const getRequest = () => ({
    type: GET_REQUEST,
});

export const getSuccess = (payload) => ({
    type: GET_SUCCESS,
    payload,
});

export const getError = () => ({
    type: GET_ERROR,
});

export const getData = () => async (dispatch) => {
    try {
        let response = await axios.get(`${process.env.REACT_APP_URL}/api/v1/Products`);
        const data = response.data
        console.log(data)
        dispatch({type:GET_REQUEST_FILTER,payload:data})


    } catch (e) {
        console.log(e);
        dispatch(getError());
    }
};


export const succsessFilter = (payload) => ({
    type: GET_SUCCESS_FILTER,
    payload,
});


export const getFilterData = (params) => async (dispatch) => {
    try {
        let { data } = await axios.get(`${process.env.REACT_APP_API}/query`, {
            params,
        });
        dispatch(succsessFilter(data.product));
        console.log(params);
    } catch (e) {
        console.log(e);
    }
};

export const htl = (payload) => ({
    type: SORT_HTL,
    payload,
});

export const lth = (payload) => ({
    type: SORT_LTH,
    payload,
});


export const sortByRating = (payload) => ({
    type: SORT_RATING,
    payload,
});

export const sortData = (val, payload) => (dispatch) => {
    switch (val) {
        case "htl":
            dispatch(htl(payload));
            break;
        case "lth":
            dispatch(lth(payload));
            break;
        case "sr":
            dispatch(sortByRating(payload));
            break;
        default:
            return "Not a valid";
    }
};

