function correctGuesses(word, guess){
    let correctArray = Array(word.length).fill('');
    let count = 0;

    for(let i = 0; i < word.length; i++){
        if(word[i] == guess){
            correctArray.splice(i, 1, word[i])
        }
        count ++
    }

    return correctArray
}

module.exports = correctGuesses;