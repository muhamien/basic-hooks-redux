import axios from 'axios'

// ini akan dioper ke reducer
export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";

// Bikin actionnya seperti ini
export const getListKontak = () => {
    return (dispatch) => {
        // is loading 
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get API 
        axios({
            method: "GET",
            url: "http://localhost:3000/kontak",
            timeout: 120000,
        }).then((response) => {
            // kalo berhasil 
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

// Action Post
export const addKontak = (data) => {
    return (dispatch) => {
        // is loading 
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // Post API 
        axios({
            method: "POST",
            url: "http://localhost:3000/kontak",
            timeout: 120000,
            data: data,
        }).then((response) => {
            // kalo berhasil 
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            // kalo gagal 
            dispatch({
                type: ADD_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}
// Action Delete
export const deleteKontak = (id) => {
    return (dispatch) => {
        // is loading 
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // Post API 
        axios({
            method: "DELETE",
            url: "http://localhost:3000/kontak/" + id,
            timeout: 120000,
        }).then((response) => {
            // kalo berhasil 
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            // kalo gagal 
            dispatch({
                type: DELETE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}