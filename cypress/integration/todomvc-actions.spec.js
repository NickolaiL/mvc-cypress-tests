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
        cy.eyesOpen({
            appName: "Todo test", 
            batchName: "Todo test batch", 
            browser: [
                {name: 'chrome', width: 1024, height: 768},
                {name: 'firefox', width: 1024, height: 768},
                {deviceName: 'iPhone X', screenOrientation: 'portrait'},
            ]
        })
    })
    afterEach(() => cy.eyesClose())

    it('Should add a new todo item', () => {
        validateTodoText(0, 'New Todo item')
        validateToggleState(0, false)
        cy.eyesCheckWindow('1 Todo added')
    })

    it('Should mark a todo as completed', () => {
        toggleTodo(0)
        validateToggleState(0, true)
        cy.eyesCheckWindow('Todo is completed')
    })
    
    it('Should clean completed todos', () => {
        toggleTodo(0)
        clearCompleted()
        validateNumberOfTodosShown(0)
        cy.eyesCheckWindow('Todos are cleared')
    })
})
