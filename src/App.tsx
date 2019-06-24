import React from 'react'
import InputBox from './components/InputBox'
import TodoList from './components/TodoList'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <InputBox />
        <TodoList />
      </div>
    )
  }
}

export default App;
