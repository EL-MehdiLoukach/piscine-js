
function isValid(date){
    if (isNaN(date)){
        let a =  new Date(date)
        return a.toString() !== "Invalid Date";
    }
    return false
}

console.log(isValid("2021-04-26T07:39:35.664Z"))