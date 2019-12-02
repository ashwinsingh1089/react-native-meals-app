export const TOGGLE_FAVORITE = 'toggle_favorite';
export const SET_FILTERS = 'set_filters';

export const toggle_favorite = id => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const set_filters = appliedFilters => {
  return { type: SET_FILTERS, appliedFilters };
};
