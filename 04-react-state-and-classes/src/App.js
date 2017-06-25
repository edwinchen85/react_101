import React from 'react';
import PropTypes from 'prop-types';

export class App extends React.Component {
  constructor(props) {
    // super is a keyword that used to called functions on an object's parent
    super(props);
    this.state = {
      buyItems: ['milk', 'bread', 'food']
    }
  }

  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {
          this.state.buyItems.map(item => {
            return <p>{item}</p>
          })
        }
      </div>
    )
  }
}
