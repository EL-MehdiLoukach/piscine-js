
function letterSpaceNumber(str){
    let array = []
    let reg = /[a-zA-Z0-9_]  [0-9] /
    console.log(str.match(reg))
}