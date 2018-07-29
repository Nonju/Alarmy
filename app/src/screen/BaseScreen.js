import React from 'react';
import { View } from 'react-native';
import { getHeader, getBackground } from '../style/theme';

const styles = {
  background: {
    backgroundColor: getBackground(),
    height: '100%',
  },
};

export default class BaseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: typeof(navigation.state.params) === 'undefined' || typeof(navigation.state.params.title) === 'undefined' ? 'find': navigation.state.params.title,
    headerStyle: {
      backgroundColor: getHeader(),
    },
  });
  
  constructor(props) {
    super(props);

    this.state = {
      title: 'BaseScreen',
    };
  }

  componentDidMount() {
    this.setupName();
  }

  setupName = () => {
    const { title = '' } = this.state;
    this.props.navigation.setParams({ title });
  }

  renderContent = () => {
    return <View />;
  }

  render() {
    return (
      // TopView
      <View style={styles.background}>
        {this.renderContent()}
      </View>
    );
  }
}

