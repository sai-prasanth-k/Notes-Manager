import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
  outline: none;
  font-size: 18px;
  border-radius: 8px;

  @media screen and (min-width: 769px) {
  padding: 18px;
  font-size: 20px;
  }
`;

export const SearchSelect = styled.select`
  padding: 8px 16px;
  outline: none;
  font-size: 18px;
  border-radius: 8px;

  @media screen and (min-width: 769px) {
  padding: 18px;
  font-size: 20px;
  }
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  outline: none;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  border: 0;
  background-color: #0000ff;
  color: #fff;

  @media screen and (min-width: 769px) {
  padding: 18px;
  font-size: 20px;
  }
`;