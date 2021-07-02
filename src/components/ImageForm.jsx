import {
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CloudUploadRounded as CloudUploadRoundedIcon } from '@material-ui/icons';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#cfe8fc',
    height: '100%',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    },
  },
  form: {
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

const ImageForm = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({ name: '', url: '', details: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (image.name.trim() === '') {
      errors.name = 'Image Name is requred.';
    }
    if (image.url.trim() === '') {
      errors.url = 'Image Url is requred.';
    }
    if (image.details.trim() === '') {
      errors.details = 'Image Details are requred.';
    }
    return Object.keys(errors).length === 0 ? {} : errors;
  };

  const validateProperty = ({ name, value }) => {
    if (name === 'name') {
      if (value.trim() === '') return 'Image Name is requred.';
    }
    if (name === 'url') {
      if (value.trim() === '') return 'Image Url is requred.';
    }
    if (name === 'details') {
      if (value.trim() === '') return 'Image Details is requred.';
    }
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (err && Object.keys(err).length === 0 && err.constructor === Object) {
      setLoading(true);
      axios.post('https://img-app-api.herokuapp.com/new', image).then(
        (response) => {
          setLoading(false);
          e.target.reset();
          history.push({
            pathname: '/',
            state: {
              response: 'Added Successfully.',
            },
          });
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
      );
    }
  };

  const handleChange = ({ target: input }) => {
    const err = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) err[input.name] = errorMessage;
    else delete err[input.name];
    const img = { ...image };
    img[input.name] = input.value;
    setImage(img);
    setErrors(err);
  };

  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} className={classes.card}>
        <form
          className={classes.form}
          noValidate
          autoComplete='off'
          onSubmit={handleSubmit}>
          <Typography variant='h4' component='h5'>
            New Image
          </Typography>
          <TextField
            required
            error={errors.name && errors.name.length > 0}
            helperText={errors.name}
            value={image.name}
            name='name'
            onChange={handleChange}
            label='Image Name'
            variant='outlined'
          />
          <TextField
            required
            error={errors.url && errors.url.length > 0}
            helperText={errors.url}
            value={image.url}
            name='url'
            onChange={handleChange}
            label='Image Url'
            variant='outlined'
          />
          <TextField
            fullWidth
            multiline
            required
            error={errors.details && errors.details.length > 0}
            helperText={errors.details}
            value={image.details}
            name='details'
            onChange={handleChange}
            label='Image Description'
            variant='outlined'
            InputProps={{
              rows: 3,
            }}
          />
          <Button
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            startIcon={
              loading ? (
                <CircularProgress size={14} />
              ) : (
                <CloudUploadRoundedIcon />
              )
            }
            disabled={loading}>
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ImageForm;
