'use client';
import { useForm } from 'react-hook-form';
import { LogIn } from 'lucide-react';
import FormInput from './FormInput';

export default function LoginForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
                label="Correo Electrónico"
                id="email"
                type="email"
                register={register('email', { required: 'El correo electrónico es requerido' })}
                error={errors.email}
            />
            <FormInput
                label="Contraseña"
                id="password"
                type="password"
                register={register('password', { required: 'La contraseña es requerida' })}
                error={errors.password}
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center">
                <LogIn size={18} className="mr-2" />
                Iniciar Sesión
            </button>
        </form>
    );
}
