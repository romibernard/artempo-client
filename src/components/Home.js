import React, { useContext, useEffect } from 'react'
//import ObrasContext from './../context/Obras/ObrasContext'
//import { Link } from 'react-router-dom'
//import ClipLoader from "react-spinners/ClipLoader";
import UsersContext from '../context/Users/UsersContext';

export default function Home() {
    const ctxUsers = useContext(UsersContext)
    const {
        tokenVerification
    } = ctxUsers

    return (
        <>
            {/*<button onClick={() => { tokenVerification() }}>Verificar token</button>*/}
            <div class="bg-white">
                <div class="relative pb-80 bg-gray-800">
                    <div class="absolute inset-0">
                        <img class="w-full h-full object-cover" src="https://mediaim.expedia.com/localexpert/194755/9870f257-e643-4587-b906-c2c972c4a27a.jpg?impolicy=resizecrop&rw=1005&rh=565" alt="" />
                        <div class="absolute inset-30 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
                    </div>
                    <div class="relative max-w-6xl mx-auto py-4 px-12 sm:py-40 sm:px-6 lg:px-40">
                        <h1 class="text-4xl font-extrabold tracking-tight text-black md:text-10xl lg:text-6xl">Bienvenido a Artempo Studio</h1>
                    </div>
                </div>

                <section class="-mt-80 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-28" aria-labelledby="contact-heading">
                    <h2 class="sr-only" id="contact-heading">Contacto</h2>
                    <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-20">
                        <div class="flex flex-col bg-sky rounded-2xl shadow-xl">
                            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-28">
                                <div class="absolute top-0 p-5 inline-block bg-turquoise rounded-xl shadow-lg transform -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-medium text-gray-900">Nuestras Obras</h3>
                                {/*<p class="mt-4 text-base text-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>*/}
                            </div>
                            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Ver más<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>

                        <div class="flex flex-col bg-sky rounded-2xl shadow-xl">
                            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-28">
                                <div class="absolute top-0 p-5 inline-block bg-turquoise rounded-xl shadow-lg transform -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-medium text-gray-900">Sobre nosotros</h3>
                                {/*<p class="mt-4 text-base text-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>*/}
                            </div>
                            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Ver más<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>

                        <div class="flex flex-col bg-sky rounded-2xl shadow-xl">
                            <div class="flex-1 relative pt-16 px-6 pb-8 md:px-28">
                                <div class="absolute top-0 p-5 inline-block bg-turquoise rounded-xl shadow-lg transform -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-medium text-gray-900">Cotiza tu obra</h3>
                                {/*<p class="mt-4 text-base text-gray-500">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.</p>*/}
                            </div>
                            <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                <a href="#" class="text-base font-medium text-blue-700 hover:text-blue-600">Ver más<span aria-hidden="true"> &rarr;</span></a>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
            <hr />
        </>
    )
}