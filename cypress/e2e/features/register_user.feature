Feature: Register user
    Eu como cliente 
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

    Background: Access register screen
        Given I am on register screen

    Scenario: Campo nome vazio
        When I click on register
        Then I see message "O campo nome deve ser prenchido" on register

    Scenario: Campo email vazio
        And I fill name
        When I click on register
        Then I see message "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Campo emial inválido
        And I fill name
        And I fill e-mail 'invalidEmail'
        When I click on register
        Then I see message "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Campo senha vazio
        And I fill name
        And I fill e-mail 'qazando@qazando.com.br'
        When I click on register
        Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Campo senha inválido
        And I fill name
        And I fill e-mail 'qazando@qazando.com.br'
        And I fill password
        When I click on register
        Then I see message "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Cadastro de usuário com sucesso
        And I fill my datas os register
        When I click on register
        Then I see message sucess register
