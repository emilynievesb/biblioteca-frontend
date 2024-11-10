"use client"

import { Book } from 'lucide-react';
import Link from 'next/link';

export default function NavBar({ options }) {
    const pathsOptions = {
        home: {
            label: 'Home',
            path: '/',
        },
        user: {
            label: 'Mi cuenta',
            path: '/user',
        },
        about: {
            label: 'Acerca de',
            path: '/admin',
        },
        contact: {
            label: 'Contáctanos',
            path: '/librarian',
        },
        login: {
            label: 'Iniciar sesión',
            path: '/login',
        },
        logout: {
            label: 'Cerrar sesión',
            path: '/',
        },
        default: {
            label: 'Sin opciones',
            path: '/',
        },
    };

    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Book size={24} />
                    <span className="text-xl font-bold">BiblioTech</span>
                </Link>
                <div className="space-x-4">
                    {options.map((option) => (
                        <Link key={option} href={pathsOptions[option]?.path || pathsOptions['default'].path} className="hover:underline">
                            {pathsOptions[option]?.label || pathsOptions['default'].label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
