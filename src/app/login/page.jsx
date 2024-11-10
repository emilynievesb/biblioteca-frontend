'use client';
import { useRouter } from 'next/navigation';
import { UserPlus } from 'lucide-react';
import LoginForm from './LoginForm';
import Footer from '../Footer';

const Login = () => {
    const router = useRouter();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-md m-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
                <LoginForm onSubmit={onSubmit} />
                <div className="mt-4 text-center">
                    <p>¿No tienes una cuenta?</p>
                    <button className="text-blue-600 hover:underline mt-2 flex items-center justify-center mx-auto">
                        <UserPlus size={18} className="mr-2" />
                        Registrarse
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
