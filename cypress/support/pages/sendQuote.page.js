const INPUT_EMAIL = '#email'
const INPUT_NOME_USUARIO = '#username'
const INPUT_SENHA = '#password'
const INPUT_CONFIRMAR_SENHA = '#confirmpassword'


Cypress.Commands.add('validarCamposCotacao', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('email'), {log: false})
    cy.get(INPUT_NOME_USUARIO).type(Cypress.env('nome-usuario'), {log: false})
    cy.get(INPUT_SENHA).type(Cypress.env('senha'), {log: false})
    cy.get(INPUT_CONFIRMAR_SENHA).type(Cypress.env('senha'), {log: false})
})
