'use client';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';
import Footer from '../Footer';
import SignUpForm from './SignUpForm';
import singup from '../controllers/users.controller';

const Login = () => {
    async function onSubmit(data) {
        const res = await singup(data);
        console.log(res);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-md m-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>

                <SignUpForm onSubmit={onSubmit} />

                <div className="mt-4 text-center">
                    <p>¿Ya tienes una cuenta?</p>
                    <Link href="/login" className="text-blue-600 hover:underline mt-2 flex items-center justify-center mx-auto">
                        <UserPlus size={18} className="mr-2" />
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
