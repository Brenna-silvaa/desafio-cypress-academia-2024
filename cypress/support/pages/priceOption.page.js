const BTN_SELECIONAR_PRECO = '#selectultimate'
const BTN_NEXT_PRECO = '#nextsendquote'

Cypress.Commands.add('validarInputPreco', () => {
    cy.get(BTN_SELECIONAR_PRECO).check({ force: true })
})

Cypress.Commands.add('clicarBotaoPreco', () => {
    cy.get(BTN_NEXT_PRECO).click()
})