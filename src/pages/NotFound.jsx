import { Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(50),
    },
  },
}));
const NotFound = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth='lg' className={classes.container}>
        <img
          src='/not-found.svg'
          height='auto'
          width='530px'
          alt='Page Not Found.'
        />
      </Container>
    </>
  );
};

export default NotFound;
