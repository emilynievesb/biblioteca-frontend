import React from 'react';
import { Users } from 'lucide-react';

export default function Services() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="mr-2 text-blue-600" />
                Servicios
            </h2>
            <ul className="list-disc list-inside text-gray-700">
                <li>Préstamo de libros</li>
                <li>Acceso a computadoras e internet</li>
                <li>Salas de estudio</li>
                <li>Eventos literarios y culturales</li>
                <li>Programas de lectura para niños</li>
            </ul>
        </div>
    );
}
