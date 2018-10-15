import axios from 'axios';
import { toastr } from "react-redux-toastr";
import consts from '../../consts';

// Action Types
export const Types = {
  TOKEN_VALIDATED: "auth/TOKEN_VALIDATED",
  USER_FETCHED: "auth/USER_FETCHED"
};

// Reducer
const userKey = "_admin";
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOKEN_VALIDATED:
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(userKey);
        return { ...state, validToken: false, user: null };
      }
    case Types.USER_FETCHED:
      localStorage.setItem(userKey, JSON.stringify(action.payload));
      return { ...state, user: action.payload, validToken: true };
    default:
      return state;
  }
}

// Action Creators
export function login(values) {
  return dispatch => {
    axios
      .post(`${consts.API_URL}auth/authenticate`, values)
      .then(resp => {
        dispatch({
          type: Types.USER_FETCHED,
          payload: resp.data
        });
      })
      .catch(e => {
        if (typeof e.response !== "undefined") {
          toastr.error("Erro", e.response.data.error);
        }
      });
  };
}

export function logout() {
  return { type: Types.TOKEN_VALIDATED, payload: false };
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios
        .get(`${consts.API_URL}auth/validate`,{
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        .then(resp => {
          dispatch({ type: Types.TOKEN_VALIDATED, payload: resp.data.valid });
        })
        .catch(e => dispatch({ type: Types.TOKEN_VALIDATED, payload: false }));
    } else {
      dispatch({ type: Types.TOKEN_VALIDATED, payload: false });
    }
  };
}
