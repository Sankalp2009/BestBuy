import {
    GET_ERROR,
    GET_REQUEST,
    GET_SUCCESS,
    GET_SUCCESS_FILTER,
    SORT_HTL,
    SORT_LTH,
    SORT_RATING,
} from "./Product.types";

const initData = {
    isError: false,
    isLoading: false,
    products: [],
    filterInfo: [],
    user: "",
};

export const productReducer = (state = initData, action) => {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                products: [],
            };
        case GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: [...action.payload],
            };
        case GET_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                products: [],
                filterInfo: [],
            };
        case GET_SUCCESS_FILTER:
            return {
                ...state,
                isLoading: false,
                isError: false,
                filterInfo: action.payload,
            };
        case SORT_HTL:
            return {
                ...state,
                filterInfo: [...action.payload.sort((a, b) => +b.price - +a.price)],
            };
        case SORT_LTH:
            return {
                ...state,
                filterInfo: [...action.payload.sort((a, b) => +a.price - +b.price)],
            };
        case SORT_RATING:
            return {
                ...state,
                filterInfo: [
                    ...action.payload.sort((a, b) => b.rating.length - a.rating.length),
                ],
            };

        default:
            return state;
    }
};
