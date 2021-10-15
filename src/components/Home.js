import React, { useContext, useEffect } from 'react'
import ObrasContext from './../context/Obras/ObrasContext'
//import { Link } from 'react-router-dom'
//import ClipLoader from "react-spinners/ClipLoader";
import UsersContext from '../context/Users/UsersContext';

export default function Home() {
    //Edo. global
    const ctxPets = useContext(ObrasContext)
    const {
        obras,
        getAllObras
    } = ctxPets

    const ctxUsers = useContext(UsersContext)

    const {
        tokenVerification
    } = ctxUsers

    useEffect(() => {
        getAllObras()
    }, [])
    return (
        <>
            <h1>pls funciona</h1>
        </>
    )
}