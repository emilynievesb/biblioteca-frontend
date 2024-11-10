import React from 'react';
import { FileText } from 'lucide-react';

const ReportsSection = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="mr-2" />
                Informes
            </h2>
            <div className="space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Generar Informe de Préstamos
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Generar Informe de Devoluciones
                </button>
            </div>
        </div>
    );
};

export default ReportsSection;
