import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FoodCard = ({name, price, pictureUrl}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={{height: '100%', borderTopRightRadius: 20, borderTopLeftRadius: 20}}
          source={{
            uri: pictureUrl,
          }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={{flex:1, marginLeft: 4}}>
          <Text style={{fontSize: 16}}>{name}</Text>
        </View>
        <View style={{flex:1, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 4}}>
          <Text style={{fontSize: 14}}>R$ {price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 2,
  },
  bodyContainer: {
    flex: 1
  }
});

export default FoodCard;