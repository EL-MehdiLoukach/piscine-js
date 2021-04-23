function isWinner(country){

    return new Promise(function (resolve, reject){

        let countryInWC = db.getWinner(country)

        console.log(typeof countryInWC)

    })

}


//Promise { { id: 7, name: 'England', continent: 'Europe' } }