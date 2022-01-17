
    export function navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }
    export function addTodo(todoText){
        cy.get('.new-todo').type(todoText + '{enter}')
    }
    export function validateTodoText(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }
    export function validateToggleState(todoIndex, shouldBeToggled) {
        const toggle = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`)
      
        toggle.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
    }
    export function toggleTodo(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }
    export function clearCompleted(todoIndex){
        cy.contains('Clear completed').click()
    }
    export function validateNumberOfTodosShown(expectedNumber){
        cy.get('.todo-list li').should('have.length', expectedNumber)
    }
    export function showOnlyActiveTodos(){
        cy.contains('Active').click()
    }
    export function showAllTodos(){
        cy.contains('All').click()
    }
    export function showOnlyCompletedTodos(){
        cy.contains('Completed').click()
    }