'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import Modal from './Modal';


const InventoryManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const data = [
        { isbn: "9780307474728", title: "Cien años de soledad", author: "Gabriel García Márquez", publisher: "Editorial Sudamericana", language: "Español", year: "1967", edition: "5", categories: "Drama, Realismo mágico" },
    ]

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
                            <th className="p-2 text-left">Edición</th>
                            <th className="p-2 text-left">Categorías</th>
                            <th className="p-2 text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(book => (
                            <tr key={book.isbn}>
                                <td className="p-2 text-left">{book.isbn}</td>
                                <td className="p-2 text-left">{book.title}</td>
                                <td className="p-2 text-left">{book.author}</td>
                                <td className="p-2 text-left">{book.publisher}</td>
                                <td className="p-2 text-left">{book.language}</td>
                                <td className="p-2 text-left">{book.year}</td>
                                <td className="p-2 text-left">{book.edition}</td>
                                <td className="p-2 text-left">{book.categories}</td>
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
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Iniciar Devolución
                </button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default InventoryManagement