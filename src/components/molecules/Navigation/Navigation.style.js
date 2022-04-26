import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;
export const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
`;
export const NavigationList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;
export const Link = styled(NavLink)`
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
