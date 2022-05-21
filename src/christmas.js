const { loadTheme, stubMediaQuery } = require('./utils')

/* eslint-env mocha, browser */
before(loadTheme('christmas'))
before(stubMediaQuery())
