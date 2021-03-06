import React from 'react'
import './27.1 search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <input className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)