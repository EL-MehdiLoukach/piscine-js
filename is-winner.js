function isWinner(country){

    return new Promise(function (resolve, reject){

        db.getWinner(country)
            .then((country) =>{
                db.getResults(country.id)
                    .then((countryResult) => {
                        console.log(countryResult.length)
                    })
            })

    })
}


//Promise { { id: 7, name: 'England', continent: 'Europe' } }