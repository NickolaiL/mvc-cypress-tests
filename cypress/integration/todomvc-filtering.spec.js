/// <reference types="cypress" />

describe('Todo MVC filtering', () => {
    beforeEach( () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type('First Todo item{enter}')
        cy.get('.new-todo').type('Second Todo item{enter}')
        cy.get('.todo-list li:nth-child(2) .toggle').click()
        cy.get('.new-todo').type('Third Todo item{enter}')
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
