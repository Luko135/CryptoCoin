import Background from 'components/helpers/Background';
import React from 'react';
import styled from 'styled-components';
// import background from 'assets/background1.svg'


const Wrapper = styled.div`
height: 100vh;
`;
const Header= styled.header`
  width: 100%;
  height: 70px;
display: flex;
justify-content:space-between ;
align-items:center ;
padding: 0px 20px  ;
`
const Navigation = styled.nav`
height: 100%;
display: flex;
justify-content:space-around ;
align-items:center ;
width: 50% ;
`
const NavigationList = styled.ul`
display: flex ;
flex: 1 ;
justify-content: space-between ;
align-items: center ;
list-style: none ;
`

function Root() {
  return (
    <Wrapper>
      <Background/>
      <Header>
        <img src="#" alt="logo" />
        <Navigation>
          <NavigationList>
            <li>All Coins</li>
            <li>Best & Worst</li>
            <li>NFT</li>
            <li>New Coins</li>
            <button>Register</button>
            <button>LogIn</button>
          </NavigationList>
        </Navigation>
      </Header>
    </Wrapper>
  );
}

export default Root;
