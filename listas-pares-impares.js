const list1 = [4, 23, 5, 62, 12 ]
const list2 = [15, 5, 8, 7, 62, 10]

function pairOrOdd (arr) {
    if (arr.length % 2 === 0) {
        console.log('The number of elements in the array is even')
        return
    } else {
        console.log('The number of elements in the array is odd');
    }
}
pairOrOdd(list1)
pairOrOdd(list2)

  