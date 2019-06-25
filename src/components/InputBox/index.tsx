import React from 'react'
import './style.css'
import Todo from '../../models/Todo';
import { addTodo } from '../../actions/todos';



// Props
interface Props {
}

// State
interface State {
    text: string
    todo: Todo[]
    nextId: number
}

class InputBox extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props)
        this.state = { todo: [], text: '', nextId: 1}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    render() {
        const { handleChange, handleSubmit } = this
        console.log(this.state.todo)
        return(
            <form onSubmit={handleSubmit}>
                <input type="text" value={this.state.text} onChange={handleChange} name="inputbox" id="inputbox" />
                <button type="submit">Add Todo</button>
            </form>
        )
    }

    handleChange(e: any) {
        this.setState({ text: e.target.value });
        // console.log(e.target.value);
    }

    handleSubmit(e: any) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        let temp:number = this.state.nextId
        temp++
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