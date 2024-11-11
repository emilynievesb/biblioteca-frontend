'use client';
import Link from 'next/link';
import { UserPlus } from 'lucide-react';
import Footer from '../Footer';
import SignUpForm from './SignUpForm';
import User from "../../entities/user";
import UsersFacade from '../../services/user.facade';



const Login = () => {

    async function onSubmit(data) {
        const user = new User();
        const userFacade = new UsersFacade();

        const {name, surname, address, phone, email, day, month, year, username, password} = data;
        user.setNombres(name);
        user.setApellidos(surname);
        user.setDireccion(address);
        user.setTelefono(phone);
        user.setCorreoElectronico(email);
        user.setFechaNacimiento(`${day}/${month}/${year}`);
        user.setNomUsuario(username);
        user.setContrasena(password);
        user.setRol("usuario");

        let query = user.buildQueryRegister();
        console.log(query);

        // let response = await userFacade.registrarUsuario(query);
        // console.log(response);
    }

    return(
        <div className="flex flex-col min-h-screen">
            <div className="max-w-md m-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>

                <SignUpForm onSubmit={onSubmit} />

                <div className="mt-4 text-center">
                    <p>¿Ya tienes una cuenta?</p>
                    <Link href='/login' className="text-blue-600 hover:underline mt-2 flex items-center justify-center mx-auto">
                        <UserPlus size={18} className="mr-2" />
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Login;
