import React from 'react';
import { Search } from 'lucide-react';

const InventoryManagement = () => {

    const data = [
        { isbn: "9780307474728", title: "Cien años de soledad", author: "Gabriel García Márquez", publisher: "Editorial Sudamericana", language: "Español", year: "1967", edition: "5", categories: "Drama, Realismo mágico" },
    ]

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Search className="mr-2" />
                Inventario
            </h2>
            <div className="mb-4">
                <input type="text" placeholder="Buscar libros..." className="w-full px-3 py-2 border rounded-md" />
            </div>
            <table className="w-full">
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
                            <td className="p-2">{book.isbn}</td>
                            <td className="p-2">{book.title}</td>
                            <td className="p-2">{book.author}</td>
                            <td className="p-2">{book.publisher}</td>
                            <td className="p-2">{book.language}</td>
                            <td className="p-2">{book.year}</td>
                            <td className="p-2">{book.edition}</td>
                            <td className="p-2">{book.categories}</td>
                            <td className="p-2">
                                <button className="text-blue-600 hover:underline mr-2">Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Agregar Libro
            </button>
        </div>
    );
};

export default InventoryManagement;
