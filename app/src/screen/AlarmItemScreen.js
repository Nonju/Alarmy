import React from 'react';
import { View, Text, NativeModules } from 'react-native';
import BaseScreen from './BaseScreen';

export default class AlarmItem extends BaseScreen {
  constructor(props) {
    super(props);

    this.state = {
      title: 'AlarmItem', // Todo: replace with alarm name
    };
  }

  renderContent = () => { // Todo
    return (
      <View>
        <Text>Alarm Item Screen</Text>
      </View>
    );
  }
}

