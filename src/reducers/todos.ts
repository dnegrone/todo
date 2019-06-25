import Todo from '../models/Todo'
import { ActionTypes, Action } from '../actions/todos'

// Define our State from the current reducer
export interface State {
    todos: Todo[]
}

// Define our initialState
export const initialState: State = {
    todos: [
        // id: "05c4416f-2581-4116-bc14-01d8669590ac",
        // text: "Feed the dog",
        // created: "2019-03-11T13:51:37.124Z",
        // updated: "2019-03-11T13:51:37.124Z",
        // isCompleted: true,
        // urgency: 5
    ]
}

/*
 * Reducer takes 2 arguments: state, action
 * State = initialState (if there was no state provided)
 * Action = action to be handled
 */
export function reducer(state: State = initialState, action: Action) {
    switch(action.type) {
        case ActionTypes.ADD_TODO: {
            const todo = action.payload.todo
            return { 
               ...state,
               todos: [...state.todos, todo] // Add todo to todos array
            }
        }
        case ActionTypes.TOGGLE_TODO: {
            const { todoId } = action.payload
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo)
            }
        }
        default:
            return state
    }
}