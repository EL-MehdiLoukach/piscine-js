
function isValid(date){
    if (!isNaN(date)){
        let a =  new Date(date)
        return a.toString() !== "Invalid Date";
    }
    return false
}

function isAfter(date1,date2){
    let objectDate1 = new Date(date1)
    let objectDate2 = new Date(date2)
    console.log(objectDate1.getFullYear(),objectDate2.getFullYear())

    if (!isNaN(date1) && !isNaN(date2)){
        if (objectDate1.toString() !== "Invalid Date" && objectDate2.toString()!=="Invalid Date" && date1.length >= 7 && date2.length >= 7){
            if(objectDate1.getFullYear()<=2021 && objectDate2.getFullYear()<=2021){
                if (objectDate1.getFullYear() > objectDate2.getFullYear() ){
                    return true
                }else if (objectDate1.getFullYear() === objectDate2.getFullYear() ){
                    if (objectDate1.getMonth()>objectDate2.getMonth()){
                        return true
                    }
                }else {
                    return false
                }
            }
        }
    }
    return false
}