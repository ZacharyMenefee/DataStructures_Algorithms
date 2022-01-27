function insertionSort(arr){
  for (let idx1 = 1; idx1 < arr.length; idx1++){
    let currentVal = arr[idx1]
    for(let idx2 = idx1 - 1; idx2 >= 0 && arr[idx2] > currentVal; idx2--){
      arr[idx2 + 1] = arr[idx2]
    }
    arr[idx2 + 1] = currentVal
  }
}
