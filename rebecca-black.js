
function isFriday(date){
    console.log(date.getDay())
    if (typeof date =="object"){
        if (date.getDay() === 5){
            return true
        }
    }
    return false
}