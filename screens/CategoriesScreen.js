import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>This is Categories Screen</Text>
			<Button
				onPress={() => props.navigation.navigate('MealDetails')}
				title='go to details Screen'
			/>
		</View>
	);
};

export default CategoriesScreen;
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
