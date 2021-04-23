function isWinner(country){

    return new Promise(function (resolve, reject){

        db.getWinner(country)
            .then((country) =>{
                console.log(country.id)
            })

    })

}


//Promise { { id: 7, name: 'England', continent: 'Europe' } }