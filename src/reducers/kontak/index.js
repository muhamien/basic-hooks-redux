import { GET_LIST_KONTAK } from '../../actions/kontakAction'

// Step 3: create folder reducer/kontak
const initialState = {
    getListKontakLoading: false,
    getListKontakResult: false,
    getListKontakError: false,
}
console.log('Reducer')

const kontak = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_KONTAK:
            return {
                ...state,
                getListKontakResult: action.payload.data,
                getListKontakLoading: action.payload.loading,
                getListKontakError: action.payload.errorMessage,
            }
        default:
            return state;
    }
}

export default kontak;