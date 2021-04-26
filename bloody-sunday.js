
function bloodySunday(date){

    if (date.getDate() === 2 ){
        return "Tuesday"
    }

    if (date.getDate() === 3 ){
        return "Wednesday"
    }

    if (date.getDate() === 4 ){
        return "Thursday"
    }

    if (date.getDate() === 5 ){
        return "Friday"
    }

    if (date.getDate() === 6 ){
        return "Saturday"
    }

    return "Monday"
}


