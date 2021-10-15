import React, { useContext } from 'react'
import ObrasContext from './../context/Obras/ObrasContext'

export default function Pets() {
    const ctxObra = useContext(ObrasContext)

    return (
        <>
            Nuestras obras:
            <hr />
            {
                ctxObra.obras.map(e => e.name)
            }
        </>
    )
}