import React       from 'react';
import ReactDOM    from 'react-dom';
import { Players } from './../../imports/api/players';
import PropTypes   from 'prop-types';
import TitleBar    from './TitleBar';
import AddPlayer   from './AddPlayer';
import Player      from './Player';
import PlayerList  from './PlayerList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle={this.props.subtitle}/>
        <PlayerList players={this.props.players}/>
        <AddPlayer score={10}/>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
};
