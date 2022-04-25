import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import { Change, Icon, Name, Number, Price, Row, Shourtcut, Wrapper } from './Coinspages.style';
const Coinspages = () => {
  return (
    <Wrapper>
      <Title Gray>All cryptocurrency prices </Title>
      <Row>
          <Number>1</Number>
          <Icon src=''/>
          <div>
            <Name>BitCoin</Name>
            <Shourtcut>BTC</Shourtcut>
          </div>
          <Price>3111$</Price>
          <Price>3111$</Price>
          <Change>+24,4%</Change>
       
      </Row>
      <Row>
          <Number>1</Number>
          <Icon src=''/>
          <div>
            <Name>BitCoin</Name>
            <Shourtcut>BTC</Shourtcut>
          </div>
          <Price>3111$</Price>
          <Price>3111$</Price>
          <Change>+24,4%</Change>
       
      </Row>
      <Row>
          <Number>1</Number>
          <Icon src=''/>
          <div>
            <Name>BitCoin</Name>
            <Shourtcut>BTC</Shourtcut>
          </div>
          <Price>3111$</Price>
          <Price>3111$</Price>
          <Change>+24,4%</Change>
       
      </Row>
    </Wrapper>
  );
};

export default Coinspages;
