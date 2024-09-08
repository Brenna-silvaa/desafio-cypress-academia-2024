import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis', () => {
    cy.visit('/app.php')
    cy.entrarAutomoveis()
})

When('preencho os campos com os dados do veiculo de forma invalida', () => {
    cy.validarCamposVeiculoNegativa()
})


Then('uma mensagem de erro deve ser exibida na tela {string}', (msgErro) => {
    Cypress.env('msgErro', msgErro)
    cy.mensagemDeErro(msgErro)
})

