// jshint esversion:6
const translatePigLatin = (str) => {
  const arr = str.split('');
  const vowel = /[aeiou]/;
  if (vowel.test(arr[0])) return arr.join('') + 'way';
  const cut = arr.reduce((b,a) => {
    if (vowel.test(a)) {
      if (vowel.test(b.slice(-1))) return b;
        return b + a;
    } else {
      if (vowel.test(b.slice(-1))) return b;
      return b + a;
    }});
    return str.substring(cut.length-1) + cut.slice(0, cut.length-1) + 'ay';
};
console.log(
  translatePigLatin("california"), //"aliforniacay".
  translatePigLatin("paragraphs"), //"aragraphspay".
  translatePigLatin("glove"), //"oveglay".
  translatePigLatin("algorithm"), //"algorithmway".
  translatePigLatin("eight") //"eightway".
);
