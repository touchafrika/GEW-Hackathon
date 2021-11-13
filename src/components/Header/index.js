import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/cr38tiv.png';
import TMDBLogo from '../../images/ta.png';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
// Context
import { Context } from '../../context';

const Header = () => {
  const [user] = useContext(Context);
  console.log(user);

  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={RMDBLogo} alt='rmdb-logo' />
        </Link>
        {user ? (
          <span>Logged in as: {user.username}</span>
        ) : (
          <Link to='/login'>
            <span>Log in</span>
          </Link>
        )}
        <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
      </Content>
    </Wrapper>
  );
};

export default Header;
