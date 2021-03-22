function sign( argument){
    if (argument == 0){
        return 0
    }else if(argument > 0){
        return 1
    }else if (argument < 0){
        return -1
    }
}

function sameSign(argument1,argument2){
    if (argument1 > 0 && argument2 > 0){
        return true
    }else if (argument1 < 0 && argument2 < 0){
        return true
    }

    return false
}