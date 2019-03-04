const assert = require('assert');
const jsdom = require('mocha-jsdom')
const correctGuesses = require('../src/correctGuesses')

const addGuess = require('../src/addGuess');

describe('tests addGuess function', () => {

    it('tests function that adds correct guess to array in right intdex', () => {
        word = ['t', 'e', 's', 't']
        guess = 't'
        correctArray = correctGuesses(word, guess)
        assert.deepEqual(correctArray, ['t','','','t'])
    })
    
})