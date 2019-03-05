function fetchWord(){
    let word = 'portland'
    wordArray = word.toLowerCase().split('')
    return wordArray
}

module.exports = fetchWord