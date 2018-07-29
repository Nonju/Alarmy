import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseScreen from './BaseScreen';
import AlarmList from '../component/AlarmList';

const styles = StyleSheet.create({
  topView: {
    marginTop: 5,
  }
});

export default class MainScreen extends BaseScreen {

  constructor(props) {
    super(props);

    this.state = {
      title: 'MainScreen',
    };
  }

  renderContent = () => {
    return (
      <View style={styles.topView}>
        <AlarmList />
      </View>
    );
  }
}

