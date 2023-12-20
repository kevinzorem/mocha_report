import 'cypress-file-upload'; // Import the Cypress file upload plugin for handling file uploads

const uploadFilePage = require('../pages/uploadFilePage'); // Import the Page Object
let webElement; // Declare a variable to hold the elements json from the fixture
describe('01.Uploading a file succesfully', () => {
    it('go to upload files',()=>{
        uploadFilePage.goUploadFilePage(); // Navigate to the file upload page before each test
        cy.fixture('elements').then(elements => {
            webElement = elements;
        });
    }) 

    it('Uploads a file and clicks the upload button', () => {
        cy.intercept('POST', 'https://exif.tools/upload.php').as('fileUpload'); // Intercept the POST request to the specified URL and assign it an alias
        uploadFilePage.upload(webElement.uploadFileInput, '00001_200114_cilcn_mager_zyl0_fe1_DiagRA_1.xml')
        uploadFilePage.clickOnUpload(webElement.uploadFileButton);
        uploadFilePage.interceptResponse();
        uploadFilePage.validateMetadata(webElement);
    })

})

describe('02.Uploading a file unsuccesfully', () => {
    it('go to upload files',()=>{
        uploadFilePage.goUploadFilePage(); // Navigate to the file upload page before each test
        cy.fixture('elements').then(elements => {
            webElement = elements;
        });
    }) 

    it('Uploads a file and clicks the upload button', () => {
        cy.intercept('POST', 'https://exif.tools/upload.php').as('fileUpload');
        uploadFilePage.upload(webElement.uploadFileInput, 'report-8728494985452779519.xml')
        uploadFilePage.clickOnUpload(webElement.uploadFileButton);
        uploadFilePage.interceptResponse();
        uploadFilePage.validateMetadata(webElement);
    })

})
