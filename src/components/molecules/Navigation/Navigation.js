import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { Header, Link, Nav, NavigationList } from './Navigation.style';

const Navigation = () => {
  return (
    <Header>
      <img src="#" alt="logo" />
      <Nav>
        <NavigationList>
          <Link to="/all">All Coins</Link>
          <Link to="/">Best & Worst</Link>
          <Link to="/">NFT</Link>
          <Link to="/">New Coins</Link>
          <Button>Register</Button>
          <Button isSecondary>LogIn</Button>
        </NavigationList>
      </Nav>
    </Header>
  );
};

export default Navigation;
