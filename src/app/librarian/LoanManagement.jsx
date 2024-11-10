"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { BookOpen } from 'lucide-react';

const LoanManagement = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2" />
                Gestión de Préstamos y Devoluciones
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="user" className="block mb-1">Usuario</label>
                    <input
                        type="text"
                        id="user"
                        {...register('user', { required: 'El usuario es obligatorio' })}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    {errors.user && <p className="text-red-500 text-sm">{errors.user.message}</p>}
                </div>
                <div>
                    <label htmlFor="book" className="block mb-1">Libro</label>
                    <input
                        type="text"
                        id="book"
                        {...register('book', { required: 'El libro es obligatorio' })}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                    {errors.book && <p className="text-red-500 text-sm">{errors.book.message}</p>}
                </div>
                <div className="space-x-4">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Iniciar Préstamo
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Iniciar Devolución
                    </button>
                </div>
            </form>
        </article>
    );
};

export default LoanManagement;
