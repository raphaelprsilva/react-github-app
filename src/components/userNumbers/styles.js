import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NumberContainer = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.03);
    transition: 0.4s ease;
    border-radius: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin: 0;
  color: #444;
`;

export const Subtitle = styled.h2`
  font-size: 12px;
  text-align: center;
  color: #777;
`;
