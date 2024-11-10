import React from 'react';
import { BookOpen } from 'lucide-react';

export default function MyBooks() {

    const data = [
        { title: "El principito", author: "Antoine de Saint-Exupéry", dateStart: "2024-9-30", dateEnd: "2024-10-20", status: "Prestado", cost: "$ 10.500", options: "Extender prestamo" },
        { title: "1984", author: "George Orwell", dateStart: "2023-10-20", dateEnd: "2023-10-30", status: "En mora", cost: "$ 750.000", options: "Extender prestamo" },
    ]

    return (
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2" />
                Mis Libros
            </h2>
            <table className="w-full text-center">
                <thead>
                    <tr className="bg-gray-100 text-center">
                        <th className="p-2">Título</th>
                        <th className="p-2">Autor</th>
                        <th className="p-2">Fecha inicio</th>
                        <th className="p-2">Fecha entrega</th>
                        <th className="p-2">Estado</th>
                        <th className="p-2">Costo</th>
                        <th className="p-2">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(book => (
                        <tr key={book.title}>
                            <td className="p-2">{book.title}</td>
                            <td className="p-2">{book.author}</td>
                            <td className="p-2">{book.dateStart}</td>
                            <td className="p-2">{book.dateEnd}</td>
                            <td className="p-2">{book.status}</td>
                            <td className="p-2">{book.cost}</td>
                            <td className="p-2">
                                <select className="w-full text-center">
                                    <option value=""></option>
                                    <option value="">Extender prestamo</option>
                                    <option value="">Volver a solicitar</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}