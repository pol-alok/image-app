import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 800,
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
        <CardMedia className={classes.media} image={img.url} title={img.name} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {img.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {img.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SingleImage;
