import React       from 'react';
import ReactDOM    from 'react-dom';
import { Players } from './../../imports/api/players';
import PropTypes   from 'prop-types';

export default class Player extends React.Component {
  render() {
    let player = this.props.player;
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => Players.update(player._id,{ $inc: { score: -1 } })}>-1</button>
        <button onClick={() => Players.update(player._id,{ $inc: { score:  1 } })}>+1</button>
        <button onClick={() => Players.remove({ _id: player._id })}>X</button>
      </p>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
