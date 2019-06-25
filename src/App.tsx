import React from 'react'
import InputBox from './containers/AddTodo'
import TodoList from './containers/Todo'
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Todo App</h1>
        <div className="container">
          <InputBox />
          <TodoList />
        </div>
      </Provider>
    )
  }
}

export default App;
