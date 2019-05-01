import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const HomeScreen = lazy(() => import(/* webpackChunkName: "home-screen" */ './home'));
const FeedScreen = lazy(() => import(/* webpackChunkName: "feed-screen" */ './feed'));

const screens: RouteProps[] = [
  {
    component: HomeScreen,
    exact: true,
    path: '/',
  },
  {
    component: FeedScreen,
    exact: true,
    path: '/r/:subreddit/comments/:id/:name',
  },
];

export default screens;
