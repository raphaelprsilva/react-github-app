import { useContext } from 'react';
import { context } from '../context/index';

import Container from '../components/container';
import ReposContainer from '../components/reposContainer';

const Repos = (props) => {
  const ctx = useContext(context);

  return (
    <Container>
      <ReposContainer name={ctx.userData?.name} repos={ctx.userRepos} />
    </Container>
  );
};

export default Repos;
