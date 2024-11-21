'use client'

import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import Modal from './Modal';
import {searchBooks} from "../controllers/book.controller"


const InventoryManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [books, setBooks] = useState([])

    const getBooks = async () => {
        const response = await searchBooks()
        
        let books = response.data.libros.data.map(book => {
            return {
                ...book.attributes,
                autors: book.attributes.autors.data.map(author => ({ ...author.attributes, id: author.id })),
                categoria: { ...book.attributes.categoria.data.attributes, id: book.attributes.categoria.data.id },
                editorial: { ...book.attributes.editorial.data.attributes, id: book.attributes.editorial.data.id },
                id: book.id
            }
        })
        setBooks(books)
    };

    useEffect(() => {
        getBooks();
    }, []);
    return (
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <Search style={{ marginRight: '0.5rem' }} />
                Inventario
            </h2>
            <div style={{ marginBottom: '1rem' }}>
                <input type="text" placeholder="Buscar libros..." style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '0.25rem' }} />
            </div>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 text-left">ISBN</th>
                            <th className="p-2 text-left">Título</th>
                            <th className="p-2 text-left">Autor</th>
                            <th className="p-2 text-left">Editorial</th>
                            <th className="p-2 text-left">Idioma</th>
                            <th className="p-2 text-left">Año</th>
                            <th className="p-2 text-left">Categorías</th>
                            <th className="p-2 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.isbn}>
                                <td className="p-2 text-left">{book.isbn}</td>
                                <td className="p-2 text-left">{book.titulo}</td>
                                <td className="p-2 text-left">{`${book.autors[0].nombre} ${book.autors[0].apellido}`}</td>
                                <td className="p-2 text-left">{book.editorial.nombre}</td>
                                <td className="p-2 text-left">{book.idioma}</td>
                                <td className="p-2 text-left">{book.edicion}</td>
                                <td className="p-2 text-left">{book.categoria.nombre}</td>
                                <td className="p-2 text-left">
                                    <button className='text-blue-600 hover:underline mr-2'>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="space-x-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 "
                >
                    Agregar Libro
                </button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                reloadBooks={getBooks}
            />
        </div>
    )
}

export default InventoryManagement