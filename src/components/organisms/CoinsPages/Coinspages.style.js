import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 20px;
`;
export const Row = styled.div`
  position: relative;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 90%;
    left: 5%;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const Number = styled.p`
  font-size: 20px;
`;
export const Shourtcut = styled.p`
  font-size: 20px;
`;
export const Icon = styled.img``;
export const Price = styled.p`
  font-size: ${({ theme }) => theme.font.price};
  font-weight: bold;
`;
export const Name = styled.p`
  font-size: ${({ theme }) => theme.font.subtitleText};
  font-weight: bold;
`;
export const Change = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.green};
`;
