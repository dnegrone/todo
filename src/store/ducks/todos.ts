import { createActions, createReducer } from "reduxsauce";

/**
 * Export Model from whole Todo App
 */
export interface Todo {
    id: string,
    text: string,
    created: string, // needed to be convert to date
    updated: string, // needed to be convert to date
    isCompleted: boolean,
    urgency: number
}


/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  addTodo: ["text"],
  toggleTodo: ["id"],
  removeTodo: ["id"]
});

/**
 * Handlers
 */
const INITIAL_STATE: any[] = [];

const add = (state = INITIAL_STATE, action: any) => [
  ...state,
  { id: Date.now().toString(), text: action.text, isComplete: false }
];

const toggle = (state = INITIAL_STATE, action: any) =>
  state.map(
    todo =>
      todo.id === action.id ? { ...todo, isComplete: !todo.isComplete } : todo
  );

const remove = (state = INITIAL_STATE, action: any) =>
  state.filter(todo => todo.id !== action.id);

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove
});
