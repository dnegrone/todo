import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="" id=""/>
          <button type="submit">Add Todo</button>
        </form>
        <div>
          <ul>
            <li>Novo todo 1</li>
            <li>Novo todo 2</li>
            <li>Novo todo 3</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
