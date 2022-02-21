// Написати реалізацію швидкого сортування масиву

function quickSort(arr) {
    if (arr.length < 2)
        return arr;

    let pivot = arr[0];
    const left = [], right = [];
      
    for (let i = 1; i < arr.length; i++)
    {
      if (pivot > arr[i])
        left.push(arr[i]);
      else
        right.push(arr[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

let arr = [11,8,14,3,6,2,7];
console.log(quickSort(arr))