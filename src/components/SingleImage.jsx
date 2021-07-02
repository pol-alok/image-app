import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    minWidth: '100%',
  },
  media: {
    height: 400,
  },
});

const SingleImage = ({ img }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {img.url ? (
          <CardMedia
            className={classes.media}
            image={img.url}
            title={img.name}
          />
        ) : (
          ''
        )}

        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {img.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {img.details}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SingleImage;
