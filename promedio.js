
/*let  total = 0
function findAverage (arr) {
    for (let i = 0; i < arr.length; i++) {
        total += numbers[i] / arr.length;
    } 
    console.log(total);
}

findAverage(numbers)*/

const numbers = [ 4, 5, 48, 12, 98, 59]

function findAverage (arr) {
    const addElements = arr.reduce((a, b) => a + b ) / arr.length
    return addElements
}
findAverage(numbers)

