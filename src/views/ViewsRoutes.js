import { RoutesCreate } from '../utils/RoutesCreate'
import { lazy } from 'react';

RoutesCreate(
  [
    { componentKey: '/', componentLazyModule: lazy(() => import('./Home')) },
  ],
  lazy(() => import('./ErrorPages/NotFound'))
);
