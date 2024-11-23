import React, { useState } from 'react'
import { SearchBarContainer, SearchButton, SearchInput, SearchSelect } from './styledComponent';

const SearchBar = ({setQuery}) => {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    const handleSearch = () => {
        setQuery({
            title: searchTitle || "",
            category: searchCategory || "",
        })
    };

  return (
    <SearchBarContainer>
        <SearchInput 
            type="text" 
            placeholder="Search by title"
            value={searchTitle} 
            onChange={(e) => setSearchTitle(e.target.value)} 
        />
        <SearchSelect
            value = {searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
        >
            <option value="">All Categories</option>
            <option value="WORK">Work</option>
            <option value="PERSONAL">Personal</option>
            <option value="OTHERS">Others</option>
        </SearchSelect>
        <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarContainer>
  )
}

export default SearchBar