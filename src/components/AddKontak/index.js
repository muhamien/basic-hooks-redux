import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addKontak, getListKontak } from '../../actions/kontakAction'

function AddKontak() {


    const [nama, setNama] = useState("")
    const [nohp, setNohp] = useState("")

    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        console.log("---AddKontak Component")
        event.preventDefault();
        dispatch(addKontak({ nama: nama, nohp: nohp }))
    }

    const { addKontakResult, addKontakLoading, addKontakError } = useSelector((state) => state.KontakReducer)

    useEffect(() => {
        if (addKontakResult) {
            dispatch(getListKontak())
            setNama('')
            setNohp('')
        }
    }, [addKontakResult, dispatch])
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
