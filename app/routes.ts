import {
   type RouteConfig,
   index,
   layout,
   route,
} from '@react-router/dev/routes';

export default [
   layout('routes/layout.tsx', [
      index('routes/home.tsx'),
      route('discover', 'routes/discover.tsx'),
      route('create', 'routes/create.tsx'),
      route('profile', 'routes/profile.tsx'),
   ]),
] satisfies RouteConfig;
