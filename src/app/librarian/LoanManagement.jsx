'use client';

import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';
import SearchBoardsPage from './SearchBoardsPage';
import { searchBooks } from '@/app/controllers/book.controller';
import { searchUsers } from '../controllers/users.controller';

const LoanManagement = () => {
    const [userList, setUserList] = useState([]);
    const [bookList, setBookList] = useState([]);

    async function fetchData() {
        let booksResponse = await searchBooks();
        let books = booksResponse.data.libros.data.map((book) => {
            return {
                id: book.id,
                title: book.attributes.titulo,
                author: book.attributes.isbn,
            };
        });
        setBookList(books);

        let usersResponse = await searchUsers();
        let users = usersResponse.data.usuarios.data.map((user) => {
            return {
                id: user.id,
                title: user.attributes.nombres,
                author: user.attributes.apellidos,
            };
        });
        setUserList(users);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(userList, book);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2" />
                Gestión de Préstamos y Devoluciones
            </h2>
            <form className="space-y-4">
                {userList.length > 0 && <SearchBoardsPage items={userList} placeholder={'Buscar usuario'} newSelected={setUserList} inputLabel="Usuario" />}
                {bookList.length > 0 && <SearchBoardsPage items={bookList} placeholder={'Buscar libros'} newSelected={setBookList} inputLabel="Libro" />}
                <div className="space-x-4">
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={onSubmit}>
                        Iniciar Préstamo
                    </button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Iniciar Devolución
                    </button>
                </div>
            </form>
        </article>
    );
};

export default LoanManagement;
