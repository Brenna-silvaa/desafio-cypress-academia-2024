import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal Tricentis', () => {
    cy.visit('/app.php')
    cy.entrarAutomoveis()
})

When('preencho os campos com os dados do veiculo', () => {
    cy.validarCamposVeiculo()
})


Then('valido a insercao de dados no formulario de dados do veiculo', () => {
    cy.clicarBotaoVeiculo()
})

