import React, { useState, useContext } from 'react'
import ObrasContext from './../context/Obras/ObrasContext'
import axios from "axios";

/**
 function FileUplouad({ setImage }) {
    const cloudinaryAPi = "https://api.cloudinary.com/v1_1/artempo/image/upload"

    //Nombre de la configuracion (Preset)
    const namePreset = "artempo";
    const onFileChange = async (e) => {
        console.log(e.target.files);

        // Para poder subir archivos a Cloudinary, vamos a necesitar usar un elemento llamado FormData.
        // Form data es una estructura que simula lo que un formulario en modulo 2 enviaba al backend, una estructura como un objeto con llave y valor.

        const data = new FormData();
        //data.append('firstName', 'Sam') // -> <input name="firstName"/>
        // Agregamos la data necesaria para cloudinary (upload_preset = Configuracion en cloudinary y el archivo que vamos a subir)
        data.append("upload_preset", namePreset);
        data.append("file", e.target.files[0]);

        //request a la api para subir el archivo
        const result = await axios.post(cloudinaryAPi, data);
        console.log(result);
        setImage(result.data.secure_url);
    };

    return (
        <>
            <input type="file" onChange={onFileChange} />
        </>
    );
}

export default function Cloudinary() {
    const [image, setImage] = useState(null);
    return (
        <>
            <h1>Subida de archivos con Cloudinary</h1>
            {image && <img src={image} alt="fotograp" />}
            <FileUplouad setImage={setImage} />
        </>
    );
}

 */
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
            <form className="space-y-8 divide-y divide-gray-200" onSubmit={(e) => {
                handleSubmit(e);
            }}
            >
                <div>
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center" >CREA UNA OBRA NUEVA</h3>

                    </div>
                    <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">

                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Nombre de tu obra
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <div className="max-w-lg flex rounded-md shadow-sm border-sm">
                                        <input
                                            input
                                            value={newObra.name}
                                            name="name"
                                            onChange={(e) => {
                                                handleForm(e);
                                            }}
                                            className="flex-1 block w-full max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Precio              </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <div className="max-w-lg flex rounded-md shadow-sm border-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                            $ (MXN)
                                        </span>
                                        <input
                                            value={newObra.price}
                                            name="price"
                                            id="price"
                                            className="flex-1 block w-full max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"
                                            onChange={(e) => {
                                                handleForm(e);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="materials" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Materiales
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <textarea
                                        id="materials"
                                        name="materials"
                                        value={newObra.materials}
                                        rows={2}
                                        onChange={(e) => {
                                            handleForm(e);
                                        }}
                                        className="max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="picturesUrl" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Fotografía de tu obra
                                </label>
                                <input value={newObra.picturesUrl}
                                    name="picturesUrl"
                                    onChange={(e) => {
                                        handleForm(e)
                                    }}
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                />
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-700 hover:text-cerulean focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-turquoise"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">DIMENSIONES (milímetros):</h3>
                        <h4 className="text-lg leading-6 font-medium text-gray-700 text-center">Recuerda solo poner los números (no letras ni caracteres especiales)</h4>
                    </div>
                    <div className="space-y-6 sm:space-y-3">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-2">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                Altura de la obra
                            </label>
                            <div className="flex-3 block w-full max-w-lg shadow-sm block focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"
                            >
                                <input
                                    value={newObra.sizeH}
                                    name="sizeH"
                                    onChange={(e) => {
                                        handleForm(e);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Ancho de la obra
                                </label>
                                <div className="flex-1 block w-full max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"
                                >
                                    <input
                                        value={newObra.sizeW}
                                        name="sizeW"
                                        onChange={(e) => {
                                            handleForm(e);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-6 sm:space-y-5">
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Profundidad de la obra (cm)
                                    </label>
                                    <div className="flex-1 block w-full max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"

                                    >
                                        <input
                                            value={newObra.sizeP}
                                            name="sizeP"
                                            onChange={(e) => {
                                                handleForm(e);
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="pt-5">
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cerulean hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turquoise text-center"
                                >
                                    Crear obra
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}