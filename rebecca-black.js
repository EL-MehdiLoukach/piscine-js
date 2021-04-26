
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
        if (Number.isInteger(date.getFullYear() / 4) === true && Number.isInteger(date.getFullYear()/100) === false){
            if (Number.isInteger(date.getFullYear()/400) === false){
                return true
            }
        }
    }
    return false
}
console.log(isLeapYear(new Date('2020-06-05')))