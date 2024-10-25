// 2 - transformar o gherkin em método/ação
/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

Given("I am on login screen", () => {
    home_page.accessLogin()
})

When("I click on login", () => {
    login_page.clickBtnLogin()
})

Then("I see the message {string}", (message) => {
    login_page.checkMessageError(message)
})

Given('I fill e-mail', () => {
    login_page.fillEmailField('qazando@qazando.com.br')
})

Given('I fill my credencials', () => {
    login_page.fillEmailField('qazando@qazando.com.br')
    login_page.fillPasswordField('123456')
})

Then('I see succes message', () => {
    login_page.checkMessageSuccess()
})