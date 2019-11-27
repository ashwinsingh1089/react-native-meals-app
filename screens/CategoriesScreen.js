import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	FlatList,
	Platform
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import GridCategoryTile from '../components/GridCategoryTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
	const renderGridItem = itemData => {
		return (
			<GridCategoryTile
				item={itemData.item}
				onItemPress={() =>
					props.navigation.navigate('CategoryMeals', {
						categoryId: itemData.item.id
					})
				}
			/>
		);
	};
	return (
		<FlatList
			keyExtractor={item => item.id}
			numColumns={2}
			data={CATEGORIES}
			renderItem={renderGridItem}
		/>
	);
};
CategoriesScreen.navigationOptions = navigationData => {
	return {
		headerTitle: 'Meal Categories',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='menu'
					iconName='ios-menu'
					onPress={() => navigationData.navigation.toggleDrawer()}
				/>
			</HeaderButtons>
		)
	};
};
export default CategoriesScreen;
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
