var masofaElement = document.getElementById("input")
var tezlikElement = document.getElementById("tezlik")
var btnElement = document.getElementById("btn")
var resultPiyoda = document.getElementById("resultPiyoda")
var resultVelosiped = document.getElementById("resultVelosiped")
var resultMashina = document.getElementById("resultMashina")
var resultSamolyot = document.getElementById("resultSamolyot")
var formElement = document.getElementById("form")

function hisobla(masofa,tezlik){
    var result = masofa/tezlik
    return `${Math.floor(result)} hour(s) ${Math.floor((result-Math.floor(result))*60)}minute(s)`
}

// function hisobla(masofa,tezlik){
//     var result = masofa/tezlik
//     return `${Math.floor(result)} soat ${Math.floor(result-Math.floor(result))*60}minut ${Math.floor(Math.floor(result))*60}sicund`
// }

var piyoda = 3.6
var velosiped = 20.1
var mashina = 70
var samolyot = 800

formElement.addEventListener('submit',(event) => {
    event.preventDefault()
    console.log("input jonatildi")

    if(masofaElement.value == "" || masofaElement.value == 0){
        resultPiyoda.textContent = "The distance was entered incorrectly"
        resultPiyoda.style.color = "red"
        
        resultVelosiped.textContent = "The distance was entered incorrectly"
        resultVelosiped.style.color = "red"

        resultMashina.textContent = "The distance was entered incorrectly"
        resultMashina.style.color = "red"

        resultSamolyot.textContent = "The distance was entered incorrectly"
        resultSamolyot.style.color = "red"
    }else{
        resultPiyoda.textContent = hisobla(Number(masofaElement.value),piyoda)
        resultPiyoda.style.color = "green"

        resultVelosiped.textContent = hisobla(Number(masofaElement.value),velosiped)
        resultVelosiped.style.color = "green"

        resultMashina.textContent = hisobla(Number(masofaElement.value),mashina)
        resultMashina.style.color = "green"

        resultSamolyot.textContent = hisobla(Number(masofaElement.value),samolyot)
        resultSamolyot.style.color = "green"

    }
})


// function hisobla(masofa,tezlik){
//     var result = masofa/tezlik
//     return `${Math.floor(result)} soat ${Math.floor(result-Math.floor(result))*60}minut ${Math.floor(Math.floor(result))*60}sicund`
// }