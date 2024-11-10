"use client"

import React from 'react';
import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function BookSearch() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const genres = [
        { value: "", label: "Todos los géneros" },
        { value: "fiction", label: "Ficción" },
        { value: "drama", label: "Drama" },
        { value: "science", label: "Ciencia" },
        { value: "fantasy", label: "Fantasía" },
    ]
    
    const onSubmit = (data) => {
        console.log("Datos de búsqueda:", data);
    };


    return (
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Search className="mr-2" />
                Búsqueda de Libros
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Buscar por título, autor, género o ISBN"
                        className="w-full px-3 py-2 border rounded-md"
                        {...register("busqueda", { required: "Este campo es obligatorio" })}
                    />
                    {errors.busqueda && <p className="text-red-500">{errors.busqueda.message}</p>}
                </div>
                <div className="flex space-x-4">
                    <select
                        className="px-3 py-2 border rounded-md"
                        {...register("genero")}
                    >
                        {genres.map(genre => (
                            <option key={genre.value} value={genre.value}>{genre.label}</option>
                        ))}
                    </select>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Buscar
                    </button>
                </div>
            </form>
        </section>
    );
}
