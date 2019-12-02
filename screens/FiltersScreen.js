import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { set_filters } from '../store/actions/meals';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>{props.label}</Text>
      <Switch
        trackColor={Colors.primaryColor}
        //ios_backgroundColor={Colors.primaryColor}
        //thumbColor={Colors.accentColor}
        //onTintColor={Colors.primaryColor}
        value={props.value}
        onChange={props.onChange}
      />
    </View>
  );
};
const FiltersScreen = props => {
  const { navigation } = props;
  const [isGluetenFree, setGluetenFree] = useState(true);
  const [isVegan, setVegan] = useState(false);
  const [islLctoseFree, setLactoseFree] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);
  const dispatch = useDispatch();
  const filterFunction = useCallback(() => {
    const appliedFilters = {
      isGluetenFree,
      isVegan,
      islLctoseFree,
      isVegetarian
    };
    dispatch(set_filters(appliedFilters));
  }, [isGluetenFree, isVegan, islLctoseFree, isVegetarian]);
  useEffect(() => {
    navigation.setParams({ save: filterFunction });
  }, [filterFunction]);
  return (
    <View style={styles.screen}>
      <FilterSwitch
        label='Glueten Free'
        value={isGluetenFree}
        onChange={() => setGluetenFree(!isGluetenFree)}
      />
      <FilterSwitch
        label='Vegan'
        value={isVegan}
        onChange={() => setVegan(!isVegan)}
      />
      <FilterSwitch
        label='Lactose Free'
        value={islLctoseFree}
        onChange={() => setLactoseFree(!islLctoseFree)}
      />
      <FilterSwitch
        label='Vegetarian'
        value={isVegetarian}
        onChange={() => setVegetarian(!isVegetarian)}
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
  screen: {
    flex: 1,
    margin: 10,
    alignItems: 'center'
  },
  filterContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  filterTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    width: '50%'
  }
});
