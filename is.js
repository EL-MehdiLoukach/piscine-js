
is.num = function(number){
    let a = typeof number

    if (a=="string"){
        return true
    }
    return false
}

is.nan = function(number){
    let a = typeof number

    if (a=="NaN"){
        return true
    }
    return false
}
