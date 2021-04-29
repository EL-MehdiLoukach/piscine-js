
function letterSpaceNumber(str){
    let reg = /\w \b\d\b/g
    return str.match(reg) ?? []

}

console.log(letterSpaceNumber("It's 20 past 3"))