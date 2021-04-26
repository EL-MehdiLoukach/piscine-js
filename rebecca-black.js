
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

        if ((date.getMonth() +1 )%2 === 1){ //31 jours
            if (date.getDate() === 31){
                return true
            }

        }else if ((date.getMonth() + 1)%2 === 0 && yearBissex){ // 30 jours

            if (date.getMonth() === 1 && yearBissex){
                if (date.getDate() === 29){
                    return true
                }
            }

        }else if ((date.getMonth())%2 === 0 && !yearBissex){
            if(date.getMonth() === 1 && !yearBissex){
                if (date.getDate() === 28){
                    return true
                }
            }
        }else{
            if (date.getDate() === 30){
                return true
            }
        }
    }
    return false
}

console.log(isLastDayOfMonth(new Date('2020-02-29')))