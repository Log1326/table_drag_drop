const _DATA = '_DATA'
const _IS_LOADING = '_IS_LOADING'
const _IS_ERROR = '_IS_ERROR'
const initialState = {
    data: [
        {
            id: '',
            fullName: "''",
            ExtraordinaryHours: "",
            Manual_Hours: "'",
            Hours: "'",
            Total_Hours: "",
            optionsSort: "",
            optionsDrop: ''
        }
    ],
    isLoading: false,
    error: ''
}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case _IS_LOADING:
            return {isLoading: true, error: null}
        case _DATA:
            return {...state, data: action.payload, isLoading: false}
        case _IS_ERROR:
            return {isLoading: false, error: action.payload}
        default:
            return state
    }
}

export const Is_Get_Data = (payload) => ({type: _DATA, payload})
export const Is_Loading = () => ({type: _IS_LOADING})
export const Is_Error = (payload) => ({type: _IS_LOADING, payload})