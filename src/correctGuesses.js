function correctGuessesFunc(word, guess, correctGuessesArray){
    let count = 0;

    if(correctGuessesArray.length == 0){
        correctGuessesArray = Array(word.length).fill('');
    }

    for(let i = 0; i < word.length; i++){
        if(word[i] == guess){
            correctGuessesArray.splice(i, 1, word[i])
        }
        count ++
    }

    return correctGuessesArray
}

module.exports = correctGuessesFunc;