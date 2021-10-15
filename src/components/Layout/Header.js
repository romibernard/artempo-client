import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import UsersContext from '../../context/Users/UsersContext'

//import logo from ''
export default function Header() {
    const ctxUser = useContext(UsersContext)
    const { user, authStatus, logoutUser } = ctxUser
    return (
        <>
            <header class="bg-turquoise">
                <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                    <div class="w-full py-6 flex items-center justify-between border-b border-turquoise lg:border-none">
                        <div class="flex items-center">
                            <Link to="/">
                                {/*<span class="sr-only">Artempo Studio</span>*/}
                                <img class="h-14 w-auto" src="../../images/logo/artempo-logo.png" alt="Artempo-logo" />
                            </Link>
                            <div class="hidden ml-10 space-x-8 lg:block">
                                <Link to="/obras" class="text-base font-blig text-white hover:text-sky-700" key="Solutions">
                                    Obras
                                </Link>

                                <Link to="/about-us" class="text-base font-medium text-white hover:text-sky-700" key="Pricing">
                                    ¿Quiénes somos?
                                </Link>

                                <Link to="/cotiza" class="text-base font-medium text-white hover:text-sky-700" key="Docs">
                                    Cotiza tu obra
                                </Link>
                            </div>
                        </div>
                        {
                            authStatus ?
                                <div class="ml-10 space-x-4">
                                    <Link to="/perfil" class="inline-block bg-indigo-blue py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Mi perfil</Link>
                                    <a href="#" onClick={() => { logoutUser() }} class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-turquoise hover:bg-blue-50">Cerrar sesión</a>
                                </div>
                                :
                                <div class="ml-10 space-x-4">
                                    <Link to="/iniciar-sesion" class="inline-block bg-blue py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-60">Iniciar sesión</Link>
                                    <Link to="/crear-cuenta" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-sky-700 hover:bg-sky">Registrarme</Link>
                                </div>
                        }
                    </div>
                    <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                        <Link to="/obras" class="text-base font-medium text-white hover:text-turquoise" key="Solutions">
                            Obras
                        </Link>

                        <Link to="/about-us" class="text-base font-medium text-white hover:text-turquoise" key="Pricing">
                            ¿Quiénes somos?
                        </Link>

                        <Link to="/cotiza" class="text-base font-medium text-white hover:text-turquoise" key="Docs">
                            Cotiza tu obra
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}
