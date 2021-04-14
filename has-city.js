function hasCity(country, arrayCities){

    return function(city){
        for (let i =0; i < arrayCities.length;i++){
            if (arrayCities[i]== city){
                return `${city} is a city from ${country}`
            }
        }
        return `${city} is not a city from ${country}`
    }
}