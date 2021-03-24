import {styles} from './pimp-my-style.data.js'

let compteur = 0
let compteurInv = styles.length - 1
let reverse =  false
export function pimp(){
    let element = document.getElementsByClassName("button")

    if (compteur == styles.length){
        reverse  = true
    }

    if (compteur < styles.length && !reverse){
        element[0].classList.add(styles[compteur])
        compteur++
        compteurInv = styles.length -1
    }

    if (reverse){

        if (compteurInv==styles.length-1){
            element[0].classList.toggle("unpimp")
        }

        if (compteurInv >= 0){
            element[0].classList.remove(styles[compteurInv])
            compteurInv--
        }
        compteur = 0

        if (compteurInv==-1){
            reverse =  false
            element[0].classList.toggle("unpimp")
        }
    }
}