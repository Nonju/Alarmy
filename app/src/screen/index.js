/*
	https://reactnavigation.org/docs/getting-started.html
*/
import { StackNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import AlarmItemScreen from './AlarmItemScreen';

export default StackNavigator({
    Main: {
      screen: MainScreen,
    },
    AlarmItem: {
      screen: AlarmItemScreen,
    },
	},
	{
		initialRouteName: 'Main',
	}
);
