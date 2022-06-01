import styled from 'styled-components';

export const Section = styled.section`
  width: 450px;
  height: 450px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  border-bottom: 10px solid #8a2be2;
  margin-top: 15px;

  @media (max-width: 430px) {
    width: 300px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  color: #444;
  width: 100%;
  text-align: center;
  height: 30px;
`;

export const ListOfFollowingContainer = styled.h1`
  height: 350px;
  width: 100%;
  padding: 10px;
  overflow-y: scroll;
`;

export const Follower = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 70px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  h2 {
    font-size: 15px;
    width: 50%;
    overflow: hidden;
    color: #444;
  }
  img {
    overflow: hidden;
    border-radius: 50%;
  }
`;
