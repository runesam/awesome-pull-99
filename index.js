module.exports = {
  generateRandomString,
  call
}

const adjectives = require('adjectives')
const animals = require('animals')
const random = require('random-number-in-range')

function generateRandomString () {
  return [adjectives[random(0, adjectives.length - 1)], animals(), random(10, 99)].join('-')
}

function call () {
  return 123
}

call()
