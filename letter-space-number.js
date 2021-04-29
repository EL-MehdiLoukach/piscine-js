
function letterSpaceNumber(str){
    let array = []
    let reg = /\w \d /g
    let a = str.match(reg)

    if (a == null){
        return []
    }

    a.forEach((element)=>{
        array.push(element.slice(0,-1))
    })

    return array
}

console.log(letterSpaceNumber("I like 7up."))