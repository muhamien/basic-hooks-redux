import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getListKontak, deleteKontak, detailKontak } from '../../actions/kontakAction'


function ListKontak() {
    console.log("File: ./src/component/ListKontak/index.js")
    const {
        getListKontakResult,
        getListKontakLoading,
        getListKontakError,
        deleteKontakResult,
    } = useSelector((state) => state.KontakReducer)

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        console.log("---Delete Contact " + id)
        dispatch(deleteKontak(id))
    }

    useEffect(() => {
        console.log("---ListKontak Component")
        // get list kontak
        if (deleteKontakResult) {
            dispatch(getListKontak())
        } else {

            dispatch(getListKontak())
        }
    }, [deleteKontakResult, dispatch])

    return (
        <div>
            <h4>List Contact</h4>
            {
                getListKontakResult ? (
                    getListKontakResult.slice(0).reverse().map((kontak) => {
                        return (
                            <div key={kontak.id} style={{ backgroundColor: 'lightgray', padding: '8px', margin: '4px', borderRadius: '8px' }}>
                                <h2 style={{ fontWeight: 'bold' }}>{kontak.nama}</h2>
                                <p style={{ fontWeight: '400' }}>{kontak.nohp}</p>
                                <button onClick={() => { dispatch(detailKontak(kontak)) }}>Edit</button>
                                <button onClick={() => { handleDelete(kontak.id) }}>Delete</button>
                            </div>
                        )
                    })
                ) : getListKontakLoading ? (
                    <p>Loading...</p>
                ) : (
                    <p>{getListKontakError ? getListKontakError : 'Not found'}</p>
                )
            }
        </div >
    )
}

export default ListKontak
