function isWinner(country){

    return new Promise(function (resolve, reject){

        db.getWinner(country)
            .then((country) =>{
                db.getResults(country.id)
                    .then((element) => console.log(element))
            })

    })

}


//Promise { { id: 7, name: 'England', continent: 'Europe' } }