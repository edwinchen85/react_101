import React from 'react';
import PropTypes from 'prop-types';

const Headline = () => {
  return <h1 className="title">Welcome to the React world!</h1>
}

const Greeting = (props) => {
  const {name, age} = props;
  return <p>You will love it {name} ({age})!</p>
}

export const App = () => {
  return (
    <div>
      <Headline />
      <Greeting name="Edwin" age={25} />
    </div>
  )
}

Greeting.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
