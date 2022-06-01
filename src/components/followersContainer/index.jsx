import { Follower, ListOfFollowersContainer, Section, Title } from './styles';

const FollowersContainer = (props) => {
  return (
    <Section>
      <Title>Seguidores de {props.name?.split(' ')[0]} </Title>
      <ListOfFollowersContainer>
        {(props?.followers).map((follower) => (
          <Follower
            onClick={() => window.localtion.href(follower?.html_url)}
            key={follower?.id}
          >
            <img src={follower?.avatar_url} alt={`user-${follower?.login}`} />
            <h2>{follower?.login}</h2>
          </Follower>
        ))}
      </ListOfFollowersContainer>
    </Section>
  );
};

export default FollowersContainer;
