// //Write the ActionCreator functions here
// import * as types from "./actionTypes";
// import axios from "axios";

// const LoginRequest = () => {
//   return {
//     type: types.LOGIN_REQUEST,
//   };
// };

// const LoginSuccess = (payload) => {
//   return {
//     type: types.LOGIN_SUCCESS,
//     payload,
//   };
// };

// const LoginFailure = () => {
//   return {
//     type: types.LOGIN_FAILURE,
//   };
// };

// const login = (payload) => (dispatch) => 
// {
//   dispatch({ type: types.LOGIN_REQUEST });
//   return axios({ method: "post", url: "https://reqres.in/api/login", data: payload })
//     .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token }))
//     .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
// };

// export { login, LoginRequest, LoginFailure, LoginSuccess };