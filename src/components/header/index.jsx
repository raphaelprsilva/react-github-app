import { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  HeaderInput,
  HeaderInputContainer,
  HeaderSearchButton,
  HeaderSection,
  HeaderTitle,
} from './styles';

import { context } from '../../context';
import client from '../../services/client';

const Header = () => {
  const ctx = useContext(context);
  const [searchedValue, setSearchedValue] = useState('');

  async function getUserData() {
    try {
      const response = await client.get(`${searchedValue}`);
      ctx.setUserData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>Perfil do Github</HeaderTitle>
      <HeaderInputContainer>
        <HeaderInput
          value={searchedValue}
          onChange={(event) => setSearchedValue(event.target.value)}
        />
        <HeaderSearchButton onClick={getUserData}>
          <FiSearch size={15} />
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  );
};

export default Header;
