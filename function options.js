
function getName(a)
{
  return a + 6;
}

console.log(getName(4));

// result = 10



let x = () => {
  return6;
}
console.log(x());

// result teh content of the function



(j) => {
  return j + 6;
}

console.log(x(1));

// arrow functions!!!



function getName(...c) {

  return c + 6;
}

console.log(getName(1));

// treats as string - 1 + 6 = 16



function getName(...c) 
{
  let sum = 0;
  console.log(c);
  for(let val of c)
  {
    console.log(val);
    sum += val;
  }
  return sum;
}

console.log(getName(2,4,6,8,9));

//returns sum of the array elements



function getName(a,...c) 
{
  let sum = 0;
  console.log(c);
  for(let val of c)
  {
    console.log(val);
    sum += val;
  }
  return sum;
}

console.log(getName(5,0,1,2,3));

// returns only 0 + 1 + 2 + 3 = 6

// it's called spread operator


// 3 major functions - map, reduce, filter - allow to manipulate array content
// [1,5,8,7,10]

// array.prototype.map
const array1 = [1,4,9,16];
let array2 = [];
// map1 = attay1.map((x) => x * 2);
for (let val of array1) {
  array2.push(val*2);
}
console.log(array2);
// expect array [2,8,18,32]

// array.prototype.map
const map1 = array1.map((x)=> console.log(x));
// printing out content of the array



const array1 = [1,4,9,16];
let array2 = [];
const map1 = array1.map((x) => x*2);


// map - returns manipukated array
// reduce - returns a single value


const array1 = [1,2,3,4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 
  initialValue,
);
console.log(sumWithInitial);
//expected output = 10

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]



// join function 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"





