import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>This is Favorites Screen</Text>
		</View>
	);
};

export default FavoritesScreen;
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
