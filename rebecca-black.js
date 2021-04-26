
function isFriday(date){
    if (typeof date =="object"){
        if (date.getDay() === 5){
            return true
        }
    }
    return false
}

function isWeekend(date){
    if (typeof date =="object"){
        if (date.getDay() > 5 ){
            return true
        }
    }
    return false
}

function isLeapYear(date){
    if (typeof date =="object"){
        console.log(date.getFullYear() / 100)
    }
    return false
}