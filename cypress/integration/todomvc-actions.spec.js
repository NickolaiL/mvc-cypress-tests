/// <reference types="cypress" />

import { 
    navigate,
    addTodo,
    validateTodoText, 
    validateToggleState,
    toggleTodo,
    clearCompleted,
    validateNumberOfTodosShown,
} from "../page-objects/todo-page"

describe('Todo MVC actions', () => {
    beforeEach( () => {
        navigate()
        addTodo("New Todo item")
    })
    afterEach(() => cy.eyesClose())

    it('Should add a new todo item', () => {
        validateTodoText(0, 'New Todo item')
        validateToggleState(0, false)
    })

    it('Should mark a todo as completed', () => {
        toggleTodo(0)
        validateToggleState(0, true)
    })
    
    it('Should clean completed todos', () => {
        toggleTodo(0)
        clearCompleted()
        validateNumberOfTodosShown(0)
    })
})
