import React from 'react';
import styled from 'styled-components';
import Coins from 'assets/coins.svg';

//TODO układ kart
const Wrapper = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Left = styled.div`
  grid-column: 1/1;
  margin-top: 100px;
`;
const Right = styled.div`
  grid-column: 2/2;
  margin-top: 100px;
  position: relative;
`;
const Title = styled.h1`
  margin: 10px 0;
  padding-left: 15%;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.styledTitle};
`;
const SubTitle = styled.h3`
  padding-left: 15%;
  color: ${({ theme }) => theme.colors.lightPrimary};
  font-size: ${({ theme }) => theme.font.subtitleText};
`;
const CoinsIMG = styled.img`
  padding: 7% 18%;
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  overflow: hidden;
`;
const Main = styled.div`
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey};
`;
const CardInfo = styled.div`
  font-weight: bold;
  padding: 10px;
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
  height: 50%;
`;
const Name = styled.p`
  color: ${({ theme, big }) => (big ? theme.colors.white : theme.colors.grey)};
  font-size: ${({ theme, big }) =>
    big ? theme.font.coinName : theme.font.coinInfo};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  width: ${({ big }) => (big ? '70%' : 'unset')};
  padding-left: ${({ big }) => (big ? '30px' : 'unset')};
`;
const Price = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.price};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  text-align: center;
`;
const Info = styled.p`
  width: 100%;
  text-align: justify;
`;
const SpecialInfo = styled.span`
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
`;
const CryptoIcon = styled.img`
  width: 30%;
`;
const MainPage = () => {
  return (
    <Wrapper>
      <Left>
        <Title>Follow the most popular crypto coins. </Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Massa ut massa velit quisque tempor.
        </SubTitle>
        <CoinsIMG src={Coins} alt="coins" />
      </Left>
      <Right>
        <Card>
          <Main>
            <CryptoIcon src="" alt="coin logo" />
            <Name big bold>
              BitCoin
            </Name>
            <Price>676766</Price>
          </Main>
          <CardInfo>
            <Name bold>BTC</Name>
            <Info>Market cap 698.75 billion</Info>
            <p>
              Bitcoin (BTC) live price in Euro (EUR).
              <SpecialInfo>View</SpecialInfo> value statistics, market cap and
              supply.
            </p>
          </CardInfo>
        </Card>
        <Card>
          <Main>
            <CryptoIcon src="" alt="coin logo" />
            <Name big bold>
              BitCoin
            </Name>
            <Price>676766</Price>
          </Main>
          <CardInfo>
            <Name bold>BTC</Name>
            <Info>Market cap 698.75 billion</Info>
            <p>
              Bitcoin (BTC) live price in Euro (EUR).
              <SpecialInfo>View</SpecialInfo> value statistics, market cap and
              supply.
            </p>
          </CardInfo>
        </Card>
        <Card>
          <Main>
            <CryptoIcon src="" alt="coin logo" />
            <Name big bold>
              BitCoin
            </Name>
            <Price>676766</Price>
          </Main>
          <CardInfo>
            <Name bold>BTC</Name>
            <Info>Market cap 698.75 billion</Info>
            <p>
              Bitcoin (BTC) live price in Euro (EUR).
              <SpecialInfo>View</SpecialInfo> value statistics, market cap and
              supply.
            </p>
          </CardInfo>
        </Card>
      </Right>
    </Wrapper>
  );
};

export default MainPage;
