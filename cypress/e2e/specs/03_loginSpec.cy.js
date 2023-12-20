const loginStepDefinition = require('../pages/loginPage');

describe('05.Verify user and password correct', () => {
  it('enter to web and login',()=>{
    cy.clearAllCookies();
    loginStepDefinition.goLoginPage();
    loginStepDefinition.login();
  })  
 
  it('verify if user is logged', () => {
    loginStepDefinition.verifyLogin();
  })
})