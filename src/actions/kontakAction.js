import axios from 'axios'

// ini akan dioper ke reducer
export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

// Bikin actionnya seperti ini
export const getListKontak = () => {
    console.log("File: ./src/actions/KontakAction.js")
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
            type: UPDATE_KONTAK,
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
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false
                }
            })
        }).catch((error) => {
            // kalo gagal 
            dispatch({
                type: UPDATE_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}

// Detail Kontak
export const detailKontak = (data) => {
    console.log('detail kontak :', data);
    return (dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data
            }
        })
    }
}

// Action Update
export const updateKontak = (data) => {
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
            method: "PUT",
            url: "http://localhost:3000/kontak/" + data.id,
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