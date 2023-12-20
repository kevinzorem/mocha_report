const cypress = require('cypress')
const fse = require('fs-extra')
const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')
// Ejecuta el test y añade los specs que se han ejecutado anteriormente.
async function runTests() {
   await fse.remove('mochawesome-report') // remove the report folder
   const { totalFailed } = await cypress.run() // get the number of failed tests
   // el merge que hace, requiere que en cypress.config.js tenga reportOptions: overwrite: false,
   const jsonReport = await merge() // generate JSON report
   await generator.create(jsonReport)
   process.exit(totalFailed) // exit with the number of failed tests
}
runTests()