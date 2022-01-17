/// <reference types="cypress" />

import {
    navigate, 
    addTodo, 
} from "../page-objects/todo-page"

describe('Todo MVC filtering', () => {

    beforeEach( () => {
        navigate()
        addTodo("First Todo item")
        addTodo("Second Todo item")
        cy.get('.todo-list li:nth-child(2) .toggle').click()
        addTodo("Third Todo item")
    })
    it('Showing all elements ', () => {
        cy.get('.filters').contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)
    })

    it('Showing completed elements ', () => {
        cy.get('.filters').contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)
    })

    it('Showing active elements ', () => {
        cy.get('.filters').contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })
})
