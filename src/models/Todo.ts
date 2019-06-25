/**
 * Export Model from whole Todo App
 */
export default interface Todo {
    id: string,
    text: string,
    created: string, // needed to be convert to date
    updated: string, // needed to be convert to date
    isCompleted: boolean,
    urgency: number
}