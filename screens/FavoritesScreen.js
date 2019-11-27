import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
	const meals = MEALS;
	return <MealsList data={meals} navigation={props.navigation} />;
};

export default FavoritesScreen;
FavoritesScreen.navigationOptions = {
	headerTitle: 'Favorites'
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
