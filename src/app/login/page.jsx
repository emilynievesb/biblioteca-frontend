'use client';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';
import Footer from '../Footer';
import LoginForm from './LoginForm';
import User from "../../entities/user";
import UsersFacade from '../../services/user.facade';

const Login = () => {
    async function onSubmit(data) {
        const user = new User();
        const userFacade = new UsersFacade();

        const {email, password} = data;

        user.setCorreoElectronico(email);
        user.setContrasena(password);
        let query = user.buildQueryLogin();
        console.log(query);

        // let response = await userFacade.registrarUsuario(query);
        // console.log(response);

    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="max-w-md m-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
                <LoginForm onSubmit={onSubmit} />
                <div className="mt-4 text-center">
                    <p>¿No tienes una cuenta?</p>
                    <Link href='/signup' className="text-blue-600 hover:underline mt-2 flex items-center justify-center mx-auto">
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
