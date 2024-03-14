const { interpret } = require("xstate");
const { stoplightMachine } = require("../machine.js");

// provide to stoplightMachine our custom action handlers; in
// this case we'll just log things to console, but we could
// theoretically do anything we want here
const actor = interpret(
  stoplightMachine({
    toRed: () => console.log("running custom action RED"),
    toYellow: () => console.log("running custom action YELLOW"),
    toGreen: () => console.log("running custom action GREEN"),
  })
);

// every time the state changes, log the new state to console
actor.subscribe((state) => console.log(`context: ${state.context.light}\n`));
actor.start();

// every time the user types something, trim the whitespace
// and send the message to the running machine. we can pass
// anything here, but only red | yellow | green will transition
// the machine to a new state
process.stdin
  .setEncoding("utf8")
  .on("data", (chunk) => actor.send(chunk.trim()));
