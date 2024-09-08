import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('preencho os campos com os dados do produto', () => {
    cy.validarCamposProduto()
})


Then('valido a insercao de dados no formulario de dados do produto', () => {
    cy.clicarBotaoProduto()
})