//slice
/**
  array.slice(start, end)
  string.slice(start, end)
 */
const array = [1,2,3,4,5,6];
const s1 = "Santiago Gomez";

console.log(array.slice(1, 5));
console.log(s1.slice(0,8));
console.log(s1.slice(3));
console.log(array.slice(3));

//repeat
//-----abcdefg-----
const s2 = "abcdefg";
const rep = "-".repeat(5);
rep;
console.log("-----" + s2 + "-----");
console.log(rep + s2 + rep);

//indexOf
/**
array.indexOf(searchElement, fromIndex)
 string.indexOf(searchValue, fromIndex)
 */

 const index = array.indexOf(4);
 index;

const i2 = s1.indexOf("o", 9);
i2;