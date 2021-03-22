function repeat(words,number){
    let stockWords = ""
    let numbers = parseInt(number)
    if (number==0){
        return ""
    }else if (number<0){
        return RangeError
    }

    for (let i=0;i<=numbers;i++){
        stockWords += words
    }

    return stockWords
}