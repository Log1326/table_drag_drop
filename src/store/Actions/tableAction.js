import TableServices from "../../services/tableServices";
import {Is_Error, Is_Get_Data, Is_Loading} from "../Reducers/tableReducer";


export const _Get_Data_Table = () => {
    return async dispatch => {
        dispatch(Is_Loading)
        await TableServices._get_data_table()
            .then(response => {
                if (response.status === 200) {
                    dispatch(Is_Get_Data(response.data))
                } else {
                    dispatch(Is_Error('error....'))
                }
            })
    }
}