//封装查找数组元素方法
function indexOf(arr, char, index) {
    //arr: 数组
    //char: 查找元素
    //index: 查找位置
  
    for (var i = index || 0; i < arr.length; i++) {
      if (arr[i] == char) {
        return i;
      }
    }
    return -1;
  }