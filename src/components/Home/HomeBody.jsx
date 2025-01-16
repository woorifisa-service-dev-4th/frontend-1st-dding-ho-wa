import React from 'react';
import LeftBody from './LeftBody.jsx';
import CenterBody from './CenterBody.jsx';
import RightBody from './RightBody.jsx';

const HomeBody = ({openModal}) => {
  return (
    <>
      <LeftBody />
      <CenterBody openModal={openModal} />
      <RightBody />
    </>

  )
    ;
};

export default HomeBody;
