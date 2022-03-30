import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import combine from "./Combain";


export const store = createStore(combine, composeWithDevTools(applyMiddleware(thunk)));

