import React, { useState } from "react";
import "./search.css";


export const Search = ({ onClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const inputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const buttonClick = () => {
        onClick(searchTerm);
    };

    return (
        <div className="search">
            <input
                type="text"
                value={searchTerm}
                onChange={inputChange}
                className="search__input"
            />
            <button onClick={buttonClick} className="search__button">
                Search
            </button>
        </div>
    );
};