function words(argument){
    const a = argument.split(" ")
    return a
}

function sentence(table){
    let word = ""
    for (let i = 0;i < table.length; i++){
        word = table[i] + " "
    }
    return word
}

function yell(word){
    return word.toUpperCase()
}

function whisper(word){
    let arg = "*"
    arg += word + "*"
    return arg
}

function capitalize(word){
    let maj =word[0]
    maj = maj.toUpperCase()

    number = word.length()-1
    
    min = str.substr(1,number)
    min = min.toLowerCase()
    let words = maj + min
    return words
}