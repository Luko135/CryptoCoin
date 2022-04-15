import Coinspages from 'components/organisms/CoinsPages/Coinspages';
import MainPage from 'components/organisms/MainPage/MainPage';
import MainTemplate from 'components/templates/MainTemplate';
import React from 'react';

function Root() {
  return (
    <>
      <MainTemplate>
        {/* <MainPage/> */}
        <Coinspages />
      </MainTemplate>
    </>
  );
}

export default Root;
