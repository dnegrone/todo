import Todo from '../models/Todo'

/*
 * Generating automatically id for our todos
 */
let nextId = '0'

/* 
 * Creating type enums (Typescript)
  */
export enum ActionTypes {
    ADD_TODO = '[todos] ADD_TODO',
    TOGGLE_TODO = '[todos] TOGGLE_TODO',
}

/*
 * Define return types of our actions 
 * Every action returns a type and a payload
 */
export interface AddTodoAction { type: ActionTypes.ADD_TODO, payload: { todo: Todo } }
export interface ToggleTodoAction { type: ActionTypes.TOGGLE_TODO, payload: { todoId: string } }

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function addTodo(text: string): AddTodoAction {

  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: nextId,
        text: text,
        created: "2019-03-11T13:51:37.124Z",
        updated: "2019-03-11T13:51:37.124Z",
        isCompleted: false,
        urgency: 5
      }
    }
  }
}

export function toggleTodo(todoId: string): ToggleTodoAction {
  return { type: ActionTypes.TOGGLE_TODO, payload: { todoId } } // {todoId} is a shortcut for {todoId: todoId}
}

/*
 * Define the Action type
 * It can be one of the types defining in our action/todos file
 * It will be useful to tell typescript about our types in our reducer
 */
export type Action = AddTodoAction | ToggleTodoAction