import styled from 'styled-components';
export const Wrapper = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const Left = styled.div`
  grid-column: 1/1;
  margin-top: 100px;
`;
export const Right = styled.div`
  grid-column: 2/2;
  margin-top: 100px;
  position: relative;
`;
export const SubTitle = styled.h3`
  padding-left: 15%;
  color: ${({ theme }) => theme.colors.lightPrimary};
  font-size: ${({ theme }) => theme.font.subtitleText};
`;
export const CoinsIMG = styled.img`
  padding: 7% 18%;
`;

export const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  overflow: hidden;
`;
export const Main = styled.div`
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey};
`;
export const CardInfo = styled.div`
  font-weight: bold;
  padding: 10px;
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
  height: 50%;
`;
export const Price = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.price};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  text-align: center;
`;
export const Info = styled.p`
  width: 100%;
  text-align: justify;
`;
export const SpecialInfo = styled.span`
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
`;
export const CryptoIcon = styled.img`
  width: 30%;
`;
