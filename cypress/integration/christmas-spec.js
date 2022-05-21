/// <reference types="cypress" />

// usually we load theme from "cypress/support/index.js"
// but since we are checking multiple themes, each spec file
// loads its own
require('../../src/christmas')

// Avoid Cypress failing on webpage exception
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

/*
  Several tests that show how Cypress test runner looks with
  a custom color theme
*/
describe('Cypress themes', { baseUrl: 'https://www.pinterest.es/search/pins/?q=Christmas' }, () => {
  before(() => {
    cy.visit('/')
    cy.get('[data-test-id="login-button"]').should('be.visible')
    cy.get('[data-test-id="signup-button"]').should('be.visible')
    cy.get('[data-test-id="search-input"]').should('have.value', 'Christmas/').should('be.visible').wait(2000)
  })

  it('has failing test if needed', () => {
    expect(1).to.equal(1)
    // expect(1).to.equal(2)
  })

  it('has passing test', () => {
    expect(1).to.equal(1)
    cy.screenshot('christmas', {capture: 'runner', overwrite: true})
  })

  it('has skipped test')
})
describe('passing suite', () => {
  it('has 1 passing test', () => {})
})
describe('skipped suite', () => {
  it('is empty')
  it('is also empty')
})
