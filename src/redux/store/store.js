import { createStore,applyMiddleware } from "redux";
import { Reducer } from "../reducer/movieReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


export const store =createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)));