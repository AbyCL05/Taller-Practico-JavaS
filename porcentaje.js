
const calcularBoton = document.querySelector("button")
const mostrar = document.querySelector(".precio-final")

calcularBoton.addEventListener("click", ejecutarCalculoPorcentaje)

function ejecutarCalculoPorcentaje() {
    const precio = document.querySelector("#precio").value
    const descuento = document.querySelector("#descuento").value
    const formula = (precio*(100 - descuento) / 100) 
    mostrar.innerText = "El precio final es: " + formula
}

