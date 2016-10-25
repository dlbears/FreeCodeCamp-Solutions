// jshint esversion:6
const fearNotLetter = (str) => {
  const char = String.fromCharCode(
  str.split('')
    .map(letter => letter.charCodeAt())
    .reduce((a,b) => {
      if (a + 1 === b) return b;
      return a;
    })
);
if (str.endsWith(char)) return undefined;
return String.fromCharCode(char.charCodeAt() + 1);
};


console.log(fearNotLetter("abcdefghjklmno"));
