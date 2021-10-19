import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getListKontak, deleteKontak } from '../../actions/kontakAction'


function ListKontak() {


    const {
        getListKontakResult,
        getListKontakLoading,
        getListKontakError,
        deleteKontakResult,
        deleteKontakLoading,
        deleteKontakError,
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
        }
        // dispatch(getListKontak())
        console.log("result: " + getListKontakResult)
    }, [deleteKontakResult, dispatch])

    return (
        <div>
            <h4>List Contact</h4>
            {
                getListKontakResult ? (
                    getListKontakResult.slice(0).reverse().map((kontak) => {
                        return (
                            <div style={{ backgroundColor: 'gray', padding: '8px', margin: '4px', color: 'white', borderRadius: '8px' }}>
                                <h2 style={{ fontWeight: 'bold' }} key={kontak.id}>{kontak.nama}</h2>
                                <p style={{ fontWeight: '400' }} key={kontak.id}>{kontak.nohp}</p>
                                <button onClick={() => { handleDelete(kontak.id) }}>Delete</button>
                            </div>
                        )
                    })
                ) : getListKontakLoading ? (
                    <p>Loading...</p>
                ) : (
                    <p p > {getListKontakError ? getListKontakError : 'not found'}</p>
                )
            }
        </div >
    )
}

export default ListKontak
