/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ComponentType } from 'react';

const Home = React.lazy(() => import('pages/Home'));
const TeamProfile = React.lazy(() => import('pages/TeamProfile'));

const PATHS = ['/', '/team/:teamId'] as const;

type ExtractRouteParams<T> = string extends T
  ? Record<string, string>
  : T extends `${infer _Start}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof ExtractRouteParams<Rest>]: string }
  : T extends `${infer _Start}:${infer Param}`
  ? { [k in Param]: string }
  : {};

export type Path = typeof PATHS[number];

export type PathParams<P extends Path> = ExtractRouteParams<P>;

export type RoutingProps = {
  path: Path;
  component: React.LazyExoticComponent<() => JSX.Element> | ComponentType;
};

const mainRoutingList: RoutingProps[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/team/:teamId',
    component: TeamProfile,
  },
];

export default mainRoutingList;
