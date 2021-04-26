
function isValid(date){
    if (!isNaN(date)){
        let a =  new Date(date)
        return a.toString() !== "Invalid Date";
    }
    return false
}

function isAfter(date1,date2){
    console.log(isNaN(date1))
    if (typeof date1 =="object" && typeof date2 == "object"){
        console.log("hello")
    }
    return false
}