// jshint esversion:6
const pairs = {
  "A":"T",
  "T":"A",
  "C":"G",
  "G":"C"
};
const pairElement = (str) => str
  .split('')
  .map(base => [base, pairs[base]])
  .map(pair => {
    console.log(pair.join(''));
    return pair;
  });


pairElement("GCGATGCCGATTAGCCG") // [["G, "C"], ["C", "G"], ["G". "C"]]
