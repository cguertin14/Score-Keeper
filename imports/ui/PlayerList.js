import React       from 'react';
import ReactDOM    from 'react-dom';
import { Players } from './../../imports/api/players';
import Player      from './Player';
import PropTypes   from 'prop-types';

export default class PlayerList extends React.Component {
  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }

  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <p>
          Add your first player to get started!
        </p>
      );
    } else {
      return this.props.players.map(player => <Player key={player._id} player={player}/>)
    }
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};
