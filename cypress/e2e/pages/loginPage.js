import '../../support/commands';

function goLoginPage()
{
  cy.getPageCustom('/books')
}

function login() {
  cy.fixture('elements').then(elements => {
    cy.clickCustom(cy.get('span').contains('Login'));
    cy.get('input[placeholder="UserName"]').type(elements.username);
    cy.get('input[placeholder="Password"]').type(elements.password);
    cy.clickCustom(cy.get('button').contains('Login'));
  });
  
  }

function verifyLogin(){
  cy.wait(2000);
  cy.url().should("contains", "/profile");
}

module.exports = {
    goLoginPage,
    login,
    verifyLogin
  };