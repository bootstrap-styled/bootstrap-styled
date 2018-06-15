import React from 'react';
// our application pages used for creating <Route /> into <Switch />
// New list with correct value to use with routes

export const routes = [
  {
    name: 'home',
    description: 'Home',
    exact: true,
    path: '/',
    component: <div>Home</div>,
  },
  {
    name: 'documentation',
    description: 'Documentation',
    exact: true,
    path: '/documentation',
    component: <div>Documentation</div>,
  },
  {
    name: 'community',
    description: 'Community',
    exact: true,
    path: '/community',
    component: <div>Community</div>,
  },
];

// our application menus use mainly for display and linking
export const pages = {
  home: routes.filter((page) => page.name === 'home')[0],
  top: [
    routes.filter((page) => page.name === 'documentation')[0],
    // routes.filter((page) => page.name === 'customize')[0],
    // routes.filter((page) => page.name === 'module')[0],
    routes.filter((page) => page.name === 'community')[0],
    // routes.filter((page) => page.name === 'example')[0],
    // routes.filter((page) => page.name === 'blog')[0],
    // routes.filter((page) => page.name === 'gallery')[0],
  ],
  // doc: routes.filter((page) => page.name === 'documentation')[0].childRoutes,
};

// For use with <Link /> with "to" attribute

function createPagePath(pageList) {
  const flatList = [];
  const currentPagePath = {};
  function addToFlatList(list) {
    list.forEach((item) => {
      flatList.push(item);
      return item.childRoutes && addToFlatList(item.childRoutes);
    });
  }
  addToFlatList(pageList);
  flatList.map(function createPath(element) { // eslint-disable-line array-callback-return, prefer-arrow-callback
    if (!element.redirect) {
      currentPagePath[element.name] = element.path;
    }
  });
  return currentPagePath;
}

export const pagePath = createPagePath(routes);

export default {
  pages,
  pagePath,
  routes,
};
