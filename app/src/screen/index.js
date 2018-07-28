/*
	https://reactnavigation.org/docs/getting-started.html
*/
import { StackNavigator } from 'react-navigation';

import MainScreen from './MainScreen';

export default StackNavigator({
		Main: {
			screen: MainScreen,
		},
		// BtConnect: {
		//   screen: BtConnectScreen,
		// },
	},
	{
		initialRouteName: 'Main',
	}
);
