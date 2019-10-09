import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import Root from './root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  ReactDom.render(<Root store={store}/>, root);
})