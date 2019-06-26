import React from 'react'
import TodoList from './TodoList'
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Todo App</h1>
        <div className="container">
          <TodoList />
        </div>
      </Provider>
    )
  }
}

export default App;
