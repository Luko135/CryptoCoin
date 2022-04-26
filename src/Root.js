import Coinspages from 'components/organisms/CoinsPages/Coinspages';
import MainPage from 'components/organisms/MainPage/MainPage';
import MainTemplate from 'components/templates/MainTemplate';
import React from 'react';
import { Route, Routes } from 'react-router';

function Root() {
  return (
    <>
      <MainTemplate>
        <Routes>
          <Route path="/all" element={<Coinspages />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </MainTemplate>
    </>
  );
}

export default Root;
