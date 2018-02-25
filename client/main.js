import React       from 'react';
import ReactDOM    from 'react-dom';
import { Meteor }  from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';
import App         from './../imports/ui/App';

Meteor.startup(() =>  {
  Tracker.autorun(() => {
    let title = 'Score Keeper',
        subtitle = 'Created by Charles Guertin';

    let players = Players.find({},{ sort: { score: -1 } }).fetch();
    ReactDOM.render(<App players={players} title={title} subtitle={subtitle}/>, document.getElementById('app'));
  });
});
