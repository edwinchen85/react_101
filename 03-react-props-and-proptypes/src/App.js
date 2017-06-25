import React from 'react';

const Headline = () => {
  return <h1 className="title">Welcome to the React world!</h1>
}

const Greeting = () => {
  return <p>You will love it!</p>
}

export const App = () => {
  return (
    <div>
      <Headline />
      <Greeting />
    </div>
  )
}
