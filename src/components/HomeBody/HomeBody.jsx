import React from 'react';
import LeftBody from '../LeftBody/LeftBody.jsx';
import CenterBody from '../CenterBody/CenterBody.jsx';
import RightBody from '../RightBody/RightBody.jsx';

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
