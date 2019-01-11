// functional fundamentals: `Array#reduce`

// reduce is a tricky one, because it's so powerful. you can
// do a lot of stuff with Array#reduce, and because you can do
// so much, the function is necessarily more complicated. let's
// go over reduce's function signature first:

someArray.reduce(reducer, initialValue)

// technically, `reduce` operations need three things:
//   - a collection (here `someArray`)
//   - a reducer function
//   - an initial value
// let's show off and walk through some code.
const numbers = [ 1, 2, 3, 4, 5 ] // a collection

const sum = (accumulator, element) => accumulator + element // a reducer
const initial = 0 // an initial value

numbers.reduce(sum, initial) // 15

// so what's happening here? let's walk throuh step by step.
// the reducer function takes two arguments -- `accumulator`
// and `element`. the element is the array item in question with
// each iteration -- here, `element` will contain 1 on the first loop,
// 2 on the second, 3 on the third, et cetera.

// the accumulator has two rules:
//    * on the first loop, accumulator === initial
//    * on the second loop, accumulator is the returned value from the
//      last time the reducer ran.
//
// to illustrate further, here's an example implementation of array#reduce.
function reduce(collection, reducer, initial) {
  let runningTotal = initial
  for(var i = 0; i < collection.length; i++) {
    runningTotal = reducer(runningTotal, collection[i])
  }
  return runningTotal
}

