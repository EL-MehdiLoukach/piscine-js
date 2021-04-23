function isWinner(country){

    return new Promise(function (resolve, reject){

        let isWinner = db.isWinner(country)

        console.log(isWinner)
    })

}