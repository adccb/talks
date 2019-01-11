// functional programming fundamentals: `Array#filter!`

// let's say i have an array of people, like so
const peopleAtTheParty = [
  { name: "sariya", age: 23 },
  { name: "julian", age: 26 },
  { name: "skylar", age: 20 },
  { name: "beatrix", age: 20 }
]

// i want to send a message to those on that list who are
// old enough to drink alcohol legally in the US. i could find
// that list by writing
const drinkingEligiblePeople = []
for(var i = 0; i < peopleAtTheParty.length; i++) {
  if(peopleAtTheParty[i].age >= 21) {
    drinkingEligiblePeople.push(peopleAtTheParty[i])
  }
}

// which is very clunky and kind of ugly, frankly. let's rewrite it,
// the same way we did with `map`. let's make a function that figures out
// if an individual is able to drink:

const canDrink = person => person.age >= 21

// there we go -- now lets make a list of everyone at the party who can drink!
const drinkingEligiblePeople = peopleAtTheParty
  .filter(canDrink) // [ {name: 'sariya', age: 23} ...]
  .map(user => user.name) // ['sariya', 'julian']
