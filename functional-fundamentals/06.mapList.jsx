// let's say we're writing a react app, and we need to display a ul with
// some things in it, maybe for a nav bar or something similar. we _could_ 
// loop through props and get everything out that way, or we could use a map!
const listOfThings = ({ items }) => 
  <ul>
    {items.map(item => (
      <li>{item}</li> 
    ))}
  </ul>

// maybe we want to display a leaderboard; starting from a list of users, display
// the top users by score.
const Leaderboard = ({ users }) =>
  <ul className='leaderboard'>
    { 
      users
        // sort by score, descending
        .sort((a, b) => b.score > a.score)
        // take the top ten
        .slice(0, 10)
        // turn them all into display components
        .map(user => <UserDisplay user={user} />)
    }
  </ul>

