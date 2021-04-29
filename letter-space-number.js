
function letterSpaceNumber(str){
    let array = []
    let reg = /\w \d[\D\W]/g
    return str.match(reg)
}

console.log(letterSpaceNumber("He is 8 or 9 years old, not 10."))