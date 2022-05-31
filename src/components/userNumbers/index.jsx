import { useHistory } from 'react-router-dom';
import { Container, NumberContainer, Subtitle, Title } from './styles';

const UserNumbers = (props) => {
  const history = useHistory();
  const handleClick = (route) => history.push(route);

  return (
    <Container>
      <NumberContainer onClick={() => handleClick('/repos')}>
        <Title>13</Title>
        <Subtitle>Repositórios</Subtitle>
      </NumberContainer>
      <NumberContainer onClick={() => handleClick('/followers')}>
        <Title>13</Title>
        <Subtitle>Seguidores</Subtitle>
      </NumberContainer>
      <NumberContainer onClick={() => handleClick('/following')}>
        <Title>13</Title>
        <Subtitle>Seguindo</Subtitle>
      </NumberContainer>
    </Container>
  );
};

export default UserNumbers;
