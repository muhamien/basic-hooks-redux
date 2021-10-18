import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getListKontak } from '../../actions/kontakAction'


function ListKontak() {


    const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector((state) => state.KontakReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        console.log("---ListKontak Component")
        // get list kontak
        dispatch(getListKontak())
    }, [dispatch])

    return (
        <div>
            <h4>List Contact</h4>
            {
                getListKontakResult ? (
                    getListKontakResult.slice(0).reverse().map((kontak) => {
                        return (
                            <p key={kontak.id}>{kontak.nama + " - " + kontak.nohp}</p>
                        )
                    })
                ) : getListKontakLoading ? (
                    <p>Loading...</p>
                ) : (
                    <p>{getListKontakError ? getListKontakError : 'Not found!!'}</p>
                )
            }
        </div >
    )
}

export default ListKontak
