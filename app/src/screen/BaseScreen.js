import React from 'react';
import { View } from 'react-native';

import themeStyle from '../style/theme';

export default class BaseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? 'find': navigation.state.params.title,
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

  setupName() {
    const { title = '' } = this.state;
    this.props.navigation.setParams({ title });
  }

  renderContent() {
    return <View />;
  }

  render() {
    // Todo: Apply 'themeStyle' to topView
    return (
      <View> {/* TopView */}
        {this.renderContent()}
      </View>
    );
  }
}

