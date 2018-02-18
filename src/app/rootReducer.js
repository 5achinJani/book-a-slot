import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import { slots, slot } from "reducers/index";

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  slots,
  slot
});
