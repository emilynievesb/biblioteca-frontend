'use client';

import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import SearchBoardsPage from './SearchBoardsPage';
import { searchBooks } from '@/app/controllers/book.controller';
import { searchUsers } from '../controllers/users.controller';
import { registerPrestamo } from '../controllers/prestamo.controller';

const LoanManagement = () => {
    const [userList, setUserList] = useState([]);
    const [bookList, setBookList] = useState([]);

    const [user, setUser] = useState('');
    const [book, setBook] = useState('');
    const [fechaPacDev, setFechaPacDev] = useState();
    const [valorPactadoDia, setValorPactadoDia] = useState(0);

    async function fetchData() {
        let booksResponse = await searchBooks();
        let books = booksResponse.data.libros.data.map((book) => {
            return {
                id: book.id,
                title: book.attributes.titulo,
                author: book.attributes.isbn,
            };
        });
        setBookList(books);

        let usersResponse = await searchUsers();
        let users = usersResponse.data.usuarios.data.map((user) => {
            return {
                id: user.id,
                title: user.attributes.nombres,
                author: user.attributes.apellidos,
            };
        });
        setUserList(users);
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        const newPrestamoData = {
            id_libro: Number(book.id),
            id_usuario: Number(user.id),
            fecha_pac_dev: fechaPacDev.toISOString(),
            valor_pactado_dia: Number(valorPactadoDia)
        }
        let response = await registerPrestamo(newPrestamoData)

        if (!response.data.createPrestamo){
            Swal.fire({
                title: 'Error',
                text: 'No se pudo registrar el prestamo',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }
        Swal.fire({
            title: 'Registro exitoso',
            text: 'El prestamo se ha registrado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
        });
        
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2" />
                Gestión de Préstamos y Devoluciones
            </h2>
            <form className="space-y-4 ">
                <div className='grid grid-cols-2 gap-4'>
                    {userList.length > 0 && <SearchBoardsPage items={userList} placeholder={'Buscar usuario'} newSelected={setUser} inputLabel="Usuario" />}
                    {bookList.length > 0 && <SearchBoardsPage items={bookList} placeholder={'Buscar libros'} newSelected={setBook} inputLabel="Libro" />}
                    <div className='w-full'>
                        <label htmlFor="fecha devolucion" className="block mb-1">Fecha pactada devolucion</label>
                        <DatePicker
                            selected={fechaPacDev}
                            onChange={(date) => setFechaPacDev(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Selecciona una fecha"
                            className='w-full p-2 border border-gray-300 rounded-md'
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="fecha devolucion" className="block mb-1">Valor pactado diario</label>
                        <input type="number" name="valor pactado diario" value={valorPactadoDia} onChange={(e)=>{setValorPactadoDia(e.target.value)}} className="w-full p-2 border border-gray-300 rounded-md" min="0" />
                    </div>
                </div>
                <div className="space-x-4">
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={onSubmit}>
                        Iniciar Préstamo
                    </button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Iniciar Devolución
                    </button>
                </div>
            </form>
        </article>
    );
};

export default LoanManagement;
