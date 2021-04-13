function citiesOnly(arrayObject){
    const array = arrayObject.map((element)=>{
        return element.city
    })
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
    console.log(tableau)
}

function fahrenheitToCelsius(arraytemperatures){
    const tableau =  arraytemperatures.map((temperature)=>{
        let a = parseInt(temperature.slice(0,temperature.indexOf("°")))
        return Math.round((a - 32 ) * 5/9).toString() + " ° C "
    })
    console.log(tableau)
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
        return b
    })
}

function tempForecasts(arrayObjects){

    const a = arrayObjects.map((element)=>{
        let temp = element.temperature
        let number  = Math.round((temp.slice(0,temp.indexOf("°") - 1) -32 )* 5/9)
        return `${number}°Celsius in ${element.city[0].toUpperCase() + element.city.slice(1)}, ${element.state[0].toUpperCase() + element.state.slice(1)}`
    })
    console.log(a)
}

tempForecasts([
    {
      city: 'Pasadena',
      temperature: ' 101 °F',
      state: 'california',
      region: 'West',
    }
  ])