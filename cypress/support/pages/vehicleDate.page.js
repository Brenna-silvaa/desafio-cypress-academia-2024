const MENU_MAKE = '#make'
const INPUT_PERFORMANCE = '#engineperformance'
const INPUT_DATA = '#dateofmanufacture'
const MENU_QTD_ASSENTO = '#numberofseats'
const MENU_FUEL_TYPE = '#fuel'
const INPUT_LIST_PRICE = '#listprice'
const INPUT_PLATE_NUMBER = '#licenseplatenumber'
const INPUT_MILEAGE = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'
const MENSSAGEM_ERRO = 'span.error'

Cypress.Commands.add('validarCamposVeiculo', () => {
    cy.get(MENU_MAKE).select('BMW')
    cy.get(INPUT_PERFORMANCE).type('100')
    cy.get(INPUT_DATA).type('03/03/2024')
    cy.get(MENU_QTD_ASSENTO).select('1')
    cy.get(MENU_FUEL_TYPE).select('Electric Power')
    cy.get(INPUT_LIST_PRICE).type('20000')
    cy.get(INPUT_PLATE_NUMBER).type('123456')
    cy.get(INPUT_MILEAGE).type('1000')
})

Cypress.Commands.add('clicarBotaoVeiculo', () => {
    cy.get(BTN_NEXT).click()
})

const msgErro = 'Must be a number between 1 and 2000'

Cypress.Commands.add('validarCamposVeiculoNegativa', () => {
    cy.get(MENU_MAKE).select('BMW')
    cy.get(INPUT_PERFORMANCE).type(' ')
    
})

Cypress.Commands.add('mensagemDeErro', () => {
    cy.get(MENSSAGEM_ERRO).should('be.visible').and('contain.text', msgErro)
})