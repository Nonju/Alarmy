import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import BaseScreen from './BaseScreen';
import WeekDaySelector from '../component/WeekDaySelector';
import TimePicker from '../component/TimePicker'; // Todo: Use
import { getLabelSize } from '../style/text';

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  topView: {
    margin: 10,
  },
  name: { // Possible Todo: Make equivalent to css 'display: inline-block'
    fontSize: getLabelSize(),
  },
  weekDay: {}, // Todo: Remove if remains unused
  bottomView: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
});

export default class AlarmItemCreateScreen extends BaseScreen {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Create new',
      name: '',
      selectedDays: [],
    };
  }

  updateName = text => this.setState({ name: text })
  updateSelectedDays = selectedDays => this.setState({ selectedDays })

  save = () => {
    console.log('Saving alarm');
  }

  renderContent = () => {
    const { name } = this.state;
    return (
      <View style={styles.containerView}>
        <View style={styles.topView}>
          <View>
            <Text style={styles.name}>Name:</Text>
            <TextInput
              onChangeText={text => this.updateName(text)}
              value={name}
              placeholder='Enter name!'
            />
          </View>
          <WeekDaySelector
            style={StyleSheet.flatten([styles.weekDay])}
            updateCurrentSelection={selectedDays => this.updateSelectedDays(selectedDays)}
          />
        </View>
        <View style={styles.bottomView}>
          <Button
            title='Save'
            onPress={() => this.save()}
          />
        </View>
      </View>
    );
  }
}

