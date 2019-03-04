const assert = require('assert');
const jsdom = require('mocha-jsdom')
const correctGuesses = require('../src/correctGuesses')
const winFunc = require('../src/winFunc');

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
        let word = ['t', 'e', 's', 't']
        let guess = 'e'
        let correctGuessesArray = ['t', '', '', 't']
        correctArray = correctGuesses(word, guess, correctGuessesArray)
        assert.deepEqual(correctArray, ['t','e','','t'])
    })
    
    it('tests check for win function', () => {
        let word = ['t', 'e', 's', 't'];
        let correctGuessesArray = ['t', 'e', 's', 't']
        let win = winFunc(word, correctGuessesArray)
        assert.equal(win, true)
    })

    it('tests win func returns false if not a match', () => {
        let word = ['f', 'a', 'i', 'l'];
        let correctGuessesArray = ['t', '', '', 't'];
        let win = winFunc(word, correctGuessesArray);
        assert.equal(win, false)
    })
})