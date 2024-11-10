'use client';
import { useRouter } from 'next/navigation';
import LoginForm from './LoginForm';
import RegisterPrompt from './RegisterPrompt';

const Login = () => {
    const router = useRouter();

    const onSubmit = (data) => {
        if (data.email === 'user@example.com') {
            router.push('/user');
        } else if (data.email === 'admin@example.com') {
            router.push('/admin');
        } else if (data.email === 'librarian@example.com') {
            router.push('/librarian');
        } else {
            alert('Usuario no encontrado');
        }
    };

    return (
        <div className="max-w-md m-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
            <LoginForm onSubmit={onSubmit} />
            <RegisterPrompt />
        </div>
    );
};

export default Login;
