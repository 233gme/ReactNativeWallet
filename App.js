import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './screens';
import Tabs from './navigator/tabs';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
				<Stack.Screen options={{headerShown: false}} name="Home" component={Tabs}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
