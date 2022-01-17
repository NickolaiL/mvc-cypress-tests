/// <reference types="cypress" />

import {
    navigate, 
    addTodo,
    toggleTodo,
    showAllTodos,
    showOnlyCompletedTodos,
    showOnlyActiveTodos,
    validateNumberOfTodosShown 
} from "../page-objects/todo-page"

describe('Todo MVC filtering', () => {

    beforeEach( () => {
        navigate()
        addTodo("First Todo item")
        addTodo("Second Todo item")
        toggleTodo(1)
        addTodo("Third Todo item")
    })
    it('Showing all elements ', () => {
        showAllTodos()
        validateNumberOfTodosShown(3)
    })

    it('Showing active elements ', () => {
        showOnlyActiveTodos()
        validateNumberOfTodosShown(2)
    })

    it('Showing completec elements ', () => {
        showOnlyCompletedTodos()
        validateNumberOfTodosShown(1)
    })
})
