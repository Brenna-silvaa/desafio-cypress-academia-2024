import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'



And('preencho os campos com os dados do segurador', () => {
   cy.validarCamposSegurador()
})


Then('valido a insercao de dados no formulario de dados do segurador', () => {
    cy.validarBotaoSegurador()
})

