"use client"

import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import SearchBoardsPage from './SearchBoardsPage';

const LoanManagement = () => {

    const [user, setUser] = useState('');
    const [book, setBook] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(user, book);
    };

    const usersList = [
        { id: 1, title: 'Autor A', author: 'Juan Pérez' },
        { id: 2, title: 'Autor B', author: 'María López' },
        { id: 3, title: 'Autor C', author: 'María López' },
        { id: 4, title: 'Autor D', author: 'María López' },
    ]

    const bookList = [
        { id: 1, title: 'Libro A', author: 'Juan Pérez' },
        { id: 2, title: 'Libro B', author: 'Juan Pérez' },
        { id: 3, title: 'Libro C', author: 'Juan Pérez' },
        { id: 4, title: 'Libro D', author: 'Juan Pérez' },
    ]

    return (
        <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2" />
                Gestión de Préstamos y Devoluciones
            </h2>
            <form className="space-y-4">
                <SearchBoardsPage items={usersList} placeholder={'Buscar usuario'} newSelected={setUser} inputLabel="Usuario"/>
                <SearchBoardsPage items={bookList} placeholder={'Buscar libros'} newSelected={setBook} inputLabel="Libro"/>
                <div className="space-x-4">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={onSubmit}
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
