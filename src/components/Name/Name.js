import styled from 'styled-components';
export const Name = styled.p`
  color: ${({ theme, big }) => (big ? theme.colors.white : theme.colors.grey)};
  font-size: ${({ theme, big }) =>
    big ? theme.font.coinName : theme.font.coinInfo};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  width: ${({ big }) => (big ? '70%' : 'unset')};
  padding-left: ${({ big }) => (big ? '30px' : 'unset')};
`;
