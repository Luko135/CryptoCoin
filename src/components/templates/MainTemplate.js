import React from 'react';
import styled from 'styled-components';
import Background from 'components/helpers/Background';
import Navigation from 'components/molecules/Navigation/Navigation';

const Wrapper = styled.div`
  height: 100vh;
  z-index: 1;
  background-image: url(${Background});
`;
const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Background />
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
