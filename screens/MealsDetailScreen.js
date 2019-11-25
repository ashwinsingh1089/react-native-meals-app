import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealsDetailScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>This meals Details Screen</Text>
		</View>
	);
};

export default MealsDetailScreen;
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
