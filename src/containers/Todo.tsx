import { connect } from 'react-redux'
import { State } from '../reducers'
import { getTodos } from '../selectors/todos'
import { toggleTodo } from '../actions/todos'
import TodoList from '../components/TodoList'

const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
});

const mapDispatchToProps = {
    onTodoClicked: toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)