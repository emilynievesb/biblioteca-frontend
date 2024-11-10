import React from 'react';
import { Users } from 'lucide-react';

const UserManagement = () => {

    const data = [
        { name: "Juan Pérez", email: "juan@example.com", role: "Usuario" },
        { name: "Maria Sánchez", email: "maria@example.com", role: "Librario" },
        { name: "Pedro Sánchez", email: "pedro@example.com", role: "Librario" },
    ]

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="mr-2" />
                Gestión de Usuarios
            </h2>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 text-left">Nombre</th>
                        <th className="p-2 text-left">Correo</th>
                        <th className="p-2 text-left">Rol</th>
                        <th className="p-2 text-left">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(user => (
                            <tr key={user.name}>
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2">{user.role}</td>
                                <td className="p-2">
                                    <button className="text-blue-600 hover:underline mr-2">Editar</button>
                                    <button className="text-red-600 hover:underline">Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Agregar Usuario
            </button>
        </div>
    );
};

export default UserManagement;
