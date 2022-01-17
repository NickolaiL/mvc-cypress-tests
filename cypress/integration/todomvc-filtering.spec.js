/// <reference types="cypress" />

describe('Todo MVC filtering', () => {
    beforeEach( () => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo', {timeout: 5000}).type('New Todo item{enter}')
    })

})
