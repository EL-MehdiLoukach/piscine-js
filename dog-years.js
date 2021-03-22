function dogYears(planet,yearSeconds){
    if (planet == "earth"){
        let secondToMinute = yearSeconds/31557600*7
        let a = secondToMinute.toFixed(2)
        let b = parseFloat(a)
        return b
    }else if (planet == "mercury"){
        let secondOnYear = 0.2408467 * 31557600
        let result = yearSeconds / secondOnYear * 7
        let a = result.toFixed(2)
        let b = parseFloat(a)
        return b
    }else if (planet == "venus "){
        let secondOnYear = 0.61519726 * 31557600
        let result = yearSeconds / secondOnYear * 7
        let a = result.toFixed(2)
        let b = parseFloat(a)
        return b
    }else if (planet == "mars"){
        let secondOnYear = 1.8808158 * 31557600
        let result = yearSeconds / secondOnYear * 7
        let a = result.toFixed(2)
        let b = parseFloat(a)
        return b
    }else if (planet == "jupiter"){
        let secondOnYear = 11.862615 * 31557600
        let result = yearSeconds / secondOnYear * 7
        let a = result.toFixed(2)
        let b = parseFloat(a)
        return b
    }else if (planet == "saturn"){
        let secondOnYear = 29.447498 * 31557600
        let result = yearSeconds / secondOnYear * 7
        let a = result.toFixed(2)
        let b = parseFloat(a)
        return b
    }else if (planet == "uranus"){
        let secondOnYear =  84.016846 * 31557600
        let result = yearSeconds / secondOnYear * 7
        let a = result.toFixed(2)
        let b = parseFloat(a)
        return b
    }else if (planet == "neptune"){
        let secondOnYear =  164.79132 * 31557600
        let result = yearSeconds / secondOnYear * 7
        let a = result.toFixed(2)
        let b = parseFloat(a)
        return b
    }
}