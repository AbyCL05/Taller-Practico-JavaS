
const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")
const btn4 = document.querySelector(".btn4")
const pInfoDescuanto = document.querySelector(".parrafo-descuento")
const pResultado = document.querySelector(".parrafo-precio-final")
btn1.addEventListener("click", descuentoBtn1)
btn2.addEventListener("click" , descuentoBtn2)
btn3.addEventListener("click" , descuentoBtn3)
btn4.addEventListener("click" , descuentoBtn4)

function descuentoBtn1 () {
    const precioOriginal = document.querySelector("input")
    const  precio = Number(precioOriginal.value)
    const precioFinal = ((precio * (100 - 20))/ 100)
    pInfoDescuanto.innerText = "Tu descuento es del 20%"
    pResultado.innerText = "Total a pagar:  $  " + precioFinal 
}
function descuentoBtn2() {
    const precioOriginal = document.querySelector("input")
    const  precio = Number(precioOriginal.value)
    const precioFinal = ((precio * (100 - 30))/ 100)
    pInfoDescuanto.innerText = "Tu descuento es del 30%"
    pResultado.innerText = "Total a pagar:  $  " + precioFinal 
}
function descuentoBtn3 () {
    const precioOriginal = document.querySelector("input")
    const  precio = Number(precioOriginal.value)
    const precioFinal = ((precio * (100 - 15))/ 100)
    pInfoDescuanto.innerText = "Tu descuento es del 15%"
    pResultado.innerText = "Total a pagar:  $  " + precioFinal 
}
function descuentoBtn4 () {
    const precioOriginal = document.querySelector("input")
    const  precio = Number(precioOriginal.value)
    const precioFinal = ((precio * (100 - 50))/ 100)
    pInfoDescuanto.innerText = "Tu descuento es del 50%"
    pResultado.innerText = "Total a pagar:  $  " + precioFinal 
}

