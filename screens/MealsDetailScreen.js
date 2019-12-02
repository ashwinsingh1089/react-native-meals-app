import React, { useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';
import { useSelector, useDispatch } from 'react-redux';
import { toggle_favorite } from '../store/actions/meals';

const MealsDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const meals = useSelector(state => state.meals.meals);
  const meal = meals.find(meal => meal.id === mealId);
  const dispatch = useDispatch();
  const toggleFavorite = useCallback(() => {
    //console.log('works');
    dispatch(toggle_favorite(mealId));
  }, [mealId]);
  useEffect(() => {
    props.navigation.setParams({
      mealTitle: meal.title,
      toggleFavorite: toggleFavorite
    });
  }, [mealId]);

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
    headerTitle: navigationData.navigation.getParam('mealTitle'),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='favorite'
          iconName='ios-star'
          onPress={navigationData.navigation.getParam('toggleFavorite')}
        />
      </HeaderButtons>
    )
  };
};
