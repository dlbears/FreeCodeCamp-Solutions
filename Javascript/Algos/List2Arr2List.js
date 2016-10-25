function arrayToList(arr) {
  var temp = null;
  for (var i = arr.length - 1; i >= 0; i--) temp = {value: arr[i], rest: temp};
  return temp;
}

function listToArray(list) {
  var arr = [];
  for (var node = list; node; node.rest) arr.push(value);
  return arr;
}




function deepEqual(x, y) {
  var count = 0;
  if ((typeof x == 'object' && x != null) && (typeof y == 'object' && y != null)) {
    for (element in x) {count++;}
    for (element in y) {count--;}
    if (count == 0) {
      for (element in x) {
        deepEqual(element, y[element]);
      }
    } else {
      return false;
    }
  } else {
    if (x === y) {
      return true;
    } else {
      return false;}
  }
}
