const precioOriginal = document.querySelector("#precio-original") 
const ingresarCupon = document.querySelector("#cupon")
const btnCalcular = document.querySelector("button")
const pInfoDescuanto = document.querySelector(".parrafo-descuento")
const pResultado = document.querySelector(".parrafo-precio-final")
btnCalcular.addEventListener("click", calcularDescuento)

const cupones = []
cupones.push({
    name : 'A11F' ,
    descuento :  25
})
cupones.push({
    name : 'VT13' ,
    descuento :  15
})

function calcularDescuento () {
    //Variables valores ingresados
    const price = Number(precioOriginal.value)
    const cupon = ingresarCupon.value;

    //Validar si se ingresaron los datos o no
    if (!price || !cupon) {
        pResultado.innerText = "Ingrese los datos para poder realizar el descuento" 
        return
    }
    
    //Funcion que compara el cupon ingresado, con cupones guardados en el array
    let  descuento;
    function isCuponEnArray (cuponElemento) {
        return cuponElemento.name == cupon;
    }

    //Con el metodo .find se recorre cada elemento del array con la funcion isCuponEnArray para encontrar al que coincide 
    const cuponEnArray = cupones.find(isCuponEnArray);

    //Condicion que agrega en la variable descuento, el descuento que corresponde a cada cupon, del que por nombre coincide con el q se ingreso en el input
    if (cuponEnArray) {
        descuento = cuponEnArray.descuento
    } else {   //Si no se encuentra el cupon
        pResultado.innerText = 'El cupon no es valido'
        return
    }

    //Se aplica la logica para calcular el precio final 
    const nuevoPrecio = (price * (100 - descuento)) / 100
    pInfoDescuanto.innerText = "Tu descuento es del " + descuento + " %."
    pResultado.innerText = "El nuevo precio con decuento es: $ " + nuevoPrecio
}
