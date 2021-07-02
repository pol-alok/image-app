import { Container, CircularProgress } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../components/ImageCard';
import NavBar from '../components/NavBar';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      width: theme.spacing(50),
    },
  },
  mobileContainer: {
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
const Home = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false,
    );
    axios
      .get('https://image-app-backend.herokuapp.com/')
      .then((res) => {
        setLoading(false);
        setImages(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isMobile]);

  return (
    <>
      <NavBar showAddButton={true} />
      <Container
        maxWidth='lg'
        className={isMobile ? classes.mobileContainer : classes.container}>
        {loading ? (
          <CircularProgress />
        ) : (
          images.map((img) => <ImageCard key={img.id} img={img} />)
        )}
      </Container>
    </>
  );
};

export default Home;
