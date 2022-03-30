import {combineReducers} from "redux";
import {tableReducer} from "../Reducers/tableReducer";


const combine = combineReducers({
    table: tableReducer,
})

export default combine;