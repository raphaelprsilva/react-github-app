import { useContext } from 'react';
import { context } from '../context/index';

import Container from '../components/container';
import FollowingContainer from '../components/followingContainer';

const Following = (props) => {
  const ctx = useContext(context);

  return (
    <Container>
      <FollowingContainer
        name={ctx.userData?.name}
        following={ctx.userFollowing}
      />
    </Container>
  );
};

export default Following;
