import React from 'react';
import styled from 'styled-components';

import bottom from 'assets/bottom1.svg';
import left from 'assets/left1.svg';
import top from 'assets/top1.svg';
import right from 'assets/right1.svg';
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;
const Top = styled.img`
  position: absolute;
  left: 548px;
`;
const Left = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;
const Right = styled.img`
  position: absolute;
  right: 0;
  top: 100px;
`;
const Bottom = styled.img`
  position: absolute;
  bottom: 0px;
  left: 763px;
`;

const Background = () => {
  return (
    <Wrapper>
      <Top src={top} alt="" />
      <Left src={left} alt="" />
      <Right src={right} alt="" />
      <Bottom src={bottom} alt="" />
    </Wrapper>
  );
};

export default Background;
