
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
        let objectDate2 = new Date(date2)

        if (objectDate1.toString() !== "Invalid Date" && objectDate2.toString() !== "Invalid Date"){
            if(objectDate1.getFullYear() <= 2021 && objectDate2.getFullYear() <= 2021){
                if (objectDate1.getFullYear() > objectDate2.getFullYear()){
                    console.log("hello")
                    return true
                }
            }
        }
    }
    return false
}