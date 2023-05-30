const precioOriginal = document.querySelector("#precio-original") 
const ingresarCupon = document.querySelector("#cupon")
const btnCalculate = document.querySelector("button")
const pInfoDescuanto = document.querySelector(".parrafo-discount")
const pResultado = document.querySelector(".parrafo-precio-final")
btnCalculate.addEventListener("click", calculateDiscount)

const cupons = [
  {
    name: "A11F",
    discount: 25,
  },
  {
    name: "VT13",
    discount: 15,
  },
];g

function calculateDiscount () {
    const price = Number(precioOriginal.value)
   if ( !price || !ingresarCupon.value) return  pResultado.innerText =  "Please, insert price and coupon for process the discount" 
    const  discount = cupons.find(c => c.name ===  ingresarCupon.value)?.discount;
   if  (!discount) return  pResultado.innerText = 'El cupon no es valido' 
    const nuevoPrecio = (price * (100 - discount)) / 100
    pInfoDescuanto.innerText = "Tu discount es del " + discount + " %."
    pResultado.innerText = "El nuevo precio con decuento es: $ " + nuevoPrecio
}

function addCupon(name, discount) {

    cupons.push({name, discount});
}