import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import auth from "./auth";
import menu from "./menu";

export default combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    auth:auth,
    menu:menu
});
