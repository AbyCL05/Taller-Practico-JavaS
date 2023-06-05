const list1 = [4, 23, 8, 62, 12 ]
const list2 = [15, 5, 8, 7, 62, 10]
const list3 = [8, 47, 9, 10, 50, 1]

function findAverage (arr) {
    const addElements = arr.reduce((a, b) => a + b ) / arr.length
    return addElements
}


function pairOrOddList (arr) {
    if (arr.length % 2 === 0) {
        return true //Si es par
    } else {
        return false //Si es impar
    }
}

function calculateMedian (array) {

    const arr = array.sort((a,b)=>a-b)

    if (pairOrOddList(arr) == true) {
        const firstHalfArray = (arr.length / 2) -1
        const secondHalfArray = arr.length / 2
        return  findAverage([arr[firstHalfArray], arr[secondHalfArray]])

    } else {
        const halfOddArray =Math.floor(arr.length / 2)
        return medianArray = arr[halfOddArray]
    }
}
console.log(list1);
console.log(list2)
console.log(list3);;
console.log( calculateMedian(list1));
console.log( calculateMedian(list2));
console.log( calculateMedian(list3));

