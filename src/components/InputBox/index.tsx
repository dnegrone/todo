import React, { FormEvent } from 'react'
import './style.css'

// Props
interface Props {
    handleSubmit: (value:string) => void
}

// State
interface State {
    value: string
}

class InputBox extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props)
        this.state = { value: '' } // Value is empty by default
    }

    _updateValue(value: string) {
        console.log(value)
        this.setState({ value })
    }

    _handleSubmit(e: FormEvent<any>){
        e.preventDefault()
        if(!this.state.value.trim()) {
            return
        }
        this.props.handleSubmit(this.state.value) // return text from input
        this.setState({ value: '' }) // after return text, empties the field
    }
    render() {
        const { value } = this.state
        const { _updateValue, _handleSubmit } = this
        return(
            <form onSubmit={_handleSubmit}>
                <input type="text" name="inputbox" id="inputbox" value={ value } onChange={e => _updateValue(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}

export default InputBox