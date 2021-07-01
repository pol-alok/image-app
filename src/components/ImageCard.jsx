import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
});

const ImageCard = ({ img }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={`show/${img.id}`}>
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
      <CardActions>
        <Button
          component={Link}
          to={`show/${img.id}`}
          size='large'
          color='primary'>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
