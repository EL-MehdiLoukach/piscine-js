function isWinner(country){

    return new Promise(function (resolve, reject){

        let isWinner = db.getWinner(country)

        console.log(isWinner)
    })

}