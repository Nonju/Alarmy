import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

import { getWidth } from '../util/screenSize';
import { getWeekDaySelectorSelectedColors } from '../style/theme';
import { getLabelSize, getCapitalLetterSize } from '../style/text';

const styles = StyleSheet.create({
  header: {
    fontSize: getLabelSize(),
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayItem: {
    width: getWidth() / 9,
    padding: 7,
    alignItems: 'center',

    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: getWeekDaySelectorSelectedColors().background,
  },
  dayText: {
    fontSize: getCapitalLetterSize(),
  },
});

export default class WeekDaySelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: new Set(),
    };

    this.weekDays = [
      { weekDay: 0, letter: 'M' },
      { weekDay: 1, letter: 'T' },
      { weekDay: 2, letter: 'W' },
      { weekDay: 3, letter: 'T' },
      { weekDay: 4, letter: 'F' },
      { weekDay: 5, letter: 'S' },
      { weekDay: 6, letter: 'S' },
    ];
  }

  onSelectedChange = day => {
    const { selected } = this.state;
    const { updateCurrentSelection } = this.props;

    if (selected.has(day)) selected.delete(day);
    else selected.add(day);
    this.setState({ selected });
    updateCurrentSelection(Array.from(selected));
  }

  isItemSelected = day => this.state.selected.has(day);

  getItemStyle = day => {
    const itemStyle = { ...StyleSheet.flatten([styles.dayItem]) };
    return this.isItemSelected(day) ?
      { ...itemStyle, backgroundColor: getWeekDaySelectorSelectedColors().background } :
      itemStyle;
  }

  getItemTextStyle = day => {
    const textStyle = { ...StyleSheet.flatten([styles.dayText]) };
    return this.isItemSelected(day) ?
      { ...textStyle, backgroundColor: getWeekDaySelectorSelectedColors().text } :
      textStyle;
  }

  render() {
    const { weekDays } = this;
    const { style = {} } = this.props;
    return (
      <View style={{ ...style }}>
        <Text style={styles.header}>Select weekday</Text>
        <View style={styles.itemContainer}>
          {weekDays.map(day => (
            <TouchableHighlight
              key={Math.random()}
              underlayColor='transparent'
              onPress={() => this.onSelectedChange(day)}
              style={this.getItemStyle(day)}
            >
              <Text style={this.getItemTextStyle()}>{day.letter}</Text>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    );
  }
}

