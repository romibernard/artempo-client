import React, { useState, useContext } from 'react'
import UsersContext from '../context/Users/UsersContext'

export default function Signup() {
    // GLOBAL
    const ctxUser = useContext(UsersContext)
    const { registerUser } = ctxUser
    // LOCAL
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        role: 1
    })
    const handleChange = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    }
    const submitData = (event) => {
        event.preventDefault()
        registerUser(newUser)
    }
    return (
        <>
            <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <img class="mx-auto h-12 w-auto" src="../../images/logo/a-log.png" alt="Workflow" />
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Crea tu cuenta
                    </h2>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form class="space-y-6" onSubmit={(e) => { submitData(e) }}>
                            <div>
                                <label for="username" class="block text-sm font-medium text-gray-700">
                                    Escribe un usuario
                                </label>
                                <div class="mt-1">
                                    <input
                                        name="username"
                                        type="text"
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">
                                    Correo electrónico
                                </label>
                                <div class="mt-1">
                                    <input
                                        name="email"
                                        type="email"
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <div class="mt-1">
                                    <input
                                        name="password"
                                        type="password"
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={(e) => { handleChange(e) }}
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-turquoise hover:bg-cerulean focus:outline-none focus:ring-2 focus:ring-offset-2 focus:sky">
                                    Crear cuenta
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

/*
            <div class="min-h-screen bg-white flex">
                <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div class="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img class="h-12 w-auto" src="../../images/logo/a-log.png" alt="Artempo" />
                            <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
                                Ingresa a tu cuenta
                            </h2>
                        </div>

                        <div class="mt-8">
                            <div class="mt-6">
                                <form action="#" method="POST" class="space-y-6">
                                    <div>
                                        <label for="email" class="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <div class="mt-1">
                                            <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div class="space-y-1">
                                        <label for="password" class="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div class="mt-1">
                                            <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cerulean hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Iniciar sesión
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden lg:block relative w-0 flex-1">
                    <img class="absolute inset-0 h-full w-full object-cover" src="../../images/logo/sand.jpeg" alt="" />
                </div>
            </div>
*/