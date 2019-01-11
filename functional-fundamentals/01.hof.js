// functional programming basics: higher order functions!

// higher order functions (HOFs) are the bread and butter of functional
// programming. we use them all the time, but only in languages which 
// have something called "first class functions". this means that in order
// to be a good candidate for functional programming, a language must have
// functions that fulfill the following rules:

const rules = [
  "functions can be assigned to variables",
  "functions can be passed as parameters to other functions",
  "functions can be returned from other functions"
]

// what does a higher-order function look like? ever passed a callback?

fs.readFile("some_filename.txt", "utf-8", function(err, data) {
  console.log(data) // "some text!"
})

// congrats, you've used a higher-order function!
// the criteria for a function to be a HOF is pretty simple; does
// that function require another function to do its job?

// lots of node's filesystem library is callback-based, so you might
// have seen it there. if you use promises, too, you'll see higher-order
// functions at work:

doSomethingAsynchronus(someData).then(
  function success(data) {
    // here's some data!
  },
  function error(err) {
    // welp, looks like we got an error!
  }
)

// here's a simple higher-order function. we want to be able to print 
// someone's name followed by the time of day.
const formatMessage = (name, getTime) => `${getTime()}, ${name}!`

formatMessage('autumn', () => {
  const d = new Date()
  
  if(d.getHours() < 12) {
    return 'good morning'
  } else if(d.getHours() < 17) {
    return 'good afternoon'
  } else if(d.getHours() < 19) {
    return 'good evening'
  } else {
    return 'good night'
  }
})

