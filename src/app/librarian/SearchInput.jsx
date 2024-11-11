import React, { useState } from 'react';
import SearchResultItem from './SearchResultItem';

const SearchInput = ({ onSearch, results, placeholder = 'Buscar' , newSelected}) => {
    const [query, setQuery] = useState('');
    const [inputValue, setInputValue] = useState(query);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
        setInputValue(value);
        setIsOpen(true)
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {results.length > 0 && isOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    {results.map((board) => (
                        <SearchResultItem key={board.id} board={board} newSelected={newSelected} setInputValue={setInputValue} setIsOpen={setIsOpen} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchInput;