import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTodos } from '../../selectors/todos'
import { toggleTodo } from '../../actions/todos'
import './style.css'
import Todo from '../../models/Todo'
import api from '../../models/api'


// Props
interface Props {
}

// State
interface State {
    todo: Todo[]
    text: string
    nextId: number
    unreliableTodo: any
}
class InputBox extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props)
        this.state = { todo: [], text: '', nextId: 1, unreliableTodo: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        api.get('todos').then(response => {
            this.setState({ unreliableTodo: Object.values(response.data.todos) })
        })
    }
    render() {
        const { handleChange, handleSubmit, removeTodo } = this
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input autoFocus type="text" value={this.state.text} onChange={handleChange} name="inputbox" id="inputbox" placeholder="add a new todo" />
                    <button type="submit">Add Todo</button>
                </form>
                <section className="todo-list">
                    <ul>
                        {this.state.unreliableTodo.map((todo: any) => (
                            <li key={todo.id}>
                                {todo.text}
                                <button onClick={() => removeTodo(todo.id)}>Remove</button>
                                {/* <div>
                                    <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                                </div> */}
                            </li>
                        ))}
                        {this.state.todo.map((t: any) => (
                            <li key={t.id}>
                                {t.text}
                                {/* <div>
                                    <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                                    <button onClick={() => removeTodo(todo.id)}>Remove</button>
                                </div> */}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        )
    }
    
    handleChange(e: any) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e: any) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            id: this.state.todo.length.toString(),
            text: this.state.text,
            created: Date.now().toString(), // needed to be convert to date
            updated: Date.now().toString(), // needed to be convert to date
            isCompleted: false,
            urgency: Math.round(Math.random())
        };
        this.setState(state => ({
            todo: state.todo.concat(newItem),
            text: ''
        }));
        api.post('todos', this.state.todo).then(response => {
            console.log(response);
        })
    }

    removeTodo(todoId:string) {
        // api.delete(`todos/${todoId}`).then(response => {
        //     console.log(response);
        // })
    }
    
}

export default InputBox