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
    const {buyItems} = this.state;

    return (
      <div>
        <header>
          <h1>Shopping List</h1>
        </header>
        <div className="content">
          <table className="table">
            <caption>Shopping List</caption>
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                buyItems.map(item => {
                  return (
                    <tr key={item}>
                      <th scope="row">1</th>
                      <td>{item}</td>
                      <td>Button</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
