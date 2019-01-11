title: _unit testing react components_
duration: _10m_

roadmap:
  * intro
    - who i am
    - what i do
    - when i started
    - where i do it

  * preface: assumptions  
    - plain functions are the clearest to test- one input, one output
    - functional composition does not merit testing
      - e.g. if `f(x)` and `g(x)` are both well-tested, `f(g(x))` merits no additional testing

  * strategies pt 1: functional components
    - use component state when necessary, but prefer stateless (functional) components
    - compose components whenever possible; HOCs are magic
      - props passing eg fig 1

  * strategies pt b: test unconnected components
    - test behavior of components with determined, clear inputs
    - don't have to rely on redux/whatever additional complications
    - test connection fns seperately

  * strategies pt iii: test behavior, not implementation
    - given this input, expect this output
    - NOT given this input, expect this internal state and these function calls and and and and
    - decouple your tests from the implementation of your component as much as possible.

=== figure 1 ===
```jsx
const SomeComponent = ({ someProp }) => (
  <SomeChild props={...someProps }>                     // not passing someProp here
    <ComponentWhichNeedsSomeProp someProp={someProp} /> // passing to the child directly
  </SomeChild>
)
```

