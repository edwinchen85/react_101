import React from 'react';

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
