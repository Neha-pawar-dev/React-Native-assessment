import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ProductDetailsScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.description}>
          {props.currentItemDetails.description}
        </Text>
        <Image
          source={props.currentItemDetails.image}
          style={styles.subCategoryImage}
        />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.textStyle}>{props.currentItemDetails.price}</Text>
        <Text style={styles.textStyle}>
          {props.currentItemDetails.quantity}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+ Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    width: '90%',
    padding: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  description: {
    marginRight: 10,
    width: '70%',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  textStyle: {
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subCategoryItem: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
  },
  subCategoryName: {marginTop: 8, fontSize: 16, color: '#333'},
  subCategoryImage: {width: 80, height: 80, resizeMode: 'contain'},
  row: {justifyContent: 'space-between'},
  button: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
