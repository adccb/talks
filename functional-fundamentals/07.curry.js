// currying is a nice tool to have -- basically, it allows you to bake in
// function arguments such that you don't have to keep passing things in.

const add = a => b => a + b // a function that returns a function instead of 
                            // taking a second param
const add5 = add(5) // this could just as well be `b => b + 5`
add5(1) // 6
add5()  // NaN

// this is what that function looks like if you write it out using the 
// `function` keyword. it's a little bit clunkier, but can help clarify 
// if you're not used to arrow functions.
function add(a) {
  return function(b) {
    return a + b
  }
}

// if you had both numbers that you wanted to add, you would need 
// to call it like this:
add(5)(5)

// you could optionally curry the function, like this:
const add = (a, b) =>
  b 
    ? a + b 
    : b => add(a, b)

const add = function(a, b) {
  return b
    ? a + b
    : function(b) { return add(a, b) }
}

// then you could call it like this:
add(5, 5) // 10
// or like this:
add(5)(5) // 10

// we can go extreme here, and implement a "correct" version of Array#map!
const map = (fn, array) => 
  array
    ? array.map(fn)
    : array => map(fn, array)

const addOneToEveryElement = map(i => i + 1)
addOneToEveryElement([ 1, 2, 3, 4, 5 ]) // [ 2, 3, 4, 5, 6 ]
addOneToEveryElement([ 2, 3, 4, 5, 6 ]) // [ 3, 4, 5, 6, 7 ]

// let's try filter as well!
const filter = (fn, array) => 
    array
      ? array.filter(fn)
      : array => filter(fn, array)

const filterLessThanThree = filter(i => i >= 3)
filterLessThanThree([ 1, 2, 3, 4, 5 ]) // [ 3, 4, 5 ]
filterLessThanThree([ 2, 3, 4, 5, 6 ]) // [ 3, 4, 5, 6 ]

