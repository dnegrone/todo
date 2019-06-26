import React from 'react'
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
        const { handleChange, handleSubmit } = this
        // console.log(this.state.todo)
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={this.state.text} onChange={handleChange} name="inputbox" id="inputbox" />
                    <button type="submit">Add Todo</button>
                </form>
                <section className="todo-list">
                    <ul>
                        {this.state.unreliableTodo.map((todo: any) => (
                            <li key={todo.id}>
                                {todo.text}
                                {/* <div>
                                    <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                                    <button onClick={() => removeTodo(todo.id)}>Remove</button>
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
    }
    
}

export default InputBox