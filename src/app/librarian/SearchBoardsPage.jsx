'use client';
import React, { useState } from 'react';
import SearchInput from './SearchInput';

const SearchBoardsPage = ({items, placeholder, newSelected, inputLabel}) => {
    const [boards] = useState(items);
    const [filteredBoards, setFilteredBoards] = useState([]);

    const handleSearch = (query) => {
        if (!query) {
            setFilteredBoards([])
            return
        }
        const results = boards.filter((board) => board.title.toLowerCase().includes(query.toLowerCase()))
        setFilteredBoards(results)
    }

    return (
        <div>
            <label htmlFor="book" className="block mb-1">{inputLabel}</label>
            <SearchInput onSearch={handleSearch} results={filteredBoards} placeholder={placeholder} newSelected={newSelected} />
        </div>
    )
};

export default SearchBoardsPage;