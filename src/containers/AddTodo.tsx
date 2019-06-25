import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'
import InputBox from '../components/InputBox'

export default connect<any, any, any>(null, {
    handleSubmit: addTodo
})(InputBox)