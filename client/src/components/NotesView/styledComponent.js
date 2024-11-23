import styled from "styled-components";

export const NotesViewContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;


 @media screen and (min-width: 767px) {
   gap: 30px;
 }
`;

export const NoteListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;

  @media screen and (min-width: 767px) {
   flex-direction: row;
   flex-wrap: wrap;
   gap: 40px;
 }
`;