import React from "react";
import { styled } from "styled-components";

const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

function Search() {
  return <SearchInput type="text"></SearchInput>;
}

export default Search;
