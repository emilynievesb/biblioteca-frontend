import React from 'react';
import { ArrowRightCircle } from 'lucide-react';

const SearchResultItem = ({ board, newSelected, setInputValue, setIsOpen }) => {

    const handleGoToBoard = () => {
        newSelected(board);
        setInputValue(board.title)
        setIsOpen(false)
    };

    return (
        <div className="flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer" onClick={handleGoToBoard}>
            <div>
                <h3 className="text-lg font-medium">{board.title}</h3>
                <p className="text-sm text-gray-500">Autor: {board.author}</p>
            </div>
            <ArrowRightCircle className="w-5 h-5 text-gray-500 hover:text-blue-500" />
        </div>
    );
};

export default SearchResultItem;