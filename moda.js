const list = [15,  15, 6, 8, 10, 3, 15, 9, 9, 9, 9] 

function calculateFad (arr) {
    const arrCount = {}
    for (let i = 0; i < arr.length; i++) {
        arrCount[arr[i]] ? arrCount[arr[i]] += 1 :  arrCount[arr[i]] = 1 //arr[i], es cada elemento por el que pasa al ciclo for                                     
    }
    const sortList = sortTwoDimensionalList(Object.entries(arrCount), 1)
    console.log(list)
    console.log(sortList[sortList.length -1][0])
}
function sortTwoDimensionalList (arr, i) {  
    return arr.sort( (a, b) => a[i] - b[i])
}


