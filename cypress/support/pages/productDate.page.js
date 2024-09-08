const INPUT_DATA_INICIO = '#startdate'
const MENU_VALOR_SEGURO = '#insurancesum'
const MENU_MERITO = '#meritrating'
const MENU_SEGURO_DANOS = '#damageinsurance'
const BTN_ADICIONAIS = '#EuroProtection'
const MENU_CORTESIA = '#courtesycar'
const BTN_NEXT_PRODUTO = '#nextselectpriceoption'

Cypress.Commands.add('validarCamposProduto', () => {
    cy.get(INPUT_DATA_INICIO).type('07/09/2025')
    cy.get(MENU_VALOR_SEGURO).select('25000000')
    cy.get(MENU_MERITO).select('Bonus 8')
    cy.get(MENU_SEGURO_DANOS).select('Full Coverage')
    cy.get(BTN_ADICIONAIS).check({ force: true })
    cy.get(MENU_CORTESIA).select('Yes')
})

Cypress.Commands.add('clicarBotaoProduto', () => {
    cy.get(BTN_NEXT_PRODUTO).click()
})