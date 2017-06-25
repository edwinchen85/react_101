const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1 className="title">Hello World!</h1>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
