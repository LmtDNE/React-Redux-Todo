import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'react-redux';
import { Provider } from 'react-redux'; 
import reducer from './reducer';
import { TodoList } from './components';

const store = createStore(reducer);


render (
    <Provider store = {store}>
      <TodoList todos = {store.getState()} />
    </Provider>,
    document.getElementById('app')
  );