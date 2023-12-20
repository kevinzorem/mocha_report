import '../../support/commands';

function navigateTablePage () {
    //cy.getPageCustom('/webtables')
    cy.clickCustom(cy.get('div').contains('Elements'));
    cy.waitForCustom(1);
    cy.clickCustom(cy.get('span').contains('Web Tables'));
}

function searchQuery  (query) {
    cy.get('#searchBox').click().type(query)
}

function getNumberNonEmptyRows(rowElement, cellElement) {
    let nonEmptyRows = 0;
   
    function iterateRows(i) {
      if (i < 10) {
        return cy.get(rowElement).eq(i).children('.rt-tr').eq(0).children(cellElement).eq(1).invoke('text').then((text) => {
          if (text.length > 2) {
            nonEmptyRows = nonEmptyRows + 1;
          }
   
          return iterateRows(i + 1);
        });
      } else {
        cy.log("celdas no vacías", nonEmptyRows);
        // Utilizar cy.wrap() para convertir el valor en una promesa Cypress
        return cy.wrap(nonEmptyRows);
      }
    }
   
    // Iniciar el proceso con la primera fila
    return iterateRows(0);
  }
   
  function validateContentMatch(rowElement, query) {
    // Utilizar cy.then() para manejar la promesa dentro de Cypress
    cy.then(() => {
      return getNumberNonEmptyRows(rowElement, '.rt-td').then((numberElements) => {
        cy.log("numero de Filas", numberElements);
   
        // Utilizar un bucle Cypress en lugar de un bucle JavaScript para sincronización
        Cypress._.times(numberElements, (i) => {
          cy.get(rowElement).eq(i).should('contain', query);
        });
      });
    });
  }
   
  function validateMatches(query) {
    // Llamar a validateContentMatch con el número fijo de elementos
    return validateContentMatch('.rt-tr-group', query);
  }
   
  function asyncOperation() {
    return new Cypress.Promise((resolve) => {
      setTimeout(() => {
        // Cambiar el resolve a un número para que coincida con la expectativa de validateContentMatch
        getNumberNonEmptyRows('.rt-tr-group', '.rt-td').then((numberElements) => {
          resolve(numberElements);
        });
      }, 1000);
    });
  }

  
 async function getLenghtTables (rowElement){
    cy.get(rowElement).should('exist');

    const elements= await cy.get(rowElement)
    return elements.length 
 }
 

 
module.exports = {
    navigateTablePage,
    searchQuery,
    validateMatches,

  };