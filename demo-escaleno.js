function alturaTrianguloEscaleno (a, b, c) {
    if (a == b || b== c || c == a) {
        console.log("Esta funcion calcula la alturas de un triangulo escaleno, por favor ingrese medidas diferentes.");
    } else {
        const semiP = ((a + b + c) / 2);
        alturaA =  (2/a) * (Math.sqrt(semiP * (semiP - a)* (semiP - b)*(semiP - c)));
        alturaB =  (2/b) * (Math.sqrt(semiP * (semiP - a)* (semiP - b)*(semiP - c)));
        alturaC =  (2/c) * (Math.sqrt(semiP * (semiP - a)* (semiP - b)*(semiP - c)));
        return {
            alturaA,
            alturaB,
            alturaC,
        }
    }
} 

 function solution(lado1, lado2, lado3) {
    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
      return false 
    } else {
      const semiP = ((lado1 + lado2 + lado3) / 2)
      const altura = (2 / lado1) * (Math.sqrt(semiP * (semiP - lado1) * (semiP - lado2) * (semiP - lado3)))
      let resultado = parseInt(altura)
      return resultado
    }
  }