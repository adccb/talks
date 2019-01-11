// functional programming examples: `Array#map`!

// let's say i have an array, like so
const users = [
  { name: "autumn", interests: ["music", "programming", "saving the world"] },
  { name: "liz", interests: ["photography", "tabletop and video games"] },
  { name: "katherine", interests: ["programming", "literature", "linguistics"] }
]

// let's say i needed to print out a list of all these users. how do
// i get that list? i could do it like this:
const userNames = []
for(var i = 0; i < users.length; i++) {
  userNames.push(users[i].name)
}

console.log(userNames) // [ "autumn", "liz", "katherine" ]

// that seems clunky, especially when we need to reuse that iteration
// logic. say we needed to pull the fist interest in everyone's list;
// that would necessitate either rewriting that whole loop, or bloating it
// with a million necessary but unrelated bits of logic.

// instead, let's define a function that gets the name from _one_ user:
const getName = user => user.name

// and then, we can use a `map` operation to get the names!
const userNames = users.map(getName)
console.log(userNames) // [ "autumn", "liz", "katherine" ]

// we can do the same with the first interest, if we need it:
const getFirstInterest = user => user.interests[0]
const firstInterests = users.map(getFirstInterest)
console.log(firstInterests) // [ "music", "photography", "programming" ]

