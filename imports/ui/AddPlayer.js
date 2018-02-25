import React       from 'react';
import ReactDOM    from 'react-dom';
import { Players } from './../../imports/api/players';

export default class AddPlayer extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Player name" required />
          <button>Add player</button>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    let playerName = e.target.playerName.value;

    e.preventDefault();

    if (playerName) {
      e.target.playerName.value = '';
      // insert new document into players collection
      Players.insert({
        name: playerName,
        score: this.props.score
      });
    }
  }
}
