const { generateRandomString, call } = require('./../')
const { expect } = require('chai')
const { describe, beforeEach, it } = require('mocha')

call()

describe('general test', () => {
  let string
  beforeEach(() => {
    string = generateRandomString()
  })
  it('gets a string out', () => {
    expect(typeof string).to.equal('string')
  })
  it('string length should be greater than zero', () => {
    expect(string.length).not.to.equal(0)
  })
  it('string should contain exact two numbers', () => {
    expect(/-\d{2}$/.test(string)).to.equal(true)
  })
})
