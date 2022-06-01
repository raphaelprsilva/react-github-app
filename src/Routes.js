import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Followers from './pages/followers';
import Following from './pages/following';
import Home from './pages/home';
import Repos from './pages/repos';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/repos" component={Repos} />
        <Route path="/followers" component={Followers} />
        <Route path="/following" component={Following} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
