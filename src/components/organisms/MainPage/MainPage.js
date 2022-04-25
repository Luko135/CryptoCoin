import React from 'react';
import Coins from 'assets/coins.svg';
import { Title } from 'components/atoms/Title/Title';
import { Name } from 'components/atoms/Name/Name';
import {
  Card,
  CardInfo,
  CoinsIMG,
  CryptoIcon,
  Info,
  Left,
  Main,
  Price,
  Right,
  SpecialInfo,
  SubTitle,
  Wrapper,
} from './MainPage.style';

//TODO układ kart
const MainPage = () => {
  return (
    <Wrapper>
      <Left>
        <Title Left>Follow the most popular crypto coins. </Title>
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
