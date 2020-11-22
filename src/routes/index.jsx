import React from 'react';

export default {
  UsersList: {
    path: '/github-users',
    component: React.lazy(() =>
      import('../components/UsersList' /* webpackChunkName: "UsersList" */),
    ),
  },

  UserProfile: {
    path: '/profile/', // :id
    component: React.lazy(() =>
      import('../components/UserProfile' /* webpackChunkName: "UserProfile" */),
    ),
  },
};
