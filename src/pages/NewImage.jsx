import React from 'react';
import ImageForm from '../components/ImageForm';
import NavBar from '../components/NavBar';

const NewImage = ({ showAddButton }) => {
  return (
    <>
      <NavBar showAddButton={showAddButton} />
      <ImageForm />
    </>
  );
};

export default NewImage;
