import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Then('preencho os campos com os dados obrigatorio para o envio da cotacao', () => {
    cy.validarCamposCotacao()
})


