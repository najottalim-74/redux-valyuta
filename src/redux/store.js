import { combineReducers, createStore } from "redux";
import valyutaReducer from "./reducer/valyutaReducer";

const reducer = combineReducers({ valyutaReducer });

const store = createStore(reducer);
export default store;
