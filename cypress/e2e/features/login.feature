# 1 - criar meu cenário 
Feature: Login
    Eu como cliente 
    Quero fazer login na aplicação
    Para poder realizar uma comprar

    Background: Access login screen
        Given I am on login screen

    Scenario: Login com campo e-mail vazio
        When I click on login
        Then I see the message "E-mail inválido."

    Scenario: Login com campo senha vazio
        And I fill e-mail 
        When I click on login
        Then I see the message "Senha inválida."

    Scenario: Login com sucesso
        And I fill my credencials
        When I click on login
        Then I see succes message 