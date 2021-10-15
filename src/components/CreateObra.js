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
        videoUrl: "",
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
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <h2>Nombre de la obra</h2>
                <input
                    value={newObra.name}
                    name="name"
                    onChange={(e) => { handleForm(e) }}
                />
                <h2>Altura (cm)</h2>
                <input
                    value={newObra.sizeH}
                    name="sizeH"
                    onChange={(e) => { handleForm(e) }}
                />
                <h2>Largo (cm)</h2>
                <input
                    value={newObra.sizeW}
                    name="sizeW"
                    onChange={(e) => { handleForm(e) }}
                />
                <h2>Profundidad (cm)</h2>
                <input
                    value={newObra.sizeP}
                    name="sizeP"
                    onChange={(e) => { handleForm(e) }}
                />
                <h2>Materiales empleados:</h2>
                <input
                    value={newObra.materials}
                    name="materials"
                    onChange={(e) => { handleForm(e) }}
                />
                <h2>Selecciona las fotografías de la obra</h2>
                <input
                    value={newObra.picturesUrl}
                    name="picturesUrl"
                    onChange={(e) => { handleForm(e) }}
                />
                <h2>¿Deseas anexar un video?</h2>
                <input
                    name="videoUrl"
                    value={newObra.videoUrl}
                    onChange={(e) => { handleForm(e) }}
                />
                <h2>¿Sigue disponible?</h2>
                <input
                    value={newObra.availableForSale}
                    name="availableForSale"
                    onChange={(e) => { handleForm(e) }}
                />
                <h2>Precio (MXN)</h2>
                <input
                    name="precio"
                    value={newObra.price}
                    onChange={(e) => { handleForm(e) }}
                />

                <button>
                    ¡Crear obra!
                </button>
            </form>
        </>
    )
}