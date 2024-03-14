const { createMachine, assign, interpret } = require("xstate");

const LIGHTS = {
  RED: "red",
  YELLOW: "yellow",
  GREEN: "green",
};

const setRed = assign({ light: LIGHTS.RED });

const stoplightMachine = (customActions) =>
  createMachine(
    {
      // ignore this; it's an xstate implementation detail
      predictableActionArguments: true,

      // red by default; we'll update it at runtime
      context: { light: LIGHTS.RED },

      // we'll respond to three messages: red | yellow | green
      // each time, we'll assign the machine state based on the
      // message we received. we'll also run the custom action
      // provided by the caller.
      on: {
        [LIGHTS.RED]: {
          actions: ["setRed", customActions.toRed],
        },
        [LIGHTS.YELLOW]: {
          invoke: {
            src: "wait",
            onDone: {
              target: LIGHTS.RED,
            },
          },
          actions: [assign({ light: LIGHTS.YELLOW }), customActions.toYellow],
        },
        [LIGHTS.GREEN]: {
          actions: [assign({ light: LIGHTS.GREEN }), customActions.toGreen],
        },
      },
    },
    {
      services: {
        wait: () => setTimeout(Promise.resolve, 1000),
      },
      actions: {
        setRed,
      },
    }
  );

module.exports = { stoplightMachine };
