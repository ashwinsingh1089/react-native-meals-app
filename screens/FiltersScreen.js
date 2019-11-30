import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const FilterSwitch = props => {
	return (
		<View style={styles.filterContainer}>
			<Text style={styles.filterTitle}>{props.label}</Text>
			<Switch value={props.value} onChange={props.onChange} />
		</View>
	);
};
const FiltersScreen = props => {
	const { navigation } = props;
	const [gluetenFree, setGluetenFree] = useState(true);
	const [vegan, setVegan] = useState(false);
	const [lactoseFree, setLactoseFree] = useState(false);
	const [vegetarian, setVegetarian] = useState(false);
	const filterFunction = useCallback(() => {
		const appliedFilters = {
			gluetenFree,
			vegan,
			lactoseFree,
			vegetarian
		};
		console.log(appliedFilters);
	}, [gluetenFree, vegan, lactoseFree, vegetarian]);
	useEffect(() => {
		navigation.setParams({ save: filterFunction });
	}, [filterFunction]);
	return (
		<View style={{ flex: 1 }}>
			<FilterSwitch
				label='Glueten Free'
				value={gluetenFree}
				onChange={() => setGluetenFree(!gluetenFree)}
			/>
			<FilterSwitch
				label='Vegan'
				value={vegan}
				onChange={() => setVegan(!vegan)}
			/>
			<FilterSwitch
				label='Lactose Free'
				value={lactoseFree}
				onChange={() => setLactoseFree(!lactoseFree)}
			/>
			<FilterSwitch
				label='Vegetarian'
				value={vegetarian}
				onChange={() => setVegetarian(!vegetarian)}
			/>
		</View>
	);
};

export default FiltersScreen;
FiltersScreen.navigationOptions = navigationdata => {
	return {
		headerTitle: 'Filters',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='menu'
					iconName='ios-menu'
					onPress={() => navigationdata.navigation.toggleDrawer()}
				/>
			</HeaderButtons>
		),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title='save'
					iconName='ios-save'
					onPress={navigationdata.navigation.getParam('save')}
				/>
			</HeaderButtons>
		)
	};
};
const styles = StyleSheet.create({
	filterContainer: {
		width: '100%',
		flexDirection: 'row',
		margin: 10,
		marginHorizontal: 10,
		marginVertical: 10,
		justifyContent: 'space-between'
	},
	filterTitle: {
		fontWeight: 'bold',
		textAlign: 'left',
		width: '50%'
	}
});
