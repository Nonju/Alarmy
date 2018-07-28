import React from 'react';
import { View, Text } from 'react-native';
import BaseScreen from './BaseScreen';
import AlarmList from '../component/AlarmList';

export default class MainScreen extends BaseScreen {

  constructor(props) {
    super(props);

    this.state = {
      title: 'MainScreen',
    };
  }

  render() {
    return (
      <View>
        <Text>Main screen</Text>
        <AlarmList />
      </View>
    );
  }
}

