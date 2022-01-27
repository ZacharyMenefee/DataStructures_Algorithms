function selectionSort(arr){
  for (let idx1 = 0; idx1 < arr.length; idx1++){
    let minimum = idx1
    for(let idx2 = idx1 + 1; idx2 < arr.length; idx2++){
      if(arr[idx2] < arr[minimum]){
        minimum = idx2;
      }
    }
    if (minimum !== idx1){
      [arr[idx1], arr[minimum]] = [arr[minimum], arr[idx1]]
    }
  }
  return arr
}
