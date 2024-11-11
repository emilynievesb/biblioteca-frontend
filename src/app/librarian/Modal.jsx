"use client";
import React, { useEffect, useState } from 'react';
import SearchBoardsPage from './SearchBoardsPage';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [newBook, setNewBook] = useState({
        isbn: '',
        title: '',
        author: '',
        publisher: '',
        language: '',
        year: '',
        categories: '',
        summary: ''
    });
    const [author, setAuthor] = useState('');
    const [editorial, setEditorial] = useState('');
    const [categories, setCategories] = useState('');

    const properties = [
        { label: 'ISBN', name: 'isbn' },
        { label: 'Título', name: 'title' },
        { label: 'Idioma', name: 'language' },
        { label: 'Año Edición', name: 'year', type: 'number' },
    ];

    const testList = [
        { id: 1, title: 'Autor A', author: 'Juan Pérez' },
        { id: 2, title: 'Autor B', author: 'María López' },
        { id: 3, title: 'Autor C', author: 'María López' },
        { id: 4, title: 'Autor D', author: 'María López' },
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook((prevBook) => ({
            ...prevBook,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del libro:", newBook);
        onClose();
    };

    useEffect(() => {
        setNewBook((prevBook) => ({
            ...prevBook,
            author,
            publisher: editorial,
            categories
        }));
    }, [author, editorial, categories]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-11/12 max-w-md">
                <h2 className="mb-4 text-xl font-semibold">Agregar Nuevo Libro</h2>
                <form onSubmit={handleSubmit}>
                    {properties.map(({ label, name, type = 'text' }) => (
                        <div key={name} className="mb-2">
                            <label className="mb-2">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={newBook[name]}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    ))}

                    <div className="mb-2">
                        <label className="block mb-2">Resumen</label>
                        <textarea
                            name="summary"
                            value={newBook.summary}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md min-h-[70px]"
                        />
                    </div>

                    <div className='space-y-2'>
                        <SearchBoardsPage items={testList} placeholder={'Buscar autor'} newSelected={setAuthor} inputLabel="Autor" />
                        <SearchBoardsPage items={testList} placeholder={'Buscar Editorial'} newSelected={setEditorial} inputLabel="Editorial" />
                        <SearchBoardsPage items={testList} placeholder={'Buscar Categorías'} newSelected={setCategories} inputLabel="Categorías" />
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
