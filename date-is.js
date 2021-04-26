
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

        console.log(objectDate1.getFullYear())

        if (objectDate1.toString() !== "Invalid Date" && objectDate2.toString() !== "Invalid Date"){
                if (objectDate1.toString().length>7 && objectDate2.toString().length> 7){
                    //console.log(objectDate1,objectDate2)
                    if (objectDate1.getFullYear() > objectDate2.getFullYear()){
                        return true
                    }
                }

        }
    }
    return false
}