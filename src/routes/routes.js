import React from 'react'
import Post from '../components/post'
import { Route, Switch } from 'react-router-dom'
import Forum from '../components/forum'

export const postRoutes = (
  <Switch>
    <Route exact={true} path="/test/:id" component={Post} />
    <Route path="/" component={Forum} />
  </Switch>
);