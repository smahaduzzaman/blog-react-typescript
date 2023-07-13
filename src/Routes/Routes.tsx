import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import BlogPost from './../Components/BlogPost';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/post/:postId" component={BlogPost} />
    </Switch>
  );
};

export default Routes;
