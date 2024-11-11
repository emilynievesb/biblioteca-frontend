'use client';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';
import Swal from 'sweetalert2'
import Footer from '../Footer';
import LoginForm from './LoginForm';
import { login } from '../controllers/users.controller';

const Login = () => {
    async function onSubmit(data) {
        const res = await login(data);
        if (res.err)
            return Swal.fire({
                title: "Error",
                text: res.err,
                icon: "error"
            })
            
        if (res.success) window.location.href = '/librarian'
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-md m-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
                <LoginForm onSubmit={onSubmit} />
                <div className="mt-4 text-center">
                    <p>¿No tienes una cuenta?</p>
                    <Link href="/signup" className="text-blue-600 hover:underline mt-2 flex items-center justify-center mx-auto">
                        <UserPlus size={18} className="mr-2" />
                        Registrarse
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
