import React from 'react';
import { FlatList } from 'react-native';
import AlarmListItem from './AlarmListItem';

export default class AlarmList extends React.Component {
  constructor(props) {
    super(props);
  }

  // Todo: Fetch alarm data from source and return data objects
  loadData = () => {
    // Testdata
    return [
      { title: 'MyAlarm', activated: true },
      { title: 'Another alarm', activated: false },
      { title: 'Alarm without activated' },
      { activated: true },
    ];
  }

  renderItem = item => <AlarmListItem key={Math.random()} data={item} />

  render() {
    return (
      <FlatList
        data={this.loadData()}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
}

