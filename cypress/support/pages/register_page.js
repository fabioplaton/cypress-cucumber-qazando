/// <reference types="cypress" />

export default {

    clickBtnRegister() {
        cy.get('#btnRegister').click()
    },

    checkMessageErro(message){
        cy.get('#errorMessageFirstName').should('be.visible').should('have.text', message)
    },

    fillNameField(name) {
        cy.get('#user').type(name)
    },

    fillEmailField(email) {
        cy.get('#email').type(email)
    },

    fillPasswordField(password){
        cy.get('#password').type(password)
    },

    checkSuccessMessage(name) {
        cy.get('#swal2-title').should('be.visible').should('have.text', 'Cadastro realizado!')
        cy.get('#swal2-html-container').should('be.visible').should('have.text', `Bem-vindo ${name}`)
    }
}