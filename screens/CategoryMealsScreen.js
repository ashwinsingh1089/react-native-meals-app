import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryMealsScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>This is CategoryMealsScreen</Text>
		</View>
	);
};

export default CategoryMealsScreen;
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
