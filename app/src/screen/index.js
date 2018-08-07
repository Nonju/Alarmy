/*
	https://reactnavigation.org/docs/getting-started.html
*/
import { StackNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import AlarmItemScreen from './AlarmItemScreen';
import AlarmItemCreateScreen from './AlarmItemCreateScreen';

export default StackNavigator({
    Main: {
      screen: MainScreen,
    },
    AlarmItem: {
      screen: AlarmItemScreen,
    },
    AlarmItemCreate: {
      screen: AlarmItemCreateScreen,
    },
	},
	{
		initialRouteName: 'Main',
	}
);
