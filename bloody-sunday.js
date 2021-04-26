
function bloodySunday(date){
    let date001 = new Date("0001-01-01")
    let result = (date - date001) % 6
    console.log(result, date-date001)

switch ( result ){
    case 1:
        return "Monday"
    case 2:
        return "Tuesday"
    case 3:
        return "Wednesday"
    case 4:
        return "Friday"
    case 3:
        return "Saturday"
}
}
