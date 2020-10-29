const Mem = require('./memory');
const memory = new Mem();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    console.log(
      'Resize triggered',
      '\n',
      'old pointer:',
      this.pointer,
      '\n',
      'capacity:',
      this._capacity,
      '\n',
      'length',
      this.length
    );
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
    console.log(
      'After Resize',
      '\n',
      'new pointer:',
      this.ptr,
      '\n',
      'capacity:',
      this._capacity,
      '\n',
      'length',
      this.length
    );
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
}

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  //arr.push('tauhida');
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.remove(0);
  // arr.push(10);
  console.log(arr.get(0));
}

//main();

// 5. Remove Spaces with %20

// function removeSpaces(str) {
//   return str.split(' ').join('%20');
// }

// console.log(removeSpaces('www.thinkful.com /tauh ida parv een'));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 6. Remove Less than 5
// function removeLessThan(array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 5) {
//       arr.push(array[i]);
//     }
//   }
//   return arr;
// }

// console.log(removeLessThan(arr));

// 7. Sum of Arrays

// function continuousSum(array) {
//   let sum = 0;
//   let total = 0;
//   for (let j = 0; j < array.length; j++) {
//     sum = array[j];
//     for (let i = j + 1; i < array.length; i++) {
//       sum += array[i];
//       if (sum > total) {
//         total = sum;
//       }
//     }
//   }
//   return total;
// }

// console.log(continuousSum([-2, 1, 4, 6, -3, 5]));

//8. Merge arrays
//Input:[1, 3, 6, 8, 11, 2, 3, 5, 8, 9, 10]
//Input:[1, 3, 6, 8, 11, 2, 3, 5, 8, 9, 10]

//Output:[ 3, 3, 5, 6, 8, 8, 9, 10, 11]

// function merge(array1, array2) {
//   let arr = [...array1, ...array2];
//   let arr2 = [...array1, ...array2];
//   let masterArr = [];
//   let index = 0;
//   for (let j = 0; j < arr2.length; j++) {
//     let lowest = Infinity;
//     for (let i = 0; i < arr2.length; i++) {
//       if (arr[i] < lowest) {
//         lowest = arr[i];
//         index = i;
//       }
//     }
//     masterArr.push(lowest);
//     arr.splice(index, 1);
//   }
//   return masterArr;
// }

// function mergeArrays(arr1, arr2) {
//   const newArr = arr1;
//   arr2.forEach((num) => {
//     let i = 0;
//     while (i < newArr.length) {
//       if (num <= newArr[i]) {
//         newArr.splice(i, 0, num);
//         break;
//       }
//       i++;
//     }
//   });
//   return newArr;
// }

// console.log('answer:', merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
