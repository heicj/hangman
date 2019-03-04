function winFunc(word, correctGuessesArray){
    for(let i = 0; i < word.length; i++){
        if(word[i] != correctGuessesArray[i]){
            return false
        }
        else{
            return true
        }
    }
}

module.exports = winFunc