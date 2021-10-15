import React, { useState, useContext } from 'react'
import ObrasContext from './../context/Obras/ObrasContext'

export default function CreateObra() {
    //estado global
    const ctx = useContext(ObrasContext)
    const { addObra } = ctx

    //estado local
    const [newObra, setNewObra] = useState({
        name: "",
        sizeH: 0,
        sizeW: 0,
        sizeP: 0,
        materials: "",
        picturesUrl: "",
        availableForSale: true,
        price: 0
    })
    //edo local
    const handleForm = (event) => {
        event.preventDefault()
        setNewObra({
            ...newObra,
            [event.target.name]: event.target.value
        })

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        addObra(newObra)
    }
    return (
        <>
            create obra
        </>
    )
}