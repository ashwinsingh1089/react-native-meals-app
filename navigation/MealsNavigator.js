import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealsDetailScreen from '../screens/MealsDetailScreen';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#fff'
	},
	headerTintColor: Platform.OS === 'android' ? '#fff' : '#000'
};

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
			navigationOptions: {
				headerTitle: 'Categories!!'
			}
		},
		CategoryMeals: {
			screen: CategoryMealsScreen
		},
		MealDetails: MealsDetailScreen
	},
	{
		defaultNavigationOptions
	}
);
const FavNavigator = createStackNavigator(
	{
		Favorites: {
			screen: FavoritesScreen

			// navigationOptions: {
			// 	tabBarIcon: tabinfo => {
			// 		return <Ionicons name='ios-star' size={25} color={tabinfo.tintColor} />;
			// 	},
			// 	tabBarLabel: 'Favorites!!',
			// 	tabBarColor: Colors.accentColor
			// }
		},
		MealDetails: MealsDetailScreen
	},
	{
		defaultNavigationOptions
	}
);
const routeConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: tabinfo => (
				<Ionicons name='ios-restaurant' size={25} color={tabinfo.tintColor} />
			)
		}
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarIcon: tabinfo => (
				<Ionicons name='ios-star' size={25} color={tabinfo.tintColor} />
			),
			tabColor: Colors.accentColor
		}
	}
};

const MealsFavTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(routeConfig, {
				shifting: true
				//activeColor: Colors.accentColor
		  })
		: createBottomTabNavigator(routeConfig, {
				tabBarOptions: {
					activeTintColor: Colors.accentColor
				}
		  });
const FilterNavigator = createStackNavigator(
	{
		filters: FiltersScreen
	},
	{
		defaultNavigationOptions
	}
);
const MainNavigator = createDrawerNavigator(
	{
		MealsFav: {
			screen: MealsFavTabNavigator,
			navigationOptions: {
				headerTitle: 'Meals'
			}
		},
		filters: FilterNavigator
	},
	{
		contentOptions: {
			activeTintColor: Colors.accentColor
		}
	}
);

export default createAppContainer(MainNavigator);
