import { ContextProvider } from './context';
import { GlobalStyle } from './global/GlobalStyle';
import Routes from './Routes';

const App = () => (
  <ContextProvider>
    <GlobalStyle />
    <Routes />
  </ContextProvider>
);

export default App;
