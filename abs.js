function isPositive(number){
    if (number > 0){
        return true
    }else{
        return false
    }
}

function abs(number){
    if (number > 0){
        return number
    }else if (number ==0){
        return 0
    }else{
        word = number.toString()
        a= word.substr(1,word.length -1)
        b = parseInt(a)

        return b
    }
}