
export const visibleWithTimeout = (element, timeoutIn = 60000) => {
    cy.log('Element->' + element);
    cy.get(element, {
        timeout: timeoutIn
    }).should('be.visible');
}

export const navigateToURL = (url, timeoutIn = 10000) => {
    //cy.visit(url);
    cy.visit(url, {timeout: timeoutIn});
}

export const click = (element) => {
    cy.get(element).click();
}

export const clickForce = (element) => {
    cy.get(element).click({force: true});
}

export const containClick = (text) => {
    cy.contains(text).click({force: true});
}

export const haveText = (element, text) => {
    cy.get(element).should('have.text', text);
}

export const haveAttribute = (element, attribute, value) => {
    cy.get(element).should('have.attr', attribute, value);
}

export const notHaveAttribute = (element, attribute) => {
    cy.get(element).should('not.have.attr', attribute);
}

export const notHaveText = (element, text) => {
    cy.get(element).should('not.have.text', text);
}

export const haveValue = (element, value) => {
    cy.get(element).should('have.value', value);
}

export const notHaveValue = (element, value) => {
    cy.get(element).should('not.have.value',value);
}

export const waitToHaveText = (element, text, timeoutIn = 10000) => {
    cy.get(element, {timeout: timeoutIn}).should('have.text', text);
}

export const waitToContainText = (element, text, timeoutIn = 10000) => {
    cy.get(element, {timeout: timeoutIn}).should('contain', text);
}

export const waitToNotContainText = (element, text, timeoutIn = 10000) => {
    cy.get(element, {timeout: timeoutIn}).should('not.contain', text);
}

export const exists = (element) => {
    cy.get(element).should('exist');
}

export const notExists = (element) => {
    cy.get(element).should('not.exist');
}

export const visible = (element) => {
    cy.get(element).should('be.visible')
}

export const haveClass = (element, classValue) => {
    cy.get(element).should('have.class', classValue);
}

export const notVisible = (element) => {
    cy.get(element).should('not.be.visible');
}

export const visibleContain = (element, text) => {
    cy.get(element).should('be.visible').should('contain', text);
}

export const existsWithTimeout = (element, timeoutIn = 10000) => {
    cy.get(element, { timeout: timeoutIn }).should('exist');
}

export const notExistsWithTimeout = (element, timeoutIn = 10000) => {
    cy.get(element, { timeout: timeoutIn }).should('not.exist');
}

export const notVisibleWithTimeout = (element, timeoutIn = 10000) => {
    cy.get(element, { timeout: timeoutIn }).should('not.be.visible');
}

export const selectListOption = (element, option) => {
    cy.get(element).select(option);
}

export const selectDropdownOption = (element, option, value) => {
    cy.get(element).select(option).should('have.value', value);
}

export const waitForElementEnabled = (element, timeoutIn = 10000) => {
    cy.get(element, { timeout: timeoutIn }).should('be.enabled');
}

export const waitForElementVisible = (element, timeoutIn = 10000) => {
    cy.get(element, { timeout: timeoutIn }).should('be.visible');
}