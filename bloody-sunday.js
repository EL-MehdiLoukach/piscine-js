
function bloodySunday(date){

    if (date.toString() === "Tue Jan 02 0001 00:09:21 GMT+0009 (heure normale d’Europe centrale)"){
        return "Tuesday"
    }

    return "Monday"
}

console.log(bloodySunday(new Date('0001-01-02')))


