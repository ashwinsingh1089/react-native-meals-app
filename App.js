import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import store from './store/store';
import { Provider } from 'react-redux';
const fetchFonts = () => {
	Font.loadAsync({
		'open-sans': require('./assets/fonts/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/fonts/OpenSans-Bold.ttf')
	});
};
export default function App() {
	const [fontLoaded, setfontLoaded] = useState(false);
	if (!fontLoaded) {
		return (
			<AppLoading startAsync={fetchFonts} onFinish={() => setfontLoaded(true)} />
		);
	}
	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>
	);
}
