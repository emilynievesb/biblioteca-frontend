import React from 'react';
import { Book } from 'lucide-react';

export default function Collection() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Book className="mr-2 text-blue-600" />
                Colección
            </h2>
            <p className="text-gray-700">
                Contamos con más de 50,000 libros en diversos formatos, incluyendo libros impresos, e-books y audiolibros. Nuestra colección abarca una amplia
                gama de géneros y temas.
            </p>
        </div>
    );
}
