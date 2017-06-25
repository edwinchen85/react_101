import React from 'react';

const Headline = () => {
  return <h1 className="title">Welcome to the React world!</h1>
}

const Greeting = (props) => {
  return <p>You will love it {props.name}!</p>
}

export const App = () => {
  return (
    <div>
      <Headline />
      <Greeting name="Edwin" />
    </div>
  )
}
