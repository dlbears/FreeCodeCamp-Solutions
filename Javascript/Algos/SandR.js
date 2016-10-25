function range(start,end,step) {
  var arr = [];
  if (typeof step != 'undefined') {
    if (step < 0) {
      for (var k = 0; start + k >= end; k += step) {
        arr.push(start + k);
        }
      } else {
      for (var i = 0; start + i <= end; i += step) {
        arr.push(start + i);
     }
    }
   return arr;
 } else {
   for (var j = 0; start + j != end; j++) {
     arr.push(start+j);
   }
   arr.push(end);
   return arr;
 }
}

function sum(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    return arr[0] + sum(range(arr[1], arr[arr.length - 1]));
  }
}
