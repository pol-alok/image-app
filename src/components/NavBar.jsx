import React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import { Link } from 'react-router-dom';

const NavBar = ({ showAddButton }) => {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' noWrap>
            <Button
              component={Link}
              to='/'
              startIcon={<HomeIcon />}
              color='inherit'>
              Image App
            </Button>
          </Typography>
          <IconButton color='inherit'></IconButton>
          {showAddButton && (
            <Typography style={{ marginLeft: 'auto' }}>
              <Button
                component={Link}
                to='/new'
                variant='outlined'
                color='inherit'
                startIcon={<AddCircleRoundedIcon />}>
                Add New
              </Button>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
