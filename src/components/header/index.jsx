import { FiSearch } from 'react-icons/fi';
import { HeaderInput, HeaderInputContainer, HeaderSearchButton, HeaderSection, HeaderTitle } from './styles';

const Header = () => (
  <HeaderSection>
    <HeaderTitle>Perfil do Github</HeaderTitle>
    <HeaderInputContainer>
      <HeaderInput />
      <HeaderSearchButton>
        <FiSearch size={15} />
      </HeaderSearchButton>
    </HeaderInputContainer>
  </HeaderSection>
);

export default Header;
