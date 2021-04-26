
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
        if (Number.isInteger(date / 4) && !Number.isInteger(date/100)){
            if (Number.isInteger(date /400)){
                return true
            }
        }
    }
    return false
}