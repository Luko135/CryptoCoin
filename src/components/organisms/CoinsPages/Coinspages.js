import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
display: flex ;
flex-direction:column ;
justify-content:center ;
align-items: center ;
padding: 70px 20px;
`;
const Row = styled.div`
position:relative ;
width:35% ;
display: flex ;
align-items: center;
justify-content: space-between;
&::after{
content:'' ;
position: absolute ;
height: 1px ;
width:90% ;
left: 5% ;
bottom: 0 ;
background-color: ${({theme})=>theme.colors.lightGrey};
}
`

const Number = styled.p`
    font-size: 20px ;
    `
const Shourtcut= styled.p`
    font-size: 20px;
    `
const Icon = styled.img`
    
    `
const Price = styled.p`
       font-size: ${({theme})=>theme.font.price}; 
       font-weight: bold ;
       `
const Name = styled.p`
 font-size: ${({theme})=>theme.font.subtitleText};
 font-weight: bold ;
    
`
const Change = styled.p`
font-size: 18px ;
    color: ${({theme})=>theme.colors.green};
`
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
