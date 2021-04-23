function isWinner(country){

    return new Promise(function (resolve, reject){

        console.log(db.getWinner(country))
    })

}