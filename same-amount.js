
function sameAmount(str,reg1,reg2){
    let re1 = new RegExp(reg1,"g")
    let re2 = new RegExp(reg2,"g")

    let arr1 = str.match(re1) ?? []
    let arr2 = str.match(re2) ?? []

    console.log(re1)

    if (arr1.length === arr2.length){
        return true
    }

    return false
}