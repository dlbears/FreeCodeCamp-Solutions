// jshint esversion:6
const whatIsInAName = (collection, source) => {
const sourceKey = Object.keys(source);
  return collection.filter(obj => {
    return sourceKey.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
};




console.log(
  whatIsInAName([{ first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }],
  { last: "Capulet" }));
    //[{ first: "Tybalt", last: "Capulet" }]
