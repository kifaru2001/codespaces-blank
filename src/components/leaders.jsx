import React, { Component } from 'react';
import { render } from 'react-dom';
import Leaderboard from '../../src/Leaderboard';

class Leads extends Component {
  constructor(props) {
  super(props);
  this.state = {
    users: [
      {name: "0x00", score: 0},
          ],
    paginate: 10
  };
}
  render() {
    return (
      <div className="App">
        <Leaderboard users={this.state.users} paginate={this.state.paginate}/>
      </div>
    );
  }
}

export default Leads;