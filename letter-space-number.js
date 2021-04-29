
function letterSpaceNumber(str){
    let array = []
    let reg = /\w \d /g
    let a = str.match(reg)

    a.forEach((element)=>{
        array.push(element.slice(0,-1))
    })

    return array
}

console.log(letterSpaceNumber("He is 8 or 9 years old, not 10."))