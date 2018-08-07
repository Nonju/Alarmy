import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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

  onItemSelect = itemData => {
    this.props.navigation.navigate('AlarmItem');
  }

  createNewAlarm = () => {
    this.props.navigation.navigate('AlarmItemCreate');
  }

  renderContent = () => {
    // Todo: Replace 'create new alarm' button with 'floating add-ball'
    return (
      <View style={styles.topView}>
        <AlarmList onPress={itemData => this.onItemSelect(itemData)}/>
        <Button
          title='Create new alarm'
          onPress={() => this.createNewAlarm()}
        />
      </View>
    );
  }
}

