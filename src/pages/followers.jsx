import { useContext } from 'react';
import { context } from '../context/index';

import Container from '../components/container';
import FollowersContainer from '../components/followersContainer';

const Followers = (props) => {
  const ctx = useContext(context);

  return (
    <Container>
      <FollowersContainer
        name={ctx.userData?.name}
        followers={ctx.userFollowers}
      />
    </Container>
  );
};

export default Followers;
