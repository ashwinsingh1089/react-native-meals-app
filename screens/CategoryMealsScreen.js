import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealsList from '../components/MealsList';

const CategoryMealsScreen = props => {
	const categoryId = props.navigation.getParam('categoryId');
	const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
	if (!meals) {
		return (
			<View>
				<Text>No Meals found for the selected category!</Text>
			</View>
		);
	}
	return <MealsList data={meals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
CategoryMealsScreen.navigationOptions = navigationData => {
	const categoryId = navigationData.navigation.getParam('categoryId');
	const category = CATEGORIES.find(category => category.id === categoryId);
	if (!category) {
		return {};
	}
	return {
		headerTitle: category.title
	};
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	gridItem: {
		flex: 1,
		margin: 10,
		height: 150
	}
});
