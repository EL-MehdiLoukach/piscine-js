function citiesOnly(arrayObject){
    const array = arrayObject.map((element)=>{
        return element.city
    })
    return array
}


function upperCasingStates(arrayCities){
    const tableau = arrayCities.map((element)=>{
        let name = element[0].toUpperCase()
        let a  = false
        for (let i = 0; i < element.length ; i++){

            if (a){
                name += element[i].toUpperCase()
                a = false
                continue
            }
            
            if(element[i] == " "){
                a = true
            }

            if (i != 0){
                name += element[i]
            }
        }
        return name
    })
    return tableau
}

function fahrenheitToCelsius(arraytemperatures){
    const tableau =  arraytemperatures.map((temperature)=>{
        let a = parseInt(temperature.slice(0,temperature.indexOf("°")))
        let result = Math.floor(((a - 32 ) * 5/9)).toString() +"°C"
        return result
    })
    return tableau
}

function trimTemp(arrayObjects){

    const a = arrayObjects.map((element)=>{
        let b = ""
        for (let i = 0;i< element.temperature.length;i++){
            if(element.temperature[i] == " "){
                b += ""
            }else{
                b += element.temperature[i]
            }
        }
        element.temperature = b
        return element
    })
    console.log(a)
    return a 
}

trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   '},
    { city: 'San Francisco', temperature: ' 84 ° F   '},
  ])

function tempForecasts(arrayObjects){

    const a = arrayObjects.map((element)=>{
        let temp = element.temperature
        let number  = Math.round((temp.slice(0,temp.indexOf("°") - 1) -32 )* 5/9)
        let name = element.region[0].toUpperCase()
        let b = false
        for (let i = 0; i < element.region.length ; i++){

            if (b){
                name += element.region[i].toUpperCase()
                b = false
                continue
            }
            
            if(element.region[i] == " "){
                b = true
            }

            if (i != 0){
                name += element.region[i]
            }
        }
        return `${number}°Celsius in ${element.city[0].toUpperCase() + element.city.slice(1)}, ${name}`
    })
    return a 
}
