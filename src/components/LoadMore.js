import React from 'react';
import styled from 'styled-components';

const LoadMoreButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 0.5em 1em;
  margin: 2em auto;
  display: block;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const LoadMore = ({ onLoadMore }) => {
  return (
    <LoadMoreButton onClick={onLoadMore}>
      Load More
    </LoadMoreButton>
  );
};

export default LoadMore;
