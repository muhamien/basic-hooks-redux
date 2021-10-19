import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addKontak, getListKontak, updateKontak } from '../../actions/kontakAction'

function AddKontak() {


    const [nama, setNama] = useState("")
    const [nohp, setNohp] = useState("")
    const [id, setId] = useState(false)

    const dispatch = useDispatch()

    const { addKontakResult, addKontakLoading, addKontakError, detailKontakResult, updateKontakResult } = useSelector((state) => state.KontakReducer)

    const handleSubmit = (event) => {
        console.log("File: ./src/component/AddKontak/index.js")
        if (id) {
            console.log('update');
            event.preventDefault()
            dispatch(updateKontak({ id: id, nama: nama, nohp: nohp }))
        } else {
            console.log('add');
            event.preventDefault()
            dispatch(addKontak({ nama: nama, nohp: nohp }))
        }
    }

    useEffect(() => {
        if (addKontakResult) {
            dispatch(getListKontak())
            setNama('')
            setNohp('')
        }
    }, [addKontakResult, dispatch])

    useEffect(() => {
        if (detailKontakResult) {
            dispatch(getListKontak())
            setNama(detailKontakResult.nama)
            setNohp(detailKontakResult.nohp)
            setId(detailKontakResult.id)
        }
    }, [detailKontakResult, dispatch])

    useEffect(() => {
        if (updateKontakResult) {
            dispatch(getListKontak())
            setNama('')
            setNohp('')
            setId(false)
        }
    }, [updateKontakResult, dispatch])

    return (
        <div>
            <h4>Add new contact</h4>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <input type="text" placeholder="Enter name" name="nama" value={nama} onChange={(event) => { setNama(event.target.value) }} />
                <input type="text" placeholder="Enter Phone number" name="nohp" value={nohp} onChange={(event) => { setNohp(event.target.value) }} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default AddKontak
