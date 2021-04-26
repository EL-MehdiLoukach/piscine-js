
function bloodySunday(date){
    let date001 = new Date("0001-01-01")
    let result = (date - date001) % 6
    console.log(result, date-date001)

    switch ( result ){
        case 0:
            return "Monday"
        case 1:
            return "Tuesday"
        case 2:
            return "Wednesday"
        case 3:
            return "Thursday"
        case 4:
            return "Friday"
        case 5:
            return "Saturday"
    }
}
