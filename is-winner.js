function isWinner(country){

    return new Promise(function (resolve, reject){

        let countryInWC = db.getWinner(country)

        if (typeof countryInWC == "object" ){
            console.log(db.getWinner(countryInWC.id))
        }
    })

}


//Promise { { id: 7, name: 'England', continent: 'Europe' } }