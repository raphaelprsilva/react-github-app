import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserDetails from '../components/userDetails';
import UserPicture from '../components/userPicture';

export default function Home() {
  return (
    <Container>
      <Header />
      <UserContainer>
        <UserPicture url="https://avatars.githubusercontent.com/u/50886915?v=4" alternativeText="image" />
        <UserDetails name="Raphael" login="raphaelprsilva" bio="Um texto qualquer" />
      </UserContainer>
    </Container>
  )
}