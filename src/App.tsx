import React from 'react'
import InputBox from './components/InputBox'
import TodoList from './components/TodoList'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <InputBox />
        <TodoList />
      </div>
    )
  }
}

export default App;
