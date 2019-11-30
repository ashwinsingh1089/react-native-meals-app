import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const MealsDetailScreen = props => {
	const mealId = props.navigation.getParam('mealId');
	const meal = MEALS.find(meal => meal.id === mealId);

	return (
		<ScrollView>
			<View>
				<MealItem item={meal} onMealSelected={() => {}} />
				<Text>ingredients:</Text>
				<FlatList
					data={meal.ingredients}
					keyExtractor={item => item}
					renderItem={itemData => <Text>{itemData.item}</Text>}
				/>
				<Text>Steps:</Text>
				<FlatList
					data={meal.steps}
					keyExtractor={item => item}
					renderItem={itemData => <Text>{itemData.item}</Text>}
				/>
			</View>
		</ScrollView>
	);
};

export default MealsDetailScreen;
MealsDetailScreen.navigationOptions = navigationData => {
	const mealId = navigationData.navigation.getParam('mealId');
	const meal = MEALS.find(meal => meal.id === mealId);
	if (!meal) {
		return {};
	}
	return {
		headerTitle: meal.title,
		headerRight: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='favorite'
					iconName='ios-star'
					onPress={() => console.log('icon pressed!')}
				/>
			</HeaderButtons>
		)
	};
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
