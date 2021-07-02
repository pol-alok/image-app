import { makeStyles, CircularProgress } from '@material-ui/core';
import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import SingleImage from '../components/SingleImage';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://img-app-api.herokuapp.com/show/${id}`)
      .then((res) => {
        setLoading(false);
        setImage(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <NavBar showAddButton={true} />
      <Container maxWidth='md' className={classes.container}>
        {loading ? <CircularProgress /> : <SingleImage img={image} />}
      </Container>
    </>
  );
};

export default ImageDetails;
