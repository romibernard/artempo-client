import React, { useState, useContext } from 'react'
import ObrasContext from './../context/Obras/ObrasContext'

export default function CreateObra() {
    //estado global
    const ctx = useContext(ObrasContext)
    const { addObra } = ctx

    //estado local
    const [newObra, setNewObra] = useState({
        name: "",
        sizeH: "",
        sizeW: "",
        sizeP: "",
        materials: "",
        picturesUrl: "",
        videoUrl: "",
        availableForSale: true,
        price: ""
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
            <main className="mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div className="h-1/2 bg-gray-100"></div>
                        <div>
                            <form onSubmit={(e) => { handleSubmit(e) }} className="space-y-8">
                                <div className="space-y-8">
                                    <div className="pt-8">
                                        <div>
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">¿Deseas crear una nueva obra?</h3>
                                        </div>
                                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                            <div className="sm:col-span-3">
                                                <label for="name" className="block text-sm font-medium text-gray-700">
                                                    Nombre de la obra
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        value={newObra.name}
                                                        name="name"
                                                        onChange={(e) => { handleForm(e) }}
                                                        className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label for="sizeH" className="block text-sm font-medium text-gray-700">
                                                    Altura
                                                </label>
                                                <div className="mt-1">
                                                    <input type="text" name="sizeH" id="sizeH" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                        name="sizeH" placeholder="altura en cm"
                                                        onChange={(e) => { handleForm(e) }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label for="sizeW" className="block text-sm font-medium text-gray-700">
                                                    Ancho
                                                </label>
                                                <div className="mt-1">
                                                    <input type="text" name="sizeW" id="sizeW" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                        name="sizeH" placeholder="ancho en cm"
                                                        onChange={(e) => { handleForm(e) }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label for="sizeP" className="block text-sm font-medium text-gray-700">
                                                    Profundidad
                                                </label>
                                                <div className="mt-1">
                                                    <input type="text" name="sizeH" id="sizeH" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                        name="sizeP" placeholder="profundidad en cm"
                                                        onChange={(e) => { handleForm(e) }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label for="materials" className="block text-sm font-medium text-gray-700">
                                                    Materiales
                                                </label>
                                                <div className="mt-1">
                                                    <input type="text" name="materials" id="materials" className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                        name="sizeH" placeholder="madera, resina, óleo..."
                                                        onChange={(e) => { handleForm(e) }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label for="availableForSale" className="block text-sm font-medium text-gray-700">
                                                    ¿Está disponible todavía?
                                                </label>
                                                <select id="availableForSale" name="availableForSale"
                                                    className="p-1 border border-gray shadow-sm px-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent block w-full pr-6 sm:text-sm border-gray-300"
                                                    onChange={(e) => { handleForm(e) }}
                                                >
                                                    <option>Si</option>
                                                    <option>No</option>
                                                </select>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="picturesUrl" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                    Fotografías
                                                </label>
                                                <div class="mt-1 sm:mt-0 sm:col-span-2">
                                                    <div class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div class="space-y-1 text-center">
                                                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                            <div class="flex text-sm text-gray-600">
                                                                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                    <span>Sube la imagen</span>
                                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" onChange={(e) => { handleForm(e) }} />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label for="price" class="block text-sm font-medium text-gray-700">Precio</label>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <span class="text-gray-500 sm:text-sm">
                                                            $
                                                        </span>
                                                    </div>
                                                    <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="100.00" aria-describedby="price-currency"
                                                        onChange={(e) => { handleForm(e) }} />
                                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                        <span class="text-gray-500 sm:text-sm" id="price">
                                                            MXN
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5">
                                    <div className="flex justify-start">
                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Guardar obra
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}