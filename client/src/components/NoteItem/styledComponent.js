import styled from 'styled-components';

export const NoteItemDisplay = styled.div`
 display: flex;
 flex-direction: column;
 padding: 10px 20px;
 min-width: 320px;
 border: 1px solid #000;
 border-radius: 10px;

 @media screen and (min-width: 767px) {
    min-width: 440px;
 }
`;

export const NoteHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;

  @media screen and (min-width: 767px) {
   font-size: 38px;
  }
`;

export const NoteDescription = styled.p`
 font-size: 18px;


 @media screen and (min-width: 767px) {
   font-size: 22px;
  }
`;

export const NoteButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const NoteButton = styled.button`
 width: 100px;
 padding: 10px;
 color: #fff;
 background-color: #4CAF50;
 border: 0;
 border-radius: 5px;
 cursor: pointer;
`;

export const NoteItemEdit = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px 20px;
`;

export const EditInput = styled.input`
  font-size: 18px;
  padding: 10px; 8px;
  border-radius: 6px;

  @media screen and (min-width: 767px) {
    font-size: 24px;
    padding: 16px; 10px;
    border-radius: 8px;
  }
`;


export const EditText = styled.textarea`
  font-size: 18px;
  padding: 10px; 8px;
  border-radius: 6px;

  @media screen and (min-width: 767px) {
    font-size: 24px;
    padding: 16px; 10px;
    border-radius: 8px;
  }
`;

export const EditSelect = styled.select`
  font-size: 18px;
  padding: 10px; 8px;
  border-radius: 6px;

  @media screen and (min-width: 767px) {
    font-size: 24px;
    padding: 16px; 10px;
    border-radius: 8px;
  }
`;

export const EditButton = styled.button`
 width: 100px;
 padding: 10px;
 color: #fff;
 background-color: #4CAF50;
 border: 0;
 border-radius: 5px;
 cursor: pointer;

`;

export const EditButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;