import React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
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

  renderItem = item => {
    const { onPress } = this.props;
    return (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={() => onPress(item)}
      >
        <AlarmListItem key={Math.random()} data={item} />
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <FlatList
        data={this.loadData()}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
}

