
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
        if (Number.isInteger(date.getFullYear() / 4) && !Number.isInteger(date.getFullYear()/100)){
            if (Number.isInteger(date.getFullYear() /400)){
                return true
            }
        }
    }
    return false
}