import {calculetteObjet} from "/JS/Librairie/function.js"

window.onload = () => { /*Evenement quie me permet de voir si la fenêtre du navigateur est bien chargée*/ 

    const elements = document.querySelectorAll(".col-calculette-1 .ligne-calculette >*") /*Je récupère tous les elts fils direct de ligne-calculette*/ 
    const ecran = elements[0]
    const annuler = elements[1]
    const supp = elements[2]
    const touches = ([].slice.call(elements)).slice(3)

    calculetteObjet.initEvent(touches)

}

