const assert = require('assert');
const jsdom = require('mocha-jsdom')
const correctGuesses = require('../src/correctGuesses')

const addGuess = require('../src/addGuess');

describe('tests addGuess function', () => {

    it('tests function that adds correct guess to array in right intdex', () => {
        let word = ['t', 'e', 's', 't']
        let correctGuessesArray = []
        let guess = 't'
        correctArray = correctGuesses(word, guess, correctGuessesArray)
        assert.deepEqual(correctArray, ['t','','','t'])
    })

    it('another test of correct guess insertion', () => {
        word = ['t', 'e', 's', 't']
        guess = 'e'
        let correctGuessesArray = ['t', '', '', 't']
        correctArray = correctGuesses(word, guess, correctGuessesArray)
        assert.deepEqual(correctArray, ['t','e','','t'])
    })
    
})