import '../../support/commands'; 

function goUploadFilePage() {
    cy.getPageCustom('https://exif.tools/'); // Navigate to the specified URL
}

function upload(fileInput, fileName) {
    cy.fixture('files/' + fileName).then(fileContent => { // Load the file from the fixtures
        cy.get(fileInput).attachFile({ fileContent, fileName }); // Attach the file to the file input element
    });
}

function clickOnUpload(uploadBtn) {
    cy.get(uploadBtn).click(); // Click the upload button
}

function interceptResponse() {
    cy.wait('@fileUpload').then(interception => { // Wait for the file upload request to complete
        expect(interception.response.statusCode).to.eq(200); // Assert that the response status code is 200
        cy.log(JSON.stringify(interception.response.body)); // Log the response body to the Cypress command log

    });
}

function validateMetadata(webElement) {
    cy.fixture('file').then(file => { // Load file metadata from a fixture
        // Validate that the file metadata displayed on the page matches the expected values
        cy.get(webElement.file).should('contain', file.name);
        cy.get(webElement.fileSize).should('contain', file.size);
        cy.get(webElement.fileType).should('contain', file.type);
        cy.get(webElement.MIMEType).should('contain', file.MIMEType);
    });
}

module.exports = { 
    goUploadFilePage,
    upload,
    clickOnUpload,
    interceptResponse,
    validateMetadata
};