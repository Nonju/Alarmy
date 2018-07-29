import React from 'react';
import { View, Text, Switch, TouchableHighlight } from 'react-native';
import { getListItemBackground } from '../style/theme';

const sidePadding = 5;
const styles = {
  topView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 5,
    padding: 10,

    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: getListItemBackground(),
  },
  title: {
    width: '85%',
    justifyContent: 'center',
    paddingLeft: sidePadding,
  },
  titleText: {
    fontSize: 18,
  },
  switchBox: {
    width: '15%',
    paddingRight: sidePadding,
  },
};

export default class AlarmListItem extends React.Component {
  constructor(props) {
    super(props);

    const { data } = props;
    this.state = { active: !!data.activated };
  }

  toggleAlarmActiveState = newValue => {
    this.setState({ active: newValue });
  }

  onClick = () => {
    // Todo: Navigate to 'screen/AlarmItem'
  }

  render() {
    const { title = 'No title' } = this.props.data;
    const { active } = this.state;
    return (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={() => this.onClick()}
        >
        <View style={styles.topView}>
          <View style={styles.title}>
            {/* Todo: Add 'Alarm' icon before title */}
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.switchBox}>
            <Switch
              // disabled={false}
              value={active}
              onValueChange={this.toggleAlarmActiveState}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

