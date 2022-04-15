import styled from 'styled-components';
export const Title = styled.h1`
  margin: 10px 0;
  padding-left: ${({ Left }) => (Left ? '15%' : 'unset')};
  color: ${({ theme, Gray }) =>
    Gray ? theme.colors.grey : theme.colors.primary};
  font-size: ${({ theme }) => theme.font.styledTitle};
`;
