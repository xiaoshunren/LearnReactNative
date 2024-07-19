import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

const PageButton = styled.button`
  background: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
  padding: 0.5em 1em;
  margin: 0 0.5em;
  cursor: pointer;
  &:hover {
    background: #333;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
