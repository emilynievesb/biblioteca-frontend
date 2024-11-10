import React from 'react';
import { Map } from 'lucide-react';

export default function Location() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Map className="mr-2 text-blue-600" />
                Ubicación
            </h2>
            <p className="text-gray-700">
                Calle Principal 123
                <br />
                Ciudad Ejemplo, CP 12345
                <br />
                Tel: (123) 456-7890
                <br />
                Email: info@bibliotech.com
            </p>
        </div>
    );
}
