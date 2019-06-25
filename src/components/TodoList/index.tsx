import * as React from 'react'
import Todo from '../../models/Todo'

// Props
interface Props {
    todos: Todo[]
    onTodoClicked: (todoId: string) => void
}

// State
interface State { }

class TodoList extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props)
    }
    render() {
        const { todos, onTodoClicked } = this.props
        return(
            <section className="todo-list">
                <ul>
                    {
                        todos.map(todo => (
                            <li key={todo.id} onClick={() => onTodoClicked(todo.id)}>{todo.text}</li>
                        ))
                    }
                </ul>
            </section>
        )
    }
}

export default TodoList