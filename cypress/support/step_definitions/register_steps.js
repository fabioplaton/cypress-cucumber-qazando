/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_page from "../pages/register_page"

Given('I am on register screen', () => {
    home_page.accessRegister()
})

When('I click on register', () => {
    register_page.clickBtnRegister()
})

Then('I see message {string} on register', (message) => {
    register_page.checkMessageErro(message)
})

Given('I fill name', () => {
    register_page.fillNameField('Pedro Alonso')
})

Given('I fill e-mail {string}', (email) => {
    register_page.fillEmailField(email)
})

Given('I fill password', () => {
    register_page.fillPasswordField('1234')
})

Given('I fill my datas os register', () => {
    register_page.fillNameField('Pedro Alonso')
    register_page.fillEmailField('qazando@qazando.com.br')
    register_page.fillPasswordField('123456')
})

Then('I see message sucess register', () => {
    register_page.checkSuccessMessage('Pedro Alonso')
})