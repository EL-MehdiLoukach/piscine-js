
function letterSpaceNumber(str){
    let array = []
    let reg = /\w \d /g
    console.log(str.match(reg))
}

letterSpaceNumber("He is 8 or 9 years old, not 10.")