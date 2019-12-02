import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList';
import { useSelector } from 'react-redux';
const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');
  const meals = useSelector(state => state.meals.filteredMeals);
  const selectedMeals = meals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
  if (!selectedMeals) {
    return (
      <View>
        <Text>No Meals found for the selected category!</Text>
      </View>
    );
  }
  return <MealsList data={selectedMeals} navigation={props.navigation} />;
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
