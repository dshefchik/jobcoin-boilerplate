#!/usr/bin/env node
/* eslint no-unused-expressions: 0 */
'use strict'

const describe = require('chai').describe
const expect = require('chai').expect
const it = require('chai').it

const utils = require('../utils')

describe('utils', () => {
  it('should exist', () => {
    expect(utils).to.not.be.undefined
  })

  it('generateDepositAddress generates a string with 8 characters', () => {
    const depositAddress = utils.generateDepositAddress()
    expect(typeof depositAddress).to.equal('string')
    expect(depositAddress).to.have.length(8)
  })
})
