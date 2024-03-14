const { interpret } = require("xstate");
const { stoplightMachine } = require("../machine");

// this time, instead of logging to console, let's set the
// page's background color to the color of the current light
const setBackgroundColor = (color) =>
  (document.body.style.backgroundColor = color);

const actor = interpret(
  stoplightMachine({
    toRed: setBackgroundColor("red"),
    toYellow: setBackgroundColor("yellow"),
    toGreen: setBackgroundColor("green"),
  })
);

// every time the state changes, log the new state to console
actor.subscribe(
  (state) => (document.getElementById("root").innerHTML = state.context.light)
);

actor.start();

document
  .getElementById("red")
  .addEventListener("click", () => actor.send("red"));

document
  .getElementById("yellow")
  .addEventListener("click", () => actor.send("yellow"));

document
  .getElementById("green")
  .addEventListener("click", () => actor.send("green"));
