import { createStore } from "redux";
import initState from "./initState";
import userReducer from "./reducer/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(userReducer, initState, composeWithDevTools());

export default store;
