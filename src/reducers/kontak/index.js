import { GET_LIST_KONTAK, ADD_KONTAK } from '../../actions/kontakAction'

// Step 3: create folder reducer/kontak
const initialState = {
    getListKontakLoading: false,
    getListKontakResult: false,
    getListKontakError: false,

    addKontakLoading: false,
    addKontakResult: false,
    addKontakError: false,
}
console.log("---Kontak Reducer");
const kontak = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_KONTAK:
            return {
                ...state,
                getListKontakResult: action.payload.data,
                getListKontakLoading: action.payload.loading,
                getListKontakError: action.payload.errorMessage,
            }
        case ADD_KONTAK:
            return {
                ...state,
                addKontakResult: action.payload.data,
                addKontakLoading: action.payload.loading,
                addKontakError: action.payload.errorMessage,
            }
        default:
            return state;
    }
}

export default kontak;