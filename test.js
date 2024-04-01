const reverse = (arr) => {
    const newArr = []
    for (let index = arr.length - 1; index >= 0; index--) {
        newArr.push(arr[index])
    }
    return newArr;
}
console.log(reverse([3, 2, 1]))

const returnAllEven = (arr) => {
 return arr.filter(x=>x%2 == 0)   
}

console.log(returnAllEven([1,2,3,4,45,5,6,7,78]))