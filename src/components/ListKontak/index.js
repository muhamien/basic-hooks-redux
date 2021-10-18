import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getListKontak } from '../../actions/kontakAction'


function ListKontak() {
    const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector((state) => state.KontakReducer)
    console.log('Component')

    const dispatch = useDispatch()
    useEffect(() => {
        // get list kontak
        console.log(' |->1. Load Component')
        dispatch(getListKontak())
    }, [dispatch])

    return (
        <div>
            <h4>List Contact</h4>
            {
                getListKontakResult ? (
                    getListKontakResult.map((kontak) => {
                        console.log('     show ' + kontak.id)
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
