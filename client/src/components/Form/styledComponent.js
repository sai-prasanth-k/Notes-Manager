import styled from 'styled-components';

export const FormCardPage = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  padding: 40px;
  min-height: 400px;
  min-width: 500px;

  @media screen and (min-width: 767px) {
    min-width: 700px;
    min-height: 500px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  align-items: flex-start;
  width: 100%;

  @media screen and (min-width: 767px) {
    gap: 24px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  @media screen and (min-width: 767px) {
    gap: 8px;
  }
`;


export const FormHeading = styled.h2`
  font-size: 24px;

  @media screen and (min-width: 767px) {
    font-size: 34px;
  }
`;

export const FormLabel = styled.label`
  font-size: 18px;

  @media screen and (min-width: 767px) {
    font-size: 24px;
  }

`;

export const FormInput = styled.input`
  font-size: 18px;
  padding: 10px; 8px;
  border-radius: 6px;

  @media screen and (min-width: 767px) {
    font-size: 24px;
    padding: 16px; 10px;
    border-radius: 8px;
  }
`;

export const FormSelect = styled.select`
  font-size: 18px;
  padding: 10px; 8px;
  border-radius: 6px;

  @media screen and (min-width: 767px) {
    font-size: 24px;
    padding: 16px; 10px;
    border-radius: 8px;
  }
`;

export const FormButton = styled.button`
  color: #fff;
  background-color: #0000ff;
  padding: 10px; 20px;
  width: 120px;
  font-size: 16px;
  cursor: pointer;
  border: 0;
  border-radius: 6px;

`;