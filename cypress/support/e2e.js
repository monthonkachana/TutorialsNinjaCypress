// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
//https://www.npmjs.com/package/cypress-mochawesome-reporter
import 'cypress-mochawesome-reporter/register';
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
    cy.get('#input-email').type(email);
    cy.get('#input-password').type(`${password}{enter}`);
  });
  
// Alternatively you can use CommonJS syntax:
// require('./commands')