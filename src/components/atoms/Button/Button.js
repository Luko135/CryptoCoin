import styled from 'styled-components';
export const Button = styled.button`
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
