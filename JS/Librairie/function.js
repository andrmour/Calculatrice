const elements = document.querySelectorAll(".col-calculette-1 .ligne-calculette >*") /*Je récupère tous les elts fils direct de ligne-calculette 1*/
let operators = document.querySelectorAll(".col-calculette-2 .ligne-calculette >*") /*Je récupère tous les elts fils direct de ligne-calculette 2*/
const ecran = elements[0]
const annuler = elements[1]
const result = operators[0]
const egal = operators[operators.length-1]
operators = [].slice.call(operators).slice(1, operators.length-1) /*On construit un tableau pour récupérer les opérateurs en partant du deuxième elts (le premier étant l'écran de résultat) jusqu'à l'avant dernier*/ 
let operatorSelected = false
const supp = elements[2]

export const calculetteObjet = {
    initEvent: (touches) => {
        console.log(operators);
        annuler.addEventListener("click", calculetteObjet.initAnnuler) /* C'est ici qu'on définit les évenements*/ 
        supp.addEventListener("click", calculetteObjet.initSupp)       /* C'est ici qu'on définit les évenements*/ 
        egal.addEventListener("click", calculetteObjet.initEgal)       /* C'est ici qu'on définit les évenements*/ 
        if (touches.length) {
            touches.forEach(touche => {
                touche.addEventListener('click', () => {
                    const value = touche.innerText
                    ecran.value += value /*Pour ajouter la valeur sur l'écran*/ 
                    result.value = "" /*Dès lors qu'on appuie sur une touche le résultat disparaît*/ 
                    console.log(value)
                    operatorSelected = false
                })
            });
        }
        if (operators.length) {
            operators.forEach(operator => {
                operator.addEventListener('click', () => {
                    if(!operatorSelected){
                        const value = operator.innerText
                        ecran.value += value /*Pour ajouter la valeur sur l'écran*/
                        result.value = "" 
                        console.log(value)
                        operatorSelected = true
                    } 
                })
            });
        }
    },
    initAnnuler: ()=>{
        ecran.value = "" /*Pour que lorsque on appuie sur "annuler", les valeurs de l'écran disparaissent*/ 
        result.value = "" /*Pour que dès qu'on annule le résultat s'efface aussi*/
    },
    initSupp: ()=>{
        ecran.value = ecran.value.substring(0, ecran.value.length -1 )
        result.value = "" /*Pour que dès qu'on supprime le résultat s'efface aussi*/ 
        operatorSelected = false
    },
    initEgal: ()=>{
        if(!operatorSelected){
            result.value = eval(ecran.value) /*eval, fonction pour calculer l'expression*/ 
        }
    }
}