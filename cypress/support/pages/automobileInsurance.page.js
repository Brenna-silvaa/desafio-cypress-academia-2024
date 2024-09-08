const BTN_AUTOMOVEIS = '#nav_automobile'

Cypress.Commands.add('entrarAutomoveis', () => {
    cy.get(BTN_AUTOMOVEIS).click()
})