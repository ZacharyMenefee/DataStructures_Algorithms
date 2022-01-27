function bubbleSort(arr) {
  for (let idx1 = arr.length; idx1 > 0; idx1--) {
    for (let idx2 = 0; idx2 < idx1 - 1; idx2++) {
      console.log(arr, idx2, idx1)
      if (arr[idx2] > arr[idx2 + 1]) {
        [arr[idx2], arr[idx2 + 1]] = [arr[idx2 + 1], arr[idx2]]
      }
    }
  }
  return arr
}
