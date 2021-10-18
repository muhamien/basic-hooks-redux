import axios from 'axios'

// ini akan dioper ke reducer
export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

// Bikin actionnya seperti ini
export const getListKontak = () => {
    console.log('Masuk ke actions:')
    return (dispatch) => {
        // is loading
        console.log(' |->2. Middleware is loading')
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get API
        console.log(' |->3. getting data...')
        axios({
            method: "GET",
            url: "http://localhost:3000/kontak",
            timeout: 120000,
        }).then((response) => {
            // kalo berhasil
            console.log("  |-->Success: ", response.data)
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            // kalo gagal
            console.log("  |-->Failed: ", error.message)
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}