import styled from 'styled-components';

export const HomePage = styled.div`
  padding: 10px 50px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const IntroContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 40px;
  margin: 50px;
  justify-self: center;
  border: 1px solid #000;
  text-align: center;
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

export const SummaryItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  gap: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
`;

export const MainContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;