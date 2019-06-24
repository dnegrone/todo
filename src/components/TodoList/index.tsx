import React from 'react'
import './style.css'
class TodoList extends React.Component {
    render() {
        return(
            <section className="todo-list">
                <ul>
                    <li>Novo todo 1</li>
                    <li>Novo todo 2</li>
                    <li>Novo todo 3</li>
                </ul>
            </section>
        )
    }
}

export default TodoList