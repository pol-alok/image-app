import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';
import SingleImage from '../components/SingleImage';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(50),
    },
  },
}));

const ImageDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <NavBar showAddButton={true} />
      <Container maxWidth='md' className={classes.container}>
        {}
        <SingleImage
          img={{
            id: 3,
            name: 'Contemplative Reptile',
            description: `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
            url: 'https://i.pravatar.cc/300?img=3',
          }}
        />
      </Container>
    </>
  );
};

export default ImageDetails;
