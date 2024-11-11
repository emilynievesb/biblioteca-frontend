"use client"
import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit, newBook, handleInputChange }) => {
    if (!isOpen) return null;

    const properties = ['ISBN', 'Título', 'Autor', 'Editorial', 'Idioma', 'Año Edición', 'Categorías']

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-11/12 max-w-md">
                <h2 className="mb-4 text-xl font-semibold">
                    Agregar Nuevo Libro
                </h2>
                <form onSubmit={onSubmit}>
                    {properties.map((label) => (
                        <div key={label} className="mb-4">
                            <label className="block mb-2 font-medium">{label}</label>
                            <input
                                type={label === 'Año Edición' ? 'number' : 'text'}
                                name={label.toLowerCase().replace(' ', '')}
                                value={newBook[label]}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    ))}
                    <div className="mb-4">
                        <label className="block mb-2 font-medium">Resumen</label>
                        <textarea
                            name="summary"
                            value={newBook.summary}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-md min-h-[100px]"
                        />
                    </div>
                    <div className="flex justify-end gap-4">
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
