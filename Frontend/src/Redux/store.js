import thunk from "redux-thunk";
import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { productReducer } from './Product/Product.reducer'

const rootReducer = combineReducers({
    products: productReducer

})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const logger = (state) => (next) => (action) => {
    if (typeof action === "function") {
        return action(state.dispatch, state.getState)
    }
    // console.log("action", action, typeof action)
    return next(action)
}
export const store = legacy_createStore(rootReducer, applyMiddleware(logger))