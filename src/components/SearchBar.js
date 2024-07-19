import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchInput = styled.input`
  padding: 0.5em;
  width: 300px;
  max-width: 100%;
  border: 1px solid #ff00cc; /* 霓虹粉色边框 */
  background: #1a1a1a; /* 深色背景 */
  color: #fff;
  border-radius: 25px;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #333399; /* 深霓虹色 */
    box-shadow: 0 0 10px #333399;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSearch}>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </form>
    </SearchContainer>
  );
};

export default SearchBar;
