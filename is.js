const is = {}

is.num = function(number){
    let a = typeof number

    if (a=="string"){
        return true
    }
    return false
}
