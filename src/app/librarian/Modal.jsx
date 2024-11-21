"use client";
import React, { useEffect, useState } from 'react';
import SearchBoardsPage from './SearchBoardsPage';
import Swal from 'sweetalert2';
import { searchAutors } from '../controllers/autors.controller';
import { searchEditoriales } from '../controllers/editoriales.controller';
import { searchCategorias } from '../controllers/categorias.controller';
import { registerBook } from '../controllers/book.controller';

const Modal = ({ isOpen, onClose, reloadBooks }) => {
    if (!isOpen) return null;
    const [newBook, setNewBook] = useState({
        isbn: '',
        titulo: '',
        autor: {},
        editorial: {},
        idioma: '',
        edicion: '',
        categoria: {},
        resumen: ''
    });
    const [autor, setAutor] = useState({});
    const [editorial, setEditorial] = useState({});
    const [categoria, setCategorias] = useState({});

    const [authorList, setAuthorList] = useState([]);
    const [editorialList, setEditorialList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);

    async function getData() {
        const authorsData = await searchAutors();
        const authorsList = authorsData.data.autors.data.map((author, index) => ({
            id: author.id,
            title: `${author.attributes.nombre} ${author.attributes.apellido}`,
            author: `${author.attributes.nombre} ${author.attributes.apellido}`,
        }));
        setAuthorList(authorsList);

        const editorialsData = await searchEditoriales();
        const editorialsList = editorialsData.data.editorials.data.map((editorial, index) => ({
            id: editorial.id,
            title: editorial.attributes.nombre,
            author: editorial.attributes.nacionalidad,
        }));
        setEditorialList(editorialsList);

        const categoriesData = await searchCategorias()
        const categoriesList = categoriesData.data.categorias.data.map((category, index) => ({
            id: category.id,
            title: category.attributes.nombre,
            author: category.attributes.nombre,
        }));

        setCategoriesList(categoriesList);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook((prevBook) => ({
            ...prevBook,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault()

        const isValid = Object.keys(newBook).every(key => {
            const value = newBook[key];
            if (typeof value === 'object' && Object.keys(value).length === 0) {
                Swal.fire({
                    title: 'Error',
                    text: `Debe ingresar un valor en ${key}`,
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
                return false;
            }
    
            if (typeof value === 'string' && value.trim().length === 0) {
                Swal.fire({
                    title: 'Error',
                    text: `Debe ingresar un valor en ${key}`,
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
                return false;
            }
            return true;
        });
        if(!isValid) return;
        //console.log("Datos del libro:", newBook);
        let response = await registerBook({
            ...newBook,
            autors: [Number(newBook.autor.id)],
            editorial: Number(newBook.editorial.id),
            categoria: Number(newBook.categoria.id)
        });
        // console.log(response);
        if(response.errors){
            return Swal.fire({
                title: 'Error en el servidor',
                text: `Error: ${response.errors[0].message}`,
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        }

        Swal.fire({
            title: 'Libro registrado',
            text: `El libro "${response.data.createLibro.data.attributes.titulo}" ha sido registrado exitosamente`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
        }).then(() => {
            reloadBooks();
            onClose();
        });
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setNewBook((prevBook) => ({
            ...prevBook,
            autor,
            editorial,
            categoria
        }));
    }, [autor, editorial, categoria]);

    const properties = [
        { label: 'ISBN', name: 'isbn' },
        { label: 'Título', name: 'titulo' },
        { label: 'Idioma', name: 'idioma' },
        { label: 'Año Edición', name: 'edicion', type: 'number' },
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-11/12 max-w-md">
                <h2 className="mb-4 text-xl font-semibold">Agregar Nuevo Libro</h2>
                <form onSubmit={handleSubmit}>

                    <div className='space-y-2'>
                        {
                            authorList.length > 0 &&
                            <SearchBoardsPage items={authorList} placeholder={'Buscar autor'} newSelected={setAutor} inputLabel="Autor" />
                        }

                        {
                            editorialList.length > 0 &&
                            <SearchBoardsPage items={editorialList} placeholder={'Buscar Editorial'} newSelected={setEditorial} inputLabel="Editorial" />
                        }
                        {
                            categoriesList.length > 0 &&
                            <SearchBoardsPage items={categoriesList} placeholder={'Buscar Categorías'} newSelected={setCategorias} inputLabel="Categorías" />
                        }
                    </div>

                    {properties.map(({ label, name, type = 'text' }) => (
                        <React.Fragment key={name}>
                            <label className="mb-2">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={newBook[name]}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </React.Fragment>
                    ))}

                    <div className="mb-2">
                        <label className="block mb-2">Resumen</label>
                        <textarea
                            name="resumen"
                            value={newBook.resumen}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md min-h-[100px]"
                        />
                    </div>

                    <div className="flex justify-end gap-4 mt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Guardar libro
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
