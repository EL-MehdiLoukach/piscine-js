
function sameAmount(str,reg1,reg2){
    let arr1 = str.match(reg1) ?? []
    let arr2 = str.match(reg2) ?? []

    console.log(reg1,reg2)

    if (arr1.length == arr2.length){
        return true
    }
    return false
}