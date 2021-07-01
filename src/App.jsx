import React from 'react';
import NewImage from './pages/NewImage';
import Home from './pages/Home';
import ImageDetails from './pages/ImageDetails';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/show/:id' component={ImageDetails} />
        <Route path='/new' component={NewImage} />
        <Route path='/not-found' component={NotFound} />
        <Route path='/' exact component={Home} />
        <Redirect to='not-found' />
      </Switch>
    </>
  );
};

export default App;
