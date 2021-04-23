function isWinner(country){

    return new Promise(function (resolve, reject){

        let countryInWC = db.getWinner(country)

        console.log(countryInWC.id)

    })

}


//Promise { { id: 7, name: 'England', continent: 'Europe' } }