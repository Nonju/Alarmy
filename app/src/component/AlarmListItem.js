import React from 'react';
import { View, Text, Switch } from 'react-native';

export default class AlarmListItem extends React.Component {
  constructor(props) {
    super(props);

    const { data } = props;
    this.state = { active: !!data.activated };
  }

  toggleAlarmActiveState = newValue => {
    this.setState({ active: newValue });
  }

  render() {
    const { title = 'No title' } = this.props.data;
    const { active } = this.state;
    console.log('AlarmListItem data:', this.props.data); // Todo: Remove

    return (
      <View>
        <Text>{title}</Text>
        <Switch 
          // disabled={false}
          value={active}
          onValueChange={this.toggleAlarmActiveState}
        />
      </View>
    );
  }
}

