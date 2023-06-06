const PlatziMath = {}
PlatziMath.findAverage = function  (arr) {
    const addElements = arr.reduce((a, b) => a + b ) / arr.length
    return addElements
}

PlatziMath.findMedian = function  (array) {

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

PlatziMath.finfFad = function  (arr) {
    const arrCount = {}
    for (let i = 0; i < arr.length; i++) {
        arrCount[arr[i]] ? arrCount[arr[i]] += 1 :  arrCount[arr[i]] = 1 
        //arr[i], es cada elemento por el que pasa al ciclo for                                     
    }
    const sortList = sortTwoDimensionalList(Object.entries(arrCount), 1)
     //Object.entries(arrCount), es el objeto arrCount, convertido en array, que ya esta siendo ordenado por la funcion sortTwoDimensionalList.
    
    return sortList[sortList.length -1][0]
}

PlatziMath.pairOrOddList = function  (arr) {
    if (arr.length % 2 === 0) {
        console.log('The number of elements in the array is even')
        return
    } else {
        console.log('The number of elements in the array is odd');
    }
}

PlatziMath.sortTwoDimensionalList = function  (arr, i) {  
    return arr.sort( (a, b) => a[i] - b[i])
}

PlatziMath.sortListAscending = function (arr) {
   return  arr.sort((a, b) => a - b)
}