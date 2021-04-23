function isWinner(country){

    return new Promise(function (resolve, reject){

        db.getWinner(country)
            .then((country) =>{
                if (country.continent  !== "Europe"){
                    resolve(country + ' is not what we are looking for because of the continent')
                }

                db.getResults(country.id)
                    .then((countryResult) => {

                        if(countryResult.length === 0){
                            resolve(country + ' never was a winner')
                        }else if(countryResult.length < 3){
                            resolve(country + ' is not what we are looking for because of the number of times it was champion')
                        }else{
                            countryResult.forEach((obj) => {
                                console.log(typeof obj)
                            })
                        }

                    })
                    .catch((noWinWC) => {reject(country + ' never was a winner')})
            })

    })
}


//Promise { { id: 7, name: 'England', continent: 'Europe' } }