import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('seleciono a opçao de preço escolhido', () => {
    cy.validarInputPreco()
})


Then('valido o campo de opçao de preço', () => {
    cy.clicarBotaoPreco()
})