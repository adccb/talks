// let's say we have some react application that makes an xhr request -- when
// that request comes back from the server, we need to show the user whether
// it failed or succeeded. to that end, let's make <Success /> and <Error />
// components, like this:

const Success = ({ msg }) => (
  <div className='success'>
    <p>success! {msg}</p>
  </div>
)

const Error = ({ msg }) => (
  <div className='error'>
    <p>whoops! {msg}</p>
  </div>
)

// and to handle the logic of which component needs to get displayed when,
// we can create a higher-order component (a component that uses other
// components to do its job) and just pass the info down:
const SuccessOrError = ({ isValid, msg }) => 
  isValid
    ? <Success msg={msg} />
    : <Error msg={msg} />

// that way, we don't have to worry about what is displayed when -- our
// <SuccessOrError /> component handles that logic for us.
const TitleOrErrorMsg = ({ isValid, successMessage, errorMessage }) => 
  <SuccessOrError 
    msg={isValid ? successMessage : errorMessage}
    isValid={isValid}
  />

