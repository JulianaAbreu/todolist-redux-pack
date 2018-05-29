import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import TodoListContainer from './containers/TodoListContainer';
import AddTodoContainer from './containers/AddTodoContainer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, reduxPackMiddleware)
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AddTodoContainer />
          <TodoListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
