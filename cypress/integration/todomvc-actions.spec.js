/// <reference types="cypress" />

describe('Todo MVC actions', () => {
    beforeEach( () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo', {timeout: 5000}).type('New Todo item{enter}')
    })
    it('Should add a new todo item', () => {
        cy.get('label').should('have.text', 'New Todo item')
        cy.get('.toggle').should('not.be.checked')
    })

    it('Should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
    
    it('Should clean completed todos', () => {
        cy.get('.toggle').click()
        cy.contains('Clear completed').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })
})
