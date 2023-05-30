// function heapify(arr, n, i) {
//     let largest = i;
//     const leftChild = 2 * i + 1;
//     const rightChild = 2 * i + 2;
  
//     if (leftChild < n && arr[leftChild] > arr[largest]) {
//       largest = leftChild;
//     }
  
//     if (rightChild < n && arr[rightChild] > arr[largest]) {
//       largest = rightChild;
//     }
  
//     if (largest !== i) {
//       swap(arr, i, largest);
//       heapify(arr, n, largest);
//     }
//   }
  
//   function swap(arr, i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
  
//   function heapSort(arr) {
//     const n = arr.length;
  
//     // Build max heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       heapify(arr, n, i);
//     }
  
//     // Extract elements from the heap in sorted order
//     for (let i = n - 1; i > 0; i--) {
//       swap(arr, 0, i);
//       heapify(arr, i, 0);
//     }
      
//     return arr;
//   }
  
//   // Example usage
//   const array = [7, 3, 9, 4, 2, 8, 5, 1, 6];
//   const sortedArray = heapSort(array);
//   console.log(sortedArray);
  
function heapify(arr,n,i){
let largest = i
const leftChild = 2*i+1
const rightChild = 2*i+2

if(leftChild < n &&arr[leftChild] > arr[largest]){
  largest = leftChild
}

if(rightChild < n && arr[rightChild] > arr[largest] ){
  largest = rightChild
}

if(!largest === i){
  swap(arr,i,largest)
  heapify(arr,n,largest)
}
}

function swap(arr,i,j){
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


function heapsort(arr){
  const n = arr.length

  for(let i = Math.floor(n/2);i>=0;i--){
    heapify(arr,n,i)
  }

  for(let i = n-1;i>0;i--){
    swap(arr,0,i)
    heapify(arr,i,0)
  }
}