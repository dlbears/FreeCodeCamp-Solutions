// jshint esversion:6
const myReplace = (str, before, after) => {
  let caseAfter;
  const caseBefore = before.split('');
  if (caseBefore[0].toUpperCase() === caseBefore[0]) {
    caseAfter = after.replace(/^\w/, after.split('')[0].toUpperCase());
  } else {
    caseAfter = after.replace(/^\w/, after.split('')[0].toLowerCase());
  }
  return str.split(' ')
    .map(word => {
      if (word === before) {
        return caseAfter;
      } else {
        return word;
      }
    }).join(' ');
};

console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
