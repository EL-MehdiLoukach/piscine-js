function isWinner(country){

    return new Promise(function (resolve, reject){

        db.getWinner(country)
            .then((countryObject) =>{

                if (countryObject.continent  !== "Europe"){
                    resolve(countryObject.name + ' is not what we are looking for because of the continent')
                }

                db.getResults(countryObject.id)
                    .then((countryResult) => {

                        if(countryResult.length === 0){
                            resolve(`${countryObject.name} never was a winner`)
                        }else if(countryResult.length < 3){
                            resolve(`${countryObject.name} is not what we are looking for because of the number of times it was champion`)
                        }else{
                            let arrayYears = []
                            let arrayScores = []
                            countryResult.forEach((obj) => {
                                arrayYears.push(obj.year)
                                arrayScores.push(obj.score)
                            })
                            resolve(countryObject.name + ' won the FIFA World Cup in ' + arrayYears.toString().split(",").join(", ") + ' winning by ' + arrayScores.toString().split(",").join(", "))
                        }

                    })
                    .catch((noWinWC) => {reject(`${noWinWC} never was a winner`)})
            })
            .catch(() => {
                resolve(`${country} never was a winner`)
            })

    })
}


//Promise { { id: 7, name: 'England', continent: 'Europe' } }