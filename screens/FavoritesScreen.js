import React from 'react';
import MealsList from '../components/MealsList';
import { useSelector } from 'react-redux';
const FavoritesScreen = props => {
  const meals = useSelector(state => state.meals.favoriteMeals);
  return <MealsList data={meals} navigation={props.navigation} />;
};

export default FavoritesScreen;
FavoritesScreen.navigationOptions = {
  headerTitle: 'Favorites'
};
