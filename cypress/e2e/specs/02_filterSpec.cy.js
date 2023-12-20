const tablePage = require('../pages/tablePage')
const loginStepDefinition = require('../pages/loginPage');

describe ('03.can filter cases by one key correct',()=>{
    it('enter to web and login',()=>{
        cy.clearAllCookies();
        loginStepDefinition.goLoginPage();
        loginStepDefinition.login();
    })    
    it('enter to filter page',()=>{
        tablePage.navigateTablePage();
    })
    it('can perform a search and succesfully obtain results',()=>{
        tablePage.searchQuery("2000");
        tablePage.validateMatches("2000");
        loginStepDefinition.goLoginPage();
    })   
})

describe ('04.can filter cases by one key incorrect',()=>{
    it('enter to web and login',()=>{
        cy.clearAllCookies();
        loginStepDefinition.goLoginPage();
        loginStepDefinition.login();
    })    
    it('enter to filter page',()=>{
        tablePage.navigateTablePage();
    })
    it('can perform a search and the results should not match',()=>{
        tablePage.searchQuery("2000");
        tablePage.validateMatches("abc");          
    })   
})