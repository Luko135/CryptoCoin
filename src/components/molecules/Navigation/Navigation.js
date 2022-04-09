import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;
const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`;
const NavigationList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;
const Link = styled.li`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.navLink};
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    bottom: 0;
    transform: translateX(-100%);
    transition: 0.4s ease-in-out;
  }
  &:hover {
    &::before {
      transform: translateX(0);
      transition: 0.6s ease-in-out;
    }
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.navButton};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, isSecondary }) =>
    isSecondary ? theme.colors.secondary : theme.colors.primary};
  &:hover {
    background-color: ${({ theme, isSecondary }) =>
      isSecondary ? theme.colors.lightSecondary : theme.colors.lightPrimary};
    transition: 0.5s ease-in-out;
  }
`;
const Navigation = () => {
  return (
    <Header>
      <img src="#" alt="logo" />
      <Nav>
        <NavigationList>
          <Link>All Coins</Link>
          <Link>Best & Worst</Link>
          <Link>NFT</Link>
          <Link>New Coins</Link>
          <Button>Register</Button>
          <Button isSecondary>LogIn</Button>
        </NavigationList>
      </Nav>
    </Header>
  );
};

export default Navigation;
