import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const insitialState = {
  meals: MEALS,
  favoriteMeals: [],
  filteredMeals: MEALS
};
const mealsReducer = (state = insitialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const { mealId } = action;
      const mealIndex = state.favoriteMeals.findIndex(
        meal => meal.id === mealId
      );

      if (mealIndex === -1) {
        const meal = state.meals.find(meal => meal.id === mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      } else {
        const updatedMeals = [...state.favoriteMeals];
        updatedMeals.splice(mealIndex, 1);
        return { ...state, favoriteMeals: updatedMeals };
      }
    case SET_FILTERS:
      const { appliedFilters } = action;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (!meal.isLactoseFree && appliedFilters.isLactoseFree) {
          return false;
        }
        if (!meal.isVegan && appliedFilters.isVegan) {
          return false;
        }
        if (!meal.isVegetarian && appliedFilters.isVegetarian) {
          return false;
        }
        return true;
      });
      console.log('applied filters', appliedFilters);
      console.log(filteredMeals);
      return { ...state, filteredMeals: [...filteredMeals] };
    default:
      return state;
  }
};
export default mealsReducer;
