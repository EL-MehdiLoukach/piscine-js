
function isValid(date){
    if (!isNaN(date)){
        let a =  new Date(date)
        return a.toString() !== "Invalid Date";
    }
    return false
}

function isAfter(date1,date2){

    if (typeof date1 =="object" && typeof date2 == "object"){
        let objectDate1 = new Date(date1)
        console.log(objectDate1)
    }
    return false
}