const calc = (num, base="Er", itt="Er", next="Er") => {
  switch(parseInt(num)) {
    case 1:
      return base;
    case 2:
      return base+base;
    case 3:
      return base+base+base;
    case 4:
      return base+itt;
    case 5:
      return itt;
    case 6:
      return itt+base;
    case 7:
      return itt+base+base;
    case 8:
      return itt+base+base+base;
    case 9:
      return base+next;
  }
}
const toRome = (num, arr=[]) => {
  let numArr = String(num).split('');
  if (num >= 1000) {
    let num1 = numArr.shift();
    arr.push(calc(num1, 'M'));
    return toRome(num-(num1*1000), arr);
  } else if (num >= 100) {
    let num2 = numArr.shift();
    arr.push(calc(num2, 'C', 'D', 'M'));
    return toRome(num-(num2*100), arr);
  } else if (num >= 10) {
    let num3 = numArr.shift();
    arr.push(calc(num3, 'X', 'L', 'C'));
    return toRome(num-(num3*10), arr);
  } else if (num >= 1) {
    let num4 = numArr.shift();
    arr.push(calc(num4, 'I', 'V', 'X'));
    return toRome(num-(num4*1), arr);
  }
  return arr.join('');
}

const convertToRoman = toRome;

console.log(convertToRoman(3999));
