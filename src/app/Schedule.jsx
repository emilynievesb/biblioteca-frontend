import React from 'react';
import { Clock } from 'lucide-react';

export default function Schedule() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2 text-blue-600" />
                Horario
            </h2>
            <p className="text-gray-700">
                Lunes a Viernes: 9:00 AM - 8:00 PM
                <br />
                Sábados: 10:00 AM - 6:00 PM
                <br />
                Domingos: Cerrado
            </p>
        </div>
    );
}
