/// <reference types="cypress" />

export default {
    clickBtnLogin() {
        cy.get('#btnLogin').click()
    },

    checkMessageError(message) {
        cy.get('.invalid_input').and('contain', message)
    },

    fillEmailField(email) {
        cy.get('#user').type(email)
    },

    fillPasswordField(password) {
        cy.get('#password').type(password)
    },

    checkMessageSuccess() {
        cy.get('#swal2-title').should('be.visible').should('have.text', 'Login realizado')
        cy.get('#swal2-html-container').should('be.visible').should('have.text', 'Olá, qazando@qazando.com.br')
    }

}