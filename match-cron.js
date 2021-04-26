
function matchCron(cron,date){
    let minutes = date.getMinutes()
    let hour = date.getHours()
    let day = date.getDate()
    let month = date.getMonth() +1
    let dayWeek = date.getDay()
    let arrayCron = cron.split(" ")
    let compteur = 0
    let compt2 = 0

    for (let i = 0; i <= 4;i++){
        if (!arrayCron[i].includes("*")){
            compteur++
        }
    }

    for (let i =0;i<arrayCron.length;i++){
        if (arrayCron[i].includes("*") === false){
            if (arrayCron[i] == minutes && i ===0){
                compt2++
                continue
            }

            if (arrayCron[i] == hour && i ===1){
                compt2++
                continue
            }

            if (arrayCron[i] == day && i ===2){
                compt2++
                continue
            }

            if (arrayCron[i] == month && i ===3){
                compt2++
                continue
            }

            if (arrayCron[i] == dayWeek && i ===4){
                compt2++
                continue
            }
        }
    }

    if (compt2 === compteur){
        return true
    }

    return false
}
console.log(matchCron('3 3 * 3 3', new Date('2021-03-02 03:03:00')))