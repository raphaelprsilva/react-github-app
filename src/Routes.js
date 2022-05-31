import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
