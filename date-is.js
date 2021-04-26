
function isValid(date){
    if (!isNaN(date)){
        let a =  new Date(date)
        return a.toString() !== "Invalid Date";
    }
    return false
}

function isAfter(date1,date2){
    if (isNaN(date1) && isNaN(date2)){
        console.log("hlleo")
        let objectDate1 = new Date(date1)
        let objectDate2 = new Date(date2)
        if (objectDate1.toString() !== "Invalid Date" && objectDate2.toString()!=="Invalid Date"){
            if(objectDate1.getFullYear()<= 2021 && objectDate2.getFullYear()<= 2021){
                if (objectDate1.getFullYear()> objectDate2.getFullYear()){
                    return true
                }
                return false
            }
        }
    }
    return false
}

console.log(isAfter("2321-12-21T00:00:00.000Z", "2021-04-26T08:24:09.320Z"))