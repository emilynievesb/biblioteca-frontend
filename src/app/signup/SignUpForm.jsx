'use client';
import { useForm } from 'react-hook-form';
import { LogIn } from 'lucide-react';
import FormInput from './FormInput';

export default function SignUpForm({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormInput
                label="Nombres"
                id="name"
                type="text"
                register={register('name', { required: 'Los nombres son requeridos' })}
                error={errors.name}
            />

            <FormInput
                label="Apellidos"
                id="surname"
                type="text"
                register={register('surname', { required: 'Los apellidos son requeridos' })}
                error={errors.surname}
            />

            <FormInput
                label="Direccion"
                id="address"
                type="text"
                register={register('address', { required: 'la direccion es requerida' })}
                error={errors.address}
            />

            <FormInput
                label="Telefono"
                id="phone"
                type="number"
                register={register('phone', { required: 'la direccion es requerida' })}
                error={errors.phone}
            />

            <FormInput
                label="Correo electrónico"
                id="email"
                type="email"
                register={register('email', { required: 'El correo electrónico es requerido' })}
                error={errors.email}
            />

            <div className='grid grid-cols-3 gap-4'>
                <FormInput
                    label="Dia"
                    id="day"
                    type="number"
                    register={register('day', {
                        required: 'El dia de nacimiento es requerido',
                        max: { value: 31, message: 'El día no puede ser mayor a 31' }
                    })}
                    error={errors.day}
                />
                <FormInput
                    label="Mes"
                    id="month"
                    type="number"
                    register={register('month', { 
                        required: 'El mes de nacimiento es requerido',
                        max: { value: 12, message: 'El día no puede ser mayor a 31' }
                    })}
                    error={errors.month}
                />
                <FormInput
                    label="Año"
                    id="year"
                    type="number"
                    register={register('year', { 
                        required: 'El año de nacimiento es requerido',
                        max: { value: 2024, message: 'El día no puede ser mayor a 31' }
                     })}
                    error={errors.year}
                />
            </div>

            <FormInput
                label="Nombre de usuario"
                id="username"
                type="text"
                register={register('username', { required: 'El nombre de usuario es requerido' })}
                error={errors.username}
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
                Crear una cuenta
            </button>
        </form>
    );
}
