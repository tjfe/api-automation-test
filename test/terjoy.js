'use strict'

const Terjoy = require('terjoy-api/src')
const joi = require('@hapi/joi')
const chai = require('chai')

class Test extends Terjoy {
  static get joi() {
    return joi
  }
  static get chai() {
    return chai
  }
}

module.exports = Test
