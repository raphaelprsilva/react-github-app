import { Follower, ListOfFollowingContainer, Section, Title } from './styles';

const FollowingContainer = (props) => {
  return (
    <Section>
      <Title>Seguidores de {props.name?.split(' ')[0]} </Title>
      <ListOfFollowingContainer>
        {(props?.following).map((follower) => (
          <Follower
            onClick={() => window.localtion.href(follower?.html_url)}
            key={follower?.id}
          >
            <img src={follower?.avatar_url} alt={`user-${follower?.login}`} />
            <h2>{follower?.login}</h2>
          </Follower>
        ))}
      </ListOfFollowingContainer>
    </Section>
  );
};

export default FollowingContainer;
