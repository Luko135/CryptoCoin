import Background from 'components/helpers/Background';
import Navigation from 'components/molecules/Navigation/Navigation';
import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
height: 100vh;
z-index: 1;
background-image: url(${Background}) ;

`;


function Root() {
  return (
    <Wrapper>
      <Background/>
      <Navigation/>
    </Wrapper>
  );
}

export default Root;
