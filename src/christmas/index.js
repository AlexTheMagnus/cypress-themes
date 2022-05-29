/// <reference types="cypress" />
const { join } = require('path')
const {
  getSourceFolder,
  hasFailed,
  loadTheme,
  loadSubtheme,
  stubMediaQuery
} = require('../utils')

/* eslint-env mocha, browser */
before(loadTheme('christmas'))
before(stubMediaQuery())

const santaLaughs = () => {
  const filename = join(getSourceFolder(), 'christmas/santa-laugh.mp3')
  cy.readFile(filename, 'base64', { log: false }).then(mp3 => {
    const uri = 'data:audio/mp3;base64,' + mp3
    const audio = new Audio(uri)
    audio.play()
  })
}

after(() => {
  if (!hasFailed()) {
    loadSubtheme('christmas-all-tests-pass')
    santaLaughs()
  }
})
