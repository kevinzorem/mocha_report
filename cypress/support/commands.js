Cypress.Commands.add('getPageCustom', (page) => {
    cy.visit(page);
  });

Cypress.Commands.add('clickCustom', (element) => {
  element.should('be.visible', { timeout: 5000 }).click();
});

Cypress.Commands.add('textCustom', (element,text) => {
  element.should('be.visible', { timeout: 5000 }).should('be.enabled', { timeout: 5000 }).type(text);
});

Cypress.Commands.add('waitForCustom', (seconds) => {
  cy.wait(seconds*1000);
});

Cypress.Commands.add('scrollBottomCustom', (seconds) => {
  cy.scrollTo('bottom')
});

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught Exception:', err.message);
  return false;
});

Cypress.config({ defaultCommandTimeout: 10000 });