import React from 'react';
import { FlatList } from 'react-native';
import MealItem from './MealItem';

const MealsList = props => {
	const renderMealItem = itemData => (
		<MealItem
			item={itemData.item}
			onMealSelected={() =>
				props.navigation.navigate('MealDetails', { mealId: itemData.item.id })
			}
		/>
	);
	return (
		<FlatList
			keyExtractor={item => item.id}
			data={props.data}
			renderItem={renderMealItem}
		/>
	);
};

export default MealsList;
