const INPUT_NAME = '#firstname'
const INPUT_LASTNAME = '#lastname'
const INPUT_ANIVERSARIO ='#birthdate'
const BTN_GENERO = '#gendermale'
const INPUT_ENDERECO =  '#streetaddress'
const MENU_PAIS = '#country'
const INPUT_CEP = '#zipcode'
const MENU_OCUPACAO = '#occupation'
const PASSATEMPO = '#speeding'
const BTN_NEXT_SEGURADOR = '#nextenterproductdata'

Cypress.Commands.add('validarCamposSegurador', () => {
    cy.get(INPUT_NAME).type(Cypress.env('nome'), {log: false})
    cy.get(INPUT_LASTNAME).type(Cypress.env('sobrenome'), {log: false})
    cy.get(INPUT_ANIVERSARIO).type(Cypress.env('data-aniversario'), {log: false})
    cy.get(BTN_GENERO).check({ force: true })
    cy.get(INPUT_ENDERECO).type(Cypress.env('endereco'), {log: false})
    cy.get(MENU_PAIS).select('Albania')
    cy.get(INPUT_CEP).type(Cypress.env('cep'), {log: false})
    cy.get(MENU_OCUPACAO).select('Public Official')
    cy.get(PASSATEMPO).check({ force: true })
})

Cypress.Commands.add('validarBotaoSegurador', () => {
    cy.get(BTN_NEXT_SEGURADOR).click()
})