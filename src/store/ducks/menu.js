import axios from 'axios';
import { toastr } from "react-redux-toastr";
import consts from '../../consts';

// Action Types
export const Types = {
  REQUEST_LIST: "menu/REQUEST_LIST"
};

// Reducer
const INITIAL_STATE = {
  menu: []
};

export default function menu(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_LIST:
        return { ...state, menu: action.payload };
    default:
      return state;
  }
}

// Action Creators
export function listMenu() {
  return dispatch => {
    axios
      .get(`${consts.API_URL}menu`)
      .then(resp => {
        dispatch({
          type: Types.REQUEST_LIST,
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