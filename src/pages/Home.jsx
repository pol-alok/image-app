import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../components/ImageCard';
import NavBar from '../components/NavBar';

const images = [
  {
    id: 1,
    name: 'Contemplative Reptile',
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
    url: 'https://i.pravatar.cc/300?img=1',
  },
  {
    id: 2,
    name: 'Contemplative Reptile',
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
    url: 'https://i.pravatar.cc/300?img=2',
  },
  {
    id: 3,
    name: 'Contemplative Reptile',
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
    url: 'https://i.pravatar.cc/300?img=3',
  },
  {
    id: 4,
    name: 'Contemplative Reptile',
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
    url: 'https://i.pravatar.cc/300?img=4',
  },
];
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(50),
    },
  },
}));
const Home = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar showAddButton={true} />
      <Container maxWidth='lg' className={classes.container}>
        {images.map((img) => (
          <ImageCard key={img.id} img={img} />
        ))}
      </Container>
    </>
  );
};

export default Home;
