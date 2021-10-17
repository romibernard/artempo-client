import React, { useContext, useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom' //manda al usuario a un pag nueva
import UsersContext from './../../context/Users/UsersContext'
//...component y todos lo atributos de la ruta
const AuthRoute = ({ component: Component, ...props }) => {
    //funciones usuario
    const usersCtx = useContext(UsersContext)
    const {
        authStatus,
        tokenVerification } = usersCtx
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const verifyUser = async () => {
            await tokenVerification()
            setLoading(false)
        }
        verifyUser()
    }, [authStatus])
    return (
        <Route {...props} render={(props) => {
            if (loading) return null
            return authStatus ?
                (<Component {...props} />)
                :
                (<Redirect to="/iniciar-sesion" />)
        }} />
    )
}

export default AuthRoute