import React, { Component } from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodoActions } from "./store/ducks/todos";

import { Todo } from './store/ducks/todos';
import api from './store/ducks/api'
import './TodoList.css'


interface Props {
    removeTodo?: any
    todos?: any
    toggleTodo?: any
}

// State
interface State {
    todo: Todo[]
    text: string
    nextId: string
    unreliableTodo: any
}
class TodoList extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { todo: [], text: '', nextId: Date.now().toString(), unreliableTodo: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
    }
    componentDidMount(){
        api.get('todos').then(response => {
            this.setState({ unreliableTodo: Object.values(response.data.todos) })
        })
    }
    handleSubmit(e: any) {
        e.preventDefault();
        if (!this.state.text.trim()) {
            return;
        }
        const newItem = {
            id: Date.now().toString(),
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
        // API post
        // api.post('todos', this.state.todo).then(response => {
        //     console.log(response);
        // })
    }
    handleChange(e: any) {
        this.setState({ text: e.target.value });
    }
    removeTodo = (index: number, e: any) => {
        // () => this.state.unreliableTodo.splice(index,1)
        const todo = Object.assign([], this.state.todo)
        todo.splice(index, 1)
        this.setState({ todo: todo })
    }
    removeUnreliableTodo = (index: number, e: any) => {
        // () => this.state.unreliableTodo.splice(index,1)
        const todo = Object.assign([], this.state.unreliableTodo)
        todo.splice(index, 1)
        this.setState({ unreliableTodo: todo })
    }
    render() {
        const { handleChange, handleSubmit} = this
        const { todos, toggleTodo, removeTodo } = this.props;
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input autoFocus type="text" value={this.state.text} onChange={handleChange} name="inputbox" id="inputbox" placeholder="add a new todo" />
                    <button type="submit">Add Todo</button>
                </form>
                <section className="todo-list">
                    <ul>
                        {this.state.unreliableTodo.map((todo: any, index: number) => (
                            <li key={todo.id}>
                                <span className="text">{todo.text}</span>
                                <span className="button"><button onClick={this.removeUnreliableTodo.bind(this,index)}>Remove</button></span>
                                {/* <div>
                                    <button onClick={() => removeTodo(todo)}>Remove</button>
                                    <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                                </div> */}
                            </li>
                        ))}
                        {this.state.todo.map((todo: any, index: number) => (
                            <li key={todo.id}>
                                <span className="text">{todo.text}</span>
                                <span className="button"><button onClick={this.removeTodo.bind(this,index)}>Remove</button></span>
                                
                                {/* <div>
                                    <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                                </div> */}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        )
    }
    
    
    
}


const mapStateToProps = (state: any) => ({
    todos: state.todo
});

  
  const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(TodoActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoList);