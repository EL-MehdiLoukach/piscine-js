
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

function isLastDayOfMonth(date){
    if (typeof date =="object"){
        let yearBissex =  isLeapYear(date)
        let day = date.getDate()
        let month =  date.getMonth() + 1

        if (yearBissex){
            if(month % 2 ===0){
                if(month ===2 && day=== 29){
                    return true
                }else if(day === 31 ){
                    return true
                }
            }else{
                if(day ===30){
                    return true
                }
            }
        }else{
            if(month % 2 ===0){
                if(month ===2 && day=== 28){
                    return true
                }else if(day === 31 ){
                    return true
                }
            }else{
                if(day ===30){
                    return true
                }
            }
        }
    }
    return false
}

console.log(isLastDayOfMonth(new Date('2020-02-29')))
//console.log(isLastDayOfMonth(new Date('2015-9-30')))