
function isFriday(date){
    if (typeof date =="object"){
        if (date.getDay() === 4){
            return true
        }
    }
    return false
}