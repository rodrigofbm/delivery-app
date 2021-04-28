import React from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';

import FoodCard from '../components/food-card';
import foods from '../commom/foods.json';

const Main = () => {
  const displayCard = ({item}) => {
    return (
      <View style={{marginLeft: 10}}>
        <FoodCard
          key={item.id}
          name={item.name}
          pictureUrl={item.pictureUrl}
          price={item.price}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, marginTop: 20}}>
        <FlatList
          horizontal
          style={{flex: 1, marginLeft: 10}}
          data={foods}
          renderItem={displayCard}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default Main;